function paralax() {
    const hero = document.querySelector(".hero__content"); // container
    const img = document.querySelector(".hero__img"); // my pillow
    const bg = document.querySelector(".hero__background"); // bg

    if (!hero || !img || !bg) return;

    hero.addEventListener("mousemove", (e) => {
        const { width, height, left, top } = hero.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 40;
        const y = (e.clientY - top - height / 2) / 40;

        img.style.transform = `translate(${-x}px, ${-y}px)`;
        bg.style.transform = `translate(${x}px, ${y}px)`;
    });

    hero.addEventListener("mouseleave", () => {
        img.style.transform = "translate(0, 0)";
        bg.style.transform = "translate(0, 0)";
    });
}
paralax();