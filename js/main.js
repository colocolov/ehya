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
    nextEl: ".stories-btn__left",
    prevEl: ".stories-btn__right",
    disabledClass: "stories-btn__unactive",
  },
});

$(document).ready(function () {
  $(".stories-btn__left").click(function () {
    $(".stories-btn__left").addClass("stories-btn__left--active");
    $(".stories-btn__right").removeClass("stories-btn__right--active");
  });
  $(".stories-btn__right").click(function () {
    $(".stories-btn__right").addClass("stories-btn__right--active");
    $(".stories-btn__left").removeClass("stories-btn__left--active");
  });
});
//-----
