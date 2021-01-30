/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/alert.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/alert.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Ubuntu\", monospace;\n  color: white;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  font-size: 12px;\n}\n\nform {\n  padding-top: 9px;\n  padding-bottom: 19px;\n  text-align: center;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n\n#modal {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(1, 1, 1, 0.3);\n  z-index: 10;\n}\n\n#main-header {\n  height: 6vh;\n  background: #2b2416;\n  background: linear-gradient(210deg, #2b2416 0%, #95685d 41%, #deb09c 84%);\n}\n\n#forecast-header {\n  display: none;\n}\n\n#upper-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 68vh;\n  width: 100%;\n}\n\n#upper-main > div {\n  width: 50%;\n  height: inherit;\n}\n\n/*********** DAILY WEATHER SECTION *********/\n#daily-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 68vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#daily-main .daily-wrappers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 28%;\n  font-size: clamp(1rem, 1vw, 2rem);\n}\n\n#daily-main .daily-wrappers .daily-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n}\n\n#daily-main .daily-wrappers .daily-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#daily-main .daily-wrappers .daily-lower div div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.daily-temps {\n  font-size: clamp(1.4rem, 1.8vw, 3rem);\n  font-weight: 700;\n  padding: 10px;\n}\n\n.daily-feels {\n  opacity: 0.7;\n}\n\n.daily-contents {\n  margin: 0 5px;\n}\n\n/*******CURRENT WEATHER SECTION *******/\n#current-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#current-temp {\n  font-size: clamp(4.2rem, 11.5vw, 50rem);\n  text-align: center;\n  margin: 20px 0;\n}\n\n#current-upper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-upper #current-upper-left > * {\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n#current-upper #current-upper-left > * #current-location {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#current-upper #current-upper-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2vw;\n}\n\n#current-icon {\n  display: block;\n  margin-left: 5px;\n}\n\n.current-contents {\n  font-size: clamp(1.4rem, 2vw, 3rem);\n  margin-left: 5px;\n  margin-top: 5px;\n}\n\n.choose-temp {\n  padding: 0 15px;\n  cursor: pointer;\n}\n\n#current-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-lower #current-lower-right > * {\n  text-align: end;\n}\n\n/********HOURLY WEATHER SECTION *********/\n#lower-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 25vh;\n  width: 100%;\n}\n\n#lower-main .hrly-contents > * {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: clamp(0.8rem, 1.1vw, 2.4em);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n#lower-main .hrly-icons {\n  display: block;\n  margin: 0 auto;\n}\n\n#lower-main .hrly-temp, #lower-main .hrly-time {\n  margin-top: 8px;\n  font-size: clamp(1rem, 1.5vw, 4rem);\n}\n\n#lower-main .hrly-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#lower-main .hrly-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#lower-main > div {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: inherit;\n}\n\n.choose-temp:hover {\n  border: 2px solid rgba(0, 0, 0, 0.3);\n}\n\n.choose-temp {\n  width: 70px;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  margin-right: 20px;\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n/********** ICONS/GIF ************/\n#user-location {\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n  margin: 0 15px;\n  cursor: pointer;\n}\n\n#user-location:hover::after {\n  position: absolute;\n  content: attr(data-text);\n  bottom: -3.5em;\n  left: -5em;\n  background-color: #333;\n  color: white;\n  padding: .25em .5em;\n  font-size: .8em;\n  font-family: \"Ubuntu\", monospace;\n}\n\n.img-feels {\n  width: 12px;\n  height: 24px;\n}\n\n.img-spd, .img-deg {\n  width: 24px;\n  height: 24px;\n  opacity: 0.6;\n}\n\n.img-humidity {\n  -webkit-filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n          filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n}\n\n.loading-gif {\n  position: absolute;\n  width: 23px;\n  height: 23px;\n  top: 45%;\n  left: 50%;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/********** ALERT SECTION **********/\n#alert-btn {\n  position: absolute;\n  top: 1%;\n  margin-left: 12px;\n  -webkit-filter: invert(53%) sepia(74%) saturate(4896%) hue-rotate(337deg) brightness(99%) contrast(86%);\n          filter: invert(53%) sepia(74%) saturate(4896%) hue-rotate(337deg) brightness(99%) contrast(86%);\n  width: 30px;\n  height: 30px;\n  z-index: 10;\n}\n\n#alert-btn:hover {\n  -webkit-transform: rotateZ(14deg);\n          transform: rotateZ(14deg);\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 400ms linear;\n  transition: -webkit-transform 400ms linear;\n  transition: transform 400ms linear;\n  transition: transform 400ms linear, -webkit-transform 400ms linear;\n}\n\n#alert-btn:hover::after {\n  position: absolute;\n  content: attr(data-text);\n  bottom: -3.5em;\n  left: -5em;\n  background-color: #333;\n  color: white;\n  padding: .25em .5em;\n  font-size: .8em;\n  font-family: \"Ubuntu\", monospace;\n}\n\n#alert-desc {\n  display: none;\n  position: fixed;\n  left: 20%;\n  top: 20%;\n  width: 60vw;\n  height: 60vh;\n  font-size: 1.3rem;\n  z-index: 11;\n  overflow: hidden;\n  border-radius: 16px;\n  -webkit-box-shadow: 0 0 5px 0 rgba(1, 1, 1, 0.3);\n          box-shadow: 0 0 5px 0 rgba(1, 1, 1, 0.3);\n  -webkit-transition: -webkit-transform 900ms ease-in-out;\n  transition: -webkit-transform 900ms ease-in-out;\n  transition: transform 900ms ease-in-out;\n  transition: transform 900ms ease-in-out, -webkit-transform 900ms ease-in-out;\n}\n\n#alert-desc #alert-header {\n  height: 30px;\n  width: 100%;\n  background: #da3f3f;\n}\n\n#alert-desc #alert-header p {\n  padding: 6px 14px;\n}\n\n#alert-desc #alert-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: calc(100% - 30px);\n}\n\n#alert-desc #alert-flex #alert-events {\n  height: 100%;\n  border-right: 2px solid rgba(255, 255, 255, 0.3);\n  width: 30%;\n  background: #eda3a3;\n  color: #22382d;\n}\n\n#alert-desc #alert-flex #alert-events div {\n  padding: 6px 0;\n  text-align: center;\n  border-bottom: 1px solid #22382d;\n}\n\n#alert-desc #alert-flex #alert-text {\n  height: 100%;\n  width: calc(100% - 30%);\n  background: #e68f8f;\n  color: white;\n  overflow: auto;\n}\n\n#alert-desc #alert-flex #alert-text p {\n  padding: 15px 28px;\n  line-height: 1.5;\n}\n\n#alert-desc #alert-flex #alert-text #alert-close {\n  position: absolute;\n  right: 3%;\n  bottom: 5%;\n  height: 30px;\n  background: #eda3a3;\n  outline: none;\n}\n\n.event-txts:hover, #alert-close:hover {\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);\n          box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);\n}\n\n.slideDown {\n  -webkit-transform: translate(0px, -2999px);\n          transform: translate(0px, -2999px);\n  display: block;\n}\n\n.slideDown {\n  overflow: hidden;\n}\n\n.slideUp {\n  -webkit-transform: translate(0px, 2999px);\n          transform: translate(0px, 2999px);\n}\n\n.slideUp {\n  overflow: hidden;\n}\n\n.active-state {\n  -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);\n          box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);\n}\n\n/********** ERROR SECTION **********/\n#error {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: fixed;\n  left: 30%;\n  top: 30%;\n  width: 40vw;\n  height: 40vh;\n  font-size: 1.3rem;\n  z-index: 11;\n  background: white;\n  -webkit-transition: -webkit-transform 200ms linear;\n  transition: -webkit-transform 200ms linear;\n  transition: transform 200ms linear;\n  transition: transform 200ms linear, -webkit-transform 200ms linear;\n}\n\n#error #error-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(#eb3349), to(#f45c43));\n  background: linear-gradient(#eb3349, #f45c43);\n  height: 1.4vh;\n  width: 100%;\n}\n\n#error p {\n  color: #223836;\n  font-size: 1.3rem;\n}\n\n#error img {\n  width: 64px;\n}\n\n#error button {\n  margin-bottom: 30px;\n  width: 40%;\n  height: 5vh;\n  background: -webkit-gradient(linear, left top, left bottom, from(#f14d60), to(#f35f48));\n  background: linear-gradient(#f14d60, #f35f48);\n  color: white;\n}\n\n#error button:hover {\n  -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);\n          box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);\n}\n\n.hideUsingScaleZero {\n  -webkit-transform: scale(0) translate(50%, 50%);\n          transform: scale(0) translate(50%, 50%);\n}\n\n.showUsingScaleOne {\n  -webkit-transform: scale(1) translate(-50%, -50%);\n          transform: scale(1) translate(-50%, -50%);\n}\n/*# sourceMappingURL=alert.css.map */", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/alert.css","webpack://./src/styles/alert.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/media_queries.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/media_queries.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Ubuntu\", monospace;\n  color: white;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  font-size: 12px;\n}\n\nform {\n  padding-top: 9px;\n  padding-bottom: 19px;\n  text-align: center;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n\n#modal {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(1, 1, 1, 0.3);\n  z-index: 10;\n}\n\n#main-header {\n  height: 6vh;\n  background: #2b2416;\n  background: linear-gradient(210deg, #2b2416 0%, #95685d 41%, #deb09c 84%);\n}\n\n#forecast-header {\n  display: none;\n}\n\n#upper-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 68vh;\n  width: 100%;\n}\n\n#upper-main > div {\n  width: 50%;\n  height: inherit;\n}\n\n/*********** DAILY WEATHER SECTION *********/\n#daily-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 68vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#daily-main .daily-wrappers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 28%;\n  font-size: clamp(1rem, 1vw, 2rem);\n}\n\n#daily-main .daily-wrappers .daily-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n}\n\n#daily-main .daily-wrappers .daily-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#daily-main .daily-wrappers .daily-lower div div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.daily-temps {\n  font-size: clamp(1.4rem, 1.8vw, 3rem);\n  font-weight: 700;\n  padding: 10px;\n}\n\n.daily-feels {\n  opacity: 0.7;\n}\n\n.daily-contents {\n  margin: 0 5px;\n}\n\n/*******CURRENT WEATHER SECTION *******/\n#current-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#current-temp {\n  font-size: clamp(4.2rem, 11.5vw, 50rem);\n  text-align: center;\n  margin: 20px 0;\n}\n\n#current-upper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-upper #current-upper-left > * {\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n#current-upper #current-upper-left > * #current-location {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#current-upper #current-upper-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2vw;\n}\n\n#current-icon {\n  display: block;\n  margin-left: 5px;\n}\n\n.current-contents {\n  font-size: clamp(1.4rem, 2vw, 3rem);\n  margin-left: 5px;\n  margin-top: 5px;\n}\n\n.choose-temp {\n  padding: 0 15px;\n  cursor: pointer;\n}\n\n#current-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-lower #current-lower-right > * {\n  text-align: end;\n}\n\n/********HOURLY WEATHER SECTION *********/\n#lower-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 25vh;\n  width: 100%;\n}\n\n#lower-main .hrly-contents > * {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: clamp(0.8rem, 1.1vw, 2.4em);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n#lower-main .hrly-icons {\n  display: block;\n  margin: 0 auto;\n}\n\n#lower-main .hrly-temp, #lower-main .hrly-time {\n  margin-top: 8px;\n  font-size: clamp(1rem, 1.5vw, 4rem);\n}\n\n#lower-main .hrly-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#lower-main .hrly-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#lower-main > div {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: inherit;\n}\n\n.choose-temp:hover {\n  border: 2px solid rgba(0, 0, 0, 0.3);\n}\n\n.choose-temp {\n  width: 70px;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  margin-right: 20px;\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n/********** ICONS/GIF ************/\n#user-location {\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n  margin: 0 15px;\n  cursor: pointer;\n}\n\n#user-location:hover::after {\n  position: absolute;\n  content: attr(data-text);\n  bottom: -3.5em;\n  left: -5em;\n  background-color: #333;\n  color: white;\n  padding: .25em .5em;\n  font-size: .8em;\n  font-family: \"Ubuntu\", monospace;\n}\n\n.img-feels {\n  width: 12px;\n  height: 24px;\n}\n\n.img-spd, .img-deg {\n  width: 24px;\n  height: 24px;\n  opacity: 0.6;\n}\n\n.img-humidity {\n  -webkit-filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n          filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n}\n\n.loading-gif {\n  position: absolute;\n  width: 23px;\n  height: 23px;\n  top: 45%;\n  left: 50%;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Ubuntu\", monospace;\n  color: white;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  font-size: 12px;\n}\n\nform {\n  padding-top: 9px;\n  padding-bottom: 19px;\n  text-align: center;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n\n#modal {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(1, 1, 1, 0.3);\n  z-index: 10;\n}\n\n#main-header {\n  height: 6vh;\n  background: #2b2416;\n  background: linear-gradient(210deg, #2b2416 0%, #95685d 41%, #deb09c 84%);\n}\n\n#forecast-header {\n  display: none;\n}\n\n#upper-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 68vh;\n  width: 100%;\n}\n\n#upper-main > div {\n  width: 50%;\n  height: inherit;\n}\n\n/*********** DAILY WEATHER SECTION *********/\n#daily-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 68vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#daily-main .daily-wrappers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 28%;\n  font-size: clamp(1rem, 1vw, 2rem);\n}\n\n#daily-main .daily-wrappers .daily-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n}\n\n#daily-main .daily-wrappers .daily-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#daily-main .daily-wrappers .daily-lower div div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.daily-temps {\n  font-size: clamp(1.4rem, 1.8vw, 3rem);\n  font-weight: 700;\n  padding: 10px;\n}\n\n.daily-feels {\n  opacity: 0.7;\n}\n\n.daily-contents {\n  margin: 0 5px;\n}\n\n/*******CURRENT WEATHER SECTION *******/\n#current-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#current-temp {\n  font-size: clamp(4.2rem, 11.5vw, 50rem);\n  text-align: center;\n  margin: 20px 0;\n}\n\n#current-upper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-upper #current-upper-left > * {\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n#current-upper #current-upper-left > * #current-location {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#current-upper #current-upper-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2vw;\n}\n\n#current-icon {\n  display: block;\n  margin-left: 5px;\n}\n\n.current-contents {\n  font-size: clamp(1.4rem, 2vw, 3rem);\n  margin-left: 5px;\n  margin-top: 5px;\n}\n\n.choose-temp {\n  padding: 0 15px;\n  cursor: pointer;\n}\n\n#current-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-lower #current-lower-right > * {\n  text-align: end;\n}\n\n/********HOURLY WEATHER SECTION *********/\n#lower-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 25vh;\n  width: 100%;\n}\n\n#lower-main .hrly-contents > * {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: clamp(0.8rem, 1.1vw, 2.4em);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n#lower-main .hrly-icons {\n  display: block;\n  margin: 0 auto;\n}\n\n#lower-main .hrly-temp, #lower-main .hrly-time {\n  margin-top: 8px;\n  font-size: clamp(1rem, 1.5vw, 4rem);\n}\n\n#lower-main .hrly-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#lower-main .hrly-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#lower-main > div {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: inherit;\n}\n\n.choose-temp:hover {\n  border: 2px solid rgba(0, 0, 0, 0.3);\n}\n\n.choose-temp {\n  width: 70px;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  margin-right: 20px;\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n/********** ICONS/GIF ************/\n#user-location {\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n  margin: 0 15px;\n  cursor: pointer;\n}\n\n#user-location:hover::after {\n  position: absolute;\n  content: attr(data-text);\n  bottom: -3.5em;\n  left: -5em;\n  background-color: #333;\n  color: white;\n  padding: .25em .5em;\n  font-size: .8em;\n  font-family: \"Ubuntu\", monospace;\n}\n\n.img-feels {\n  width: 12px;\n  height: 24px;\n}\n\n.img-spd, .img-deg {\n  width: 24px;\n  height: 24px;\n  opacity: 0.6;\n}\n\n.img-humidity {\n  -webkit-filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n          filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n}\n\n.loading-gif {\n  position: absolute;\n  width: 23px;\n  height: 23px;\n  top: 45%;\n  left: 50%;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/********** ALERT SECTION **********/\n#alert-btn {\n  position: absolute;\n  top: 1%;\n  margin-left: 12px;\n  -webkit-filter: invert(53%) sepia(74%) saturate(4896%) hue-rotate(337deg) brightness(99%) contrast(86%);\n          filter: invert(53%) sepia(74%) saturate(4896%) hue-rotate(337deg) brightness(99%) contrast(86%);\n  width: 30px;\n  height: 30px;\n  z-index: 10;\n}\n\n#alert-btn:hover {\n  -webkit-transform: rotateZ(14deg);\n          transform: rotateZ(14deg);\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 400ms linear;\n  transition: -webkit-transform 400ms linear;\n  transition: transform 400ms linear;\n  transition: transform 400ms linear, -webkit-transform 400ms linear;\n}\n\n#alert-btn:hover::after {\n  position: absolute;\n  content: attr(data-text);\n  bottom: -3.5em;\n  left: -5em;\n  background-color: #333;\n  color: white;\n  padding: .25em .5em;\n  font-size: .8em;\n  font-family: \"Ubuntu\", monospace;\n}\n\n#alert-desc {\n  display: none;\n  position: fixed;\n  left: 20%;\n  top: 20%;\n  width: 60vw;\n  height: 60vh;\n  font-size: 1.3rem;\n  z-index: 11;\n  overflow: hidden;\n  border-radius: 16px;\n  -webkit-box-shadow: 0 0 5px 0 rgba(1, 1, 1, 0.3);\n          box-shadow: 0 0 5px 0 rgba(1, 1, 1, 0.3);\n  -webkit-transition: -webkit-transform 900ms ease-in-out;\n  transition: -webkit-transform 900ms ease-in-out;\n  transition: transform 900ms ease-in-out;\n  transition: transform 900ms ease-in-out, -webkit-transform 900ms ease-in-out;\n}\n\n#alert-desc #alert-header {\n  height: 30px;\n  width: 100%;\n  background: #da3f3f;\n}\n\n#alert-desc #alert-header p {\n  padding: 6px 14px;\n}\n\n#alert-desc #alert-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: calc(100% - 30px);\n}\n\n#alert-desc #alert-flex #alert-events {\n  height: 100%;\n  border-right: 2px solid rgba(255, 255, 255, 0.3);\n  width: 30%;\n  background: #eda3a3;\n  color: #22382d;\n}\n\n#alert-desc #alert-flex #alert-events div {\n  padding: 6px 0;\n  text-align: center;\n  border-bottom: 1px solid #22382d;\n}\n\n#alert-desc #alert-flex #alert-text {\n  height: 100%;\n  width: calc(100% - 30%);\n  background: #e68f8f;\n  color: white;\n  overflow: auto;\n}\n\n#alert-desc #alert-flex #alert-text p {\n  padding: 15px 28px;\n  line-height: 1.5;\n}\n\n#alert-desc #alert-flex #alert-text #alert-close {\n  position: absolute;\n  right: 3%;\n  bottom: 5%;\n  height: 30px;\n  background: #eda3a3;\n  outline: none;\n}\n\n.event-txts:hover, #alert-close:hover {\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);\n          box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);\n}\n\n.slideDown {\n  -webkit-transform: translate(0px, -2999px);\n          transform: translate(0px, -2999px);\n  display: block;\n}\n\n.slideDown {\n  overflow: hidden;\n}\n\n.slideUp {\n  -webkit-transform: translate(0px, 2999px);\n          transform: translate(0px, 2999px);\n}\n\n.slideUp {\n  overflow: hidden;\n}\n\n.active-state {\n  -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);\n          box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);\n}\n\n/********** ERROR SECTION **********/\n#error {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: fixed;\n  left: 30%;\n  top: 30%;\n  width: 40vw;\n  height: 40vh;\n  font-size: 1.3rem;\n  z-index: 11;\n  background: white;\n  -webkit-transition: -webkit-transform 200ms linear;\n  transition: -webkit-transform 200ms linear;\n  transition: transform 200ms linear;\n  transition: transform 200ms linear, -webkit-transform 200ms linear;\n}\n\n#error #error-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(#eb3349), to(#f45c43));\n  background: linear-gradient(#eb3349, #f45c43);\n  height: 1.4vh;\n  width: 100%;\n}\n\n#error p {\n  color: #223836;\n  font-size: 1.3rem;\n}\n\n#error img {\n  width: 64px;\n}\n\n#error button {\n  margin-bottom: 30px;\n  width: 40%;\n  height: 5vh;\n  background: -webkit-gradient(linear, left top, left bottom, from(#f14d60), to(#f35f48));\n  background: linear-gradient(#f14d60, #f35f48);\n  color: white;\n}\n\n#error button:hover {\n  -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);\n          box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);\n}\n\n.hideUsingScaleZero {\n  -webkit-transform: scale(0) translate(50%, 50%);\n          transform: scale(0) translate(50%, 50%);\n}\n\n.showUsingScaleOne {\n  -webkit-transform: scale(1) translate(-50%, -50%);\n          transform: scale(1) translate(-50%, -50%);\n}\n\n@media (max-width: 1324px) {\n  #alert-desc, #error-text {\n    font-size: 1.3rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  #alert-desc, #error-text {\n    font-size: 1.2rem;\n  }\n  .img-spd, .img-deg {\n    width: 19px;\n    height: 19px;\n    opacity: 0.6;\n  }\n  .img-humidity {\n    width: 19px;\n    height: 19px;\n  }\n  .img-feels {\n    width: 10.5px;\n    height: 21px;\n  }\n}\n\n@media (max-width: 800px) {\n  #alert-desc, #error-text {\n    font-size: 1rem;\n  }\n  .img-spd, .img-deg {\n    width: 16px;\n    height: 16px;\n    opacity: 0.6;\n  }\n  .img-humidity {\n    width: 16px;\n    height: 16px;\n  }\n  .img-feels {\n    width: 8px;\n    height: 16px;\n  }\n}\n\n@media (max-width: 543px) {\n  #alert-desc, #error-text {\n    font-size: 0.8rem;\n  }\n}\n\n@media (min-width: 2560px) and (min-height: 1920px) {\n  .daily-icons, .hrly-icons {\n    width: 120px;\n    height: 120px;\n  }\n  .hrly-contents > * {\n    padding: 12px 0;\n  }\n}\n\n/***********  HEIGHTS  ***********/\n@media (max-height: 600px) {\n  .daily-icons, .hrly-icons {\n    width: 60px;\n    height: 60px;\n  }\n}\n\n@media screen and (orientation: portrait) {\n  #upper-main {\n    width: 100%;\n  }\n  #upper-main div {\n    width: inherit;\n  }\n  #daily-main {\n    display: none;\n  }\n  .hrly-contents:nth-child(5) {\n    display: none;\n  }\n  .hrly-contents:nth-child(6) {\n    display: none;\n  }\n  .hrly-contents:nth-child(7) {\n    display: none;\n  }\n  .hrly-contents:nth-child(8) {\n    display: none;\n  }\n  .hrly-contents:nth-child(9) {\n    display: none;\n  }\n}\n\n@media (max-height: 420px) {\n  #main-header {\n    height: 50px;\n  }\n  #main {\n    overflow: auto;\n  }\n  #upper-main {\n    height: 84vh;\n  }\n  #upper-main #current-main {\n    height: inherit;\n  }\n  #daily-main {\n    height: 100%;\n    overflow: auto;\n  }\n  #lower-main {\n    display: none;\n  }\n  .img-spd, .img-deg, .img-humidity, .img-feels {\n    visibility: hidden;\n  }\n}\n\n@media screen and (orientation: portrait) {\n  #error {\n    width: calc(100% - 100px);\n    max-height: calc(100% - 180px);\n    top: 50%;\n    left: 50%;\n  }\n}\n\n@media (max-height: 420px) and (max-width: 812px) {\n  #error {\n    max-width: calc(100% - 150px);\n    height: calc(100% - 150px);\n    top: 50%;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=media_queries.css.map */", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/media_queries.css","webpack://./src/styles/alert.scss","webpack://./src/styles/media_queries.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Ubuntu\", monospace;\n  color: white;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  font-size: 12px;\n}\n\nform {\n  padding-top: 9px;\n  padding-bottom: 19px;\n  text-align: center;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n\n#modal {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(1, 1, 1, 0.3);\n  z-index: 10;\n}\n\n#main-header {\n  height: 6vh;\n  background: #2b2416;\n  background: linear-gradient(210deg, #2b2416 0%, #95685d 41%, #deb09c 84%);\n}\n\n#forecast-header {\n  display: none;\n}\n\n#upper-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 68vh;\n  width: 100%;\n}\n\n#upper-main > div {\n  width: 50%;\n  height: inherit;\n}\n\n/*********** DAILY WEATHER SECTION *********/\n#daily-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 68vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#daily-main .daily-wrappers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 28%;\n  font-size: clamp(1rem, 1vw, 2rem);\n}\n\n#daily-main .daily-wrappers .daily-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n}\n\n#daily-main .daily-wrappers .daily-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#daily-main .daily-wrappers .daily-lower div div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.daily-temps {\n  font-size: clamp(1.4rem, 1.8vw, 3rem);\n  font-weight: 700;\n  padding: 10px;\n}\n\n.daily-feels {\n  opacity: 0.7;\n}\n\n.daily-contents {\n  margin: 0 5px;\n}\n\n/*******CURRENT WEATHER SECTION *******/\n#current-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#current-temp {\n  font-size: clamp(4.2rem, 11.5vw, 50rem);\n  text-align: center;\n  margin: 20px 0;\n}\n\n#current-upper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-upper #current-upper-left > * {\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n#current-upper #current-upper-left > * #current-location {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#current-upper #current-upper-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2vw;\n}\n\n#current-icon {\n  display: block;\n  margin-left: 5px;\n}\n\n.current-contents {\n  font-size: clamp(1.4rem, 2vw, 3rem);\n  margin-left: 5px;\n  margin-top: 5px;\n}\n\n.choose-temp {\n  padding: 0 15px;\n  cursor: pointer;\n}\n\n#current-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-lower #current-lower-right > * {\n  text-align: end;\n}\n\n/********HOURLY WEATHER SECTION *********/\n#lower-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 25vh;\n  width: 100%;\n}\n\n#lower-main .hrly-contents > * {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: clamp(0.8rem, 1.1vw, 2.4em);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n#lower-main .hrly-icons {\n  display: block;\n  margin: 0 auto;\n}\n\n#lower-main .hrly-temp, #lower-main .hrly-time {\n  margin-top: 8px;\n  font-size: clamp(1rem, 1.5vw, 4rem);\n}\n\n#lower-main .hrly-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#lower-main .hrly-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#lower-main > div {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: inherit;\n}\n\n.choose-temp:hover {\n  border: 2px solid rgba(0, 0, 0, 0.3);\n}\n\n.choose-temp {\n  width: 70px;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  margin-right: 20px;\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n/********** ICONS/GIF ************/\n#user-location {\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n  margin: 0 15px;\n  cursor: pointer;\n}\n\n#user-location:hover::after {\n  position: absolute;\n  content: attr(data-text);\n  bottom: -3.5em;\n  left: -5em;\n  background-color: #333;\n  color: white;\n  padding: .25em .5em;\n  font-size: .8em;\n  font-family: \"Ubuntu\", monospace;\n}\n\n.img-feels {\n  width: 12px;\n  height: 24px;\n}\n\n.img-spd, .img-deg {\n  width: 24px;\n  height: 24px;\n  opacity: 0.6;\n}\n\n.img-humidity {\n  -webkit-filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n          filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n}\n\n.loading-gif {\n  position: absolute;\n  width: 23px;\n  height: 23px;\n  top: 45%;\n  left: 50%;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/styles/alert.css":
/*!******************************!*\
  !*** ./src/styles/alert.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_alert_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./alert.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/alert.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_alert_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_alert_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/media_queries.css":
/*!**************************************!*\
  !*** ./src/styles/media_queries.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./media_queries.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/media_queries.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetch_data */ "./src/modules/fetch_data.js");
/* harmony import */ var _modules_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elements */ "./src/modules/elements.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helpers */ "./src/modules/helpers.js");
/* harmony import */ var _modules_units__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/units */ "./src/modules/units.js");
/* harmony import */ var _modules_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/time */ "./src/modules/time.js");
/* harmony import */ var _modules_current_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/current_location */ "./src/modules/current_location.js");
/* harmony import */ var _modules_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/alert */ "./src/modules/alert.js");
/* harmony import */ var _modules_bg_change__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/bg_change */ "./src/modules/bg_change.js");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_alert_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/alert.css */ "./src/styles/alert.css");
/* harmony import */ var _styles_media_queries_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/media_queries.css */ "./src/styles/media_queries.css");
/* harmony import */ var _img_humidity_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/humidity.png */ "./src/img/humidity.png");
/* harmony import */ var _img_feels_like_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/feels_like.svg */ "./src/img/feels_like.svg");
/* harmony import */ var _img_wind_solid_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/wind-solid.svg */ "./src/img/wind-solid.svg");
/* harmony import */ var _img_compass_regular_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/compass-regular.svg */ "./src/img/compass-regular.svg");
// modules









// styles





// images





// the only global variable
let weatherData; // used later to assing data on this var

document.onreadystatechange = () => {
	_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.error.style.visibility = 'hidden';
};

// display default
window.onload = () => {
	defaultLocation();
};

_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.areaInput.onfocus = () => {
	window.scrollTo(0, 0);
	document.body.scrollTop = 0;
};

// ask the user for a permission to collect the former's coordinates
_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.userLocation.onclick = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCoordinatesFromUser);
	} else {
		console.log('Geolocation is not supported by this browser');
	}
};

// get the user's current location
async function getCoordinatesFromUser(pos) {
	_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.modal.style.display = 'block';
	const lat = pos.coords.latitude;
	const lon = pos.coords.longitude;
	const data = await fetchCoordinatesToGetArea(lat, lon);
	assignUserLocation(data);
}

// using the coordinates to get the proper area
function fetchCoordinatesToGetArea(lat, lon) {
	_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.setCoordinates(lat, lon);
	return (0,_modules_current_location__WEBPACK_IMPORTED_MODULE_5__.getAreaFromCoordinates)({ lat, lon });
}

// assign the user's location as current
async function assignUserLocation(data) {
	const areaName = locationNameByAPI(data);
	_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.setAreaName(areaName);
	try {
		await fetchWeatherData(_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.getWeatherURL());
	} catch (e) {
		console.log(`Error: ${e}`);
	}
}
// disallow any spaces
function hasSpaces(str) {
	if (str.indexOf(' ') !== -1) {
		return false;
	}
	return true;
}

// the output of location name in accordance to API
function locationNameByAPI(data) {
	let areaName;
	// make sure city does not have any space and state is not an object
	if ((data.city && hasSpaces(data.city)) && (data.hasOwnProperty('state') || typeof data.state !== 'object')) {
		areaName = `${data.city}, ${data.state}`;
		if ((typeof data.state === 'object' && data.prov)) {
			areaName = `${data.city}, ${data.prov}`;
		} // the rest are alternatives if some data property doesn't exist or an object
	} else if (data.staddress && data.state) {
		areaName = `${data.staddress}, ${data.state}`;
	} else if (data.prov) {
		areaName = `${data.staddress}, ${data.prov}`;
	} else {
		areaName = data.region;
	}
	return areaName;
}

// use default location if the user disallow the humble permission
// it is used after window.onload
async function defaultLocation() {
	const lat = 90;
	const lon = 0;
	_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.setCoordinates(lat, lon);
	_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.setAreaName('North Pole');
	const data = await _modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.getWeatherURL();
	try {
		await fetchWeatherData(data);
	} catch (e) {
		console.log(`Error: ${e}`);
	}
}

// submit the form to get the input of coordinates and overwrite to the respective
// variables, appended within the weather url.
_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.form.onsubmit = async (e) => {
	e.preventDefault();
	_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.modal.style.display = 'block';
	_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.setSearchArea(_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.locationInput());
	_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.setAreaName(_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.strInput());
	try {
		await getCoordinates(_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.getLocationURL());
	} catch (error) {
		console.log(error);
	}
};

// event listeners
_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.alertClose.addEventListener('click', _modules_alert__WEBPACK_IMPORTED_MODULE_6__.toggleDisplay);
_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.alertBtn.addEventListener('click', _modules_alert__WEBPACK_IMPORTED_MODULE_6__.toggleDisplay);
_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.errorClose.addEventListener('click', () => {
	_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.error.classList.add('hideUsingScaleZero');
	_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.error.classList.remove('showUsingScaleOne');
	if (_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.modal.style.display === 'block') {
		_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.modal.style.display = 'none';
	}
});

function errorDisplay(data) {
	if (_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.areaInput.value === '' || data.error) {
		_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.error.style.visibility = 'visible';
		_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.error.classList.remove('hideUsingScaleZero');
		_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.error.classList.add('showUsingScaleOne');
	}
}
// get the coordinates
async function getCoordinates(data) {
	const response = await fetch(data, { mode: 'cors' });
	const locationData = await response.json();
	console.log(locationData);
	errorDisplay(locationData); // if it is undefined then display error
	_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.setCoordinates(locationData[0].lat, locationData[0].lon);
	const dataForAreaName = await fetchCoordinatesToGetArea(_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.getLat(), _modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.getLon());
	const areaNameByAPI = locationNameByAPI(dataForAreaName);

	// if it returns undefined, used the input value as the area name instead
	if (areaNameByAPI === undefined) {
		_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.setAreaName(_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.strInput());
	} else {
		_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.setAreaName(areaNameByAPI);
	}
	try {
		await fetchWeatherData(_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.getWeatherURL());
	}
	catch (e) {
		console.log(`Error: ${e}`);
	}
}

// fetch the data coming from API and display it
async function fetchWeatherData(data) {
	const response = await fetch(data, { mode: 'cors' });
	weatherData = await response.json();
	displayInfo();
	// undisplay the modal if it is displayed
	// Note: used for loading effects while the data is not yet displayed
	if (_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.modal.style.display === 'block') {
		_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.modal.style.display = 'none';
	}
	(0,_modules_alert__WEBPACK_IMPORTED_MODULE_6__.getAlert)(weatherData); // get alert data
}

// print the data on each following divs
const getHourlyData = (parent) => {
	for (let i = 0; i < 9; i++) {
		displayHourlyOutput(i, parent);
	}
};

// display hourly contents
function displayHourlyOutput(i, parent) {
	// temperature data from current object
	let { temp } = weatherData.hourly[(i + 1) + i];
	let feelsLike = weatherData.hourly[(i + 1) + i].feels_like;

	const { icon } = weatherData.hourly[(i + 1) + i].weather[0];
	const humidity = `${weatherData.hourly[(i + 1) + i].humidity}%`;
	const { timezone } = weatherData;
	const date = (0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.convertTZ)(new Date(), timezone);

	temp = (0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(temp);
	feelsLike = (0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(feelsLike);

	// DOM instances
	const hourlyMain = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', `hrly-main${i + 1}`, 'hrly-contents', 'div');
	const hourlyTemp = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`${temp}`, `hrly-temp${i + 1}`, 'hrly-temp', 'p');

	const hourlyIcon = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(getWeatherIcon(icon), `hrly-icon${i + 1}`, 'hrly-icons');
	const hourlyTime = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement((0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.formatHourOnly)(date, (i + 1) + i), `hrly-time${i + 1}`, 'hrly-time', 'p');

	const hourlyLower = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'hrly-lower', 'hrly-lower', 'div');
	const hourlyHumidityWrapper = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'hrly-humidity-wrapper', 'hrly-container', 'div');
	const hourlyHumidity = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`${humidity} `, `hrly-humidity${i + 1}`, 'hrly-container', 'p');
	const hourlyFeelsWrapper = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'hrly-feels-wrapper', 'hrly-container', 'div');
	const hourlyFeels = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(` ${feelsLike}`, `hrly-feels${i + 1}`, 'hrly-container', 'p');

	// used icons from https://icons8.com/icons/set/humidity
	const iHumidity = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(_img_humidity_png__WEBPACK_IMPORTED_MODULE_12__, '', 'img-humidity');
	const iFeelsLike = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(_img_feels_like_svg__WEBPACK_IMPORTED_MODULE_13__, '', 'img-feels');

	// append los elementos de familia
	parent.append(hourlyMain);
	hourlyFeelsWrapper.append(iFeelsLike, hourlyFeels);
	hourlyHumidityWrapper.append(hourlyHumidity, iHumidity);
	hourlyLower.append(hourlyFeelsWrapper, hourlyHumidityWrapper);
	hourlyMain.append(hourlyTime, hourlyTemp, hourlyIcon, hourlyLower);
}

const getDailyData = (parent) => {
	for (let i = 0; i < 6; i++) {
		displayDailyOutput(i, parent);
	}
};

function displayDailyOutput(i, parent) {
	// DOM instances
	// temperature data from current object
	let temp = weatherData.daily[i + 1].temp.night;
	let feelsLike = weatherData.daily[i + 1].feels_like.night;
	temp = (0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(temp);
	feelsLike = (0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(feelsLike);

	// get data with object destructuring
	const { icon } = weatherData.daily[i + 1].weather[0];
	const humidity = `${weatherData.daily[i + 1].humidity}%`;
	const { timezone } = weatherData;

	let date = new Date(); // get todays date
	date.setDate(date.getDate() + (i + 1)); // accumulate date by one
	const localDate = (0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.convertTZ)(date, timezone); // get date based n timezone

	// get wind speed and degree
	const speed = `${(0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.windSpeedToMPH)(weatherData.daily[i + 1].wind_speed)} mph `;
	const deg = `${(0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.windDegToDir)(weatherData.daily[i + 1].wind_deg)}`;

	const dailyWrapper = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', `daily-wrapper${i + 1}`, 'daily-wrappers', 'div');
	const dailyTemp = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`${temp}`, `daily-temp${i + 1}`, 'daily-temps', 'p');

	const dailyFeels = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`Feels like: ${feelsLike}`, `daily-feels${i + 1}`, 'daily-feels', 'p');
	const dailyIcon = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(getWeatherIcon(icon), `daily-icon${i + 1}`, 'daily-icons');
	const dailyDate = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement((0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.formatShortDate)(localDate), `daily-date${i + 1}`, 'daily-dates', 'p');

	const dailyLower = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', '', 'daily-lower', 'div');
	const dailyLowerLeft = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'daily-lower-left', 'daily-container', 'div');
	const dailyLowerRight = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'daily-lower-right', 'daily-container', 'div');

	const dailyHumidityWrapper = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', '', 'daily-container', 'div');
	const dailyHumidity = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`${humidity}`, `daily-humidity${i + 1}`, 'daily-contents', 'p');
	const iHumidity = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(_img_humidity_png__WEBPACK_IMPORTED_MODULE_12__, '', 'img-humidity');
	const dailySpdWrapper = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', '', 'daily-container', 'div');
	const dailySpd = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(speed, 'daily-spd', 'daily-contents', 'p');
	const iWindSpd = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(_img_wind_solid_svg__WEBPACK_IMPORTED_MODULE_14__, '', 'img-spd');
	const dailyDegWrapper = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', '', 'daily-container', 'div');
	const dailyDeg = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(deg, 'daily-deg', 'daily-contents', 'p');
	const iWindDeg = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(_img_compass_regular_svg__WEBPACK_IMPORTED_MODULE_15__, '', 'img-deg');

	dailyLower.append(dailyLowerLeft, dailyLowerRight);
	dailyHumidityWrapper.append(dailyHumidity, iHumidity);
	dailySpdWrapper.append(iWindSpd, dailySpd);
	dailyDegWrapper.append(iWindDeg, dailyDeg);
	dailyLowerLeft.append(dailyHumidityWrapper);
	dailyLowerRight.append(dailySpdWrapper, dailyDegWrapper);
	dailyWrapper.append(dailyDate, dailyTemp, dailyFeels, dailyIcon, dailyLower);
	parent.append(dailyWrapper);
}

// display the weather data about the current hour/day
function displayCurrentOutput(parent) {
	const { icon } = weatherData.current.weather[0];
	const { timezone } = weatherData;
	const date = (0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.convertTZ)(new Date(), timezone);

	let { temp } = weatherData.current;
	let feels = weatherData.current.feels_like;
	const { humidity } = weatherData.current;
	const speed = `${(0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.windSpeedToMPH)(weatherData.current.wind_speed)} mph :Wind Speed`;
	const deg = `${(0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.windDegToDir)(weatherData.current.wind_deg)} :Wind Degree`;
	// temp conversion
	temp = (0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(temp);
	temp = temp.slice(0, -1);
	feels = (0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(feels);

	// DOM instances

	const currentUprCont = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-upper', 'current-upper', 'div');

	// DOM elements in the upper left side of the current main
	const upperLeftSide = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-upper-left', 'current-upper-left', 'div');
	const currentLocation = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(_modules_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default.getAreaName(), 'current-location', 'current-contents', 'p');
	const currentDate = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement((0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.formatFullDate)(date), 'current-day', 'current-contents', 'p');
	const currentTime = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement((0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.formatHourMin)(date), 'current-time', 'current-contents', 'p');

	// DOM elements in the upper right side of the current main
	const upperRightSide = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-upper-right', 'current-upper-right', 'div');
	const currentIcon = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(getWeatherIcon(icon), 'current-icon', 'current-contents');
	const tempCelcius = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement((0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.checkTempUnit)(), 'tempC', 'choose-temp', 'div');

	// the element that contains the current temperature
	const currentTemp = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(temp, 'current-temp', 'current-contents', 'p');

	// the lower side container
	const currentLwrCont = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-lower', 'current-lower', 'div');

	// DOM elements in the lower left side of the current main
	const lowerLeftSide = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-lower-left', 'current-lower-left', 'div');
	const currentFeels = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`Feels Like: ${feels}`, 'current-feels', 'current-contents', 'p');
	const currentHumidity = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`Humidity: ${humidity}%`, 'current-humidity', 'current-contents', 'p');

	// DOM elements in the lower right side of the current main
	const lowerRightSide = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-lower-right', 'current-lower-right', 'div');
	const currentSpeed = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(speed, 'current-speed', 'current-contents', 'p');
	const currentDegree = _modules_helpers__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(deg, 'current-deg', 'current-contents', 'p');

	currentLwrCont.append(lowerLeftSide, lowerRightSide);
	lowerLeftSide.append(currentFeels, currentHumidity);
	lowerRightSide.append(currentSpeed, currentDegree);
	currentUprCont.append(upperLeftSide, upperRightSide);
	upperLeftSide.append(currentLocation, currentDate, currentTime);
	upperRightSide.append(currentIcon, tempCelcius);
	parent.append(currentUprCont, currentTemp, currentLwrCont);
	renderBgColor();
	updateClock(); // auto refresh clock by 100
	tempCelcius.addEventListener('click', () => {
		(0,_modules_units__WEBPACK_IMPORTED_MODULE_3__.toggleTemp)();
		displayInfo();
	});
}

// the color is based on the current time of the day: morns, afternoon, night
function renderBgColor() {
	const { timezone } = weatherData;
	const date = (0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.convertTZ)(new Date(), timezone);
	const hours = (0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.getLocalHours)(date);
	_modules_bg_change__WEBPACK_IMPORTED_MODULE_7__.default.bgChg(hours);
}

// get the icon from the weather API
function getWeatherIcon(icon) {
	return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

// update clock every 1000ms = 1second
function updateClock() {
	const { timezone } = weatherData;
	const date = (0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.convertTZ)(new Date(), timezone);
	const currentTime = document.getElementById('current-time');
	currentTime.textContent = (0,_modules_time__WEBPACK_IMPORTED_MODULE_4__.formatHourMin)(date);
	setTimeout(updateClock, 1000);
}

// controller function - create and display DOM elements
function displayInfo() {
	clearMainContents();
	getHourlyData(_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.lowerMain);
	getDailyData(_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.dailyMain);
	displayCurrentOutput(_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.currentMain);
}

// clear the contents inside the weather data container
function clearMainContents() {
	_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.currentMain.textContent = '';
	_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.dailyMain.textContent = '';
	_modules_elements__WEBPACK_IMPORTED_MODULE_1__.default.lowerMain.textContent = '';
}


/***/ }),

/***/ "./src/img/compass-regular.svg":
/*!*************************************!*\
  !*** ./src/img/compass-regular.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58826f38d660ff2a4315.svg";

/***/ }),

/***/ "./src/img/feels_like.svg":
/*!********************************!*\
  !*** ./src/img/feels_like.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb697815125cad558e58.svg";

/***/ }),

/***/ "./src/img/humidity.png":
/*!******************************!*\
  !*** ./src/img/humidity.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdcef893f67450c4881c.png";

/***/ }),

/***/ "./src/img/wind-solid.svg":
/*!********************************!*\
  !*** ./src/img/wind-solid.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b90c8e830815c53596f2.svg";

/***/ }),

/***/ "./src/modules/alert.js":
/*!******************************!*\
  !*** ./src/modules/alert.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlert": () => /* binding */ getAlert,
/* harmony export */   "toggleDisplay": () => /* binding */ toggleDisplay
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/modules/helpers.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ "./src/modules/elements.js");



let isDisplay = true; // boolean - display/not display
// display alert description with accordance to its default
function alertDisplay(weatherData) {
	// this removes all the children of the following element
	_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertEvents.textContent = '';
	_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertText.textContent = '';

	// default text when opening alert box
	const alertDesc = weatherData.alerts[0].description;

	// loop and print each available data alerts in the event div
	for (let i = 0; i < weatherData.alerts.length; i++) {
		const eventText = weatherData.alerts[i].event;
		const event = _helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.crtElement(eventText, `event-txt${i + 1}`, 'event-txts', 'div');
		_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertEvents.append(event);
	}
	document.getElementById('event-txt1').classList.add('active-state');
	const alert = _helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.crtElement(alertDesc, 'alert-txt', 'alert-txts', 'p');
	_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertText.append(alert, _elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertClose);
	activateAlertEvent(weatherData);
}

// toggle to display or notDisplay
const toggleDisplayBoolean = () => {
	isDisplay === true ? isDisplay = false : isDisplay = true;
};
const resetDisplay = () => { isDisplay = true; }; // reset display to true

// validate whether alerts exists if it is or else then continue to the following condition
function getAlert(data) {
	// immediately display weather at first load if alert data existed
	if (data.alerts) {
		resetDisplay();
		_helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.modifyAttr(_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertDesc, 'style', 'display: block;');
		_helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.modifyAttr(_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertBtn, 'style', 'display: block;');
		alertDisplay(data);
		_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertDesc.className = '';
	} else { // otherwise, disallow visual alert elements to be seen
		_helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.modifyAttr(_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertDesc, 'style', 'display: none;');
		_helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.modifyAttr(_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertBtn, 'style', 'display: none;');
		toggleDisplayBoolean();
	}
}

// transition/alert div position manipulation by checking whether
// is displayed or not
// Note: It is always displayed at first load of weather data
function toggleDisplay() {
	if (isDisplay === true) {
		_helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.modifyAttr(_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.modal, 'style', 'display: none;');
		_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertDesc.classList.toggle('slideDown');
	} else {
		_helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.modifyAttr(_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.modal, 'style', 'display: block;');
		_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertDesc.classList.toggle('slideUp');
	}
}

// add visual active state if the alert text is displayed already
function activateAlertEvent(data) {
	const alertEvents = document.querySelectorAll('.event-txts');
	alertEvents.forEach((x, i, arr) => {
		x.addEventListener('click', () => {
			updateAlertText(i, data);
			alertEvents.forEach((e) => {
				if (e.classList.contains('active-state')) {
					e.classList.remove('active-state');
				}
			});
			arr[i].classList.add('active-state');
		});
	});
}

// update the alert paragraph when the event text is clicked
function updateAlertText(i, data) {
	_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertText.textContent = '';
	const alertDesc = data.alerts[i].description;
	const alert = _helpers_js__WEBPACK_IMPORTED_MODULE_0__.default.crtElement(alertDesc, 'alert-txt', 'alert-txts', 'p');
	_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertText.append(alert, _elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertClose);
}



/***/ }),

/***/ "./src/modules/bg_change.js":
/*!**********************************!*\
  !*** ./src/modules/bg_change.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/modules/elements.js");


const bgManipulation = (() => {
	const WARM_COLORS = ['rgb(255, 195, 16)', 'rgb(248, 185, 23)', 'rgb(242, 174, 28)'];
	const AFTERNOON_COLORS = ['rgb(56, 211, 107)', 'rgb(56, 195, 107)', 'rgb(56, 180, 99)'];
	const COOL_COLORS = ['rgb(56, 156, 241)', 'rgb(56, 134, 235)', 'rgb(56, 121, 221)'];
	return {
		bgChg(hours) { // background change
			if (hours >= 0 && hours < 12) {
				_elements__WEBPACK_IMPORTED_MODULE_0__.default.currentMain.style.background = WARM_COLORS[0];
				_elements__WEBPACK_IMPORTED_MODULE_0__.default.dailyMain.style.background = WARM_COLORS[1];
				_elements__WEBPACK_IMPORTED_MODULE_0__.default.lowerMain.style.background = WARM_COLORS[2];
			} else if (hours >= 12 && hours < 17) {
				_elements__WEBPACK_IMPORTED_MODULE_0__.default.currentMain.style.background = AFTERNOON_COLORS[0];
				_elements__WEBPACK_IMPORTED_MODULE_0__.default.dailyMain.style.background = AFTERNOON_COLORS[1];
				_elements__WEBPACK_IMPORTED_MODULE_0__.default.lowerMain.style.background = AFTERNOON_COLORS[2];
			} else if (hours >= 17 && hours < 24) {
				_elements__WEBPACK_IMPORTED_MODULE_0__.default.currentMain.style.background = COOL_COLORS[0];
				_elements__WEBPACK_IMPORTED_MODULE_0__.default.dailyMain.style.background = COOL_COLORS[1];
				_elements__WEBPACK_IMPORTED_MODULE_0__.default.lowerMain.style.background = COOL_COLORS[2];
			}
		},
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bgManipulation);


/***/ }),

/***/ "./src/modules/current_location.js":
/*!*****************************************!*\
  !*** ./src/modules/current_location.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAreaFromCoordinates": () => /* binding */ getAreaFromCoordinates
/* harmony export */ });
// This is used to get the user's current location name by getting the user's coordinates
async function getAreaFromCoordinates({ lat, lon }) {
	const URL = `https://geocode.xyz/${lat},${lon}?json=1`;
	try {
		const response = await fetch(URL);
		const data = await response.json();
		return await data;
	} catch (e) {
		console.log(`Error: ${e}`);
	}
}


/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// DOM instances of existing elements from html file
const DOM = (() => {
	const content = document.getElementById('content');
	const main = document.getElementById('main');
	const upperMain = document.getElementById('upper-main');
	const lowerMain = document.getElementById('lower-main');
	const currentMain = document.getElementById('current-main');
	const dailyMain = document.getElementById('daily-main');
	const userLocation = document.getElementById('user-location');
	const debugOutput = document.getElementById('debug');
	const areaInput = document.getElementById('area-input');
	const form = document.querySelector('form');
	const error = document.getElementById('error');
	const errorClose = document.getElementById('error-close');
	const alertBtn = document.getElementById('alert-btn');
	const alertDesc = document.getElementById('alert-desc');
	const alertEvents = document.getElementById('alert-events');
	const alertText = document.getElementById('alert-text');
	const alertClose = document.getElementById('alert-close');
	const modal = document.getElementById('modal');
	return {
		content,
		main,
		upperMain,
		currentMain,
		dailyMain,
		lowerMain,
		userLocation,
		debugOutput,
		areaInput,
		form,
		error,
		errorClose,
		alertBtn,
		alertDesc,
		alertEvents,
		alertText,
		alertClose,
		modal,
		// not in the best state but its functionality format the string based
		// on the condition
		strInput() {
			return areaInput.value;
		},
		locationInput() {
			const str = `${areaInput.value}`;
			// spaces are replace with '+' which is used for the string within URL
			return str.split('').map((x) => (x == ' ' ? x = '+' : x)).join('');
		},
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);


/***/ }),

/***/ "./src/modules/fetch_data.js":
/*!***********************************!*\
  !*** ./src/modules/fetch_data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _server_route_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-route.js */ "./src/modules/server-route.js");


// mainly for fetching API key
// file for getting and setting [insert_string] directory name to complete URL
const fetchData = (() => {
	const part = 'minutely';
	let lat;
	let lon;
	let searchArea;
	let areaName;
	return {
		setCoordinates(nLat, nLon) {
			lat = nLat;
			lon = nLon;
		},
		setSearchArea(v) { searchArea = v; },
		setAreaName(v) { areaName = v; },
		getLat() { return lat; },
		getLon() { return lon; },
		getAreaName() { return areaName; },
		getWeatherURL() {
			const WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${_server_route_js__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API}`;
			return WEATHER_URL;
		},
		getLocationURL() {
			const LOCATION_URL = `https://us1.locationiq.com/v1/search.php?key=${_server_route_js__WEBPACK_IMPORTED_MODULE_0__.LOCATION_API}&q=${searchArea}&format=json`;
			return LOCATION_URL;
		},
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);


/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// helper functions
// reusable functions that create/modify elements
const manage = (() => ({
	crtElement(eText, eId, eClass, eTag) {
		const el = document.createElement(eTag);
		(el.textContent = eText, el.id = eId, el.className = eClass);
		return el;
	},
	crtImg(eSrc, eId, eClass) {
		const img = document.createElement('img');
		(img.src = eSrc, img.id = eId, img.className = eClass);
		return img;
	},
	modifyAttr(el, eType, eProp) { el.setAttribute(eType, eProp); },
}))();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manage);


/***/ }),

/***/ "./src/modules/server-route.js":
/*!*************************************!*\
  !*** ./src/modules/server-route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCATION_API": () => /* binding */ LOCATION_API,
/* harmony export */   "WEATHER_API": () => /* binding */ WEATHER_API
/* harmony export */ });
// I'll update this file in the future to request the API key in
// the server rather than the front-end files -- env only works
// with express or backend stuff

/* eslint-disable prefer-destructuring */
// import dotenv from 'dotenv'
// dotenv.config();
// const express = require('express');
// const Datastore = require('nedb');
// require('dotenv').config({ path: `${__dirname}/.env` });

// const app = express();
// const database = new Datastore('database.db');
// database.loadDatabase();

// app.get('/api', (request, response) => {
// 	database.find({}, (err, data) => {
// 		if (err) {
// 			response.end();
// 			return;
// 		}
// 		response.json(data);
// 	});
// });

// const LOCATION_API = process.env.LOCATION_API;//
// const WEATHER_API = process.env.WEATHER_API;

// It is crucial for these keys to be hidden from the public view
const LOCATION_API = 'pk.960bef9b58caf12f4d456466ec2a42f8';
const WEATHER_API = '0c73b72398c0bfc8c59ca8058faf1eb4';




/***/ }),

/***/ "./src/modules/time.js":
/*!*****************************!*\
  !*** ./src/modules/time.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTZ": () => /* binding */ convertTZ,
/* harmony export */   "formatHourMin": () => /* binding */ formatHourMin,
/* harmony export */   "formatHourOnly": () => /* binding */ formatHourOnly,
/* harmony export */   "formatFullDate": () => /* binding */ formatFullDate,
/* harmony export */   "formatShortDate": () => /* binding */ formatShortDate,
/* harmony export */   "getLocalHours": () => /* binding */ getLocalHours
/* harmony export */ });
// convert dates by the appropriate local timezone
// object used to format dates
const OPTIONS = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

const DAILY = {
	weekday: 'short',
	month: 'short',
	day: 'numeric',
};
function convertTZ(date, tzString) {
	return new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {timeZone: tzString}));
}

// format -> HH:MM:SS AM/PM
function formatHourMin(date) {
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	const ampm = hours >= 12 ? 'pm' : 'am';
	hours %= 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = ('0' + minutes).slice(-2);
	seconds = ('0' + seconds).slice(-2);
	const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
	return strTime;
}

// format -> HH AM/PM
function formatHourOnly(date, i) {
	let hours = date.getHours() + i;
	const hoursNextDay = (hours - 24); //change the variable if is passed 11pm
	hours > 23 ? hours = 0 + hoursNextDay : hours;
	let ampm = hours >= 12 ? 'pm' : 'am';
	hours %= 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	const strTime = `${hours} ${ampm}`;
	return strTime;
}

function getLocalHours(date) {
	return date.getHours();
}
function formatFullDate(date) {
	return date.toLocaleDateString('en-US', OPTIONS);
}
function formatShortDate(date) {
	return date.toLocaleDateString('en-US', DAILY);
}


/***/ }),

/***/ "./src/modules/units.js":
/*!******************************!*\
  !*** ./src/modules/units.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTempUnit": () => /* binding */ checkTempUnit,
/* harmony export */   "toggleTemp": () => /* binding */ toggleTemp,
/* harmony export */   "convertTemp": () => /* binding */ convertTemp,
/* harmony export */   "windSpeedToMPH": () => /* binding */ windSpeedToMPH,
/* harmony export */   "windDegToDir": () => /* binding */ windDegToDir
/* harmony export */ });
// convert the values of the data to a different unit
const DIRECTIONS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
	'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
// starting range for each direction in 360 degree format
const RANGE = [349, 11, 34, 56, 78, 101, 124, 146,
	169, 191, 214, 235, 259, 281, 304, 326];

let isTempCelcius = true;

// validate the current temp unit
const checkTempUnit = () => {
	if (isTempCelcius === true) {
		return `${String.fromCharCode(176)}C`;
	}

	return `${String.fromCharCode(176)}F`;
};

// toggle the temperature unit
const toggleTemp = () => {
	isTempCelcius === true ? isTempCelcius = false : isTempCelcius = true;
};

// translate from kelvin to celcius
const kelvinToCelcius = (K) => {
	const celcius = K - 273.15;
	return `${Math.round(celcius)}${String.fromCharCode(176)}C`;
};

// translate from kelvin to fahrenheit
const kelvinToFahrenheit = (K) => {
	const fah = 1.8 * (K - 273.15) + 32;
	return `${Math.round(fah)}${String.fromCharCode(176)}F`;
};
// converts all the temperature output when the temp is switched to a different unit
const convertTemp = (t) => (isTempCelcius === true ? kelvinToCelcius(t) : kelvinToFahrenheit(t));

// meter/second to meter per hour
const windSpeedToMPH = (n) => Math.round(n * 2.237);

// replace the 0 - 360 degree with N,E,W,S
const windDegToDir = (n) => {
	n > 349 ? n = 0 : n;
	let index;
	for (let i = 0; i < DIRECTIONS.length - 1; i++) {
		index = (i + DIRECTIONS.length) % DIRECTIONS.length;
		if (n > RANGE[i] || n < RANGE[index + 1]) {
			return DIRECTIONS[i];
		}
	}
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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/controller.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvYWxlcnQuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tZWRpYV9xdWVyaWVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL2FsZXJ0LmNzcz9hNWFlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tZWRpYV9xdWVyaWVzLmNzcz9lODJiIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FsZXJ0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYmdfY2hhbmdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY3VycmVudF9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZmV0Y2hfZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zZXJ2ZXItcm91dGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy90aW1lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdW5pdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG9FQUFvRSxnQ0FBZ0MsZ0NBQWdDLGVBQWUsY0FBYyxHQUFHLFVBQVUsdUNBQXVDLGlCQUFpQiw4QkFBOEIsMkJBQTJCLDBCQUEwQiwwQkFBMEIsb0JBQW9CLEdBQUcsVUFBVSxxQkFBcUIseUJBQXlCLHVCQUF1QixH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QUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxjQUFjLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksWUFBWSxVQUFVLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxXQUFXLFdBQVcsUUFBUSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssV0FBVyxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsVUFBVSxXQUFXLGFBQWEsUUFBUSxNQUFNLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxXQUFXLFlBQVksWUFBWSxhQUFhLFFBQVEsWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksWUFBWSxhQUFhLFFBQVEsS0FBSyxXQUFXLFVBQVUsUUFBUSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sS0FBSyxhQUFhLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxVQUFVLFVBQVUsVUFBVSxRQUFRLE1BQU0sV0FBVyxRQUFRLGFBQWEsT0FBTyxZQUFZLFdBQVcsYUFBYSxhQUFhLGFB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WSxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxhQUFhLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxjQUFjLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksWUFBWSxVQUFVLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxXQUFXLFdBQVcsUUFBUSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssV0FBVyxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsVUFBVSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxZQUFZLFdBQVcsV0FBVyxhQUFhLFFBQVEsTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sWUFBWSxhQUFhLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxVQUFVLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFdBQVcsVUFBVSxXQUFXLGFBQWEsYUFBYSxXQUFXLFFBQVEsTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxRQUFRLEtBQUssV0FBVyxVQUFVLFFBQVEsWUFBWSxPQUFPLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxhQUFhLFdBQVcsVUFBVSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFVBQVUsV0FBVyxhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksYUFBYSxVQUFVLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksWUFBWSxhQUFhLFFBQVEsTUFBTSxZQUFZLGFBQWEsWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLFFBQVEsTUFBTSxZQUFZLGFBQWEsVUFBVSxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxhQUFhLGNBQWMsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsUUFBUSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsUUFBUSxLQUFLLFVBQVUsZUFBZSxTQUFTLEtBQUssYUFBYSxjQUFjLGNBQWMsU0FBUyxLQUFLLFlBQVksVUFBVSxRQUFRLEtBQUssY0FBYyxhQUFhLFlBQVksYUFBYSxXQUFXLFdBQVcsU0FBUyxLQUFLLFlBQVksU0FBUyxjQUFjLFFBQVEsY0FBYyxZQUFZLFdBQVcsYUFBYSxlQUFlLGFBQWEsWUFBWSxXQUFXLFdBQVcsUUFBUSxLQUFLLGFBQWEsY0FBYyxjQUFjLFdBQVcsV0FBVyxZQUFZLGFBQWEsU0FBUyxPQUFPLFlBQVksV0FBVyxTQUFTLEtBQUssYUFBYSxXQUFXLFNBQVMsS0FBSyxZQUFZLGVBQWUsV0FBVyxZQUFZLGNBQWMsU0FBUyxLQUFLLFlBQVksZUFBZSxXQUFXLFlBQVksWUFBWSxjQUFjLFNBQVMsT0FBTyxjQUFjLFdBQVcsWUFBWSxZQUFZLFNBQVMsT0FBTyxXQUFXLFNBQVMsS0FBSyxZQUFZLFlBQVksWUFBWSxZQUFZLFFBQVEsY0FBYyxRQUFRLFlBQVksY0FBYyxVQUFVLFVBQVUsUUFBUSxLQUFLLGFBQWEsY0FBYyxhQUFhLFVBQVUsV0FBVyxZQUFZLGFBQWEsVUFBVSxXQUFXLFNBQVMsS0FBSyxZQUFZLFVBQVUsUUFBUSxLQUFLLFlBQVksVUFBVSxVQUFVLFNBQVMsS0FBSyxjQUFjLFlBQVksU0FBUyxLQUFLLFlBQVksY0FBYyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxRQUFRLGNBQWMsUUFBUSxhQUFhLFVBQVUsV0FBVyxXQUFXLGNBQWMsY0FBYyxVQUFVLFVBQVUsUUFBUSxLQUFLLGFBQWEsY0FBYyxhQUFhLFlBQVksWUFBWSxjQUFjLGVBQWUsU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxnQkFBZ0IsaUJBQWlCLFNBQVMsS0FBSyxhQUFhLGdCQUFnQixlQUFlLFVBQVUsY0FBYyxjQUFjLGVBQWUsWUFBWSxZQUFZLGVBQWUsWUFBWSxZQUFZLGdCQUFnQixZQUFZLGlCQUFpQixpQkFBaUIsU0FBUyxLQUFLLFlBQVksY0FBYyxlQUFlLFFBQVEsS0FBSyxhQUFhLFFBQVEsT0FBTyxXQUFXLGdCQUFnQixlQUFlLGNBQWMsT0FBTyxLQUFLLFlBQVksZ0JBQWdCLGVBQWUsWUFBWSxlQUFlLFNBQVMsS0FBSyxZQUFZLFlBQVksYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGVBQWUsV0FBVyxlQUFlLFNBQVMsS0FBSyxhQUFhLFdBQVcsUUFBUSxLQUFLLGNBQWMsZUFBZSxVQUFVLGVBQWUsZ0JBQWdCLFVBQVUsUUFBUSxLQUFLLGFBQWEsZ0JBQWdCLFlBQVksU0FBUyxLQUFLLFlBQVksZUFBZSxZQUFZLFNBQVMsS0FBSyxjQUFjLFNBQVMsS0FBSyxhQUFhLFlBQVksU0FBUyxLQUFLLGNBQWMsU0FBUyxLQUFLLGNBQWMsWUFBWSxRQUFRLGFBQWEsT0FBTyxZQUFZLGVBQWUsV0FBVyxnQkFBZ0IsaUJBQWlCLFdBQVcsV0FBVyxlQUFlLGNBQWMsYUFBYSxlQUFlLFlBQVksWUFBWSxlQUFlLGNBQWMsY0FBYyxjQUFjLFlBQVksWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtB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QUFXLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxhQUFhLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxjQUFjLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksWUFBWSxVQUFVLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxXQUFXLFdBQVcsUUFBUSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssV0FBVyxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxX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QUNBO0FBQ0E7O0FBUUU7Ozs7Ozs7VUMxREY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BLDJCOzs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYXBwLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBtb25vc3BhY2U7XFxuICBjb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuZm9ybSB7XFxuICBwYWRkaW5nLXRvcDogOXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE5cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgLW8tb2JqZWN0LXBvc2l0aW9uOiBib3R0b207XFxuICAgICBvYmplY3QtcG9zaXRpb246IGJvdHRvbTtcXG59XFxuXFxuI21vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuMyk7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI21haW4taGVhZGVyIHtcXG4gIGhlaWdodDogNnZoO1xcbiAgYmFja2dyb3VuZDogIzJiMjQxNjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTBkZWcsICMyYjI0MTYgMCUsICM5NTY4NWQgNDElLCAjZGViMDljIDg0JSk7XFxufVxcblxcbiNmb3JlY2FzdC1oZWFkZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3VwcGVyLW1haW4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogNjh2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdXBwZXItbWFpbiA+IGRpdiB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKioqKioqKioqKiogREFJTFkgV0VBVEhFUiBTRUNUSU9OICoqKioqKioqKi9cXG4jZGFpbHktbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogNjh2aDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2RhaWx5LW1haW4gLmRhaWx5LXdyYXBwZXJzIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjglO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDJyZW0pO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMgLmRhaWx5LWxvd2VyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMgLmRhaWx5LWxvd2VyIGRpdiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2RhaWx5LW1haW4gLmRhaWx5LXdyYXBwZXJzIC5kYWlseS1sb3dlciBkaXYgZGl2IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kYWlseS10ZW1wcyB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMS44dncsIDNyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kYWlseS1mZWVscyB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5kYWlseS1jb250ZW50cyB7XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4vKioqKioqKkNVUlJFTlQgV0VBVEhFUiBTRUNUSU9OICoqKioqKiovXFxuI2N1cnJlbnQtbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNjdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiBjbGFtcCg0LjJyZW0sIDExLjV2dywgNTByZW0pO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbiNjdXJyZW50LXVwcGVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjdXJyZW50LXVwcGVyICNjdXJyZW50LXVwcGVyLWxlZnQgPiAqIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgNHJlbSk7XFxufVxcblxcbiNjdXJyZW50LXVwcGVyICNjdXJyZW50LXVwcGVyLWxlZnQgPiAqICNjdXJyZW50LWxvY2F0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIgI2N1cnJlbnQtdXBwZXItcmlnaHQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcbn1cXG5cXG4jY3VycmVudC1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmN1cnJlbnQtY29udGVudHMge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDJ2dywgM3JlbSk7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uY2hvb3NlLXRlbXAge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY3VycmVudC1sb3dlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY3VycmVudC1sb3dlciAjY3VycmVudC1sb3dlci1yaWdodCA+ICoge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4vKioqKioqKipIT1VSTFkgV0VBVEhFUiBTRUNUSU9OICoqKioqKioqKi9cXG4jbG93ZXItbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAyNXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNsb3dlci1tYWluIC5ocmx5LWNvbnRlbnRzID4gKiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxLjF2dywgMi40ZW0pO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsb3dlci1tYWluIC5ocmx5LWljb25zIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiNsb3dlci1tYWluIC5ocmx5LXRlbXAsICNsb3dlci1tYWluIC5ocmx5LXRpbWUge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjV2dywgNHJlbSk7XFxufVxcblxcbiNsb3dlci1tYWluIC5ocmx5LWxvd2VyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktbG93ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG93ZXItbWFpbiA+IGRpdiB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5jaG9vc2UtdGVtcDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5jaG9vc2UtdGVtcCB7XFxuICB3aWR0aDogNzBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgNHJlbSk7XFxufVxcblxcbi8qKioqKioqKioqIElDT05TL0dJRiAqKioqKioqKioqKiovXFxuI3VzZXItbG9jYXRpb24ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdXNlci1sb2NhdGlvbjpob3Zlcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcbiAgYm90dG9tOiAtMy41ZW07XFxuICBsZWZ0OiAtNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IC4yNWVtIC41ZW07XFxuICBmb250LXNpemU6IC44ZW07XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmltZy1mZWVscyB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuXFxuLmltZy1zcGQsIC5pbWctZGVnIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4uaW1nLWh1bWlkaXR5IHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMjYlKSBzZXBpYSg4NSUpIHNhdHVyYXRlKDE3OTklKSBodWUtcm90YXRlKDIwMWRlZykgYnJpZ2h0bmVzcyg4NiUpIGNvbnRyYXN0KDkwJSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDI2JSkgc2VwaWEoODUlKSBzYXR1cmF0ZSgxNzk5JSkgaHVlLXJvdGF0ZSgyMDFkZWcpIGJyaWdodG5lc3MoODYlKSBjb250cmFzdCg5MCUpO1xcbn1cXG5cXG4ubG9hZGluZy1naWYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIzcHg7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICB0b3A6IDQ1JTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqKioqKioqKiogQUxFUlQgU0VDVElPTiAqKioqKioqKioqL1xcbiNhbGVydC1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxJTtcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDc0JSkgc2F0dXJhdGUoNDg5NiUpIGh1ZS1yb3RhdGUoMzM3ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoODYlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSg3NCUpIHNhdHVyYXRlKDQ4OTYlKSBodWUtcm90YXRlKDMzN2RlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDg2JSk7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jYWxlcnQtYnRuOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDE0ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE0ZGVnKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gNDAwbXMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gNDAwbXMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBsaW5lYXIsIC13ZWJraXQtdHJhbnNmb3JtIDQwMG1zIGxpbmVhcjtcXG59XFxuXFxuI2FsZXJ0LWJ0bjpob3Zlcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcbiAgYm90dG9tOiAtMy41ZW07XFxuICBsZWZ0OiAtNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IC4yNWVtIC41ZW07XFxuICBmb250LXNpemU6IC44ZW07XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuI2FsZXJ0LWRlc2Mge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDIwJTtcXG4gIHRvcDogMjAlO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IDYwdmg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHotaW5kZXg6IDExO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDEsIDEsIDEsIDAuMyk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDEsIDEsIDEsIDAuMyk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDkwMG1zIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gOTAwbXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gOTAwbXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gOTAwbXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDkwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jYWxlcnQtZGVzYyAjYWxlcnQtaGVhZGVyIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2RhM2YzZjtcXG59XFxuXFxuI2FsZXJ0LWRlc2MgI2FsZXJ0LWhlYWRlciBwIHtcXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xcbn1cXG5cXG4jYWxlcnQtZGVzYyAjYWxlcnQtZmxleCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XFxufVxcblxcbiNhbGVydC1kZXNjICNhbGVydC1mbGV4ICNhbGVydC1ldmVudHMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJhY2tncm91bmQ6ICNlZGEzYTM7XFxuICBjb2xvcjogIzIyMzgyZDtcXG59XFxuXFxuI2FsZXJ0LWRlc2MgI2FsZXJ0LWZsZXggI2FsZXJ0LWV2ZW50cyBkaXYge1xcbiAgcGFkZGluZzogNnB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMzgyZDtcXG59XFxuXFxuI2FsZXJ0LWRlc2MgI2FsZXJ0LWZsZXggI2FsZXJ0LXRleHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwJSk7XFxuICBiYWNrZ3JvdW5kOiAjZTY4ZjhmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNhbGVydC1kZXNjICNhbGVydC1mbGV4ICNhbGVydC10ZXh0IHAge1xcbiAgcGFkZGluZzogMTVweCAyOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuI2FsZXJ0LWRlc2MgI2FsZXJ0LWZsZXggI2FsZXJ0LXRleHQgI2FsZXJ0LWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzJTtcXG4gIGJvdHRvbTogNSU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWRhM2EzO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmV2ZW50LXR4dHM6aG92ZXIsICNhbGVydC1jbG9zZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5zbGlkZURvd24ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yOTk5cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yOTk5cHgpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zbGlkZURvd24ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNsaWRlVXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDI5OTlweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMjk5OXB4KTtcXG59XFxuXFxuLnNsaWRlVXAge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmFjdGl2ZS1zdGF0ZSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi8qKioqKioqKioqIEVSUk9SIFNFQ1RJT04gKioqKioqKioqKi9cXG4jZXJyb3Ige1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMzAlO1xcbiAgdG9wOiAzMCU7XFxuICB3aWR0aDogNDB2dztcXG4gIGhlaWdodDogNDB2aDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgei1pbmRleDogMTE7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMjAwbXMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMjAwbXMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBsaW5lYXIsIC13ZWJraXQtdHJhbnNmb3JtIDIwMG1zIGxpbmVhcjtcXG59XFxuXFxuI2Vycm9yICNlcnJvci1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZWIzMzQ5KSwgdG8oI2Y0NWM0MykpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlYjMzNDksICNmNDVjNDMpO1xcbiAgaGVpZ2h0OiAxLjR2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZXJyb3IgcCB7XFxuICBjb2xvcjogIzIyMzgzNjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4jZXJyb3IgaW1nIHtcXG4gIHdpZHRoOiA2NHB4O1xcbn1cXG5cXG4jZXJyb3IgYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmMTRkNjApLCB0bygjZjM1ZjQ4KSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2YxNGQ2MCwgI2YzNWY0OCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNlcnJvciBidXR0b246aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTAwcHggMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTAwcHggMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cXG5cXG4uaGlkZVVzaW5nU2NhbGVaZXJvIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxufVxcblxcbi5zaG93VXNpbmdTY2FsZU9uZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9YWxlcnQuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9hbGVydC5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYWxlcnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFxQkE7OztFQUdJLDJCQUFt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aUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCx1RkFBdUY7RUFDdkYsNkNBQTZDO0VBQzdDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtFQUFrRTtVQUMxRCwwREFBMEQ7QUFDcEU7O0FBRUE7RUFDRSwrQ0FBK0M7VUFDdkMsdUNBQXVDO0FBQ2pEOztBQUVBO0VBQ0UsaURBQWlEO1VBQ3pDLHlDQUF5QztBQUNuRDtBQUNBLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBhZGRpbmctdG9wOiA5cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTlweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAtby1vYmplY3QtcG9zaXRpb246IGJvdHRvbTtcXG4gICAgIG9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xcbn1cXG5cXG4jbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMSwgMSwgMSwgMC4zKTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jbWFpbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA2dmg7XFxuICBiYWNrZ3JvdW5kOiAjMmIyNDE2O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxMGRlZywgIzJiMjQxNiAwJSwgIzk1Njg1ZCA0MSUsICNkZWIwOWMgODQlKTtcXG59XFxuXFxuI2ZvcmVjYXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdXBwZXItbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA2OHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN1cHBlci1tYWluID4gZGl2IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKioqKioqKioqKiBEQUlMWSBXRUFUSEVSIFNFQ1RJT04gKioqKioqKioqL1xcbiNkYWlseS1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA2OHZoO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyOCU7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxufVxcblxcbiNkYWlseS1tYWluIC5kYWlseS13cmFwcGVycyAuZGFpbHktbG93ZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNkYWlseS1tYWluIC5kYWlseS13cmFwcGVycyAuZGFpbHktbG93ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMgLmRhaWx5LWxvd2VyIGRpdiBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmRhaWx5LXRlbXBzIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAxLjh2dywgM3JlbSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRhaWx5LWZlZWxzIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmRhaWx5LWNvbnRlbnRzIHtcXG4gIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi8qKioqKioqQ1VSUkVOVCBXRUFUSEVSIFNFQ1RJT04gKioqKioqKi9cXG4jY3VycmVudC1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2N1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IGNsYW1wKDQuMnJlbSwgMTEuNXZ3LCA1MHJlbSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIgI2N1cnJlbnQtdXBwZXItbGVmdCA+ICoge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCA0cmVtKTtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIgI2N1cnJlbnQtdXBwZXItbGVmdCA+ICogI2N1cnJlbnQtbG9jYXRpb24ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4jY3VycmVudC11cHBlciAjY3VycmVudC11cHBlci1yaWdodCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAydnc7XFxufVxcblxcbiNjdXJyZW50LWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uY3VycmVudC1jb250ZW50cyB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMnZ3LCAzcmVtKTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5jaG9vc2UtdGVtcCB7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjdXJyZW50LWxvd2VyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjdXJyZW50LWxvd2VyICNjdXJyZW50LWxvd2VyLXJpZ2h0ID4gKiB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi8qKioqKioqKkhPVVJMWSBXRUFUSEVSIFNFQ1RJT04gKioqKioqKioqL1xcbiNsb3dlci1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktY29udGVudHMgPiAqIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDEuMXZ3LCAyLjRlbSk7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktaWNvbnMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktdGVtcCwgI2xvd2VyLW1haW4gLmhybHktdGltZSB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNXZ3LCA0cmVtKTtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktbG93ZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jbG93ZXItbWFpbiAuaHJseS1sb3dlciBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb3dlci1tYWluID4gZGl2IHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmNob29zZS10ZW1wOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmNob29zZS10ZW1wIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCA0cmVtKTtcXG59XFxuXFxuLyoqKioqKioqKiogSUNPTlMvR0lGICoqKioqKioqKioqKi9cXG4jdXNlci1sb2NhdGlvbiB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN1c2VyLWxvY2F0aW9uOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxuICBib3R0b206IC0zLjVlbTtcXG4gIGxlZnQ6IC01ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogLjI1ZW0gLjVlbTtcXG4gIGZvbnQtc2l6ZTogLjhlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG4uaW1nLWZlZWxzIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uaW1nLXNwZCwgLmltZy1kZWcge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5pbWctaHVtaWRpdHkge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgyNiUpIHNlcGlhKDg1JSkgc2F0dXJhdGUoMTc5OSUpIGh1ZS1yb3RhdGUoMjAxZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMjYlKSBzZXBpYSg4NSUpIHNhdHVyYXRlKDE3OTklKSBodWUtcm90YXRlKDIwMWRlZykgYnJpZ2h0bmVzcyg4NiUpIGNvbnRyYXN0KDkwJSk7XFxufVxcblxcbi5sb2FkaW5nLWdpZiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjNweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIHRvcDogNDUlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZy10b3A6IDlweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxOXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIC1vLW9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xcbiAgICAgb2JqZWN0LXBvc2l0aW9uOiBib3R0b207XFxufVxcblxcbiNtb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxLCAxLCAxLCAwLjMpO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbiNtYWluLWhlYWRlciB7XFxuICBoZWlnaHQ6IDZ2aDtcXG4gIGJhY2tncm91bmQ6ICMyYjI0MTY7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjMmIyNDE2IDAlLCAjOTU2ODVkIDQxJSwgI2RlYjA5YyA4NCUpO1xcbn1cXG5cXG4jZm9yZWNhc3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN1cHBlci1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDY4dmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3VwcGVyLW1haW4gPiBkaXYge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqKioqKioqKioqIERBSUxZIFdFQVRIRVIgU0VDVElPTiAqKioqKioqKiovXFxuI2RhaWx5LW1haW4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDY4dmg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkYWlseS1tYWluIC5kYWlseS13cmFwcGVycyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDI4JTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAycmVtKTtcXG59XFxuXFxuI2RhaWx5LW1haW4gLmRhaWx5LXdyYXBwZXJzIC5kYWlseS1sb3dlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2RhaWx5LW1haW4gLmRhaWx5LXdyYXBwZXJzIC5kYWlseS1sb3dlciBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkYWlseS1tYWluIC5kYWlseS13cmFwcGVycyAuZGFpbHktbG93ZXIgZGl2IGRpdiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZGFpbHktdGVtcHMge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDEuOHZ3LCAzcmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGFpbHktZmVlbHMge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uZGFpbHktY29udGVudHMge1xcbiAgbWFyZ2luOiAwIDVweDtcXG59XFxuXFxuLyoqKioqKipDVVJSRU5UIFdFQVRIRVIgU0VDVElPTiAqKioqKioqL1xcbiNjdXJyZW50LW1haW4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNC4ycmVtLCAxMS41dncsIDUwcmVtKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4jY3VycmVudC11cHBlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY3VycmVudC11cHBlciAjY3VycmVudC11cHBlci1sZWZ0ID4gKiB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDRyZW0pO1xcbn1cXG5cXG4jY3VycmVudC11cHBlciAjY3VycmVudC11cHBlci1sZWZ0ID4gKiAjY3VycmVudC1sb2NhdGlvbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbiNjdXJyZW50LXVwcGVyICNjdXJyZW50LXVwcGVyLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJ2dztcXG59XFxuXFxuI2N1cnJlbnQtaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5jdXJyZW50LWNvbnRlbnRzIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAydncsIDNyZW0pO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmNob29zZS10ZW1wIHtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2N1cnJlbnQtbG93ZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtbG93ZXIgI2N1cnJlbnQtbG93ZXItcmlnaHQgPiAqIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLyoqKioqKioqSE9VUkxZIFdFQVRIRVIgU0VDVElPTiAqKioqKioqKiovXFxuI2xvd2VyLW1haW4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogMjV2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbG93ZXItbWFpbiAuaHJseS1jb250ZW50cyA+ICoge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMS4xdncsIDIuNGVtKTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbG93ZXItbWFpbiAuaHJseS1pY29ucyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jbG93ZXItbWFpbiAuaHJseS10ZW1wLCAjbG93ZXItbWFpbiAuaHJseS10aW1lIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41dncsIDRyZW0pO1xcbn1cXG5cXG4jbG93ZXItbWFpbiAuaHJseS1sb3dlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNsb3dlci1tYWluIC5ocmx5LWxvd2VyIGRpdiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvd2VyLW1haW4gPiBkaXYge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4uY2hvb3NlLXRlbXA6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uY2hvb3NlLXRlbXAge1xcbiAgd2lkdGg6IDcwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDRyZW0pO1xcbn1cXG5cXG4vKioqKioqKioqKiBJQ09OUy9HSUYgKioqKioqKioqKioqL1xcbiN1c2VyLWxvY2F0aW9uIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICBtYXJnaW46IDAgMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3VzZXItbG9jYXRpb246aG92ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXG4gIGJvdHRvbTogLTMuNWVtO1xcbiAgbGVmdDogLTVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbi5pbWctZmVlbHMge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5pbWctc3BkLCAuaW1nLWRlZyB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLmltZy1odW1pZGl0eSB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDI2JSkgc2VwaWEoODUlKSBzYXR1cmF0ZSgxNzk5JSkgaHVlLXJvdGF0ZSgyMDFkZWcpIGJyaWdodG5lc3MoODYlKSBjb250cmFzdCg5MCUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgyNiUpIHNlcGlhKDg1JSkgc2F0dXJhdGUoMTc5OSUpIGh1ZS1yb3RhdGUoMjAxZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKTtcXG59XFxuXFxuLmxvYWRpbmctZ2lmIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyM3B4O1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgdG9wOiA0NSU7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qKioqKioqKioqIEFMRVJUIFNFQ1RJT04gKioqKioqKioqKi9cXG4jYWxlcnQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMSU7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSg3NCUpIHNhdHVyYXRlKDQ4OTYlKSBodWUtcm90YXRlKDMzN2RlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDg2JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoNzQlKSBzYXR1cmF0ZSg0ODk2JSkgaHVlLXJvdGF0ZSgzMzdkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg4NiUpO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI2FsZXJ0LWJ0bjpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxNGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxNGRlZyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDQwMG1zIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDQwMG1zIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgbGluZWFyLCAtd2Via2l0LXRyYW5zZm9ybSA0MDBtcyBsaW5lYXI7XFxufVxcblxcbiNhbGVydC1idG46aG92ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXG4gIGJvdHRvbTogLTMuNWVtO1xcbiAgbGVmdDogLTVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbiNhbGVydC1kZXNjIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAyMCU7XFxuICB0b3A6IDIwJTtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgaGVpZ2h0OiA2MHZoO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICB6LWluZGV4OiAxMTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgxLCAxLCAxLCAwLjMpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgxLCAxLCAxLCAwLjMpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSA5MDBtcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDkwMG1zIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDkwMG1zIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDkwMG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSA5MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2FsZXJ0LWRlc2MgI2FsZXJ0LWhlYWRlciB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNkYTNmM2Y7XFxufVxcblxcbiNhbGVydC1kZXNjICNhbGVydC1oZWFkZXIgcCB7XFxuICBwYWRkaW5nOiA2cHggMTRweDtcXG59XFxuXFxuI2FsZXJ0LWRlc2MgI2FsZXJ0LWZsZXgge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xcbn1cXG5cXG4jYWxlcnQtZGVzYyAjYWxlcnQtZmxleCAjYWxlcnQtZXZlbnRzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gIHdpZHRoOiAzMCU7XFxuICBiYWNrZ3JvdW5kOiAjZWRhM2EzO1xcbiAgY29sb3I6ICMyMjM4MmQ7XFxufVxcblxcbiNhbGVydC1kZXNjICNhbGVydC1mbGV4ICNhbGVydC1ldmVudHMgZGl2IHtcXG4gIHBhZGRpbmc6IDZweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjM4MmQ7XFxufVxcblxcbiNhbGVydC1kZXNjICNhbGVydC1mbGV4ICNhbGVydC10ZXh0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMCUpO1xcbiAgYmFja2dyb3VuZDogI2U2OGY4ZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jYWxlcnQtZGVzYyAjYWxlcnQtZmxleCAjYWxlcnQtdGV4dCBwIHtcXG4gIHBhZGRpbmc6IDE1cHggMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbiNhbGVydC1kZXNjICNhbGVydC1mbGV4ICNhbGVydC10ZXh0ICNhbGVydC1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMyU7XFxuICBib3R0b206IDUlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2VkYTNhMztcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5ldmVudC10eHRzOmhvdmVyLCAjYWxlcnQtY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTAwcHggMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTAwcHggMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4uc2xpZGVEb3duIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMjk5OXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMjk5OXB4KTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2xpZGVEb3duIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zbGlkZVVwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAyOTk5cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDI5OTlweCk7XFxufVxcblxcbi5zbGlkZVVwIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5hY3RpdmUtc3RhdGUge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTAwcHggMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTAwcHggMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4vKioqKioqKioqKiBFUlJPUiBTRUNUSU9OICoqKioqKioqKiovXFxuI2Vycm9yIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDMwJTtcXG4gIHRvcDogMzAlO1xcbiAgd2lkdGg6IDQwdnc7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHotaW5kZXg6IDExO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDIwMG1zIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDIwMG1zIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgbGluZWFyLCAtd2Via2l0LXRyYW5zZm9ybSAyMDBtcyBsaW5lYXI7XFxufVxcblxcbiNlcnJvciAjZXJyb3ItaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2ViMzM0OSksIHRvKCNmNDVjNDMpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZWIzMzQ5LCAjZjQ1YzQzKTtcXG4gIGhlaWdodDogMS40dmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Vycm9yIHAge1xcbiAgY29sb3I6ICMyMjM4MzY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI2Vycm9yIGltZyB7XFxuICB3aWR0aDogNjRweDtcXG59XFxuXFxuI2Vycm9yIGJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogNXZoO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZjE0ZDYwKSwgdG8oI2YzNWY0OCkpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmMTRkNjAsICNmMzVmNDgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZXJyb3IgYnV0dG9uOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwMHB4IDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwMHB4IDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuLmhpZGVVc2luZ1NjYWxlWmVybyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbn1cXG5cXG4uc2hvd1VzaW5nU2NhbGVPbmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzI0cHgpIHtcXG4gICNhbGVydC1kZXNjLCAjZXJyb3ItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAjYWxlcnQtZGVzYywgI2Vycm9yLXRleHQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG4gIC5pbWctc3BkLCAuaW1nLWRlZyB7XFxuICAgIHdpZHRoOiAxOXB4O1xcbiAgICBoZWlnaHQ6IDE5cHg7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gIH1cXG4gIC5pbWctaHVtaWRpdHkge1xcbiAgICB3aWR0aDogMTlweDtcXG4gICAgaGVpZ2h0OiAxOXB4O1xcbiAgfVxcbiAgLmltZy1mZWVscyB7XFxuICAgIHdpZHRoOiAxMC41cHg7XFxuICAgIGhlaWdodDogMjFweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAjYWxlcnQtZGVzYywgI2Vycm9yLXRleHQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAuaW1nLXNwZCwgLmltZy1kZWcge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICB9XFxuICAuaW1nLWh1bWlkaXR5IHtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gIH1cXG4gIC5pbWctZmVlbHMge1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDNweCkge1xcbiAgI2FsZXJ0LWRlc2MsICNlcnJvci10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAyNTYwcHgpIGFuZCAobWluLWhlaWdodDogMTkyMHB4KSB7XFxuICAuZGFpbHktaWNvbnMsIC5ocmx5LWljb25zIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgfVxcbiAgLmhybHktY29udGVudHMgPiAqIHtcXG4gICAgcGFkZGluZzogMTJweCAwO1xcbiAgfVxcbn1cXG5cXG4vKioqKioqKioqKiogIEhFSUdIVFMgICoqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpIHtcXG4gIC5kYWlseS1pY29ucywgLmhybHktaWNvbnMge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICAjdXBwZXItbWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI3VwcGVyLW1haW4gZGl2IHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICB9XFxuICAjZGFpbHktbWFpbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuaHJseS1jb250ZW50czpudGgtY2hpbGQoNSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmhybHktY29udGVudHM6bnRoLWNoaWxkKDYpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5ocmx5LWNvbnRlbnRzOm50aC1jaGlsZCg3KSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuaHJseS1jb250ZW50czpudGgtY2hpbGQoOCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmhybHktY29udGVudHM6bnRoLWNoaWxkKDkpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA0MjBweCkge1xcbiAgI21haW4taGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcbiAgI21haW4ge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG4gICN1cHBlci1tYWluIHtcXG4gICAgaGVpZ2h0OiA4NHZoO1xcbiAgfVxcbiAgI3VwcGVyLW1haW4gI2N1cnJlbnQtbWFpbiB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gIH1cXG4gICNkYWlseS1tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG4gICNsb3dlci1tYWluIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5pbWctc3BkLCAuaW1nLWRlZywgLmltZy1odW1pZGl0eSwgLmltZy1mZWVscyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xcbiAgI2Vycm9yIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTgwcHgpO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQyMHB4KSBhbmQgKG1heC13aWR0aDogODEycHgpIHtcXG4gICNlcnJvciB7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE1MHB4KTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gIH1cXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bWVkaWFfcXVlcmllcy5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21lZGlhX3F1ZXJpZXMuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FsZXJ0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWVkaWFfcXVlcmllcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXFCQTs7O0VBR0ksMkJBQW1CO1VBQ1osbUJBQUc7RUFDVixVQUFTO0VBQ1osU0FBQTtBQ3BCRDs7QUFFQTtFRHFCSSxnQ0FBWTtFQUNaLFlBQUE7RUFDQSx5QkFBc0I7RUFDdEIsc0JBQWlCO0VBQ2pCLHFCQWpDZTtNQWtDbEIsaUJBQUE7RUNuQkMsZUFBZTtBRG9CakI7O0FDakJBO0VEb0JJLGdCQUFZO0VBQ2Ysb0JBQUE7RUNsQkMsa0JB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QUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLFFBQVE7SUFDUixTQUFTO0VBQ1g7QUFDRjtBQUNBLDRDQUE0Q1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBhZGRpbmctdG9wOiA5cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTlweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAtby1vYmplY3QtcG9zaXRpb246IGJvdHRvbTtcXG4gICAgIG9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xcbn1cXG5cXG4jbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMSwgMSwgMSwgMC4zKTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jbWFpbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA2dmg7XFxuICBiYWNrZ3JvdW5kOiAjMmIyNDE2O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxMGRlZywgIzJiMjQxNiAwJSwgIzk1Njg1ZCA0MSUsICNkZWIwOWMgODQlKTtcXG59XFxuXFxuI2ZvcmVjYXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdXBwZXItbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA2OHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN1cHBlci1tYWluID4gZGl2IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKioqKioqKioqKiBEQUlMWSBXRUFUSEVSIFNFQ1RJT04gKioqKioqKioqL1xcbiNkYWlseS1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA2OHZoO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyOCU7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxufVxcblxcbiNkYWlseS1tYWluIC5kYWlseS13cmFwcGVycyAuZGFpbHktbG93ZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNkYWlseS1tYWluIC5kYWlseS13cmFwcGVycyAuZGFpbHktbG93ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMgLmRhaWx5LWxvd2VyIGRpdiBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmRhaWx5LXRlbXBzIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAxLjh2dywgM3JlbSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRhaWx5LWZlZWxzIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmRhaWx5LWNvbnRlbnRzIHtcXG4gIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi8qKioqKioqQ1VSUkVOVCBXRUFUSEVSIFNFQ1RJT04gKioqKioqKi9cXG4jY3VycmVudC1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2N1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IGNsYW1wKDQuMnJlbSwgMTEuNXZ3LCA1MHJlbSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIgI2N1cnJlbnQtdXBwZXItbGVmdCA+ICoge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCA0cmVtKTtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIgI2N1cnJlbnQtdXBwZXItbGVmdCA+ICogI2N1cnJlbnQtbG9jYXRpb24ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4jY3VycmVudC11cHBlciAjY3VycmVudC11cHBlci1yaWdodCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAydnc7XFxufVxcblxcbiNjdXJyZW50LWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uY3VycmVudC1jb250ZW50cyB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMnZ3LCAzcmVtKTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5jaG9vc2UtdGVtcCB7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjdXJyZW50LWxvd2VyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjdXJyZW50LWxvd2VyICNjdXJyZW50LWxvd2VyLXJpZ2h0ID4gKiB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi8qKioqKioqKkhPVVJMWSBXRUFUSEVSIFNFQ1RJT04gKioqKioqKioqL1xcbiNsb3dlci1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktY29udGVudHMgPiAqIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDEuMXZ3LCAyLjRlbSk7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktaWNvbnMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktdGVtcCwgI2xvd2VyLW1haW4gLmhybHktdGltZSB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNXZ3LCA0cmVtKTtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktbG93ZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jbG93ZXItbWFpbiAuaHJseS1sb3dlciBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb3dlci1tYWluID4gZGl2IHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmNob29zZS10ZW1wOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmNob29zZS10ZW1wIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCA0cmVtKTtcXG59XFxuXFxuLyoqKioqKioqKiogSUNPTlMvR0lGICoqKioqKioqKioqKi9cXG4jdXNlci1sb2NhdGlvbiB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN1c2VyLWxvY2F0aW9uOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxuICBib3R0b206IC0zLjVlbTtcXG4gIGxlZnQ6IC01ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogLjI1ZW0gLjVlbTtcXG4gIGZvbnQtc2l6ZTogLjhlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG4uaW1nLWZlZWxzIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uaW1nLXNwZCwgLmltZy1kZWcge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5pbWctaHVtaWRpdHkge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgyNiUpIHNlcGlhKDg1JSkgc2F0dXJhdGUoMTc5OSUpIGh1ZS1yb3RhdGUoMjAxZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMjYlKSBzZXBpYSg4NSUpIHNhdHVyYXRlKDE3OTklKSBodWUtcm90YXRlKDIwMWRlZykgYnJpZ2h0bmVzcyg4NiUpIGNvbnRyYXN0KDkwJSk7XFxufVxcblxcbi5sb2FkaW5nLWdpZiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjNweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIHRvcDogNDUlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFxQkE7OztFQUdJLDJCQUFtQjtVQUNaLG1CQUFHO0VBQ1YsVUFBUztFQUNaLFNBQUE7QUNwQkQ7O0FBRUE7RURxQkksZ0NBQVk7RUFDWixZQUFBO0VBQ0EseUJBQXNCO0VBQ3RCLHNCQUFpQjtFQUNq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LCtGQUErRjtBQUN6Rzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQSxvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbGVydC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lZGlhX3F1ZXJpZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gbW9kdWxlc1xuaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL21vZHVsZXMvZmV0Y2hfZGF0YSc7XG5pbXBvcnQgRE9NIGZyb20gJy4vbW9kdWxlcy9lbGVtZW50cyc7XG5pbXBvcnQgbWFuYWdlIGZyb20gJy4vbW9kdWxlcy9oZWxwZXJzJztcbmltcG9ydCB7XG5cdGNoZWNrVGVtcFVuaXQsXG5cdHRvZ2dsZVRlbXAsXG5cdGNvbnZlcnRUZW1wLFxuXHR3aW5kU3BlZWRUb01QSCxcblx0d2luZERlZ1RvRGlyLFxufSBmcm9tICcuL21vZHVsZXMvdW5pdHMnO1xuaW1wb3J0IHtcblx0Y29udmVydFRaLFxuXHRmb3JtYXRIb3VyTWluLFxuXHRmb3JtYXRIb3VyT25seSxcblx0Zm9ybWF0RnVsbERhdGUsXG5cdGZvcm1hdFNob3J0RGF0ZSxcblx0Z2V0TG9jYWxIb3Vycyxcbn0gZnJvbSAnLi9tb2R1bGVzL3RpbWUnO1xuaW1wb3J0IHsgZ2V0QXJlYUZyb21Db29yZGluYXRlcyB9IGZyb20gJy4vbW9kdWxlcy9jdXJyZW50X2xvY2F0aW9uJztcbmltcG9ydCB7IGdldEFsZXJ0LCB0b2dnbGVEaXNwbGF5IH0gZnJvbSAnLi9tb2R1bGVzL2FsZXJ0JztcbmltcG9ydCBiZ01hbmlwdWxhdGlvbiBmcm9tICcuL21vZHVsZXMvYmdfY2hhbmdlJztcblxuLy8gc3R5bGVzXG5pbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2FsZXJ0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21lZGlhX3F1ZXJpZXMuY3NzJztcblxuLy8gaW1hZ2VzXG5pbXBvcnQgaWNvbkh1bWlkaXR5IGZyb20gJy4vaW1nL2h1bWlkaXR5LnBuZyc7XG5pbXBvcnQgaWNvbkZlZWxzTGlrZSBmcm9tICcuL2ltZy9mZWVsc19saWtlLnN2Zyc7XG5pbXBvcnQgaWNvbldpbmRTcGQgZnJvbSAnLi9pbWcvd2luZC1zb2xpZC5zdmcnO1xuaW1wb3J0IGljb25Db21wYXNzIGZyb20gJy4vaW1nL2NvbXBhc3MtcmVndWxhci5zdmcnO1xuXG4vLyB0aGUgb25seSBnbG9iYWwgdmFyaWFibGVcbmxldCB3ZWF0aGVyRGF0YTsgLy8gdXNlZCBsYXRlciB0byBhc3NpbmcgZGF0YSBvbiB0aGlzIHZhclxuXG5kb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdERPTS5lcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG59O1xuXG4vLyBkaXNwbGF5IGRlZmF1bHRcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdGRlZmF1bHRMb2NhdGlvbigpO1xufTtcblxuRE9NLmFyZWFJbnB1dC5vbmZvY3VzID0gKCkgPT4ge1xuXHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbn07XG5cbi8vIGFzayB0aGUgdXNlciBmb3IgYSBwZXJtaXNzaW9uIHRvIGNvbGxlY3QgdGhlIGZvcm1lcidzIGNvb3JkaW5hdGVzXG5ET00udXNlckxvY2F0aW9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcblx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGdldENvb3JkaW5hdGVzRnJvbVVzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKCdHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3NlcicpO1xuXHR9XG59O1xuXG4vLyBnZXQgdGhlIHVzZXIncyBjdXJyZW50IGxvY2F0aW9uXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlc0Zyb21Vc2VyKHBvcykge1xuXHRET00ubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdGNvbnN0IGxhdCA9IHBvcy5jb29yZHMubGF0aXR1ZGU7XG5cdGNvbnN0IGxvbiA9IHBvcy5jb29yZHMubG9uZ2l0dWRlO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hDb29yZGluYXRlc1RvR2V0QXJlYShsYXQsIGxvbik7XG5cdGFzc2lnblVzZXJMb2NhdGlvbihkYXRhKTtcbn1cblxuLy8gdXNpbmcgdGhlIGNvb3JkaW5hdGVzIHRvIGdldCB0aGUgcHJvcGVyIGFyZWFcbmZ1bmN0aW9uIGZldGNoQ29vcmRpbmF0ZXNUb0dldEFyZWEobGF0LCBsb24pIHtcblx0ZmV0Y2hEYXRhLnNldENvb3JkaW5hdGVzKGxhdCwgbG9uKTtcblx0cmV0dXJuIGdldEFyZWFGcm9tQ29vcmRpbmF0ZXMoeyBsYXQsIGxvbiB9KTtcbn1cblxuLy8gYXNzaWduIHRoZSB1c2VyJ3MgbG9jYXRpb24gYXMgY3VycmVudFxuYXN5bmMgZnVuY3Rpb24gYXNzaWduVXNlckxvY2F0aW9uKGRhdGEpIHtcblx0Y29uc3QgYXJlYU5hbWUgPSBsb2NhdGlvbk5hbWVCeUFQSShkYXRhKTtcblx0ZmV0Y2hEYXRhLnNldEFyZWFOYW1lKGFyZWFOYW1lKTtcblx0dHJ5IHtcblx0XHRhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGZldGNoRGF0YS5nZXRXZWF0aGVyVVJMKCkpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5sb2coYEVycm9yOiAke2V9YCk7XG5cdH1cbn1cbi8vIGRpc2FsbG93IGFueSBzcGFjZXNcbmZ1bmN0aW9uIGhhc1NwYWNlcyhzdHIpIHtcblx0aWYgKHN0ci5pbmRleE9mKCcgJykgIT09IC0xKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG4vLyB0aGUgb3V0cHV0IG9mIGxvY2F0aW9uIG5hbWUgaW4gYWNjb3JkYW5jZSB0byBBUElcbmZ1bmN0aW9uIGxvY2F0aW9uTmFtZUJ5QVBJKGRhdGEpIHtcblx0bGV0IGFyZWFOYW1lO1xuXHQvLyBtYWtlIHN1cmUgY2l0eSBkb2VzIG5vdCBoYXZlIGFueSBzcGFjZSBhbmQgc3RhdGUgaXMgbm90IGFuIG9iamVjdFxuXHRpZiAoKGRhdGEuY2l0eSAmJiBoYXNTcGFjZXMoZGF0YS5jaXR5KSkgJiYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3N0YXRlJykgfHwgdHlwZW9mIGRhdGEuc3RhdGUgIT09ICdvYmplY3QnKSkge1xuXHRcdGFyZWFOYW1lID0gYCR7ZGF0YS5jaXR5fSwgJHtkYXRhLnN0YXRlfWA7XG5cdFx0aWYgKCh0eXBlb2YgZGF0YS5zdGF0ZSA9PT0gJ29iamVjdCcgJiYgZGF0YS5wcm92KSkge1xuXHRcdFx0YXJlYU5hbWUgPSBgJHtkYXRhLmNpdHl9LCAke2RhdGEucHJvdn1gO1xuXHRcdH0gLy8gdGhlIHJlc3QgYXJlIGFsdGVybmF0aXZlcyBpZiBzb21lIGRhdGEgcHJvcGVydHkgZG9lc24ndCBleGlzdCBvciBhbiBvYmplY3Rcblx0fSBlbHNlIGlmIChkYXRhLnN0YWRkcmVzcyAmJiBkYXRhLnN0YXRlKSB7XG5cdFx0YXJlYU5hbWUgPSBgJHtkYXRhLnN0YWRkcmVzc30sICR7ZGF0YS5zdGF0ZX1gO1xuXHR9IGVsc2UgaWYgKGRhdGEucHJvdikge1xuXHRcdGFyZWFOYW1lID0gYCR7ZGF0YS5zdGFkZHJlc3N9LCAke2RhdGEucHJvdn1gO1xuXHR9IGVsc2Uge1xuXHRcdGFyZWFOYW1lID0gZGF0YS5yZWdpb247XG5cdH1cblx0cmV0dXJuIGFyZWFOYW1lO1xufVxuXG4vLyB1c2UgZGVmYXVsdCBsb2NhdGlvbiBpZiB0aGUgdXNlciBkaXNhbGxvdyB0aGUgaHVtYmxlIHBlcm1pc3Npb25cbi8vIGl0IGlzIHVzZWQgYWZ0ZXIgd2luZG93Lm9ubG9hZFxuYXN5bmMgZnVuY3Rpb24gZGVmYXVsdExvY2F0aW9uKCkge1xuXHRjb25zdCBsYXQgPSA5MDtcblx0Y29uc3QgbG9uID0gMDtcblx0ZmV0Y2hEYXRhLnNldENvb3JkaW5hdGVzKGxhdCwgbG9uKTtcblx0ZmV0Y2hEYXRhLnNldEFyZWFOYW1lKCdOb3J0aCBQb2xlJyk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEuZ2V0V2VhdGhlclVSTCgpO1xuXHR0cnkge1xuXHRcdGF3YWl0IGZldGNoV2VhdGhlckRhdGEoZGF0YSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZX1gKTtcblx0fVxufVxuXG4vLyBzdWJtaXQgdGhlIGZvcm0gdG8gZ2V0IHRoZSBpbnB1dCBvZiBjb29yZGluYXRlcyBhbmQgb3ZlcndyaXRlIHRvIHRoZSByZXNwZWN0aXZlXG4vLyB2YXJpYWJsZXMsIGFwcGVuZGVkIHdpdGhpbiB0aGUgd2VhdGhlciB1cmwuXG5ET00uZm9ybS5vbnN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0RE9NLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRmZXRjaERhdGEuc2V0U2VhcmNoQXJlYShET00ubG9jYXRpb25JbnB1dCgpKTtcblx0ZmV0Y2hEYXRhLnNldEFyZWFOYW1lKERPTS5zdHJJbnB1dCgpKTtcblx0dHJ5IHtcblx0XHRhd2FpdCBnZXRDb29yZGluYXRlcyhmZXRjaERhdGEuZ2V0TG9jYXRpb25VUkwoKSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHR9XG59O1xuXG4vLyBldmVudCBsaXN0ZW5lcnNcbkRPTS5hbGVydENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRGlzcGxheSk7XG5ET00uYWxlcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVEaXNwbGF5KTtcbkRPTS5lcnJvckNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRET00uZXJyb3IuY2xhc3NMaXN0LmFkZCgnaGlkZVVzaW5nU2NhbGVaZXJvJyk7XG5cdERPTS5lcnJvci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93VXNpbmdTY2FsZU9uZScpO1xuXHRpZiAoRE9NLm1vZGFsLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcblx0XHRET00ubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxufSk7XG5cbmZ1bmN0aW9uIGVycm9yRGlzcGxheShkYXRhKSB7XG5cdGlmIChET00uYXJlYUlucHV0LnZhbHVlID09PSAnJyB8fCBkYXRhLmVycm9yKSB7XG5cdFx0RE9NLmVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdFx0RE9NLmVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVVc2luZ1NjYWxlWmVybycpO1xuXHRcdERPTS5lcnJvci5jbGFzc0xpc3QuYWRkKCdzaG93VXNpbmdTY2FsZU9uZScpO1xuXHR9XG59XG4vLyBnZXQgdGhlIGNvb3JkaW5hdGVzXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhkYXRhKSB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YSwgeyBtb2RlOiAnY29ycycgfSk7XG5cdGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0Y29uc29sZS5sb2cobG9jYXRpb25EYXRhKTtcblx0ZXJyb3JEaXNwbGF5KGxvY2F0aW9uRGF0YSk7IC8vIGlmIGl0IGlzIHVuZGVmaW5lZCB0aGVuIGRpc3BsYXkgZXJyb3Jcblx0ZmV0Y2hEYXRhLnNldENvb3JkaW5hdGVzKGxvY2F0aW9uRGF0YVswXS5sYXQsIGxvY2F0aW9uRGF0YVswXS5sb24pO1xuXHRjb25zdCBkYXRhRm9yQXJlYU5hbWUgPSBhd2FpdCBmZXRjaENvb3JkaW5hdGVzVG9HZXRBcmVhKGZldGNoRGF0YS5nZXRMYXQoKSwgZmV0Y2hEYXRhLmdldExvbigpKTtcblx0Y29uc3QgYXJlYU5hbWVCeUFQSSA9IGxvY2F0aW9uTmFtZUJ5QVBJKGRhdGFGb3JBcmVhTmFtZSk7XG5cblx0Ly8gaWYgaXQgcmV0dXJucyB1bmRlZmluZWQsIHVzZWQgdGhlIGlucHV0IHZhbHVlIGFzIHRoZSBhcmVhIG5hbWUgaW5zdGVhZFxuXHRpZiAoYXJlYU5hbWVCeUFQSSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0ZmV0Y2hEYXRhLnNldEFyZWFOYW1lKERPTS5zdHJJbnB1dCgpKTtcblx0fSBlbHNlIHtcblx0XHRmZXRjaERhdGEuc2V0QXJlYU5hbWUoYXJlYU5hbWVCeUFQSSk7XG5cdH1cblx0dHJ5IHtcblx0XHRhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGZldGNoRGF0YS5nZXRXZWF0aGVyVVJMKCkpO1xuXHR9XG5cdGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5sb2coYEVycm9yOiAke2V9YCk7XG5cdH1cbn1cblxuLy8gZmV0Y2ggdGhlIGRhdGEgY29taW5nIGZyb20gQVBJIGFuZCBkaXNwbGF5IGl0XG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGRhdGEpIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhLCB7IG1vZGU6ICdjb3JzJyB9KTtcblx0d2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdGRpc3BsYXlJbmZvKCk7XG5cdC8vIHVuZGlzcGxheSB0aGUgbW9kYWwgaWYgaXQgaXMgZGlzcGxheWVkXG5cdC8vIE5vdGU6IHVzZWQgZm9yIGxvYWRpbmcgZWZmZWN0cyB3aGlsZSB0aGUgZGF0YSBpcyBub3QgeWV0IGRpc3BsYXllZFxuXHRpZiAoRE9NLm1vZGFsLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcblx0XHRET00ubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXHRnZXRBbGVydCh3ZWF0aGVyRGF0YSk7IC8vIGdldCBhbGVydCBkYXRhXG59XG5cbi8vIHByaW50IHRoZSBkYXRhIG9uIGVhY2ggZm9sbG93aW5nIGRpdnNcbmNvbnN0IGdldEhvdXJseURhdGEgPSAocGFyZW50KSA9PiB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG5cdFx0ZGlzcGxheUhvdXJseU91dHB1dChpLCBwYXJlbnQpO1xuXHR9XG59O1xuXG4vLyBkaXNwbGF5IGhvdXJseSBjb250ZW50c1xuZnVuY3Rpb24gZGlzcGxheUhvdXJseU91dHB1dChpLCBwYXJlbnQpIHtcblx0Ly8gdGVtcGVyYXR1cmUgZGF0YSBmcm9tIGN1cnJlbnQgb2JqZWN0XG5cdGxldCB7IHRlbXAgfSA9IHdlYXRoZXJEYXRhLmhvdXJseVsoaSArIDEpICsgaV07XG5cdGxldCBmZWVsc0xpa2UgPSB3ZWF0aGVyRGF0YS5ob3VybHlbKGkgKyAxKSArIGldLmZlZWxzX2xpa2U7XG5cblx0Y29uc3QgeyBpY29uIH0gPSB3ZWF0aGVyRGF0YS5ob3VybHlbKGkgKyAxKSArIGldLndlYXRoZXJbMF07XG5cdGNvbnN0IGh1bWlkaXR5ID0gYCR7d2VhdGhlckRhdGEuaG91cmx5WyhpICsgMSkgKyBpXS5odW1pZGl0eX0lYDtcblx0Y29uc3QgeyB0aW1lem9uZSB9ID0gd2VhdGhlckRhdGE7XG5cdGNvbnN0IGRhdGUgPSBjb252ZXJ0VFoobmV3IERhdGUoKSwgdGltZXpvbmUpO1xuXG5cdHRlbXAgPSBjb252ZXJ0VGVtcCh0ZW1wKTtcblx0ZmVlbHNMaWtlID0gY29udmVydFRlbXAoZmVlbHNMaWtlKTtcblxuXHQvLyBET00gaW5zdGFuY2VzXG5cdGNvbnN0IGhvdXJseU1haW4gPSBtYW5hZ2UuY3J0RWxlbWVudCgnJywgYGhybHktbWFpbiR7aSArIDF9YCwgJ2hybHktY29udGVudHMnLCAnZGl2Jyk7XG5cdGNvbnN0IGhvdXJseVRlbXAgPSBtYW5hZ2UuY3J0RWxlbWVudChgJHt0ZW1wfWAsIGBocmx5LXRlbXAke2kgKyAxfWAsICdocmx5LXRlbXAnLCAncCcpO1xuXG5cdGNvbnN0IGhvdXJseUljb24gPSBtYW5hZ2UuY3J0SW1nKGdldFdlYXRoZXJJY29uKGljb24pLCBgaHJseS1pY29uJHtpICsgMX1gLCAnaHJseS1pY29ucycpO1xuXHRjb25zdCBob3VybHlUaW1lID0gbWFuYWdlLmNydEVsZW1lbnQoZm9ybWF0SG91ck9ubHkoZGF0ZSwgKGkgKyAxKSArIGkpLCBgaHJseS10aW1lJHtpICsgMX1gLCAnaHJseS10aW1lJywgJ3AnKTtcblxuXHRjb25zdCBob3VybHlMb3dlciA9IG1hbmFnZS5jcnRFbGVtZW50KCcnLCAnaHJseS1sb3dlcicsICdocmx5LWxvd2VyJywgJ2RpdicpO1xuXHRjb25zdCBob3VybHlIdW1pZGl0eVdyYXBwZXIgPSBtYW5hZ2UuY3J0RWxlbWVudCgnJywgJ2hybHktaHVtaWRpdHktd3JhcHBlcicsICdocmx5LWNvbnRhaW5lcicsICdkaXYnKTtcblx0Y29uc3QgaG91cmx5SHVtaWRpdHkgPSBtYW5hZ2UuY3J0RWxlbWVudChgJHtodW1pZGl0eX0gYCwgYGhybHktaHVtaWRpdHkke2kgKyAxfWAsICdocmx5LWNvbnRhaW5lcicsICdwJyk7XG5cdGNvbnN0IGhvdXJseUZlZWxzV3JhcHBlciA9IG1hbmFnZS5jcnRFbGVtZW50KCcnLCAnaHJseS1mZWVscy13cmFwcGVyJywgJ2hybHktY29udGFpbmVyJywgJ2RpdicpO1xuXHRjb25zdCBob3VybHlGZWVscyA9IG1hbmFnZS5jcnRFbGVtZW50KGAgJHtmZWVsc0xpa2V9YCwgYGhybHktZmVlbHMke2kgKyAxfWAsICdocmx5LWNvbnRhaW5lcicsICdwJyk7XG5cblx0Ly8gdXNlZCBpY29ucyBmcm9tIGh0dHBzOi8vaWNvbnM4LmNvbS9pY29ucy9zZXQvaHVtaWRpdHlcblx0Y29uc3QgaUh1bWlkaXR5ID0gbWFuYWdlLmNydEltZyhpY29uSHVtaWRpdHksICcnLCAnaW1nLWh1bWlkaXR5Jyk7XG5cdGNvbnN0IGlGZWVsc0xpa2UgPSBtYW5hZ2UuY3J0SW1nKGljb25GZWVsc0xpa2UsICcnLCAnaW1nLWZlZWxzJyk7XG5cblx0Ly8gYXBwZW5kIGxvcyBlbGVtZW50b3MgZGUgZmFtaWxpYVxuXHRwYXJlbnQuYXBwZW5kKGhvdXJseU1haW4pO1xuXHRob3VybHlGZWVsc1dyYXBwZXIuYXBwZW5kKGlGZWVsc0xpa2UsIGhvdXJseUZlZWxzKTtcblx0aG91cmx5SHVtaWRpdHlXcmFwcGVyLmFwcGVuZChob3VybHlIdW1pZGl0eSwgaUh1bWlkaXR5KTtcblx0aG91cmx5TG93ZXIuYXBwZW5kKGhvdXJseUZlZWxzV3JhcHBlciwgaG91cmx5SHVtaWRpdHlXcmFwcGVyKTtcblx0aG91cmx5TWFpbi5hcHBlbmQoaG91cmx5VGltZSwgaG91cmx5VGVtcCwgaG91cmx5SWNvbiwgaG91cmx5TG93ZXIpO1xufVxuXG5jb25zdCBnZXREYWlseURhdGEgPSAocGFyZW50KSA9PiB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG5cdFx0ZGlzcGxheURhaWx5T3V0cHV0KGksIHBhcmVudCk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlEYWlseU91dHB1dChpLCBwYXJlbnQpIHtcblx0Ly8gRE9NIGluc3RhbmNlc1xuXHQvLyB0ZW1wZXJhdHVyZSBkYXRhIGZyb20gY3VycmVudCBvYmplY3Rcblx0bGV0IHRlbXAgPSB3ZWF0aGVyRGF0YS5kYWlseVtpICsgMV0udGVtcC5uaWdodDtcblx0bGV0IGZlZWxzTGlrZSA9IHdlYXRoZXJEYXRhLmRhaWx5W2kgKyAxXS5mZWVsc19saWtlLm5pZ2h0O1xuXHR0ZW1wID0gY29udmVydFRlbXAodGVtcCk7XG5cdGZlZWxzTGlrZSA9IGNvbnZlcnRUZW1wKGZlZWxzTGlrZSk7XG5cblx0Ly8gZ2V0IGRhdGEgd2l0aCBvYmplY3QgZGVzdHJ1Y3R1cmluZ1xuXHRjb25zdCB7IGljb24gfSA9IHdlYXRoZXJEYXRhLmRhaWx5W2kgKyAxXS53ZWF0aGVyWzBdO1xuXHRjb25zdCBodW1pZGl0eSA9IGAke3dlYXRoZXJEYXRhLmRhaWx5W2kgKyAxXS5odW1pZGl0eX0lYDtcblx0Y29uc3QgeyB0aW1lem9uZSB9ID0gd2VhdGhlckRhdGE7XG5cblx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpOyAvLyBnZXQgdG9kYXlzIGRhdGVcblx0ZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgKGkgKyAxKSk7IC8vIGFjY3VtdWxhdGUgZGF0ZSBieSBvbmVcblx0Y29uc3QgbG9jYWxEYXRlID0gY29udmVydFRaKGRhdGUsIHRpbWV6b25lKTsgLy8gZ2V0IGRhdGUgYmFzZWQgbiB0aW1lem9uZVxuXG5cdC8vIGdldCB3aW5kIHNwZWVkIGFuZCBkZWdyZWVcblx0Y29uc3Qgc3BlZWQgPSBgJHt3aW5kU3BlZWRUb01QSCh3ZWF0aGVyRGF0YS5kYWlseVtpICsgMV0ud2luZF9zcGVlZCl9IG1waCBgO1xuXHRjb25zdCBkZWcgPSBgJHt3aW5kRGVnVG9EaXIod2VhdGhlckRhdGEuZGFpbHlbaSArIDFdLndpbmRfZGVnKX1gO1xuXG5cdGNvbnN0IGRhaWx5V3JhcHBlciA9IG1hbmFnZS5jcnRFbGVtZW50KCcnLCBgZGFpbHktd3JhcHBlciR7aSArIDF9YCwgJ2RhaWx5LXdyYXBwZXJzJywgJ2RpdicpO1xuXHRjb25zdCBkYWlseVRlbXAgPSBtYW5hZ2UuY3J0RWxlbWVudChgJHt0ZW1wfWAsIGBkYWlseS10ZW1wJHtpICsgMX1gLCAnZGFpbHktdGVtcHMnLCAncCcpO1xuXG5cdGNvbnN0IGRhaWx5RmVlbHMgPSBtYW5hZ2UuY3J0RWxlbWVudChgRmVlbHMgbGlrZTogJHtmZWVsc0xpa2V9YCwgYGRhaWx5LWZlZWxzJHtpICsgMX1gLCAnZGFpbHktZmVlbHMnLCAncCcpO1xuXHRjb25zdCBkYWlseUljb24gPSBtYW5hZ2UuY3J0SW1nKGdldFdlYXRoZXJJY29uKGljb24pLCBgZGFpbHktaWNvbiR7aSArIDF9YCwgJ2RhaWx5LWljb25zJyk7XG5cdGNvbnN0IGRhaWx5RGF0ZSA9IG1hbmFnZS5jcnRFbGVtZW50KGZvcm1hdFNob3J0RGF0ZShsb2NhbERhdGUpLCBgZGFpbHktZGF0ZSR7aSArIDF9YCwgJ2RhaWx5LWRhdGVzJywgJ3AnKTtcblxuXHRjb25zdCBkYWlseUxvd2VyID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICcnLCAnZGFpbHktbG93ZXInLCAnZGl2Jyk7XG5cdGNvbnN0IGRhaWx5TG93ZXJMZWZ0ID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdkYWlseS1sb3dlci1sZWZ0JywgJ2RhaWx5LWNvbnRhaW5lcicsICdkaXYnKTtcblx0Y29uc3QgZGFpbHlMb3dlclJpZ2h0ID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdkYWlseS1sb3dlci1yaWdodCcsICdkYWlseS1jb250YWluZXInLCAnZGl2Jyk7XG5cblx0Y29uc3QgZGFpbHlIdW1pZGl0eVdyYXBwZXIgPSBtYW5hZ2UuY3J0RWxlbWVudCgnJywgJycsICdkYWlseS1jb250YWluZXInLCAnZGl2Jyk7XG5cdGNvbnN0IGRhaWx5SHVtaWRpdHkgPSBtYW5hZ2UuY3J0RWxlbWVudChgJHtodW1pZGl0eX1gLCBgZGFpbHktaHVtaWRpdHkke2kgKyAxfWAsICdkYWlseS1jb250ZW50cycsICdwJyk7XG5cdGNvbnN0IGlIdW1pZGl0eSA9IG1hbmFnZS5jcnRJbWcoaWNvbkh1bWlkaXR5LCAnJywgJ2ltZy1odW1pZGl0eScpO1xuXHRjb25zdCBkYWlseVNwZFdyYXBwZXIgPSBtYW5hZ2UuY3J0RWxlbWVudCgnJywgJycsICdkYWlseS1jb250YWluZXInLCAnZGl2Jyk7XG5cdGNvbnN0IGRhaWx5U3BkID0gbWFuYWdlLmNydEVsZW1lbnQoc3BlZWQsICdkYWlseS1zcGQnLCAnZGFpbHktY29udGVudHMnLCAncCcpO1xuXHRjb25zdCBpV2luZFNwZCA9IG1hbmFnZS5jcnRJbWcoaWNvbldpbmRTcGQsICcnLCAnaW1nLXNwZCcpO1xuXHRjb25zdCBkYWlseURlZ1dyYXBwZXIgPSBtYW5hZ2UuY3J0RWxlbWVudCgnJywgJycsICdkYWlseS1jb250YWluZXInLCAnZGl2Jyk7XG5cdGNvbnN0IGRhaWx5RGVnID0gbWFuYWdlLmNydEVsZW1lbnQoZGVnLCAnZGFpbHktZGVnJywgJ2RhaWx5LWNvbnRlbnRzJywgJ3AnKTtcblx0Y29uc3QgaVdpbmREZWcgPSBtYW5hZ2UuY3J0SW1nKGljb25Db21wYXNzLCAnJywgJ2ltZy1kZWcnKTtcblxuXHRkYWlseUxvd2VyLmFwcGVuZChkYWlseUxvd2VyTGVmdCwgZGFpbHlMb3dlclJpZ2h0KTtcblx0ZGFpbHlIdW1pZGl0eVdyYXBwZXIuYXBwZW5kKGRhaWx5SHVtaWRpdHksIGlIdW1pZGl0eSk7XG5cdGRhaWx5U3BkV3JhcHBlci5hcHBlbmQoaVdpbmRTcGQsIGRhaWx5U3BkKTtcblx0ZGFpbHlEZWdXcmFwcGVyLmFwcGVuZChpV2luZERlZywgZGFpbHlEZWcpO1xuXHRkYWlseUxvd2VyTGVmdC5hcHBlbmQoZGFpbHlIdW1pZGl0eVdyYXBwZXIpO1xuXHRkYWlseUxvd2VyUmlnaHQuYXBwZW5kKGRhaWx5U3BkV3JhcHBlciwgZGFpbHlEZWdXcmFwcGVyKTtcblx0ZGFpbHlXcmFwcGVyLmFwcGVuZChkYWlseURhdGUsIGRhaWx5VGVtcCwgZGFpbHlGZWVscywgZGFpbHlJY29uLCBkYWlseUxvd2VyKTtcblx0cGFyZW50LmFwcGVuZChkYWlseVdyYXBwZXIpO1xufVxuXG4vLyBkaXNwbGF5IHRoZSB3ZWF0aGVyIGRhdGEgYWJvdXQgdGhlIGN1cnJlbnQgaG91ci9kYXlcbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50T3V0cHV0KHBhcmVudCkge1xuXHRjb25zdCB7IGljb24gfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXTtcblx0Y29uc3QgeyB0aW1lem9uZSB9ID0gd2VhdGhlckRhdGE7XG5cdGNvbnN0IGRhdGUgPSBjb252ZXJ0VFoobmV3IERhdGUoKSwgdGltZXpvbmUpO1xuXG5cdGxldCB7IHRlbXAgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG5cdGxldCBmZWVscyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNfbGlrZTtcblx0Y29uc3QgeyBodW1pZGl0eSB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcblx0Y29uc3Qgc3BlZWQgPSBgJHt3aW5kU3BlZWRUb01QSCh3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfc3BlZWQpfSBtcGggOldpbmQgU3BlZWRgO1xuXHRjb25zdCBkZWcgPSBgJHt3aW5kRGVnVG9EaXIod2VhdGhlckRhdGEuY3VycmVudC53aW5kX2RlZyl9IDpXaW5kIERlZ3JlZWA7XG5cdC8vIHRlbXAgY29udmVyc2lvblxuXHR0ZW1wID0gY29udmVydFRlbXAodGVtcCk7XG5cdHRlbXAgPSB0ZW1wLnNsaWNlKDAsIC0xKTtcblx0ZmVlbHMgPSBjb252ZXJ0VGVtcChmZWVscyk7XG5cblx0Ly8gRE9NIGluc3RhbmNlc1xuXG5cdGNvbnN0IGN1cnJlbnRVcHJDb250ID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdjdXJyZW50LXVwcGVyJywgJ2N1cnJlbnQtdXBwZXInLCAnZGl2Jyk7XG5cblx0Ly8gRE9NIGVsZW1lbnRzIGluIHRoZSB1cHBlciBsZWZ0IHNpZGUgb2YgdGhlIGN1cnJlbnQgbWFpblxuXHRjb25zdCB1cHBlckxlZnRTaWRlID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdjdXJyZW50LXVwcGVyLWxlZnQnLCAnY3VycmVudC11cHBlci1sZWZ0JywgJ2RpdicpO1xuXHRjb25zdCBjdXJyZW50TG9jYXRpb24gPSBtYW5hZ2UuY3J0RWxlbWVudChmZXRjaERhdGEuZ2V0QXJlYU5hbWUoKSwgJ2N1cnJlbnQtbG9jYXRpb24nLCAnY3VycmVudC1jb250ZW50cycsICdwJyk7XG5cdGNvbnN0IGN1cnJlbnREYXRlID0gbWFuYWdlLmNydEVsZW1lbnQoZm9ybWF0RnVsbERhdGUoZGF0ZSksICdjdXJyZW50LWRheScsICdjdXJyZW50LWNvbnRlbnRzJywgJ3AnKTtcblx0Y29uc3QgY3VycmVudFRpbWUgPSBtYW5hZ2UuY3J0RWxlbWVudChmb3JtYXRIb3VyTWluKGRhdGUpLCAnY3VycmVudC10aW1lJywgJ2N1cnJlbnQtY29udGVudHMnLCAncCcpO1xuXG5cdC8vIERPTSBlbGVtZW50cyBpbiB0aGUgdXBwZXIgcmlnaHQgc2lkZSBvZiB0aGUgY3VycmVudCBtYWluXG5cdGNvbnN0IHVwcGVyUmlnaHRTaWRlID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdjdXJyZW50LXVwcGVyLXJpZ2h0JywgJ2N1cnJlbnQtdXBwZXItcmlnaHQnLCAnZGl2Jyk7XG5cdGNvbnN0IGN1cnJlbnRJY29uID0gbWFuYWdlLmNydEltZyhnZXRXZWF0aGVySWNvbihpY29uKSwgJ2N1cnJlbnQtaWNvbicsICdjdXJyZW50LWNvbnRlbnRzJyk7XG5cdGNvbnN0IHRlbXBDZWxjaXVzID0gbWFuYWdlLmNydEVsZW1lbnQoY2hlY2tUZW1wVW5pdCgpLCAndGVtcEMnLCAnY2hvb3NlLXRlbXAnLCAnZGl2Jyk7XG5cblx0Ly8gdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZVxuXHRjb25zdCBjdXJyZW50VGVtcCA9IG1hbmFnZS5jcnRFbGVtZW50KHRlbXAsICdjdXJyZW50LXRlbXAnLCAnY3VycmVudC1jb250ZW50cycsICdwJyk7XG5cblx0Ly8gdGhlIGxvd2VyIHNpZGUgY29udGFpbmVyXG5cdGNvbnN0IGN1cnJlbnRMd3JDb250ID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdjdXJyZW50LWxvd2VyJywgJ2N1cnJlbnQtbG93ZXInLCAnZGl2Jyk7XG5cblx0Ly8gRE9NIGVsZW1lbnRzIGluIHRoZSBsb3dlciBsZWZ0IHNpZGUgb2YgdGhlIGN1cnJlbnQgbWFpblxuXHRjb25zdCBsb3dlckxlZnRTaWRlID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdjdXJyZW50LWxvd2VyLWxlZnQnLCAnY3VycmVudC1sb3dlci1sZWZ0JywgJ2RpdicpO1xuXHRjb25zdCBjdXJyZW50RmVlbHMgPSBtYW5hZ2UuY3J0RWxlbWVudChgRmVlbHMgTGlrZTogJHtmZWVsc31gLCAnY3VycmVudC1mZWVscycsICdjdXJyZW50LWNvbnRlbnRzJywgJ3AnKTtcblx0Y29uc3QgY3VycmVudEh1bWlkaXR5ID0gbWFuYWdlLmNydEVsZW1lbnQoYEh1bWlkaXR5OiAke2h1bWlkaXR5fSVgLCAnY3VycmVudC1odW1pZGl0eScsICdjdXJyZW50LWNvbnRlbnRzJywgJ3AnKTtcblxuXHQvLyBET00gZWxlbWVudHMgaW4gdGhlIGxvd2VyIHJpZ2h0IHNpZGUgb2YgdGhlIGN1cnJlbnQgbWFpblxuXHRjb25zdCBsb3dlclJpZ2h0U2lkZSA9IG1hbmFnZS5jcnRFbGVtZW50KCcnLCAnY3VycmVudC1sb3dlci1yaWdodCcsICdjdXJyZW50LWxvd2VyLXJpZ2h0JywgJ2RpdicpO1xuXHRjb25zdCBjdXJyZW50U3BlZWQgPSBtYW5hZ2UuY3J0RWxlbWVudChzcGVlZCwgJ2N1cnJlbnQtc3BlZWQnLCAnY3VycmVudC1jb250ZW50cycsICdwJyk7XG5cdGNvbnN0IGN1cnJlbnREZWdyZWUgPSBtYW5hZ2UuY3J0RWxlbWVudChkZWcsICdjdXJyZW50LWRlZycsICdjdXJyZW50LWNvbnRlbnRzJywgJ3AnKTtcblxuXHRjdXJyZW50THdyQ29udC5hcHBlbmQobG93ZXJMZWZ0U2lkZSwgbG93ZXJSaWdodFNpZGUpO1xuXHRsb3dlckxlZnRTaWRlLmFwcGVuZChjdXJyZW50RmVlbHMsIGN1cnJlbnRIdW1pZGl0eSk7XG5cdGxvd2VyUmlnaHRTaWRlLmFwcGVuZChjdXJyZW50U3BlZWQsIGN1cnJlbnREZWdyZWUpO1xuXHRjdXJyZW50VXByQ29udC5hcHBlbmQodXBwZXJMZWZ0U2lkZSwgdXBwZXJSaWdodFNpZGUpO1xuXHR1cHBlckxlZnRTaWRlLmFwcGVuZChjdXJyZW50TG9jYXRpb24sIGN1cnJlbnREYXRlLCBjdXJyZW50VGltZSk7XG5cdHVwcGVyUmlnaHRTaWRlLmFwcGVuZChjdXJyZW50SWNvbiwgdGVtcENlbGNpdXMpO1xuXHRwYXJlbnQuYXBwZW5kKGN1cnJlbnRVcHJDb250LCBjdXJyZW50VGVtcCwgY3VycmVudEx3ckNvbnQpO1xuXHRyZW5kZXJCZ0NvbG9yKCk7XG5cdHVwZGF0ZUNsb2NrKCk7IC8vIGF1dG8gcmVmcmVzaCBjbG9jayBieSAxMDBcblx0dGVtcENlbGNpdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0dG9nZ2xlVGVtcCgpO1xuXHRcdGRpc3BsYXlJbmZvKCk7XG5cdH0pO1xufVxuXG4vLyB0aGUgY29sb3IgaXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgZGF5OiBtb3JucywgYWZ0ZXJub29uLCBuaWdodFxuZnVuY3Rpb24gcmVuZGVyQmdDb2xvcigpIHtcblx0Y29uc3QgeyB0aW1lem9uZSB9ID0gd2VhdGhlckRhdGE7XG5cdGNvbnN0IGRhdGUgPSBjb252ZXJ0VFoobmV3IERhdGUoKSwgdGltZXpvbmUpO1xuXHRjb25zdCBob3VycyA9IGdldExvY2FsSG91cnMoZGF0ZSk7XG5cdGJnTWFuaXB1bGF0aW9uLmJnQ2hnKGhvdXJzKTtcbn1cblxuLy8gZ2V0IHRoZSBpY29uIGZyb20gdGhlIHdlYXRoZXIgQVBJXG5mdW5jdGlvbiBnZXRXZWF0aGVySWNvbihpY29uKSB7XG5cdHJldHVybiBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgO1xufVxuXG4vLyB1cGRhdGUgY2xvY2sgZXZlcnkgMTAwMG1zID0gMXNlY29uZFxuZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG5cdGNvbnN0IHsgdGltZXpvbmUgfSA9IHdlYXRoZXJEYXRhO1xuXHRjb25zdCBkYXRlID0gY29udmVydFRaKG5ldyBEYXRlKCksIHRpbWV6b25lKTtcblx0Y29uc3QgY3VycmVudFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC10aW1lJyk7XG5cdGN1cnJlbnRUaW1lLnRleHRDb250ZW50ID0gZm9ybWF0SG91ck1pbihkYXRlKTtcblx0c2V0VGltZW91dCh1cGRhdGVDbG9jaywgMTAwMCk7XG59XG5cbi8vIGNvbnRyb2xsZXIgZnVuY3Rpb24gLSBjcmVhdGUgYW5kIGRpc3BsYXkgRE9NIGVsZW1lbnRzXG5mdW5jdGlvbiBkaXNwbGF5SW5mbygpIHtcblx0Y2xlYXJNYWluQ29udGVudHMoKTtcblx0Z2V0SG91cmx5RGF0YShET00ubG93ZXJNYWluKTtcblx0Z2V0RGFpbHlEYXRhKERPTS5kYWlseU1haW4pO1xuXHRkaXNwbGF5Q3VycmVudE91dHB1dChET00uY3VycmVudE1haW4pO1xufVxuXG4vLyBjbGVhciB0aGUgY29udGVudHMgaW5zaWRlIHRoZSB3ZWF0aGVyIGRhdGEgY29udGFpbmVyXG5mdW5jdGlvbiBjbGVhck1haW5Db250ZW50cygpIHtcblx0RE9NLmN1cnJlbnRNYWluLnRleHRDb250ZW50ID0gJyc7XG5cdERPTS5kYWlseU1haW4udGV4dENvbnRlbnQgPSAnJztcblx0RE9NLmxvd2VyTWFpbi50ZXh0Q29udGVudCA9ICcnO1xufVxuIiwiaW1wb3J0IG1hbmFnZSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IERPTSBmcm9tICcuL2VsZW1lbnRzLmpzJztcblxubGV0IGlzRGlzcGxheSA9IHRydWU7IC8vIGJvb2xlYW4gLSBkaXNwbGF5L25vdCBkaXNwbGF5XG4vLyBkaXNwbGF5IGFsZXJ0IGRlc2NyaXB0aW9uIHdpdGggYWNjb3JkYW5jZSB0byBpdHMgZGVmYXVsdFxuZnVuY3Rpb24gYWxlcnREaXNwbGF5KHdlYXRoZXJEYXRhKSB7XG5cdC8vIHRoaXMgcmVtb3ZlcyBhbGwgdGhlIGNoaWxkcmVuIG9mIHRoZSBmb2xsb3dpbmcgZWxlbWVudFxuXHRET00uYWxlcnRFdmVudHMudGV4dENvbnRlbnQgPSAnJztcblx0RE9NLmFsZXJ0VGV4dC50ZXh0Q29udGVudCA9ICcnO1xuXG5cdC8vIGRlZmF1bHQgdGV4dCB3aGVuIG9wZW5pbmcgYWxlcnQgYm94XG5cdGNvbnN0IGFsZXJ0RGVzYyA9IHdlYXRoZXJEYXRhLmFsZXJ0c1swXS5kZXNjcmlwdGlvbjtcblxuXHQvLyBsb29wIGFuZCBwcmludCBlYWNoIGF2YWlsYWJsZSBkYXRhIGFsZXJ0cyBpbiB0aGUgZXZlbnQgZGl2XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgd2VhdGhlckRhdGEuYWxlcnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgZXZlbnRUZXh0ID0gd2VhdGhlckRhdGEuYWxlcnRzW2ldLmV2ZW50O1xuXHRcdGNvbnN0IGV2ZW50ID0gbWFuYWdlLmNydEVsZW1lbnQoZXZlbnRUZXh0LCBgZXZlbnQtdHh0JHtpICsgMX1gLCAnZXZlbnQtdHh0cycsICdkaXYnKTtcblx0XHRET00uYWxlcnRFdmVudHMuYXBwZW5kKGV2ZW50KTtcblx0fVxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnQtdHh0MScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1zdGF0ZScpO1xuXHRjb25zdCBhbGVydCA9IG1hbmFnZS5jcnRFbGVtZW50KGFsZXJ0RGVzYywgJ2FsZXJ0LXR4dCcsICdhbGVydC10eHRzJywgJ3AnKTtcblx0RE9NLmFsZXJ0VGV4dC5hcHBlbmQoYWxlcnQsIERPTS5hbGVydENsb3NlKTtcblx0YWN0aXZhdGVBbGVydEV2ZW50KHdlYXRoZXJEYXRhKTtcbn1cblxuLy8gdG9nZ2xlIHRvIGRpc3BsYXkgb3Igbm90RGlzcGxheVxuY29uc3QgdG9nZ2xlRGlzcGxheUJvb2xlYW4gPSAoKSA9PiB7XG5cdGlzRGlzcGxheSA9PT0gdHJ1ZSA/IGlzRGlzcGxheSA9IGZhbHNlIDogaXNEaXNwbGF5ID0gdHJ1ZTtcbn07XG5jb25zdCByZXNldERpc3BsYXkgPSAoKSA9PiB7IGlzRGlzcGxheSA9IHRydWU7IH07IC8vIHJlc2V0IGRpc3BsYXkgdG8gdHJ1ZVxuXG4vLyB2YWxpZGF0ZSB3aGV0aGVyIGFsZXJ0cyBleGlzdHMgaWYgaXQgaXMgb3IgZWxzZSB0aGVuIGNvbnRpbnVlIHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uXG5mdW5jdGlvbiBnZXRBbGVydChkYXRhKSB7XG5cdC8vIGltbWVkaWF0ZWx5IGRpc3BsYXkgd2VhdGhlciBhdCBmaXJzdCBsb2FkIGlmIGFsZXJ0IGRhdGEgZXhpc3RlZFxuXHRpZiAoZGF0YS5hbGVydHMpIHtcblx0XHRyZXNldERpc3BsYXkoKTtcblx0XHRtYW5hZ2UubW9kaWZ5QXR0cihET00uYWxlcnREZXNjLCAnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7Jyk7XG5cdFx0bWFuYWdlLm1vZGlmeUF0dHIoRE9NLmFsZXJ0QnRuLCAnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7Jyk7XG5cdFx0YWxlcnREaXNwbGF5KGRhdGEpO1xuXHRcdERPTS5hbGVydERlc2MuY2xhc3NOYW1lID0gJyc7XG5cdH0gZWxzZSB7IC8vIG90aGVyd2lzZSwgZGlzYWxsb3cgdmlzdWFsIGFsZXJ0IGVsZW1lbnRzIHRvIGJlIHNlZW5cblx0XHRtYW5hZ2UubW9kaWZ5QXR0cihET00uYWxlcnREZXNjLCAnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblx0XHRtYW5hZ2UubW9kaWZ5QXR0cihET00uYWxlcnRCdG4sICdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXHRcdHRvZ2dsZURpc3BsYXlCb29sZWFuKCk7XG5cdH1cbn1cblxuLy8gdHJhbnNpdGlvbi9hbGVydCBkaXYgcG9zaXRpb24gbWFuaXB1bGF0aW9uIGJ5IGNoZWNraW5nIHdoZXRoZXJcbi8vIGlzIGRpc3BsYXllZCBvciBub3Rcbi8vIE5vdGU6IEl0IGlzIGFsd2F5cyBkaXNwbGF5ZWQgYXQgZmlyc3QgbG9hZCBvZiB3ZWF0aGVyIGRhdGFcbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXkoKSB7XG5cdGlmIChpc0Rpc3BsYXkgPT09IHRydWUpIHtcblx0XHRtYW5hZ2UubW9kaWZ5QXR0cihET00ubW9kYWwsICdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXHRcdERPTS5hbGVydERlc2MuY2xhc3NMaXN0LnRvZ2dsZSgnc2xpZGVEb3duJyk7XG5cdH0gZWxzZSB7XG5cdFx0bWFuYWdlLm1vZGlmeUF0dHIoRE9NLm1vZGFsLCAnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7Jyk7XG5cdFx0RE9NLmFsZXJ0RGVzYy5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZVVwJyk7XG5cdH1cbn1cblxuLy8gYWRkIHZpc3VhbCBhY3RpdmUgc3RhdGUgaWYgdGhlIGFsZXJ0IHRleHQgaXMgZGlzcGxheWVkIGFscmVhZHlcbmZ1bmN0aW9uIGFjdGl2YXRlQWxlcnRFdmVudChkYXRhKSB7XG5cdGNvbnN0IGFsZXJ0RXZlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50LXR4dHMnKTtcblx0YWxlcnRFdmVudHMuZm9yRWFjaCgoeCwgaSwgYXJyKSA9PiB7XG5cdFx0eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHVwZGF0ZUFsZXJ0VGV4dChpLCBkYXRhKTtcblx0XHRcdGFsZXJ0RXZlbnRzLmZvckVhY2goKGUpID0+IHtcblx0XHRcdFx0aWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtc3RhdGUnKSkge1xuXHRcdFx0XHRcdGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXN0YXRlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0YXJyW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1zdGF0ZScpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8gdXBkYXRlIHRoZSBhbGVydCBwYXJhZ3JhcGggd2hlbiB0aGUgZXZlbnQgdGV4dCBpcyBjbGlja2VkXG5mdW5jdGlvbiB1cGRhdGVBbGVydFRleHQoaSwgZGF0YSkge1xuXHRET00uYWxlcnRUZXh0LnRleHRDb250ZW50ID0gJyc7XG5cdGNvbnN0IGFsZXJ0RGVzYyA9IGRhdGEuYWxlcnRzW2ldLmRlc2NyaXB0aW9uO1xuXHRjb25zdCBhbGVydCA9IG1hbmFnZS5jcnRFbGVtZW50KGFsZXJ0RGVzYywgJ2FsZXJ0LXR4dCcsICdhbGVydC10eHRzJywgJ3AnKTtcblx0RE9NLmFsZXJ0VGV4dC5hcHBlbmQoYWxlcnQsIERPTS5hbGVydENsb3NlKTtcbn1cbmV4cG9ydCB7IGdldEFsZXJ0LCB0b2dnbGVEaXNwbGF5IH07XG4iLCJpbXBvcnQgRE9NIGZyb20gJy4vZWxlbWVudHMnO1xuXG5jb25zdCBiZ01hbmlwdWxhdGlvbiA9ICgoKSA9PiB7XG5cdGNvbnN0IFdBUk1fQ09MT1JTID0gWydyZ2IoMjU1LCAxOTUsIDE2KScsICdyZ2IoMjQ4LCAxODUsIDIzKScsICdyZ2IoMjQyLCAxNzQsIDI4KSddO1xuXHRjb25zdCBBRlRFUk5PT05fQ09MT1JTID0gWydyZ2IoNTYsIDIxMSwgMTA3KScsICdyZ2IoNTYsIDE5NSwgMTA3KScsICdyZ2IoNTYsIDE4MCwgOTkpJ107XG5cdGNvbnN0IENPT0xfQ09MT1JTID0gWydyZ2IoNTYsIDE1NiwgMjQxKScsICdyZ2IoNTYsIDEzNCwgMjM1KScsICdyZ2IoNTYsIDEyMSwgMjIxKSddO1xuXHRyZXR1cm4ge1xuXHRcdGJnQ2hnKGhvdXJzKSB7IC8vIGJhY2tncm91bmQgY2hhbmdlXG5cdFx0XHRpZiAoaG91cnMgPj0gMCAmJiBob3VycyA8IDEyKSB7XG5cdFx0XHRcdERPTS5jdXJyZW50TWFpbi5zdHlsZS5iYWNrZ3JvdW5kID0gV0FSTV9DT0xPUlNbMF07XG5cdFx0XHRcdERPTS5kYWlseU1haW4uc3R5bGUuYmFja2dyb3VuZCA9IFdBUk1fQ09MT1JTWzFdO1xuXHRcdFx0XHRET00ubG93ZXJNYWluLnN0eWxlLmJhY2tncm91bmQgPSBXQVJNX0NPTE9SU1syXTtcblx0XHRcdH0gZWxzZSBpZiAoaG91cnMgPj0gMTIgJiYgaG91cnMgPCAxNykge1xuXHRcdFx0XHRET00uY3VycmVudE1haW4uc3R5bGUuYmFja2dyb3VuZCA9IEFGVEVSTk9PTl9DT0xPUlNbMF07XG5cdFx0XHRcdERPTS5kYWlseU1haW4uc3R5bGUuYmFja2dyb3VuZCA9IEFGVEVSTk9PTl9DT0xPUlNbMV07XG5cdFx0XHRcdERPTS5sb3dlck1haW4uc3R5bGUuYmFja2dyb3VuZCA9IEFGVEVSTk9PTl9DT0xPUlNbMl07XG5cdFx0XHR9IGVsc2UgaWYgKGhvdXJzID49IDE3ICYmIGhvdXJzIDwgMjQpIHtcblx0XHRcdFx0RE9NLmN1cnJlbnRNYWluLnN0eWxlLmJhY2tncm91bmQgPSBDT09MX0NPTE9SU1swXTtcblx0XHRcdFx0RE9NLmRhaWx5TWFpbi5zdHlsZS5iYWNrZ3JvdW5kID0gQ09PTF9DT0xPUlNbMV07XG5cdFx0XHRcdERPTS5sb3dlck1haW4uc3R5bGUuYmFja2dyb3VuZCA9IENPT0xfQ09MT1JTWzJdO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBiZ01hbmlwdWxhdGlvbjtcbiIsIi8vIFRoaXMgaXMgdXNlZCB0byBnZXQgdGhlIHVzZXIncyBjdXJyZW50IGxvY2F0aW9uIG5hbWUgYnkgZ2V0dGluZyB0aGUgdXNlcidzIGNvb3JkaW5hdGVzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXJlYUZyb21Db29yZGluYXRlcyh7IGxhdCwgbG9uIH0pIHtcblx0Y29uc3QgVVJMID0gYGh0dHBzOi8vZ2VvY29kZS54eXovJHtsYXR9LCR7bG9ufT9qc29uPTFgO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdHJldHVybiBhd2FpdCBkYXRhO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5sb2coYEVycm9yOiAke2V9YCk7XG5cdH1cbn1cbiIsIi8vIERPTSBpbnN0YW5jZXMgb2YgZXhpc3RpbmcgZWxlbWVudHMgZnJvbSBodG1sIGZpbGVcbmNvbnN0IERPTSA9ICgoKSA9PiB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcblx0Y29uc3QgdXBwZXJNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwcGVyLW1haW4nKTtcblx0Y29uc3QgbG93ZXJNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvd2VyLW1haW4nKTtcblx0Y29uc3QgY3VycmVudE1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1tYWluJyk7XG5cdGNvbnN0IGRhaWx5TWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseS1tYWluJyk7XG5cdGNvbnN0IHVzZXJMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWxvY2F0aW9uJyk7XG5cdGNvbnN0IGRlYnVnT3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYnVnJyk7XG5cdGNvbnN0IGFyZWFJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcmVhLWlucHV0Jyk7XG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cdGNvbnN0IGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJyk7XG5cdGNvbnN0IGVycm9yQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItY2xvc2UnKTtcblx0Y29uc3QgYWxlcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQtYnRuJyk7XG5cdGNvbnN0IGFsZXJ0RGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydC1kZXNjJyk7XG5cdGNvbnN0IGFsZXJ0RXZlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0LWV2ZW50cycpO1xuXHRjb25zdCBhbGVydFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQtdGV4dCcpO1xuXHRjb25zdCBhbGVydENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0LWNsb3NlJyk7XG5cdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG5cdHJldHVybiB7XG5cdFx0Y29udGVudCxcblx0XHRtYWluLFxuXHRcdHVwcGVyTWFpbixcblx0XHRjdXJyZW50TWFpbixcblx0XHRkYWlseU1haW4sXG5cdFx0bG93ZXJNYWluLFxuXHRcdHVzZXJMb2NhdGlvbixcblx0XHRkZWJ1Z091dHB1dCxcblx0XHRhcmVhSW5wdXQsXG5cdFx0Zm9ybSxcblx0XHRlcnJvcixcblx0XHRlcnJvckNsb3NlLFxuXHRcdGFsZXJ0QnRuLFxuXHRcdGFsZXJ0RGVzYyxcblx0XHRhbGVydEV2ZW50cyxcblx0XHRhbGVydFRleHQsXG5cdFx0YWxlcnRDbG9zZSxcblx0XHRtb2RhbCxcblx0XHQvLyBub3QgaW4gdGhlIGJlc3Qgc3RhdGUgYnV0IGl0cyBmdW5jdGlvbmFsaXR5IGZvcm1hdCB0aGUgc3RyaW5nIGJhc2VkXG5cdFx0Ly8gb24gdGhlIGNvbmRpdGlvblxuXHRcdHN0cklucHV0KCkge1xuXHRcdFx0cmV0dXJuIGFyZWFJbnB1dC52YWx1ZTtcblx0XHR9LFxuXHRcdGxvY2F0aW9uSW5wdXQoKSB7XG5cdFx0XHRjb25zdCBzdHIgPSBgJHthcmVhSW5wdXQudmFsdWV9YDtcblx0XHRcdC8vIHNwYWNlcyBhcmUgcmVwbGFjZSB3aXRoICcrJyB3aGljaCBpcyB1c2VkIGZvciB0aGUgc3RyaW5nIHdpdGhpbiBVUkxcblx0XHRcdHJldHVybiBzdHIuc3BsaXQoJycpLm1hcCgoeCkgPT4gKHggPT0gJyAnID8geCA9ICcrJyA6IHgpKS5qb2luKCcnKTtcblx0XHR9LFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NO1xuIiwiaW1wb3J0IHsgTE9DQVRJT05fQVBJLCBXRUFUSEVSX0FQSSB9IGZyb20gJy4vc2VydmVyLXJvdXRlLmpzJztcblxuLy8gbWFpbmx5IGZvciBmZXRjaGluZyBBUEkga2V5XG4vLyBmaWxlIGZvciBnZXR0aW5nIGFuZCBzZXR0aW5nIFtpbnNlcnRfc3RyaW5nXSBkaXJlY3RvcnkgbmFtZSB0byBjb21wbGV0ZSBVUkxcbmNvbnN0IGZldGNoRGF0YSA9ICgoKSA9PiB7XG5cdGNvbnN0IHBhcnQgPSAnbWludXRlbHknO1xuXHRsZXQgbGF0O1xuXHRsZXQgbG9uO1xuXHRsZXQgc2VhcmNoQXJlYTtcblx0bGV0IGFyZWFOYW1lO1xuXHRyZXR1cm4ge1xuXHRcdHNldENvb3JkaW5hdGVzKG5MYXQsIG5Mb24pIHtcblx0XHRcdGxhdCA9IG5MYXQ7XG5cdFx0XHRsb24gPSBuTG9uO1xuXHRcdH0sXG5cdFx0c2V0U2VhcmNoQXJlYSh2KSB7IHNlYXJjaEFyZWEgPSB2OyB9LFxuXHRcdHNldEFyZWFOYW1lKHYpIHsgYXJlYU5hbWUgPSB2OyB9LFxuXHRcdGdldExhdCgpIHsgcmV0dXJuIGxhdDsgfSxcblx0XHRnZXRMb24oKSB7IHJldHVybiBsb247IH0sXG5cdFx0Z2V0QXJlYU5hbWUoKSB7IHJldHVybiBhcmVhTmFtZTsgfSxcblx0XHRnZXRXZWF0aGVyVVJMKCkge1xuXHRcdFx0Y29uc3QgV0VBVEhFUl9VUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9JHtwYXJ0fSZhcHBpZD0ke1dFQVRIRVJfQVBJfWA7XG5cdFx0XHRyZXR1cm4gV0VBVEhFUl9VUkw7XG5cdFx0fSxcblx0XHRnZXRMb2NhdGlvblVSTCgpIHtcblx0XHRcdGNvbnN0IExPQ0FUSU9OX1VSTCA9IGBodHRwczovL3VzMS5sb2NhdGlvbmlxLmNvbS92MS9zZWFyY2gucGhwP2tleT0ke0xPQ0FUSU9OX0FQSX0mcT0ke3NlYXJjaEFyZWF9JmZvcm1hdD1qc29uYDtcblx0XHRcdHJldHVybiBMT0NBVElPTl9VUkw7XG5cdFx0fSxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTtcbiIsIi8vIGhlbHBlciBmdW5jdGlvbnNcbi8vIHJldXNhYmxlIGZ1bmN0aW9ucyB0aGF0IGNyZWF0ZS9tb2RpZnkgZWxlbWVudHNcbmNvbnN0IG1hbmFnZSA9ICgoKSA9PiAoe1xuXHRjcnRFbGVtZW50KGVUZXh0LCBlSWQsIGVDbGFzcywgZVRhZykge1xuXHRcdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlVGFnKTtcblx0XHQoZWwudGV4dENvbnRlbnQgPSBlVGV4dCwgZWwuaWQgPSBlSWQsIGVsLmNsYXNzTmFtZSA9IGVDbGFzcyk7XG5cdFx0cmV0dXJuIGVsO1xuXHR9LFxuXHRjcnRJbWcoZVNyYywgZUlkLCBlQ2xhc3MpIHtcblx0XHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHQoaW1nLnNyYyA9IGVTcmMsIGltZy5pZCA9IGVJZCwgaW1nLmNsYXNzTmFtZSA9IGVDbGFzcyk7XG5cdFx0cmV0dXJuIGltZztcblx0fSxcblx0bW9kaWZ5QXR0cihlbCwgZVR5cGUsIGVQcm9wKSB7IGVsLnNldEF0dHJpYnV0ZShlVHlwZSwgZVByb3ApOyB9LFxufSkpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1hbmFnZTtcbiIsIi8vIEknbGwgdXBkYXRlIHRoaXMgZmlsZSBpbiB0aGUgZnV0dXJlIHRvIHJlcXVlc3QgdGhlIEFQSSBrZXkgaW5cbi8vIHRoZSBzZXJ2ZXIgcmF0aGVyIHRoYW4gdGhlIGZyb250LWVuZCBmaWxlcyAtLSBlbnYgb25seSB3b3Jrc1xuLy8gd2l0aCBleHByZXNzIG9yIGJhY2tlbmQgc3R1ZmZcblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbi8vIGltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xuLy8gZG90ZW52LmNvbmZpZygpO1xuLy8gY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbi8vIGNvbnN0IERhdGFzdG9yZSA9IHJlcXVpcmUoJ25lZGInKTtcbi8vIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZyh7IHBhdGg6IGAke19fZGlybmFtZX0vLmVudmAgfSk7XG5cbi8vIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbi8vIGNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFzdG9yZSgnZGF0YWJhc2UuZGInKTtcbi8vIGRhdGFiYXNlLmxvYWREYXRhYmFzZSgpO1xuXG4vLyBhcHAuZ2V0KCcvYXBpJywgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4vLyBcdGRhdGFiYXNlLmZpbmQoe30sIChlcnIsIGRhdGEpID0+IHtcbi8vIFx0XHRpZiAoZXJyKSB7XG4vLyBcdFx0XHRyZXNwb25zZS5lbmQoKTtcbi8vIFx0XHRcdHJldHVybjtcbi8vIFx0XHR9XG4vLyBcdFx0cmVzcG9uc2UuanNvbihkYXRhKTtcbi8vIFx0fSk7XG4vLyB9KTtcblxuLy8gY29uc3QgTE9DQVRJT05fQVBJID0gcHJvY2Vzcy5lbnYuTE9DQVRJT05fQVBJOy8vXG4vLyBjb25zdCBXRUFUSEVSX0FQSSA9IHByb2Nlc3MuZW52LldFQVRIRVJfQVBJO1xuXG4vLyBJdCBpcyBjcnVjaWFsIGZvciB0aGVzZSBrZXlzIHRvIGJlIGhpZGRlbiBmcm9tIHRoZSBwdWJsaWMgdmlld1xuY29uc3QgTE9DQVRJT05fQVBJID0gJ3BrLjk2MGJlZjliNThjYWYxMmY0ZDQ1NjQ2NmVjMmE0MmY4JztcbmNvbnN0IFdFQVRIRVJfQVBJID0gJzBjNzNiNzIzOThjMGJmYzhjNTljYTgwNThmYWYxZWI0JztcblxuZXhwb3J0IHsgTE9DQVRJT05fQVBJLCBXRUFUSEVSX0FQSSB9O1xuIiwiLy8gY29udmVydCBkYXRlcyBieSB0aGUgYXBwcm9wcmlhdGUgbG9jYWwgdGltZXpvbmVcbi8vIG9iamVjdCB1c2VkIHRvIGZvcm1hdCBkYXRlc1xuY29uc3QgT1BUSU9OUyA9IHtcblx0d2Vla2RheTogJ2xvbmcnLFxuXHR5ZWFyOiAnbnVtZXJpYycsXG5cdG1vbnRoOiAnbG9uZycsXG5cdGRheTogJ251bWVyaWMnLFxufTtcblxuY29uc3QgREFJTFkgPSB7XG5cdHdlZWtkYXk6ICdzaG9ydCcsXG5cdG1vbnRoOiAnc2hvcnQnLFxuXHRkYXk6ICdudW1lcmljJyxcbn07XG5mdW5jdGlvbiBjb252ZXJ0VFooZGF0ZSwgdHpTdHJpbmcpIHtcblx0cmV0dXJuIG5ldyBEYXRlKCh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgPyBuZXcgRGF0ZShkYXRlKSA6IGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHt0aW1lWm9uZTogdHpTdHJpbmd9KSk7XG59XG5cbi8vIGZvcm1hdCAtPiBISDpNTTpTUyBBTS9QTVxuZnVuY3Rpb24gZm9ybWF0SG91ck1pbihkYXRlKSB7XG5cdGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblx0bGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcblx0bGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcblx0Y29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cdGhvdXJzICU9IDEyO1xuXHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cdG1pbnV0ZXMgPSAoJzAnICsgbWludXRlcykuc2xpY2UoLTIpO1xuXHRzZWNvbmRzID0gKCcwJyArIHNlY29uZHMpLnNsaWNlKC0yKTtcblx0Y29uc3Qgc3RyVGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc30gJHthbXBtfWA7XG5cdHJldHVybiBzdHJUaW1lO1xufVxuXG4vLyBmb3JtYXQgLT4gSEggQU0vUE1cbmZ1bmN0aW9uIGZvcm1hdEhvdXJPbmx5KGRhdGUsIGkpIHtcblx0bGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICsgaTtcblx0Y29uc3QgaG91cnNOZXh0RGF5ID0gKGhvdXJzIC0gMjQpOyAvL2NoYW5nZSB0aGUgdmFyaWFibGUgaWYgaXMgcGFzc2VkIDExcG1cblx0aG91cnMgPiAyMyA/IGhvdXJzID0gMCArIGhvdXJzTmV4dERheSA6IGhvdXJzO1xuXHRsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cdGhvdXJzICU9IDEyO1xuXHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cdGNvbnN0IHN0clRpbWUgPSBgJHtob3Vyc30gJHthbXBtfWA7XG5cdHJldHVybiBzdHJUaW1lO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbEhvdXJzKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0SG91cnMoKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdEZ1bGxEYXRlKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIE9QVElPTlMpO1xufVxuZnVuY3Rpb24gZm9ybWF0U2hvcnREYXRlKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIERBSUxZKTtcbn1cbmV4cG9ydCB7XG5cdGNvbnZlcnRUWixcblx0Zm9ybWF0SG91ck1pbixcblx0Zm9ybWF0SG91ck9ubHksXG5cdGZvcm1hdEZ1bGxEYXRlLFxuXHRmb3JtYXRTaG9ydERhdGUsXG5cdGdldExvY2FsSG91cnMsXG59IiwiLy8gY29udmVydCB0aGUgdmFsdWVzIG9mIHRoZSBkYXRhIHRvIGEgZGlmZmVyZW50IHVuaXRcbmNvbnN0IERJUkVDVElPTlMgPSBbJ04nLCAnTk5FJywgJ05FJywgJ0VORScsICdFJywgJ0VTRScsICdTRScsICdTU0UnLFxuXHQnUycsICdTU1cnLCAnU1cnLCAnV1NXJywgJ1cnLCAnV05XJywgJ05XJywgJ05OVyddO1xuLy8gc3RhcnRpbmcgcmFuZ2UgZm9yIGVhY2ggZGlyZWN0aW9uIGluIDM2MCBkZWdyZWUgZm9ybWF0XG5jb25zdCBSQU5HRSA9IFszNDksIDExLCAzNCwgNTYsIDc4LCAxMDEsIDEyNCwgMTQ2LFxuXHQxNjksIDE5MSwgMjE0LCAyMzUsIDI1OSwgMjgxLCAzMDQsIDMyNl07XG5cbmxldCBpc1RlbXBDZWxjaXVzID0gdHJ1ZTtcblxuLy8gdmFsaWRhdGUgdGhlIGN1cnJlbnQgdGVtcCB1bml0XG5jb25zdCBjaGVja1RlbXBVbml0ID0gKCkgPT4ge1xuXHRpZiAoaXNUZW1wQ2VsY2l1cyA9PT0gdHJ1ZSkge1xuXHRcdHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9Q2A7XG5cdH1cblxuXHRyZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUZgO1xufTtcblxuLy8gdG9nZ2xlIHRoZSB0ZW1wZXJhdHVyZSB1bml0XG5jb25zdCB0b2dnbGVUZW1wID0gKCkgPT4ge1xuXHRpc1RlbXBDZWxjaXVzID09PSB0cnVlID8gaXNUZW1wQ2VsY2l1cyA9IGZhbHNlIDogaXNUZW1wQ2VsY2l1cyA9IHRydWU7XG59O1xuXG4vLyB0cmFuc2xhdGUgZnJvbSBrZWx2aW4gdG8gY2VsY2l1c1xuY29uc3Qga2VsdmluVG9DZWxjaXVzID0gKEspID0+IHtcblx0Y29uc3QgY2VsY2l1cyA9IEsgLSAyNzMuMTU7XG5cdHJldHVybiBgJHtNYXRoLnJvdW5kKGNlbGNpdXMpfSR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xufTtcblxuLy8gdHJhbnNsYXRlIGZyb20ga2VsdmluIHRvIGZhaHJlbmhlaXRcbmNvbnN0IGtlbHZpblRvRmFocmVuaGVpdCA9IChLKSA9PiB7XG5cdGNvbnN0IGZhaCA9IDEuOCAqIChLIC0gMjczLjE1KSArIDMyO1xuXHRyZXR1cm4gYCR7TWF0aC5yb3VuZChmYWgpfSR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUZgO1xufTtcbi8vIGNvbnZlcnRzIGFsbCB0aGUgdGVtcGVyYXR1cmUgb3V0cHV0IHdoZW4gdGhlIHRlbXAgaXMgc3dpdGNoZWQgdG8gYSBkaWZmZXJlbnQgdW5pdFxuY29uc3QgY29udmVydFRlbXAgPSAodCkgPT4gKGlzVGVtcENlbGNpdXMgPT09IHRydWUgPyBrZWx2aW5Ub0NlbGNpdXModCkgOiBrZWx2aW5Ub0ZhaHJlbmhlaXQodCkpO1xuXG4vLyBtZXRlci9zZWNvbmQgdG8gbWV0ZXIgcGVyIGhvdXJcbmNvbnN0IHdpbmRTcGVlZFRvTVBIID0gKG4pID0+IE1hdGgucm91bmQobiAqIDIuMjM3KTtcblxuLy8gcmVwbGFjZSB0aGUgMCAtIDM2MCBkZWdyZWUgd2l0aCBOLEUsVyxTXG5jb25zdCB3aW5kRGVnVG9EaXIgPSAobikgPT4ge1xuXHRuID4gMzQ5ID8gbiA9IDAgOiBuO1xuXHRsZXQgaW5kZXg7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgRElSRUNUSU9OUy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRpbmRleCA9IChpICsgRElSRUNUSU9OUy5sZW5ndGgpICUgRElSRUNUSU9OUy5sZW5ndGg7XG5cdFx0aWYgKG4gPiBSQU5HRVtpXSB8fCBuIDwgUkFOR0VbaW5kZXggKyAxXSkge1xuXHRcdFx0cmV0dXJuIERJUkVDVElPTlNbaV07XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge1xuXHRjaGVja1RlbXBVbml0LFxuXHR0b2dnbGVUZW1wLFxuXHRjb252ZXJ0VGVtcCxcblx0d2luZFNwZWVkVG9NUEgsXG5cdHdpbmREZWdUb0Rpcixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb250cm9sbGVyLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==