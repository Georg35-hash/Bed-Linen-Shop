export default function parallax() {
  const hero = document.querySelector(".hero__content");
  const img = document.querySelector(".hero__img");
  const bg = document.querySelector(".hero__background");

  if (!hero || !img || !bg) return;

  let mouseX = 0,
    mouseY = 0;
  let targetX = 0,
    targetY = 0;
  let lastTime = 0;

  // Установим начальные стили для оптимизации
  img.style.willChange = "transform";
  bg.style.willChange = "transform";

  function updateParallax() {
    targetX += (mouseX - targetX) * 0.1;
    targetY += (mouseY - targetY) * 0.1;

    img.style.transform = `translate3d(${-targetX}px, ${-targetY}px, 0)`;
    bg.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

    // Если нужно продолжить анимацию, снова вызываем updateParallax
    if (Math.abs(mouseX - targetX) > 0.1 || Math.abs(mouseY - targetY) > 0.1) {
      requestAnimationFrame(updateParallax);
    }
  }

  function onMouseMove(e) {
    const { width, height, left, top } = hero.getBoundingClientRect();
    mouseX = (e.clientX - left - width / 2) / 10;
    mouseY = (e.clientY - top - height / 2) / 10;

    // Запускаем анимацию каждый раз при движении мыши
    requestAnimationFrame(updateParallax);
  }

  function onMouseLeave() {
    mouseX = 0;
    mouseY = 0;
    targetX = 0; // сбрасываем targetX и targetY
    targetY = 0;
    requestAnimationFrame(updateParallax); // Запускаем анимацию, чтобы элементы вернулись в начальное положение
  }

  if (window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("mousemove", throttle(onMouseMove, 10));
    hero.addEventListener("mouseleave", onMouseLeave);
  } else {
    hero.removeEventListener("mousemove", throttle(onMouseMove, 10));
    hero.removeEventListener("mouseleave", onMouseLeave);
  }
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
