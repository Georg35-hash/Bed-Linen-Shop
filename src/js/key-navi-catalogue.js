//  export default
export default function KeyNaviCatalogue() {
  const inputs = document.getElementsByTagName("input");
  const slides = Array.from(inputs).filter(
    (input) => input.type === "radio" && input.name === "slider"
  );
  let currentSlide = Array.from(slides).findIndex((slide) => slide.checked);

  function updateSlide(index) {
    if (index >= 0 && index < slides.length) {
      slides[index].checked = true;
      currentSlide = index;
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      const nextSlide = (currentSlide + 1) % slides.length;
      updateSlide(nextSlide);
    } else if (event.key === "ArrowLeft") {
      const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlide(prevSlide);
    }
  });
}

// Обычные экспорты для других функций
export function sidebarNaviCatalogue() {
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const windows = document.querySelectorAll(".catalogue__slider-content");

  const win2 = document.getElementById("window2");
  const win3 = document.getElementById("window3");
  const win4 = document.getElementById("window4");

  if (win2) win2.style.display = "none";
  if (win3) win3.style.display = "none";
  if (win4) win4.style.display = "none";

  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetWindow = document.getElementById(
        item.getAttribute("data-window")
      );
      // Скрыть все окна
      windows.forEach((window) => (window.style.display = "none"));
      // Показать выбранное окно
      if (targetWindow) {
        targetWindow.style.display = "block";
      }
    });
  });

  const windowsArrow = document.querySelectorAll(".catalogue__slider-content");
  const navArrow = document.querySelector(".arrow-down"); // Кнопка стрелки
  let currentIndex = 0;
  function switchWindow() {
    // Скрыть текущее окно
    windowsArrow[currentIndex].style.display = "none";
    // Рассчитать индекс текущего окна
    currentIndex = (currentIndex + 1) % windowsArrow.length;
    // Показать следующее окно
    windowsArrow[currentIndex].style.display = "block";
  }

  if (navArrow) {
    navArrow.addEventListener("click", switchWindow);
  }
}

export function sidebarNaviBlog() {
  document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");
    const slides = document.querySelectorAll(".blog-slider__content");
    const points = document.querySelectorAll(
      ".blog-slider__points .blog-slider__item"
    );
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
      slides[index].style.display = "flex";

      points.forEach((point, i) => {
        if (i === index) {
          point.setAttribute("src", "./assets/blog/point-with-fill.svg");
        } else {
          point.setAttribute("src", "./assets/blog/without-fill.svg");
        }
      });
    }

    showSlide(currentSlide);

    nextButton.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    prevButton.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      } else if (e.key === "ArrowLeft") {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }
    });
  });
}

export function openBurgerMenu() {
  document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openButton");
    const navMenu = document.getElementById("navMenu");

    openButton.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      openButton.classList.toggle("active");

      if (!navMenu.classList.contains("active")) {
        navMenu.scrollTop = 0;
      }
    });

    document.addEventListener("click", function (event) {
      if (
        !navMenu.contains(event.target) &&
        !openButton.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        openButton.classList.remove("active");
        navMenu.scrollTop = 0;
      }
    });
  });
}
