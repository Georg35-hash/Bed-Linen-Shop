import { modalHandler } from "./scripts/modal-handler.js";
import { parallax } from "./scripts/parallax.js";
import { scroll } from "./scripts/scroll.js";
import { sideBar } from "./scripts/sidebar.js";
import { keyNaviCatalogue } from "./scripts/key-navi-catalogue.js";
import { sidebarNaviCatalogue } from "./scripts/sidebar-navi-catalogue.js";
import { sidebarNaviBlog } from "./scripts/sidebar-navi-blog.js";

import { openBurgerMenu } from "./scripts/open-burger-menu.js";
import "../src/main.scss";

modalHandler(null, null, ".modal", ".modal-text", ".close-btn");

parallax(".hero__img", ".hero__content", ".hero__background");
scroll(".animate-on-scroll");
sideBar(
  ".catalogue__slider-sidebar-item .sidebar-item:not(.arrow-down)",
  "#arrow"
);
keyNaviCatalogue('input[type="radio"][name="slider"]');
sidebarNaviCatalogue(".sidebar-item", ".catalogue__slider-content");
sidebarNaviBlog(
  "prev-slide",
  "next-slide",
  ".blog-slider__content",
  ".blog-slider__points .blog-slider__item"
);
openBurgerMenu("openButton", "navMenu");
