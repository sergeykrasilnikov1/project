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
  const burger = document.querySelector('.burger');
  const burgerLine = document.querySelector('.burger-line');
  const nav = document.querySelector('.nav-top');
  const search = document.querySelector('.search-mobile');
  const searchBtn = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-mobile__input');
  const searchClose = document.querySelector('.search-mobile__close');




  // dropdown

  dropdownLink.forEach((el, index) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();

      const dropdownSubmenuClassList = dropdownSubmenu[index].classList;
      if (dropdownSubmenuClassList.contains('dropdown-visible')) {
        dropdownSubmenuClassList.remove('dropdown-visible')
        dropdownArrow[index].classList.remove('rotate-arrow')

      } else {
        dropdownSubmenu.forEach((el) => el.classList.remove('dropdown-visible'))
        dropdownSubmenuClassList.add('dropdown-visible')
        dropdownArrow.forEach((el) => el.classList.remove('rotate-arrow'))
        dropdownArrow[index].classList.add('rotate-arrow')
      }
    });
  });

  window.onclick = function(event) {
    if (!event.target.matches('.nav__art-submenu')) {
      let dropdowns = document.getElementsByClassName('dropdown');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('dropdown-visible')) {
          openDropdown.classList.remove('dropdown-visible');
        }
      }
    }

    if (!event.target.matches('.nav__art-submenu')) {
      let dropArrows = document.getElementsByClassName('nav__art-arrow');
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains('rotate-arrow')) {
          openDropdown.classList.remove('rotate-arrow');
        }
      }
    }

    if (!event.target.matches('.dropdown')) {
      let dropArrows = document.getElementsByClassName('dropdown');
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains('dropdown--is-active')) {
          openDropdown.classList.remove('dropdown--is-active');
        }
      }
    }
  }

    // search

    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchInput.classList.add('search-mobile__input--active');
      search.classList.add('search-active');
      searchClose.classList.add('search-mobile__close-active');
    })

    searchClose.addEventListener('click', (e) => {
      e.preventDefault();
      searchInput.classList.remove('search-mobile__input--active');
      search.classList.remove('search-active');
      searchClose.classList.remove('search-mobile__close-active');
    })

    window.addEventListener('click', (event) => {
      if (!search.contains(event.target)) searchInput.classList.remove('search-mobile__input--active');
      if (!search.contains(event.target)) search.classList.remove('search-active');
      if (!search.contains(event.target)) searchClose.classList.remove('search-mobile__close-active');
    });

    // burger

    burger.addEventListener('click', (e) => {
      nav.classList.toggle('open-menu');
      burgerLine.classList.toggle('burger-line--active');
    })

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
      zoom: 14
    });

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




tippy('.tooltip-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'tooltip-theme',
  trigger: 'click',
  trigger: 'focus',
});

tippy('.tooltip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'tooltip-theme',
  trigger: 'click',
  trigger: 'focus',
});

tippy('.tooltip-3', {
  content: 'В стремлении повысить качество',
  theme: 'tooltip-theme',
  trigger: 'click',
  trigger: 'focus',
});

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



