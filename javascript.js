document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkToggle');

  // Set initial button text
  toggle.textContent = document.body.classList.contains('dark')
    ? '☀️ Light Mode'
    : '🌙 Dark Mode';

  // Add click event
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark')
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';
  });
});