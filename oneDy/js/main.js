new Swiper(".pricing__body", {
//   loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  clickable: true,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 4,
  },
  slidesPerView: 4,
});

$(function () {
  $(".header__bars").click(() => {
    $(".header__content").addClass("active");
    $(".header__bars").css("display", "none");
    $(".header__times").css("display", "block");
  });
  $(".header__times").click(() => {
    $(".header__content").removeClass("active");
    $(".header__times").css("display", "none");
    $(".header__bars").css("display", "block");
  });
});
