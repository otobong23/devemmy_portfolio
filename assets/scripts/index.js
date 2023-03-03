const close_btn = $("#close-btn");
const menu_btn = $("#menu-btn");
const mobile_nav = $(".mobile-nav");
const overlay = $(".overlay");

function toggleBtn() {
  mobile_nav.toggleClass("active");
  overlay.toggleClass("active");
}

close_btn.on("click", toggleBtn);
menu_btn.on("click", toggleBtn);
overlay.on("click", toggleBtn);
$(window).on("scroll", function () {
  mobile_nav.removeClass("active");
  overlay.removeClass("active");
});

const swiper = new Swiper(".services-swiper-container", {
  slidesPerView: 3,
  speed: 1500,
  loop: true,
  spaceBetween: 45,
  pagination: {
    el: ".service-display-dots .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      loop: false,
    },
  },
});

const projectSwiper = new Swiper(".project-container .swiper", {
  slidesPerView: 1,
  speed: 1500,
  spaceBetween: 50,
  navigation: {
    nextEl: ".project-swiper-button-next",
    prevEl: ".project-swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

const swiperT = new Swiper(".testimonial-container .swiper", {
  slidesPerView: 2,
  speed: 1500,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".testimonal-swiper-button-next",
    prevEl: ".testimonal-swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    992: {
      spaceBetween: 80,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 100,
    },
    1400: {
      spaceBetween: 150,
    },
    1800: {
      spaceBetween: 175,
    },
  },
});

// if($('.progress-bar').length){
//   $('.progress-bar').appear(function(){
//       var el = $(this);
//       var percent = el.data('value');
//       $(el).css('width',percent+'%');
//   },{accY: 0});
// };


function progress(){
  $('.progress-bar').appear();
  $('.progress-bar').on('appear',function(){
    var el = $(this);
    var percent = el.data('value');
    $(el).css({
      width: `${percent}%`
    });
  });
}
progress();

$('body').materialScrollTop();