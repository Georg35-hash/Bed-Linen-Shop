export function sidebarNaviCatalogue() {
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const windows = document.querySelectorAll(".catalogue__slider-content");
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

  const navArrow = document.querySelector(".arrow-down");
  if (navArrow) {
    navArrow.addEventListener("click", () => {
      windows[currentIndex].style.display = "none";

      currentIndex = currentIndex % windows.length;

      windows[currentIndex].style.display = "block";
    });
  }
}
