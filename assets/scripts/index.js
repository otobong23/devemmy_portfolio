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


// servicesSwiper.owlCarousel
if(document.querySelector(".services-swiper-container .owl-carousel")){
  const servicesSwiper = $(".services-swiper-container .owl-carousel");

  servicesSwiper.owlCarousel({
    items: 4,
    dots: true,
    dotsEach: true,
    nav: false,
    // center: true,
    autoplay: true,
    autoplayTimeout: 3e5,
    autoplayHoverPause: true,
    lazyLoad: true,
    smartSpeed: 700,
    loop: true,
    margin: 25,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
}



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

function progress() {
  $(".progress-bar").appear();
  $(".progress-bar").one("appear", function () {
    let count = 0;
    var el = $(this);
    var percent = el.data("value");
    if(count == percent){
      console.log('loaded')
    }else{
      let timeout = setInterval(()=>{
        if(count == percent){
          count = count;
          clearInterval(timeout)
        }else{
          $(el).css({
            width: `${count > percent ? percent : count++}%`,
          });
        }
      }, 27)
    }
  });
}
progress();


function numberCount(){
  $(".number .val").appear();
  $(".number .val").one("appear", function(){
    let count = 0;
    var el = $(this);
    var value = el.data("value");
    if(count == value){
      console.log('loaded')
    }else{
      let timeout = setInterval(()=>{
        if(count == value){
          count = count;
          clearInterval(timeout)
        }else{
          el.text(count++ > value ? value : count)
        }
      }, 50)
    }
  });
  $(".number .val.lessVal").one("appear", function(){
    let count = 0;
    var el = $(this);
    var value = el.data("value");
    if(count == value){
      console.log('loaded')
    }else{
      let timeout = setInterval(()=>{
        if(count == value){
          count = count;
          clearInterval(timeout)
        }else{
          el.text(count++ > value ? value : count)
        }
      }, 500)
    }
  });
}

window.addEventListener('load', numberCount)

const eduButton = $('.education');
const exeButton = $('.experience');
const detailContent = $('.detail-content');

function removeEle() {
  detailContent.removeClass("active-details");
  exeButton.removeClass("active");
  eduButton.addClass('active');
}
function addEle() {
  detailContent.addClass("active-details");
  eduButton.removeClass("active");
  exeButton.addClass('active');
}
eduButton.on('click', removeEle);
exeButton.on('click', addEle)

$("body").materialScrollTop();

// header section animation and footer section

const animate = new ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 1000,
});

animate.reveal('.header-section');
animate.reveal('.details');
animate.reveal('footer', {duration: 1500});

function anFunc(ele, duration = 1000, origin = 'bottom', distance = '80px'){
  if(document.querySelector(ele)){
    animate.reveal(ele, {duration: duration, origin: origin, distance: distance});
  }else{
    console.log(`${ele} dosen't exit`);
  }
}

anFunc('.hero-content', 1500, 'left');
anFunc('.hero-image', 1600);

