/* Theme JS wrapper: replicate simple sidebar toggle behavior so root theme pages work */
window.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('sidebarToggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
    });
  }
});
