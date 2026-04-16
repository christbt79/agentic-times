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
    link.classList.remove('active');
  });

  let matched = false;

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Normalise both to compare cleanly
    const normHref = href.replace(/\/$/, '');
    const normPath = path.replace(/\/$/, '');

    // Exact match for non-root pages
    if (normHref !== '' && normHref !== '/agentic-times' && normPath === normHref) {
      link.classList.add('active');
      matched = true;
    }

    // Section match — path starts with this href (for sub-pages within a section)
    if (normHref !== '' && normHref !== '/agentic-times' && normPath.startsWith(normHref + '/')) {
      link.classList.add('active');
      matched = true;
    }
  });

  // Only highlight Front Page if nothing else matched
  if (!matched) {
    const frontPage = document.querySelector('.nav-link[href="{{ "/" | relative_url }}"], .nav-link:first-child');
    if (frontPage) frontPage.classList.add('active');
  }
})();
