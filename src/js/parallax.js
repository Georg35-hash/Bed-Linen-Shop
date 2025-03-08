export default function parallax() {
  const hero = document.querySelector(".hero__content");
  const img = document.querySelector(".hero__img");
  const bg = document.querySelector(".hero__background");

  if (!hero || !img || !bg) return;

  let mouseX = 0,
    mouseY = 0;
  let targetX = 0,
    targetY = 0;

  img.style.willChange = "transform";
  bg.style.willChange = "transform";

  function updateParallax() {
    targetX += (mouseX - targetX) * 0.1;
    targetY += (mouseY - targetY) * 0.1;
    img.style.transform = `translate3d(${-targetX}px, ${-targetY}px, 0)`;
    bg.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

    if (Math.abs(mouseX - targetX) > 0.1 || Math.abs(mouseY - targetY) > 0.1) {
      requestAnimationFrame(updateParallax);
    }
  }

  function onMouseMove(e) {
    const { width, height, left, top } = hero.getBoundingClientRect();
    mouseX = (e.clientX - left - width / 2) / 15;
    mouseY = (e.clientY - top - height / 2) / 15;
    requestAnimationFrame(updateParallax);
  }

  function onMouseLeave() {
    mouseX = 0;
    mouseY = 0;
    targetX = 0;
    targetY = 0;
    requestAnimationFrame(updateParallax);
  }

  const throttledOnMouseMove = throttle(onMouseMove, 10);

  // function for adding or deleting depends of condition
  function attachListeners() {
    if (window.matchMedia("(pointer: fine)").matches) {
      hero.addEventListener("mousemove", throttledOnMouseMove);
      hero.addEventListener("mouseleave", onMouseLeave);
    } else {
      hero.removeEventListener("mousemove", throttledOnMouseMove);
      hero.removeEventListener("mouseleave", onMouseLeave);
    }
  }

  attachListeners();

  // reinit Listner
  window.addEventListener("resize", attachListeners);
}

function throttle(callback, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
}
