// Scroll reveal
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('in'));
}

// Gentle parallax on the moon (skipped for reduced motion)
const moon = document.querySelector('.moon');
if (moon && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addEventListener('scroll', () => {
    moon.style.marginTop = Math.min(scrollY * 0.06, 30) + 'px';
  }, { passive: true });
}

// Random twinkling stars in the arch
const arch = document.querySelector('.arch');
if (arch) {
  for (let i = 0; i < 6; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    s.textContent = i % 2 ? '✦' : '✧';
    s.style.left = 8 + Math.random() * 84 + '%';
    s.style.top = 6 + Math.random() * 40 + '%';
    s.style.fontSize = 8 + Math.random() * 8 + 'px';
    s.style.animationDelay = Math.random() * 3 + 's';
    arch.appendChild(s);
  }
}
