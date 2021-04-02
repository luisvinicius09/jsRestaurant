/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst contact = () => {\r\n  const mainContainer = document.querySelector('.main-container');\r\n\r\n  const contactWrapper = document.createElement('div');\r\n  contactWrapper.classList.add('contactWrapper', 'd-flex','j-btw' , 'd-none');\r\n\r\n  const contactContent = document.createElement('div');\r\n  contactContent.classList.add('contactContent');\r\n\r\n  const contactTitle = document.createElement('div');\r\n  contactTitle.classList.add('contactTitle');\r\n\r\n  const h1 = document.createElement('h1');\r\n  h1.innerText = 'Contact';\r\n\r\n  contactTitle.appendChild(h1);\r\n  contactContent.appendChild(contactTitle);\r\n\r\n  const contactForm = document.createElement('div');\r\n  contactForm.classList.add('contactForm', 'd-flex');\r\n\r\n  const name = document.createElement('input');\r\n  name.placeholder = 'Name';\r\n  name.disabled = true\r\n  name.type = 'text'\r\n  contactForm.appendChild(name);\r\n\r\n  const email = document.createElement('input');\r\n  email.placeholder = 'Email';\r\n  email.disabled = true;\r\n  email.type = 'email'\r\n  contactForm.appendChild(email);\r\n\r\n  const message = document.createElement('textarea');\r\n  message.placeholder = 'Message';\r\n  message.disabled = true;\r\n  contactForm.appendChild(message);\r\n\r\n  const menuImages = document.createElement('div');\r\n  menuImages.classList.add('menuImages');\r\n\r\n  const imageOne = document.createElement('img');\r\n  imageOne.classList.add('menu-photo');\r\n  imageOne.src = '../src/assets/images/hall.jpg';\r\n  imageOne.alt = 'Restaurant photo';\r\n\r\n  const imageTwo = document.createElement('img');\r\n  imageTwo.classList.add('blobMenu');\r\n  imageTwo.src = '../src/assets/images/blob3.png';\r\n  imageTwo.alt = 'Main image background';\r\n\r\n  const images = [imageOne, imageTwo];\r\n  for(let i=0; i < images.length; i++) {\r\n    menuImages.appendChild(images[i]);\r\n  }\r\n\r\n\r\n  contactContent.appendChild(contactForm);\r\n  contactWrapper.appendChild(contactContent);\r\n  contactWrapper.appendChild(menuImages);\r\n\r\n  mainContainer.appendChild(contactWrapper);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://jsRestaurant/./src/js/contact.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = () => {\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://jsRestaurant/./src/js/footer.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/js/homepage.js\");\n\r\n\r\nconst header = () => {\r\n  const mainContainer = document.querySelector('.main-container')\r\n\r\n  const header = document.createElement('header');\r\n  const headerContainer = document.createElement('div');\r\n  const homeBtn = document.createElement('a');\r\n  homeBtn.classList.add('homeBtn')\r\n  homeBtn.href = '#';\r\n  homeBtn.innerText = 'Home'\r\n\r\n  const menuBtn = document.createElement('a');\r\n  menuBtn.classList.add('menuBtn')\r\n  menuBtn.href = '#';\r\n  menuBtn.innerHTML = 'Menu'\r\n\r\n  const contactBtn = document.createElement('a');\r\n  contactBtn.classList.add('contactBtn');\r\n  contactBtn.href = '#';\r\n  contactBtn.innerText = 'Contact'\r\n\r\n  const buttons = [homeBtn, menuBtn, contactBtn]\r\n  for(let i=0; i < buttons.length; i++) {\r\n    headerContainer.appendChild(buttons[i]);\r\n  }\r\n  header.appendChild(headerContainer);\r\n  mainContainer.appendChild(header);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://jsRestaurant/./src/js/header.js?");

/***/ }),

/***/ "./src/js/homepage.js":
/*!****************************!*\
  !*** ./src/js/homepage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\r\n  const mainContainer = document.querySelector('.main-container')\r\n\r\n  const wrapper = document.createElement('div');\r\n  wrapper.classList.add('wrapper', 'd-flex', 'j-center');\r\n\r\n  const mainImages = document.createElement('div');\r\n  mainImages.classList.add('main-images');\r\n\r\n  const imageOne = document.createElement('img');\r\n  imageOne.classList.add('restaurant-photo');\r\n  imageOne.src = '../src/assets/images/restaurant.jpg';\r\n  imageOne.alt = 'Restaurant photo';\r\n\r\n  const imageTwo = document.createElement('img');\r\n  imageTwo.classList.add('blob');\r\n  imageTwo.src = '../src/assets/images/blob.png';\r\n  imageTwo.alt = 'Main image background';\r\n\r\n  const images = [imageOne, imageTwo];\r\n  for(let i=0; i < images.length; i++) {\r\n    mainImages.appendChild(images[i]);\r\n  }\r\n\r\n  wrapper.appendChild(mainImages);\r\n\r\n  const mainText = document.createElement('div');\r\n  mainText.classList.add('main-text');\r\n\r\n  const title = document.createElement('h1');\r\n  title.innerHTML = 'Restaurant <span>JS</span>';\r\n  mainText.appendChild(title)\r\n\r\n  const subTitle = document.createElement('h6');\r\n  subTitle.innerText = 'We have been serving to our valuable guests for more than a decade. We make sure our guests are fully satisfied with our services & the variety of cuisines to select from our menu.';\r\n  mainText.appendChild(subTitle);\r\n\r\n  wrapper.appendChild(mainText);\r\n\r\n  mainContainer.appendChild(wrapper);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home); \r\n\r\n\n\n//# sourceURL=webpack://jsRestaurant/./src/js/homepage.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/header */ \"./src/js/header.js\");\n/* harmony import */ var _js_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/homepage */ \"./src/js/homepage.js\");\n/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/menu */ \"./src/js/menu.js\");\n/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/contact */ \"./src/js/contact.js\");\n/* harmony import */ var _js_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/footer */ \"./src/js/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector('#content');\r\nconst mainContainer = document.createElement('div');\r\n\r\nmainContainer.classList.add('main-container');\r\ncontent.appendChild(mainContainer)\r\n\r\n;(0,_js_header__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n(0,_js_homepage__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_js_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n(0,_js_contact__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n(0,_js_footer__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst menuWrapper = document.querySelector('.menuWrapper');\r\nconst contactWrapper = document.querySelector('.contactWrapper');\r\n\r\nconst homeBtn = document.querySelector('.homeBtn')\r\nhomeBtn.addEventListener('click', () => {\r\n  wrapper.classList.remove('d-none');\r\n  menuWrapper.classList.add('d-none');\r\n  contactWrapper.classList.add('d-none');\r\n});\r\n\r\nconst menuBtn = document.querySelector('.menuBtn')\r\nmenuBtn.addEventListener('click', () => {\r\n  menuWrapper.classList.remove('d-none');\r\n  wrapper.classList.add('d-none');\r\n  contactWrapper.classList.add('d-none');\r\n});\r\n\r\n\r\nconst contactBtn = document.querySelector('.contactBtn')\r\ncontactBtn.addEventListener('click', () => {\r\n  contactWrapper.classList.remove('d-none')\r\n  wrapper.classList.add('d-none');\r\n  menuWrapper.classList.add('d-none');\r\n});\n\n//# sourceURL=webpack://jsRestaurant/./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst menu = () => {\r\n  const mainContainer = document.querySelector('.main-container');\r\n\r\n  const menuWrapper = document.createElement('div');\r\n  menuWrapper.classList.add('menuWrapper', 'd-flex', 'j-btw', 'd-none');\r\n\r\n  const menuContent = document.createElement('div');\r\n  menuContent.classList.add('menuContent');\r\n\r\n  const menuTitle = document.createElement('div');\r\n  menuTitle.classList.add('menuTitle');\r\n\r\n  const h1 = document.createElement('h1');\r\n  h1.innerText = 'Menu';\r\n\r\n  menuTitle.appendChild(h1);\r\n  menuContent.appendChild(menuTitle);\r\n\r\n  const menuItems = document.createElement('div');\r\n  menuItems.classList.add('menuItems');\r\n\r\n  const item = (name, desc, value) => {\r\n    const itemWrapper = document.createElement('div');\r\n    itemWrapper.classList.add('item');\r\n\r\n    const spanOne = document.createElement('span');\r\n    const h3 = document.createElement('h3');\r\n    h3.innerText = name;\r\n    const p = document.createElement('p');\r\n    p.innerText = desc;\r\n\r\n    spanOne.appendChild(h3);\r\n    spanOne.appendChild(p);\r\n    itemWrapper.appendChild(spanOne);\r\n\r\n    const spanTwo = document.createElement('span');\r\n    const valueStrong = document.createElement('strong');\r\n    valueStrong.classList.add('itemValue');\r\n    valueStrong.innerText = value;\r\n\r\n    spanTwo.appendChild(valueStrong);\r\n    itemWrapper.appendChild(spanTwo);\r\n\r\n    return itemWrapper;\r\n  }\r\n\r\n  const itemOne = item('OPTION 0', 'Testing', '$40');\r\n  const itemTwo = item('OPTION 1', 'Lorem ipsun is working well', '$60');\r\n\r\n  // Insert \"items\" you want to be displayed on the menu\r\n  const items = [itemOne, itemTwo];\r\n\r\n  for(let i=0; i < items.length; i += 1) {\r\n    menuItems.appendChild(items[i])\r\n  }\r\n\r\n  const menuImages = document.createElement('div');\r\n  menuImages.classList.add('menuImages');\r\n\r\n  const imageOne = document.createElement('img');\r\n  imageOne.classList.add('menu-photo');\r\n  imageOne.src = '../src/assets/images/menu.jpg';\r\n  imageOne.alt = 'Restaurant photo';\r\n\r\n  const imageTwo = document.createElement('img');\r\n  imageTwo.classList.add('blobMenu');\r\n  imageTwo.src = '../src/assets/images/blob2.png';\r\n  imageTwo.alt = 'Main image background';\r\n\r\n  const images = [imageOne, imageTwo];\r\n  for(let i=0; i < images.length; i++) {\r\n    menuImages.appendChild(images[i]);\r\n  }\r\n\r\n\r\n  menuContent.appendChild(menuItems);\r\n  menuWrapper.appendChild(menuContent);\r\n  menuWrapper.appendChild(menuImages);\r\n  mainContainer.appendChild(menuWrapper);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://jsRestaurant/./src/js/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;