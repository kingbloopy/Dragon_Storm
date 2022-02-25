/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_dragon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/dragon */ \"./src/scripts/dragon.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', function (event) {\n  console.log('DOM fully loaded!');\n  var canvas = document.getElementsByTagName('canvas')[0];\n  var ctx = canvas.getContext('2d');\n  window.ctx = ctx;\n  window.Game = _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  window.Dragon = _scripts_dragon__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  new _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxVQUFDQyxLQUFELEVBQVc7QUFDckRDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FULEVBQUFBLE1BQU0sQ0FBQ1EsR0FBUCxHQUFhQSxHQUFiO0FBQ0FSLEVBQUFBLE1BQU0sQ0FBQ0QsSUFBUCxHQUFjQSxxREFBZDtBQUNBQyxFQUFBQSxNQUFNLENBQUNGLE1BQVAsR0FBZ0JBLHVEQUFoQjtBQUNBLE1BQUlDLHFEQUFKLENBQVNTLEdBQVQ7QUFDRCxDQVREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJhZ29uX3N0b3JtLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYWdvbiBmcm9tIFwiLi9zY3JpcHRzL2RyYWdvblwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET00gZnVsbHkgbG9hZGVkIScpO1xuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKVswXTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIHdpbmRvdy5jdHggPSBjdHg7XG4gIHdpbmRvdy5HYW1lID0gR2FtZTtcbiAgd2luZG93LkRyYWdvbiA9IERyYWdvbjtcbiAgbmV3IEdhbWUoY3R4KTtcbn0pOyJdLCJuYW1lcyI6WyJEcmFnb24iLCJHYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjdHgiLCJnZXRDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/dragon.js":
/*!*******************************!*\
  !*** ./src/scripts/dragon.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Dragon = /*#__PURE__*/function () {\n  function Dragon(ctx) {\n    _classCallCheck(this, Dragon);\n\n    this.dragon = new Image();\n    this.dragon.src = \"assets/dragon.png\";\n    this.ctx = ctx;\n    this.xdim = 285;\n    this.ydim = 780;\n  }\n\n  _createClass(Dragon, [{\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.drawImage(this.dragon, this.xdim, this.ydim, 200, 200);\n    }\n  }, {\n    key: \"startmove\",\n    value: function startmove() {\n      if (this.ydim !== 520) {\n        this.ctx.clearRect(0, 0, 737, 720);\n        this.ydim -= 1;\n        this.draw();\n      }\n    }\n  }]);\n\n  return Dragon;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dragon); // module.exports = Dragon;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kcmFnb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUNNQTtBQUNKLGtCQUFZQyxHQUFaLEVBQWdCO0FBQUE7O0FBQ2QsU0FBS0MsTUFBTCxHQUFjLElBQUlDLEtBQUosRUFBZDtBQUNBLFNBQUtELE1BQUwsQ0FBWUUsR0FBWixHQUFrQixtQkFBbEI7QUFDQSxTQUFLSCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLSSxJQUFMLEdBQVksR0FBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxHQUFaO0FBQ0Q7Ozs7V0FFRCxnQkFBTTtBQUNKLFdBQUtMLEdBQUwsQ0FBU00sU0FBVCxDQUFtQixLQUFLTCxNQUF4QixFQUFnQyxLQUFLRyxJQUFyQyxFQUEyQyxLQUFLQyxJQUFoRCxFQUFzRCxHQUF0RCxFQUEyRCxHQUEzRDtBQUNEOzs7V0FFRCxxQkFBVztBQUNULFVBQUksS0FBS0EsSUFBTCxLQUFjLEdBQWxCLEVBQXNCO0FBQ3BCLGFBQUtMLEdBQUwsQ0FBU08sU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixHQUF6QixFQUE4QixHQUE5QjtBQUNBLGFBQUtGLElBQUwsSUFBYSxDQUFiO0FBQ0EsYUFBS0csSUFBTDtBQUNEO0FBQ0Y7Ozs7OztBQUdILCtEQUFlVCxNQUFmLEdBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnb25fc3Rvcm0vLi9zcmMvc2NyaXB0cy9kcmFnb24uanM/NGY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIERyYWdvbiB7XG4gIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgdGhpcy5kcmFnb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmRyYWdvbi5zcmMgPSBcImFzc2V0cy9kcmFnb24ucG5nXCI7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy54ZGltID0gMjg1O1xuICAgIHRoaXMueWRpbSA9IDc4MDtcbiAgfVxuICBcbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmRyYWdvbiwgdGhpcy54ZGltLCB0aGlzLnlkaW0sIDIwMCwgMjAwKTtcbiAgfVxuXG4gIHN0YXJ0bW92ZSgpe1xuICAgIGlmICh0aGlzLnlkaW0gIT09IDUyMCl7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzM3LCA3MjApO1xuICAgICAgdGhpcy55ZGltIC09IDE7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ29uO1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IERyYWdvbjsiXSwibmFtZXMiOlsiRHJhZ29uIiwiY3R4IiwiZHJhZ29uIiwiSW1hZ2UiLCJzcmMiLCJ4ZGltIiwieWRpbSIsImRyYXdJbWFnZSIsImNsZWFyUmVjdCIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/dragon.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon */ \"./src/scripts/dragon.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(ctx) {\n    _classCallCheck(this, Game);\n\n    this.ctx = ctx;\n    this.dragon = new _dragon__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.enterDragon();\n  }\n\n  _createClass(Game, [{\n    key: \"enterDragon\",\n    value: function enterDragon() {\n      var _this = this;\n\n      setInterval(function () {\n        return _this.dragon.startmove();\n      }, 20);\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBRU1DO0FBQ0osZ0JBQVlDLEdBQVosRUFBZ0I7QUFBQTs7QUFDZCxTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUgsK0NBQUosQ0FBV0UsR0FBWCxDQUFkO0FBQ0EsU0FBS0UsV0FBTDtBQUNEOzs7O1dBRUQsdUJBQWE7QUFBQTs7QUFDWEMsTUFBQUEsV0FBVyxDQUFDO0FBQUEsZUFBTSxLQUFJLENBQUNGLE1BQUwsQ0FBWUcsU0FBWixFQUFOO0FBQUEsT0FBRCxFQUFnQyxFQUFoQyxDQUFYO0FBQ0Q7Ozs7OztBQUdILCtEQUFlTCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJhZ29uX3N0b3JtLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmFnb24gZnJvbSBcIi4vZHJhZ29uXCI7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuZHJhZ29uID0gbmV3IERyYWdvbihjdHgpO1xuICAgIHRoaXMuZW50ZXJEcmFnb24oKTtcbiAgfVxuXG4gIGVudGVyRHJhZ29uKCl7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5kcmFnb24uc3RhcnRtb3ZlKCksIDIwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJEcmFnb24iLCJHYW1lIiwiY3R4IiwiZHJhZ29uIiwiZW50ZXJEcmFnb24iLCJzZXRJbnRlcnZhbCIsInN0YXJ0bW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnb25fc3Rvcm0vLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;