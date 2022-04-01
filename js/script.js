$(function() {
  /* Main menu */
  $('.header__up-nav-link').click(function () {
      let href = $(this).attr('href').substr(1);
      let to = `.${href}`
      $('body, html').animate({scrollTop : $(to).offset().top} ,1000);
      // closing the menu after clicking on the item
      // the delay is necessary with a purpose so that when you rewind, the closing of the menu is not visible
      setTimeout(function(){
          $('#burger-menu-toggle').removeClass('burger-menu-open');
          $('.header__up-nav-log').removeClass('header__up-nav-log-open');
      }, 1000)
      return false;
  });
});

/* Burger Menu */
document.getElementById('burger-menu-toggle').addEventListener('click', function(event){
  this.classList.toggle('burger-menu-open');
  document.querySelector('.header__up-nav-log').classList.toggle('header__up-nav-log-open');
});

/* Search */
document.querySelector('.header__up-mobile-search-button').addEventListener('click', function(event){
  document.querySelector('.header__up-mobile-search').classList.add('search__form-open');
});
document.querySelector('.header__up-mobile-search-close-button').addEventListener('click', function(event){
  document.querySelector('.header__up-mobile-search').classList.remove('search__form-open');
});

document.addEventListener('click', function(e) {
  let currentElement = e.target;
  // closing search form by clicking at any element except search block (needed for 10214 layout)
  if (!currentElement.closest('.header__up-container-right')) {
      document.querySelector('.header__up-mobile-search').classList.remove('search__form-open');
  }
  // closing dropdowns item by clicking at any element except dropdowns container
  if (!currentElement.closest('.header__down-dropdowns')) {
      document.querySelectorAll('.header__down-dropdowns-item-btn').forEach(el => {
          el.classList.remove('header__down-dropdowns-item-btn_active_true');
      });
      document.querySelectorAll('.header__down-dropdowns-item-list-container').forEach(el => {
          el.classList.remove('header__down-dropdowns-item-list-container_active_true');
      })
  }

})

/* Down Header Menu */
document.querySelectorAll('.header__down-dropdowns-item-btn').forEach(dropdownsItem => {
    dropdownsItem.addEventListener('click', function() {
        let btn = this;
        let dropdown = btn.parentElement.querySelector('.header__down-dropdowns-item-list-container');
        document.querySelectorAll('.header__down-dropdowns-item-btn').forEach(el=> {
            if (el != btn) {
                el.classList.remove('header__down-dropdowns-item-btn_active_true');
            }
        });
        document.querySelectorAll('.header__down-dropdowns-item-list-container').forEach(el => {
            if (el != dropdown) {
                el.classList.remove('header__down-dropdowns-item-list-container_active_true');
            }
        })
        btn.classList.toggle('header__down-dropdowns-item-btn_active_true')
        dropdown.classList.toggle('header__down-dropdowns-item-list-container_active_true')
    })
})

/* Down Header Menu Lists */
document.querySelectorAll('.header__down-dropdowns-item-list').forEach(dropdownsItemList => {
    new SimpleBar(dropdownsItemList, {
        autoHide: false,
        scrollbarMaxSize: 28,
    })
})

/* Slider */
const swiper = new Swiper('.slider__box', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 1000
  }
})

document.addEventListener('DOMContentLoaded', () => {

  const dropdownLink = document.querySelectorAll('.nav__art-submenu');
  const dropdownSubmenu = document.querySelectorAll('.dropdown');
  const dropdownArrow = document.querySelectorAll('.nav__art-arrow');
  const element = document.querySelector('#gallery__select');
  const btns = document.querySelectorAll('.accordion__arrow-btn');
  const accordionBtn = document.querySelectorAll('.accordion__btn');
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs-content');
  const tabsPainter = document.querySelectorAll('.accordion__painter-list');
  const painterLink = document.querySelectorAll('.accordion__painter-link');
  const painter = document.querySelectorAll('.painter');

  // Select

  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });



  // tabs counter

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    })

    const tabsHandler = (path) => {
      tabsBtn.forEach(el => {el.classList.remove('tabs__btn-active')})
      document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn-active')

      tabsContent.forEach(el => {el.classList.remove('tabs-content-active')})
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content-active')
    }
  }

  // tabs painter

  if (tabsPainter) {
    const tabsHandler = (tabLinks) => {
      tabLinks.forEach(el => {
        const path = el.dataset.tabsPath;
        el.addEventListener('click', (e) => {
          e.preventDefault();
          painterLink.forEach(el => {el.classList.remove('accordion__painter-link--active')});
          e.target.classList.add('accordion__painter-link--active');
          painter.forEach(el => {el.classList.remove('painter-content-active')});
          document.querySelector(`[data-tabs-target="${path}"]`).classList.add('painter-content-active');
        });
      });
    }

    tabsPainter.forEach(el => {
      const tabsLinks = el.querySelectorAll('.accordion__painter-link');
      tabsHandler(tabsLinks);
    });
  }

  //map

  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.75846306898368,37.601079499999905],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "360px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "270px", right: "20px" }
    }
  );


    myMap.behaviors.disable("scrollZoom");
    var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });

  myMap.geoObjects.add(myPlacemark);
  }

})


$(document).ready(function(){

    //accordion

    $(function() {
      $(".accordion__list").accordion()
    });

    $(".accordion__list").accordion({
      heightStyle: "content",
      refresh: true,
      collapsible: true,
      active: 0
    });

});



(() => {
  tippy(".tooltip", {
    theme: 'tooltip-theme',
  });
})();
// validate

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);


new JustValidate('.contacts-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length ===10
      }
    },
  },

  messages: {
    name: {
        maxLength: 'Введите корректное имя',
        minLength: 'Введите корректное имя',
        required: 'Поле обязательно для заполнения!'
    },
    tel: {
        function: 'Недопустимый формат',
        required: 'Поле обязательно для заполнения!'
    }
},

  submitHandler: function (form, values, ajax) {

    ajax({
      url: 'https://just-validate-api.herokuapp.com/submit',
      method: 'POST',
      data: values,
      async: true,
      callback: function(response)  {
      }
    });
  },
})

let gallerySlider = new Swiper(".gallery__swiper-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    561: {
      slidesPerGroup: 3,
      slidesPerView: 2,
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }
});

// events slider

const eventsSlider = document.querySelector('.events__slider-container');

var eventsSWider = new Swiper(eventsSlider, {
  slideClass: ('events__item'),
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.events__button-next',
    prevEl: '.events__button-prev',
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
      spaceBetween: 30,
      allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },

    970: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 27,
      allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },

    1030:{
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
    }
  }
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
    prevEl: '.partners__button-prev',
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


