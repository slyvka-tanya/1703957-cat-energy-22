const mainNavToggle = document.querySelector(".main-header__toggle");
const mainNav = document.querySelector(".main-nav");

mainNav.classList.add("modal-close");
mainNavToggle.classList.add("main-header__toggle--close");

mainNavToggle.addEventListener("click", function () {
  mainNav.classList.add("modal-show");
  mainNavToggle.classList.toggle("main-header__toggle--open");
  mainNavToggle.classList.toggle("main-header__toggle--close");
});
