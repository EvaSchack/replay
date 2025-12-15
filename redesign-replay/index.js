// Små interaktive effekter til forsiden

const addScrollAnimations = () => {
  const animated = document.querySelectorAll(
    ".hero, .step-card, .instagram-feed, .store-steps"
  );

  animated.forEach((el) => el.classList.add("animate-on-scroll"));

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    animated.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animated.forEach((el) => observer.observe(el));
};

// Init på DOM load
document.addEventListener("DOMContentLoaded", () => {
  addScrollAnimations();
});
