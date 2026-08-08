// Smooth scroll effect
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Hero text animation
const heroText = document.querySelector('.hero h1');
heroText.style.opacity = 0;
setTimeout(() => {
  heroText.style.transition = "opacity 2s";
  heroText.style.opacity = 1;
}, 500);
