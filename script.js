// ============================================================
// TIJARAT DIGITAL MARKETING AGENCY — Shared Script
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* --- Sticky header background on scroll --- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- Mobile nav toggle --- */
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', () => document.body.classList.remove('nav-open'));
    });
  }

  /* --- Generate hero skyline silhouette --- */
  const skyline = document.querySelector('.skyline');
  if (skyline) {
    const heights = [60, 110, 80, 150, 95, 180, 70, 130, 100, 160, 85, 120, 65, 145, 90, 170, 75, 125];
    heights.forEach((h, i) => {
      const bldg = document.createElement('div');
      bldg.className = 'bldg';
      bldg.style.height = h + 'px';
      bldg.style.animationDelay = (i * 0.05) + 's';
      skyline.appendChild(bldg);
    });
  }

  /* --- Scroll reveal --- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

});
