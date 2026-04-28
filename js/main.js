/* WoknRolls — interactions */

// Année footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal au scroll (IntersectionObserver — pas de dépendance)
const reveals = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Délai staggeré léger sur les groupes
        const delay = entry.target.dataset.delay || (i % 4) * 80;
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-visible'));
}

// Nav : background plus opaque après scroll
const nav = document.querySelector('.nav');
let lastY = 0;
const onScroll = () => {
  const y = window.scrollY;
  if (y > 40) nav.style.background = 'rgba(14,14,14,.92)';
  else nav.style.background = '';
  lastY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });

// Smooth scroll pour les ancres internes (avec offset nav)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
