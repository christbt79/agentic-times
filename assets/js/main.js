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

// Feed tickers (news + model) — set a steady, slow left-scroll speed based on
// width. Each track holds two copies of its list and animates translateX(-50%),
// so duration = (one copy's width) / speed keeps the pace identical on both.
(function tickers() {
  const tracks = Array.prototype.slice.call(document.querySelectorAll('.mf-track'));
  if (!tracks.length) return;
  const SPEED = 40; // pixels per second (lower = slower)
  const nav = document.querySelector('.masthead-right .main-nav');
  const feeds = Array.prototype.slice.call(
    document.querySelectorAll('.masthead-right .model-feed')
  );
  const desktop = window.matchMedia('(min-width: 768px)');

  function update() {
    // Match each ticker's width to the nav so their left edges line up with
    // the first nav item. Definite px width (not %) keeps the marquee clipped.
    if (nav && desktop.matches) {
      const w = nav.offsetWidth;
      feeds.forEach(function (f) { f.style.width = w + 'px'; });
    } else {
      feeds.forEach(function (f) { f.style.width = ''; });
    }
    tracks.forEach(function (track) {
      const half = track.scrollWidth / 2;
      if (half > 0) track.style.setProperty('--mf-duration', (half / SPEED) + 's');
    });
  }

  update();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(update);
  }
  window.addEventListener('resize', update);
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
