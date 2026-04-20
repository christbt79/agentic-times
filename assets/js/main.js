// The Agentic Times — main.js

// Set current date in top bar
(function setDate() {
  const el = document.getElementById('current-date');
  if (!el) return;
  const d = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  el.textContent = d.toLocaleDateString('en-GB', options).toUpperCase();
})();

// Highlight active nav link based on current URL
(function setActiveNav() {
  const links = document.querySelectorAll('.nav-link');
  const path = window.location.pathname.replace(/\/$/, '');
  const base = '/agentic-times';

  links.forEach(link => link.classList.remove('active'));

  let matched = false;

  links.forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '');
    if (href === base || href === '') return;
    if (path === href || path.startsWith(href + '/')) {
      link.classList.add('active');
      matched = true;
    }
  });

  if (!matched) {
    links[0].classList.add('active');
  }
})();

// Dark mode toggle
(function darkMode() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

// Apply saved preference, default to dark
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggle.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
})();
