// Theme toggle
(function() {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.classList.add('dark');
  const btn = document.getElementById('themeToggle');
  if (btn) {
    const setLabel = () => btn.setAttribute('aria-pressed', root.classList.contains('dark'));
    btn.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
      setLabel();
    });
    setLabel();
  }
})();

// Mobile nav
(function() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
})();

// Fill current year
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

// Contact form (no backend). Shows a friendly message.
function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  const status = document.getElementById('status');
  if (!data.name || !data.email || !data.message) {
    status.textContent = 'Please fill out all fields.';
    return false;
  }
  status.textContent = 'Thanks! Your message is ready to send from your email client.';
  const body = encodeURIComponent(data.message + '\n\n— ' + data.name);
  const mailto = `mailto:you@example.com?subject=Portfolio%20contact%20from%20${encodeURIComponent(data.name)}&body=${body}`;
  window.location.href = mailto;
  form.reset();
  return false;
}
