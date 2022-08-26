$(document).ready(function(){
  // 
  var swiper = new Swiper(".swiper-header", {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-slider",
      clickable: true,
    },
  });
  // Sale product
  var swiper = new Swiper(".sale-swiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    lazy: true,
    loop:false,
    center:true,
    autoplay: false,
    pagination: {
      el: ".swiper-pagination-sale",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-sale",
      prevEl: ".swiper-button-prev-sale",
    },
    breakpoints: {
      990: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 1,
      }
    },
  });
  // Swiper partner
  var swiper = new Swiper(".swiper-partner-item", {
    slidesPerView: 5,
    loop:true,
    autoplay:true,
    breakpoints: {
      900: {
        slidesPerView: 4,
      },
      700: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      
    },
  });
  // swiper-category-one
  var swiper = new Swiper(".product-category-one", {
    grabCursor: true,
    slidesPerView: 1,
    lazy: true,
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next-categoryOne",
      prevEl: ".swiper-button-prev-categoryOne",
    },
  });
  // swiper-latest-post
  var swiper = new Swiper(".swiper-latest-post", {
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 20,
    lazy: true,
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-blogPost",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-blogPost",
      prevEl: ".swiper-button-prev-blogPost",
    },
    breakpoints: {
      900: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 1,
        
      },
    },
  });
  // Special offer
  var swiper = new Swiper(".swiper-special-offers", {
    slidesPerView: 3, 
    slidesPerGroup: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-offer",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-offer",
      prevEl: ".swiper-button-prev-offer",
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1,
      },
    },
  });
  document
  .querySelector('.product-new')
  .addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(1, 4,7);
  });

  document
  .querySelector('.product-feature')
  .addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(2, 6,9);
  });

  document
  .querySelector('.product-rated')
  .addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(5, 3,8);
  });
})

