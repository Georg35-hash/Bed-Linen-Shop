export function scroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("start-animation");
        } else {
          entry.target.classList.remove("start-animation");
        }
      });
    },
    { threshold: 0.5 }
  );
  elements.forEach((el) => observer.observe(el));
}
