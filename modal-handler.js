function initModal() {
    const modal = document.querySelector(".modal");
    const modalText = document.querySelector(".modal-text");
    const closeBtn = document.querySelector(".close-btn");

    if (!modal || !modalText) return;

    document.querySelectorAll(".sleepy-shop__link, .blog-slider__link").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const content = btn.getAttribute("data-content");
            modalText.innerHTML = content;
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

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
initModal();