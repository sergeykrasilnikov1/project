document.addEventListener('DOMContentLoaded', () => {
  // gallary slider

const gallarySlider = document.querySelector('.gallery__swiper-container');

var gallarySwiper = new Swiper(gallarySlider, {
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  slidersPerColumnFill: 'row',
  breakpoints:{
    667:{
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 35,
    },

    1000:{
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerColumn: 1,
      slidesPerGroup: 2,
      spaceBetween: 30,
      },

    1330:{
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerColumn: 1,
      slidesPerGroup: 3,
    }
  }
});

// events slider

const eventsSlider = document.querySelector('.events__slider-container');

var eventsSWider = new Swiper(eventsSlider, {
  slideClass: ('events__item'),
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
  },

  breakpoints:{

    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },

    560: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },

    800: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 28,
      allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },

    1025:{
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
    }
  }
})
})

// partners swiper

const partnersSlider = document.querySelector('.partners__swiper-container');

var partnersSwiper = new Swiper(partnersSlider, {
  slideClass: ('partners__swiper-slide'),
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 30,

  navigation: {
    nextEl: '.partners__button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{

    668: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

   1000: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },

    1200:{
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
    }
  }
})
