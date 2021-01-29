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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Ubuntu\", monospace;\n  color: white;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  font-size: 12px;\n}\n\nform {\n  padding-top: 9px;\n  padding-bottom: 19px;\n  text-align: center;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n\n#content {\n  overflow: auto;\n}\n\n#modal {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(1, 1, 1, 0.3);\n  z-index: 10;\n}\n\n#main-header {\n  height: 6vh;\n  background: #2b2416;\n  background: linear-gradient(210deg, #2b2416 0%, #95685d 41%, #deb09c 84%);\n}\n\n#forecast-header {\n  display: none;\n}\n\n#upper-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 68vh;\n  width: 100%;\n}\n\n#upper-main > div {\n  width: 50%;\n  height: inherit;\n}\n\n/*********** DAILY WEATHER SECTION *********/\n#daily-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 68vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#daily-main .daily-wrappers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 28%;\n  font-size: clamp(1rem, 1vw, 2rem);\n}\n\n#daily-main .daily-wrappers .daily-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n}\n\n#daily-main .daily-wrappers .daily-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#daily-main .daily-wrappers .daily-lower div div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.daily-temps {\n  font-size: clamp(1.4rem, 1.8vw, 3rem);\n  font-weight: 700;\n  padding: 10px;\n}\n\n.daily-feels {\n  opacity: 0.7;\n}\n\n.daily-contents {\n  margin: 0 5px;\n}\n\n/*******CURRENT WEATHER SECTION *******/\n#current-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#current-temp {\n  font-size: clamp(4.2rem, 11.5vw, 50rem);\n  text-align: center;\n  margin: 20px 0;\n}\n\n#current-upper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-upper #current-upper-left > * {\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n#current-upper #current-upper-left > * #current-location {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#current-upper #current-upper-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2vw;\n}\n\n#current-icon {\n  display: block;\n  margin-left: 5px;\n}\n\n.current-contents {\n  font-size: clamp(1.4rem, 2vw, 3rem);\n  margin-left: 5px;\n  margin-top: 5px;\n}\n\n.choose-temp {\n  padding: 0 15px;\n  cursor: pointer;\n}\n\n#current-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-lower #current-lower-right > * {\n  text-align: end;\n}\n\n/********HOURLY WEATHER SECTION *********/\n#lower-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 25vh;\n  width: 100%;\n}\n\n#lower-main .hrly-contents > * {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: clamp(0.8rem, 1.1vw, 2.4em);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n#lower-main .hrly-icons {\n  display: block;\n  margin: 0 auto;\n}\n\n#lower-main .hrly-temp, #lower-main .hrly-time {\n  margin-top: 8px;\n  font-size: clamp(1rem, 1.5vw, 4rem);\n}\n\n#lower-main .hrly-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#lower-main .hrly-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#lower-main > div {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: inherit;\n}\n\n.choose-temp:hover {\n  border: 2px solid rgba(0, 0, 0, 0.3);\n}\n\n.choose-temp {\n  width: 70px;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  margin-right: 20px;\n}\n\n/********** ICONS/GIF ************/\n#user-location {\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n  margin: 0 15px;\n  cursor: pointer;\n}\n\n#user-location:hover::after {\n  position: absolute;\n  content: attr(data-text);\n  bottom: -3.5em;\n  left: -5em;\n  background-color: #333;\n  color: white;\n  padding: .25em .5em;\n  font-size: .8em;\n  font-family: \"Ubuntu\", monospace;\n}\n\n.img-feels {\n  width: 12px;\n  height: 24px;\n}\n\n.img-spd, .img-deg {\n  width: 24px;\n  height: 24px;\n  opacity: 0.6;\n}\n\n.img-humidity {\n  -webkit-filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n          filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n}\n\n.loading-gif {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  top: 48%;\n  left: 48%;\n}\n\n#alert-btn {\n  position: absolute;\n  top: 1%;\n  margin-left: 12px;\n  -webkit-filter: invert(53%) sepia(74%) saturate(4896%) hue-rotate(337deg) brightness(99%) contrast(86%);\n          filter: invert(53%) sepia(74%) saturate(4896%) hue-rotate(337deg) brightness(99%) contrast(86%);\n  width: 30px;\n  height: 30px;\n  z-index: 10;\n}\n\n#alert-btn:hover {\n  -webkit-transform: rotateZ(14deg);\n          transform: rotateZ(14deg);\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 400ms linear;\n  transition: -webkit-transform 400ms linear;\n  transition: transform 400ms linear;\n  transition: transform 400ms linear, -webkit-transform 400ms linear;\n}\n\n#alert-btn:hover::after {\n  position: absolute;\n  content: attr(data-text);\n  bottom: -3.5em;\n  left: -5em;\n  background-color: #333;\n  color: white;\n  padding: .25em .5em;\n  font-size: .8em;\n  font-family: \"Ubuntu\", monospace;\n}\n\n#alert-desc {\n  position: fixed;\n  left: 20%;\n  top: 20%;\n  width: 60vw;\n  height: 60vh;\n  font-size: 1.3rem;\n  z-index: 11;\n  overflow: hidden;\n  border-radius: 16px;\n  -webkit-box-shadow: 0 0 5px 0 rgba(1, 1, 1, 0.3);\n          box-shadow: 0 0 5px 0 rgba(1, 1, 1, 0.3);\n  -webkit-transition: -webkit-transform 900ms ease-in-out;\n  transition: -webkit-transform 900ms ease-in-out;\n  transition: transform 900ms ease-in-out;\n  transition: transform 900ms ease-in-out, -webkit-transform 900ms ease-in-out;\n}\n\n#alert-desc #alert-header {\n  height: 30px;\n  width: 100%;\n  background: #da3f3f;\n}\n\n#alert-desc #alert-header p {\n  padding: 6px 14px;\n}\n\n#alert-desc #alert-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: calc(100% - 30px);\n}\n\n#alert-desc #alert-flex #alert-events {\n  height: 100%;\n  border-right: 2px solid rgba(255, 255, 255, 0.3);\n  width: 30%;\n  background: #eda3a3;\n  color: #22382d;\n}\n\n#alert-desc #alert-flex #alert-events div {\n  padding: 6px 0;\n  text-align: center;\n  border-bottom: 1px solid #22382d;\n}\n\n#alert-desc #alert-flex #alert-text {\n  height: 100%;\n  width: calc(100% - 30%);\n  background: #e68f8f;\n  color: white;\n  overflow: auto;\n}\n\n#alert-desc #alert-flex #alert-text p {\n  padding: 15px 28px;\n  line-height: 1.5;\n}\n\n#alert-desc #alert-flex #alert-text #alert-close {\n  position: absolute;\n  right: 3%;\n  bottom: 5%;\n  height: 30px;\n  background: #eda3a3;\n  outline: none;\n}\n\n.event-txts:hover, #alert-close:hover {\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);\n          box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);\n}\n\n.slideDown {\n  -webkit-transform: translate(0px, -2999px);\n          transform: translate(0px, -2999px);\n}\n\n.slideDown {\n  overflow: hidden;\n}\n\n.slideUp {\n  -webkit-transform: translate(0px, 2999px);\n          transform: translate(0px, 2999px);\n}\n\n.slideUp {\n  overflow: hidden;\n}\n\n.active-state {\n  -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);\n          box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=alert.css.map */", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/alert.css","webpack://./src/styles/alert.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Ubuntu\", monospace;\n  color: white;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  font-size: 12px;\n}\n\nform {\n  padding-top: 9px;\n  padding-bottom: 19px;\n  text-align: center;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n\n#content {\n  overflow: auto;\n}\n\n#modal {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(1, 1, 1, 0.3);\n  z-index: 10;\n}\n\n#main-header {\n  height: 6vh;\n  background: #2b2416;\n  background: linear-gradient(210deg, #2b2416 0%, #95685d 41%, #deb09c 84%);\n}\n\n#forecast-header {\n  display: none;\n}\n\n#upper-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 68vh;\n  width: 100%;\n}\n\n#upper-main > div {\n  width: 50%;\n  height: inherit;\n}\n\n/*********** DAILY WEATHER SECTION *********/\n#daily-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 68vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#daily-main .daily-wrappers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 28%;\n  font-size: clamp(1rem, 1vw, 2rem);\n}\n\n#daily-main .daily-wrappers .daily-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n}\n\n#daily-main .daily-wrappers .daily-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#daily-main .daily-wrappers .daily-lower div div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.daily-temps {\n  font-size: clamp(1.4rem, 1.8vw, 3rem);\n  font-weight: 700;\n  padding: 10px;\n}\n\n.daily-feels {\n  opacity: 0.7;\n}\n\n.daily-contents {\n  margin: 0 5px;\n}\n\n/*******CURRENT WEATHER SECTION *******/\n#current-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#current-temp {\n  font-size: clamp(4.2rem, 11.5vw, 50rem);\n  text-align: center;\n  margin: 20px 0;\n}\n\n#current-upper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-upper #current-upper-left > * {\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n#current-upper #current-upper-left > * #current-location {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#current-upper #current-upper-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2vw;\n}\n\n#current-icon {\n  display: block;\n  margin-left: 5px;\n}\n\n.current-contents {\n  font-size: clamp(1.4rem, 2vw, 3rem);\n  margin-left: 5px;\n  margin-top: 5px;\n}\n\n.choose-temp {\n  padding: 0 15px;\n  cursor: pointer;\n}\n\n#current-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-lower #current-lower-right > * {\n  text-align: end;\n}\n\n/********HOURLY WEATHER SECTION *********/\n#lower-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 25vh;\n  width: 100%;\n}\n\n#lower-main .hrly-contents > * {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: clamp(0.8rem, 1.1vw, 2.4em);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n#lower-main .hrly-icons {\n  display: block;\n  margin: 0 auto;\n}\n\n#lower-main .hrly-temp, #lower-main .hrly-time {\n  margin-top: 8px;\n  font-size: clamp(1rem, 1.5vw, 4rem);\n}\n\n#lower-main .hrly-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#lower-main .hrly-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#lower-main > div {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: inherit;\n}\n\n.choose-temp:hover {\n  border: 2px solid rgba(0, 0, 0, 0.3);\n}\n\n.choose-temp {\n  width: 70px;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  margin-right: 20px;\n}\n\n/********** ICONS/GIF ************/\n#user-location {\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n  margin: 0 15px;\n  cursor: pointer;\n}\n\n#user-location:hover::after {\n  position: absolute;\n  content: attr(data-text);\n  bottom: -3.5em;\n  left: -5em;\n  background-color: #333;\n  color: white;\n  padding: .25em .5em;\n  font-size: .8em;\n  font-family: \"Ubuntu\", monospace;\n}\n\n.img-feels {\n  width: 12px;\n  height: 24px;\n}\n\n.img-spd, .img-deg {\n  width: 24px;\n  height: 24px;\n  opacity: 0.6;\n}\n\n.img-humidity {\n  -webkit-filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n          filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n}\n\n.loading-gif {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  top: 48%;\n  left: 48%;\n}\n\n@media (max-width: 1324px) {\n  #alert-desc {\n    font-size: 1.3rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  #alert-desc {\n    font-size: 1.2rem;\n  }\n  .img-spd, .img-deg {\n    width: 19px;\n    height: 19px;\n    opacity: 0.6;\n  }\n  .img-humidity {\n    width: 19px;\n    height: 19px;\n  }\n  .img-feels {\n    width: 10.5px;\n    height: 21px;\n  }\n}\n\n@media (max-width: 800px) {\n  #alert-desc {\n    font-size: 1rem;\n  }\n  .img-spd, .img-deg {\n    width: 16px;\n    height: 16px;\n    opacity: 0.6;\n  }\n  .img-humidity {\n    width: 16px;\n    height: 16px;\n  }\n  .img-feels {\n    width: 8px;\n    height: 16px;\n  }\n}\n\n@media (max-width: 543px) {\n  #alert-desc {\n    font-size: 0.8rem;\n  }\n}\n\n@media (min-width: 2560px) and (min-height: 1920px) {\n  .daily-icons, .hrly-icons {\n    width: 120px;\n    height: 120px;\n  }\n  .hrly-contents > * {\n    padding: 12px 0;\n  }\n}\n\n/***********  HEIGHTS  ***********/\n@media (max-height: 600px) {\n  .daily-icons, .hrly-icons {\n    width: 60px;\n    height: 60px;\n  }\n}\n\n@media screen and (orientation: portrait) {\n  #upper-main {\n    width: 100%;\n  }\n  #upper-main div {\n    width: inherit;\n  }\n  #daily-main {\n    display: none;\n  }\n  .hrly-contents:nth-child(5) {\n    display: none;\n  }\n  .hrly-contents:nth-child(6) {\n    display: none;\n  }\n  .hrly-contents:nth-child(7) {\n    display: none;\n  }\n  .hrly-contents:nth-child(8) {\n    display: none;\n  }\n  .hrly-contents:nth-child(9) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=media_queries.css.map */", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/media_queries.css","webpack://./src/styles/media_queries.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Ubuntu\", monospace;\n  color: white;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  font-size: 12px;\n}\n\nform {\n  padding-top: 9px;\n  padding-bottom: 19px;\n  text-align: center;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n\n#content {\n  overflow: auto;\n}\n\n#modal {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(1, 1, 1, 0.3);\n  z-index: 10;\n}\n\n#main-header {\n  height: 6vh;\n  background: #2b2416;\n  background: linear-gradient(210deg, #2b2416 0%, #95685d 41%, #deb09c 84%);\n}\n\n#forecast-header {\n  display: none;\n}\n\n#upper-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 68vh;\n  width: 100%;\n}\n\n#upper-main > div {\n  width: 50%;\n  height: inherit;\n}\n\n/*********** DAILY WEATHER SECTION *********/\n#daily-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 68vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#daily-main .daily-wrappers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 28%;\n  font-size: clamp(1rem, 1vw, 2rem);\n}\n\n#daily-main .daily-wrappers .daily-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n}\n\n#daily-main .daily-wrappers .daily-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#daily-main .daily-wrappers .daily-lower div div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.daily-temps {\n  font-size: clamp(1.4rem, 1.8vw, 3rem);\n  font-weight: 700;\n  padding: 10px;\n}\n\n.daily-feels {\n  opacity: 0.7;\n}\n\n.daily-contents {\n  margin: 0 5px;\n}\n\n/*******CURRENT WEATHER SECTION *******/\n#current-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#current-temp {\n  font-size: clamp(4.2rem, 11.5vw, 50rem);\n  text-align: center;\n  margin: 20px 0;\n}\n\n#current-upper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-upper #current-upper-left > * {\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\n}\n\n#current-upper #current-upper-left > * #current-location {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#current-upper #current-upper-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 2vw;\n}\n\n#current-icon {\n  display: block;\n  margin-left: 5px;\n}\n\n.current-contents {\n  font-size: clamp(1.4rem, 2vw, 3rem);\n  margin-left: 5px;\n  margin-top: 5px;\n}\n\n.choose-temp {\n  padding: 0 15px;\n  cursor: pointer;\n}\n\n#current-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#current-lower #current-lower-right > * {\n  text-align: end;\n}\n\n/********HOURLY WEATHER SECTION *********/\n#lower-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 25vh;\n  width: 100%;\n}\n\n#lower-main .hrly-contents > * {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: clamp(0.8rem, 1.1vw, 2.4em);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n#lower-main .hrly-icons {\n  display: block;\n  margin: 0 auto;\n}\n\n#lower-main .hrly-temp, #lower-main .hrly-time {\n  margin-top: 8px;\n  font-size: clamp(1rem, 1.5vw, 4rem);\n}\n\n#lower-main .hrly-lower {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#lower-main .hrly-lower div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#lower-main > div {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: inherit;\n}\n\n.choose-temp:hover {\n  border: 2px solid rgba(0, 0, 0, 0.3);\n}\n\n.choose-temp {\n  width: 70px;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  margin-right: 20px;\n}\n\n/********** ICONS/GIF ************/\n#user-location {\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n  margin: 0 15px;\n  cursor: pointer;\n}\n\n#user-location:hover::after {\n  position: absolute;\n  content: attr(data-text);\n  bottom: -3.5em;\n  left: -5em;\n  background-color: #333;\n  color: white;\n  padding: .25em .5em;\n  font-size: .8em;\n  font-family: \"Ubuntu\", monospace;\n}\n\n.img-feels {\n  width: 12px;\n  height: 24px;\n}\n\n.img-spd, .img-deg {\n  width: 24px;\n  height: 24px;\n  opacity: 0.6;\n}\n\n.img-humidity {\n  -webkit-filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n          filter: invert(26%) sepia(85%) saturate(1799%) hue-rotate(201deg) brightness(86%) contrast(90%);\n}\n\n.loading-gif {\n  position: absolute;\n  width: 23px;\n  height: 23px;\n  top: 45%;\n  left: 50%;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
/* harmony import */ var _modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetch_data.js */ "./src/modules/fetch_data.js");
/* harmony import */ var _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elements.js */ "./src/modules/elements.js");
/* harmony import */ var _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helpers.js */ "./src/modules/helpers.js");
/* harmony import */ var _modules_units_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/units.js */ "./src/modules/units.js");
/* harmony import */ var _modules_time_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/time.js */ "./src/modules/time.js");
/* harmony import */ var _modules_current_location_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/current_location.js */ "./src/modules/current_location.js");
/* harmony import */ var _modules_alert_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/alert.js */ "./src/modules/alert.js");
/* harmony import */ var _modules_bg_change_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/bg_change.js */ "./src/modules/bg_change.js");
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

// display default
window.onload = () => {
	defaultLocation();
};

// ask the user for a permission to collect the former's coordinates
_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.userLocation.onclick = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCoordinatesFromUser);
	} else {
		console.log('Geolocation is not supported by this browser');
	}
};

// get the user's current location
async function getCoordinatesFromUser(pos) {
	_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.modal.style.display = 'block';
	const lat = pos.coords.latitude;
	const lon = pos.coords.longitude;
	const data = await fetchCoordinatesToGetArea(lat, lon);
	assignUserLocation(data);
}

// using the coordinates to get the proper area
function fetchCoordinatesToGetArea(lat, lon) {
	_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.setCoordinates(lat, lon);
	return (0,_modules_current_location_js__WEBPACK_IMPORTED_MODULE_5__.getAreaFromCoordinates)({ lat, lon });
}
// assign the user's location as current
async function assignUserLocation(data) {
	let areaName = locationNameByAPI(data);
	_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.setAreaName(areaName);
	try {
		await fetchWeatherData(_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.getWeatherURL());
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
		`${data.staddress}, ${data.prov}`
	} else {
		areaName = data.region;
	}
	return areaName;
}
// use default location if the user disallow the humble permission
async function defaultLocation() {
	const lat = 90;
	const lon = 0;
	_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.setCoordinates(lat, lon);
	_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.setAreaName('North Pole');
	const data = await _modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.getWeatherURL();
	try {
		await fetchWeatherData(data);
	} catch (e) {
		console.log(`Error: ${e}`);
	}
}

// submit the form to get the input of coordinates and overwrite to the respective
// variables, appended within the weather url.
_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.form.onsubmit = async (e) => {
	e.preventDefault();
	_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.modal.style.display = 'block';
	_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.setSearchArea(_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.locationInput());
	_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.setAreaName(_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.strInput());
	try {
		await getCoordinates(_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.getLocationURL());
	}
	catch (error) {
		console.log(error);
	}
};

_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertClose.addEventListener('click', _modules_alert_js__WEBPACK_IMPORTED_MODULE_6__.toggleDisplay);
_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.alertBtn.addEventListener('click', _modules_alert_js__WEBPACK_IMPORTED_MODULE_6__.toggleDisplay);
// get the coordinates
async function getCoordinates(data) {
	const response = await fetch(data, { mode: 'cors' });
	const locationData = await response.json();
	_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.setCoordinates(locationData[0].lat, locationData[0].lon);
	const dataForAreaName = await fetchCoordinatesToGetArea(_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.getLat(), _modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.getLon());
	const areaNameByAPI = locationNameByAPI(dataForAreaName);
	if (areaNameByAPI === undefined) {
		_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.setAreaName(_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.strInput());
	} else {
		_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.setAreaName(areaNameByAPI);
	}
	try {
		await fetchWeatherData(_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.getWeatherURL());
	}
	catch (e) {
		console.log(`Error: ${e}`);
	}
}

// fetch the data and display it
async function fetchWeatherData(data) {
	const response = await fetch(data, { mode: 'cors' });
	weatherData = await response.json();
	displayInfo();
	if (_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.modal.style.display === 'block') {
		_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.modal.style.display = 'none';
	}
	(0,_modules_alert_js__WEBPACK_IMPORTED_MODULE_6__.getAlert)(weatherData); // get alert data
}

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

	const icon = weatherData.hourly[(i + 1) + i].weather[0].icon;
	const humidity = weatherData.hourly[(i + 1) + i].humidity + '%';
	const { timezone } = weatherData;
	const date = (0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.convertTZ)(new Date(), timezone);

	temp = (0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(temp);
	feelsLike = (0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(feelsLike);

	// DOM instances
	const hourlyMain = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', `hrly-main${i + 1}`, 'hrly-contents', 'div');
	const hourlyTemp = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`${temp}`, `hrly-temp${i + 1}`, 'hrly-temp', 'p');

	const hourlyIcon = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(getWeatherIcon(icon), `hrly-icon${i + 1}`, 'hrly-icons');
	const hourlyTime = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement((0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.formatHourOnly)(date, (i + 1) + i), `hrly-time${i + 1}`, 'hrly-time', 'p');

	const hourlyLower = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'hrly-lower', 'hrly-lower', 'div');
	const hourlyHumidityWrapper = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'hrly-humidity-wrapper', 'hrly-container', 'div');
	const hourlyHumidity = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`${humidity} `, `hrly-humidity${i + 1}`, 'hrly-container', 'p');
	const hourlyFeelsWrapper = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'hrly-feels-wrapper', 'hrly-container', 'div');
	const hourlyFeels = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(` ${feelsLike}`, `hrly-feels${i + 1}`, 'hrly-container', 'p');

	// used icons from https://icons8.com/icons/set/humidity
	const iHumidity = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(_img_humidity_png__WEBPACK_IMPORTED_MODULE_12__, '', 'img-humidity');
	const iFeelsLike = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(_img_feels_like_svg__WEBPACK_IMPORTED_MODULE_13__, '', 'img-feels');

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
	temp = (0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(temp);
	feelsLike = (0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(feelsLike);

	// get data with object destructuring
	const { icon } = weatherData.daily[i + 1].weather[0];
	const humidity = `${weatherData.daily[i + 1].humidity}%`;
	const { timezone } = weatherData;

	let date = new Date(); // get todays date
	date.setDate(date.getDate() + (i + 1)); // accumulate date by one
	const localDate = (0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.convertTZ)(date, timezone); // get date based n timezone

	// get wind speed and degree
	const speed = `${(0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.windSpeedToMPH)(weatherData.daily[i + 1].wind_speed)} mph `;
	const deg = `${(0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.windDegToDir)(weatherData.daily[i + 1].wind_deg)}`;

	const dailyWrapper = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', `daily-wrapper${i + 1}`, 'daily-wrappers', 'div');
	const dailyTemp = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`${temp}`, `daily-temp${i + 1}`, 'daily-temps', 'p');

	const dailyFeels = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`Feels like: ${feelsLike}`, `daily-feels${i + 1}`, 'daily-feels', 'p');
	const dailyIcon = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(getWeatherIcon(icon), `daily-icon${i + 1}`, 'daily-icons');
	const dailyDate = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement((0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.formatShortDate)(localDate), `daily-date${i + 1}`, 'daily-dates', 'p');

	const dailyLower = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', '', 'daily-lower', 'div');
	const dailyLowerLeft = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'daily-lower-left', 'daily-container', 'div');
	const dailyLowerRight = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'daily-lower-right', 'daily-container', 'div');

	const dailyHumidityWrapper = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', '', 'daily-container', 'div');
	const dailyHumidity = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`${humidity}`, `daily-humidity${i + 1}`, 'daily-contents', 'p');
	const iHumidity = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(_img_humidity_png__WEBPACK_IMPORTED_MODULE_12__, '', 'img-humidity');
	const dailySpdWrapper = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', '', 'daily-container', 'div');
	const dailySpd = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(speed, 'daily-spd', 'daily-contents', 'p');
	const iWindSpd = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(_img_wind_solid_svg__WEBPACK_IMPORTED_MODULE_14__, '', 'img-spd');
	const dailyDegWrapper = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', '', 'daily-container', 'div');
	const dailyDeg = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(deg, 'daily-deg', 'daily-contents', 'p');
	const iWindDeg = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(_img_compass_regular_svg__WEBPACK_IMPORTED_MODULE_15__, '', 'img-deg');

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
	const icon = weatherData.current.weather[0].icon;
	const timezone = weatherData.timezone;
	const date = (0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.convertTZ)(new Date, timezone);

	let temp = weatherData.current.temp;
	let feels = weatherData.current.feels_like;
	const humidity = weatherData.current.humidity;
	const speed = `${(0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.windSpeedToMPH)(weatherData.current.wind_speed)} mph :Wind Speed`;
	const deg = `${(0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.windDegToDir)(weatherData.current.wind_deg)} :Wind Degree`;
	// temp conversion
	temp = (0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(temp);
	temp = temp.slice(0, -1);
	feels = (0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.convertTemp)(feels);

	// DOM instances

	const currentUprCont = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-upper', 'current-upper', 'div');

	// DOM elements in the upper left side of the current main
	const upperLeftSide = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-upper-left', 'current-upper-left', 'div');
	const currentLocation = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(_modules_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.default.getAreaName(), 'current-location', 'current-contents', 'p');
	const currentDate = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement((0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.formatFullDate)(date), 'current-day', 'current-contents', 'p');
	const currentTime = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement((0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.formatHourMin)(date), 'current-time', 'current-contents', 'p');

	// DOM elements in the upper right side of the current main
	const upperRightSide = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-upper-right', 'current-upper-right', 'div');
	const currentIcon = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtImg(getWeatherIcon(icon), 'current-icon', 'current-contents');
	const tempCelcius = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement((0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.checkTempUnit)(), 'tempC', 'choose-temp', 'div');

	// the element that contains the current temperature
	const currentTemp = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(temp, 'current-temp', 'current-contents', 'p');

	// the lower side container
	const currentLwrCont = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-lower', 'current-lower', 'div');

	// DOM elements in the lower left side of the current main
	const lowerLeftSide = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-lower-left', 'current-lower-left', 'div');
	const currentFeels = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`Feels Like: ${feels}`, 'current-feels', 'current-contents', 'p');
	const currentHumidity = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(`Humidity: ${humidity}%`, 'current-humidity', 'current-contents', 'p');

	// DOM elements in the lower right side of the current main
	const lowerRightSide = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement('', 'current-lower-right', 'current-lower-right', 'div');
	const currentSpeed = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(speed, 'current-speed', 'current-contents', 'p');
	const currentDegree = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.default.crtElement(deg, 'current-deg', 'current-contents', 'p');

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
		(0,_modules_units_js__WEBPACK_IMPORTED_MODULE_3__.toggleTemp)();
		displayInfo();
	});
}

// the color is based on the current time of the day: morns, afternoon, night
function renderBgColor() {
	const { timezone } = weatherData;
	const date = (0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.convertTZ)(new Date(), timezone);
	const hours = (0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.getLocalHours)(date);
	_modules_bg_change_js__WEBPACK_IMPORTED_MODULE_7__.default.bgChg(hours);
}

// get the icon from the weather API
function getWeatherIcon(icon) {
	return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

// update clock every 1000ms = 1second
function updateClock() {
	const { timezone } = weatherData;
	const date = (0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.convertTZ)(new Date, timezone);
	const currentTime = document.getElementById('current-time');
	currentTime.textContent = (0,_modules_time_js__WEBPACK_IMPORTED_MODULE_4__.formatHourMin)(date);
	setTimeout(updateClock, 1000);
}

// controller function - create and display DOM elements
function displayInfo() {
	clearMainContents();
	getHourlyData(_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.lowerMain);
	getDailyData(_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.dailyMain);
	displayCurrentOutput(_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.currentMain);
}

// clear the contents inside the weather data container
function clearMainContents() {
	_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.currentMain.textContent = '';
	_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.dailyMain.textContent = '';
	_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.default.lowerMain.textContent = '';
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
//convert dates by the appropriate local timezone
//object used to format dates
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
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = ('0'+minutes).slice(-2);
	seconds = ('0'+seconds).slice(-2);
	const strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
	return strTime;
}

//format -> HH AM/PM
function formatHourOnly(date, i) {
	let hours = date.getHours() + i;
	let hoursNextDay = (hours-24); //change the variable if is passed 11pm
	hours > 23 ? hours = 0 + hoursNextDay : hours;
	let ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	let strTime = hours + ' ' + ampm;
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
const RANGE = [349, 11, 34, 56, 78, 101, 124, 146,
	169, 191, 214, 235, 259, 281, 304, 326];
let isTempCelcius = true;

// validate the current temp unit
const checkTempUnit = () => {
	if (isTempCelcius === true){
		return `${String.fromCharCode(176)}C`;
	} else {
		return `${String.fromCharCode(176)}F`;
	}
};
// toggle the temperature unit
const toggleTemp = () => {
	isTempCelcius === true ? isTempCelcius = false: isTempCelcius = true;
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
const convertTemp = (t) => {
	return isTempCelcius === true ? kelvinToCelcius(t) : kelvinToFahrenheit(t);
};

//meter/second to meter per hour
const windSpeedToMPH = (n) => {
	return Math.round(n * 2.237);
};

//replace the 0 - 360 degree with N,E,W,S
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvYWxlcnQuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tZWRpYV9xdWVyaWVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL2FsZXJ0LmNzcz9hNWFlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tZWRpYV9xdWVyaWVzLmNzcz9lODJiIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FsZXJ0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYmdfY2hhbmdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY3VycmVudF9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZmV0Y2hfZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zZXJ2ZXItcm91dGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy90aW1lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdW5pdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG9FQUFvRSxnQ0FBZ0MsZ0NBQWdDLGVBQWUsY0FBYyxHQUFHLFVBQVUsdUNBQXVDLGlCQUFpQiw4QkFBOEIsMkJBQTJCLDBCQUEwQiwwQkFBMEIsb0JBQW9CLEdBQUcsVUFBVSxxQkFBcUIseUJBQXlCLHVCQUF1QixH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LFFBQVEsTUFBTSxVQUFVLFFBQVEsS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxXQUFXLGFBQWEsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxZQUFZLFdBQVcsWUFBWSxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxhQUFhLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxjQUFjLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxhQUFhLE9BQU8sWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLFlBQVksYUFBYSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxXQUFXLE9BQU8sS0FBSyxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxZQUFZLFlBQVksWUFBWSxXQUFXLFFBQVEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLGFBQWEsT0FBTyxZQUFZLFdBQVcsV0FBVyxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsWUFBWSxVQUFVLFdBQVcsV0FBVyxZQUFZLFVBQVUsV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsV0FBVyxRQUFRLEtBQUssY0FBYyxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssZUFBZSxZQUFZLFdBQVcsYUFBYSxjQUFjLFlBQVksWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsYUFBYSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLDZCQUE2QjtBQUNsaWM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esb0VBQW9FLGdDQUFnQyxnQ0FBZ0MsZUFBZSxjQUFjLEdBQUcsVUFBVSx1Q0FBdUMsaUJBQWlCLDhCQUE4QiwyQkFBMkIsMEJBQTBCLDBCQUEwQixvQkFBb0IsR0FBRyxVQUFVLHFCQUFxQix5QkFBeUIsdUJBQXVCLEdBQUcsU0FBUyxvQkFBb0IsaUJBQWlCLHlCQUF5Qix5QkFBeUIsK0JBQStCLCtCQUErQixHQUFHLGNBQWMsbUJBQW1CLEdBQUcsWUFBWSxrQkFBa0IsdUJBQXVCLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1DQUFtQyxnQkFBZ0IsR0FBRyxrQkFBa0IsZ0JBQWdCLHdCQUF3Qiw4RUFBOEUsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsaUJBQWlCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLG1DQUFtQyxrQ0FBa0MsZ0NBQWdDLGdDQUFnQyxpQkFBaUIsZ0JBQWdCLEdBQUcsdUJBQXVCLGVBQWUsb0JBQW9CLEdBQUcsZ0VBQWdFLHlCQUF5Qix5QkFBeUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsOEJBQThCLHNDQUFzQyxpQkFBaUIsOEJBQThCLCtCQUErQixnQ0FBZ0MsR0FBRyxpQ0FBaUMseUJBQXlCLHlCQUF5QixrQkFBa0IsaUNBQWlDLGtDQUFrQyxtQ0FBbUMsbUNBQW1DLDZCQUE2Qiw4QkFBOEIsb0NBQW9DLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLGVBQWUsc0NBQXNDLEdBQUcsOENBQThDLHlCQUF5Qix5QkFBeUIsa0JBQWtCLDhCQUE4QixzQ0FBc0MsZ0JBQWdCLEdBQUcsa0RBQWtELHlCQUF5Qix5QkFBeUIsa0JBQWtCLGlDQUFpQyxrQ0FBa0MsbUNBQW1DLG1DQUFtQyxHQUFHLHNEQUFzRCx5QkFBeUIseUJBQXlCLGtCQUFrQixtQ0FBbUMsa0NBQWtDLGdDQUFnQyxnQ0FBZ0MsR0FBRyxrQkFBa0IsMENBQTBDLHFCQUFxQixrQkFBa0IsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLDZEQUE2RCx5QkFBeUIseUJBQXlCLGtCQUFrQixpQ0FBaUMsa0NBQWtDLG1DQUFtQyxtQ0FBbUMsOEJBQThCLHNDQUFzQyxHQUFHLG1CQUFtQiw0Q0FBNEMsdUJBQXVCLG1CQUFtQixHQUFHLG9CQUFvQix5QkFBeUIseUJBQXlCLGtCQUFrQiw4QkFBOEIsK0JBQStCLDJDQUEyQyxHQUFHLDRDQUE0QywwQ0FBMEMsR0FBRyw4REFBOEQscUJBQXFCLDRCQUE0QixHQUFHLHlDQUF5Qyx5QkFBeUIseUJBQXlCLGtCQUFrQiw2QkFBNkIsOEJBQThCLG9DQUFvQyw4QkFBOEIsK0JBQStCLGdDQUFnQyxtQkFBbUIsR0FBRyxtQkFBbUIsbUJBQW1CLHFCQUFxQixHQUFHLHVCQUF1Qix3Q0FBd0MscUJBQXFCLG9CQUFvQixHQUFHLGtCQUFrQixvQkFBb0Isb0JBQW9CLEdBQUcsb0JBQW9CLHlCQUF5Qix5QkFBeUIsa0JBQWtCLDhCQUE4QiwrQkFBK0IsMkNBQTJDLEdBQUcsNkNBQTZDLG9CQUFvQixHQUFHLDZEQUE2RCx5QkFBeUIseUJBQXlCLGtCQUFrQixtQ0FBbUMsa0NBQWtDLGdDQUFnQyxnQ0FBZ0MsaUJBQWlCLGdCQUFnQixHQUFHLG9DQUFvQyx5QkFBeUIseUJBQXlCLGtCQUFrQiwyQ0FBMkMsNkJBQTZCLDhCQUE4QixvQ0FBb0MsR0FBRyw2QkFBNkIsbUJBQW1CLG1CQUFtQixHQUFHLG9EQUFvRCxvQkFBb0Isd0NBQXdDLEdBQUcsNkJBQTZCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLDhCQUE4QixzQ0FBc0MsR0FBRyxpQ0FBaUMseUJBQXlCLHlCQUF5QixrQkFBa0IsOEJBQThCLCtCQUErQixnQ0FBZ0MsR0FBRyx1QkFBdUIsd0JBQXdCLDZCQUE2Qix5QkFBeUIsb0JBQW9CLEdBQUcsd0JBQXdCLHlDQUF5QyxHQUFHLGtCQUFrQixnQkFBZ0IseUNBQXlDLHVCQUF1QixHQUFHLHlEQUF5RCxrQ0FBa0Msa0NBQWtDLG1CQUFtQixvQkFBb0IsR0FBRyxpQ0FBaUMsdUJBQXVCLDZCQUE2QixtQkFBbUIsZUFBZSwyQkFBMkIsaUJBQWlCLHdCQUF3QixvQkFBb0IsdUNBQXVDLEdBQUcsZ0JBQWdCLGdCQUFnQixpQkFBaUIsR0FBRyx3QkFBd0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsR0FBRyxtQkFBbUIsNEdBQTRHLDRHQUE0RyxHQUFHLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixhQUFhLGNBQWMsR0FBRyxnQ0FBZ0MsaUJBQWlCLHdCQUF3QixLQUFLLEdBQUcsZ0NBQWdDLGlCQUFpQix3QkFBd0IsS0FBSyx3QkFBd0Isa0JBQWtCLG1CQUFtQixtQkFBbUIsS0FBSyxtQkFBbUIsa0JBQWtCLG1CQUFtQixLQUFLLGdCQUFnQixvQkFBb0IsbUJBQW1CLEtBQUssR0FBRywrQkFBK0IsaUJBQWlCLHNCQUFzQixLQUFLLHdCQUF3QixrQkFBa0IsbUJBQW1CLG1CQUFtQixLQUFLLG1CQUFtQixrQkFBa0IsbUJBQW1CLEtBQUssZ0JBQWdCLGlCQUFpQixtQkFBbUIsS0FBSyxHQUFHLCtCQUErQixpQkFBaUIsd0JBQXdCLEtBQUssR0FBRyx5REFBeUQsK0JBQStCLG1CQUFtQixvQkFBb0IsS0FBSyx3QkFBd0Isc0JBQXNCLEtBQUssR0FBRyxxRUFBcUUsK0JBQStCLGtCQUFrQixtQkFBbUIsS0FBSyxHQUFHLCtDQUErQyxpQkFBaUIsa0JBQWtCLEtBQUsscUJBQXFCLHFCQUFxQixLQUFLLGlCQUFpQixvQkFBb0IsS0FBSyxpQ0FBaUMsb0JBQW9CLEtBQUssaUNBQWlDLG9CQUFvQixLQUFLLGlDQUFpQyxvQkFBb0IsS0FBSyxpQ0FBaUMsb0JBQW9CLEtBQUssaUNBQWlDLG9CQUFvQixLQUFLLEdBQUcsc0RBQXNELGtMQUFrTCxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFFBQVEsTUFBTSxZQUFZLFdBQVcsYUFBYSxRQUFRLE1BQU0sV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLFdBQVcsUUFBUSxNQUFNLFVBQVUsUUFBUSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFdBQVcsYUFBYSxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxhQUFhLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxZQUFZLFVBQVUsWUFBWSxZQUFZLFdBQVcsV0FBVyxZQUFZLGNBQWMsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsT0FBTyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxhQUFhLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsT0FBTyxLQUFLLGFBQWEsV0FBVyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssYUFBYSxjQUFjLFVBQVUsY0FBYyxXQUFXLFdBQVcsUUFBUSxLQUFLLGFBQWEsV0FBVyxVQUFVLGFBQWEsUUFBUSxLQUFLLFlBQVksUUFBUSxNQUFNLFdBQVcsWUFBWSxlQUFlLFFBQVEsWUFBWSxNQUFNLGFBQWEsV0FBVyxhQUFhLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFVBQVUsY0FBYyxhQUFhLGFBQWEsV0FBVyxjQUFjLFFBQVEsS0FBSyxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxVQUFVLFlBQVksWUFBWSxPQUFPLEtBQUssTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFB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QUUseUJBQXlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRRTs7Ozs7OztVQzNERjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJhcHAubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBhZGRpbmctdG9wOiA5cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTlweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAtby1vYmplY3QtcG9zaXRpb246IGJvdHRvbTtcXG4gICAgIG9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI21vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuMyk7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI21haW4taGVhZGVyIHtcXG4gIGhlaWdodDogNnZoO1xcbiAgYmFja2dyb3VuZDogIzJiMjQxNjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTBkZWcsICMyYjI0MTYgMCUsICM5NTY4NWQgNDElLCAjZGViMDljIDg0JSk7XFxufVxcblxcbiNmb3JlY2FzdC1oZWFkZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3VwcGVyLW1haW4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogNjh2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdXBwZXItbWFpbiA+IGRpdiB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKioqKioqKioqKiogREFJTFkgV0VBVEhFUiBTRUNUSU9OICoqKioqKioqKi9cXG4jZGFpbHktbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogNjh2aDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2RhaWx5LW1haW4gLmRhaWx5LXdyYXBwZXJzIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjglO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDJyZW0pO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMgLmRhaWx5LWxvd2VyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMgLmRhaWx5LWxvd2VyIGRpdiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2RhaWx5LW1haW4gLmRhaWx5LXdyYXBwZXJzIC5kYWlseS1sb3dlciBkaXYgZGl2IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kYWlseS10ZW1wcyB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMS44dncsIDNyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kYWlseS1mZWVscyB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5kYWlseS1jb250ZW50cyB7XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4vKioqKioqKkNVUlJFTlQgV0VBVEhFUiBTRUNUSU9OICoqKioqKiovXFxuI2N1cnJlbnQtbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNjdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiBjbGFtcCg0LjJyZW0sIDExLjV2dywgNTByZW0pO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbiNjdXJyZW50LXVwcGVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjdXJyZW50LXVwcGVyICNjdXJyZW50LXVwcGVyLWxlZnQgPiAqIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgNHJlbSk7XFxufVxcblxcbiNjdXJyZW50LXVwcGVyICNjdXJyZW50LXVwcGVyLWxlZnQgPiAqICNjdXJyZW50LWxvY2F0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIgI2N1cnJlbnQtdXBwZXItcmlnaHQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcbn1cXG5cXG4jY3VycmVudC1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmN1cnJlbnQtY29udGVudHMge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDJ2dywgM3JlbSk7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uY2hvb3NlLXRlbXAge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY3VycmVudC1sb3dlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY3VycmVudC1sb3dlciAjY3VycmVudC1sb3dlci1yaWdodCA+ICoge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4vKioqKioqKipIT1VSTFkgV0VBVEhFUiBTRUNUSU9OICoqKioqKioqKi9cXG4jbG93ZXItbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAyNXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNsb3dlci1tYWluIC5ocmx5LWNvbnRlbnRzID4gKiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxLjF2dywgMi40ZW0pO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsb3dlci1tYWluIC5ocmx5LWljb25zIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiNsb3dlci1tYWluIC5ocmx5LXRlbXAsICNsb3dlci1tYWluIC5ocmx5LXRpbWUge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjV2dywgNHJlbSk7XFxufVxcblxcbiNsb3dlci1tYWluIC5ocmx5LWxvd2VyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktbG93ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG93ZXItbWFpbiA+IGRpdiB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5jaG9vc2UtdGVtcDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5jaG9vc2UtdGVtcCB7XFxuICB3aWR0aDogNzBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLyoqKioqKioqKiogSUNPTlMvR0lGICoqKioqKioqKioqKi9cXG4jdXNlci1sb2NhdGlvbiB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN1c2VyLWxvY2F0aW9uOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxuICBib3R0b206IC0zLjVlbTtcXG4gIGxlZnQ6IC01ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogLjI1ZW0gLjVlbTtcXG4gIGZvbnQtc2l6ZTogLjhlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG4uaW1nLWZlZWxzIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uaW1nLXNwZCwgLmltZy1kZWcge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5pbWctaHVtaWRpdHkge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgyNiUpIHNlcGlhKDg1JSkgc2F0dXJhdGUoMTc5OSUpIGh1ZS1yb3RhdGUoMjAxZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMjYlKSBzZXBpYSg4NSUpIHNhdHVyYXRlKDE3OTklKSBodWUtcm90YXRlKDIwMWRlZykgYnJpZ2h0bmVzcyg4NiUpIGNvbnRyYXN0KDkwJSk7XFxufVxcblxcbi5sb2FkaW5nLWdpZiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRvcDogNDglO1xcbiAgbGVmdDogNDglO1xcbn1cXG5cXG4jYWxlcnQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMSU7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSg3NCUpIHNhdHVyYXRlKDQ4OTYlKSBodWUtcm90YXRlKDMzN2RlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDg2JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoNzQlKSBzYXR1cmF0ZSg0ODk2JSkgaHVlLXJvdGF0ZSgzMzdkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg4NiUpO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI2FsZXJ0LWJ0bjpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxNGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxNGRlZyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDQwMG1zIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDQwMG1zIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgbGluZWFyLCAtd2Via2l0LXRyYW5zZm9ybSA0MDBtcyBsaW5lYXI7XFxufVxcblxcbiNhbGVydC1idG46aG92ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXG4gIGJvdHRvbTogLTMuNWVtO1xcbiAgbGVmdDogLTVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbiNhbGVydC1kZXNjIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDIwJTtcXG4gIHRvcDogMjAlO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IDYwdmg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHotaW5kZXg6IDExO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDEsIDEsIDEsIDAuMyk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDEsIDEsIDEsIDAuMyk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDkwMG1zIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gOTAwbXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gOTAwbXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gOTAwbXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDkwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jYWxlcnQtZGVzYyAjYWxlcnQtaGVhZGVyIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2RhM2YzZjtcXG59XFxuXFxuI2FsZXJ0LWRlc2MgI2FsZXJ0LWhlYWRlciBwIHtcXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xcbn1cXG5cXG4jYWxlcnQtZGVzYyAjYWxlcnQtZmxleCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XFxufVxcblxcbiNhbGVydC1kZXNjICNhbGVydC1mbGV4ICNhbGVydC1ldmVudHMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJhY2tncm91bmQ6ICNlZGEzYTM7XFxuICBjb2xvcjogIzIyMzgyZDtcXG59XFxuXFxuI2FsZXJ0LWRlc2MgI2FsZXJ0LWZsZXggI2FsZXJ0LWV2ZW50cyBkaXYge1xcbiAgcGFkZGluZzogNnB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMzgyZDtcXG59XFxuXFxuI2FsZXJ0LWRlc2MgI2FsZXJ0LWZsZXggI2FsZXJ0LXRleHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwJSk7XFxuICBiYWNrZ3JvdW5kOiAjZTY4ZjhmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNhbGVydC1kZXNjICNhbGVydC1mbGV4ICNhbGVydC10ZXh0IHAge1xcbiAgcGFkZGluZzogMTVweCAyOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuI2FsZXJ0LWRlc2MgI2FsZXJ0LWZsZXggI2FsZXJ0LXRleHQgI2FsZXJ0LWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzJTtcXG4gIGJvdHRvbTogNSU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWRhM2EzO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmV2ZW50LXR4dHM6aG92ZXIsICNhbGVydC1jbG9zZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5zbGlkZURvd24ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yOTk5cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yOTk5cHgpO1xcbn1cXG5cXG4uc2xpZGVEb3duIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zbGlkZVVwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAyOTk5cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDI5OTlweCk7XFxufVxcblxcbi5zbGlkZVVwIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5hY3RpdmUtc3RhdGUge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTAwcHggMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTAwcHggMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1hbGVydC5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FsZXJ0LmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9hbGVydC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXFCQTs7O0VBR0ksMkJBQW1CO1VBQ1osbUJBQUc7RUFDVixVQUFTO0VBQ1osU0FBQTtBQ3BCRDs7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QUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrRUFBa0U7VUFDMUQsMERBQTBEO0FBQ3BFOztBQUVBO0VBQ0UsMENBQTBDO1VBQ2xDLGtDQUFrQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlDQUF5QztVQUNqQyxpQ0FBaUM7QUFDM0M7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrRUFBa0U7VUFDMUQsMERBQTBEO0FBQ3BFO0FBQ0Esb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZy10b3A6IDlweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxOXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIC1vLW9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xcbiAgICAgb2JqZWN0LXBvc2l0aW9uOiBib3R0b207XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMSwgMSwgMSwgMC4zKTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jbWFpbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA2dmg7XFxuICBiYWNrZ3JvdW5kOiAjMmIyNDE2O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxMGRlZywgIzJiMjQxNiAwJSwgIzk1Njg1ZCA0MSUsICNkZWIwOWMgODQlKTtcXG59XFxuXFxuI2ZvcmVjYXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdXBwZXItbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA2OHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN1cHBlci1tYWluID4gZGl2IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKioqKioqKioqKiBEQUlMWSBXRUFUSEVSIFNFQ1RJT04gKioqKioqKioqL1xcbiNkYWlseS1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA2OHZoO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyOCU7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxufVxcblxcbiNkYWlseS1tYWluIC5kYWlseS13cmFwcGVycyAuZGFpbHktbG93ZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNkYWlseS1tYWluIC5kYWlseS13cmFwcGVycyAuZGFpbHktbG93ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMgLmRhaWx5LWxvd2VyIGRpdiBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmRhaWx5LXRlbXBzIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAxLjh2dywgM3JlbSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRhaWx5LWZlZWxzIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmRhaWx5LWNvbnRlbnRzIHtcXG4gIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi8qKioqKioqQ1VSUkVOVCBXRUFUSEVSIFNFQ1RJT04gKioqKioqKi9cXG4jY3VycmVudC1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2N1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IGNsYW1wKDQuMnJlbSwgMTEuNXZ3LCA1MHJlbSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIgI2N1cnJlbnQtdXBwZXItbGVmdCA+ICoge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCA0cmVtKTtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIgI2N1cnJlbnQtdXBwZXItbGVmdCA+ICogI2N1cnJlbnQtbG9jYXRpb24ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4jY3VycmVudC11cHBlciAjY3VycmVudC11cHBlci1yaWdodCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAydnc7XFxufVxcblxcbiNjdXJyZW50LWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uY3VycmVudC1jb250ZW50cyB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMnZ3LCAzcmVtKTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5jaG9vc2UtdGVtcCB7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjdXJyZW50LWxvd2VyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjdXJyZW50LWxvd2VyICNjdXJyZW50LWxvd2VyLXJpZ2h0ID4gKiB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi8qKioqKioqKkhPVVJMWSBXRUFUSEVSIFNFQ1RJT04gKioqKioqKioqL1xcbiNsb3dlci1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktY29udGVudHMgPiAqIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDEuMXZ3LCAyLjRlbSk7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktaWNvbnMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktdGVtcCwgI2xvd2VyLW1haW4gLmhybHktdGltZSB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNXZ3LCA0cmVtKTtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktbG93ZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jbG93ZXItbWFpbiAuaHJseS1sb3dlciBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb3dlci1tYWluID4gZGl2IHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmNob29zZS10ZW1wOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmNob29zZS10ZW1wIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKiBJQ09OUy9HSUYgKioqKioqKioqKioqL1xcbiN1c2VyLWxvY2F0aW9uIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICBtYXJnaW46IDAgMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3VzZXItbG9jYXRpb246aG92ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXG4gIGJvdHRvbTogLTMuNWVtO1xcbiAgbGVmdDogLTVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbi5pbWctZmVlbHMge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5pbWctc3BkLCAuaW1nLWRlZyB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLmltZy1odW1pZGl0eSB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDI2JSkgc2VwaWEoODUlKSBzYXR1cmF0ZSgxNzk5JSkgaHVlLXJvdGF0ZSgyMDFkZWcpIGJyaWdodG5lc3MoODYlKSBjb250cmFzdCg5MCUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgyNiUpIHNlcGlhKDg1JSkgc2F0dXJhdGUoMTc5OSUpIGh1ZS1yb3RhdGUoMjAxZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKTtcXG59XFxuXFxuLmxvYWRpbmctZ2lmIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgdG9wOiA0OCU7XFxuICBsZWZ0OiA0OCU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzI0cHgpIHtcXG4gICNhbGVydC1kZXNjIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICNhbGVydC1kZXNjIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICAuaW1nLXNwZCwgLmltZy1kZWcge1xcbiAgICB3aWR0aDogMTlweDtcXG4gICAgaGVpZ2h0OiAxOXB4O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICB9XFxuICAuaW1nLWh1bWlkaXR5IHtcXG4gICAgd2lkdGg6IDE5cHg7XFxuICAgIGhlaWdodDogMTlweDtcXG4gIH1cXG4gIC5pbWctZmVlbHMge1xcbiAgICB3aWR0aDogMTAuNXB4O1xcbiAgICBoZWlnaHQ6IDIxcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgI2FsZXJ0LWRlc2Mge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAuaW1nLXNwZCwgLmltZy1kZWcge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICB9XFxuICAuaW1nLWh1bWlkaXR5IHtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gIH1cXG4gIC5pbWctZmVlbHMge1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDNweCkge1xcbiAgI2FsZXJ0LWRlc2Mge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDI1NjBweCkgYW5kIChtaW4taGVpZ2h0OiAxOTIwcHgpIHtcXG4gIC5kYWlseS1pY29ucywgLmhybHktaWNvbnMge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICB9XFxuICAuaHJseS1jb250ZW50cyA+ICoge1xcbiAgICBwYWRkaW5nOiAxMnB4IDA7XFxuICB9XFxufVxcblxcbi8qKioqKioqKioqKiAgSEVJR0hUUyAgKioqKioqKioqKiovXFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MDBweCkge1xcbiAgLmRhaWx5LWljb25zLCAuaHJseS1pY29ucyB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcXG4gICN1cHBlci1tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjdXBwZXItbWFpbiBkaXYge1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gIH1cXG4gICNkYWlseS1tYWluIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5ocmx5LWNvbnRlbnRzOm50aC1jaGlsZCg1KSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuaHJseS1jb250ZW50czpudGgtY2hpbGQoNikge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmhybHktY29udGVudHM6bnRoLWNoaWxkKDcpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5ocmx5LWNvbnRlbnRzOm50aC1jaGlsZCg4KSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuaHJseS1jb250ZW50czpudGgtY2hpbGQoOSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1tZWRpYV9xdWVyaWVzLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWVkaWFfcXVlcmllcy5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWVkaWFfcXVlcmllcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXFCQTs7O0VBR0ksMkJBQW1CO1VBQ1osbUJBQUc7RUFDVixVQUFTO0VBQ1osU0FBQTtBQ3BCRDs7QUFFQTtFRHFCSSxnQ0FBWTtFQUNaLFlBQUE7RUFDQSx5QkFBc0I7RUFDdEIsc0JBQWlCO0VBQ2pCLHFCQWpDZTtNQWtDbEIsaUJBQUE7RUNuQkMsZUFBZTtBRG9CakI7O0FDakJBO0VEb0JJLGdCQUFZO0VBQ2Ysb0JBQUE7RUNsQkMsa0JBQWtCO0FEbUJwQjs7QUNoQkE7RURtQkksZUFBWTtFQUNaLFlBQUE7RUFDSCxvQkFBQTtLQ2pCSSxpQkFBaUI7RURtQnRCLDBCQUFRO0tBQ0osdUJBQWM7QUNqQmxCOztBRG1CQTtFQUNJLGNBQWE7QUNoQmpCOztBQUVBO0VEa0JJLGFBQVc7RUFDWCxrQkFBWTtFQUNaLE9BQUE7RUFDQSxNQUFBO0VBQ0gsV0FBQTtFQ2hCQyxZQUFZO0VEaUJkLDhCQUFZO0VBQ1IsV0FBVztBQ2ZmOztBQUVBO0VBQ0UsV0FBVztFRGdCYixtQkFBZ0I7RUFDWix5RUFBYTtBQ2RqQjs7QURnQkE7RUFDSSxhQUFhO0FDYmpCOztBQUVBO0VEZUMsb0JBQUE7RUNiQyxvQkFBb0I7RURjdEIsYUFBYztFQUNWLDhCQUFVO0VBQ1YsNkJBQWU7TUFDbEIsdUJBQUE7VUNaUyxtQkFBbUI7RURjN0IsWUFBQTtFQUNBLFdBQVc7QUNaWDs7QUFFQTtFRGNJLFVBakZnQjtFQWtGaEIsZUFBYTtBQ1pqQjs7QURPQSw0Q0FPbUI7QUNYbkI7RURhUSxvQkFBZ0I7RUFDaEIsb0JBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBVTtNQUNWLGVBQVc7RUFjZCx5QkFBQTtNQ3hCQyw2QkFBNkI7RURIbkMsWUFPSTtFQVFRLHlCQUFhO01BQ2Isc0JBQWlCO1VBQ1YsbUJBQUk7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RSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0EsNENBQTRDXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZy10b3A6IDlweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxOXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIC1vLW9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xcbiAgICAgb2JqZWN0LXBvc2l0aW9uOiBib3R0b207XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMSwgMSwgMSwgMC4zKTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jbWFpbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA2dmg7XFxuICBiYWNrZ3JvdW5kOiAjMmIyNDE2O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxMGRlZywgIzJiMjQxNiAwJSwgIzk1Njg1ZCA0MSUsICNkZWIwOWMgODQlKTtcXG59XFxuXFxuI2ZvcmVjYXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdXBwZXItbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA2OHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN1cHBlci1tYWluID4gZGl2IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKioqKioqKioqKiBEQUlMWSBXRUFUSEVSIFNFQ1RJT04gKioqKioqKioqL1xcbiNkYWlseS1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA2OHZoO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyOCU7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxufVxcblxcbiNkYWlseS1tYWluIC5kYWlseS13cmFwcGVycyAuZGFpbHktbG93ZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNkYWlseS1tYWluIC5kYWlseS13cmFwcGVycyAuZGFpbHktbG93ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGFpbHktbWFpbiAuZGFpbHktd3JhcHBlcnMgLmRhaWx5LWxvd2VyIGRpdiBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmRhaWx5LXRlbXBzIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAxLjh2dywgM3JlbSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRhaWx5LWZlZWxzIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmRhaWx5LWNvbnRlbnRzIHtcXG4gIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi8qKioqKioqQ1VSUkVOVCBXRUFUSEVSIFNFQ1RJT04gKioqKioqKi9cXG4jY3VycmVudC1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2N1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IGNsYW1wKDQuMnJlbSwgMTEuNXZ3LCA1MHJlbSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIgI2N1cnJlbnQtdXBwZXItbGVmdCA+ICoge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCA0cmVtKTtcXG59XFxuXFxuI2N1cnJlbnQtdXBwZXIgI2N1cnJlbnQtdXBwZXItbGVmdCA+ICogI2N1cnJlbnQtbG9jYXRpb24ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4jY3VycmVudC11cHBlciAjY3VycmVudC11cHBlci1yaWdodCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAydnc7XFxufVxcblxcbiNjdXJyZW50LWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uY3VycmVudC1jb250ZW50cyB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMnZ3LCAzcmVtKTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5jaG9vc2UtdGVtcCB7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjdXJyZW50LWxvd2VyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjdXJyZW50LWxvd2VyICNjdXJyZW50LWxvd2VyLXJpZ2h0ID4gKiB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi8qKioqKioqKkhPVVJMWSBXRUFUSEVSIFNFQ1RJT04gKioqKioqKioqL1xcbiNsb3dlci1tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktY29udGVudHMgPiAqIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDEuMXZ3LCAyLjRlbSk7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktaWNvbnMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktdGVtcCwgI2xvd2VyLW1haW4gLmhybHktdGltZSB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNXZ3LCA0cmVtKTtcXG59XFxuXFxuI2xvd2VyLW1haW4gLmhybHktbG93ZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jbG93ZXItbWFpbiAuaHJseS1sb3dlciBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb3dlci1tYWluID4gZGl2IHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmNob29zZS10ZW1wOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmNob29zZS10ZW1wIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKiBJQ09OUy9HSUYgKioqKioqKioqKioqL1xcbiN1c2VyLWxvY2F0aW9uIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICBtYXJnaW46IDAgMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3VzZXItbG9jYXRpb246aG92ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXG4gIGJvdHRvbTogLTMuNWVtO1xcbiAgbGVmdDogLTVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbi5pbWctZmVlbHMge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5pbWctc3BkLCAuaW1nLWRlZyB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLmltZy1odW1pZGl0eSB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDI2JSkgc2VwaWEoODUlKSBzYXR1cmF0ZSgxNzk5JSkgaHVlLXJvdGF0ZSgyMDFkZWcpIGJyaWdodG5lc3MoODYlKSBjb250cmFzdCg5MCUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgyNiUpIHNlcGlhKDg1JSkgc2F0dXJhdGUoMTc5OSUpIGh1ZS1yb3RhdGUoMjAxZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKTtcXG59XFxuXFxuLmxvYWRpbmctZ2lmIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyM3B4O1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgdG9wOiA0NSU7XFxuICBsZWZ0OiA1MCU7XFxufVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXFCQTs7O0VBR0ksMkJBQW1CO1VBQ1osbUJBQUc7RUFDVixVQUFTO0VBQ1osU0FBQTtBQ3BCRDs7QUFFQTtFRHFCSSxnQ0FBWTtFQUNaLFlBQUE7RUFDQSx5QkFBc0I7RUFDdEIsc0JBQWlCO0VBQ2pCLHFCQWpDZTtNQWtDbEIsaUJBQUE7RUNuQkMsZUFBZTtBRG9CakI7O0FDakJBO0VEb0JJLGdCQUFZO0VBQ2Ysb0JBQUE7RUNsQkMsa0JBQWtCO0FEbUJwQjs7QUNoQkE7RURtQkksZUFBWTtFQUNaLFlBQUE7RUFDSCxvQkFBQTtLQ2pCSSxpQkFBaUI7RURtQnRCLDBCQUFRO0tBQ0osdUJBQWM7QUNqQmxCOztBRG1CQTtFQUNJLGNBQWE7QUNoQmpCOztBQUVBO0VEa0JJLGFBQVc7RUFDWCxrQkFBWTtFQUNaLE9BQUE7RUFDQSxNQUFBO0VBQ0gsV0FBQTtFQ2hCQyxZQUFZO0VEaUJkLDhCQUFZO0VBQ1IsV0FBVztBQ2ZmOztBQUVBO0VBQ0UsV0FBVztFRGdCYixtQkFBZ0I7RUFDWix5RUFBYTtBQ2RqQjs7QURnQkE7RUFDSSxhQUFhO0FDYmpCOztBQUVBO0VEZUMsb0JBQUE7RUNiQyxvQkFBb0I7RURjdEIsYUFBYztFQUNWLDhCQUFVO0VBQ1YsNkJBQWU7TUFDbEIsdUJBQUE7VUNaUyxtQkFBbUI7RURjN0IsWUFBQTtFQUNBLFdBQVc7QUNaWDs7QUFFQTtFRGNJLFVBakZnQjtFQWtGaEIsZUFBYTtBQ1pqQjs7QURPQSw0Q0FPbUI7QUNYbkI7RURhUSxvQkFBZ0I7RUFDaEIsb0JBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBVTtNQUNWLGVBQVc7RUFjZCx5QkFBQTtNQ3hCQyw2QkFBNkI7RURIbkMsWUFPSTtFQVFRLHlCQUFhO01BQ2Isc0JBQWlCO1VBQ1YsbUJBQUk7QUNUdkI7O0FEUkE7RUFtQmdCLG9CQUFhO0VBQ2Isb0JBQWdCO0VBS25CLGFBQUE7RUNYWCw0QkFBNEI7RURkOUIsNkJBY1E7TUFRWSwwQkFBYTtVQUNiLHNCQUFtQjtFQUN0Qix3QkFBQTtNQ0xYLHFCQUFxQjtVRFUzQix1QkFBWTtFQUNSLHlCQUFXO01BQ1gsc0JBQWdCO1VBQ1QsbUJBQU07RUFDaEIsVUFBQTtFQ1JDLGlDQUFpQztBRFNuQzs7QUNOQTtFQUNFLG9CQUFvQjtFRFF0QixvQkFBZTtFQUNYLGFBQWE7RUFDaEIseUJBQUE7TUNOSyw2QkFBNkI7RURRbkMsV0FBQTtBQUNBOztBQ0xBO0VEU0ksb0JBQWlCO0VBQ3BCLG9CQUFBO0VDUEMsYUFBYTtFRFFmLDRCQUFhO0VBQ1QsNkJBQVc7TUFDWCwwQkFBa0I7VUFDVixzQkFBTTtBQ05sQjs7QURRQTtFQUNJLG9CQUFhO0VBQ2Isb0JBQWlCO0VBY3BCLGFBQUE7RUNsQkMsOEJBQThCO0VERWhDLDZCQUdJO01BQ0ksdUJBQVc7VUFLZCxtQkFBQTtBQ1BMOztBQUVBO0VER1kscUNBQXVCO0VBQzFCLGdCQUFBO0VDRFAsYUFBYTtBRFBmOztBQ1VBO0VER1EsWUFBVztBQ0RuQjs7QUFFQTtFRElBLGFBQWM7QUNGZDs7QUFFQSx1Q0RHQztBQ0ZEO0VER0Esb0JBQWlCO0VBQ2Isb0JBQVc7RUFDWCxhQUFhO0VBQ2IsNEJBQWU7RUFDbEIsNkJBQUE7TUNESywwQkFBMEI7VURFaEMsc0JBQWE7RUFDVCx5QkFBZTtNQUNmLDZCQUFlO0FDQW5COztBREVBO0VBQ0ksdUNBQWE7RUFDYixrQkFBaUI7RUFJcEIsY0FBQTtBQ0ZEOztBQUVBO0VEREssb0JBQUE7RUNHSCxvQkFBb0I7RURBdEIsYUFBQTtFQUNBLHlCQUFXO01BQ1Asc0JBQWE7VUFDYiw4QkFBbUI7QUNFdkI7O0FBRUE7RUFDRSxxQ0FBcUM7QURQdkM7O0FDVUE7RUREUSxnQkFBZTtFQUNsQix1QkFBQTtBQ0dMOztBQUVBO0VERlEsb0JBQWM7RUFDakIsb0JBQUE7RUNJSCxhQUFhO0VEbEJmLHdCQUFBO01BZ0JRLHFCQUFlO1VBQ2YsdUJBQVc7RUFDZCx5QkFBQTtNQ0tDLHNCQUFzQjtVRHZCNUIsbUJBbUJlO0VBQ1AsY0FBYTtBQ01yQjs7QUFFQTtFRDVCQSxjQW1CSTtFQUlRLGdCQUFhO0FDUXpCOztBQUVBO0VETEEsbUNBQWtCO0VBQ2QsZ0JBQVk7RUFDWixlQUFlO0FDT25COztBRExBO0VBQ0ksZUFBWTtFQUNmLGVBQUE7QUNRRDs7QUFFQTtFRFBJLG9CQUFrQjtFQUNsQixvQkFBa0I7RUFDckIsYUFBQTtFQ1NDLHlCQUF5QjtNRFAzQixzQkFBQTtVQUNBLDhCQUFjO0FDU2Q7O0FBRUE7RURQQyxlQUFBO0FDU0Q7O0FBRUEseUNEN05zQjtBQzhOdEI7RUQ1Tkksb0JBQWM7RUFDZCxvQkFBVTtFQUNWLGFBQUE7RUFDQSw4QkFBWTtFQUNaLDZCQUFtQjtNQUNuQix1QkFBZTtVQUNmLG1CQWxCeUI7RUFnTzVCLFlBQUE7RUNpQkMsV0FBVztBRGhCYjs7QUNtQkE7RURoQkMsb0JBQUE7RUNrQkMsb0JBQW9CO0VEakJ0QixhQUFVO0VBQ04sc0NBQVc7RUFDWCx3QkFBWTtNQUNaLHFCQUFZO1VBQ2YsdUJBQUE7QUNtQkQ7O0FBRUE7RURsQkMsY0FBQTtFQ29CQyxjQUFjO0FEbkJoQjs7QUNzQkE7RURuQkksZUFBWTtFQUNaLG1DQUFRO0FDcUJaOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IseUJBQXlCO01BQ3JCLDZCQUE2QjtBQUNuQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHlCQUF5QjtNQUNyQixzQkFBc0I7VUFDbEIsbUJBQW1CO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO01BQ2Ysb0JBQW9CO1VBQ2hCLFlBQVk7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLDZCQUE2QjtVQUNyQixxQkFBcUI7RUFDN0IsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVHQUF1RztVQUMvRiwrRkFBK0Y7QUFDekc7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBQ0Esb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWxlcnQuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZWRpYV9xdWVyaWVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIG1vZHVsZXNcbmltcG9ydCBmZXRjaERhdGEgZnJvbSAnLi9tb2R1bGVzL2ZldGNoX2RhdGEuanMnO1xuaW1wb3J0IERPTSBmcm9tICcuL21vZHVsZXMvZWxlbWVudHMuanMnO1xuaW1wb3J0IG1hbmFnZSBmcm9tICcuL21vZHVsZXMvaGVscGVycy5qcyc7XG5pbXBvcnQge1xuXHRjaGVja1RlbXBVbml0LFxuXHR0b2dnbGVUZW1wLFxuXHRjb252ZXJ0VGVtcCxcblx0d2luZFNwZWVkVG9NUEgsXG5cdHdpbmREZWdUb0Rpcixcbn0gZnJvbSAnLi9tb2R1bGVzL3VuaXRzLmpzJztcbmltcG9ydCB7XG5cdGNvbnZlcnRUWixcblx0Zm9ybWF0SG91ck1pbixcblx0Zm9ybWF0SG91ck9ubHksXG5cdGZvcm1hdEZ1bGxEYXRlLFxuXHRmb3JtYXRTaG9ydERhdGUsXG5cdGdldExvY2FsSG91cnMsXG59IGZyb20gJy4vbW9kdWxlcy90aW1lLmpzJztcbmltcG9ydCB7IGdldEFyZWFGcm9tQ29vcmRpbmF0ZXMgfSBmcm9tICcuL21vZHVsZXMvY3VycmVudF9sb2NhdGlvbi5qcyc7XG5pbXBvcnQgeyBnZXRBbGVydCwgdG9nZ2xlRGlzcGxheSB9IGZyb20gJy4vbW9kdWxlcy9hbGVydC5qcyc7XG5pbXBvcnQgYmdNYW5pcHVsYXRpb24gZnJvbSAnLi9tb2R1bGVzL2JnX2NoYW5nZS5qcyc7XG5cbi8vIHN0eWxlc1xuaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9hbGVydC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tZWRpYV9xdWVyaWVzLmNzcyc7XG5cbi8vIGltYWdlc1xuaW1wb3J0IGljb25IdW1pZGl0eSBmcm9tICcuL2ltZy9odW1pZGl0eS5wbmcnO1xuaW1wb3J0IGljb25GZWVsc0xpa2UgZnJvbSAnLi9pbWcvZmVlbHNfbGlrZS5zdmcnO1xuaW1wb3J0IGljb25XaW5kU3BkIGZyb20gJy4vaW1nL3dpbmQtc29saWQuc3ZnJztcbmltcG9ydCBpY29uQ29tcGFzcyBmcm9tICcuL2ltZy9jb21wYXNzLXJlZ3VsYXIuc3ZnJztcblxuLy8gdGhlIG9ubHkgZ2xvYmFsIHZhcmlhYmxlXG5sZXQgd2VhdGhlckRhdGE7IC8vIHVzZWQgbGF0ZXIgdG8gYXNzaW5nIGRhdGEgb24gdGhpcyB2YXJcblxuLy8gZGlzcGxheSBkZWZhdWx0XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHRkZWZhdWx0TG9jYXRpb24oKTtcbn07XG5cbi8vIGFzayB0aGUgdXNlciBmb3IgYSBwZXJtaXNzaW9uIHRvIGNvbGxlY3QgdGhlIGZvcm1lcidzIGNvb3JkaW5hdGVzXG5ET00udXNlckxvY2F0aW9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcblx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGdldENvb3JkaW5hdGVzRnJvbVVzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKCdHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3NlcicpO1xuXHR9XG59O1xuXG4vLyBnZXQgdGhlIHVzZXIncyBjdXJyZW50IGxvY2F0aW9uXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlc0Zyb21Vc2VyKHBvcykge1xuXHRET00ubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdGNvbnN0IGxhdCA9IHBvcy5jb29yZHMubGF0aXR1ZGU7XG5cdGNvbnN0IGxvbiA9IHBvcy5jb29yZHMubG9uZ2l0dWRlO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hDb29yZGluYXRlc1RvR2V0QXJlYShsYXQsIGxvbik7XG5cdGFzc2lnblVzZXJMb2NhdGlvbihkYXRhKTtcbn1cblxuLy8gdXNpbmcgdGhlIGNvb3JkaW5hdGVzIHRvIGdldCB0aGUgcHJvcGVyIGFyZWFcbmZ1bmN0aW9uIGZldGNoQ29vcmRpbmF0ZXNUb0dldEFyZWEobGF0LCBsb24pIHtcblx0ZmV0Y2hEYXRhLnNldENvb3JkaW5hdGVzKGxhdCwgbG9uKTtcblx0cmV0dXJuIGdldEFyZWFGcm9tQ29vcmRpbmF0ZXMoeyBsYXQsIGxvbiB9KTtcbn1cbi8vIGFzc2lnbiB0aGUgdXNlcidzIGxvY2F0aW9uIGFzIGN1cnJlbnRcbmFzeW5jIGZ1bmN0aW9uIGFzc2lnblVzZXJMb2NhdGlvbihkYXRhKSB7XG5cdGxldCBhcmVhTmFtZSA9IGxvY2F0aW9uTmFtZUJ5QVBJKGRhdGEpO1xuXHRmZXRjaERhdGEuc2V0QXJlYU5hbWUoYXJlYU5hbWUpO1xuXHR0cnkge1xuXHRcdGF3YWl0IGZldGNoV2VhdGhlckRhdGEoZmV0Y2hEYXRhLmdldFdlYXRoZXJVUkwoKSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZX1gKTtcblx0fVxufVxuLy8gZGlzYWxsb3cgYW55IHNwYWNlc1xuZnVuY3Rpb24gaGFzU3BhY2VzKHN0cikge1xuXHRpZiAoc3RyLmluZGV4T2YoJyAnKSAhPT0gLTEpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbi8vIHRoZSBvdXRwdXQgb2YgbG9jYXRpb24gbmFtZSBpbiBhY2NvcmRhbmNlIHRvIEFQSVxuZnVuY3Rpb24gbG9jYXRpb25OYW1lQnlBUEkoZGF0YSkge1xuXHRsZXQgYXJlYU5hbWU7XG5cdC8vIG1ha2Ugc3VyZSBjaXR5IGRvZXMgbm90IGhhdmUgYW55IHNwYWNlIGFuZCBzdGF0ZSBpcyBub3QgYW4gb2JqZWN0XG5cdGlmICgoZGF0YS5jaXR5ICYmIGhhc1NwYWNlcyhkYXRhLmNpdHkpKSAmJiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnc3RhdGUnKSB8fCB0eXBlb2YgZGF0YS5zdGF0ZSAhPT0gJ29iamVjdCcpKSB7XG5cdFx0YXJlYU5hbWUgPSBgJHtkYXRhLmNpdHl9LCAke2RhdGEuc3RhdGV9YDtcblx0XHRpZiAoKHR5cGVvZiBkYXRhLnN0YXRlID09PSAnb2JqZWN0JyAmJiBkYXRhLnByb3YpKSB7XG5cdFx0XHRhcmVhTmFtZSA9IGAke2RhdGEuY2l0eX0sICR7ZGF0YS5wcm92fWA7XG5cdFx0fSAvLyB0aGUgcmVzdCBhcmUgYWx0ZXJuYXRpdmVzIGlmIHNvbWUgZGF0YSBwcm9wZXJ0eSBkb2Vzbid0IGV4aXN0IG9yIGFuIG9iamVjdFxuXHR9IGVsc2UgaWYgKGRhdGEuc3RhZGRyZXNzICYmIGRhdGEuc3RhdGUpIHtcblx0XHRhcmVhTmFtZSA9IGAke2RhdGEuc3RhZGRyZXNzfSwgJHtkYXRhLnN0YXRlfWA7XG5cdH0gZWxzZSBpZiAoZGF0YS5wcm92KSB7XG5cdFx0YCR7ZGF0YS5zdGFkZHJlc3N9LCAke2RhdGEucHJvdn1gXG5cdH0gZWxzZSB7XG5cdFx0YXJlYU5hbWUgPSBkYXRhLnJlZ2lvbjtcblx0fVxuXHRyZXR1cm4gYXJlYU5hbWU7XG59XG4vLyB1c2UgZGVmYXVsdCBsb2NhdGlvbiBpZiB0aGUgdXNlciBkaXNhbGxvdyB0aGUgaHVtYmxlIHBlcm1pc3Npb25cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRMb2NhdGlvbigpIHtcblx0Y29uc3QgbGF0ID0gOTA7XG5cdGNvbnN0IGxvbiA9IDA7XG5cdGZldGNoRGF0YS5zZXRDb29yZGluYXRlcyhsYXQsIGxvbik7XG5cdGZldGNoRGF0YS5zZXRBcmVhTmFtZSgnTm9ydGggUG9sZScpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhLmdldFdlYXRoZXJVUkwoKTtcblx0dHJ5IHtcblx0XHRhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGRhdGEpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5sb2coYEVycm9yOiAke2V9YCk7XG5cdH1cbn1cblxuLy8gc3VibWl0IHRoZSBmb3JtIHRvIGdldCB0aGUgaW5wdXQgb2YgY29vcmRpbmF0ZXMgYW5kIG92ZXJ3cml0ZSB0byB0aGUgcmVzcGVjdGl2ZVxuLy8gdmFyaWFibGVzLCBhcHBlbmRlZCB3aXRoaW4gdGhlIHdlYXRoZXIgdXJsLlxuRE9NLmZvcm0ub25zdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdERPTS5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0ZmV0Y2hEYXRhLnNldFNlYXJjaEFyZWEoRE9NLmxvY2F0aW9uSW5wdXQoKSk7XG5cdGZldGNoRGF0YS5zZXRBcmVhTmFtZShET00uc3RySW5wdXQoKSk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZ2V0Q29vcmRpbmF0ZXMoZmV0Y2hEYXRhLmdldExvY2F0aW9uVVJMKCkpO1xuXHR9XG5cdGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0fVxufTtcblxuRE9NLmFsZXJ0Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVEaXNwbGF5KTtcbkRPTS5hbGVydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZURpc3BsYXkpO1xuLy8gZ2V0IHRoZSBjb29yZGluYXRlc1xuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoZGF0YSkge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGEsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdGZldGNoRGF0YS5zZXRDb29yZGluYXRlcyhsb2NhdGlvbkRhdGFbMF0ubGF0LCBsb2NhdGlvbkRhdGFbMF0ubG9uKTtcblx0Y29uc3QgZGF0YUZvckFyZWFOYW1lID0gYXdhaXQgZmV0Y2hDb29yZGluYXRlc1RvR2V0QXJlYShmZXRjaERhdGEuZ2V0TGF0KCksIGZldGNoRGF0YS5nZXRMb24oKSk7XG5cdGNvbnN0IGFyZWFOYW1lQnlBUEkgPSBsb2NhdGlvbk5hbWVCeUFQSShkYXRhRm9yQXJlYU5hbWUpO1xuXHRpZiAoYXJlYU5hbWVCeUFQSSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0ZmV0Y2hEYXRhLnNldEFyZWFOYW1lKERPTS5zdHJJbnB1dCgpKTtcblx0fSBlbHNlIHtcblx0XHRmZXRjaERhdGEuc2V0QXJlYU5hbWUoYXJlYU5hbWVCeUFQSSk7XG5cdH1cblx0dHJ5IHtcblx0XHRhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGZldGNoRGF0YS5nZXRXZWF0aGVyVVJMKCkpO1xuXHR9XG5cdGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5sb2coYEVycm9yOiAke2V9YCk7XG5cdH1cbn1cblxuLy8gZmV0Y2ggdGhlIGRhdGEgYW5kIGRpc3BsYXkgaXRcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEoZGF0YSkge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGEsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHR3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0ZGlzcGxheUluZm8oKTtcblx0aWYgKERPTS5tb2RhbC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG5cdFx0RE9NLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblx0Z2V0QWxlcnQod2VhdGhlckRhdGEpOyAvLyBnZXQgYWxlcnQgZGF0YVxufVxuXG5jb25zdCBnZXRIb3VybHlEYXRhID0gKHBhcmVudCkgPT4ge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuXHRcdGRpc3BsYXlIb3VybHlPdXRwdXQoaSwgcGFyZW50KTtcblx0fVxufTtcblxuLy8gZGlzcGxheSBob3VybHkgY29udGVudHNcbmZ1bmN0aW9uIGRpc3BsYXlIb3VybHlPdXRwdXQoaSwgcGFyZW50KSB7XG5cdC8vIHRlbXBlcmF0dXJlIGRhdGEgZnJvbSBjdXJyZW50IG9iamVjdFxuXHRsZXQgeyB0ZW1wIH0gPSB3ZWF0aGVyRGF0YS5ob3VybHlbKGkgKyAxKSArIGldO1xuXHRsZXQgZmVlbHNMaWtlID0gd2VhdGhlckRhdGEuaG91cmx5WyhpICsgMSkgKyBpXS5mZWVsc19saWtlO1xuXG5cdGNvbnN0IGljb24gPSB3ZWF0aGVyRGF0YS5ob3VybHlbKGkgKyAxKSArIGldLndlYXRoZXJbMF0uaWNvbjtcblx0Y29uc3QgaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5ob3VybHlbKGkgKyAxKSArIGldLmh1bWlkaXR5ICsgJyUnO1xuXHRjb25zdCB7IHRpbWV6b25lIH0gPSB3ZWF0aGVyRGF0YTtcblx0Y29uc3QgZGF0ZSA9IGNvbnZlcnRUWihuZXcgRGF0ZSgpLCB0aW1lem9uZSk7XG5cblx0dGVtcCA9IGNvbnZlcnRUZW1wKHRlbXApO1xuXHRmZWVsc0xpa2UgPSBjb252ZXJ0VGVtcChmZWVsc0xpa2UpO1xuXG5cdC8vIERPTSBpbnN0YW5jZXNcblx0Y29uc3QgaG91cmx5TWFpbiA9IG1hbmFnZS5jcnRFbGVtZW50KCcnLCBgaHJseS1tYWluJHtpICsgMX1gLCAnaHJseS1jb250ZW50cycsICdkaXYnKTtcblx0Y29uc3QgaG91cmx5VGVtcCA9IG1hbmFnZS5jcnRFbGVtZW50KGAke3RlbXB9YCwgYGhybHktdGVtcCR7aSArIDF9YCwgJ2hybHktdGVtcCcsICdwJyk7XG5cblx0Y29uc3QgaG91cmx5SWNvbiA9IG1hbmFnZS5jcnRJbWcoZ2V0V2VhdGhlckljb24oaWNvbiksIGBocmx5LWljb24ke2kgKyAxfWAsICdocmx5LWljb25zJyk7XG5cdGNvbnN0IGhvdXJseVRpbWUgPSBtYW5hZ2UuY3J0RWxlbWVudChmb3JtYXRIb3VyT25seShkYXRlLCAoaSArIDEpICsgaSksIGBocmx5LXRpbWUke2kgKyAxfWAsICdocmx5LXRpbWUnLCAncCcpO1xuXG5cdGNvbnN0IGhvdXJseUxvd2VyID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdocmx5LWxvd2VyJywgJ2hybHktbG93ZXInLCAnZGl2Jyk7XG5cdGNvbnN0IGhvdXJseUh1bWlkaXR5V3JhcHBlciA9IG1hbmFnZS5jcnRFbGVtZW50KCcnLCAnaHJseS1odW1pZGl0eS13cmFwcGVyJywgJ2hybHktY29udGFpbmVyJywgJ2RpdicpO1xuXHRjb25zdCBob3VybHlIdW1pZGl0eSA9IG1hbmFnZS5jcnRFbGVtZW50KGAke2h1bWlkaXR5fSBgLCBgaHJseS1odW1pZGl0eSR7aSArIDF9YCwgJ2hybHktY29udGFpbmVyJywgJ3AnKTtcblx0Y29uc3QgaG91cmx5RmVlbHNXcmFwcGVyID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdocmx5LWZlZWxzLXdyYXBwZXInLCAnaHJseS1jb250YWluZXInLCAnZGl2Jyk7XG5cdGNvbnN0IGhvdXJseUZlZWxzID0gbWFuYWdlLmNydEVsZW1lbnQoYCAke2ZlZWxzTGlrZX1gLCBgaHJseS1mZWVscyR7aSArIDF9YCwgJ2hybHktY29udGFpbmVyJywgJ3AnKTtcblxuXHQvLyB1c2VkIGljb25zIGZyb20gaHR0cHM6Ly9pY29uczguY29tL2ljb25zL3NldC9odW1pZGl0eVxuXHRjb25zdCBpSHVtaWRpdHkgPSBtYW5hZ2UuY3J0SW1nKGljb25IdW1pZGl0eSwgJycsICdpbWctaHVtaWRpdHknKTtcblx0Y29uc3QgaUZlZWxzTGlrZSA9IG1hbmFnZS5jcnRJbWcoaWNvbkZlZWxzTGlrZSwgJycsICdpbWctZmVlbHMnKTtcblxuXHQvLyBhcHBlbmQgbG9zIGVsZW1lbnRvcyBkZSBmYW1pbGlhXG5cdHBhcmVudC5hcHBlbmQoaG91cmx5TWFpbik7XG5cdGhvdXJseUZlZWxzV3JhcHBlci5hcHBlbmQoaUZlZWxzTGlrZSwgaG91cmx5RmVlbHMpO1xuXHRob3VybHlIdW1pZGl0eVdyYXBwZXIuYXBwZW5kKGhvdXJseUh1bWlkaXR5LCBpSHVtaWRpdHkpO1xuXHRob3VybHlMb3dlci5hcHBlbmQoaG91cmx5RmVlbHNXcmFwcGVyLCBob3VybHlIdW1pZGl0eVdyYXBwZXIpO1xuXHRob3VybHlNYWluLmFwcGVuZChob3VybHlUaW1lLCBob3VybHlUZW1wLCBob3VybHlJY29uLCBob3VybHlMb3dlcik7XG59XG5cbmNvbnN0IGdldERhaWx5RGF0YSA9IChwYXJlbnQpID0+IHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcblx0XHRkaXNwbGF5RGFpbHlPdXRwdXQoaSwgcGFyZW50KTtcblx0fVxufTtcblxuZnVuY3Rpb24gZGlzcGxheURhaWx5T3V0cHV0KGksIHBhcmVudCkge1xuXHQvLyBET00gaW5zdGFuY2VzXG5cdC8vIHRlbXBlcmF0dXJlIGRhdGEgZnJvbSBjdXJyZW50IG9iamVjdFxuXHRsZXQgdGVtcCA9IHdlYXRoZXJEYXRhLmRhaWx5W2kgKyAxXS50ZW1wLm5pZ2h0O1xuXHRsZXQgZmVlbHNMaWtlID0gd2VhdGhlckRhdGEuZGFpbHlbaSArIDFdLmZlZWxzX2xpa2UubmlnaHQ7XG5cdHRlbXAgPSBjb252ZXJ0VGVtcCh0ZW1wKTtcblx0ZmVlbHNMaWtlID0gY29udmVydFRlbXAoZmVlbHNMaWtlKTtcblxuXHQvLyBnZXQgZGF0YSB3aXRoIG9iamVjdCBkZXN0cnVjdHVyaW5nXG5cdGNvbnN0IHsgaWNvbiB9ID0gd2VhdGhlckRhdGEuZGFpbHlbaSArIDFdLndlYXRoZXJbMF07XG5cdGNvbnN0IGh1bWlkaXR5ID0gYCR7d2VhdGhlckRhdGEuZGFpbHlbaSArIDFdLmh1bWlkaXR5fSVgO1xuXHRjb25zdCB7IHRpbWV6b25lIH0gPSB3ZWF0aGVyRGF0YTtcblxuXHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7IC8vIGdldCB0b2RheXMgZGF0ZVxuXHRkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAoaSArIDEpKTsgLy8gYWNjdW11bGF0ZSBkYXRlIGJ5IG9uZVxuXHRjb25zdCBsb2NhbERhdGUgPSBjb252ZXJ0VFooZGF0ZSwgdGltZXpvbmUpOyAvLyBnZXQgZGF0ZSBiYXNlZCBuIHRpbWV6b25lXG5cblx0Ly8gZ2V0IHdpbmQgc3BlZWQgYW5kIGRlZ3JlZVxuXHRjb25zdCBzcGVlZCA9IGAke3dpbmRTcGVlZFRvTVBIKHdlYXRoZXJEYXRhLmRhaWx5W2kgKyAxXS53aW5kX3NwZWVkKX0gbXBoIGA7XG5cdGNvbnN0IGRlZyA9IGAke3dpbmREZWdUb0Rpcih3ZWF0aGVyRGF0YS5kYWlseVtpICsgMV0ud2luZF9kZWcpfWA7XG5cblx0Y29uc3QgZGFpbHlXcmFwcGVyID0gbWFuYWdlLmNydEVsZW1lbnQoJycsIGBkYWlseS13cmFwcGVyJHtpICsgMX1gLCAnZGFpbHktd3JhcHBlcnMnLCAnZGl2Jyk7XG5cdGNvbnN0IGRhaWx5VGVtcCA9IG1hbmFnZS5jcnRFbGVtZW50KGAke3RlbXB9YCwgYGRhaWx5LXRlbXAke2kgKyAxfWAsICdkYWlseS10ZW1wcycsICdwJyk7XG5cblx0Y29uc3QgZGFpbHlGZWVscyA9IG1hbmFnZS5jcnRFbGVtZW50KGBGZWVscyBsaWtlOiAke2ZlZWxzTGlrZX1gLCBgZGFpbHktZmVlbHMke2kgKyAxfWAsICdkYWlseS1mZWVscycsICdwJyk7XG5cdGNvbnN0IGRhaWx5SWNvbiA9IG1hbmFnZS5jcnRJbWcoZ2V0V2VhdGhlckljb24oaWNvbiksIGBkYWlseS1pY29uJHtpICsgMX1gLCAnZGFpbHktaWNvbnMnKTtcblx0Y29uc3QgZGFpbHlEYXRlID0gbWFuYWdlLmNydEVsZW1lbnQoZm9ybWF0U2hvcnREYXRlKGxvY2FsRGF0ZSksIGBkYWlseS1kYXRlJHtpICsgMX1gLCAnZGFpbHktZGF0ZXMnLCAncCcpO1xuXG5cdGNvbnN0IGRhaWx5TG93ZXIgPSBtYW5hZ2UuY3J0RWxlbWVudCgnJywgJycsICdkYWlseS1sb3dlcicsICdkaXYnKTtcblx0Y29uc3QgZGFpbHlMb3dlckxlZnQgPSBtYW5hZ2UuY3J0RWxlbWVudCgnJywgJ2RhaWx5LWxvd2VyLWxlZnQnLCAnZGFpbHktY29udGFpbmVyJywgJ2RpdicpO1xuXHRjb25zdCBkYWlseUxvd2VyUmlnaHQgPSBtYW5hZ2UuY3J0RWxlbWVudCgnJywgJ2RhaWx5LWxvd2VyLXJpZ2h0JywgJ2RhaWx5LWNvbnRhaW5lcicsICdkaXYnKTtcblxuXHRjb25zdCBkYWlseUh1bWlkaXR5V3JhcHBlciA9IG1hbmFnZS5jcnRFbGVtZW50KCcnLCAnJywgJ2RhaWx5LWNvbnRhaW5lcicsICdkaXYnKTtcblx0Y29uc3QgZGFpbHlIdW1pZGl0eSA9IG1hbmFnZS5jcnRFbGVtZW50KGAke2h1bWlkaXR5fWAsIGBkYWlseS1odW1pZGl0eSR7aSArIDF9YCwgJ2RhaWx5LWNvbnRlbnRzJywgJ3AnKTtcblx0Y29uc3QgaUh1bWlkaXR5ID0gbWFuYWdlLmNydEltZyhpY29uSHVtaWRpdHksICcnLCAnaW1nLWh1bWlkaXR5Jyk7XG5cdGNvbnN0IGRhaWx5U3BkV3JhcHBlciA9IG1hbmFnZS5jcnRFbGVtZW50KCcnLCAnJywgJ2RhaWx5LWNvbnRhaW5lcicsICdkaXYnKTtcblx0Y29uc3QgZGFpbHlTcGQgPSBtYW5hZ2UuY3J0RWxlbWVudChzcGVlZCwgJ2RhaWx5LXNwZCcsICdkYWlseS1jb250ZW50cycsICdwJyk7XG5cdGNvbnN0IGlXaW5kU3BkID0gbWFuYWdlLmNydEltZyhpY29uV2luZFNwZCwgJycsICdpbWctc3BkJyk7XG5cdGNvbnN0IGRhaWx5RGVnV3JhcHBlciA9IG1hbmFnZS5jcnRFbGVtZW50KCcnLCAnJywgJ2RhaWx5LWNvbnRhaW5lcicsICdkaXYnKTtcblx0Y29uc3QgZGFpbHlEZWcgPSBtYW5hZ2UuY3J0RWxlbWVudChkZWcsICdkYWlseS1kZWcnLCAnZGFpbHktY29udGVudHMnLCAncCcpO1xuXHRjb25zdCBpV2luZERlZyA9IG1hbmFnZS5jcnRJbWcoaWNvbkNvbXBhc3MsICcnLCAnaW1nLWRlZycpO1xuXG5cdGRhaWx5TG93ZXIuYXBwZW5kKGRhaWx5TG93ZXJMZWZ0LCBkYWlseUxvd2VyUmlnaHQpO1xuXHRkYWlseUh1bWlkaXR5V3JhcHBlci5hcHBlbmQoZGFpbHlIdW1pZGl0eSwgaUh1bWlkaXR5KTtcblx0ZGFpbHlTcGRXcmFwcGVyLmFwcGVuZChpV2luZFNwZCwgZGFpbHlTcGQpO1xuXHRkYWlseURlZ1dyYXBwZXIuYXBwZW5kKGlXaW5kRGVnLCBkYWlseURlZyk7XG5cdGRhaWx5TG93ZXJMZWZ0LmFwcGVuZChkYWlseUh1bWlkaXR5V3JhcHBlcik7XG5cdGRhaWx5TG93ZXJSaWdodC5hcHBlbmQoZGFpbHlTcGRXcmFwcGVyLCBkYWlseURlZ1dyYXBwZXIpO1xuXHRkYWlseVdyYXBwZXIuYXBwZW5kKGRhaWx5RGF0ZSwgZGFpbHlUZW1wLCBkYWlseUZlZWxzLCBkYWlseUljb24sIGRhaWx5TG93ZXIpO1xuXHRwYXJlbnQuYXBwZW5kKGRhaWx5V3JhcHBlcik7XG59XG5cbi8vIGRpc3BsYXkgdGhlIHdlYXRoZXIgZGF0YSBhYm91dCB0aGUgY3VycmVudCBob3VyL2RheVxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRPdXRwdXQocGFyZW50KSB7XG5cdGNvbnN0IGljb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbjtcblx0Y29uc3QgdGltZXpvbmUgPSB3ZWF0aGVyRGF0YS50aW1lem9uZTtcblx0Y29uc3QgZGF0ZSA9IGNvbnZlcnRUWihuZXcgRGF0ZSwgdGltZXpvbmUpO1xuXG5cdGxldCB0ZW1wID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wO1xuXHRsZXQgZmVlbHMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzX2xpa2U7XG5cdGNvbnN0IGh1bWlkaXR5ID0gd2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eTtcblx0Y29uc3Qgc3BlZWQgPSBgJHt3aW5kU3BlZWRUb01QSCh3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfc3BlZWQpfSBtcGggOldpbmQgU3BlZWRgO1xuXHRjb25zdCBkZWcgPSBgJHt3aW5kRGVnVG9EaXIod2VhdGhlckRhdGEuY3VycmVudC53aW5kX2RlZyl9IDpXaW5kIERlZ3JlZWA7XG5cdC8vIHRlbXAgY29udmVyc2lvblxuXHR0ZW1wID0gY29udmVydFRlbXAodGVtcCk7XG5cdHRlbXAgPSB0ZW1wLnNsaWNlKDAsIC0xKTtcblx0ZmVlbHMgPSBjb252ZXJ0VGVtcChmZWVscyk7XG5cblx0Ly8gRE9NIGluc3RhbmNlc1xuXG5cdGNvbnN0IGN1cnJlbnRVcHJDb250ID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdjdXJyZW50LXVwcGVyJywgJ2N1cnJlbnQtdXBwZXInLCAnZGl2Jyk7XG5cblx0Ly8gRE9NIGVsZW1lbnRzIGluIHRoZSB1cHBlciBsZWZ0IHNpZGUgb2YgdGhlIGN1cnJlbnQgbWFpblxuXHRjb25zdCB1cHBlckxlZnRTaWRlID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdjdXJyZW50LXVwcGVyLWxlZnQnLCAnY3VycmVudC11cHBlci1sZWZ0JywgJ2RpdicpO1xuXHRjb25zdCBjdXJyZW50TG9jYXRpb24gPSBtYW5hZ2UuY3J0RWxlbWVudChmZXRjaERhdGEuZ2V0QXJlYU5hbWUoKSwgJ2N1cnJlbnQtbG9jYXRpb24nLCAnY3VycmVudC1jb250ZW50cycsICdwJyk7XG5cdGNvbnN0IGN1cnJlbnREYXRlID0gbWFuYWdlLmNydEVsZW1lbnQoZm9ybWF0RnVsbERhdGUoZGF0ZSksICdjdXJyZW50LWRheScsICdjdXJyZW50LWNvbnRlbnRzJywgJ3AnKTtcblx0Y29uc3QgY3VycmVudFRpbWUgPSBtYW5hZ2UuY3J0RWxlbWVudChmb3JtYXRIb3VyTWluKGRhdGUpLCAnY3VycmVudC10aW1lJywgJ2N1cnJlbnQtY29udGVudHMnLCAncCcpO1xuXG5cdC8vIERPTSBlbGVtZW50cyBpbiB0aGUgdXBwZXIgcmlnaHQgc2lkZSBvZiB0aGUgY3VycmVudCBtYWluXG5cdGNvbnN0IHVwcGVyUmlnaHRTaWRlID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdjdXJyZW50LXVwcGVyLXJpZ2h0JywgJ2N1cnJlbnQtdXBwZXItcmlnaHQnLCAnZGl2Jyk7XG5cdGNvbnN0IGN1cnJlbnRJY29uID0gbWFuYWdlLmNydEltZyhnZXRXZWF0aGVySWNvbihpY29uKSwgJ2N1cnJlbnQtaWNvbicsICdjdXJyZW50LWNvbnRlbnRzJyk7XG5cdGNvbnN0IHRlbXBDZWxjaXVzID0gbWFuYWdlLmNydEVsZW1lbnQoY2hlY2tUZW1wVW5pdCgpLCAndGVtcEMnLCAnY2hvb3NlLXRlbXAnLCAnZGl2Jyk7XG5cblx0Ly8gdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZVxuXHRjb25zdCBjdXJyZW50VGVtcCA9IG1hbmFnZS5jcnRFbGVtZW50KHRlbXAsICdjdXJyZW50LXRlbXAnLCAnY3VycmVudC1jb250ZW50cycsICdwJyk7XG5cblx0Ly8gdGhlIGxvd2VyIHNpZGUgY29udGFpbmVyXG5cdGNvbnN0IGN1cnJlbnRMd3JDb250ID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdjdXJyZW50LWxvd2VyJywgJ2N1cnJlbnQtbG93ZXInLCAnZGl2Jyk7XG5cblx0Ly8gRE9NIGVsZW1lbnRzIGluIHRoZSBsb3dlciBsZWZ0IHNpZGUgb2YgdGhlIGN1cnJlbnQgbWFpblxuXHRjb25zdCBsb3dlckxlZnRTaWRlID0gbWFuYWdlLmNydEVsZW1lbnQoJycsICdjdXJyZW50LWxvd2VyLWxlZnQnLCAnY3VycmVudC1sb3dlci1sZWZ0JywgJ2RpdicpO1xuXHRjb25zdCBjdXJyZW50RmVlbHMgPSBtYW5hZ2UuY3J0RWxlbWVudChgRmVlbHMgTGlrZTogJHtmZWVsc31gLCAnY3VycmVudC1mZWVscycsICdjdXJyZW50LWNvbnRlbnRzJywgJ3AnKTtcblx0Y29uc3QgY3VycmVudEh1bWlkaXR5ID0gbWFuYWdlLmNydEVsZW1lbnQoYEh1bWlkaXR5OiAke2h1bWlkaXR5fSVgLCAnY3VycmVudC1odW1pZGl0eScsICdjdXJyZW50LWNvbnRlbnRzJywgJ3AnKTtcblxuXHQvLyBET00gZWxlbWVudHMgaW4gdGhlIGxvd2VyIHJpZ2h0IHNpZGUgb2YgdGhlIGN1cnJlbnQgbWFpblxuXHRjb25zdCBsb3dlclJpZ2h0U2lkZSA9IG1hbmFnZS5jcnRFbGVtZW50KCcnLCAnY3VycmVudC1sb3dlci1yaWdodCcsICdjdXJyZW50LWxvd2VyLXJpZ2h0JywgJ2RpdicpO1xuXHRjb25zdCBjdXJyZW50U3BlZWQgPSBtYW5hZ2UuY3J0RWxlbWVudChzcGVlZCwgJ2N1cnJlbnQtc3BlZWQnLCAnY3VycmVudC1jb250ZW50cycsICdwJyk7XG5cdGNvbnN0IGN1cnJlbnREZWdyZWUgPSBtYW5hZ2UuY3J0RWxlbWVudChkZWcsICdjdXJyZW50LWRlZycsICdjdXJyZW50LWNvbnRlbnRzJywgJ3AnKTtcblxuXHRjdXJyZW50THdyQ29udC5hcHBlbmQobG93ZXJMZWZ0U2lkZSwgbG93ZXJSaWdodFNpZGUpO1xuXHRsb3dlckxlZnRTaWRlLmFwcGVuZChjdXJyZW50RmVlbHMsIGN1cnJlbnRIdW1pZGl0eSk7XG5cdGxvd2VyUmlnaHRTaWRlLmFwcGVuZChjdXJyZW50U3BlZWQsIGN1cnJlbnREZWdyZWUpO1xuXHRjdXJyZW50VXByQ29udC5hcHBlbmQodXBwZXJMZWZ0U2lkZSwgdXBwZXJSaWdodFNpZGUpO1xuXHR1cHBlckxlZnRTaWRlLmFwcGVuZChjdXJyZW50TG9jYXRpb24sIGN1cnJlbnREYXRlLCBjdXJyZW50VGltZSk7XG5cdHVwcGVyUmlnaHRTaWRlLmFwcGVuZChjdXJyZW50SWNvbiwgdGVtcENlbGNpdXMpO1xuXHRwYXJlbnQuYXBwZW5kKGN1cnJlbnRVcHJDb250LCBjdXJyZW50VGVtcCwgY3VycmVudEx3ckNvbnQpO1xuXHRyZW5kZXJCZ0NvbG9yKCk7XG5cdHVwZGF0ZUNsb2NrKCk7IC8vIGF1dG8gcmVmcmVzaCBjbG9jayBieSAxMDBcblx0dGVtcENlbGNpdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0dG9nZ2xlVGVtcCgpO1xuXHRcdGRpc3BsYXlJbmZvKCk7XG5cdH0pO1xufVxuXG4vLyB0aGUgY29sb3IgaXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgZGF5OiBtb3JucywgYWZ0ZXJub29uLCBuaWdodFxuZnVuY3Rpb24gcmVuZGVyQmdDb2xvcigpIHtcblx0Y29uc3QgeyB0aW1lem9uZSB9ID0gd2VhdGhlckRhdGE7XG5cdGNvbnN0IGRhdGUgPSBjb252ZXJ0VFoobmV3IERhdGUoKSwgdGltZXpvbmUpO1xuXHRjb25zdCBob3VycyA9IGdldExvY2FsSG91cnMoZGF0ZSk7XG5cdGJnTWFuaXB1bGF0aW9uLmJnQ2hnKGhvdXJzKTtcbn1cblxuLy8gZ2V0IHRoZSBpY29uIGZyb20gdGhlIHdlYXRoZXIgQVBJXG5mdW5jdGlvbiBnZXRXZWF0aGVySWNvbihpY29uKSB7XG5cdHJldHVybiBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgO1xufVxuXG4vLyB1cGRhdGUgY2xvY2sgZXZlcnkgMTAwMG1zID0gMXNlY29uZFxuZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG5cdGNvbnN0IHsgdGltZXpvbmUgfSA9IHdlYXRoZXJEYXRhO1xuXHRjb25zdCBkYXRlID0gY29udmVydFRaKG5ldyBEYXRlLCB0aW1lem9uZSk7XG5cdGNvbnN0IGN1cnJlbnRUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdGltZScpO1xuXHRjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IGZvcm1hdEhvdXJNaW4oZGF0ZSk7XG5cdHNldFRpbWVvdXQodXBkYXRlQ2xvY2ssIDEwMDApO1xufVxuXG4vLyBjb250cm9sbGVyIGZ1bmN0aW9uIC0gY3JlYXRlIGFuZCBkaXNwbGF5IERPTSBlbGVtZW50c1xuZnVuY3Rpb24gZGlzcGxheUluZm8oKSB7XG5cdGNsZWFyTWFpbkNvbnRlbnRzKCk7XG5cdGdldEhvdXJseURhdGEoRE9NLmxvd2VyTWFpbik7XG5cdGdldERhaWx5RGF0YShET00uZGFpbHlNYWluKTtcblx0ZGlzcGxheUN1cnJlbnRPdXRwdXQoRE9NLmN1cnJlbnRNYWluKTtcbn1cblxuLy8gY2xlYXIgdGhlIGNvbnRlbnRzIGluc2lkZSB0aGUgd2VhdGhlciBkYXRhIGNvbnRhaW5lclxuZnVuY3Rpb24gY2xlYXJNYWluQ29udGVudHMoKSB7XG5cdERPTS5jdXJyZW50TWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXHRET00uZGFpbHlNYWluLnRleHRDb250ZW50ID0gJyc7XG5cdERPTS5sb3dlck1haW4udGV4dENvbnRlbnQgPSAnJztcbn0iLCJpbXBvcnQgbWFuYWdlIGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4vZWxlbWVudHMuanMnO1xuXG5sZXQgaXNEaXNwbGF5ID0gdHJ1ZTsgLy8gYm9vbGVhbiAtIGRpc3BsYXkvbm90IGRpc3BsYXlcbi8vIGRpc3BsYXkgYWxlcnQgZGVzY3JpcHRpb24gd2l0aCBhY2NvcmRhbmNlIHRvIGl0cyBkZWZhdWx0XG5mdW5jdGlvbiBhbGVydERpc3BsYXkod2VhdGhlckRhdGEpIHtcblx0Ly8gdGhpcyByZW1vdmVzIGFsbCB0aGUgY2hpbGRyZW4gb2YgdGhlIGZvbGxvd2luZyBlbGVtZW50XG5cdERPTS5hbGVydEV2ZW50cy50ZXh0Q29udGVudCA9ICcnO1xuXHRET00uYWxlcnRUZXh0LnRleHRDb250ZW50ID0gJyc7XG5cblx0Ly8gZGVmYXVsdCB0ZXh0IHdoZW4gb3BlbmluZyBhbGVydCBib3hcblx0Y29uc3QgYWxlcnREZXNjID0gd2VhdGhlckRhdGEuYWxlcnRzWzBdLmRlc2NyaXB0aW9uO1xuXG5cdC8vIGxvb3AgYW5kIHByaW50IGVhY2ggYXZhaWxhYmxlIGRhdGEgYWxlcnRzIGluIHRoZSBldmVudCBkaXZcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB3ZWF0aGVyRGF0YS5hbGVydHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBldmVudFRleHQgPSB3ZWF0aGVyRGF0YS5hbGVydHNbaV0uZXZlbnQ7XG5cdFx0Y29uc3QgZXZlbnQgPSBtYW5hZ2UuY3J0RWxlbWVudChldmVudFRleHQsIGBldmVudC10eHQke2kgKyAxfWAsICdldmVudC10eHRzJywgJ2RpdicpO1xuXHRcdERPTS5hbGVydEV2ZW50cy5hcHBlbmQoZXZlbnQpO1xuXHR9XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudC10eHQxJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXN0YXRlJyk7XG5cdGNvbnN0IGFsZXJ0ID0gbWFuYWdlLmNydEVsZW1lbnQoYWxlcnREZXNjLCAnYWxlcnQtdHh0JywgJ2FsZXJ0LXR4dHMnLCAncCcpO1xuXHRET00uYWxlcnRUZXh0LmFwcGVuZChhbGVydCwgRE9NLmFsZXJ0Q2xvc2UpO1xuXHRhY3RpdmF0ZUFsZXJ0RXZlbnQod2VhdGhlckRhdGEpO1xufVxuXG4vLyB0b2dnbGUgdG8gZGlzcGxheSBvciBub3REaXNwbGF5XG5jb25zdCB0b2dnbGVEaXNwbGF5Qm9vbGVhbiA9ICgpID0+IHtcblx0aXNEaXNwbGF5ID09PSB0cnVlID8gaXNEaXNwbGF5ID0gZmFsc2UgOiBpc0Rpc3BsYXkgPSB0cnVlO1xufTtcbmNvbnN0IHJlc2V0RGlzcGxheSA9ICgpID0+IHsgaXNEaXNwbGF5ID0gdHJ1ZTsgfTsgLy8gcmVzZXQgZGlzcGxheSB0byB0cnVlXG5cbi8vIHZhbGlkYXRlIHdoZXRoZXIgYWxlcnRzIGV4aXN0cyBpZiBpdCBpcyBvciBlbHNlIHRoZW4gY29udGludWUgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25cbmZ1bmN0aW9uIGdldEFsZXJ0KGRhdGEpIHtcblx0Ly8gaW1tZWRpYXRlbHkgZGlzcGxheSB3ZWF0aGVyIGF0IGZpcnN0IGxvYWQgaWYgYWxlcnQgZGF0YSBleGlzdGVkXG5cdGlmIChkYXRhLmFsZXJ0cykge1xuXHRcdHJlc2V0RGlzcGxheSgpO1xuXHRcdG1hbmFnZS5tb2RpZnlBdHRyKERPTS5hbGVydERlc2MsICdzdHlsZScsICdkaXNwbGF5OiBibG9jazsnKTtcblx0XHRtYW5hZ2UubW9kaWZ5QXR0cihET00uYWxlcnRCdG4sICdzdHlsZScsICdkaXNwbGF5OiBibG9jazsnKTtcblx0XHRhbGVydERpc3BsYXkoZGF0YSk7XG5cdFx0RE9NLmFsZXJ0RGVzYy5jbGFzc05hbWUgPSAnJztcblx0fSBlbHNlIHsgLy8gb3RoZXJ3aXNlLCBkaXNhbGxvdyB2aXN1YWwgYWxlcnQgZWxlbWVudHMgdG8gYmUgc2VlblxuXHRcdG1hbmFnZS5tb2RpZnlBdHRyKERPTS5hbGVydERlc2MsICdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXHRcdG1hbmFnZS5tb2RpZnlBdHRyKERPTS5hbGVydEJ0biwgJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cdFx0dG9nZ2xlRGlzcGxheUJvb2xlYW4oKTtcblx0fVxufVxuXG4vLyB0cmFuc2l0aW9uL2FsZXJ0IGRpdiBwb3NpdGlvbiBtYW5pcHVsYXRpb24gYnkgY2hlY2tpbmcgd2hldGhlclxuLy8gaXMgZGlzcGxheWVkIG9yIG5vdFxuLy8gTm90ZTogSXQgaXMgYWx3YXlzIGRpc3BsYXllZCBhdCBmaXJzdCBsb2FkIG9mIHdlYXRoZXIgZGF0YVxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheSgpIHtcblx0aWYgKGlzRGlzcGxheSA9PT0gdHJ1ZSkge1xuXHRcdG1hbmFnZS5tb2RpZnlBdHRyKERPTS5tb2RhbCwgJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cdFx0RE9NLmFsZXJ0RGVzYy5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZURvd24nKTtcblx0fSBlbHNlIHtcblx0XHRtYW5hZ2UubW9kaWZ5QXR0cihET00ubW9kYWwsICdzdHlsZScsICdkaXNwbGF5OiBibG9jazsnKTtcblx0XHRET00uYWxlcnREZXNjLmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlVXAnKTtcblx0fVxufVxuXG4vLyBhZGQgdmlzdWFsIGFjdGl2ZSBzdGF0ZSBpZiB0aGUgYWxlcnQgdGV4dCBpcyBkaXNwbGF5ZWQgYWxyZWFkeVxuZnVuY3Rpb24gYWN0aXZhdGVBbGVydEV2ZW50KGRhdGEpIHtcblx0Y29uc3QgYWxlcnRFdmVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnQtdHh0cycpO1xuXHRhbGVydEV2ZW50cy5mb3JFYWNoKCh4LCBpLCBhcnIpID0+IHtcblx0XHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dXBkYXRlQWxlcnRUZXh0KGksIGRhdGEpO1xuXHRcdFx0YWxlcnRFdmVudHMuZm9yRWFjaCgoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1zdGF0ZScpKSB7XG5cdFx0XHRcdFx0ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtc3RhdGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRhcnJbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXN0YXRlJyk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vLyB1cGRhdGUgdGhlIGFsZXJ0IHBhcmFncmFwaCB3aGVuIHRoZSBldmVudCB0ZXh0IGlzIGNsaWNrZWRcbmZ1bmN0aW9uIHVwZGF0ZUFsZXJ0VGV4dChpLCBkYXRhKSB7XG5cdERPTS5hbGVydFRleHQudGV4dENvbnRlbnQgPSAnJztcblx0Y29uc3QgYWxlcnREZXNjID0gZGF0YS5hbGVydHNbaV0uZGVzY3JpcHRpb247XG5cdGNvbnN0IGFsZXJ0ID0gbWFuYWdlLmNydEVsZW1lbnQoYWxlcnREZXNjLCAnYWxlcnQtdHh0JywgJ2FsZXJ0LXR4dHMnLCAncCcpO1xuXHRET00uYWxlcnRUZXh0LmFwcGVuZChhbGVydCwgRE9NLmFsZXJ0Q2xvc2UpO1xufVxuZXhwb3J0IHsgZ2V0QWxlcnQsIHRvZ2dsZURpc3BsYXkgfTtcbiIsImltcG9ydCBET00gZnJvbSAnLi9lbGVtZW50cyc7XG5cbmNvbnN0IGJnTWFuaXB1bGF0aW9uID0gKCgpID0+IHtcblx0Y29uc3QgV0FSTV9DT0xPUlMgPSBbJ3JnYigyNTUsIDE5NSwgMTYpJywgJ3JnYigyNDgsIDE4NSwgMjMpJywgJ3JnYigyNDIsIDE3NCwgMjgpJ107XG5cdGNvbnN0IEFGVEVSTk9PTl9DT0xPUlMgPSBbJ3JnYig1NiwgMjExLCAxMDcpJywgJ3JnYig1NiwgMTk1LCAxMDcpJywgJ3JnYig1NiwgMTgwLCA5OSknXTtcblx0Y29uc3QgQ09PTF9DT0xPUlMgPSBbJ3JnYig1NiwgMTU2LCAyNDEpJywgJ3JnYig1NiwgMTM0LCAyMzUpJywgJ3JnYig1NiwgMTIxLCAyMjEpJ107XG5cdHJldHVybiB7XG5cdFx0YmdDaGcoaG91cnMpIHsgLy8gYmFja2dyb3VuZCBjaGFuZ2Vcblx0XHRcdGlmIChob3VycyA+PSAwICYmIGhvdXJzIDwgMTIpIHtcblx0XHRcdFx0RE9NLmN1cnJlbnRNYWluLnN0eWxlLmJhY2tncm91bmQgPSBXQVJNX0NPTE9SU1swXTtcblx0XHRcdFx0RE9NLmRhaWx5TWFpbi5zdHlsZS5iYWNrZ3JvdW5kID0gV0FSTV9DT0xPUlNbMV07XG5cdFx0XHRcdERPTS5sb3dlck1haW4uc3R5bGUuYmFja2dyb3VuZCA9IFdBUk1fQ09MT1JTWzJdO1xuXHRcdFx0fSBlbHNlIGlmIChob3VycyA+PSAxMiAmJiBob3VycyA8IDE3KSB7XG5cdFx0XHRcdERPTS5jdXJyZW50TWFpbi5zdHlsZS5iYWNrZ3JvdW5kID0gQUZURVJOT09OX0NPTE9SU1swXTtcblx0XHRcdFx0RE9NLmRhaWx5TWFpbi5zdHlsZS5iYWNrZ3JvdW5kID0gQUZURVJOT09OX0NPTE9SU1sxXTtcblx0XHRcdFx0RE9NLmxvd2VyTWFpbi5zdHlsZS5iYWNrZ3JvdW5kID0gQUZURVJOT09OX0NPTE9SU1syXTtcblx0XHRcdH0gZWxzZSBpZiAoaG91cnMgPj0gMTcgJiYgaG91cnMgPCAyNCkge1xuXHRcdFx0XHRET00uY3VycmVudE1haW4uc3R5bGUuYmFja2dyb3VuZCA9IENPT0xfQ09MT1JTWzBdO1xuXHRcdFx0XHRET00uZGFpbHlNYWluLnN0eWxlLmJhY2tncm91bmQgPSBDT09MX0NPTE9SU1sxXTtcblx0XHRcdFx0RE9NLmxvd2VyTWFpbi5zdHlsZS5iYWNrZ3JvdW5kID0gQ09PTF9DT0xPUlNbMl07XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGJnTWFuaXB1bGF0aW9uO1xuIiwiLy8gVGhpcyBpcyB1c2VkIHRvIGdldCB0aGUgdXNlcidzIGN1cnJlbnQgbG9jYXRpb24gbmFtZSBieSBnZXR0aW5nIHRoZSB1c2VyJ3MgY29vcmRpbmF0ZXNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcmVhRnJvbUNvb3JkaW5hdGVzKHsgbGF0LCBsb24gfSkge1xuXHRjb25zdCBVUkwgPSBgaHR0cHM6Ly9nZW9jb2RlLnh5ei8ke2xhdH0sJHtsb259P2pzb249MWA7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0cmV0dXJuIGF3YWl0IGRhdGE7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZX1gKTtcblx0fVxufVxuIiwiLy8gRE9NIGluc3RhbmNlcyBvZiBleGlzdGluZyBlbGVtZW50cyBmcm9tIGh0bWwgZmlsZVxuY29uc3QgRE9NID0gKCgpID0+IHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXHRjb25zdCB1cHBlck1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBwZXItbWFpbicpO1xuXHRjb25zdCBsb3dlck1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG93ZXItbWFpbicpO1xuXHRjb25zdCBjdXJyZW50TWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LW1haW4nKTtcblx0Y29uc3QgZGFpbHlNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhaWx5LW1haW4nKTtcblx0Y29uc3QgdXNlckxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItbG9jYXRpb24nKTtcblx0Y29uc3QgZGVidWdPdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWcnKTtcblx0Y29uc3QgYXJlYUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FyZWEtaW5wdXQnKTtcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblx0Y29uc3QgYWxlcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQtYnRuJyk7XG5cdGNvbnN0IGFsZXJ0RGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydC1kZXNjJyk7XG5cdGNvbnN0IGFsZXJ0RXZlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0LWV2ZW50cycpO1xuXHRjb25zdCBhbGVydFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQtdGV4dCcpO1xuXHRjb25zdCBhbGVydENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0LWNsb3NlJyk7XG5cdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG5cdHJldHVybiB7XG5cdFx0Y29udGVudCxcblx0XHRtYWluLFxuXHRcdHVwcGVyTWFpbixcblx0XHRjdXJyZW50TWFpbixcblx0XHRkYWlseU1haW4sXG5cdFx0bG93ZXJNYWluLFxuXHRcdHVzZXJMb2NhdGlvbixcblx0XHRkZWJ1Z091dHB1dCxcblx0XHRhcmVhSW5wdXQsXG5cdFx0Zm9ybSxcblx0XHRhbGVydEJ0bixcblx0XHRhbGVydERlc2MsXG5cdFx0YWxlcnRFdmVudHMsXG5cdFx0YWxlcnRUZXh0LFxuXHRcdGFsZXJ0Q2xvc2UsXG5cdFx0bW9kYWwsXG5cdFx0Ly8gbm90IGluIHRoZSBiZXN0IHN0YXRlIGJ1dCBpdHMgZnVuY3Rpb25hbGl0eSBmb3JtYXQgdGhlIHN0cmluZyBiYXNlZFxuXHRcdC8vIG9uIHRoZSBjb25kaXRpb25cblx0XHRzdHJJbnB1dCgpIHtcblx0XHRcdHJldHVybiBhcmVhSW5wdXQudmFsdWU7XG5cdFx0fSxcblx0XHRsb2NhdGlvbklucHV0KCkge1xuXHRcdFx0Y29uc3Qgc3RyID0gYCR7YXJlYUlucHV0LnZhbHVlfWA7XG5cdFx0XHQvLyBzcGFjZXMgYXJlIHJlcGxhY2Ugd2l0aCAnKycgd2hpY2ggaXMgdXNlZCBmb3IgdGhlIHN0cmluZyB3aXRoaW4gVVJMXG5cdFx0XHRyZXR1cm4gc3RyLnNwbGl0KCcnKS5tYXAoKHgpID0+ICh4ID09ICcgJyA/IHggPSAnKycgOiB4KSkuam9pbignJyk7XG5cdFx0fSxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTTtcbiIsImltcG9ydCB7IExPQ0FUSU9OX0FQSSwgV0VBVEhFUl9BUEkgfSBmcm9tICcuL3NlcnZlci1yb3V0ZS5qcyc7XG5cbi8vIG1haW5seSBmb3IgZmV0Y2hpbmcgQVBJIGtleVxuLy8gZmlsZSBmb3IgZ2V0dGluZyBhbmQgc2V0dGluZyBbaW5zZXJ0X3N0cmluZ10gZGlyZWN0b3J5IG5hbWUgdG8gY29tcGxldGUgVVJMXG5jb25zdCBmZXRjaERhdGEgPSAoKCkgPT4ge1xuXHRjb25zdCBwYXJ0ID0gJ21pbnV0ZWx5Jztcblx0bGV0IGxhdDtcblx0bGV0IGxvbjtcblx0bGV0IHNlYXJjaEFyZWE7XG5cdGxldCBhcmVhTmFtZTtcblx0cmV0dXJuIHtcblx0XHRzZXRDb29yZGluYXRlcyhuTGF0LCBuTG9uKSB7XG5cdFx0XHRsYXQgPSBuTGF0O1xuXHRcdFx0bG9uID0gbkxvbjtcblx0XHR9LFxuXHRcdHNldFNlYXJjaEFyZWEodikgeyBzZWFyY2hBcmVhID0gdjsgfSxcblx0XHRzZXRBcmVhTmFtZSh2KSB7IGFyZWFOYW1lID0gdjsgfSxcblx0XHRnZXRMYXQoKSB7IHJldHVybiBsYXQ7IH0sXG5cdFx0Z2V0TG9uKCkgeyByZXR1cm4gbG9uOyB9LFxuXHRcdGdldEFyZWFOYW1lKCkgeyByZXR1cm4gYXJlYU5hbWU7IH0sXG5cdFx0Z2V0V2VhdGhlclVSTCgpIHtcblx0XHRcdGNvbnN0IFdFQVRIRVJfVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPSR7cGFydH0mYXBwaWQ9JHtXRUFUSEVSX0FQSX1gO1xuXHRcdFx0cmV0dXJuIFdFQVRIRVJfVVJMO1xuXHRcdH0sXG5cdFx0Z2V0TG9jYXRpb25VUkwoKSB7XG5cdFx0XHRjb25zdCBMT0NBVElPTl9VUkwgPSBgaHR0cHM6Ly91czEubG9jYXRpb25pcS5jb20vdjEvc2VhcmNoLnBocD9rZXk9JHtMT0NBVElPTl9BUEl9JnE9JHtzZWFyY2hBcmVhfSZmb3JtYXQ9anNvbmA7XG5cdFx0XHRyZXR1cm4gTE9DQVRJT05fVVJMO1xuXHRcdH0sXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaERhdGE7XG4iLCIvLyBoZWxwZXIgZnVuY3Rpb25zXG4vLyByZXVzYWJsZSBmdW5jdGlvbnMgdGhhdCBjcmVhdGUvbW9kaWZ5IGVsZW1lbnRzXG5jb25zdCBtYW5hZ2UgPSAoKCkgPT4gKHtcblx0Y3J0RWxlbWVudChlVGV4dCwgZUlkLCBlQ2xhc3MsIGVUYWcpIHtcblx0XHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZVRhZyk7XG5cdFx0KGVsLnRleHRDb250ZW50ID0gZVRleHQsIGVsLmlkID0gZUlkLCBlbC5jbGFzc05hbWUgPSBlQ2xhc3MpO1xuXHRcdHJldHVybiBlbDtcblx0fSxcblx0Y3J0SW1nKGVTcmMsIGVJZCwgZUNsYXNzKSB7XG5cdFx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0KGltZy5zcmMgPSBlU3JjLCBpbWcuaWQgPSBlSWQsIGltZy5jbGFzc05hbWUgPSBlQ2xhc3MpO1xuXHRcdHJldHVybiBpbWc7XG5cdH0sXG5cdG1vZGlmeUF0dHIoZWwsIGVUeXBlLCBlUHJvcCkgeyBlbC5zZXRBdHRyaWJ1dGUoZVR5cGUsIGVQcm9wKTsgfSxcbn0pKSgpO1xuXG5leHBvcnQgZGVmYXVsdCBtYW5hZ2U7XG4iLCIvLyBJJ2xsIHVwZGF0ZSB0aGlzIGZpbGUgaW4gdGhlIGZ1dHVyZSB0byByZXF1ZXN0IHRoZSBBUEkga2V5IGluXG4vLyB0aGUgc2VydmVyIHJhdGhlciB0aGFuIHRoZSBmcm9udC1lbmQgZmlsZXMgLS0gZW52IG9ubHkgd29ya3Ncbi8vIHdpdGggZXhwcmVzcyBvciBiYWNrZW5kIHN0dWZmXG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG4vLyBpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcbi8vIGRvdGVudi5jb25maWcoKTtcbi8vIGNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG4vLyBjb25zdCBEYXRhc3RvcmUgPSByZXF1aXJlKCduZWRiJyk7XG4vLyByZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoeyBwYXRoOiBgJHtfX2Rpcm5hbWV9Ly5lbnZgIH0pO1xuXG4vLyBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4vLyBjb25zdCBkYXRhYmFzZSA9IG5ldyBEYXRhc3RvcmUoJ2RhdGFiYXNlLmRiJyk7XG4vLyBkYXRhYmFzZS5sb2FkRGF0YWJhc2UoKTtcblxuLy8gYXBwLmdldCgnL2FwaScsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuLy8gXHRkYXRhYmFzZS5maW5kKHt9LCAoZXJyLCBkYXRhKSA9PiB7XG4vLyBcdFx0aWYgKGVycikge1xuLy8gXHRcdFx0cmVzcG9uc2UuZW5kKCk7XG4vLyBcdFx0XHRyZXR1cm47XG4vLyBcdFx0fVxuLy8gXHRcdHJlc3BvbnNlLmpzb24oZGF0YSk7XG4vLyBcdH0pO1xuLy8gfSk7XG5cbi8vIGNvbnN0IExPQ0FUSU9OX0FQSSA9IHByb2Nlc3MuZW52LkxPQ0FUSU9OX0FQSTsvL1xuLy8gY29uc3QgV0VBVEhFUl9BUEkgPSBwcm9jZXNzLmVudi5XRUFUSEVSX0FQSTtcblxuLy8gSXQgaXMgY3J1Y2lhbCBmb3IgdGhlc2Uga2V5cyB0byBiZSBoaWRkZW4gZnJvbSB0aGUgcHVibGljIHZpZXdcbmNvbnN0IExPQ0FUSU9OX0FQSSA9ICdway45NjBiZWY5YjU4Y2FmMTJmNGQ0NTY0NjZlYzJhNDJmOCc7XG5jb25zdCBXRUFUSEVSX0FQSSA9ICcwYzczYjcyMzk4YzBiZmM4YzU5Y2E4MDU4ZmFmMWViNCc7XG5cbmV4cG9ydCB7IExPQ0FUSU9OX0FQSSwgV0VBVEhFUl9BUEkgfTtcbiIsIi8vY29udmVydCBkYXRlcyBieSB0aGUgYXBwcm9wcmlhdGUgbG9jYWwgdGltZXpvbmVcbi8vb2JqZWN0IHVzZWQgdG8gZm9ybWF0IGRhdGVzXG5jb25zdCBPUFRJT05TID0ge1xuXHR3ZWVrZGF5OiAnbG9uZycsXG5cdHllYXI6ICdudW1lcmljJyxcblx0bW9udGg6ICdsb25nJyxcblx0ZGF5OiAnbnVtZXJpYycsXG59O1xuXG5jb25zdCBEQUlMWSA9IHtcblx0d2Vla2RheTogJ3Nob3J0Jyxcblx0bW9udGg6ICdzaG9ydCcsXG5cdGRheTogJ251bWVyaWMnLFxufTtcbmZ1bmN0aW9uIGNvbnZlcnRUWihkYXRlLCB0elN0cmluZykge1xuXHRyZXR1cm4gbmV3IERhdGUoKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG5ldyBEYXRlKGRhdGUpIDogZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge3RpbWVab25lOiB0elN0cmluZ30pKTtcbn1cblxuLy8gZm9ybWF0IC0+IEhIOk1NOlNTIEFNL1BNXG5mdW5jdGlvbiBmb3JtYXRIb3VyTWluKGRhdGUpIHtcblx0bGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXHRsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuXHRsZXQgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuXHRjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcblx0aG91cnMgPSBob3VycyAlIDEyO1xuXHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cdG1pbnV0ZXMgPSAoJzAnK21pbnV0ZXMpLnNsaWNlKC0yKTtcblx0c2Vjb25kcyA9ICgnMCcrc2Vjb25kcykuc2xpY2UoLTIpO1xuXHRjb25zdCBzdHJUaW1lID0gaG91cnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kcyArICcgJyArIGFtcG07XG5cdHJldHVybiBzdHJUaW1lO1xufVxuXG4vL2Zvcm1hdCAtPiBISCBBTS9QTVxuZnVuY3Rpb24gZm9ybWF0SG91ck9ubHkoZGF0ZSwgaSkge1xuXHRsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgKyBpO1xuXHRsZXQgaG91cnNOZXh0RGF5ID0gKGhvdXJzLTI0KTsgLy9jaGFuZ2UgdGhlIHZhcmlhYmxlIGlmIGlzIHBhc3NlZCAxMXBtXG5cdGhvdXJzID4gMjMgPyBob3VycyA9IDAgKyBob3Vyc05leHREYXkgOiBob3Vycztcblx0bGV0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXHRob3VycyA9IGhvdXJzICUgMTI7XG5cdGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcblx0bGV0IHN0clRpbWUgPSBob3VycyArICcgJyArIGFtcG07XG5cdHJldHVybiBzdHJUaW1lO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbEhvdXJzKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0SG91cnMoKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdEZ1bGxEYXRlKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIE9QVElPTlMpO1xufVxuZnVuY3Rpb24gZm9ybWF0U2hvcnREYXRlKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIERBSUxZKTtcbn1cbmV4cG9ydCB7XG5cdGNvbnZlcnRUWixcblx0Zm9ybWF0SG91ck1pbixcblx0Zm9ybWF0SG91ck9ubHksXG5cdGZvcm1hdEZ1bGxEYXRlLFxuXHRmb3JtYXRTaG9ydERhdGUsXG5cdGdldExvY2FsSG91cnMsXG59IiwiLy8gY29udmVydCB0aGUgdmFsdWVzIG9mIHRoZSBkYXRhIHRvIGEgZGlmZmVyZW50IHVuaXRcbmNvbnN0IERJUkVDVElPTlMgPSBbJ04nLCAnTk5FJywgJ05FJywgJ0VORScsICdFJywgJ0VTRScsICdTRScsICdTU0UnLFxuXHQnUycsICdTU1cnLCAnU1cnLCAnV1NXJywgJ1cnLCAnV05XJywgJ05XJywgJ05OVyddO1xuY29uc3QgUkFOR0UgPSBbMzQ5LCAxMSwgMzQsIDU2LCA3OCwgMTAxLCAxMjQsIDE0Nixcblx0MTY5LCAxOTEsIDIxNCwgMjM1LCAyNTksIDI4MSwgMzA0LCAzMjZdO1xubGV0IGlzVGVtcENlbGNpdXMgPSB0cnVlO1xuXG4vLyB2YWxpZGF0ZSB0aGUgY3VycmVudCB0ZW1wIHVuaXRcbmNvbnN0IGNoZWNrVGVtcFVuaXQgPSAoKSA9PiB7XG5cdGlmIChpc1RlbXBDZWxjaXVzID09PSB0cnVlKXtcblx0XHRyZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9RmA7XG5cdH1cbn07XG4vLyB0b2dnbGUgdGhlIHRlbXBlcmF0dXJlIHVuaXRcbmNvbnN0IHRvZ2dsZVRlbXAgPSAoKSA9PiB7XG5cdGlzVGVtcENlbGNpdXMgPT09IHRydWUgPyBpc1RlbXBDZWxjaXVzID0gZmFsc2U6IGlzVGVtcENlbGNpdXMgPSB0cnVlO1xufTtcblxuLy8gdHJhbnNsYXRlIGZyb20ga2VsdmluIHRvIGNlbGNpdXNcbmNvbnN0IGtlbHZpblRvQ2VsY2l1cyA9IChLKSA9PiB7XG5cdGNvbnN0IGNlbGNpdXMgPSBLIC0gMjczLjE1O1xuXHRyZXR1cm4gYCR7TWF0aC5yb3VuZChjZWxjaXVzKX0ke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1DYDtcbn07XG5cbi8vIHRyYW5zbGF0ZSBmcm9tIGtlbHZpbiB0byBmYWhyZW5oZWl0XG5jb25zdCBrZWx2aW5Ub0ZhaHJlbmhlaXQgPSAoSykgPT4ge1xuXHRjb25zdCBmYWggPSAxLjggKiAoSyAtIDI3My4xNSkgKyAzMjtcblx0cmV0dXJuIGAke01hdGgucm91bmQoZmFoKX0ke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYDtcbn07XG4vLyBjb252ZXJ0cyBhbGwgdGhlIHRlbXBlcmF0dXJlIG91dHB1dCB3aGVuIHRoZSB0ZW1wIGlzIHN3aXRjaGVkIHRvIGEgZGlmZmVyZW50IHVuaXRcbmNvbnN0IGNvbnZlcnRUZW1wID0gKHQpID0+IHtcblx0cmV0dXJuIGlzVGVtcENlbGNpdXMgPT09IHRydWUgPyBrZWx2aW5Ub0NlbGNpdXModCkgOiBrZWx2aW5Ub0ZhaHJlbmhlaXQodCk7XG59O1xuXG4vL21ldGVyL3NlY29uZCB0byBtZXRlciBwZXIgaG91clxuY29uc3Qgd2luZFNwZWVkVG9NUEggPSAobikgPT4ge1xuXHRyZXR1cm4gTWF0aC5yb3VuZChuICogMi4yMzcpO1xufTtcblxuLy9yZXBsYWNlIHRoZSAwIC0gMzYwIGRlZ3JlZSB3aXRoIE4sRSxXLFNcbmNvbnN0IHdpbmREZWdUb0RpciA9IChuKSA9PiB7XG5cdG4gPiAzNDkgPyBuID0gMCA6IG47XG5cdGxldCBpbmRleDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBESVJFQ1RJT05TLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdGluZGV4ID0gKGkgKyBESVJFQ1RJT05TLmxlbmd0aCkgJSBESVJFQ1RJT05TLmxlbmd0aDtcblx0XHRpZiAobiA+IFJBTkdFW2ldIHx8IG4gPCBSQU5HRVtpbmRleCArIDFdKSB7XG5cdFx0XHRyZXR1cm4gRElSRUNUSU9OU1tpXTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdGNoZWNrVGVtcFVuaXQsXG5cdHRvZ2dsZVRlbXAsXG5cdGNvbnZlcnRUZW1wLFxuXHR3aW5kU3BlZWRUb01QSCxcblx0d2luZERlZ1RvRGlyLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbnRyb2xsZXIuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9