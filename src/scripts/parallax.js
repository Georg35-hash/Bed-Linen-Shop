export default function parallax() {
  const hero = document.querySelector(".hero");
  const img = document.querySelector(".hero__img");
  const bg = document.querySelector(".hero__background");

  if (hero && img && bg) {
    const br = bg.offsetWidth / 2;

    img.style.transition = "transform 0.5s ease-out";
    bg.style.transition = "transform 0.5s ease-out";

    hero.addEventListener("mousemove", (event) => {
      const x = (br - event.clientX) / 10;
      const y = -event.clientY / 10;
      applyTransform(x, y);
    });

    hero.addEventListener("mouseleave", () => {
      applyTransform(0, 0);
    });

    function applyTransform(x, y) {
      img.style.transform = `translate(${x}px, ${y}px)`;
      bg.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
    }
  }
}
