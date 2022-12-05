var swiper_top = new Swiper('.swiper-top', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 150,
  loop: true,
  touchEventsTarget: 'container',
  grabCursor: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-top',
    prevEl: '.swiper-button-prev-top',
  },
  
});

var swiper_best_sellers = new Swiper('.swiper-best-sellers', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 150,
  loop: true,
  grabCursor: true,
  touchEventsTarget: 'container',
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-best-sellers',
    prevEl: '.swiper-button-prev-best-sellers',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // Break points
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

var swiper_falsh_sale = new Swiper('.swiper-flash-sale', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 150,
  loop: true,
  touchEventsTarget: 'container',
  grabCursor: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-flash-sale',
    prevEl: '.swiper-button-prev-flash-sale',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // Break points
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});



var swiper_new_arrivals = new Swiper('.swiper-new-arrivals', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  loopedSlidesLimit: false,
  spaceBetween: 1,
  rewind: true,
  speed: 150,
  touchEventsTarget: 'container',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-new-arrivals',
    prevEl: '.swiper-button-prev-new-arrivals',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  // // Break points
  // breakpoints: {
  //   576: {
  //     slidesPerView: 2,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //   },
  //   992: {
  //     slidesPerView: 4,
  //   },
  //   1200: {
  //     slidesPerView: 5,
  //   }
  // },
});