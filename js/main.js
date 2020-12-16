// для мобильного меню
let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document.querySelector(".navbar__menu").classList.toggle("navbar__menu_visible");
  console.log("body");
  document.body.classList.toggle("body_fix");
  menuButton.classList.toggle("menu-button_active");
});
//-----

// фильтр трендов
let articles = document.querySelectorAll(".trends__good");
// console.log(articles);
// let filter = document.querySelector(".trends__tabs");
// console.log(filter);
// console.log(type);

function doAction(value) {
  let types = document.querySelectorAll(".trends__type");
  for (let type of types) {
    if (value == type.value) {
      type.classList.add("trends__type_active");
    } else {
      type.classList.remove("trends__type_active");
    }
  }
  for (let article of articles) {
    if (article.dataset.category !== value) {
      article.classList.add("trends__hide");
    } else {
      article.classList.remove("trends__hide");
    }
  }
}
//-----

// слайдер для отзывов
var mySwiper = new Swiper(".reviews-slider", {
  loop: true,
  // autoplay
  autoplay: {
    delay: 7000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
//-----
