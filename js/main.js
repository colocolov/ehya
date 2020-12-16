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
  // let type = document.querySelector(".trends__type").classList.toggle("trends__type_active");
  // console.log(value);
  // console.log(this.value);
  for (let article of articles) {
    if (article.dataset.category !== value) {
      article.classList.add("trends__hide");
      // type.classList.add("trends__type_active");
    } else {
      article.classList.remove("trends__hide");
    }
  }
}
//-----
