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

// others
export function sidebarNaviCatalogue() {
  // Get all sidebar
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const windows = document.querySelectorAll(".catalogue__slider-content");

  // Init of windows
  let currentIndex = 0;
  windows.forEach((win, index) => {
    win.style.display = index === currentIndex ? "block" : "none";
  });

  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetWindowId = item.getAttribute("data-window");
      const targetWindow = document.getElementById(targetWindowId);

      if (targetWindow) {
        windows.forEach((win) => (win.style.display = "none"));

        currentIndex = Array.from(windows).indexOf(targetWindow);
        targetWindow.style.display = "block";
      }
    });
  });

  // Listner click on the arrow
  const navArrow = document.querySelector(".arrow-down");
  if (navArrow) {
    navArrow.addEventListener("click", () => {
      windows[currentIndex].style.display = "none";

      currentIndex = currentIndex % windows.length;

      windows[currentIndex].style.display = "block";
    });
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
