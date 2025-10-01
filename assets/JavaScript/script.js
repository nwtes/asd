// Smooth scrolling animation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href')?.slice(1);
    const el = targetId ? document.getElementById(targetId) : null;
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile nav if open
      const nav = document.getElementById('navMenu');
      if (nav && nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    }
  });
});
// Mobile nav toggle (no Bootstrap CSS)
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
})();
