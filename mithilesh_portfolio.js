const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 0.1 + 's';
  observer.observe(el);
});
