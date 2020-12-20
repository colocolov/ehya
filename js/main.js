// для мобильного меню
let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document.querySelector(".navbar__menu").classList.toggle("navbar__menu_visible");
  // console.log("body");
  document.body.classList.remove("body_fix");
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
      // console.log(value);
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
  loop: true,
  navigation: {
    nextEl: ".stories-button__right",
    prevEl: ".stories-button__left",
    // disabledClass: "stories-button__unactive",
    clickable: true,
    // для ппрвильного направления
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
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Введите ваше имя",
        minlength: "Имя не должно быть короче 3 символов",
      },
      email: {
        email: "Введите корректный email адрес",
        required: "Введите email в виде name@mail.com",
      },
    },
  });
});
//-----

// для модального окна
$(document).ready(function () {
  var modalButton = $("[data-toggle=modal]");
  // console.log(modalButton);

  var closeModalButton = $(".modal__close");
  // console.log(closeModalButton);
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  var body = $("body");

  function openModal() {
    // console.log("yes");
    body.addClass("body_fix");
    // var targetModal = $(this).attr("data-href");
    // $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
    // $(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  }
  function closeModal(event) {
    body.removeClass("body_fix");
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }
  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      //console.log("Нажата клавиша Escape");
      closeModal(event);
    }
  });

  var modalOverlay = document.querySelector(".modal__overlay");
  modalOverlay.addEventListener("click", function () {
    var modalCl = document.querySelector(".modal__dialog");
    var bodyCl = document.querySelector(".body_fix");
    //.classList.remove("modal__overlay_visible");
    modalCl.classList.remove("modal__dialog_visible");
    this.classList.remove("modal__overlay_visible");
    bodyCl.classList.remove("body_fix");
  });
  //-----
});
