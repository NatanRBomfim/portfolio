const toggle = document.querySelector(".toggle-menu");
const iconMenu = toggle.querySelector("i");
const menu = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const theme = document.querySelector(".theme-btn");
const iconTheme = theme.querySelector("i");
const header = document.querySelector("header");
const topBar = document.getElementsByClassName("fx");
const mediaQuery = window.matchMedia("(min-width: 48.06em)");

window.addEventListener("scroll", animationBarMenu);

function animationBarMenu() {
  if (pageYOffset > 20 && !topBar[0]) {
    document.body.classList.add("fx");
  } else if (pageYOffset <= 20 && topBar[0]) {
    document.body.classList.remove("fx");
  }
}

function updateHeaderHeight() {
  /*Menu acompanha a altura do header */
  const heigth = header.offsetHeight;
  document.documentElement.style.setProperty("--header-heigth", `${heigth}px`);
}

function openMenu() {
  menu.classList.add("active");
  overlay.classList.add("active");
  toggle.setAttribute("aria-expanded", "true");
  iconMenu.classList.add("fa-x");
  iconMenu.classList.remove("fa-bars-staggered");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  toggle.setAttribute("aria-expanded", "false");
  iconMenu.classList.remove("fa-x");
  iconMenu.classList.add("fa-bars-staggered");
  document.body.style.overflow = "";
}

function themeColor() {
  document.body.classList.toggle("ligth");
  const isSun = iconTheme.classList.contains("fa-sun");
  iconTheme.classList.toggle("fa-sun", !isSun);
  iconTheme.classList.toggle("fa-moon", isSun);
}

function toggleMenu() {
  const isOpen = menu.classList.contains("active");
  isOpen ? closeMenu() : openMenu();
  document.removeEventListener("click", closeMenu);
  setTimeout(() => {
    document.addEventListener("click", closeMenu);
  }, 1);
}

function syncMenuState(e) {
  if (e.matches) {
    toggle?.setAttribute("aria-expanded", "true");
  } else {
    toggle?.setAttribute("aria-expanded", "false");
  }
}

theme.addEventListener("click", themeColor);
toggle.addEventListener("click", toggleMenu);

updateHeaderHeight();

syncMenuState(mediaQuery);

mediaQuery.addEventListener("change", syncMenuState);
