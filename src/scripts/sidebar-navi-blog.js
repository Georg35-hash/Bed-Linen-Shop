export function sidebarNaviBlog() {
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
}
