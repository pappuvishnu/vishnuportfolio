// Simple smooth scroll for future links (if you add navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: Add a subtle animation on load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});