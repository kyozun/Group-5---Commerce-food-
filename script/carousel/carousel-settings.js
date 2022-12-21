var swiper_top = new Swiper('.swiper-top', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 150,
  loop: true,
  touchEventsTarget: 'container',
  grabCursor: true,
  autoplay: {
    delay: 4600,
    disableOnInteraction: false,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-top',
    prevEl: '.swiper-button-prev-top',
  },
  
  pagination: {
    el: '.swiper-pagination-top',
    type: 'bullets',
    clickable: true,
  },

});


var swiper_falsh_sale = new Swiper('.flash-sale-slider', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 150,
  loop: true,
  touchEventsTarget: 'container',
  grabCursor: false,
  
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  
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
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper_best_sellers = new Swiper('.swiper-best-sellers', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 16,
  speed: 150,
  loop: true,
  grabCursor: false,
  touchEventsTarget: 'container',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
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
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});


var swiper_recommendations = new Swiper('.swiper-recommendation', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  loopedSlidesLimit: false,
  spaceBetween: 16,
  loop: true,
  speed: 150,
  touchEventsTarget: 'container',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-recommendation',
    prevEl: '.swiper-button-prev-recommendation',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  // Break points
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    }
  },
});


var swiper_thumbs = new Swiper('.swiper-thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
 
});

var swiper_quick_view = new Swiper('.swiper-quick-view', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 150,
  loop: true,
  touchEventsTarget: 'container',
  grabCursor: true,
  zoom: {
    maxRatio: 2,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-quick-view',
    prevEl: '.swiper-button-quick-view',
  },
  
  // pagination: {
  //   el: '.swiper-pagination-quick-view',
  //   type: 'bullets',
  //   clickable: true,
  // },

  thumbs: {
    swiper: swiper_thumbs,
  }

});

