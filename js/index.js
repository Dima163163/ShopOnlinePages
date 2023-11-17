/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 511:
/***/ (function(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var _modules_createTimer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(736);
/* harmony import */ var _modules_pageElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(292);
/* harmony import */ var _modules_pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _modules_openMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(290);





const {
  blogInner,
  paginationSection,
  currentPage,
  blogsCads,
  menuBtn,
  menuImgBtn,
  menuBurger
} = _modules_pageElements_js__WEBPACK_IMPORTED_MODULE_0__["default"];
const timerWrapper = document.querySelector('.disconts-timer');

// Функция запуска функций
const init = () => {
  if (timerWrapper) {
    const deadlineTimer = timerWrapper.dataset.timerDeadline;
    (0,_modules_createTimer_js__WEBPACK_IMPORTED_MODULE_2__/* .createTimer */ .e)('[data-timer-deadline]');
    (0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_3__/* .timer */ .H)(deadlineTimer, '.disconts-timer', '.timer__count_days', '.timer__units_days', '.timer__count_hours', '.timer__units_hours', '.timer__count_minutes', '.timer__units_minutes');
  }
  if (blogInner) {
    (0,_modules_pagination_js__WEBPACK_IMPORTED_MODULE_1__/* .rednerBlogs */ .I)(blogInner, blogsCads, currentPage);
    (0,_modules_pagination_js__WEBPACK_IMPORTED_MODULE_1__/* .renderPagination */ .f)(paginationSection, blogsCads, blogInner);
  }
  (0,_modules_openMenu_js__WEBPACK_IMPORTED_MODULE_4__/* .menuControl */ .x)(menuBtn, menuImgBtn, menuBurger);
};
init();

/***/ }),

/***/ 736:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ createTimer; }
/* harmony export */ });
const createTimer = selector => {
  const elem = document.querySelector(selector);
  if (elem) {
    elem.insertAdjacentHTML('beforeend', `
      <p class="timer__title">До конца акции:</p>
        <ul class="timer__list">
          <li class="timer__item timer__item_days">
            <span class="timer__count timer__count_days"></span>
            <p class="timer__units timer__units_days"></p>
          </li>
          <li class="timer__item">
            <span class="timer__count timer__count_hours"></span>
            <p class="timer__units timer__units_hours"></p>
          </li>
          <li class="timer__item">
            <span class="timer__count timer__count_minutes"></span>
            <p class="timer__units timer__units_minutes"></p>
          </li>
        </ul>
    `);
  }
};

/***/ }),

/***/ 290:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: function() { return /* binding */ menuControl; }
/* harmony export */ });
// Функция открытия и закрытия меню
const openCloseMenu = (menuBurger, menuImgBtn) => {
  menuBurger.classList.toggle('is-visible');
  menuImgBtn.classList.toggle('is-close');
};

// Вызов функции открытия и закрытия меню
const menuControl = (menuBtn, menuImgBtn, menuBurger) => {
  menuBtn.addEventListener('click', () => {
    openCloseMenu(menuBurger, menuImgBtn);
  });
};

/***/ }),

/***/ 292:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const blogInner = document.querySelector('.blog-inner');
const paginationSection = document.querySelector('.blogs-page__btns');
const menuBtn = document.querySelector('.header__btn');
const menuImgBtn = document.querySelector('.header__btn-icon');
const menuBurger = document.querySelector('.menu');
const currentPage = 1;
const blogsCads = 12;
/* harmony default export */ __webpack_exports__["default"] = ({
  blogInner,
  paginationSection,
  currentPage,
  blogsCads,
  menuBtn,
  menuImgBtn,
  menuBurger
});

/***/ }),

/***/ 64:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ rednerBlogs; },
/* harmony export */   f: function() { return /* binding */ renderPagination; }
/* harmony export */ });
/* harmony import */ var _pageElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(292);

const {
  currentPage,
  blogsCads
} = _pageElements_js__WEBPACK_IMPORTED_MODULE_0__["default"];
const imgAPIS = ['https://loremflickr.com/400/400?1', 'https://loremflickr.com/400/400?2', 'https://loremflickr.com/400/400?3', 'https://loremflickr.com/400/400?4', 'https://loremflickr.com/400/400?5', 'https://loremflickr.com/400/400?6', 'https://loremflickr.com/400/400?7'];

// Функция для рандомного выбора картинок блогов
const getRandomIntIncInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Получаем ответ с сервера
const loadBlogs = async () => {
  const result = await fetch('https://gorest.co.in/public-api/posts');
  const response = await result.json();
  const data = await response.data;
  console.log('data: ', data);
  return data;
};

// Отрисовываем карточки blog
const rednerBlogs = async (blogWrapper, pagesCount, currPage) => {
  const data = await loadBlogs();
  blogWrapper.textContent = '';
  currPage--;
  const start = pagesCount * currPage;
  const end = start + pagesCount;
  const paginationData = data.slice(start, end);

  // const blogs = data.map(item => {
  const blogs = paginationData.map(item => {
    const blogCard = document.createElement('a');
    blogCard.className = 'blog-card';
    blogCard.innerHTML = `
      <div class="blog-card__id">${item.id}</div>
      <img class="blog-img"
        src="${imgAPIS[getRandomIntIncInclusive(0, 6)]}" alt="shoes">
      <p class="blog-description">${item.title}</p>
    `;
    return blogCard;
  });
  blogWrapper.append(...blogs);
};

// Отрисовка кнопок
const renderPaginationBtn = (page, blogWrapper) => {
  const button = document.createElement('btn');
  button.classList.add('blogs-page__btn');
  button.textContent = page;
  if (currentPage === page) {
    button.classList.add('blogs-page__btn_active');
  }
  button.addEventListener('click', () => {
    const currentPage = page;
    rednerBlogs(blogWrapper, blogsCads, currentPage);
    const currentBtn = document.querySelector('.blogs-page__btn_active');
    currentBtn.classList.remove('blogs-page__btn_active');
    button.classList.add('blogs-page__btn_active');
  });
  return button;
};

// Перелистывание страниц стрелками
const renderPaginationArrow = blogWrapper => {
  const buttonLeft = document.createElement('btn');
  buttonLeft.classList.add('arrow', 'arrow-left');
  if (window.innerWidth > 768) {
    buttonLeft.style = `
    content: '';
    background-image: url('../src/img/left-arrow-blog.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 37px;
    height: 37px;`;
  } else {
    buttonLeft.style = `
    content: '';
    background-image: url('../src/img/left768-320.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;`;
  }
  const buttonRight = document.createElement('btn');
  buttonRight.classList.add('arrow', 'arrow-right');
  if (window.innerWidth > 768) {
    buttonRight.style = `
    content: '';
    background-image: url('../src/img/right-arrow-blog.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 37px;
    height: 37px;`;
  } else {
    buttonRight.style = `
    content: '';
    background-image: url('../src/img/right768-320.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;`;
  }
  return {
    buttonLeft,
    buttonRight
  };
};

// Отрисовка пагинации
const renderPagination = async (paginWrapper, numbOfPages, blogWrapper) => {
  const data = await loadBlogs();
  const pagesCount = Math.ceil(data.length / numbOfPages);
  for (let i = 0; i < pagesCount; i++) {
    const a = renderPaginationBtn(i + 1, blogWrapper);
    paginWrapper.append(a);
  }
  const arr = renderPaginationArrow(blogWrapper);
  paginWrapper.prepend(arr.buttonLeft);
  paginWrapper.append(arr.buttonRight);
};

/***/ }),

/***/ 745:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ timer; }
/* harmony export */ });
// Функция таймера
const timer = (deadline, timerWrapper, selectorDayNumb, selectorDayUnit, selectorHoursNumb, selectorHoursUnit, selectorMinuteNumb, selectorMinuteUnit) => {
  // Переменная дней цифра
  const timerBlockDayCount = document.querySelector(selectorDayNumb);
  // Переменная дней слово
  const timerBlockDayUnit = document.querySelector(selectorDayUnit);
  // Переменная часов цифра
  const timerBlockHourCount = document.querySelector(selectorHoursNumb);
  // Переменная часов слово
  const timerBlockHourUnit = document.querySelector(selectorHoursUnit);
  // Переменная минут цифра
  const timerBlockMinuteCount = document.querySelector(selectorMinuteNumb);
  // Переменная минут слово
  const timerBlockMinuteUnit = document.querySelector(selectorMinuteUnit);
  // Переменная обертки таймера
  const timerWrap = document.querySelector(timerWrapper);
  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const plusThree = 3;
    const dateStopPlus = dateStop + plusThree * 60 * 60 * 1000;
    const dateNow = Date.now();
    const timeRemaining = dateStopPlus - dateNow;
    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
    return {
      timeRemaining,
      seconds,
      minutes,
      hours,
      days
    };
  };

  // Склонение числительных
  const declencionNum = (number, one, two, three) => {
    if (number === 1 || number > 19 && number % 10 === 1) {
      return one;
    } else if (number > 1 && number < 5 || number > 19 && number % 10 > 1 && number % 10 < 5) {
      return two;
    } else {
      return three;
    }
  };
  // Добавление нуля перед числом
  const addZero = numb => {
    if (numb < 10) {
      return '0' + numb;
    } else {
      return numb;
    }
  };
  const start = () => {
    const timer = getTimeRemaining();
    if (timer.hours < 24 && timer.day < 1) {
      timerBlockDayCount.textContent = addZero(timer.hours);
      timerBlockDayUnit.textContent = declencionNum(timer.hours, 'час', 'часа', 'часов');
      timerBlockHourCount.textContent = addZero(timer.minutes);
      timerBlockHourUnit.textContent = declencionNum(timer.minutes, 'минута', 'минуты', 'минут');
      timerBlockMinuteCount.textContent = addZero(timer.seconds);
      timerBlockMinuteUnit.textContent = declencionNum(timer.minutes, 'секунда', 'секунды', 'секунд');
    } else {
      timerBlockDayCount.textContent = addZero(timer.days);
      timerBlockDayUnit.textContent = declencionNum(timer.days, 'день', 'дня', 'дней');
      timerBlockHourCount.textContent = addZero(timer.hours);
      timerBlockHourUnit.textContent = declencionNum(timer.hours, 'час', 'часа', 'часов');
      timerBlockMinuteCount.textContent = addZero(timer.minutes);
      timerBlockMinuteUnit.textContent = declencionNum(timer.minutes, 'минута', 'минуты', 'минут');
    }
    const intervalId = setTimeout(start, 1000);
    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerWrap.textContent = '';
    }
  };
  start();
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(511);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(736);
/******/ 	__webpack_require__(290);
/******/ 	__webpack_require__(292);
/******/ 	__webpack_require__(64);
/******/ 	var __webpack_exports__ = __webpack_require__(745);
/******/ 	
/******/ })()
;