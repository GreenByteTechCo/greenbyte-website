// ── GREENBYTE TECH CO — shared.js v2 ──

// Nav scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.addEventListener('click', e => {
  const menu = document.getElementById('mobileMenu');
  const burger = document.querySelector('.nav-burger');
  if (menu?.classList.contains('open') && !menu.contains(e.target) && !burger?.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Active nav link highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// Scroll reveal with stagger
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
