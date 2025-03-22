export function sideBar() {
  const sidebarItems = document.querySelectorAll(
    ".catalogue__slider-sidebar-item .sidebar-item:not(.arrow-down)"
  );
  const arrow = document.getElementById("arrow");

  // DEFAULT
  if (sidebarItems.length > 0) {
    sidebarItems[0].classList.add("active");
  }

  // Listener for clicks on elem
  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      sidebarItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });

  if (arrow) {
    arrow.addEventListener("click", function () {
      let currentActiveIndex = -1;

      sidebarItems.forEach((item, index) => {
        if (item.classList.contains("active")) {
          currentActiveIndex = index;
        }
      });

      // If does not exist begin from start
      if (currentActiveIndex === -1) {
        currentActiveIndex = 0;
      }

      sidebarItems[currentActiveIndex].classList.remove("active");

      // Next index of sidebar
      let nextIndex = (currentActiveIndex + 1) % sidebarItems.length;

      // Triger for next elem for Event Listener
      sidebarItems[nextIndex].click();
    });
  }
}
