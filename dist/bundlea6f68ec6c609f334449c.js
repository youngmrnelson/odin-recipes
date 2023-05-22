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
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes */ "./src/js/recipes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _myRecipes = /*#__PURE__*/new WeakMap();
var _toggleMenu = /*#__PURE__*/new WeakSet();
var _addFadeEffect = /*#__PURE__*/new WeakSet();
var _removeFadeEffect = /*#__PURE__*/new WeakSet();
var _getRecipesOfTheDay = /*#__PURE__*/new WeakSet();
var _renderRecipeOfTheDay = /*#__PURE__*/new WeakMap();
var _toggleRecipeForm = /*#__PURE__*/new WeakSet();
var _createRecipe = /*#__PURE__*/new WeakSet();
var _createRecipeCard = /*#__PURE__*/new WeakSet();
var _deleteRecipe = /*#__PURE__*/new WeakSet();
var _submitRecipe = /*#__PURE__*/new WeakSet();
var _openLibrary = /*#__PURE__*/new WeakSet();
var App = /*#__PURE__*/_createClass(function App() {
  var _this = this;
  _classCallCheck(this, App);
  _classPrivateMethodInitSpec(this, _openLibrary);
  _classPrivateMethodInitSpec(this, _submitRecipe);
  _classPrivateMethodInitSpec(this, _deleteRecipe);
  _classPrivateMethodInitSpec(this, _createRecipeCard);
  _classPrivateMethodInitSpec(this, _createRecipe);
  // Recipe Form Functions
  _classPrivateMethodInitSpec(this, _toggleRecipeForm);
  // Recipe of the Day Functions
  _classPrivateMethodInitSpec(this, _getRecipesOfTheDay);
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
  // DOM Variables - Navigation
  _defineProperty(this, "linkBtn", document.querySelector('.nav-btn'));
  _defineProperty(this, "linksContainer", document.querySelector('.nav-links'));
  _defineProperty(this, "links", document.querySelectorAll('.nav-link'));
  _defineProperty(this, "icons", document.querySelectorAll('i'));
  _defineProperty(this, "stepImages", document.querySelectorAll('.img-step'));
  // DOM Variables - Recipes of the Day
  _defineProperty(this, "recipesOfTheDayContainer", document.getElementById('recipes-of-the-day'));
  // DOM Variables - Recipe Library
  _defineProperty(this, "openLibraryBtn", document.querySelector('.btn-library'));
  _defineProperty(this, "createRecipeBtn", document.querySelector('.btn-create-recipe'));
  _defineProperty(this, "recipeDetailsEl", document.querySelector('.recipe-search-details'));
  _defineProperty(this, "recipeLibraryEl", document.querySelector('.recipe-search-library'));
  _defineProperty(this, "recipesContainerEl", document.querySelector('.recipes-container'));
  _defineProperty(this, "recipeSearchFormEl", document.getElementById('recipe-form'));
  _defineProperty(this, "recipeNameEl", document.getElementById('name'));
  _defineProperty(this, "recipeCaloriesEl", document.getElementById('calories'));
  _defineProperty(this, "recipeIngredientsEl", document.getElementById('ingredients'));
  _defineProperty(this, "submitRecipesBtn", document.getElementById('submit'));
  // Global Variables
  _classPrivateFieldInitSpec(this, _myRecipes, {
    writable: true,
    value: []
  });
  _classPrivateFieldInitSpec(this, _renderRecipeOfTheDay, {
    writable: true,
    value: function value(recipe) {
      var html = "\n        <figure class=\"recipe p-2\">\n        <img\n            src=\"".concat(recipe.image, "\"\n            alt=\"").concat(recipe.title, "\"\n            class=\"img recipe-img\"\n        />\n        <article class=\"recipe-title-container\">\n            <p class=\"recipe-title py-0\">").concat(recipe.title, "</p>\n            <p class=\"recipe-stat py-0\">\n            <span class=\"recipe-stat-alt\">").concat(recipe.healthScore, "</span> Health Score\n            </p>\n            <p class=\"recipe-stat py-0\">\n            <span class=\"recipe-stat-alt\">").concat(recipe.extendedIngredients.length, "</span> Ingredients\n            </p>\n            <a href=\"").concat(recipe.sourceUrl, "\" target=\"_blank\" class=\"recipe-link py-0\"\n            >Full Recipe</a\n            >\n        </article>\n        <button\n            class=\"btn btn-main btn-add-recipe p-1\"\n            aria-label=\"Add recipe to library\"\n        >\n            +\n        </button>\n        </figure>\n    ");
      _this.recipesOfTheDayContainer.insertAdjacentHTML('afterbegin', html);
    }
  });
  this.stepImages.forEach(function (img) {
    return _this.observer.observe(img);
  });
  _classPrivateMethodGet(this, _getRecipesOfTheDay, _getRecipesOfTheDay2).call(this);
  // Event Listeners - Navigation / Icons
  this.linkBtn.addEventListener('click', _classPrivateMethodGet(this, _toggleMenu, _toggleMenu2).bind(this));
  this.icons.forEach(function (icon) {
    // Add fade effect to hovered icon
    if (!icon.parentElement.classList.contains('nav-link')) {
      icon.parentElement.addEventListener('mouseover', _classPrivateMethodGet(_this, _addFadeEffect, _addFadeEffect2));
    }
    // Remove fade effect from icon
    icon.parentElement.addEventListener('mouseout', _classPrivateMethodGet(_this, _removeFadeEffect, _removeFadeEffect2));
  });
  // Event Listeners - Recipe Library
  this.createRecipeBtn.addEventListener('click', _classPrivateMethodGet(this, _toggleRecipeForm, _toggleRecipeForm2).bind(this));
  this.submitRecipesBtn.addEventListener('click', _classPrivateMethodGet(this, _submitRecipe, _submitRecipe2).bind(this));
  this.openLibraryBtn.addEventListener('click', _classPrivateMethodGet(this, _openLibrary, _openLibrary2).bind(this));
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
function _getRecipesOfTheDay2() {
  return _getRecipesOfTheDay3.apply(this, arguments);
}
function _getRecipesOfTheDay3() {
  _getRecipesOfTheDay3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var apiKey, res, _yield$res$json, recipes;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // API Key
          apiKey = '15bbf13471dc4f97abbef21174b3dd7b'; // Recipe Data
          _context.next = 4;
          return fetch("https://api.spoonacular.com/recipes/random?apiKey=".concat(apiKey), {
            method: 'GET'
          });
        case 4:
          res = _context.sent;
          _context.next = 7;
          return res.json();
        case 7:
          _yield$res$json = _context.sent;
          recipes = _yield$res$json.recipes;
          _classPrivateFieldGet(this, _renderRecipeOfTheDay).call(this, recipes[0]);
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[0, 12]]);
  }));
  return _getRecipesOfTheDay3.apply(this, arguments);
}
function _toggleRecipeForm2() {
  this.recipeSearchFormEl.classList.toggle('hidden');
  this.recipeNameEl.value = '';
  this.recipeCaloriesEl.value = '';
  this.recipeIngredientsEl.value = '';
}
function _createRecipe2() {
  var recipeName = this.recipeNameEl.value;
  var calories = this.recipeCaloriesEl.value;
  var ingredients = this.recipeIngredientsEl.value;
  var newRecipe = new _recipes__WEBPACK_IMPORTED_MODULE_0__["default"](recipeName, calories, ingredients);
  _classPrivateFieldGet(this, _myRecipes).push(newRecipe);
}
function _createRecipeCard2() {
  var _this2 = this;
  while (this.recipesContainerEl.firstChild) {
    this.recipesContainerEl.removeChild(this.recipesContainerEl.firstChild);
  }
  _classPrivateFieldGet(this, _myRecipes).forEach(function (recipe, index) {
    var html = "\n      <!-- Recipe Card -->\n            <figure class=\"recipe p-2\">\n              <img\n                src=\"images/recipes/recipe-of-day-1.jpg\"\n                alt=\"\"\n                class=\"img recipe-img\"\n              />\n              <article class=\"recipe-title-container\">\n                <p class=\"recipe-title py-0\">".concat(recipe.recipeName, "</p>\n                <p class=\"recipe-stat py-0\">\n                  <span class=\"recipe-stat-alt\">").concat(recipe.calories, "</span> Calories\n                </p>\n                <p class=\"recipe-stat py-0\">\n                  <span class=\"recipe-stat-alt\">").concat(recipe.ingredients, "</span> Ingredients\n                </p>\n                <button class=\"btn recipe-link py-0\">Full Recipe</button>\n                <button class=\"btn p-main btn-delete py-0\">\n                  Delete Recipe\n                </button>\n              </article>\n            </figure>\n      ");
    _this2.recipesContainerEl.insertAdjacentHTML('afterbegin', html);
    var deleteBtns = document.querySelectorAll('.btn-delete');
    deleteBtns.forEach(function (deleteBtn) {
      deleteBtn.addEventListener('click', function () {
        _classPrivateMethodGet(_this2, _deleteRecipe, _deleteRecipe2).call(_this2, index);
      });
    });
  });
}
function _deleteRecipe2(index) {
  _classPrivateFieldGet(this, _myRecipes).splice(index, 1);
  _classPrivateMethodGet(this, _createRecipeCard, _createRecipeCard2).call(this);
}
function _submitRecipe2(e) {
  e.preventDefault();
  _classPrivateMethodGet(this, _createRecipe, _createRecipe2).call(this);
  _classPrivateMethodGet(this, _createRecipeCard, _createRecipeCard2).call(this);
  _classPrivateMethodGet(this, _toggleRecipeForm, _toggleRecipeForm2).call(this);
}
function _openLibrary2() {
  this.recipeDetailsEl.classList.toggle('hidden');
  this.recipeLibraryEl.classList.toggle('hidden');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App());

/***/ }),

/***/ "./src/js/recipes.js":
/*!***************************!*\
  !*** ./src/js/recipes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Recipe)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// Recipes Constructor
var Recipe = /*#__PURE__*/_createClass(function Recipe(title, calories, ingredients) {
  _classCallCheck(this, Recipe);
  this.title = title;
  this.calories = calories;
  this.ingredients = ingredients;
});


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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n.flex-fd--c {\n  flex-direction: column;\n}\n@media (min-width: 767px) {\n  .flex-fd--c-mobile {\n    flex-direction: row;\n  }\n}\n\n.grid {\n  display: grid;\n}\n.grid-gc--auto {\n  grid-template-columns: repeat(6, minmax(250px));\n}\n@media (min-width: 767px) {\n  .grid-gc--2 {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.grid-col-full {\n  grid-column: 1/-1;\n}\n\n.ai-c {\n  align-items: center;\n}\n\n.jc-sb {\n  justify-content: space-between;\n}\n.jc-c {\n  justify-content: center;\n}\n\n.p-rel {\n  position: relative;\n}\n\n:root {\n  --gray-9: #212529;\n  --gray-7: #495057;\n  --gray-6: #868e96;\n  --gray-4: #ced4da;\n  --gray-3: #dee2e6;\n  --gray-1: #f1f3f5;\n  --gray-0: #f8f9fa;\n  --odin-primary: #ce973e;\n  --odin-light: #faf5ec;\n  --transition: all 0.25s;\n}\n\n.container {\n  max-width: 1200px;\n}\n.container-secondary {\n  max-width: 1000px;\n}\n\n.bg-hero {\n  position: relative;\n}\n.bg-hero::before {\n  content: \"\";\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center 30%/cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n.bg-light {\n  background: var(--odin-light);\n}\n\n.height-half {\n  height: 50vh;\n}\n\n.img {\n  display: block;\n  max-width: 100%;\n}\n.img-nav {\n  width: 50px;\n}\n.img-hero {\n  display: none;\n}\n@media (min-width: 767px) {\n  .img-hero {\n    display: block;\n    position: absolute;\n    top: 25px;\n    left: 150px;\n    width: 125px;\n  }\n}\n.img-step {\n  display: none;\n  transition: var(--transition);\n}\n@media (min-width: 767px) {\n  .img-step {\n    display: block;\n    width: 400px;\n  }\n}\n\n.img-shrink {\n  transform: scale(0.1);\n}\n.img-grow {\n  transform: scale(1);\n}\n\n.gap-1 {\n  gap: 8px;\n}\n.gap-2 {\n  gap: 16px;\n}\n.gap-3 {\n  gap: 24px;\n}\n\n.py-0 {\n  padding-block: 8px;\n}\n.py-1 {\n  padding-block: 24px;\n}\n.py-2 {\n  padding-block: 32px;\n}\n.py-3 {\n  padding-block: 44px;\n}\n.py-4 {\n  padding-block: 80px;\n}\n\n.pi-1 {\n  padding-inline: 8px;\n}\n.pi-2 {\n  padding-inline: 12px;\n}\n\n.pb-1 {\n  padding-bottom: 4px;\n}\n\n.p-0 {\n  padding: 4px;\n}\n.p-1 {\n  padding: 8px;\n}\n.p-2 {\n  padding: 12px;\n}\n.p-3 {\n  padding: 24px;\n}\n\n.my-1 {\n  margin-block: 12px;\n}\n.my-2 {\n  margin-block: 24px;\n}\n.my-3 {\n  margin-block: 36px;\n}\n.my-4 {\n  margin-block: 80px;\n}\n\n.mb-1 {\n  margin-bottom: 12px;\n}\n.mb-2 {\n  margin-bottom: 24px;\n}\n.mb-3 {\n  margin-bottom: 36px;\n}\n.mb-4 {\n  margin-bottom: 64px;\n}\n\n.ml-0 {\n  margin-left: 4px;\n}\n.ml-1 {\n  margin-left: 8px;\n}\n\n.mt-1 {\n  margin-top: 12px;\n}\n.mt-2 {\n  margin-top: 24px;\n}\n.mt-3 {\n  margin-top: 36px;\n}\n\n.m-auto-mobile, .m-auto {\n  margin-inline: auto;\n}\n@media (min-width: 1024px) {\n  .m-auto-mobile {\n    margin-inline: 0;\n  }\n}\n\n.ta-c {\n  text-align: center;\n}\n.ta-r {\n  text-align: right;\n}\n\n.ps-c {\n  place-self: center;\n}\n\n.bottom-line {\n  border-bottom: 4px solid var(--odin-primary);\n}\n\n.display-inline {\n  display: inline;\n}\n\n.border {\n  border-radius: 0 20px 0 20px;\n  border: 7px solid #fff;\n}\n\n.hidden {\n  display: none;\n}\n\n.btn {\n  cursor: pointer;\n  display: inline-block;\n  border: 2px solid transparent;\n  color: var(--gray-9);\n  background: transparent;\n  font-size: 2rem;\n  transition: var(--transition);\n}\n.btn-main {\n  background: var(--odin-primary);\n  color: #fff;\n}\n.btn-main:hover {\n  background: var(--odin-light);\n  color: var(--odin-primary);\n  border-color: var(--odin-primary);\n}\n.btn-delete {\n  color: #e03131;\n}\n.btn-add-recipe {\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n\n.recipe {\n  position: relative;\n  background: var(--gray-1);\n  border: 1px solid var(--gray-4);\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  transition: var(--transition);\n}\n.recipe:hover {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.recipe-img {\n  width: 250px;\n}\n.recipe-img-search {\n  width: 100px;\n}\n.recipe-title-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.recipe-title {\n  font-size: 1.8rem;\n  font-weight: 600;\n  border-bottom: 1px solid var(--gray-4);\n  grid-column: 1/-1;\n}\n.recipe-stat {\n  color: var(--gray-7);\n  font-size: 1.4rem;\n  border-bottom: 1px solid var(--gray-4);\n}\n.recipe-stat-alt {\n  color: var(--odin-primary);\n  font-weight: 600;\n}\n.recipe-link {\n  font-size: 1.6rem;\n  font-weight: 600;\n  color: var(--odin-primary);\n  border-bottom: 2px solid var(--odin-primary);\n  place-self: start;\n}\n\n#recipe-form {\n  position: absolute;\n  height: 300px;\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 0 999em rgba(0, 0, 0, 0.8);\n  z-index: 1;\n}\n\n@font-face {\n  font-family: \"Norse-Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"eot\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody {\n  color: var(--gray-9);\n  font-family: \"Poppins\", sans-serif;\n  line-height: 1.5;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n.a-nav {\n  color: var(--gray-6);\n  border-bottom: 2px solid transparent;\n  transition: var(--transition);\n}\n.a-nav:hover, .a-current {\n  color: var(--gray-9);\n  border-color: var(--odin-primary);\n}\n.a-main {\n  color: var(--odin-primary);\n}\n.a-main:hover {\n  filter: brightness(90%);\n}\n\n.h {\n  font-family: \"Norse-Bold\", cursive;\n}\n.h-main {\n  font-size: 6.2rem;\n  color: #fff;\n}\n.h-nav {\n  font-size: 2.2rem;\n  color: var(--gray-9);\n}\n.h-header {\n  font-size: 3rem;\n  color: var(--gray-9);\n}\n\n.p-main {\n  font-size: 1.6rem;\n}\n.p-main-alt {\n  font-size: 1.8rem;\n  color: var(--gray-6);\n}\n.p-subtitle {\n  text-transform: uppercase;\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #fff;\n}\n.p-subheader {\n  font-size: 2.2rem;\n  font-weight: 300;\n  color: var(--gray-6);\n}\n.p-step-number {\n  font-size: 4.2rem;\n  font-weight: 600;\n  color: var(--gray-4);\n}\n.p-step-number::before {\n  content: \"#\";\n}\n.p-step-title {\n  font-size: 3rem;\n  font-weight: 800;\n}\n.p-footer {\n  font-size: 1.4rem;\n}\n\n.i-nav {\n  font-size: 1.6rem;\n}\n\n.nav {\n  border-bottom: 1px solid var(--gray-3);\n}\n@media (min-width: 1024px) {\n  .nav-btn {\n    display: none;\n  }\n}\n.nav-links-active {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  height: 100vh;\n  padding: 24px;\n  border-right: 1px solid var(--gray-4);\n}\n.nav-link {\n  display: none;\n}\n.nav-link-active {\n  display: block;\n}\n@media (min-width: 1024px) {\n  .nav-link {\n    display: flex;\n  }\n}\n\n.recipe-search {\n  position: relative;\n}\n.recipe-search .recipe-search-header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n}\n@media (min-width: 767px) {\n  .recipe-search .recipe-search-header {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n.recipe-search .recipe-search-input {\n  border: none;\n  background: #eee;\n}\n.recipe-search .recipe-ingredients {\n  display: grid;\n  gap: 24px;\n}\n@media (min-width: 767px) {\n  .recipe-search .recipe-ingredients {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/main.scss","webpack://./src/scss/_layout.scss","webpack://./src/scss/_utilities.scss","webpack://./src/scss/_components.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_navigation.scss","webpack://./src/scss/_search.scss"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}","@use 'reset';\n@use 'layout';\n@use 'utilities';\n@use 'components';\n@use 'typography';\n@use 'navigation';\n@use 'search';\n\nhtml {\n    font-size: 62.5%;\n    scroll-behavior: smooth;\n}","// Flexbox Layouts\n.flex {\n    display: flex;\n    flex-wrap: wrap;\n\n    // FD-C\n    &-fd--c {\n        flex-direction: column;\n\n        // Mobile - To Row\n        &-mobile {\n            @media(min-width: 767px) {\n                flex-direction: row;\n            }\n        }\n    }\n}\n\n// Grid Layouts\n.grid {\n    display: grid; \n\n    &-gc--auto {\n        grid-template-columns: repeat(6, minmax(250px));\n    }\n\n    // GC-2\n    @media (min-width: 767px) {\n        &-gc--2 {\n            grid-template-columns: 1fr 1fr;\n        }\n    }\n\n    // Grid-col-full\n    &-col-full {\n        grid-column: 1 / -1;\n    }\n}\n\n// Align Items\n.ai {\n    &-c {\n        align-items: center;\n    }\n\n}\n\n// Justify Content\n.jc {\n    &-sb {\n        justify-content: space-between;\n    }\n\n    &-c {\n        justify-content: center;\n    }\n}\n\n// Position\n.p {\n    &-rel { position: relative; }\n}","// Variables\n:root {\n    --gray-9: #212529;\n    --gray-7: #495057;\n    --gray-6: #868e96;\n    --gray-4: #ced4da;\n    --gray-3: #dee2e6;\n    --gray-1: #f1f3f5;\n    --gray-0: #f8f9fa;\n    --odin-primary: #ce973e;\n    --odin-light: #faf5ec;\n    --transition: all 0.25s;\n}\n\n// Container\n.container {\n    max-width: 1200px;\n\n    &-secondary { max-width: 1000px }\n}\n\n// Backgrounds\n.bg {\n    &-hero {\n        position: relative;\n\n        &::before {\n            content: \"\";\n            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/header-img.jpg') no-repeat center 30%/cover;\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 100%;\n            width: 100%;\n            z-index: -1;\n        }\n    }\n\n    &-light {\n        background: var(--odin-light);\n    }\n}\n\n// Height\n.height {\n    &-half {\n        height: 50vh;\n    }\n}\n\n// Images\n.img {\n    display: block;\n    max-width: 100%;\n\n    &-nav {\n        width: 50px;\n    }\n\n    &-hero {\n        display: none;\n\n        @media(min-width: 767px) {\n            display: block;\n            position: absolute;\n            top: 25px;\n            left: 150px;\n            width: 125px;\n        }\n    }\n\n    &-step {\n        display: none;\n        transition: var(--transition);\n\n        @media (min-width: 767px) {\n            display: block;\n            width: 400px;\n        }\n    }\n}\n\n// Image Sizes\n.img {\n    &-shrink {\n        transform: scale(0.1);\n    }\n\n    &-grow {\n        transform: scale(1);\n    }\n}\n\n// Gap\n.gap {\n    &-1 { gap: 8px }\n    &-2 { gap: 16px }\n    &-3 { gap: 24px }\n}\n\n// Padding\n.py {\n    &-0 { padding-block: 8px }\n    &-1 { padding-block: 24px }\n    &-2 { padding-block: 32px }\n    &-3 { padding-block: 44px }\n    &-4 { padding-block: 80px }\n}\n\n.pi {\n    &-1 { padding-inline: 8px }\n    &-2 { padding-inline: 12px }\n}\n\n.pb {\n    &-1 { padding-bottom: 4px }\n}\n\n.p {\n    &-0 { padding: 4px }\n    &-1 { padding: 8px }\n    &-2 { padding: 12px }\n    &-3 { padding: 24px }\n}\n\n// Margin\n.my {\n    &-1 { margin-block: 12px }\n    &-2 { margin-block: 24px }\n    &-3 { margin-block: 36px }\n    &-4 { margin-block: 80px }\n}\n\n.mb {\n    &-1 { margin-bottom: 12px }\n    &-2 { margin-bottom: 24px }\n    &-3 { margin-bottom: 36px }\n    &-4 { margin-bottom: 64px }\n}\n\n.ml {\n    &-0 { margin-left: 4px }\n    &-1 { margin-left: 8px }\n}\n\n.mt {\n    &-1 { margin-top: 12px }\n    &-2 { margin-top: 24px }\n    &-3 { margin-top: 36px }\n}\n\n.m {\n    &-auto-mobile,\n    &-auto { \n        margin-inline: auto \n    }\n    @media(min-width: 1024px) {\n        &-auto-mobile {\n            margin-inline: 0;\n        }\n    }\n}\n\n// Text Align\n.ta {\n    &-c { text-align: center }\n    &-r { text-align: right }\n}\n\n// Place Self\n.ps {\n    &-c {\n        place-self: center;\n    }\n}\n\n// Bottom Line\n.bottom-line { \n    border-bottom: 4px solid var(--odin-primary);\n}\n\n// Display\n.display {\n    &-inline {\n        display: inline;\n    }\n}\n\n// Border Radius\n.border {\n    border-radius: 0 20px 0 20px;\n    border: 7px solid #fff;\n}\n\n// Hidden\n.hidden {\n    display: none;\n}\n","// Buttons\n.btn {\n    cursor: pointer;\n    display: inline-block;\n    border: 2px solid transparent;\n    color: var(--gray-9);\n    background: transparent;\n    font-size: 2rem;\n    transition: var(--transition);\n\n    &-main {\n        background: var(--odin-primary);\n        color: #fff;\n\n        &:hover {\n            background: var(--odin-light);\n            color: var(--odin-primary);\n            border-color: var(--odin-primary);\n        }\n    }\n\n    &-delete {\n        color: #e03131;\n    }\n\n    &-add-recipe {\n        position: absolute;\n        top: -15px;\n        right: -15px;\n        height: 50px;\n        width: 50px;\n        border-radius: 50%;\n    }\n}\n\n// Recipe Card\n.recipe {\n    position: relative;\n    background: var(--gray-1);\n    border: 1px solid var(--gray-4);\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    transition: var(--transition);\n\n    &:hover {\n        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n    }\n\n    &-img {\n        width: 250px;\n\n        &-search {\n            width: 100px;\n        }\n    }\n\n    &-title-container {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    &-title {\n        font-size: 1.8rem;\n        font-weight: 600;\n        border-bottom: 1px solid var(--gray-4);\n        grid-column: 1 / -1;\n    }\n\n    &-stat {\n        color: var(--gray-7);\n        font-size: 1.4rem;\n        border-bottom: 1px solid var(--gray-4);\n\n        &-alt {\n            color: var(--odin-primary);\n            font-weight: 600;\n        }\n    }\n    \n    &-link {\n        font-size: 1.6rem;\n        font-weight: 600;\n        color: var(--odin-primary);\n        border-bottom: 2px solid var(--odin-primary);\n        place-self: start;\n    }\n}\n\n// Recipe Form\n#recipe-form {\n    position: absolute;\n    height: 300px;\n    width: 400px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 0 0 0 999em rgba(0, 0, 0, 0.8);\n    z-index: 1;\n}","// Fonts\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');\n@font-face {\n    font-family:\"Norse-Bold\";\n    src:url(\"../assets/fonts/Norse-Bold.eot\") format(\"eot\"),\n        url(\"../assets/fonts/Norse-Bold.woff\") format(\"woff\"),\n        url(\"../assets/fonts/Norse-Bold.ttf\") format(\"truetype\");\n    font-weight:normal;\n    font-style:normal;\n}\n\n// General Styling\nbody {\n    color: var(--gray-9);\n    font-family: 'Poppins', sans-serif;\n    line-height: 1.5;\n}\n\na { \n    text-decoration: none; \n    color: inherit;\n}\n\n.a {\n    &-nav {\n        color: var(--gray-6);\n        border-bottom: 2px solid transparent;\n        transition: var(--transition);\n    }\n\n    &-nav:hover,\n    &-current {\n        color: var(--gray-9);\n        border-color: var(--odin-primary);\n    }\n\n    &-main {\n        color: var(--odin-primary);\n\n        &:hover {\n            filter: brightness(90%);\n        }\n    }\n}\n\n// Headings\n.h {\n    font-family: \"Norse-Bold\", cursive;\n\n    &-main {\n        font-size: 6.2rem;\n        color: #fff;\n    }\n\n    &-nav {\n        font-size: 2.2rem;\n        color: var(--gray-9);\n    }\n\n    &-header {\n        font-size: 3rem;\n        color: var(--gray-9);\n    }\n}\n\n// Paragraphs\n.p {\n    &-main {\n        font-size: 1.6rem;\n\n        &-alt {\n            font-size: 1.8rem;\n            color: var(--gray-6);\n        }\n    }\n\n    &-subtitle {\n        text-transform: uppercase;\n        font-size: 2.2rem;\n        font-weight: 600;\n        color: #fff;\n    }\n\n    &-subheader {\n        font-size: 2.2rem;\n        font-weight: 300;\n        color: var(--gray-6);\n    }\n\n    &-step-number {\n        font-size: 4.2rem;\n        font-weight: 600;\n        color: var(--gray-4);\n\n        &::before {\n            content: \"#\";\n        }\n    }\n\n    &-step-title {\n        font-size: 3rem;\n        font-weight: 800;\n    }\n\n    &-footer {\n        font-size: 1.4rem;\n    }\n}\n\n// Icons\n.i {\n    &-nav {\n        font-size: 1.6rem;\n    }\n}",".nav {\n    border-bottom: 1px solid var(--gray-3);\n\n    &-btn {\n        @media(min-width: 1024px) {\n            display: none;\n        }\n    }\n\n    &-links {\n        &-active {\n            position: absolute;\n            top: 0;\n            left: 0;\n            z-index: 10;\n            display: flex;\n            flex-direction: column;\n            background: #fff;\n            height: 100vh;\n            padding: 24px;\n            border-right: 1px solid var(--gray-4)\n        }\n    }\n\n    &-link {        \n        display: none; \n\n        &-active {\n            display: block;\n        }\n\n        @media(min-width: 1024px) {\n            display: flex;\n        }\n    }\n}",".recipe-search {\n    position: relative;\n    \n    .recipe-search-header {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: stretch;\n\n        @media(min-width: 767px) {\n            flex-direction: row;\n            align-items: center;\n        }\n    }\n\n    .recipe-search-input {\n        border: none;\n        background: #eee;\n    }\n\n    .recipe-ingredients {\n        display: grid;\n        gap: 24px;\n        \n        @media(min-width:  767px) {\n            grid-template-columns: 1fr 1fr;\n        }\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=bundlea6f68ec6c609f334449c.js.map