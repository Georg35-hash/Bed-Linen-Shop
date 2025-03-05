import modalHandler from "./js/modal-handler.js";
import parallax from "./js/parallax.js";
import scroll from "./js/scroll.js";
import sideBar from "./js/sidebar.js";
import KeyNaviCatalogue from "./js/key-navi-catalogue.js";
import "../src/main.scss";

import {
  sidebarNaviCatalogue,
  sidebarNaviBlog,
  openBurgerMenu,
} from "./js/key-navi-catalogue.js";

modalHandler();
parallax();
scroll();
sideBar();
KeyNaviCatalogue();
sidebarNaviCatalogue();
sidebarNaviBlog();
openBurgerMenu();
