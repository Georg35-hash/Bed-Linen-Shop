import data from "../data/db.json";
export function modalHandler() {
  // Get templ
  const modalTemplate = document.querySelector(".modal");
  if (!modalTemplate) {
    throw new Error("Modal template not found");
  }

  function addModalToDOM() {
    const clone = document.importNode(modalTemplate.content, true);
    document.body.appendChild(clone);
  }

  if (!document.querySelector("#modal")) {
    addModalToDOM();
  }

  const modal = document.querySelector(".modal");
  const modalText = modal.querySelector(".modal-text");
  const closeBtn = modal.querySelector(".close-btn");

  function openModal(content) {
    modalText.innerHTML = content;
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // block scroll
  }

  document
    .querySelectorAll(".sleepy-shop__link, .blog-slider__link")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const contentKey = btn.dataset.id;

        const contentData = data[contentKey];

        const content = contentData
          ? `
          <h2>${contentData.title}</h2>
          <p>${contentData.content}</p>
        `
          : "<p>Sorry, content not found.</p>";
        openModal(content);
      });
    });

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active") && e.key === "Escape") {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
