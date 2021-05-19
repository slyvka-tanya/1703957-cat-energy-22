const mainNavToggle = document.querySelector(".main-header__toggle");
const mainNav = document.querySelector(".main-nav");

mainNav.classList.add("main-nav--close");
mainNavToggle.classList.add("main-header__toggle--close");

mainNavToggle.addEventListener("click", function () {
  mainNav.classList.toggle("main-nav--open");
  mainNavToggle.classList.toggle("main-header__toggle--open");
  mainNavToggle.classList.toggle("main-header__toggle--close");
});
