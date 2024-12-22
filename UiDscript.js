// Sticky Header Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = '#e94560';
  } else {
    header.style.background = '#1b4965';
  }
});

// Smooth Scroll for Links (Optional)
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  });
});

