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
    if (value !== "all") {
      console.log(value);
      // console.log(article.dataset.category);
      //цикл if
      if (article.dataset.category !== value && article.dataset.category !== "more") {
        article.classList.add("trends__hide");
      } else {
        article.classList.remove("trends__hide");
      } //цикл if
    } else {
      article.classList.remove("trends__hide");
    }
  }
}
//-----

// слайдер для отзывов
var reviewsSlider = new Swiper(".reviews-slider", {
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
  // отключение прокрутки при наведении мыши
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
});
//-----

// слайдер для записей
var storiesSlider = new Swiper(".stories__slider", {
  loop: false,
  navigation: {
    nextEl: ".stories-button__left",
    prevEl: ".stories-button__right",
    disabledClass: "stories-button__unactive",
  },
});

$(document).ready(function () {
  $(".stories-btn__left").click(function () {
    $(".stories-button__left").addClass("stories-button__left--active");
    $(".stories-button__right").removeClass("stories-button__right--active");
  });
  $(".stories-button__right").click(function () {
    $(".stories-button__right").addClass("stories-button__right--active");
    $(".stories-button__left").removeClass("stories-button__left--active");
  });
});
//-----

// для валидации
// $(".form").each(function () {
$(".form").validate({
  errorClass: "invalid",
  rules: {
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    email: {
      email: "Введите корректный email адрес",
      required: "Пожалуйста введите email в виде name@mail.com",
    },
  },
});
// });
//-----
