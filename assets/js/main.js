// The Agentic Times — main.js

// Set current date in the top status bar: e.g. "SAT 20.06.2026"
(function setDate() {
  const el = document.getElementById('current-date');
  if (!el) return;
  const d = new Date();
  const wd = d.toLocaleDateString('en-GB', { weekday: 'short' }).toUpperCase();
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  el.textContent = `${wd} ${dd}.${mm}.${d.getFullYear()}`;
})();

// Highlight the active nav link based on the current URL
(function setActiveNav() {
  const links = document.querySelectorAll('.main-nav a');
  const path = window.location.pathname.replace(/\/$/, '');
  links.forEach((link) => {
    const href = link.getAttribute('href').replace(/\/$/, '');
    if (!href) return;
    if (path === href || path.startsWith(href + '/')) {
      link.classList.add('active');
    }
  });
})();

// Model feed ticker — set a steady, slow left-scroll speed based on width.
// The track contains two copies of the list and animates translateX(-50%),
// so duration = (one copy's width) / speed keeps the pace constant.
(function modelFeed() {
  const track = document.getElementById('model-feed-track');
  if (!track) return;
  const SPEED = 40; // pixels per second (lower = slower)
  function setDuration() {
    const half = track.scrollWidth / 2;
    if (half > 0) track.style.setProperty('--mf-duration', (half / SPEED) + 's');
  }
  setDuration();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setDuration);
  }
  window.addEventListener('resize', setDuration);
})();

// Light/dark theme toggle — default is LIGHT
(function themeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  toggle.addEventListener('click', function () {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
})();
