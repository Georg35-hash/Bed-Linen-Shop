export function keyNaviCatalogue() {
  const inputs = document.querySelectorAll(
    'input[type="radio"][name="slider"]'
  );
  let currentSlideIdx = Array.from(inputs).findIndex((slide) => slide.checked);

  function updateSlide(index) {
    if (index >= 0 && index < inputs.length) {
      slides[index].checked = true;
      currentSlideIdx = index;
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      const nextSlide = (currentSlideIdx + 1) % slides.length;
      updateSlide(nextSlide);
    } else if (event.key === "ArrowLeft") {
      const prevSlide = (currentSlideIdx - 1 + slides.length) % slides.length;
      updateSlide(prevSlide);
    }
  });
}
