// Nav scroll
window.addEventListener("scroll", () => {
  document.getElementById("nav").style.boxShadow =
    window.scrollY > 20 ? "0 4px 30px rgba(0,0,0,.6)" : "none";
});

// Menu mobile
document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-mobile").classList.toggle("aberto");
});
document.querySelectorAll(".nav-mobile a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("nav-mobile").classList.remove("aberto"));
});

// Reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); obs.unobserve(e.target); } });
}, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
setTimeout(() => document.querySelectorAll(".reveal").forEach(el => el.classList.add("show")), 1500);

// Stagger cards
const obsCards = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll(".pilar").forEach((c, i) => {
        c.style.opacity = "0"; c.style.transform = "translateY(20px)";
        c.style.transition = `opacity .5s ease ${i*.1}s, transform .5s ease ${i*.1}s`;
        setTimeout(() => { c.style.opacity = "1"; c.style.transform = "translateY(0)"; }, 50);
      });
      obsCards.unobserve(e.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll(".pilares-grid").forEach(el => obsCards.observe(el));
