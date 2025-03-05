export default function modalHandler() {
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

  if (!modal || !modalText || !closeBtn) {
    throw new Error("Modal, modalText, or closeBtn element not found");
  }

  const contentMap = {
    "sleepy-shop__link": `
            <h2>Sleepy Shop</h2>
            <p>Sleepy is the perfect bedding store for anyone looking to give their bedroom a makeover.
            With a wide selection of linens including sheets, duvet covers, quilts, and pillowcases,
            they have something to suit every taste. <br>
            They offer several color options, patterns, and textures so that you can create the perfect
            ambience in your bedroom. Their quality is second to none, with materials well-</p>
        `,
    1: ` 
            <h2>Benefits Of Good Pillow</h2>
            <p>There has long been speculation about the impact that sleeping on a quality pillow and seeing
            your dreams have on each other. Some people believe that when you sleep on good pillows, it
            allows dream energy to flow freely, allowing for clearer and more vivid dreams. Others maintain
            that a good night's sleep is simply not possible without a comfortable and supportive pillow.</p>
        `,
    2: `
        <h2>Healthy Sleep Habits</h2>
        <p>Quality sleep is essential for overall health. Good sleep habits, such as maintaining a regular
        sleep schedule and creating a peaceful sleep environment, can have a significant impact on your
        well-being. Some people believe that when you sleep on good pillows, it
        allows dream energy to flow freely, allowing for clearer and more vivid dreams.</p>
    `,
    3: `
    <h2>Sleep Disorders and Solutions</h2>
    <p>Sleep disorders, like insomnia or sleep apnea, can disrupt your life. We explore common
        disorders and their potential solutions to help you get better sleep.</p>
    `,
    4: `
    <h2>Choosing the Perfect Pillow</h2>
    <p>The right pillow can make all the difference in sleep quality. We explore different pillow types
        and tips to help you find the perfect one for restful and comfortable nights.</p>
    `,
  };

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

        const contentKey = btn.classList.contains("sleepy-shop__link")
          ? "sleepy-shop__link"
          : btn.dataset.id;
        const content =
          contentMap[contentKey] || "<p>Sorry, content not found.</p>"; // additional cont

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
