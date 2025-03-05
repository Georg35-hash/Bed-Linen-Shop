export default function parallax() {
  const hero = document.querySelector(".hero__content"); // container
  const img = document.querySelector(".hero__img"); // my pillow
  const bg = document.querySelector(".hero__background"); // bg

  if (!hero || !img || !bg) return;

  let mouseX = 0,
    mouseY = 0;
  let targetX = 0,
    targetY = 0;
  let isMoving = false;
  let lastTime = 0;

  function updateParallax(timestamp) {
    if (timestamp - lastTime < 16) {
      requestAnimationFrame(updateParallax);
      return;
    }
    lastTime = timestamp;

    targetX += (mouseX - targetX) * 0.2;
    targetY += (mouseY - targetY) * 0.2;

    img.style.transform = `translate3d(${-targetX}px, ${-targetY}px, 0)`;
    bg.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

    if (Math.abs(mouseX - targetX) > 0.1 || Math.abs(mouseY - targetY) > 0.1) {
      requestAnimationFrame(updateParallax);
    } else {
      isMoving = false;
    }
  }

  function onMouseMove(e) {
    const { width, height, left, top } = hero.getBoundingClientRect();
    mouseX = (e.clientX - left - width / 2) / 10; // Снизил интенсивность
    mouseY = (e.clientY - top - height / 2) / 10;

    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updateParallax);
    }
  }

  function onMouseLeave() {
    mouseX = 0;
    mouseY = 0;
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updateParallax);
    }
  }

  hero.addEventListener("mousemove", throttle(onMouseMove, 16));
  hero.addEventListener("mouseleave", onMouseLeave);
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
