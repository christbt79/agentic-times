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
  const path = window.location.pathname;
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === '/' && path === '/') {
      link.classList.add('active');
    } else if (href !== '/' && path.startsWith(href)) {
      link.classList.add('active');
    }
  });
})();
