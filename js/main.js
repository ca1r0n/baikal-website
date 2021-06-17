"use strict";

var burger = document.querySelector('.burger');
var burgerFooter = document.querySelector('.burger--footer');
var width = document.documentElement.clientWidth;
burger.addEventListener('click', function (e) {
  e.currentTarget.classList.toggle('burger--active');
});
burgerFooter.addEventListener('click', function (e) {
  e.currentTarget.classList.toggle('burger--active');
});
$('.gallery__list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '.gallery__arrow--right',
  prevArrow: '.gallery__arrow--left',
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
var offersList = document.querySelectorAll('.offers__items');
var index = 0;

if (width < 576) {
  offersList.forEach(function (elem) {
    if (index > 4 && index != offersList.length - 1) {
      elem.classList.add('offers__items--no-active');
    }

    index++;
  });
}
//# sourceMappingURL=main.js.map
