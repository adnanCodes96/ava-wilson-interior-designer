/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function animations() {
    console.log('animations');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animations);

/***/ })
/******/ 	]);
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


// Open and Close Navigation
const navOverlay = document.querySelector('.navigation__overlay');
const closeNavEl = document.querySelector('.close');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const body = document.body;

menu.addEventListener('click', () => {
    navOverlay.classList.remove('navigation__overlay--hidden');
    nav.classList.remove('nav--hidden');
    body.style.marginLeft = '-70%';
    header.style.marginLeft = '-70%';
    body.style.transition = 'all .5s ease-in-out';
    header.style.transition = 'all .5s ease-in-out';

    if(window.matchMedia("(min-width: 768px)")) {
        body.style.marginLeft = '-40%';
        header.style.marginLeft = '-40%';
    }
});

function closeNav() {
    navOverlay.classList.add('navigation__overlay--hidden');
    nav.classList.add('nav--hidden');
    body.style.marginLeft = '0%';
    header.style.marginLeft = '0%';
};

navOverlay.addEventListener('click', closeNav);
closeNavEl.addEventListener('click', closeNav);

if(window.matchMedia("(min-width: 1024px)")) {
    nav.classList.add('nav--hidden');
} else {
    nav.classList.remove('nav--hidden');
}

// Accordion
let accordionItem = document.querySelectorAll('.accordion__item');
let accordionTop = document.querySelectorAll('.accordion__top');
let accordionBottom = document.querySelectorAll('.accordion__bottom');
let plusVertical = document.querySelectorAll('.vertical');

for(let i = 0; i < accordionTop.length; i++) {
    accordionTop[i].addEventListener('click', function() {

        let panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            plusVertical[i].style.clipPath = 'polygon(0 100%, 100% 100%, 100% 0, 0 0)';
            accordionItem[i].style.paddingBottom = '0px';
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            plusVertical[i].style.clipPath = 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)';
            accordionItem[i].style.paddingBottom = '35px';
        }
    });
};
})();

/******/ })()
;