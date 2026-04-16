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

  // Clear all first
  links.forEach(link => link.classList.remove('active'));

  let matched = false;

  links.forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '');

    // Skip the front page link in this pass
    if (href === base || href === '') return;

    // Active if current path matches or starts with this section
    if (path === href || path.startsWith(href + '/')) {
      link.classList.add('active');
      matched = true;
    }
  });

  // If nothing matched, we're on the front page — highlight it
  if (!matched) {
    links[0].classList.add('active');
  }
})();
