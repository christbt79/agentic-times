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

// Model feed ticker — cycle through the latest model releases
(function modelFeed() {
  const items = Array.prototype.slice.call(
    document.querySelectorAll('#model-feed-body .mf-item')
  );
  if (items.length < 2) return;
  let i = 0;
  setInterval(function () {
    items[i].classList.remove('active');
    i = (i + 1) % items.length;
    items[i].classList.add('active');
  }, 3800);
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
