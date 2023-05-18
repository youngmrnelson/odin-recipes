/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _toggleMenu = /*#__PURE__*/new WeakSet();
var _addFadeEffect = /*#__PURE__*/new WeakSet();
var _removeFadeEffect = /*#__PURE__*/new WeakSet();
var App = /*#__PURE__*/_createClass(function App() {
  var _this = this;
  _classCallCheck(this, App);
  _classPrivateMethodInitSpec(this, _removeFadeEffect);
  _classPrivateMethodInitSpec(this, _addFadeEffect);
  // Navigation Menu Functions
  _classPrivateMethodInitSpec(this, _toggleMenu);
  // Observer
  _defineProperty(this, "observer", new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('img-shrink');
        entry.target.classList.add('img-grow');
        _this.observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.75
  }));
  // DOM Variables
  _defineProperty(this, "button", document.querySelector('.nav-btn'));
  _defineProperty(this, "linksContainer", document.querySelector('.nav-links'));
  _defineProperty(this, "links", document.querySelectorAll('.nav-link'));
  _defineProperty(this, "icons", document.querySelectorAll('i'));
  _defineProperty(this, "stepImages", document.querySelectorAll('.img-step'));
  this.stepImages.forEach(function (img) {
    return _this.observer.observe(img);
  });
  // Event Listeners
  this.button.addEventListener('click', _classPrivateMethodGet(this, _toggleMenu, _toggleMenu2).bind(this));
  this.links.forEach(function (link) {
    return link.addEventListener('click', _classPrivateMethodGet(_this, _toggleMenu, _toggleMenu2).bind(_this));
  });
  this.icons.forEach(function (icon) {
    // Add fade effect to hovered icon
    if (!icon.parentElement.classList.contains('nav-link')) {
      icon.parentElement.addEventListener('mouseover', _classPrivateMethodGet(_this, _addFadeEffect, _addFadeEffect2));
    }
    // Remove fade effect from icon
    icon.parentElement.addEventListener('mouseout', _classPrivateMethodGet(_this, _removeFadeEffect, _removeFadeEffect2));
  });
});
function _toggleMenu2() {
  this.linksContainer.classList.toggle('nav-links-active');
  this.links.forEach(function (link) {
    return link.classList.toggle('nav-link-active');
  });
}
function _addFadeEffect2() {
  this.classList.add('fa-fade');
}
function _removeFadeEffect2() {
  this.classList.remove('fa-fade');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header-img.jpg */ "./src/assets/images/header-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Norse-Bold.eot */ "./src/assets/fonts/Norse-Bold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Norse-Bold.woff */ "./src/assets/fonts/Norse-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Norse-Bold.ttf */ "./src/assets/fonts/Norse-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n.flex-fd--c {\n  flex-direction: column;\n}\n@media (min-width: 767px) {\n  .flex-fd--c-mobile {\n    flex-direction: row;\n  }\n}\n\n.grid {\n  display: grid;\n}\n.grid-gc--auto {\n  grid-template-columns: repeat(6, minmax(250px));\n}\n@media (min-width: 767px) {\n  .grid-gc--2 {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.grid-col-full {\n  grid-column: 1/-1;\n}\n\n.ai-c {\n  align-items: center;\n}\n\n.jc-sb {\n  justify-content: space-between;\n}\n.jc-c {\n  justify-content: center;\n}\n\n.p-rel {\n  position: relative;\n}\n\n:root {\n  --gray-9: #212529;\n  --gray-7: #495057;\n  --gray-6: #868e96;\n  --gray-4: #ced4da;\n  --gray-3: #dee2e6;\n  --gray-1: #f1f3f5;\n  --gray-0: #f8f9fa;\n  --odin-primary: #ce973e;\n  --odin-light: #faf5ec;\n  --transition: all 0.25s;\n}\n\n.container {\n  max-width: 1200px;\n}\n.container-secondary {\n  max-width: 1000px;\n}\n\n.bg-hero {\n  position: relative;\n}\n.bg-hero::before {\n  content: \"\";\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center 30%/cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n.bg-light {\n  background: var(--odin-light);\n}\n\n.height-half {\n  height: 50vh;\n}\n\n.img {\n  display: block;\n  max-width: 100%;\n}\n.img-nav {\n  width: 50px;\n}\n.img-hero {\n  display: none;\n}\n@media (min-width: 767px) {\n  .img-hero {\n    display: block;\n    position: absolute;\n    top: 25px;\n    left: 150px;\n    width: 125px;\n  }\n}\n.img-step {\n  display: none;\n  transition: var(--transition);\n}\n@media (min-width: 767px) {\n  .img-step {\n    display: block;\n    width: 400px;\n  }\n}\n\n.img-shrink {\n  transform: scale(0.1);\n}\n.img-grow {\n  transform: scale(1);\n}\n\n.gap-1 {\n  gap: 8px;\n}\n.gap-2 {\n  gap: 16px;\n}\n.gap-3 {\n  gap: 24px;\n}\n\n.py-0 {\n  padding-block: 8px;\n}\n.py-1 {\n  padding-block: 24px;\n}\n.py-2 {\n  padding-block: 32px;\n}\n.py-3 {\n  padding-block: 44px;\n}\n.py-4 {\n  padding-block: 80px;\n}\n\n.pi-1 {\n  padding-inline: 8px;\n}\n.pi-2 {\n  padding-inline: 12px;\n}\n\n.pb-1 {\n  padding-bottom: 4px;\n}\n\n.p-0 {\n  padding: 4px;\n}\n.p-1 {\n  padding: 8px;\n}\n.p-2 {\n  padding: 12px;\n}\n.p-3 {\n  padding: 24px;\n}\n\n.my-1 {\n  margin-block: 12px;\n}\n.my-2 {\n  margin-block: 24px;\n}\n.my-3 {\n  margin-block: 36px;\n}\n.my-4 {\n  margin-block: 80px;\n}\n\n.mb-1 {\n  margin-bottom: 12px;\n}\n.mb-2 {\n  margin-bottom: 24px;\n}\n.mb-3 {\n  margin-bottom: 36px;\n}\n.mb-4 {\n  margin-bottom: 64px;\n}\n\n.ml-0 {\n  margin-left: 4px;\n}\n.ml-1 {\n  margin-left: 8px;\n}\n\n.mt-1 {\n  margin-top: 12px;\n}\n.mt-2 {\n  margin-top: 24px;\n}\n.mt-3 {\n  margin-top: 36px;\n}\n\n.m-auto {\n  margin-inline: auto;\n}\n\n.ta-c {\n  text-align: center;\n}\n.ta-r {\n  text-align: right;\n}\n\n.ps-c {\n  place-self: center;\n}\n\n.bottom-line {\n  border-bottom: 4px solid var(--odin-primary);\n}\n\n.display-inline {\n  display: inline;\n}\n\n.border {\n  border-radius: 0 20px 0 20px;\n  border: 7px solid #fff;\n}\n\n.hidden {\n  display: none;\n}\n\n.btn {\n  cursor: pointer;\n  display: inline-block;\n  border: 2px solid transparent;\n  color: var(--gray-9);\n  background: transparent;\n  font-size: 2rem;\n  transition: var(--transition);\n}\n.btn-main {\n  background: var(--odin-primary);\n  color: #fff;\n}\n.btn-main:hover {\n  background: var(--odin-light);\n  color: var(--odin-primary);\n  border-color: var(--odin-primary);\n}\n.btn-delete {\n  color: #e03131;\n}\n.btn-add-recipe {\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n\n.recipe {\n  position: relative;\n  background: var(--gray-1);\n  border: 1px solid var(--gray-4);\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  transition: var(--transition);\n}\n.recipe:hover {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.recipe-img {\n  width: 250px;\n}\n.recipe-img-search {\n  width: 100px;\n}\n.recipe-title-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.recipe-title {\n  font-size: 1.8rem;\n  font-weight: 600;\n  border-bottom: 1px solid var(--gray-4);\n  grid-column: 1/-1;\n}\n.recipe-stat {\n  color: var(--gray-7);\n  font-size: 1.4rem;\n  border-bottom: 1px solid var(--gray-4);\n}\n.recipe-stat-alt {\n  color: var(--odin-primary);\n  font-weight: 600;\n}\n.recipe-link {\n  font-size: 1.6rem;\n  font-weight: 600;\n  color: var(--odin-primary);\n  border-bottom: 2px solid var(--odin-primary);\n  place-self: start;\n}\n\n#recipe-form {\n  position: absolute;\n  height: 300px;\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 0 999em rgba(0, 0, 0, 0.8);\n  z-index: 1;\n}\n\n@font-face {\n  font-family: \"Norse-Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"eot\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody {\n  color: var(--gray-9);\n  font-family: \"Poppins\", sans-serif;\n  line-height: 1.5;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n.a-nav {\n  color: var(--gray-6);\n  border-bottom: 2px solid transparent;\n  transition: var(--transition);\n}\n.a-nav:hover, .a-current {\n  color: var(--gray-9);\n  border-color: var(--odin-primary);\n}\n.a-main {\n  color: var(--odin-primary);\n}\n.a-main:hover {\n  filter: brightness(90%);\n}\n\n.h {\n  font-family: \"Norse-Bold\", cursive;\n}\n.h-main {\n  font-size: 6.2rem;\n  color: #fff;\n}\n.h-nav {\n  font-size: 2.2rem;\n  color: var(--gray-9);\n}\n.h-header {\n  font-size: 3rem;\n  color: var(--gray-9);\n}\n\n.p-main {\n  font-size: 1.6rem;\n}\n.p-main-alt {\n  font-size: 1.8rem;\n  color: var(--gray-6);\n}\n.p-subtitle {\n  text-transform: uppercase;\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #fff;\n}\n.p-subheader {\n  font-size: 2.2rem;\n  font-weight: 300;\n  color: var(--gray-6);\n}\n.p-step-number {\n  font-size: 4.2rem;\n  font-weight: 600;\n  color: var(--gray-4);\n}\n.p-step-number::before {\n  content: \"#\";\n}\n.p-step-title {\n  font-size: 3rem;\n  font-weight: 800;\n}\n.p-footer {\n  font-size: 1.4rem;\n}\n\n.i-nav {\n  font-size: 1.6rem;\n}\n\n.nav {\n  border-bottom: 1px solid var(--gray-3);\n}\n@media (min-width: 1024px) {\n  .nav-btn {\n    display: none;\n  }\n}\n.nav-links-active {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  height: 100vh;\n  padding: 24px;\n  border-right: 1px solid var(--gray-4);\n}\n.nav-link {\n  display: none;\n}\n.nav-link-active {\n  display: block;\n}\n@media (min-width: 1024px) {\n  .nav-link {\n    display: flex;\n  }\n}\n\n@media (min-width: 767px) {\n  .grid-search {\n    grid-template-columns: 6fr 2fr;\n  }\n  .grid-search-results,\n  .grid-search-description {\n    grid-column: 1/-1;\n  }\n}\n@media (min-width: 767px) and (min-width: 1024px) {\n  .grid-search-results {\n    grid-column: 2;\n  }\n  .grid-search-description {\n    grid-column: 1;\n  }\n}\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/main.scss","webpack://./src/scss/_layout.scss","webpack://./src/scss/_utilities.scss","webpack://./src/scss/_components.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_navigation.scss","webpack://./src/scss/_search.scss"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}","@use 'reset';\n@use 'layout';\n@use 'utilities';\n@use 'components';\n@use 'typography';\n@use 'navigation';\n@use 'search';\n\nhtml {\n    font-size: 62.5%;\n    scroll-behavior: smooth;\n}","// Flexbox Layouts\n.flex {\n    display: flex;\n    flex-wrap: wrap;\n\n    // FD-C\n    &-fd--c {\n        flex-direction: column;\n\n        // Mobile - To Row\n        &-mobile {\n            @media(min-width: 767px) {\n                flex-direction: row;\n            }\n        }\n    }\n}\n\n// Grid Layouts\n.grid {\n    display: grid; \n\n    &-gc--auto {\n        grid-template-columns: repeat(6, minmax(250px));\n    }\n\n    // GC-2\n    @media (min-width: 767px) {\n        &-gc--2 {\n            grid-template-columns: 1fr 1fr;\n        }\n    }\n\n    // Grid-col-full\n    &-col-full {\n        grid-column: 1 / -1;\n    }\n}\n\n// Align Items\n.ai {\n    &-c {\n        align-items: center;\n    }\n\n}\n\n// Justify Content\n.jc {\n    &-sb {\n        justify-content: space-between;\n    }\n\n    &-c {\n        justify-content: center;\n    }\n}\n\n// Position\n.p {\n    &-rel { position: relative; }\n}","// Variables\n:root {\n    --gray-9: #212529;\n    --gray-7: #495057;\n    --gray-6: #868e96;\n    --gray-4: #ced4da;\n    --gray-3: #dee2e6;\n    --gray-1: #f1f3f5;\n    --gray-0: #f8f9fa;\n    --odin-primary: #ce973e;\n    --odin-light: #faf5ec;\n    --transition: all 0.25s;\n}\n\n// Container\n.container {\n    max-width: 1200px;\n\n    &-secondary { max-width: 1000px }\n}\n\n// Backgrounds\n.bg {\n    &-hero {\n        position: relative;\n\n        &::before {\n            content: \"\";\n            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/header-img.jpg') no-repeat center 30%/cover;\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 100%;\n            width: 100%;\n            z-index: -1;\n        }\n    }\n\n    &-light {\n        background: var(--odin-light);\n    }\n}\n\n// Height\n.height {\n    &-half {\n        height: 50vh;\n    }\n}\n\n// Images\n.img {\n    display: block;\n    max-width: 100%;\n\n    &-nav {\n        width: 50px;\n    }\n\n    &-hero {\n        display: none;\n\n        @media(min-width: 767px) {\n            display: block;\n            position: absolute;\n            top: 25px;\n            left: 150px;\n            width: 125px;\n        }\n    }\n\n    &-step {\n        display: none;\n        transition: var(--transition);\n\n        @media (min-width: 767px) {\n            display: block;\n            width: 400px;\n        }\n    }\n}\n\n// Image Sizes\n.img {\n    &-shrink {\n        transform: scale(0.1);\n    }\n\n    &-grow {\n        transform: scale(1);\n    }\n}\n\n// Gap\n.gap {\n    &-1 { gap: 8px }\n    &-2 { gap: 16px }\n    &-3 { gap: 24px }\n}\n\n// Padding\n.py {\n    &-0 { padding-block: 8px }\n    &-1 { padding-block: 24px }\n    &-2 { padding-block: 32px }\n    &-3 { padding-block: 44px }\n    &-4 { padding-block: 80px }\n}\n\n.pi {\n    &-1 { padding-inline: 8px }\n    &-2 { padding-inline: 12px }\n}\n\n.pb {\n    &-1 { padding-bottom: 4px }\n}\n\n.p {\n    &-0 { padding: 4px }\n    &-1 { padding: 8px }\n    &-2 { padding: 12px }\n    &-3 { padding: 24px }\n}\n\n// Margin\n.my {\n    &-1 { margin-block: 12px }\n    &-2 { margin-block: 24px }\n    &-3 { margin-block: 36px }\n    &-4 { margin-block: 80px }\n}\n\n.mb {\n    &-1 { margin-bottom: 12px }\n    &-2 { margin-bottom: 24px }\n    &-3 { margin-bottom: 36px }\n    &-4 { margin-bottom: 64px }\n}\n\n.ml {\n    &-0 { margin-left: 4px }\n    &-1 { margin-left: 8px }\n}\n\n.mt {\n    &-1 { margin-top: 12px }\n    &-2 { margin-top: 24px }\n    &-3 { margin-top: 36px }\n}\n\n.m {\n    &-auto { margin-inline: auto }\n}\n\n// Text Align\n.ta {\n    &-c { text-align: center }\n    &-r { text-align: right }\n}\n\n// Place Self\n.ps {\n    &-c {\n        place-self: center;\n    }\n}\n\n// Bottom Line\n.bottom-line { \n    border-bottom: 4px solid var(--odin-primary);\n}\n\n// Display\n.display {\n    &-inline {\n        display: inline;\n    }\n}\n\n// Border Radius\n.border {\n    border-radius: 0 20px 0 20px;\n    border: 7px solid #fff;\n}\n\n// Hidden\n.hidden {\n    display: none;\n}\n","// Buttons\n.btn {\n    cursor: pointer;\n    display: inline-block;\n    border: 2px solid transparent;\n    color: var(--gray-9);\n    background: transparent;\n    font-size: 2rem;\n    transition: var(--transition);\n\n    &-main {\n        background: var(--odin-primary);\n        color: #fff;\n\n        &:hover {\n            background: var(--odin-light);\n            color: var(--odin-primary);\n            border-color: var(--odin-primary);\n        }\n    }\n\n    &-delete {\n        color: #e03131;\n    }\n\n    &-add-recipe {\n        position: absolute;\n        top: -15px;\n        right: -15px;\n        height: 50px;\n        width: 50px;\n        border-radius: 50%;\n    }\n}\n\n// Recipe Card\n.recipe {\n    position: relative;\n    background: var(--gray-1);\n    border: 1px solid var(--gray-4);\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    transition: var(--transition);\n\n    &:hover {\n        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n    }\n\n    &-img {\n        width: 250px;\n\n        &-search {\n            width: 100px;\n        }\n    }\n\n    &-title-container {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    &-title {\n        font-size: 1.8rem;\n        font-weight: 600;\n        border-bottom: 1px solid var(--gray-4);\n        grid-column: 1 / -1;\n    }\n\n    &-stat {\n        color: var(--gray-7);\n        font-size: 1.4rem;\n        border-bottom: 1px solid var(--gray-4);\n\n        &-alt {\n            color: var(--odin-primary);\n            font-weight: 600;\n        }\n    }\n    \n    &-link {\n        font-size: 1.6rem;\n        font-weight: 600;\n        color: var(--odin-primary);\n        border-bottom: 2px solid var(--odin-primary);\n        place-self: start;\n    }\n}\n\n// Recipe Form\n#recipe-form {\n    position: absolute;\n    height: 300px;\n    width: 400px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 0 0 0 999em rgba(0, 0, 0, 0.8);\n    z-index: 1;\n}","// Fonts\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');\n@font-face {\n    font-family:\"Norse-Bold\";\n    src:url(\"../assets/fonts/Norse-Bold.eot\") format(\"eot\"),\n        url(\"../assets/fonts/Norse-Bold.woff\") format(\"woff\"),\n        url(\"../assets/fonts/Norse-Bold.ttf\") format(\"truetype\");\n    font-weight:normal;\n    font-style:normal;\n}\n\n// General Styling\nbody {\n    color: var(--gray-9);\n    font-family: 'Poppins', sans-serif;\n    line-height: 1.5;\n}\n\na { \n    text-decoration: none; \n    color: inherit;\n}\n\n.a {\n    &-nav {\n        color: var(--gray-6);\n        border-bottom: 2px solid transparent;\n        transition: var(--transition);\n    }\n\n    &-nav:hover,\n    &-current {\n        color: var(--gray-9);\n        border-color: var(--odin-primary);\n    }\n\n    &-main {\n        color: var(--odin-primary);\n\n        &:hover {\n            filter: brightness(90%);\n        }\n    }\n}\n\n// Headings\n.h {\n    font-family: \"Norse-Bold\", cursive;\n\n    &-main {\n        font-size: 6.2rem;\n        color: #fff;\n    }\n\n    &-nav {\n        font-size: 2.2rem;\n        color: var(--gray-9);\n    }\n\n    &-header {\n        font-size: 3rem;\n        color: var(--gray-9);\n    }\n}\n\n// Paragraphs\n.p {\n    &-main {\n        font-size: 1.6rem;\n\n        &-alt {\n            font-size: 1.8rem;\n            color: var(--gray-6);\n        }\n    }\n\n    &-subtitle {\n        text-transform: uppercase;\n        font-size: 2.2rem;\n        font-weight: 600;\n        color: #fff;\n    }\n\n    &-subheader {\n        font-size: 2.2rem;\n        font-weight: 300;\n        color: var(--gray-6);\n    }\n\n    &-step-number {\n        font-size: 4.2rem;\n        font-weight: 600;\n        color: var(--gray-4);\n\n        &::before {\n            content: \"#\";\n        }\n    }\n\n    &-step-title {\n        font-size: 3rem;\n        font-weight: 800;\n    }\n\n    &-footer {\n        font-size: 1.4rem;\n    }\n}\n\n// Icons\n.i {\n    &-nav {\n        font-size: 1.6rem;\n    }\n}",".nav {\n    border-bottom: 1px solid var(--gray-3);\n\n    &-btn {\n        @media(min-width: 1024px) {\n            display: none;\n        }\n    }\n\n    &-links {\n        &-active {\n            position: absolute;\n            top: 0;\n            left: 0;\n            z-index: 10;\n            display: flex;\n            flex-direction: column;\n            background: #fff;\n            height: 100vh;\n            padding: 24px;\n            border-right: 1px solid var(--gray-4)\n        }\n    }\n\n    &-link {        \n        display: none; \n\n        &-active {\n            display: block;\n        }\n\n        @media(min-width: 1024px) {\n            display: flex;\n        }\n    }\n}","@media(min-width: 767px) {\n    .grid-search {\n        grid-template-columns: 6fr 2fr;\n    }\n\n    .grid-search-results,\n    .grid-search-description {\n        grid-column: 1 / -1;\n    }\n\n    @media(min-width: 1024px) {\n        .grid-search-results {\n            grid-column: 2;\n        }\n\n        .grid-search-description {\n            grid-column: 1;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Norse-Bold.eot":
/*!*****************************************!*\
  !*** ./src/assets/fonts/Norse-Bold.eot ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Norse-Bold.eot";

/***/ }),

/***/ "./src/assets/fonts/Norse-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/assets/fonts/Norse-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Norse-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/Norse-Bold.woff":
/*!******************************************!*\
  !*** ./src/assets/fonts/Norse-Bold.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Norse-Bold.woff";

/***/ }),

/***/ "./src/assets/images/header-img.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/header-img.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "header-img.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");
/* eslint-disable import/extensions */
// Styles


})();

/******/ })()
;
//# sourceMappingURL=bundle4b77a1ed12bdd08dabd2.js.map