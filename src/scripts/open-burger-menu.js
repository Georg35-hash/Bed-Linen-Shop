export function openBurgerMenu() {
  const openButton = document.getElementById("openButton");
  const navMenu = document.getElementById("navMenu");

  openButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    openButton.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !openButton.contains(event.target)) {
      navMenu.classList.remove("active");
      openButton.classList.remove("active");
    }
  });
}
