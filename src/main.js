import { modalHandler } from "./scripts/modal-handler.js";
import parallax from "./scripts/parallax.js";
import { scroll } from "./scripts/scroll.js";
import { sideBar } from "./scripts/sidebar.js";
import { keyNaviCatalogue } from "./scripts/key-navi-catalogue.js";
import { sidebarNaviCatalogue } from "./scripts/sidebar-navi-catalogue.js";
import { sidebarNaviBlog } from "./scripts/sidebar-navi-blog.js";

import { openBurgerMenu } from "./scripts/open-burger-menu.js";
import "../src/main.scss";

modalHandler();
document.querySelector(".hero").addEventListener("mousemove", parallax);

parallax();
scroll();
sideBar();
keyNaviCatalogue();
sidebarNaviCatalogue();
sidebarNaviBlog();
openBurgerMenu();
