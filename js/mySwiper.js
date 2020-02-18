const config = {
  // Optional parameters
  autoHeight: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  //When enabled Swiper will force to load all images
  preloadImages: true,
  //Breakpoint
  breakpoints: {
    480: {
      slidePerView: 2,
      spaceBetween: 30
    },
    850: {
      slidePerView: 3,
      spaceBetween: 20
    }
  }
};

const mySwiper = new Swiper(".swiper-container", config);
