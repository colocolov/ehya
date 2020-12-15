// для мобильного меню
let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document.querySelector(".navbar__menu").classList.toggle("navbar__menu_visible");
  console.log("body");
  document.body.classList.toggle("body_fix");
  menuButton.classList.toggle("menu-button_active");
});
//-----
