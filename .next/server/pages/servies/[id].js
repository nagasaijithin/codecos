module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/servies/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mypc\\Desktop\\codecos\\codecos\\components\\button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ButtonWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "button__ButtonWapper",
  componentId: "sc-1qtowkg-0"
})(["padding:1.5rem 2rem;background-color:#0081a7;color:white;text-decoration:none;border-radius:12px;box-shadow:1px 2px 15px -5px black;transition:all 0.4s ease-out;&:hover{color:#0081a7;background-color:white;box-shadow:1px 2px 20px -5px black;transform:scale(1.02);}"]);

const Button = ({
  text,
  goto
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: goto ? goto : "#",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(ButtonWapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/contactus.js":
/*!*********************************!*\
  !*** ./components/contactus.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subtitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtitle */ "./components/subtitle.js");
var _jsxFileName = "C:\\Users\\mypc\\Desktop\\codecos\\codecos\\components\\contactus.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Spports = function Spports(props) {
  return __jsx("svg", props, __jsx("defs", null, __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "a"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#042637"
  }), __jsx("stop", {
    offset: ".282",
    stopColor: "#0C5357"
  }), __jsx("stop", {
    offset: ".604",
    stopColor: "#157F78"
  }), __jsx("stop", {
    offset: ".855",
    stopColor: "#1A9B8C"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#1CA593"
  })), __jsx("linearGradient", {
    x1: ".13",
    y1: "-.272",
    x2: "1.087",
    y2: "1.057",
    id: "b"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00A39F"
  }), __jsx("stop", {
    offset: ".198",
    stopColor: "#00A8A5"
  }), __jsx("stop", {
    offset: ".473",
    stopColor: "#00B7B7"
  }), __jsx("stop", {
    offset: ".792",
    stopColor: "#00CFD5"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#00E2EC"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "c"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3A64D3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#043753"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "d"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3A64D3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#043753"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1.188",
    y2: ".5",
    id: "e"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3A64D3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#043753"
  })), __jsx("linearGradient", {
    x1: "-.052",
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "f"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3A64D3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#043753"
  })), __jsx("radialGradient", {
    cx: "51.354%",
    cy: "35.774%",
    fx: "51.354%",
    fy: "35.774%",
    r: "203.598%",
    gradientTransform: "matrix(.26165 0 0 .4134 .38 .21)",
    id: "g"
  }, __jsx("stop", {
    offset: "0%",
    stopColor: "#231F20"
  }), __jsx("stop", {
    offset: "12.25%",
    stopColor: "#242228"
  }), __jsx("stop", {
    offset: "31.71%",
    stopColor: "#25293F"
  }), __jsx("stop", {
    offset: "55.96%",
    stopColor: "#283665"
  }), __jsx("stop", {
    offset: "83.77%",
    stopColor: "#2C4799"
  }), __jsx("stop", {
    offset: "100%",
    stopColor: "#2E52BA"
  })), __jsx("linearGradient", {
    x1: ".193",
    y1: "-.093",
    x2: ".842",
    y2: ".99",
    id: "h"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#042637"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#1CA593"
  })), __jsx("radialGradient", {
    cy: "28.601%",
    fx: "50%",
    fy: "28.601%",
    r: "71.457%",
    gradientTransform: "matrix(.70144 0 0 1 .15 0)",
    id: "i"
  }, __jsx("stop", {
    offset: "0%",
    stopColor: "#FFF",
    stopOpacity: ".251"
  }), __jsx("stop", {
    offset: "28.68%",
    stopColor: "#FDFDFD",
    stopOpacity: ".176"
  }), __jsx("stop", {
    offset: "42.64%",
    stopColor: "#F5F8F8",
    stopOpacity: ".145"
  }), __jsx("stop", {
    offset: "53.41%",
    stopColor: "#E8EFEF",
    stopOpacity: ".118"
  }), __jsx("stop", {
    offset: "62.56%",
    stopColor: "#D6E2E3",
    stopOpacity: ".094"
  }), __jsx("stop", {
    offset: "70.69%",
    stopColor: "#BDD1D2",
    stopOpacity: ".075"
  }), __jsx("stop", {
    offset: "78.07%",
    stopColor: "#A0BCBE",
    stopOpacity: ".055"
  }), __jsx("stop", {
    offset: "84.91%",
    stopColor: "#7CA4A6",
    stopOpacity: ".039"
  }), __jsx("stop", {
    offset: "91.31%",
    stopColor: "#53878A",
    stopOpacity: ".024"
  }), __jsx("stop", {
    offset: "97.14%",
    stopColor: "#26676B",
    stopOpacity: ".008"
  }), __jsx("stop", {
    offset: "100%",
    stopColor: "#0D565A",
    stopOpacity: "0"
  })), __jsx("linearGradient", {
    x1: ".085",
    y1: "-.115",
    x2: ".793",
    y2: ".881",
    id: "j"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3EC6A8"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FFE2A8"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "k"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#043753"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#3A64D3"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "29.861",
    y2: ".5",
    id: "l"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#043753"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#3A64D3"
  })), __jsx("linearGradient", {
    x1: "-.795",
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "m"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#E868EF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7558CE"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "n"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#005DA5"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0A444D"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "o"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00A39F"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#00E2EC"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "p"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#45959F"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0E4A5F"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "q"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#005DA5"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0A444D"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "r"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00A39F"
  }), __jsx("stop", {
    offset: ".208",
    stopColor: "#00A7A4"
  }), __jsx("stop", {
    offset: ".453",
    stopColor: "#00B3B2"
  }), __jsx("stop", {
    offset: ".716",
    stopColor: "#00C6CA"
  }), __jsx("stop", {
    offset: ".992",
    stopColor: "#00E1EB"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#00E2EC"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "s"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00AFAF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#00E2EC"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "t"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7182E2"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E868EF"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "u"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00A39F"
  }), __jsx("stop", {
    offset: ".235",
    stopColor: "#019E9A"
  }), __jsx("stop", {
    offset: ".512",
    stopColor: "#05908D"
  }), __jsx("stop", {
    offset: ".81",
    stopColor: "#0B7877"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#106565"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "v"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3EC6A8"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FFE2A8"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "w"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7558CE"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E868EF"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "x"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7558CE"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E868EF"
  })), __jsx("linearGradient", {
    x1: ".143",
    y1: "-.231",
    x2: ".857",
    y2: "1.231",
    id: "y"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#0FF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0090B2"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "z"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C7A0F6"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FDE1A7"
  })), __jsx("linearGradient", {
    x1: ".146",
    y1: ".119",
    x2: ".978",
    y2: ".796",
    id: "A"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C91C91"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FE6A77"
  })), __jsx("linearGradient", {
    x1: ".06",
    y1: "-.011",
    x2: ".951",
    y2: ".919",
    id: "B"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#0FF"
  }), __jsx("stop", {
    offset: ".082",
    stopColor: "#25ECED"
  }), __jsx("stop", {
    offset: ".211",
    stopColor: "#58D1D4"
  }), __jsx("stop", {
    offset: ".342",
    stopColor: "#84BBBF"
  }), __jsx("stop", {
    offset: ".473",
    stopColor: "#A8A8AD"
  }), __jsx("stop", {
    offset: ".604",
    stopColor: "#C49A9F"
  }), __jsx("stop", {
    offset: ".735",
    stopColor: "#D88F96"
  }), __jsx("stop", {
    offset: ".867",
    stopColor: "#E48990"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "C"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7D59D0"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7C18A1"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "D"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3369FF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7C18A1"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "E"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#042637"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2335E0"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "F"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00C4C8"
  }), __jsx("stop", {
    offset: ".017",
    stopColor: "#07C2C6"
  }), __jsx("stop", {
    offset: ".171",
    stopColor: "#42B3B8"
  }), __jsx("stop", {
    offset: ".323",
    stopColor: "#75A5AB"
  }), __jsx("stop", {
    offset: ".472",
    stopColor: "#9E9AA0"
  }), __jsx("stop", {
    offset: ".617",
    stopColor: "#BE9298"
  }), __jsx("stop", {
    offset: ".756",
    stopColor: "#D58C93"
  }), __jsx("stop", {
    offset: ".886",
    stopColor: "#E3888F"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("radialGradient", {
    cx: "66.332%",
    cy: "55.479%",
    fx: "66.332%",
    fy: "55.479%",
    r: "104.996%",
    gradientTransform: "matrix(.37671 -.77514 .80337 .27338 -.032 .917)",
    id: "G"
  }, __jsx("stop", {
    offset: "0%",
    stopColor: "#E8878E"
  }), __jsx("stop", {
    offset: "13.28%",
    stopColor: "#E48990"
  }), __jsx("stop", {
    offset: "26.46%",
    stopColor: "#D88F96"
  }), __jsx("stop", {
    offset: "39.59%",
    stopColor: "#C49A9F"
  }), __jsx("stop", {
    offset: "52.71%",
    stopColor: "#A8A8AD"
  }), __jsx("stop", {
    offset: "65.83%",
    stopColor: "#84BBBF"
  }), __jsx("stop", {
    offset: "78.94%",
    stopColor: "#58D1D4"
  }), __jsx("stop", {
    offset: "91.8%",
    stopColor: "#25ECED"
  }), __jsx("stop", {
    offset: "100%",
    stopColor: "#0FF"
  })), __jsx("linearGradient", {
    x1: ".218",
    y1: ".686",
    x2: ".874",
    y2: ".244",
    id: "H"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3369FF"
  }), __jsx("stop", {
    offset: ".119",
    stopColor: "#305DDB"
  }), __jsx("stop", {
    offset: ".356",
    stopColor: "#2C4799"
  }), __jsx("stop", {
    offset: ".571",
    stopColor: "#283665"
  }), __jsx("stop", {
    offset: ".757",
    stopColor: "#25293F"
  }), __jsx("stop", {
    offset: ".906",
    stopColor: "#242228"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#231F20"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "I"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FF57BD"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#DD8A91"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "J"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#994574"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#43256F"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "K"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#042637"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2335E0"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "L"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C91C91"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FE6A77"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "M"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FE6A77"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FF57BD"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "N"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FE6A77"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FF57BD"
  })), __jsx("linearGradient", {
    x1: ".231",
    y1: ".253",
    x2: ".996",
    y2: ".914",
    id: "O"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#05C5DA"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5860C4"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "P"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#05C5DA"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5860C4"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "Q"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#A281FF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FF57BD"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "R"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#A281FF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FF57BD"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "S"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#8C6AE2"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5A55F8"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "T"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#8C6AE2"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5A55F8"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "U"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#8C6AE2"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5A55F8"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "V"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#5A55F8"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#8C6AE2"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "W"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#5A55F8"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#8C6AE2"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "X"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7C18A1"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#042637"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "Y"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7D59D0"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7C18A1"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "Z"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7D59D0"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7C18A1"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "aa"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7D59D0"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7C18A1"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ab"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7C18A1"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#042637"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ac"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7D59D0"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7C18A1"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ad"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7D59D0"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7C18A1"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ae"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7C1DA5"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#3C2068"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "af"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7C18A1"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#042637"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ag"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7D59D0"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7C18A1"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ah"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3369FF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7C18A1"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ai"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C16846"
  }), __jsx("stop", {
    offset: ".265",
    stopColor: "#D27565"
  }), __jsx("stop", {
    offset: ".531",
    stopColor: "#DE7F7B"
  }), __jsx("stop", {
    offset: ".781",
    stopColor: "#E58589"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    x1: "-.027",
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "aj"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#042637"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2335E0"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ak"
  }, __jsx("stop", {
    offset: ".218",
    stopColor: "#00AFAF"
  }), __jsx("stop", {
    offset: ".399",
    stopColor: "#00B4B5"
  }), __jsx("stop", {
    offset: ".634",
    stopColor: "#00C1C5"
  }), __jsx("stop", {
    offset: ".898",
    stopColor: "#00D8E0"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#00E2EC"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "al"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#34BBFF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7182E2"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "am"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C55DD7"
  }), __jsx("stop", {
    offset: ".497",
    stopColor: "#E868EF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E9B6F2"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "an"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7558CE"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E868EF"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ao"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00CFFF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5979FC"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ap"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C55DD7"
  }), __jsx("stop", {
    offset: ".497",
    stopColor: "#E868EF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E9B6F2"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "aq"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7558CE"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E868EF"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ar"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00CFFF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5979FC"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "as"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00CFFF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5979FC"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "at"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C55DD7"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E868EF"
  })), __jsx("linearGradient", {
    x1: ".026",
    y1: ".096",
    x2: ".909",
    y2: ".798",
    id: "au"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C55DD7"
  }), __jsx("stop", {
    offset: ".497",
    stopColor: "#E868EF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E9B6F2"
  })), __jsx("linearGradient", {
    x1: "-.048",
    y1: ".078",
    x2: ".983",
    y2: ".739",
    id: "av"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#231F20"
  }), __jsx("stop", {
    offset: ".102",
    stopColor: "#262228"
  }), __jsx("stop", {
    offset: ".264",
    stopColor: "#2F2A3F"
  }), __jsx("stop", {
    offset: ".465",
    stopColor: "#3D3865"
  }), __jsx("stop", {
    offset: ".699",
    stopColor: "#504A99"
  }), __jsx("stop", {
    offset: ".956",
    stopColor: "#6962DB"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#6D66E7"
  })), __jsx("linearGradient", {
    x1: "-.149",
    y1: ".089",
    x2: "1.003",
    y2: ".774",
    id: "aw"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#231F20"
  }), __jsx("stop", {
    offset: ".102",
    stopColor: "#262228"
  }), __jsx("stop", {
    offset: ".264",
    stopColor: "#2F2A3F"
  }), __jsx("stop", {
    offset: ".465",
    stopColor: "#3D3865"
  }), __jsx("stop", {
    offset: ".699",
    stopColor: "#504A99"
  }), __jsx("stop", {
    offset: ".956",
    stopColor: "#6962DB"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#6D66E7"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ax"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7558CE"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E868EF"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ay"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00AFAF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#00E2EC"
  })), __jsx("linearGradient", {
    x1: ".291",
    y1: "1.066",
    x2: ".648",
    y2: "-.11",
    id: "az"
  }, __jsx("stop", {
    offset: ".267",
    stopColor: "#00A39F"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#00E2EC"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "aA"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#9F36AD"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#C5188E"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "aB"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#7558CE"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E868EF"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "aC"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C5188E"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#9F36AD"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "aD"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C91C91"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FE6A77"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "aE"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#9F36AD"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#C5188E"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "aF"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#0FF",
    stopOpacity: ".251"
  }), __jsx("stop", {
    offset: ".085",
    stopColor: "#09FEFC",
    stopOpacity: ".271"
  }), __jsx("stop", {
    offset: ".225",
    stopColor: "#21FBF3",
    stopOpacity: ".306"
  }), __jsx("stop", {
    offset: ".401",
    stopColor: "#49F6E6",
    stopOpacity: ".349"
  }), __jsx("stop", {
    offset: ".607",
    stopColor: "#80F0D2",
    stopOpacity: ".4"
  }), __jsx("stop", {
    offset: ".835",
    stopColor: "#C6E8BA",
    stopOpacity: ".459"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FDE1A7",
    stopOpacity: ".502"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "aG"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#E9B3F2"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F9F7FF"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "aH"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#E367F2"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#00E2EC"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "aI"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FE6A77"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#C91C91"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "aJ"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#0FF",
    stopOpacity: ".251"
  }), __jsx("stop", {
    offset: ".085",
    stopColor: "#09FEFC",
    stopOpacity: ".271"
  }), __jsx("stop", {
    offset: ".225",
    stopColor: "#21FBF3",
    stopOpacity: ".306"
  }), __jsx("stop", {
    offset: ".401",
    stopColor: "#49F6E6",
    stopOpacity: ".349"
  }), __jsx("stop", {
    offset: ".607",
    stopColor: "#80F0D2",
    stopOpacity: ".4"
  }), __jsx("stop", {
    offset: ".835",
    stopColor: "#C6E8BA",
    stopOpacity: ".459"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FDE1A7",
    stopOpacity: ".502"
  }))), __jsx("path", {
    d: "M0 0h504v544.698H0V0z",
    fill: "none"
  }), __jsx("path", {
    d: "M121.907 8.364c34.757 12.666 84.474 37.657 107.51 43.598 34.256 8.836 110.49 3.972 115.09 38.107 2.587 19.205-11.439 30.321-38.492 37.402-22.03 5.766-46.645 6.394-52.291 18.157-6.537 13.618 15.977 22.151 12.346 39.581-3.928 18.855-47.545 28.816-93.688 23.967-50.112-5.265-91.723-19.331-93.993-46.301-1.33-15.794 18.813-41.49-15.491-45.208-18.967-2.055-40.127-5.81-55.613-28.86-11.36-16.91-9.068-44.205 4.327-61.291C34.03-1.077 79.057-7.251 121.907 8.364z",
    fill: "url(#a)",
    transform: "translate(159.33 297.286)"
  }), __jsx("path", {
    d: "M97.643 34.935C93.719 5.812 37.653 5.075 0 0l65.35 70.565c22.971-7.132 34.675-17.953 32.293-35.63z",
    transform: "translate(406.195 352.42)",
    fill: "url(#b)"
  }), __jsx("path", {
    d: "M482.68 418.828l-71.836-65.811c-7.065-.865-13.62-1.831-19.246-3.088h-.001l66.053 76.641a177.986 177.986 0 0 0 7.695-1.813c6.566-1.718 12.356-3.676 17.336-5.929z",
    fill: "#3369FF"
  }), __jsx("path", {
    d: "M21.467 0H0l17.653 19.488H42.82L21.467 0z",
    transform: "translate(428.75 387.718)",
    fill: "url(#c)"
  }), __jsx("path", {
    d: "M14.86 16.406h21.192L18.076 0H0l14.86 16.406z",
    transform: "translate(412.574 369.86)",
    fill: "url(#d)"
  }), __jsx("path", {
    d: "M0 0l14.489 15.995c.83-.202 1.657-.408 2.48-.623 7.044-1.844 13.196-3.964 18.412-6.427L25.58 0H0z",
    transform: "translate(448.377 409.385)",
    fill: "url(#e)"
  }), __jsx("path", {
    d: "M16.067 17.737h17.8L17.208 2.533C11.02 1.795 5.194.993 0 0l16.067 17.737z",
    transform: "translate(395.191 350.67)",
    fill: "url(#f)"
  }), __jsx("path", {
    d: "M120.017 2.55c-23.105 5.036-55.525 3.06-67.18 2.178C41.184 3.846 2.908-.537.184 14.533-1.95 26.347 14.71 36.865 41.581 37.41c32.061.65 72.178-13.01 101.485-8.473-5.125-7.848-12.206-14.329-8.161-22.756 1.209-2.518 3.292-4.524 6.028-6.181-5.731 0-12.62.74-20.916 2.55z",
    transform: "translate(278.149 436.733)",
    fill: "url(#g)",
    fillOpacity: ".4"
  }), __jsx("path", {
    d: "M48.633 19.143C71.005 3.993 117.916-5.078 154.548 3.044c41.76 9.26 62.64 30.322 105.308 27.235 35.644-2.578 102.767-1.452 127.823 1.816 25.056 3.268 73.958 7.626 74.079 49.749.083 29.292-26.012 34.486-38.856 41.034-14.825 7.558-32.198 12.165-32.198 29.777 0 14.162 15.587 20.361 24.936 27.598 11.257 8.715 25.959 20.453 19.608 41.397-4.722 15.572-20.93 28.094-37.775 29.3-7.116.51-32.417 4.058-61.41-8.255-16.775-7.125-31.3-22.376-36.445-36.297-10.213-27.638-11.395-23.331-25.6-21.061-35.144 5.614-55.197 21.969-74.806 46.118-19.626 24.169-43.449 46.277-73.715 45.391-37.221-1.089-35.901-35.068-51.928-54.47C52.869 197.32 6.903 175.955.699 114.284c-4.115-40.913 9.684-69.238 47.934-95.14z",
    fill: "url(#h)",
    transform: "translate(.32 24.446)"
  }), __jsx("path", {
    d: "M24.936 34.924c13.122 0 23.869-10.14 24.853-23.01C31.475 11.269 17.069 6.038 2.087 0A24.84 24.84 0 0 0 0 9.988C0 23.76 11.163 34.924 24.936 34.924z",
    fill: "url(#i)",
    transform: "translate(198.26 43.042)"
  }), __jsx("path", {
    d: "M16.22 23.027c8.536 0 15.526-6.595 16.167-14.965C21.15 6.722 11.27 3.684 1.497 0A16.156 16.156 0 0 0 0 6.807c0 8.958 7.262 16.22 16.22 16.22z",
    transform: "translate(206.976 46.223)",
    fill: "url(#j)"
  }), __jsx("path", {
    d: "M217.75 54.362a4.12 4.12 0 0 0 4.087-3.65c-.243-.07-.483-.145-.724-.215-.13 1.75-1.58 3.139-3.363 3.139a3.393 3.393 0 0 1-3.39-3.39c0-.635.187-1.223.492-1.732l-.712-.242a4.087 4.087 0 0 0-.506 1.974 4.12 4.12 0 0 0 4.116 4.116z",
    fill: "#CFDBA8"
  }), __jsx("path", {
    d: "M226.034 62.27c.744 1.155 2.057 1.817 3.602 1.817 1.095 0 2.193-.333 3.175-.965 2.426-1.563 3.334-4.49 2.024-6.523-.744-1.156-2.057-1.818-3.603-1.818-1.096 0-2.193.334-3.174.966-2.426 1.564-3.334 4.49-2.024 6.523zm2.417-5.913c.863-.555 1.825-.85 2.78-.85 1.295 0 2.385.541 2.992 1.485 1.094 1.696.283 4.172-1.807 5.519-.863.555-1.825.85-2.78.85-1.294 0-2.384-.542-2.992-1.485-1.094-1.697-.283-4.172 1.807-5.519z",
    fill: "#FDE1A7",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M212.486 65.313l-.428-.586c.89-.65 1.4-1.645 1.4-2.732 0-1.869-1.52-3.39-3.39-3.39-.64 0-1.269.187-1.82.54l-.392-.611a4.1 4.1 0 0 1 2.213-.655 4.12 4.12 0 0 1 4.115 4.116c0 1.321-.619 2.53-1.698 3.318z",
    fill: "#D5DCA8"
  }), __jsx("path", {
    d: "M62.452 0H51.62a66.089 66.089 0 0 0-4.299 2.663C19.151 21.741 4.256 42.14 0 67.906h62.452V0z",
    transform: "translate(1.631 40.926)",
    fill: "url(#k)"
  }), __jsx("path", {
    d: "M0 0v18.806C2.214 11.505 1.864 5.326 0 0z",
    transform: "translate(435.567 227.29)",
    fill: "url(#l)"
  }), __jsx("path", {
    d: "M57.04 28.557V0C46.467 3.193 37.205 7.292 30.29 11.975 17.561 20.595 7.554 29.488 0 39.019l49.052-2.473a7.989 7.989 0 0 0 7.989-7.989z",
    transform: "translate(18.663 31.615)",
    fill: "url(#m)"
  }), __jsx("path", {
    d: "M69.046 56.42V33.81c-7.805 2.8-14.674 6.109-20.094 9.779-8.368 5.667-15.567 11.45-21.663 17.456l38.126-.995a3.63 3.63 0 0 0 3.63-3.63z",
    fill: "#052D3C"
  }), __jsx("path", {
    d: "M24.936 27.598C15.587 20.361 0 14.162 0 0v98.844c2.967-.2 5.274-.44 6.769-.548 16.844-1.207 33.053-13.728 37.775-29.3V50.188c-3.485-9.951-12.275-16.914-19.608-22.59z",
    fill: "url(#n)",
    transform: "translate(391.022 177.1)"
  }), __jsx("path", {
    d: "M0 7.872v58.89c14.847-3.126 28.274-14.611 32.5-28.547C38.11 19.712 27.29 8.396 16.93 0L5.084 2.787A5.085 5.085 0 0 0 0 7.872z",
    transform: "translate(403.067 207.88)",
    fill: "url(#o)"
  }), __jsx("path", {
    d: "M405.246 215.753a2.908 2.908 0 0 1 2.905-2.905h.253l13.693-3.223a135.086 135.086 0 0 0-4.27-3.471l-9.95 2.341c-3.879.145-6.989 3.345-6.989 7.258v59.293a40.666 40.666 0 0 0 4.358-.922v-58.371z",
    fill: "#3369FF"
  }), __jsx("g", null, __jsx("path", {
    d: "M438.593 68.864v46.867h22.463c.661-2.84 1.03-5.965 1.02-9.441-.054-19.1-10.14-30.436-23.483-37.426z",
    fill: "#003451"
  }), __jsx("path", {
    d: "M33.65 56.522V10.79C23.557 4.995 11.28 1.932 0 0v56.522h33.65z",
    transform: "translate(407 59.21)",
    fill: "url(#p)"
  }), __jsx("path", {
    d: "M399.375 96.244h2.179v16.704h-2.18V96.244zM422.857 84.139h2.18v16.704h-2.18V84.139zM435.567 141.892c12.547-5.599 26.57-14.116 26.51-35.602-.016-5.553-.888-10.444-2.433-14.769h-24.077v50.371z",
    fill: "#003451"
  }), __jsx("path", {
    d: "M0 22.515V85.58c0-17.612 17.372-22.218 32.198-29.777 3.422-1.744 7.788-3.397 12.346-5.431V0L0 22.515z",
    transform: "translate(391.022 91.52)",
    fill: "url(#q)"
  }), __jsx("path", {
    d: "M0 27.478L44.544 4.964V0L0 22.514v4.964z",
    transform: "translate(391.022 91.521)",
    fill: "url(#r)"
  }), __jsx("path", {
    d: "M0 29.726c0 .802.09 2.815 1.453 2.27l35.95-17.43c1.059-.424 1.452-1.468 1.452-2.27V1.493c0-.802-.666-1.695-1.452-1.453L1.453 17.47C.408 18.062 0 19.21 0 20.014v9.713z",
    transform: "translate(391.81 69.755)",
    fill: "url(#s)"
  }), __jsx("path", {
    d: "M0 31.178c0 3.443 1.734 3.815 2.48 3.815.315 0 .64-.066.965-.196L39.45 17.345c1.705-.71 2.312-2.376 2.312-3.596V2.946C41.76 1.523 40.699 0 39.119 0c-.233 0-.465.035-.69.105l-.107.032-36.05 17.479-.082.042C.574 18.572 0 20.28 0 21.465v9.713zm2.905-9.713c0-.344.183-.955.683-1.259L38.855 3.107v10.641c0 .072-.014.711-.54.921L2.936 31.82a6.187 6.187 0 0 1-.03-.64v-9.714z",
    fill: "url(#t)",
    fillRule: "evenodd",
    transform: "translate(390.357 68.303)"
  }), __jsx("path", {
    d: "M0 0v4.964h25.488A39.56 39.56 0 0 0 24.078 0H0z",
    transform: "translate(435.567 91.521)",
    fill: "url(#u)"
  }), __jsx("g", null, __jsx("path", {
    d: "M12.347 0L1.453 5.084C.65 5.084 0 5.734 0 6.536v30.872c2.67-1.24 5.37-2.483 7.989-3.818 1.728-.88 3.7-1.738 5.81-2.632V1.453C13.799.65 13.149 0 12.347 0z",
    transform: "translate(415.232 113.734)",
    fill: "url(#v)"
  }), __jsx("path", {
    d: "M13.799 0L0 5.095v2.323l13.799-5.095V0z",
    transform: "translate(415.232 129.762)",
    fill: "url(#w)"
  }), __jsx("path", {
    d: "M14.163 0h-.403L2.79 5.119A3.273 3.273 0 0 0 0 8.352V40.07c1.202-.563 2.416-1.124 3.631-1.69V8.715L13.8 3.99V33.55c1.16-.503 2.377-1.015 3.631-1.543V3.268A3.271 3.271 0 0 0 14.163 0z",
    fill: "url(#x)",
    transform: "translate(413.416 111.919)"
  }))), __jsx("g", null, __jsx("path", {
    d: "M100.769 43.982a5.196 5.196 0 0 1-5.196 5.196H5.197A5.196 5.196 0 0 1 0 43.982V5.196A5.196 5.196 0 0 1 5.196 0h90.377a5.196 5.196 0 0 1 5.195 5.196v38.786h.001z",
    transform: "translate(276.334 42.573)",
    fill: "url(#y)"
  }), __jsx("path", {
    d: "M7.374 53.536h90.378c4.066 0 7.375-3.309 7.374-7.375V7.375c0-4.066-3.308-7.375-7.375-7.375H7.374C3.31 0 0 3.309 0 7.375v38.786c0 4.066 3.308 7.375 7.374 7.375zM4.358 7.376a3.02 3.02 0 0 1 3.017-3.018h90.377a3.02 3.02 0 0 1 3.017 3.017v38.786a3.02 3.02 0 0 1-3.017 3.017H7.375a3.02 3.02 0 0 1-3.017-3.017V7.375z",
    fill: "url(#z)",
    fillRule: "evenodd",
    transform: "translate(274.156 40.395)"
  }), __jsx("path", {
    d: "M366.573 54.816c0 .853-.69 1.543-1.543 1.543h-76.621a1.543 1.543 0 1 1 0-3.087h76.62c.853 0 1.544.691 1.544 1.544zM317.701 63.985H288.409a1.543 1.543 0 1 0 0 3.087H317.7a1.543 1.543 0 1 0 0-3.087zM365.03 63.985h-18.036a1.543 1.543 0 1 0 0 3.087h18.036a1.543 1.543 0 1 0 0-3.087zM337.19 63.985H326.537a1.543 1.543 0 1 0 0 3.087h10.651a1.543 1.543 0 1 0 0-3.087zM365.03 74.697H354.377a1.543 1.543 0 1 0 0 3.087h10.651a1.543 1.543 0 1 0 0-3.087zM343.15 74.697h-54.742a1.543 1.543 0 1 0 0 3.087h54.743a1.543 1.543 0 1 0 0-3.087z",
    fill: "#FDE1A7"
  })), __jsx("g", null, __jsx("path", {
    d: "M44.302 22.151C44.302 9.917 34.385 0 22.152 0 9.916 0 0 9.917 0 22.151s9.917 22.151 22.151 22.151c.373 0 .744-.01 1.113-.028L32.2 54.47V41.89c7.181-3.663 12.102-11.124 12.102-19.739z",
    fill: "url(#A)",
    transform: "translate(290.497 77.966)"
  }), __jsx("path", {
    d: "M320.86 96.376c.333-.936.5-1.985.5-3.149 0-1.12-.178-2.184-.532-3.189a7.267 7.267 0 0 0-1.67-2.68c-.76-.78-1.734-1.4-2.926-1.862-1.192-.46-2.624-.691-4.298-.691-.738 0-1.447.057-2.128.17-.681.113-1.298.252-1.851.415a9.487 9.487 0 0 0-1.426.531c-.397.191-.667.358-.808.5a1.035 1.035 0 0 0-.277.553c-.043.227-.064.588-.064 1.085 0 .482.017.88.053 1.192.035.312.081.553.138.723.057.17.128.287.213.351a.45.45 0 0 0 .277.096c.141 0 .344-.071.606-.213.262-.141.592-.297.99-.468.396-.17.871-.327 1.425-.469.553-.141 1.192-.212 1.915-.212.794 0 1.485.11 2.074.33.589.22 1.078.535 1.468.946.39.411.68.9.872 1.468.192.567.288 1.191.288 1.872a5.91 5.91 0 0 1-.245 1.724 3.665 3.665 0 0 1-.776 1.404 3.875 3.875 0 0 1-1.351.958c-.546.24-1.196.361-1.947.361h-.298c-.311 0-.582.033-.808.096-.227.063-.415.18-.564.351-.149.17-.252.397-.309.681-.056.284-.078.652-.063 1.106l.191 5.022a.66.66 0 0 0 .15.382c.085.1.22.178.404.234.184.057.436.096.755.117.319.021.712.032 1.18.032.739 0 1.302-.064 1.692-.191.39-.128.592-.32.607-.575l.17-4.15a8.453 8.453 0 0 0 2.798-.786 6.905 6.905 0 0 0 2.17-1.639c.603-.681 1.071-1.49 1.405-2.426zm-5.937 16.553c.092-.396.138-.886.138-1.467 0-.596-.046-1.096-.138-1.5-.092-.405-.256-.73-.49-.979-.233-.248-.545-.425-.936-.532-.39-.106-.869-.16-1.436-.16-.596 0-1.085.054-1.468.16a1.96 1.96 0 0 0-.925.532c-.234.248-.398.575-.49.979-.092.404-.138.904-.138 1.5 0 .581.046 1.071.138 1.467.092.398.256.717.49.958.234.242.542.414.925.521.383.107.872.16 1.468.16.568 0 1.046-.053 1.436-.16.39-.107.703-.28.937-.521.233-.241.397-.56.489-.958z",
    fill: "#FDE1A7",
    fillRule: "evenodd"
  })), __jsx("g", null, __jsx("path", {
    d: "M31.555 18.425c-3.995-8.473-5.205-9.32-8.715-12.71-3.511-3.39-6.066-6.009-6.78-5.688-.945.423-.725 2.905.062 5.023.786 2.119 2.117 3.208 2.117 3.208s-2.36-.242-7.383-2.482S1.718.026.87.874c-.848.848.847 3.753.847 3.753S.364 3.764.022 4.748c-.164.475.61 2.116 1.271 3.147.602.94 2.24 2.602 2.24 2.602s-.363.726.605 2.3c.968 1.574 5.507 6.173 10.228 8.398 3.538 1.667 7.203 1.952 7.203 1.952s-.298 3.983-.163 10.535c3.304-.45 8.767-1.628 13.73-4.43-1.164-4.357-2.404-8.33-3.581-10.827z",
    fill: "url(#B)",
    transform: "translate(259.971 175.743)"
  }), __jsx("path", {
    d: "M261.836 180.26c.293.37.676.7 1.048 1.027.378.324.767.636 1.162.941.791.607 1.604 1.195 2.44 1.711a.364.364 0 1 1-.377.621l-.02-.014a29.864 29.864 0 0 1-2.39-1.896 29.345 29.345 0 0 1-1.123-1.026c-.362-.358-.728-.709-1.037-1.147a.183.183 0 0 1 .044-.256c.08-.056.19-.04.25.035l.003.005zM263.396 186.088c.1-.08.277-.203.447-.245.17-.05.349-.067.517-.05.34.03.642.146.925.274.561.27 1.072.558 1.591.904.503.348.967.729 1.44 1.07.464.336.969.671 1.424.746l.017.002a.363.363 0 0 1-.117.718l-.026-.005c-.724-.174-1.204-.584-1.686-.954-.474-.38-.915-.78-1.375-1.134a12.694 12.694 0 0 0-1.47-.934c-.502-.262-1.05-.437-1.472-.09a.185.185 0 1 1-.235-.286l.02-.016zM278.25 183.873c1.41.333 2.76.984 3.982 1.766l.008.005a.363.363 0 1 1-.393.612c-.011-.006-.021-.014-.031-.022-1.104-.885-2.301-1.632-3.646-2.108a.134.134 0 1 1 .075-.256l.005.003z",
    fill: "#1AA9E8"
  }), __jsx("path", {
    d: "M39.745 3.432C38.836.363 35.266 0 35.266 0c-1.756 2.179-16.402 24.088-16.402 24.088S16.515 11.447 13.73 1.021C8.767 3.822 3.304 5.001 0 5.451c.11 5.275.5 12.212 1.555 20.09 2.208 16.492 5.384 22.109 9.199 22.877 4.357.877 14.405-3.632 22.757-9.32 8.352-5.69 7.145-32.597 6.234-35.666z",
    transform: "translate(281.378 203.973)",
    fill: "url(#C)"
  }), __jsx("path", {
    d: "M294.85 245.374c-.572 0-1.043-.146-1.39-.463-5.859-5.343-7.358-35.2-7.419-36.468-.01-.2.145-.37.345-.38a.349.349 0 0 1 .38.346c.015.307 1.544 30.824 7.184 35.966 2.83 2.588 18.63-10.668 28.553-20.207a.363.363 0 1 1 .503.524c-2.365 2.273-21.72 20.682-28.155 20.682z",
    fill: "#3369FF"
  }), __jsx("path", {
    d: "M10.175 3.91L9.68 1.386A1.716 1.716 0 0 0 7.666.032S3.366 1.368 0 1.863A182.3 182.3 0 0 0 .44 8.15c3.154-.17 8.38-2.224 8.38-2.224a1.716 1.716 0 0 0 1.355-2.014z",
    transform: "translate(281.59 213.188)",
    fill: "url(#D)"
  }), __jsx("path", {
    d: "M281.668 221.369a.363.363 0 0 0 .361.332h.02c3.177-.172 8.279-2.165 8.431-2.23a2.066 2.066 0 0 0 1.326-.88c.31-.461.422-1.015.315-1.56l-.495-2.526a2.082 2.082 0 0 0-2.038-1.68c-.133 0-.267.014-.44.05-.042.012-4.312 1.332-7.611 1.817a.363.363 0 0 0-.31.379c.112 2.114.26 4.234.44 6.298zm.692-.42a183.194 183.194 0 0 1-.39-5.589c3.301-.527 7.35-1.779 7.354-1.783a1.355 1.355 0 0 1 1.588 1.067l.495 2.525c.07.354-.003.715-.205 1.015-.201.3-.507.503-.925.591-.05.02-4.832 1.888-7.917 2.174z",
    fill: "#3369FF",
    fillRule: "evenodd"
  })), __jsx("g", null, __jsx("path", {
    d: "M48.382 8.451C45.88 5.958 41.705 3.144 33.806.875 25.909-1.395 3.03.784.399 7.048-2.234 13.312 8.69 22.44 17.935 24.594c9.244 2.154 31.88-.751 34.573-9.83.662-2.23-4.127-6.313-4.127-6.313z",
    transform: "translate(321.6 182.672)",
    fill: "url(#E)"
  }), __jsx("path", {
    d: "M24.693.246c-1.18 3.934 2.058 20.094 3.39 24.693-3.844 2.936-9.247 4.194-16.1 3.753C3.541 28.147 0 24.819 0 24.819s4.812-5.66 5.93-16.946C6.923-2.128 24.694.246 24.694.246z",
    transform: "translate(332.439 179.275)",
    fill: "url(#F)"
  }), __jsx("path", {
    d: "M32.45 29.55c3.707-5.035 7.843-13.415 1.292-22.541C30.05 1.865 22.602-.367 18.52.049 8.545 1.066 6.81 6.404 6.81 6.404 2.21 11.427-4.81 34.547 4.812 41.99c8.279 6.405 18.73-1.228 22.528-5.847a4.175 4.175 0 0 0 6.817-3.232 4.166 4.166 0 0 0-1.707-3.362z",
    transform: "translate(327.99 144.37)",
    fill: "url(#G)"
  }), __jsx("path", {
    d: "M32.713 21.424c-2.689.059-10.698 3.536-12.09 1.104-1.376-2.406 4-5.176 2.996-6.9-1.226-2.102-5.41.152-8.851 1.726-4.267 1.952-7.284 1.849-11.439-2.497-3.95-4.131-4.116-9.17-1.906-10.803C4.008 2.142 6.93 2.722 8.64 3.736c1.73 1.025 4.014 3.954 5.992 2.541 1.8-1.286-.386-4.702 2.179-5.9 2.557-1.196 6.975.575 9.244 3.616 2.27 3.04 2.326 4.131 5.916 4.645 4.767.681 14.144 3.33 14.662 15.69.424 10.107-6.21 14.03-8.624 15.55-2.413 1.518.368-9.01-.273-13.19-.318-2.072-2.238-5.325-5.023-5.264z",
    transform: "translate(325.751 134.192)",
    fill: "url(#H)"
  }), __jsx("path", {
    d: "M12.286.037c-.712-.356-4.722 1.937-7.384 4.055-2.39 1.9-5.21 2.94-4.875 4.224.336 1.284 4.996 2.736 4.996 2.736s.92-2.548 3.208-5.265C10.651 2.91 13.012.4 12.286.037z",
    transform: "translate(328.021 163.265)",
    fill: "url(#I)"
  }), __jsx("path", {
    d: "M334.633 181.894c-.223 0-.466-.025-.727-.08-2.444-.522-3.43-3.656-3.25-5.12a.363.363 0 1 1 .721.088c-.134 1.093.617 3.881 2.68 4.322 1.649.35 2.044-.825 2.06-.875a.359.359 0 0 1 .457-.236.363.363 0 0 1 .235.457c-.176.55-.84 1.444-2.176 1.444z",
    fill: "#9F36AD"
  }), __jsx("path", {
    d: "M344.827 171.216a1.84 1.84 0 1 1-2.786-2.406l2.95-3.417a1.84 1.84 0 1 1 2.786 2.406l-2.95 3.417z",
    fill: "#212F66"
  }), __jsx("path", {
    d: "M343.69 169.9a.677.677 0 0 1-1.024-.884l1.085-1.255a.676.676 0 1 1 1.023.885l-1.084 1.255z",
    fill: "#00E2EC"
  }), __jsx("path", {
    d: "M334.57 163.892a1.802 1.802 0 1 1-2.727-2.355l2.889-3.345a1.802 1.802 0 1 1 2.727 2.355l-2.889 3.345z",
    fill: "#212F66"
  }), __jsx("path", {
    d: "M333.457 162.605a.663.663 0 0 1-1.003-.866l1.062-1.23a.662.662 0 1 1 1.002.866l-1.061 1.23z",
    fill: "#00E2EC"
  }), __jsx("path", {
    d: "M11.499 8.397C11.105-1.12 0 .045 0 .045s1.845 1.286 2.482 5.447c.759 4.964-.675 9.885-1.874 12.196a4.178 4.178 0 0 1 2.621 2.136c2.383-1.358 8.518-5.446 8.27-11.427z",
    transform: "translate(358.464 155.57)",
    fill: "url(#J)"
  })), __jsx("g", null, __jsx("path", {
    d: "M58.033 124.669a5810.846 5810.846 0 0 1-.081-26.937c0-11.983 1.21-51.081.121-62.096-1.09-11.014-3.631-32.439-3.631-32.439s-20.68 2.516-33.42 1.535C7.356 3.682.632 0 .632 0 .46 3.091-.785 33.862.778 51.933c2.056 23.774 6.58 56.803 8.743 71.794 2.934 1.066 9.212 2.08 15.377.543.46-16.187 1.221-38.02 1.46-45.663.363-11.62 2.058-31.955 2.058-31.955s4.357 29.413 6.779 43.817c1.479 8.8 3.635 22.746 5.338 34.229 3.877.689 10.833.922 17.499-.029z",
    transform: "translate(315.763 288.049)",
    fill: "url(#K)"
  }), __jsx("path", {
    d: "M.288 83.623c2.624 2.648 11.851 10.163 45.26 5.624-1.15-11.62-4.678-35.988-3.71-45.308s4.22-39.536 4.22-39.536-10.999 2.617-19.472.801C18.113 3.39 14.36 0 14.36 0S7.4 15.615 3.043 45.755C-1.315 75.895.288 83.623.288 83.623z",
    transform: "translate(313.236 202.157)",
    fill: "url(#L)"
  }), __jsx("path", {
    d: "M335.89 293.11a.363.363 0 0 1-.363-.34c-.732-11.544 2.882-75.173 3.935-85.446a.363.363 0 1 1 .721.074c-1.05 10.262-4.661 73.806-3.931 85.326a.362.362 0 0 1-.34.384c-.008.002-.016.002-.023.002z",
    fill: "#FFA2BA"
  }), __jsx("path", {
    d: "M344.602 337.904a.363.363 0 0 1-.358-.309 820.816 820.816 0 0 1-1.22-8.704c-.623-4.548-1.329-9.703-1.484-10.132-.223-.58-4.116-4.114-5.79-5.474a.362.362 0 1 1 .458-.563c.82.666 5.661 4.847 6.011 5.782.171.457.69 4.207 1.524 10.29.437 3.19.888 6.487 1.219 8.694a.363.363 0 0 1-.36.416z",
    fill: "#212F66"
  }), __jsx("path", {
    d: "M2.56 0c2.45 2.39 5.945 3.771 9.524 4.659 3.607.879 7.39 1.26 11.187 1.39 7.611.233 15.305-.523 22.927-1.669l.683 5.037c-7.857.93-15.81 1.47-23.824.974-4.002-.263-8.025-.787-11.986-1.883-1.977-.552-3.938-1.253-5.827-2.2C3.365 5.366 1.52 4.138 0 2.549L2.56 0z",
    transform: "translate(312.244 284.505)",
    fill: "url(#M)"
  }), __jsx("path", {
    d: "M3.183 0c.013.02.313.256.595.428.295.185.622.368.962.54.679.348 1.406.657 2.146.93 1.487.546 3.043.945 4.617 1.202 3.152.517 6.381.45 9.493-.172l.882 5.006a31.43 31.43 0 0 1-11.229-.267 29.78 29.78 0 0 1-5.385-1.65 24.19 24.19 0 0 1-2.58-1.251c-.424-.24-.845-.498-1.274-.793C.978 3.657.56 3.388 0 2.753L3.183 0z",
    transform: "translate(329.036 201.991)",
    fill: "url(#N)"
  }), __jsx("path", {
    d: "M335.28 295.258c2.022.125 4.132.189 6.27.189 5.303 0 10.902-.37 17.619-1.164a.363.363 0 0 0 .317-.41l-.683-5.036a.361.361 0 0 0-.413-.31c-7.745 1.164-14.124 1.707-20.074 1.707-.93 0-1.861-.015-2.788-.043-4.264-.145-7.9-.597-11.112-1.38-4.22-1.044-7.28-2.539-9.358-4.565a.363.363 0 0 0-.51.002l-2.558 2.55a.363.363 0 0 0-.007.508c1.407 1.47 3.205 2.759 5.343 3.831 1.752.88 3.68 1.607 5.894 2.226 3.562.985 7.393 1.587 12.06 1.895zm-17.629-4.77c-1.939-.973-3.583-2.126-4.895-3.432l2.054-2.045c2.162 1.994 5.252 3.469 9.431 4.505 3.262.795 6.946 1.253 11.263 1.4.936.029 1.873.043 2.81.043 5.894 0 12.2-.528 19.817-1.66l.585 4.305c-6.526.762-11.99 1.117-17.167 1.117-2.123 0-4.217-.063-6.223-.188-4.614-.304-8.4-.898-11.912-1.87-2.168-.605-4.053-1.316-5.763-2.176zM339.613 210.014c2.092.435 4.25.655 6.411.655 1.652 0 3.316-.13 4.949-.384a.365.365 0 0 0 .301-.422l-.882-5.007a.361.361 0 0 0-.429-.293c-3.077.616-6.29.674-9.363.17a24.907 24.907 0 0 1-4.55-1.185 19.583 19.583 0 0 1-2.108-.912 12.07 12.07 0 0 1-.938-.528c-.228-.14-.47-.324-.485-.324a.362.362 0 0 0-.537-.068l-3.182 2.752a.362.362 0 0 0-.035.515c.517.587.921.878 1.311 1.159l.166.12c.406.28.831.544 1.301.811.803.453 1.659.869 2.618 1.27a30.214 30.214 0 0 0 5.452 1.671zm-9.113-4.461a6.575 6.575 0 0 1-.94-.78l2.67-2.311c.16.115.33.227.392.264.297.187.63.374.989.557.655.335 1.39.654 2.187.947 1.476.543 3.052.953 4.683 1.22a27.04 27.04 0 0 0 9.258-.104l.754 4.276a31.225 31.225 0 0 1-10.733-.32 29.492 29.492 0 0 1-5.318-1.63 23.827 23.827 0 0 1-2.541-1.23c-.451-.257-.86-.51-1.239-.771l-.162-.118z",
    fill: "#FFA2BA",
    fillRule: "evenodd"
  })), __jsx("g", null, __jsx("path", {
    d: "M17.674 0c.158 1.096.304 2.103.436 2.996 1.568 10.687 2.287 15.395 1.755 17.007C16.521 30.14.661 32.41.135 34.165c-.454 1.513.315 3.166 1.18 3.782 2.996 2.134 24.237.685 27.023.212 3.39-.575 5.386-1.937 5.447-3.026.048-.846-.968-9.2-1.089-16.704-.041-2.569.116-9.463.354-17.886-6.164 1.538-12.443.524-15.376-.543z",
    fill: "url(#O)",
    transform: "translate(307.61 411.775)"
  }), __jsx("path", {
    d: "M4.83 32.375c.847 2.663 2.482 2.905 5.387 4.297 2.905 1.392 15.434 7.14 20.336 6.717 4.902-.423 5.023-1.815 4.963-3.025-.06-1.211-3.026-4.418-7.263-7.626s-10.108-7.142-10.41-8.05c-.165-.494-.275-12.194-.343-24.688C10.834.951 3.877.718 0 .029c1.084 7.312 1.985 13.63 2.409 16.973 1.09 8.594 1.575 12.71 2.421 15.373z",
    transform: "translate(356.295 412.718)",
    fill: "url(#P)"
  }), __jsx("path", {
    d: "M5.918 6.378c2.905 1.392 15.434 7.14 20.336 6.717 4.903-.423 5.023-1.815 4.963-3.025-.012-.25-.155-.589-.4-.99-1.06.766-3.16 1.718-6.742 1.232C15.92 9.208 1.492 1.994 0 0c.166.79.34 1.476.532 2.08.846 2.664 2.481 2.907 5.386 4.298z",
    transform: "translate(360.594 443.012)",
    fill: "url(#Q)"
  }), __jsx("path", {
    d: "M1.315 5.133c2.996 2.134 24.237.685 27.023.212 3.39-.575 5.386-1.937 5.447-3.026.014-.238-.058-1.074-.169-2.319-1.926.878-5.854 2.302-12.42 3.136C10.121 4.543 1.36 2.864.135 1.351-.32 2.864.45 4.517 1.315 5.133z",
    transform: "translate(307.61 444.589)",
    fill: "url(#R)"
  }), __jsx("path", {
    d: "M10.24 4.554A2790.61 2790.61 0 0 1 10.203 0H4.887A4.902 4.902 0 0 0 0 4.554h10.24z",
    transform: "translate(363.64 420.264)",
    fill: "url(#S)"
  }), __jsx("path", {
    d: "M10.326 4.236c-.017-1.275-.035-2.7-.05-4.236H0v4.236h10.326z",
    transform: "translate(363.623 426.694)",
    fill: "url(#T)"
  }), __jsx("path", {
    d: "M10.355 0H0a4.904 4.904 0 0 0 4.904 4.887h5.805a1.076 1.076 0 0 1-.194-.288c-.06-.181-.113-1.89-.16-4.599z",
    transform: "translate(363.623 432.806)",
    fill: "url(#U)"
  }), __jsx("g", null, __jsx("path", {
    d: "M6.778 5.679v-1.66C6.778 1.8 4.978 0 2.759 0H0c.323 2.217.59 4.089.798 5.679h5.98z",
    fill: "url(#V)",
    transform: "translate(326.338 418.988)"
  }), __jsx("path", {
    d: "M.513 0c.319 2.77.372 4.39.104 5.205C.445 5.725.234 6.22 0 6.698h2.238c2.22 0 4.018-1.8 4.018-4.02V0H.513z",
    transform: "translate(326.86 426.573)",
    fill: "url(#W)"
  }))), __jsx("g", null, __jsx("path", {
    d: "M36.676 3.768c-2.31 7.136-5.983 25.432-7.747 44.787-1.886 20.703-2.965 31.652-3.147 59.069-.245 37.055 4.031 61.481 3.632 62.337-.636 1.362-14.526-2.662-19.973-5.567C3.994 161.489 0 157.857 0 157.857s7.263-48.659 11.983-76.983c4.721-28.325 11.984-55.197 12.528-62.64.545-7.445 1.09-16.16 1.09-16.16S27.78-.468 31.774.077c3.995.544 4.902 3.691 4.902 3.691z",
    transform: "translate(291.042 201.899)",
    fill: "url(#X)"
  }), __jsx("path", {
    d: "M.14 2.24L.007 4.752c-.048 1.203.095 2.234 1.97 3.535l4.3 3.125c.263-2.455.531-4.996.796-7.695L2.405.152C1.01-.49.188 1.038.14 2.24z",
    transform: "translate(312.517 250.762)",
    fill: "url(#Y)"
  }), __jsx("path", {
    d: "M2.4.162C.654-.51.184 1.049.135 2.25L.003 4.761c-.049 1.203.487 1.96 2.088 3.02l3.384 2.344c.32-2.457.663-4.858 1.02-7.179L2.4.162z",
    transform: "translate(315.807 228.54)",
    fill: "url(#Z)"
  }), __jsx("path", {
    d: "M4.543 0c-.181 7.081 10.35 7.717 11.53 9.29 1.713 2.285-4.6 15.01-6.537 14.768-1.937-.242-5.305-5.935-6.808-7.535C1.32 15.024-.087 13.436.004 12.527.094 11.62 2.977 2.027 4.544 0z",
    transform: "translate(317.455 189.72)",
    fill: "url(#aa)"
  }), __jsx("path", {
    d: "M325.287 213.05a.362.362 0 0 1-.268-.61c3.218-3.498 6.87-9.899 6.06-11.409-.215-.4-1.323-.97-2.497-1.572-3.204-1.646-8.046-4.132-7.631-8.94a.369.369 0 0 1 .393-.33c.2.017.348.193.33.393-.372 4.321 4.209 6.673 7.24 8.23 1.441.74 2.483 1.275 2.804 1.875 1.165 2.17-3.329 9.161-6.164 12.245a.36.36 0 0 1-.267.118z",
    fill: "#3369FF"
  })), __jsx("g", null, __jsx("path", {
    d: "M6.984 6.59C6.076 10.132 1.375 45.546.417 81.912c-.957 36.312-.145 85.716 1.21 87.635 1.454 2.059 14.95-2.239 23.725-5.083 8.323-2.699 15.494-7.021 15.494-7.021s-.968-42.123-.968-58.585c0-16.462-5.75-90.904-5.75-90.904S28.964 1.436 20.148.145C11.33-1.145 6.983 6.591 6.983 6.591z",
    transform: "translate(348.242 207.64)",
    fill: "url(#ab)"
  }), __jsx("path", {
    d: "M16.71 0L2.095 5.72C.127 6.503-.042 7.536.007 8.74l.132 2.51c.049 1.203.776 2.366 2.265 2.09l13.44-5.782A365.7 365.7 0 0 1 16.71 0z",
    transform: "translate(343.145 231.815)",
    fill: "url(#ac)"
  }), __jsx("path", {
    d: "M14.414 0L2.094 3.804C.128 4.59-.041 5.622.008 6.824l.132 2.511c.049 1.202.776 2.366 2.265 2.09l11.5-3.99c.16-2.521.331-5.003.51-7.435z",
    transform: "translate(343.12 255.898)",
    fill: "url(#ad)"
  }), __jsx("path", {
    d: "M344.744 245.521a.364.364 0 0 1-.347-.255 3.369 3.369 0 0 1-.145-.855l-.131-2.506c-.05-1.224.088-2.489 2.315-3.378l12.947-5.066a.364.364 0 0 1 .265.677l-12.945 5.066c-1.792.714-1.901 1.593-1.857 2.667l.131 2.507c.01.238.047.464.113.674a.362.362 0 0 1-.346.47zM344.718 267.69a.364.364 0 0 1-.347-.256 3.37 3.37 0 0 1-.144-.855l-.132-2.507c-.05-1.223.088-2.488 2.316-3.377l11.013-3.402a.363.363 0 0 1 .214.694l-10.986 3.392c-1.767.706-1.876 1.584-1.831 2.659l.131 2.506c.01.239.047.464.113.674a.362.362 0 0 1-.347.471z",
    fill: "#3369FF"
  }), __jsx("path", {
    d: "M357.498 377.206a.363.363 0 0 1-.358-.314c-4.803-35.018-1.915-139.884 6.182-165.585a.363.363 0 1 1 .692.218c-8.076 25.638-10.95 130.305-6.155 165.268a.36.36 0 0 1-.31.408.283.283 0 0 1-.05.005z",
    fill: "#3369FF"
  }), __jsx("path", {
    d: "M378.782 370.54a.364.364 0 0 1-.356-.295c-4.833-25.052-1.07-93.79.167-116.376l.206-3.798c.011-.2.188-.355.381-.343.2.01.354.181.344.382l-.206 3.798c-1.236 22.565-4.996 91.235-.179 116.2a.363.363 0 0 1-.357.431z",
    fill: "#9F36AD"
  }), __jsx("path", {
    d: "M24.75 0C17.683 2.149 6.783 5.564 2.33 7.5.939 8.108 0 9.174 0 10.377v11.287c0 1.203.885 1.846 2.089 1.846l23.09-10.094-.002-.95c0-2.746-.16-7.11-.427-12.465z",
    transform: "translate(362.942 294.033)",
    fill: "url(#ae)"
  }), __jsx("path", {
    d: "M365.366 317.765a.366.366 0 0 1-.313-.178 2.234 2.234 0 0 1-.297-1.115l-.202-11.285c-.024-1.315.907-2.53 2.49-3.253 3.562-1.626 11.338-4.297 17.234-6.251a.363.363 0 0 1 .229.69c-8.43 2.794-14.363 4.946-17.16 6.222-1.312.598-2.084 1.563-2.066 2.58l.202 11.284c.005.292.071.547.197.758a.364.364 0 0 1-.314.548z",
    fill: "#9F36AD"
  }), __jsx("path", {
    d: "M370.266 315.617a.363.363 0 0 1-.363-.363v-8.03c0-1.419 1.181-2.5 2.353-2.943l.64-.247c1.464-.568 3.676-1.426 5.236-1.56.673-.056 1.256.119 1.684.512.437.401.678 1.01.678 1.714v6.24a.363.363 0 0 1-.727 0v-6.24c0-.505-.153-.913-.441-1.178-.275-.254-.67-.363-1.132-.324-1.457.125-3.61.96-5.036 1.513l-.646.25c-.938.353-1.884 1.191-1.884 2.262v8.03c0 .201-.162.364-.362.364z",
    fill: "#3369FF"
  }), __jsx("path", {
    d: "M1.728 10.41C3.225 8.913 9.37 9.55 16.01 8.473c7.474-1.21 10.773-2.33 11.257-3.994.608-2.087-2.3-4.479-2.3-4.479s6.658 3.874 6.537 5.568C31.383 7.263 27.267 18.4 27.267 18.4s-7.867 3.753-13.436 6.173c-5.568 2.421-11.014 6.052-12.71 5.206-1.694-.847-1.452-17.31.606-19.368z",
    fill: "url(#af)",
    transform: "translate(344.51 190.657)"
  }), __jsx("path", {
    d: "M347.13 220.414c-.447-2.085-.536-4.176-.595-6.264-.038-2.088.007-4.177.204-6.262.103-1.043.234-2.085.463-3.122.118-.519.253-1.037.476-1.552.116-.256.244-.515.472-.76.226-.23.504-.384.757-.495 1.043-.429 2.088-.55 3.129-.689a73.354 73.354 0 0 1 3.115-.283c2.073-.154 4.14-.286 6.19-.538a43.71 43.71 0 0 0 6.066-1.19c.99-.277 1.97-.596 2.906-1.004.918-.412 1.865-.9 2.457-1.645.596-.739.311-1.82-.167-2.679-.484-.882-1.144-1.692-1.863-2.425a.067.067 0 0 1-.005-.094c.023-.026.064-.027.091-.007.818.656 1.556 1.418 2.12 2.33.282.454.502.962.591 1.517.092.546-.008 1.194-.373 1.65-.712.897-1.693 1.377-2.644 1.822-.964.429-1.961.762-2.967 1.052a44.23 44.23 0 0 1-6.138 1.252c-2.071.27-4.148.418-6.215.588a72.822 72.822 0 0 0-3.084.303c-1.01.138-2.052.284-2.933.658-.457.193-.682.443-.873.913-.188.44-.316.932-.423 1.425-.21.992-.334 2.015-.426 3.039a59.255 59.255 0 0 0-.196 6.181c.055 2.057.148 4.14.573 6.119l.002.007a.363.363 0 0 1-.71.153z",
    fill: "#3369FF"
  }), __jsx("path", {
    d: "M363.123 213.659a.363.363 0 0 1-.345-.475c1.036-3.194 4.017-13.438 4.047-13.54a.36.36 0 0 1 .45-.248.363.363 0 0 1 .248.45c-.03.104-3.015 10.359-4.055 13.562a.364.364 0 0 1-.345.25z",
    fill: "#3369FF"
  })), __jsx("g", null, __jsx("path", {
    d: "M31.17 97.544c-.009-.747-.337-27.154-2.722-42.904C25.756 36.868 17.068 3.075 11.925.17 9.308-1.307.167 6.828.002 25.468c-.122 13.799 4.59 24.816 7.626 37.281 2.844 11.678 7.934 30.419 8.715 35.587l.074.492c3.429-1.215 10.042-1.634 14.753-1.284z",
    fill: "url(#ag)",
    transform: "translate(370.445 215.423)"
  }), __jsx("path", {
    d: "M0 .003L.841 7.92l5.454-.286-.284-6.54C6.011 1.097 4.395-.062 0 .004z",
    transform: "translate(394.996 293.114)",
    fill: "url(#ah)"
  }), __jsx("path", {
    d: "M395.476 301.074a.362.362 0 0 0 .38.325l5.454-.286a.363.363 0 0 0 .345-.378l-.284-6.54a.363.363 0 0 0-.152-.279c-.066-.048-1.673-1.165-5.868-1.165l-.36.003a.362.362 0 0 0-.355.402l.84 7.918zm.686-.419l-.763-7.178c3.22.008 4.8.702 5.254.946l.26 5.983-4.751.249z",
    fill: "#3369FF",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M6.22 22.397c1.513-.485.998-6.99.998-6.99s1.045.545 2.589 3.722c1.543 3.178 4.149 8.652 5.582 8.08.908-.364.726-2.966.726-2.966s1.271-.121 1.543-2.573c.304-2.73.363-10.44-.907-15.342C15.48 1.426 14.753.155 14.753.155V.119C10.043-.23 3.429.188 0 1.403c.834 5.555.93 6.784 1.428 9.647.728 4.188 3.39 11.796 4.792 11.347z",
    transform: "translate(386.862 312.848)",
    fill: "url(#ai)"
  }), __jsx("path", {
    d: "M401.067 330.257c.677 1.03 1.127 2.152 1.478 3.297.343 1.147.558 2.33.636 3.52a.205.205 0 0 1-.408.035 15.477 15.477 0 0 0-.77-3.38c-.384-1.085-.872-2.148-1.533-3.057a.364.364 0 1 1 .597-.415zM394.391 324.446c-.109.237-.142.586-.168.918-.023.336-.03.681-.028 1.025.004.69.043 1.385.094 2.08a.193.193 0 0 1-.178.207.194.194 0 0 1-.205-.162 31.35 31.35 0 0 1-.266-2.1c-.03-.353-.053-.709-.057-1.07.004-.363-.01-.73.127-1.15l.004-.012a.365.365 0 0 1 .693.224l-.016.04z",
    fill: "#B75334"
  }), __jsx("g", null, __jsx("path", {
    d: "M396.49 313.235h-.007a.363.363 0 0 1-.356-.37c.237-14.166-8.123-78.229-20.63-92.353a.362.362 0 1 1 .543-.482c12.615 14.246 21.052 78.622 20.813 92.847a.363.363 0 0 1-.363.358z",
    fill: "#3369FF"
  }))), __jsx("g", null, __jsx("path", {
    d: "M158.861 81.083L5.308 94.429C.632 107.574-.652 122.114 1.02 138.73c6.203 61.67 52.17 83.036 72.868 108.092A44.718 44.718 0 0 1 75.571 249l83.29-33.226V81.083z",
    fill: "#3369FF"
  }), __jsx("path", {
    d: "M153.795 0L2.86 14.387C-.038 25.66-.684 37.963.697 51.685c5.92 58.853 48.05 81 69.877 104.677l83.221-30.103V0z",
    transform: "translate(.323 87.044)",
    fill: "url(#aj)"
  }), __jsx("path", {
    d: "M78.594 224.995c-10.257-2.188-26.544-12.423-29.38-31.651-1.523-10.334.03-18.853 1.531-27.093 1.362-7.477 2.65-14.54 1.554-22.492-1.67-12.12-11.263-18.843-16.102-20.704l1.304-3.39c5.94 2.285 16.498 9.825 18.395 23.598 1.175 8.528-.225 16.21-1.578 23.639-1.449 7.95-2.947 16.17-1.51 25.911 2.565 17.398 17.279 26.654 26.543 28.63l-.757 3.552z",
    fill: "#3369FF"
  })), __jsx("g", null, __jsx("path", {
    d: "M83.58 10.346c-.362 4.54-2.123 25.548-.665 38.916 2.905 26.63-8.759 32.196-10.432 42.054-1.089 6.416 4.017 10.721 4.017 10.721s-6.295 7.868-35.224 3.026C12.346 100.222 0 85.091 0 85.091S29.535 52.41 33.166 30.863C36.798 9.317 40.395-.949 59.78.07 79.163 1.087 83.58 10.346 83.58 10.346z",
    transform: "translate(99.792 75.427)",
    fill: "url(#ak)"
  }), __jsx("path", {
    d: "M176.292 177.464s-5.106-4.305-4.017-10.721c1.674-9.859 13.338-15.425 10.433-42.055-1.459-13.367.302-34.376.666-38.915 0 0-.584-1.211-2.236-2.804-1.048 7.831-.126 23.477-.126 29.857 0 7.081 1.816 21.062-10.894 33.953-11.557 11.723-12.604 21.345-11.607 35.28 14.19-.118 17.78-4.595 17.78-4.595z",
    fill: "#13E7ED"
  }), __jsx("path", {
    d: "M44.816 72.023c.362-8.448 7.536-8.82 13.346-33.877C61.975 21.704 59.472 9.903 53.83 0 39.596 1.348 36.39 11.578 33.166 30.702 29.535 52.248 0 84.93 0 84.93s12.347 15.13 41.276 19.972c2.135.358 4.132.638 6.028.865 7.043-13.88-2.85-25.316-2.488-33.744z",
    transform: "translate(99.791 75.588)",
    fill: "url(#al)"
  })), __jsx("g", null, __jsx("path", {
    d: "M72.886 42.857c-1.407-3.708-3.082-6.824-5.112-8.81-5.24-5.123-15.726-5.852-20.88-5.628 0 0-2.542 1.27-8.197-3.109C33.042 20.931 23.653 3.726 14.937.82 6.224-2.083-.728 2.54 1.732 17.619 4.65 35.5-5.398 57.53 4.407 73.266 14.803 89.95 36.654 89.78 41.628 87.609c.853-3.356 4.68-13.767 6.718-16.25 2.292-4.018 13.129-25.336 24.54-28.502z",
    transform: "translate(70.571 123.807)",
    fill: "url(#am)"
  }), __jsx("path", {
    d: "M43.942 28.418s-2.542 1.27-8.197-3.109C30.091 20.93 20.701 3.725 11.986.82 6.862-.887 2.35.012 0 4.104 5.615 17.75 20.444 44.95 24.878 46.756c4.624 1.884 28.144-1.566 42.075-10.04-.664-1.028-1.373-1.928-2.131-2.67-5.24-5.123-15.725-5.852-20.88-5.628z",
    transform: "translate(73.523 123.808)",
    fill: "url(#an)"
  }), __jsx("path", {
    d: "M102.525 171.43c-1.918 0-3.393-.176-4.261-.53a.362.362 0 1 1 .273-.672c4.733 1.928 28.012-1.652 41.754-10.01a.364.364 0 0 1 .378.62c-11.408 6.938-29.383 10.591-38.144 10.591z",
    fill: "#00CFFF"
  }), __jsx("path", {
    d: "M92.005 210.624a.364.364 0 0 1-.286-.587c4.78-6.115 5.675-23.69 5.29-28.185-.362-4.227.28-10.145 2.533-13.838 4.428-7.256 10.217-12.83 14.187-16.39a.362.362 0 1 1 .485.54c-3.935 3.53-9.673 9.053-14.051 16.228-2.168 3.552-2.782 9.288-2.43 13.397.392 4.561-.54 22.424-5.44 28.695a.362.362 0 0 1-.288.14z",
    fill: "#00CFFF"
  }), __jsx("path", {
    d: "M18.3 5.985a1.82 1.82 0 0 1-1.972 1.656L1.662 6.357A1.821 1.821 0 0 1 .007 4.384l.238-2.721A1.821 1.821 0 0 1 2.218.007l14.665 1.284a1.822 1.822 0 0 1 1.656 1.973l-.238 2.72z",
    transform: "translate(87.62 190.049)",
    fill: "url(#ao)"
  }), __jsx("path", {
    d: "M103.917 198.051a2.197 2.197 0 0 0 2.366-1.986l.238-2.72a2.168 2.168 0 0 0-.503-1.595 2.169 2.169 0 0 0-1.483-.772l-14.665-1.284a2.197 2.197 0 0 0-2.366 1.986l-.239 2.721c-.05.581.128 1.148.503 1.594a2.17 2.17 0 0 0 1.483.772l14.666 1.284zm-15.69-6.307a1.466 1.466 0 0 1 1.58-1.326l14.666 1.284c.388.033.74.217.99.515.25.297.37.676.335 1.063l-.238 2.722a1.466 1.466 0 0 1-1.58 1.326l-14.665-1.284a1.446 1.446 0 0 1-.99-.515 1.448 1.448 0 0 1-.335-1.064l.238-2.721z",
    fill: "#00CFFF",
    fillRule: "evenodd"
  }), __jsx("g", null, __jsx("path", {
    d: "M105.064 213.162c-9.037 0-22.999-3.343-30.702-15.705-6.062-9.729-4.601-22.505-3.19-34.86.9-7.868 1.83-16.004.692-22.974a.726.726 0 0 1 1.434-.234c1.17 7.17.228 15.407-.682 23.372-1.384 12.109-2.815 24.629 2.98 33.928 10.085 16.186 31.269 16.263 36.313 14.062a.725.725 0 1 1 .58 1.331c-1.43.625-4.094 1.08-7.425 1.08z",
    fill: "#3369FF"
  }))), __jsx("g", null, __jsx("path", {
    d: "M.367 47.504C2.6 49.847 8.533 71.212 11.62 85.374c3.086 14.162 11.438 27.235 22.877 26.327 11.438-.908 25.056-21.061 35.768-36.131 10.713-15.07 30.776-48.297 30.776-48.297s9.039 1.094 19.655.681c11.666-.454 17.748-3.678 21.652-4.811 4.548-1.321 9.003-1.752 9.714-2.588.772-.908.09-1.816-.817-2.27 2.269-.09 8.005-2.91 8.17-4.448.137-1.27-1.993-.791-1.993-.791s3.446-1.343 3.125-2.597c-.339-1.327-9.484-.788-12.117-.788-2.632 0-8.522-.337-13.799-.454-5.416-.12-11.287.09-14.343.545 3.812-1.271 9.986-6.97 8.987-9.26-.726-1.665-6.446 1.362-10.258 2.179-3.813.817-12.159 2.403-19.277 5.961-7.504 3.753-13.557 9.804-23.12 22.756-9.561 12.951-37.946 42.547-37.946 42.547s-4.055-9.745-6.355-19.428c-1.729-7.277-3.526-23.917-7.78-35.13C13.13 22.545 2.293 43.863 0 47.88c.13-.157.253-.285.367-.375z",
    transform: "translate(118.917 147.286)",
    fill: "url(#ap)"
  }), __jsx("path", {
    d: "M81.584 8.019c-6.9 9.078-10.895 18.64-16.22 25.66C60.038 40.7 42.143 65.185 33.15 64.036c-7.369-.94-11.363-9.656-14.39-21.76-2.619-10.479-4.88-29.927-10.962-34.57C3.912 13.414 1.053 18.912 0 20.757c.13-.158.253-.286.367-.376 2.235 2.344 8.167 23.708 11.253 37.87C14.707 72.415 23.06 85.487 34.498 84.58c11.438-.907 25.056-21.061 35.768-36.131S101.042.15 101.042.15C95.019-.09 88.483-1.059 81.583 8.02z",
    transform: "translate(118.917 174.408)",
    fill: "url(#aq)"
  }), __jsx("path", {
    d: "M157.262 258.383a.362.362 0 0 1-.283-.136c-10.03-12.467-3.679-32.569.336-37.262a.364.364 0 0 1 .552.472c-3.914 4.575-10.104 24.175-.322 36.334a.363.363 0 0 1-.283.592z",
    fill: "#00CFFF"
  }), __jsx("path", {
    d: "M152.677 238.844c-.223 0-.441-.014-.655-.04-6.652-.85-11.046-7.44-14.695-22.034-.634-2.535-1.246-5.594-1.895-8.831-1.973-9.85-4.429-22.109-8.937-25.547a.363.363 0 1 1 .441-.578c4.726 3.605 7.107 15.493 9.209 25.982.647 3.229 1.257 6.279 1.887 8.798 3.517 14.067 7.86 20.694 14.083 21.489 8.286 1.057 24.72-20.724 30.903-28.925l.974-1.29c2.473-3.259 4.67-7.092 6.996-11.15 2.72-4.746 5.533-9.653 9.225-14.51 6.565-8.64 12.949-8.333 18.58-8.065.396.019.79.037 1.181.053.2.008.357.178.348.378-.008.2-.186.363-.377.348-.394-.015-.79-.035-1.188-.054-5.72-.273-11.632-.556-17.967 7.778-3.663 4.82-6.464 9.707-9.172 14.433-2.338 4.08-4.546 7.932-7.048 11.229l-.972 1.287c-6.1 8.09-22.054 29.25-30.92 29.25z",
    fill: "#00CFFF"
  }), __jsx("path", {
    d: "M270.472 165.75c-.898-.23-1.836-.245-2.765-.209-.93.044-1.861.13-2.787.263a75.29 75.29 0 0 0-5.527 1.028l-5.504 1.252c-.455.097-.942.196-1.422.23-.495.035-.972.02-1.452-.025-.952-.104-1.902-.299-2.774-.715a.104.104 0 1 1 .08-.192h.004c.868.31 1.8.436 2.72.484.46.023.926.013 1.369-.039.46-.05.89-.175 1.355-.276 1.825-.432 3.65-.916 5.5-1.293 1.847-.386 3.705-.746 5.59-.942 1.874-.183 3.818-.33 5.674.213a.115.115 0 0 1-.061.22zM261.448 161.387c2.663-.07 5.3-.41 7.944-.747 1.321-.182 2.644-.371 3.976-.51 1.33-.135 2.682-.266 4.04-.097a.114.114 0 0 1 .1.128.113.113 0 0 1-.107.1h-.006c-1.317.06-2.627.31-3.946.492-1.317.202-2.641.39-3.971.548-2.653.335-5.348.567-8.033.405a.16.16 0 0 1-.152-.167.163.163 0 0 1 .155-.152z",
    fill: "#668DE7"
  }), __jsx("path", {
    d: "M118.917 195.529a.362.362 0 0 1-.315-.543c.194-.34.448-.803.76-1.37 3.315-6.028 13.404-24.373 23.993-27.315a.364.364 0 0 1 .195.7c-10.295 2.86-20.273 21.004-23.553 26.966-.313.57-.57 1.037-.765 1.379a.361.361 0 0 1-.315.183z",
    fill: "#00CFFF"
  }), __jsx("path", {
    d: "M17.794 7.263a5.084 5.084 0 0 1-5.084 5.084H5.084A5.084 5.084 0 0 1 0 7.263v-2.18A5.084 5.084 0 0 1 5.084 0h7.626a5.084 5.084 0 0 1 5.084 5.084v2.179z",
    transform: "translate(143.065 232.66)",
    fill: "url(#ar)"
  }), __jsx("path", {
    d: "M148.15 245.37h7.625a5.453 5.453 0 0 0 5.447-5.447v-2.18a5.453 5.453 0 0 0-5.447-5.446h-7.626a5.453 5.453 0 0 0-5.447 5.447v2.179a5.453 5.453 0 0 0 5.447 5.447zm-4.722-7.626a4.726 4.726 0 0 1 4.721-4.72h7.626a4.726 4.726 0 0 1 4.72 4.72v2.179a4.726 4.726 0 0 1-4.72 4.72h-7.626a4.726 4.726 0 0 1-4.72-4.72v-2.18z",
    fill: "#00CFFF",
    fillRule: "evenodd"
  }), __jsx("g", null, __jsx("path", {
    d: "M12.736 14.432a2.18 2.18 0 0 1-3.079.124S.507 8.77 0 5.652C1.074 4.473 3.639 1.19 5.122 0c2.103 3.322 9.705 8.95 9.705 8.95.884.815.94 2.194.125 3.078l-2.216 2.404z",
    transform: "translate(174.605 197.382)",
    fill: "url(#as)"
  }), __jsx("path", {
    d: "M184.017 212.205c.47.434 1.082.673 1.722.673a2.55 2.55 0 0 0 1.87-.82l2.215-2.402a2.538 2.538 0 0 0-.176-3.617c-.075-.055-7.57-5.624-9.614-8.851l-.217-.343-.316.254c-1.077.864-2.65 2.73-3.912 4.231-.502.596-.94 1.117-1.252 1.459l-.119.13.029.173c.526 3.242 9.442 8.914 9.77 9.113zm.439-.573c-2.451-1.55-8.809-6.028-9.458-8.493.305-.342.701-.813 1.145-1.342 1.067-1.267 2.491-2.96 3.509-3.874 2.373 3.36 9.26 8.476 9.533 8.676.356.329.564.777.583 1.261.02.485-.15.948-.479 1.305l-2.215 2.402c-.651.708-1.8.802-2.618.065z",
    fill: "#00CFFF",
    fillRule: "evenodd"
  }))), __jsx("g", null, __jsx("path", {
    d: "M33.994 15.252c-3.631 3.389-19.004 15.13-19.004 15.13s-10.41 1.09-14.525.242C-3.651 29.776 20.922 0 20.922 0l13.072 15.252z",
    transform: "translate(107.074 124.083)",
    fill: "url(#at)"
  }), __jsx("path", {
    d: "M54.833 9.93c.726 7.928 0 58.283-25.6 59.19C10.18 69.797 0 54.899 0 54.899S.908 6.117 4.54 3.575C8.17 1.033 32.136-1.145 40.125.67c7.989 1.816 14.707 9.26 14.707 9.26z",
    transform: "translate(126.543 75.48)",
    fill: "url(#au)"
  }), __jsx("path", {
    d: "M0 .655v9.647c0 2.08 1.543 3.737 3.722 3.646 2.702-.112 3.55-2.379 3.957-4.419.347-1.745.906-6.338 1.266-9.442C6.182-.216 1.949.345 0 .655z",
    transform: "translate(150.418 93.673)",
    fill: "url(#av)"
  }), __jsx("path", {
    d: "M157.44 98.634l-4.933 4.085s.484 2.845 2.844 2.118c2.028-.623 2.088-6.203 2.088-6.203z",
    fill: "#5097FF"
  }), __jsx("path", {
    d: "M0 .003V9.54c0 1.942 1.44 3.489 3.474 3.404 2.522-.105 3.314-2.22 3.693-4.125.324-1.629.199-4.639.535-7.536C5.013.275 2.017-.034 0 .003z",
    transform: "translate(173.594 95.575)",
    fill: "url(#aw)"
  }), __jsx("path", {
    d: "M180.01 100.357l-4.604 3.813s.453 2.654 2.656 1.977c1.892-.583 1.949-5.79 1.949-5.79z",
    fill: "#5097FF"
  }), __jsx("path", {
    d: "M4.146 0c.847 2.179 5.537 20.517 4.75 21.788C8.11 23.058 0 23.468 0 23.468s1.749-3.774 2.633-9.426C3.586 7.944 4.146 0 4.146 0z",
    transform: "translate(164.762 94.488)",
    fill: "url(#ax)"
  }), __jsx("path", {
    d: "M151.372 125.582c.5-.636 6.037 1.135 10.849 1.498 2.039.154 4.403.227 4.403.227s-2.905 7.445-7.989 7.309c-5.403-.146-7.763-8.399-7.263-9.034z",
    fill: "#FFF"
  })), __jsx("g", null, __jsx("path", {
    d: "M87.365 36.245c4.599-2.663 26.629-4.237 43.575 6.415 3.269-11.015-3.138-40.617-39.203-42.547-35.057-1.876-49.28 19.912-63.805 41.458C16.423 58.642 6.506 63.707 0 64.978c2.513.5 6.232 3.654 9.534 10.001 4.813 9.253 9.925 36.374 16.946 46.966 6.456 9.74 14.283 11.378 14.283 11.378s-.69-4.421 2.044-8.417c4.614-6.744 24.95-20.391 32.992-36.919 11.57-23.779 6.603-37.943 11.566-51.742z",
    fill: "url(#ay)",
    transform: "translate(56.609 48.5)"
  }), __jsx("path", {
    d: "M187.55 91.16c1.063-3.586 1.1-9.14-.574-15.067-.39 1.622-1.209 3.194-2.937 3.325-6.995.531-8.104-10.026-13.557-10.289-5.023-.242-7.02 4.6-8.352 7.626-1.331 3.026-4.358 5.326-7.863 6.07v.002c9.127-.345 22.274 1.414 33.282 8.333zM140.16 80.508c-4.565 12.918-1.813 19.973-5.628 28.687-5.447 12.437-26.787 14.697-29.233 24.148-1.33 5.144 3.632 5.144 2.724 10.531-1.874 11.116-19.997 9.832-27.753 21.284.906 2.016 1.843 3.814 2.817 5.285 6.457 9.741 14.284 11.378 14.284 11.378s-.69-4.42 2.043-8.417c4.614-6.744 24.95-20.39 32.993-36.918 11.57-23.778 6.603-37.942 11.566-51.741 3.087-13.406 10.168-20.94 10.168-20.94s-9.416 3.785-13.98 16.703z",
    fill: "#0FF"
  }), __jsx("path", {
    d: "M25.995 68.503C31.473 47.72 43.671 19.484 61.582 9.131c17.911-10.353 30.163-9.32 44.098-6.31l4.064 1.302C104.788 1.95 98.84.494 91.737.114 56.68-1.763 42.457 20.025 27.932 41.571 16.423 58.642 6.506 63.707 0 64.978c2.513.5 6.232 3.654 9.534 10.001 1.846 3.55 3.737 9.73 5.762 16.596 0 0 5.13-1.95 10.7-23.072z",
    fill: "url(#az)",
    transform: "translate(56.609 48.5)"
  })), __jsx("g", null, __jsx("path", {
    d: "M4.04 0l.327.627.303.555A26.412 26.412 0 0 0 6.847 4.44 28.444 28.444 0 0 0 10.51 8.3c1.346 1.172 2.812 2.225 4.38 3.082 1.563.848 3.245 1.532 4.956 1.743l-.065 1.639c-2.066.027-4.033-.49-5.894-1.185-1.862-.71-3.626-1.642-5.292-2.731a32.008 32.008 0 0 1-4.683-3.745A30.479 30.479 0 0 1 .877 3.681L.41 3.05 0 2.472 4.04 0z",
    transform: "translate(115.353 109.322)",
    fill: "url(#aA)"
  }), __jsx("path", {
    d: "M14.127.512c-1.666 2.304-3.249 4.597-4.455 7.024a31.304 31.304 0 0 0-2.698 7.469c-.57 2.557-.781 5.163-.785 7.776.019 2.615.288 5.237.676 7.857l-6.69.787a42.44 42.44 0 0 1 .138-9.018 33.592 33.592 0 0 1 2.257-8.812 29.323 29.323 0 0 1 4.625-7.709 36.289 36.289 0 0 1 3.05-3.173A39.971 39.971 0 0 1 13.613 0l.515.512z",
    transform: "translate(110.857 65.182)",
    fill: "url(#aB)"
  }), __jsx("path", {
    d: "M12.79 5.38a2.906 2.906 0 0 1-3.506 2.143l-7.06-1.705A2.905 2.905 0 0 1 .082 2.313l.02-.089A2.906 2.906 0 0 1 3.61.082l7.06 1.704a2.906 2.906 0 0 1 2.142 3.506l-.021.088z",
    transform: "translate(131.461 120.252)",
    fill: "url(#aC)"
  }), __jsx("path", {
    d: "M132.584 125.539c-.499-1.124-.165-2.652.907-3.49a3.129 3.129 0 0 1 1.869-.686c.332-.017.704.055.988.126l.89.206c1.182.292 2.363.593 3.533.935.586.166 1.17.347 1.752.531.283.101.59.188.87.307.294.126.558.3.782.51a3.573 3.573 0 0 0-.836-.325c-.3-.068-.593-.095-.9-.146a62.26 62.26 0 0 1-1.8-.326c-1.197-.23-2.386-.5-3.57-.78l-.887-.223a3.203 3.203 0 0 0-.816-.13c-.54-.017-1.077.155-1.54.454-.456.305-.83.759-1.04 1.287-.237.546-.3 1.14-.202 1.75z",
    fill: "#00CFFF"
  }), __jsx("path", {
    d: "M0 11.257C0 5.04 5.04 0 11.257 0s11.257 5.04 11.257 11.257-5.04 11.257-11.257 11.257S0 17.474 0 11.257z",
    transform: "translate(104.755 90.857)",
    fill: "url(#aD)"
  }), __jsx("path", {
    d: "M117.641 90.974c1.377.37 2.673 1.046 3.815 1.926a11.37 11.37 0 0 1 2.809 3.288c1.446 2.54 1.773 5.676.98 8.5-.833 2.816-2.793 5.277-5.352 6.68a11.468 11.468 0 0 1-4.115 1.33c-1.433.15-2.89.055-4.26-.34 2.798.488 5.728-.025 8.095-1.474 2.372-1.43 4.203-3.74 4.934-6.399.8-2.638.495-5.573-.772-8.035-1.256-2.474-3.483-4.45-6.134-5.476z",
    fill: "#00CFFF"
  }), __jsx("path", {
    d: "M0 5.175a5.175 5.175 0 1 1 10.35 0 5.175 5.175 0 0 1-10.35 0z",
    transform: "translate(109.203 97.212)",
    fill: "url(#aE)"
  }), __jsx("path", {
    d: "M108.84 102.386a5.543 5.543 0 0 0 5.538 5.538 5.543 5.543 0 0 0 5.538-5.538 5.543 5.543 0 0 0-5.538-5.537 5.544 5.544 0 0 0-5.538 5.537zm.727 0a4.817 4.817 0 0 1 4.811-4.811 4.817 4.817 0 0 1 4.812 4.811 4.817 4.817 0 0 1-4.812 4.812 4.817 4.817 0 0 1-4.811-4.812z",
    fill: "#00CFFF",
    fillRule: "evenodd"
  })), __jsx("g", null, __jsx("path", {
    d: "M64.274 26.288c0 4.467-3.586 8.088-8.011 8.088H8.01C3.587 34.376 0 30.756 0 26.288v-18.2C0 3.621 3.587 0 8.011 0h48.252c4.425 0 8.011 3.621 8.011 8.088v18.2z",
    transform: "translate(212.636 97.938)",
    fill: "url(#aF)"
  }), __jsx("path", {
    d: "M44.665 11.378a7.989 7.989 0 0 1-7.989 7.99H7.99A7.99 7.99 0 0 1 0 11.377v-3.39A7.989 7.989 0 0 1 7.989 0h28.687a7.989 7.989 0 0 1 7.99 7.989v3.39z",
    transform: "translate(222.44 105.564)",
    fill: "url(#aG)"
  }), __jsx("path", {
    d: "M19.156 0H0a7.989 7.989 0 0 1 7.989 7.989v3.39A7.99 7.99 0 0 1 0 19.366h19.156a7.99 7.99 0 0 0 7.989-7.989v-3.39A7.99 7.99 0 0 0 19.156 0z",
    transform: "translate(239.96 105.564)",
    fill: "url(#aH)"
  }), __jsx("path", {
    d: "M0 4.034C0 1.806 6.964 0 15.554 0S31.11 1.806 31.11 4.034c0 2.227-6.964 4.033-15.555 4.033C6.964 8.067 0 6.261 0 4.034z",
    transform: "translate(229.219 156.566)",
    fill: "url(#aI)"
  }), __jsx("path", {
    d: "M237.388 159.873c0-1.058 3.306-1.915 7.385-1.915s7.386.857 7.386 1.915-3.307 1.915-7.386 1.915c-4.079 0-7.385-.857-7.385-1.915zM224.467 133.403h-3.843c-5.006 0-9.078-4.072-9.078-9.078v-1.452h2.178v1.452c0 3.804 3.096 6.9 6.9 6.9h3.843v2.178zM268.921 133.403h-4.146v-2.178h4.146c3.804 0 6.9-3.096 6.9-6.9v-1.452H278v1.452c0 5.006-4.073 9.078-9.079 9.078zM213.725 107.5h-2.179v-1.573c0-5.006 4.073-9.079 9.079-9.079h3.843v2.18h-3.843a6.908 6.908 0 0 0-6.9 6.899v1.574zM278 107.5h-2.18v-1.573c0-3.804-3.095-6.9-6.899-6.9h-4.146v-2.179h4.146c5.006 0 9.078 4.073 9.078 9.079v1.574z",
    fill: "#FDE1A7"
  }), __jsx("path", {
    d: "M52.23 0H0l18.85 27.573h14.755L52.231 0z",
    transform: "translate(218.537 132.3)",
    fill: "url(#aJ)"
  })));
};

Spports.defaultProps = {
  width: "505",
  height: "545",
  viewBox: "0 0 505 545",
  xmlns: "http://www.w3.org/2000/svg"
};

const ContactusWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "contactus__ContactusWapper",
  componentId: "sc-9u9tv2-0"
})(["margin:5rem;@media ", "{margin:3rem;}"], props => props.theme.media.mbS);
const Contactuscontiner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "contactus__Contactuscontiner",
  componentId: "sc-9u9tv2-1"
})(["display:flex;align-items:center;& > svg{@media ", "{display:none;}}& > form{flex:1;font-size:2.5rem;margin:0 4rem;@media ", "{margin:0;}& > div{display:flex;flex-direction:column;margin:3rem 0;& > label{margin:0.5rem 0;}& > select{font-size:2.5rem;border:none;background:#fea2c7;color:white;padding:1rem;& > *{padding:1rem;}}& > textarea{resize:none;font-size:3rem;background:transparent;border:none;border-bottom:2px solid #ffa3c8;}& > input{font-size:3rem;background:transparent;border:none;border-bottom:2px solid #ffa3c8;}}& > input[type=\"submit\"]{padding:1.5rem 2rem;background-color:#0081a7;color:white;text-decoration:none;border-radius:12px;border:none;cursor:pointer;font-size:2.5rem;box-shadow:1px 2px 15px -5px black;transition:all 0.4s ease-out;&:hover{color:#0081a7;background-color:white;box-shadow:1px 2px 20px -5px black;transform:scale(1.02);}@media ", "{width:100%;}}}"], props => props.theme.media.tabM, props => props.theme.media.mbS, props => props.theme.media.mbM);

const Contact = () => {
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, success && __jsx("p", {
    style: {
      color: 'green'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 3
    }
  }, "Successfully submitted form!"), __jsx(ContactusWapper, {
    id: "contactus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx(_subtitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Contact us",
    info: "Have a project? Contact us and let's work together!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx(Contactuscontiner, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx("form", {
    name: "contact",
    method: "POST",
    action: "/?success=true",
    "data-netlify": "true",
    autoComplete: "off",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Name"), __jsx("input", {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Type you are Name",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Type you are Email",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "Phone"), __jsx("input", {
    type: "number",
    name: "phone",
    id: "phone",
    placeholder: "Type you are Phone",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "serviestype",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, "Servies Type"), __jsx("select", {
    name: "servies[]",
    id: "serviestype",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "Web design",
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "Web design"), __jsx("option", {
    value: "Web Development",
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, "Web development"), __jsx("option", {
    value: "E-commerce",
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, "E-commerce application"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "detiles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, "Detiles"), __jsx("textarea", {
    cols: "30",
    id: "detiles",
    rows: "5",
    name: "project info",
    placeholder: "Type you are project details",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  })), __jsx("div", {
    "data-netlify-recaptcha": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "submit",
    value: "let's talk",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  })), __jsx(Spports, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/subtitle.js":
/*!********************************!*\
  !*** ./components/subtitle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mypc\\Desktop\\codecos\\codecos\\components\\subtitle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SubTitleWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "subtitle__SubTitleWapper",
  componentId: "sc-1emdqaw-0"
})(["font-size:3rem;padding:4rem 0;width:70%;@media ", "{width:90%;}& > p{font-family:", ";}& > h1{font-weight:500;display:inline-block;position:relative;font-size:5rem;& > p{position:relative;z-index:5;}&::before{content:\"\";width:100%;height:20%;position:absolute;background:#ffa3c8;z-index:3;bottom:5px;}}"], props => props.theme.media.mbL, props => props.theme.fonts.second);

const SubTitle = ({
  title,
  info
}) => {
  return __jsx(SubTitleWapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, title)), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, info));
};

/* harmony default export */ __webpack_exports__["default"] = (SubTitle);

/***/ }),

/***/ "./data/index.js":
/*!***********************!*\
  !*** ./data/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/// web design using svgs
var Webdesignsvg = function Webdesignsvg(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M276.609 2.14h588.31v382.222h-588.31V2.14z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M258.781 0h44.926v385.789H258.78V0zM389.992 106.252h117.662v1.426H389.992v-1.426z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M613.907 313.053H775.78V161.875H613.907v151.178zm160.449-1.426H615.333V163.3h159.023v148.326z",
    fill: "#D0CDE1",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M614.15 163.107l.974-1.042 160.438 149.768-.974 1.042L614.15 163.107z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M614.137 311.818L774.6 162.078l.974 1.043L615.11 312.86l-.973-1.043zM389.992 211.079h166.153v1.426H389.992v-1.426zM389.992 236.75h166.153v1.426H389.992v-1.426zM389.992 262.422h166.153v1.426H389.992v-1.426z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M0 423.659h506.799v1.797H0v-1.797z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M139.661 118.603c0-5.476 4.44-9.914 9.915-9.914 5.475 0 9.914 4.438 9.914 9.914 0 5.475-4.439 9.914-9.914 9.914-5.476 0-9.915-4.439-9.915-9.914zM142.061 85.922c0-17.237 12.738-31.211 28.45-31.211s28.45 13.974 28.45 31.211c0 17.238-12.738 31.212-28.45 31.212s-28.45-13.974-28.45-31.212zM150.494 220.131l-.734 3.672s-2.204 2.203-1.102 3.305c1.102 1.101.734 6.242.734 6.242l-2.203 14.32-12.851 58.017s-16.891 11.016-30.11 32.68c-13.22 21.665-13.586 27.173-13.586 27.173l14.687 6.242 36.72-44.43s10.28-6.243 13.953-11.751c3.672-5.507 26.438-62.423 26.438-62.423l12.852 59.486s-.735 21.664 2.57 35.618a149.425 149.425 0 0 1 3.672 26.805l17.258-1.836s-1.101-52.142-2.937-57.65c0 0 7.71-63.524-7.711-88.86l-9.18-37.087-15.423-.734-33.047 31.211z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M108.267 370.313l-18.36-11.383-8.446 16.156s-18.726 11.383-14.687 19.829c4.039 8.445 7.71 10.648 7.71 10.648l2.571-1.101 4.774 8.812s12.484 17.993 32.68 8.813a7.38 7.38 0 0 0 0-8.813c-3.305-4.773-11.75-15.055-11.75-15.055l5.508-27.906zM220.628 370.68l-20.196 1.47 2.203 16.523s-9.547 23.5-2.937 25.336a96.812 96.812 0 0 0 14.32 2.57l.735-2.57s28.273 15.422 38.555 4.04c0 0 2.203-8.079-4.04-10.65-6.242-2.57-18.359-8.078-19.828-11.015-1.468-2.938-8.812-25.704-8.812-25.704z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M153.798 90.88c0-9.735 7.891-17.626 17.625-17.626 9.735 0 17.626 7.891 17.626 17.626 0 9.734-7.891 17.625-17.626 17.625-9.734 0-17.625-7.891-17.625-17.625z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M158.204 101.528s2.204 14.32-8.812 19.828c-11.016 5.508 29.008 12.118 29.008 12.118s-6.242-9.547-5.14-12.852c1.1-3.305 6.609-16.524 6.609-16.524l-21.665-2.57z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M155.267 121.724s-10.648-6.243-14.32-3.305c-3.672 2.937-4.774 92.9 8.445 96.571l.367 4.774s-4.773 2.203-.367 2.203c4.407 0 24.97-15.055 25.704-20.563.734-5.508 22.031-6.61 22.031-6.61s5.508 23.5 7.344 22.767c1.836-.735 1.836-16.524 1.102-18.727-.735-2.203 8.445-9.18 5.875-13.586-2.57-4.407-9.547-19.461-9.547-19.461s.734-9.547-9.18-18.36c0 0-2.897-16.402-15.953-16.646-13.055-.245-21.5-9.057-21.5-9.057z",
    fill: "#575A89"
  }), __jsx("path", {
    d: "M153.875 69.43v20.147h4.666l5.937-6.362-.795 6.362h20.623l-1.272-6.362 2.544 6.362h3.287V69.43h-34.99z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M44.877 249.948H197.02v138.946H44.877V249.948z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M134.966 322.298c-12.826 20.94-8.413 46.986-8.413 46.986s25.207-7.903 38.033-28.843c12.826-20.939 8.414-46.985 8.414-46.985s-25.208 7.903-38.034 28.842z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M126.03 369.456l-.73-.115c-.264-.042-26.512-4.391-42.232-23.2-15.72-18.809-15.342-45.413-15.337-45.68l.015-.737.73.115c.263.042 26.512 4.391 42.232 23.2 15.72 18.809 15.342 45.413 15.337 45.68l-.016.737z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M113.182 287.262c0-7.826 6.344-14.171 14.171-14.171 7.827 0 14.172 6.345 14.172 14.171 0 7.827-6.345 14.172-14.172 14.172-7.827 0-14.171-6.345-14.171-14.172z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M127.728 211.319l4.406 32.68s-2.57 28.64 7.344 29.008c9.914.367 3.672-29.375 3.672-29.375l-1.102-29.743s-8.078-13.219-14.32-2.57z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M144.251 120.622s-2.57-6.977-8.078-1.469c-5.508 5.508-10.281 19.828-10.281 28.641 0 8.813 1.101 59.852 1.101 59.852s-5.875 2.204-1.836 5.508c4.04 3.305 9.547-1.836 9.547-1.836s7.344 5.141 8.079 5.141c.734 0 .367-6.242.367-6.242s3.672-9.547 2.937-16.891c-.734-7.344-1.836-72.704-1.836-72.704z",
    fill: "#575A89"
  }), __jsx("path", {
    d: "M389.28 86.286H775.78V59.9H389.28v26.385zm385.075-1.426h-383.65V61.327h383.65V84.86z",
    fill: "#D0CDE1",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M85.242 287.983H47.206c2.936-11.816 2.582-24.598 0-38.035h38.036c-5.325 12.678-5.325 25.357 0 38.035z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M52.97 258.016H76.02v4.61H52.969v-4.61zM52.97 267.237H76.02v4.61H52.969v-4.61zM52.97 276.457H76.02v4.61H52.969v-4.61z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M427.561 138.946h-38.035c2.936-11.816 2.582-24.598 0-38.035h38.035c-5.324 12.678-5.324 25.357 0 38.035z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M395.289 108.979h23.052v4.61h-23.052v-4.61zM395.289 118.2h23.052v4.61h-23.052v-4.61zM395.289 127.42h23.052v4.61h-23.052v-4.61z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M713.993 196.388h-38.036c2.936-11.816 2.582-24.6 0-38.036h38.036c-5.325 12.679-5.325 25.357 0 38.036z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M681.72 166.42h23.052v4.61H681.72v-4.61zM681.72 175.64h23.052v4.611H681.72v-4.61zM681.72 184.861h23.052v4.61H681.72v-4.61z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M762.895 114.883h-38.036c2.937-11.816 2.582-24.599 0-38.035h38.036c-5.324 12.678-5.324 25.357 0 38.035z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M730.622 84.916h23.052v4.61h-23.052v-4.61zM730.622 94.136h23.052v4.61h-23.052v-4.61zM730.622 103.357h23.052v4.61h-23.052v-4.61z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M271.153 157.964h20.182v-20.182h-20.182v20.182zm18.63-1.553h-17.077v-17.077h17.077v17.077zM271.538 202.986h20.182v-20.182h-20.182v20.182zm18.63-1.553H273.09v-17.077h17.077v17.077zM271.923 248.007h20.182v-20.182h-20.182v20.183zm18.63-1.552h-17.077v-17.077h17.077v17.077z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M266.104 228.213a6.21 6.21 0 1 1 12.42 0 6.21 6.21 0 0 1-12.42 0z",
    fill: "#6C63FF"
  }));
};

Webdesignsvg.defaultProps = {
  width: "865",
  height: "426",
  viewBox: "0 0 865 426",
  xmlns: "http://www.w3.org/2000/svg"
};

var Respdesign = function Respdesign(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M0 0h701v483.404H0V0z",
    fill: "none"
  }), __jsx("path", {
    d: "M635.648 244.176l.978 124.478a6.585 6.585 0 0 1-6.526 6.629l-14.935.117a6.584 6.584 0 0 1-6.629-6.525l-.978-124.478a6.585 6.585 0 0 1 6.526-6.63l14.935-.117a6.585 6.585 0 0 1 6.629 6.526z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M424.1 481.136H752v2.268H424.1v-2.268z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M582.13 482.404h-14.936a6.585 6.585 0 0 1-6.577-6.577V351.345a6.585 6.585 0 0 1 6.577-6.578h14.936a6.585 6.585 0 0 1 6.577 6.578v124.482a6.584 6.584 0 0 1-6.577 6.577zM611.671 482.404h-14.936a6.585 6.585 0 0 1-6.578-6.577V351.345a6.585 6.585 0 0 1 6.578-6.578h14.936a6.585 6.585 0 0 1 6.577 6.578v124.482a6.584 6.584 0 0 1-6.577 6.577z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M535.275 147.138c0-29.91 24.247-54.158 54.158-54.158 29.91 0 54.158 24.248 54.158 54.158s-24.247 54.158-54.158 54.158c-29.91 0-54.158-24.247-54.158-54.158z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M581.463 167.211l.057-2.024c-3.765-.105-7.085-.34-9.579-2.163a6.222 6.222 0 0 1-2.41-4.582 3.557 3.557 0 0 1 1.167-2.93c1.656-1.398 4.32-.945 6.262-.055l1.674.768-3.211-23.467-2.005.275 2.731 19.962c-2.638-.776-5.083-.442-6.758.972a5.536 5.536 0 0 0-1.882 4.546 8.23 8.23 0 0 0 3.238 6.145c3.205 2.343 7.37 2.46 10.717 2.553zM552.601 134.754h10.9v2.024h-10.9v-2.024zM587.007 134.754h10.9v2.024h-10.9v-2.024z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M643.998 282.221h-44.525v-49.585c0-12.295 9.967-22.262 22.263-22.262 12.295 0 22.262 9.967 22.262 22.262v49.585z",
    fill: "#BBB"
  }), __jsx("path", {
    d: "M561.338 251.119l-93.173 82.55a6.586 6.586 0 0 1-9.285-.562l-9.905-11.179a6.585 6.585 0 0 1 .562-9.285l93.173-82.55a6.585 6.585 0 0 1 9.285.561l9.905 11.18a6.585 6.585 0 0 1-.562 9.285z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M538.153 282.417l-29.264-33.557 37.37-32.59c9.267-8.081 23.33-7.12 31.412 2.147 8.08 9.267 7.12 23.33-2.147 31.41l-37.371 32.59z",
    fill: "#BBB"
  }), __jsx("path", {
    d: "M0 0h236.381v158.874H0V0z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M2.024 8.449h2.024v-5.06h5.06V1.365H2.023V8.45zM222.62 1.365h12.56v2.024h-12.56V1.365zM172.381 1.365h12.56v2.024h-12.56V1.365zM197.5 1.365h12.56v2.024H197.5V1.365zM272.857 1.365h12.56v2.024h-12.56V1.365zM297.977 1.365h12.56v2.024h-12.56V1.365zM247.738 1.365h12.56v2.024h-12.56V1.365zM46.786 1.365h12.56v2.024h-12.56V1.365zM21.667 1.365h12.56v2.024h-12.56V1.365zM71.905 1.365h12.56v2.024h-12.56V1.365zM122.143 1.365h12.56v2.024h-12.56V1.365zM97.024 1.365h12.56v2.024h-12.56V1.365zM147.262 1.365h12.56v2.024h-12.56V1.365zM323.096 1.365h12.56v2.024h-12.56V1.365zM348.214 1.365V3.39h5.06v5.06h2.024V1.365h-7.084zM353.274 172.232h2.024v12.599h-2.024v-12.6zM353.274 147.034h2.024v12.599h-2.024v-12.599zM353.274 96.639h2.024v12.599h-2.024V96.639zM353.274 46.245h2.024v12.598h-2.024V46.245zM353.274 71.442h2.024V84.04h-2.024V71.442zM353.274 121.837h2.024v12.598h-2.024v-12.598zM353.274 197.428h2.024v12.6h-2.024v-12.6zM353.274 21.047h2.024v12.599h-2.024V21.047zM353.274 227.686h-5.06v2.024h7.084v-7.084h-2.024v5.06zM297.977 227.686h12.56v2.024h-12.56v-2.024zM97.024 227.686h12.56v2.024h-12.56v-2.024zM46.786 227.686h12.56v2.024h-12.56v-2.024zM71.905 227.686h12.56v2.024h-12.56v-2.024zM21.667 227.686h12.56v2.024h-12.56v-2.024zM222.62 227.686h12.56v2.024h-12.56v-2.024zM272.857 227.686h12.56v2.024h-12.56v-2.024zM247.738 227.686h12.56v2.024h-12.56v-2.024zM323.096 227.686h12.56v2.024h-12.56v-2.024zM172.381 227.686h12.56v2.024h-12.56v-2.024zM147.262 227.686h12.56v2.024h-12.56v-2.024zM122.143 227.686h12.56v2.024h-12.56v-2.024zM197.5 227.686h12.56v2.024H197.5v-2.024zM4.048 222.626H2.024v7.084h7.083v-2.024h-5.06v-5.06zM2.024 71.441h2.024v12.6H2.024v-12.6zM2.024 96.639h2.024v12.599H2.024V96.639zM2.024 21.047h2.024v12.599H2.024V21.047zM2.024 46.244h2.024v12.599H2.024v-12.6zM2.024 197.428h2.024v12.6H2.024v-12.6zM2.024 172.23h2.024v12.6H2.024v-12.6zM2.024 147.034h2.024v12.598H2.024v-12.598zM2.024 121.837h2.024v12.598H2.024v-12.598z",
    fill: "#BBB"
  }), __jsx("path", {
    d: "M403.905 261.772l-2.016.2.842 8.448-96.385-84.962 8.488-.225-.056-2.025-12.15.323 1.205 12.094 2.016-.2-.844-8.452 96.39 84.968-8.491.222.054 2.025 12.15-.322-1.203-12.094z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M342.738 228.697c0-6.147 4.983-11.13 11.13-11.13 6.148 0 11.132 4.983 11.132 11.13 0 6.148-4.984 11.132-11.131 11.132-6.148 0-11.132-4.984-11.132-11.132z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M369.432 247.768a6.072 6.072 0 1 1 12.143 0 6.072 6.072 0 0 1-12.143 0zM325.404 208.957a6.072 6.072 0 1 1 12.143 0 6.072 6.072 0 0 1-12.143 0zM623.144 367.92H555.28a6.585 6.585 0 0 1-6.577-6.577V217.166a6.585 6.585 0 0 1 6.577-6.577h67.863a6.585 6.585 0 0 1 6.578 6.577v144.177a6.584 6.584 0 0 1-6.577 6.577z",
    fill: "#BBB"
  }), __jsx("path", {
    d: "M622.818 165.673c-4.955-1.934-7.74-6.784-9.136-11.672-1.656-5.797-1.397-11.723-1.328-17.683.075-6.596-.14-13.501-3.282-19.469-2.865-5.44-7.98-9.14-13.62-11.32-13.745-5.317-28.778-.83-43.02-2.252-6.61-.66-13.472-2.525-18.77-6.694-4.596-3.616-8.302-9.055-8.872-14.987-1.25-13.026 12.716-21.344 24.428-19.733.805.192 1.62-.27 1.868-1.06a1.527 1.527 0 0 0-1.06-1.867c-11-1.514-23.824 4.019-27.46 15.162-1.94 5.949-.54 12.477 2.735 17.679a30.038 30.038 0 0 0 15.233 11.947c6.73 2.506 14.079 3.054 21.205 2.906 8.29-.172 16.669-1.384 24.938-.225 6.193.867 12.52 3.24 16.875 7.882 4.825 5.144 5.703 12.286 5.773 19.042.067 6.469-.487 12.926.888 19.305 1.159 5.377 3.603 10.752 8.168 14.052a16.095 16.095 0 0 0 3.63 1.914c1.821.71 2.61-2.224.807-2.927z",
    fill: "#2F2E41"
  }));
};

Respdesign.defaultProps = {
  width: "752",
  height: "484",
  viewBox: "0 0 752 484",
  xmlns: "http://www.w3.org/2000/svg"
};

var Colorpatter = function Colorpatter(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M0 0h1025.5v660.657H0V0z",
    fill: "none"
  }), __jsx("path", {
    d: "M78.5 515.657c0-6.628 5.373-12 12-12s12 5.372 12 12c0 6.627-5.373 12-12 12s-12-5.373-12-12z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M40.5 554.657c0-11.046 8.954-20 20-20s20 8.954 20 20c0 11.045-8.954 20-20 20s-20-8.955-20-20z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M254.798 103.045c0-22.207 18.002-40.21 40.21-40.21 22.207 0 40.21 18.003 40.21 40.21 0 22.208-18.003 40.21-40.21 40.21-22.208 0-40.21-18.002-40.21-40.21z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M352.163 346.618l6.096 12.193s19.508 31.7 6.097 35.358c-13.412 3.658-17.68-23.776-17.68-23.776l-2.438-14.63 7.925-9.145z",
    fill: "#A0616A"
  }), __jsx("path", {
    d: "M327.778 284.436l15.241 40.235 15.24 28.043-18.898 12.193-15.241-26.824-18.288-42.064 21.946-11.583z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M284.494 472.81l-30.48 32.31-53.648 90.835-23.166-7.316 27.434-54.256s15.85-41.455 23.775-46.941c7.925-5.487 21.337-41.455 21.337-41.455l14.63-11.583 20.118 38.407zM347.286 490.49l2.439 10.363s7.925 32.31 20.117 46.941l29.262 50.6 21.947-7.316-43.284-102.417-30.48 1.829zM268.95 117.094c0-18.181 14.738-32.92 32.919-32.92 18.181 0 32.92 14.739 32.92 32.92s-14.739 32.92-32.92 32.92-32.92-14.739-32.92-32.92z",
    fill: "#A0616A"
  }), __jsx("path", {
    d: "M275.96 133.249l-4.268 35.358 27.434 13.412s0-30.481 7.315-38.406l-30.481-10.364zM190.003 361.25l-3.048 10.363s-20.118 39.625-3.049 39.625c17.07 0 20.118-36.577 20.118-36.577l1.829-9.145-15.85-4.267z",
    fill: "#A0616A"
  }), __jsx("path", {
    d: "M330.216 319.795l-4.267 29.871 51.818 109.124 3.048 31.7-96.93 12.193-21.337-59.134-34.139 43.892 19.508-45.112s6.096-30.481 4.268-38.406c-1.83-7.925 1.219-47.551 6.705-57.305 5.487-9.754 71.326-26.824 71.326-26.824zM204.024 595.955l-29.262-9.754-9.144 14.63s-17.68 4.878-17.07 17.68c.61 12.802-3.048 34.749-3.048 34.749l12.802 1.219 4.877-24.995 24.995 29.872s44.503 2.438 46.331-4.877c1.83-7.316-31.7-15.24-31.7-15.24l-5.487-26.215 6.706-17.07zM422.88 587.42l-26.824 8.535v6.096s-7.925 12.193-6.706 22.556c1.22 10.364 6.706 35.359 6.706 35.359h14.022l-.61-23.166 28.043 23.166s49.989-3.658 49.989-11.583c0-7.925-38.406-13.412-38.406-13.412l-26.214-47.55z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M300.955 174.704s-24.995-24.995-36.578-18.899v10.973s-17.07 7.926-17.68 20.118c-.609 12.193-18.288 123.144-18.288 123.144l-41.454 144.482s12.802 20.117 59.743-2.439l29.262-99.369s-31.091 112.171-15.85 110.342c15.24-1.829 74.984-140.823 74.984-140.823l-4.267-65.84s9.754-28.652-9.754-48.16l-20.118-33.53z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M258.28 178.361s-10.363 3.658-17.678 19.508c-7.316 15.85-43.893 127.412-43.893 127.412l-9.754 39.625 27.433 6.706 13.412-40.845 49.989-92.662s7.925-48.77-19.508-59.744z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M260.69 90.832c.616-7.525 4.22-15.239 10.882-18.79-3.346-6.72-6.336-14.39-4.13-21.565a16.458 16.458 0 0 1 12.398-11.095c3.2-.44 6.446-.398 9.633.125l15.022 1.704c4.873.553 9.934 1.17 14.08 3.791a16.31 16.31 0 0 1 1.883 26.176c10.51 8.406 17.534 14.788 22.316 27.368-8.764-7.055-17.15-9.553-28.384-10.161-14.623-.791-27.221 10.195-28.426 24.79-.29 3.51.098 7.125-.924 10.496-1.022 3.371-4.1 6.53-7.587 6.037.483.068 3.461-8.874 1.365-13.001l-.033-.067a3.929 3.929 0 0 0-2.135-1.832 6.148 6.148 0 0 0-8.172 4.276c-1.166 4.479-3.032 10.194-4.662 8.677-2.135-1.987-1.237-19.503-1.813-22.219a50.983 50.983 0 0 1-1.313-14.71z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M271.737 71.922s33.04 2.155 48.841-.718",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M273.61 67.5c-3.345-6.72-6.335-14.39-4.13-21.565a16.29 16.29 0 0 1 5.764-8.1 16.496 16.496 0 0 0-8.812 9.93c-2.205 7.175.785 14.845 4.13 21.565 2.654-.397-3.614 1.722 3.049-1.83z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M284.19 238.409l-47.55 84.129-18.29 45.722 25.605-43.893 40.235-85.958z",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M64.901 566.657h2v93h-2v-93z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M45.5 547.657c0 11.598 9.402 21 21 21 11.593-.014 20.987-9.409 21-21 0-11.598-9.402-21-21-21s-21 9.402-21 21zm2 0c0-10.494 8.507-19 19-19 10.488.012 18.988 8.511 19 19 0 10.493-8.507 19-19 19s-19-8.507-19-19z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M70.5 519.657c0 7.18 5.82 13 13 13 7.176-.008 12.992-5.824 13-13 0-7.18-5.82-13-13-13s-13 5.82-13 13zm2 0c0-6.075 4.925-11 11-11 6.073.007 10.993 4.928 11 11 0 6.075-4.925 11-11 11s-11-4.925-11-11z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M482.432 265.865c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M430.054 244.614c0-11.046 8.955-20 20-20 11.046 0 20 8.954 20 20 0 11.045-8.954 20-20 20-11.045 0-20-8.955-20-20z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M437.065 250.076c.59 11.19 9.834 19.961 21.04 19.961 1.48 0 2.955-.156 4.401-.465 10.96-2.34 18.168-12.85 16.407-23.916-1.762-11.067-11.877-18.818-23.02-17.641-11.145 1.177-19.417 10.87-18.828 22.06zm17.138-19.632c1.31-.279 2.644-.42 3.983-.42 9.716.025 17.85 7.375 18.853 17.04 1.005 9.665-5.443 18.53-14.948 20.552-10.264 2.179-20.352-4.377-22.53-14.642-2.178-10.265 4.377-20.352 14.642-22.53z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M476.017 260.495c.364 6.927 6.087 12.357 13.023 12.357.916 0 1.829-.097 2.724-.287 6.784-1.45 11.247-7.954 10.157-14.804-1.09-6.85-7.351-11.649-14.25-10.92-6.897.727-12.019 6.727-11.654 13.654zm2.678-4.324a11.001 11.001 0 0 1 10.373-7.325c5.195 0 9.682 3.636 10.758 8.719a11.001 11.001 0 1 1-21.13-1.394z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M778.961 55.355c0-6.628 5.373-12 12-12 6.628 0 12 5.372 12 12 0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M805.184 20.002c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M802.771 40.264a21.01 21.01 0 0 0 15.674 7.015c11.287-.008 20.549-8.937 20.97-20.216.422-11.278-8.147-20.873-19.402-21.724-11.255-.85-21.169 7.347-22.448 18.561a21.01 21.01 0 0 0 5.206 16.364zm9.866 4.11a19 19 0 1 1 11.586-36.192 19 19 0 0 1-11.586 36.192z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M796.897 65.09c.497.056.997.084 1.498.084 6.983-.014 12.708-5.544 12.963-12.523.255-6.98-5.05-12.913-12.015-13.437-6.964-.524-13.097 4.548-13.89 11.487-.804 7.13 4.315 13.568 11.444 14.388zm-3.862-3.295a11 11 0 0 1-5.596-10.868c.696-6.032 6.141-10.363 12.175-9.683a11 11 0 1 1-6.579 20.551z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M586.5 136.657h204v232h-204v-232z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M785.5 136.657h209v232h-209v-232z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M586.5 168.657h204v38h-204v-38z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M790.5 168.657h204v38h-204v-38z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M586.5 295.657h204v38h-204v-38z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M790.5 295.657h204v38h-204v-38z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M785.5 148.657v208c57.438 0 104-46.562 104-104s-46.562-104-104-104z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M681.5 252.657c0 57.438 46.562 104 104 104v-208c-57.438 0-104 46.562-104 104z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M731.5 252.657c0 29.823 24.177 54 54 54v-108c-29.823 0-54 24.176-54 54z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M839.5 252.657c0 29.823-24.177 54-54 54v-108c29.823 0 54 24.176 54 54z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M555.5 409.657h470v-314h-470v314zm468-2h-466v-310h466v310z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M0 658.657h581v2H0v-2z",
    fill: "#3F3D56"
  }));
};

Colorpatter.defaultProps = {
  width: "1026",
  height: "661",
  viewBox: "0 0 1026 661",
  xmlns: "http://www.w3.org/2000/svg"
};

var Logodesign = function Logodesign(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M230.725 185.924H951V700.37H230.725V185.924z",
    fill: "none"
  }), __jsx("path", {
    d: "M827.034 511.43a9.902 9.902 0 0 0-6.267-13.83l-2.191-35.122-14.61 10.998 4.32 31.667a9.956 9.956 0 0 0 18.748 6.288zM890.722 649.49l11.605 3.328 18.359-43.18-17.129-4.91-12.835 44.763z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M921.661 670.043l-36.476-10.459 4.041-14.093 22.383 6.418c7.783 2.232 12.284 10.35 10.052 18.134z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M872.126 689.16l-12.073-.001-5.744-46.568h17.82l-.003 46.568z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M851.429 685.709h23.284v14.66h-37.944c0-8.096 6.563-14.66 14.66-14.66zM838.736 499.297s-6.893 27.573 4.924 83.705l8.863 96.508 22.65.985-2.955-104.386 7.878-43.33 19.696 60.071-6.894 42.345 16.741 7.878 18.711-58.101s-1.97-80.751-9.848-90.6l-79.766 4.925z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M843.15 318.04c0-13.357 10.829-24.186 24.187-24.186s24.187 10.829 24.187 24.187-10.829 24.187-24.187 24.187-24.187-10.83-24.187-24.187z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M854.492 354.771s-1.477 3.248 16.249 1.242c17.726-2.007 21.665-7.879 21.665-7.879l31.02 136.074-1.97 12.041-84.69 5.017v-17.058l14.772-90.305 2.954-39.132z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M861.743 497.826l-26.847-.506-.087-.374a141.058 141.058 0 0 1 .985-56.352c5.422-24.01-6.899-56.573-12.447-69.459a6.912 6.912 0 0 1 2.787-8.628l19.004-11.402a9.677 9.677 0 0 1 14.356 5.908l3.322 13.035c15.304 16.455 14.23 50.207 10.628 75.648a357.585 357.585 0 0 1-11.59 51.78l-.111.35z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M831.35 359.952l-2.322 1.589a29.157 29.157 0 0 0-11.223 14.754 70.413 70.413 0 0 0-2.704 10.738c-1.97 11.817-10.832 62.04-10.832 62.04l-3.94 49.239 21.666-4.924 9.847-57.117 9.848-35.451-10.34-40.868zM908.396 498.061l-.204-.567c-1.408-3.903-34.274-95.852-18.751-128.275l-1.521-15.207a9.883 9.883 0 0 1 12.821-10.404l23.75 7.53a4.762 4.762 0 0 1 3.344 4.615c-.098 8.74-.581 31.018-2.935 49.07-2.911 22.315 6.791 78.072 6.89 78.632l.058.331-23.452 14.275z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M897.929 473.613a9.903 9.903 0 0 1 11.828-9.522l17.787-30.364 8.084 16.403-18.13 26.32a9.956 9.956 0 0 1-19.57-2.837z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M920.964 351.089l1.273.294a9.744 9.744 0 0 1 6.95 6.12L951 416.575l-25.604 56.132-9.355-23.142 11.817-25.604-21.172-27.081 14.279-45.792zM891.853 321.384a59.752 59.752 0 0 0 3.105-11.083 19.974 19.974 0 0 0-1.29-11.285 24.536 24.536 0 0 0-6.668-7.995 62.693 62.693 0 0 0-5.968-4.492c-5.852-3.88-7.125-.35-14.145-1.143-7.019-.795-14.884-2.814-20.51 1.376a22.967 22.967 0 0 0-8.281 24.277c1.568 5.337.32 7.096 5.162 9.98a18.888 18.888 0 0 1 5.109-12.929 19.644 19.644 0 0 1 12.742-6.027c3.732-.27 7.45.526 11.104 1.318 3.546.768 7.188 1.575 10.193 3.572 4.982 3.31 7.317 9.22 9.37 14.765",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M230.725 415.375h429.36v1.97h-429.36v-1.97zM230.725 338.563h429.36v1.97h-429.36v-1.97zM230.725 261.751h429.36v1.97h-429.36v-1.97z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M573.229 185.924h1.97v307.249h-1.97v-307.25zM487.357 185.924h1.97v307.249h-1.97v-307.25zM401.485 185.924h1.97v307.249h-1.97v-307.25zM315.612 185.924h1.97v307.249h-1.97v-307.25z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M316.4 262.736h172.335v76.812H316.4v-76.812z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M316.4 333.64v82.72l89.614-79.766-89.614-2.955z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M488.736 336.594v2.954l-1.123.995-2.265 2.009c-44.049 1.33-79.628 32.881-81.234 72.006l-2.019 1.792-.02.01v-82.72l86.66 2.954z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M487.613 340.543c.206-.01.423-.01.63-.01 47.516 0 86.168 34.457 86.168 76.812s-38.652 76.812-86.168 76.812c-47.515 0-86.167-34.457-86.167-76.812 0-.335 0-.66.02-.995.58-41.715 38.662-75.512 85.517-75.807zm-83.568 76.802c0 41.272 37.776 74.843 84.198 74.843 46.423 0 84.198-33.571 84.198-74.843 0-41.272-37.775-74.843-84.198-74.843-.975 0-1.94.01-2.895.05-44.049 1.329-79.629 32.881-81.234 72.006-.05.926-.069 1.851-.069 2.787z",
    fill: "#E6E6E6",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M440.974 416.376l-4.924-.027c.002-.439.79-43.804 51.16-46.811l.293 4.915c-45.681 2.728-46.516 40.324-46.53 41.923z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M537.954 415.375a41.888 41.888 0 0 0-13.767-29.651 52.623 52.623 0 0 0-35.845-13.738h-.1c-27.05 0-49.13 19.37-49.71 43.39-.02.324-.02.66-.02.984 0 12.566 5.88 23.92 15.313 31.995a52.825 52.825 0 0 0 34.418 12.379h.098c27.377-.05 49.633-19.932 49.633-44.374 0-.325 0-.66-.02-.985z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M524.187 385.724l-1.477 1.31-67.408 60.012-1.477 1.31c-9.434-8.076-15.313-19.43-15.313-31.996 0-.325 0-.66.02-.985.58-24.018 22.66-43.389 49.711-43.389h.099a52.623 52.623 0 0 1 35.845 13.738z",
    fill: "#6C63FF"
  }));
};

Logodesign.defaultProps = {
  width: "951",
  height: "701",
  viewBox: "0 0 951 701",
  xmlns: "http://www.w3.org/2000/svg"
}; /// web development using svgs

var Webdev = function Webdev(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M624.03 507.245c-5.043 19.207-22.717 31.21-22.717 31.21s-9.496-19.138-4.453-38.345c5.044-19.207 22.718-31.21 22.718-31.21s9.496 19.138 4.453 38.345z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M616.38 503.181c-14.127 13.957-15.707 35.263-15.707 35.263s21.323-1.322 35.45-15.28c14.127-13.956 15.708-35.262 15.708-35.262s-21.324 1.323-35.45 15.28z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M104.518 434.587h26.604l65.562-25.654s46.557-19.003 42.757 17.103c-3.801 36.106-10.452 84.564-10.452 84.564s-20.904-9.502-32.305-6.65c-11.402 2.85-3.801-57.96-3.801-57.96s-93.116 44.657-101.668 38.956c-8.551-5.701-10.451-45.608-10.451-45.608l23.754-4.75z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M104.518 434.587h26.604l65.562-25.654s46.557-19.003 42.757 17.103c-3.801 36.106-10.452 84.564-10.452 84.564s-20.904-9.502-32.305-6.65c-11.402 2.85-3.801-57.96-3.801-57.96s-93.116 44.657-101.668 38.956c-8.551-5.701-10.451-45.608-10.451-45.608l23.754-4.75z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M146.433 351.272l32.197 46.259 75.063 62.71s69.362 16.153 59.86 27.555c-9.501 11.401-67.461-11.402-67.461-11.402s-86.465-62.71-89.315-67.461c-2.85-4.75-34.206-49.408-34.206-49.408l23.862-8.254z",
    fill: "#A0616A"
  }), __jsx("path", {
    d: "M146.433 351.272l32.197 46.259 75.063 62.71s69.362 16.153 59.86 27.555c-9.501 11.401-67.461-11.402-67.461-11.402s-86.465-62.71-89.315-67.461c-2.85-4.75-34.206-49.408-34.206-49.408l23.862-8.254z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M127.321 313.917l20.904 40.857s-4.75 19.953-12.352 21.853c-7.602 1.9-39.907-24.704-39.907-24.704l31.355-38.006z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M127.321 313.917l20.904 40.857s-4.75 19.953-12.352 21.853c-7.602 1.9-39.907-24.704-39.907-24.704l31.355-38.006z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M382.335 413.433l6.175 25.47a1.59 1.59 0 0 1-.03.86l-28.01 87.532a1.592 1.592 0 0 1-3.097-.306L353.5 492.89a1.59 1.59 0 0 1 .068-.672l25.71-78.903a1.59 1.59 0 0 1 3.058.118z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M380.064 415.584l5.7 21.854-24.704 79.813-5.7-24.704 24.704-76.963z",
    fill: "#F2F2F2"
  }), __jsx("path", {
    d: "M255.593 534.354c.95 2.85 98.817-.95 99.767-1.9a20.635 20.635 0 0 0 2.09-3.8c.893-1.901 1.71-3.802 1.71-3.802l-3.8-30.766-96.916-3.44s-2.423 26.073-2.918 38.007c-.123 3.012-.123 5.13.067 5.701z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M343.008 498.248l1.9 26.604H302.15v-26.604h40.857zM287.899 506.799l.255-.05-1.206 11.452h-23.753V506.8h24.704zM255.593 534.354c.95 2.85 98.817-.95 99.767-1.9a20.635 20.635 0 0 0 2.09-3.8H255.526c-.123 3.011-.123 5.13.067 5.7z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M98.817 257.857c0-23.614 19.143-42.757 42.757-42.757 23.614 0 42.757 19.143 42.757 42.757 0 23.614-19.143 42.757-42.757 42.757-23.614 0-42.757-19.142-42.757-42.757z",
    fill: "#A0616A"
  }), __jsx("path", {
    d: "M138.723 295.864s-14.252 24.704-17.102 38.006c-2.85 13.302-42.758-26.604-42.758-26.604l-5.226-13.778s37.532-17.578 34.681-31.83c-2.85-14.252 30.405 34.206 30.405 34.206zM146.325 369.976l38.956 51.309 93.116 69.361s67.461 14.253 52.259 24.704c-15.203 10.452-58.91-9.5-58.91-9.5s-94.066-50.36-114.02-71.263c-19.953-20.903-57.009-56.06-57.009-56.06l45.608-8.55z",
    fill: "#A0616A"
  }), __jsx("path", {
    d: "M94.066 449.79l11.402 18.053 68.048-21.409c14.93-4.697 31.303-2.968 44.546 5.375 11.877 7.482 19.478 19.36 2.375 36.937-34.205 35.156-57.01 16.153-57.01 16.153s-114.969 54.16-133.972 27.555c-19.003-26.605-19.953-39.907-19.953-39.907s73.162-45.608 84.564-42.757z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M236.59 512.5s30.405 19.954-5.701 29.455c-36.106 9.502-62.71-3.8-62.71-3.8s-31.356 0-31.356-16.153 10.452-18.053 10.452-18.053l32.305 4.75s38.957-10.451 57.01 3.801z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M176.65 247.101c2.91 1.298 5.796 2.833 8.96 3.21 3.163.376 6.766-.728 8.263-3.54.809-1.52.902-3.307.939-5.027.115-5.218-.263-10.859-3.569-14.896-2.104-2.57-5.176-4.19-7.354-6.697-1.56-1.797-2.6-3.974-3.718-6.075-4.236-7.956-10.508-15.602-19.224-17.895-3.64-.958-7.458-.911-11.222-.858l-21.95.31c-3.553.05-7.16.108-10.56 1.136-7.066 2.136-12.21 8.078-16.922 13.76-3.525 4.25-7.059 8.546-9.704 13.393a46.995 46.995 0 0 0-5.57 23.027c-.03 2.058.235 4.11.788 6.092a33.807 33.807 0 0 0 2.395 5.26c4.117 8.086 6.56 18.186 1.925 25.985 8.053-3.29 16.021-7.603 21.333-14.492 2.377-3.081 4.24-6.689 7.408-8.95 3.167-2.262 8.327-2.458 10.36.861a9.283 9.283 0 0 1 1.047 4.349c.148 2.491.144 5.079 1.2 7.34 1.057 2.26 3.573 4.085 5.975 3.409 4.137-1.166 3.74-7.515 6.927-10.4 2.42-2.19 6.153-1.77 9.262-2.765 3.622-1.159 6.34-4.297 7.889-7.77 1.177-2.64 1.16-9.549 3.387-10.978 2.793-1.793 9.145 1.057 11.735 2.211z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M70.243 288.981a11.277 11.277 0 0 1 5.87.015c6.1 1.638 19.772 5.973 22.704 12.569 3.8 8.551 17.103 21.853 17.103 21.853s18.053 18.053 14.252 30.406c-3.801 12.352-18.053 26.604-18.053 26.604s3.801 58.91-15.203 74.112c-19.003 15.203-26.604 4.751-26.604 19.004 0 14.252-58.91 58.91-70.312 31.355 0 0 5.701-51.309 3.8-69.362-1.872-17.793.87-128.803 66.443-146.556z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M100.717 312.967s57.96 42.757 47.508 60.81c0 0-35.156 17.103-42.757 16.153-7.602-.95-37.057-34.206-44.658-37.057-7.601-2.85-11.402-54.159 39.907-39.906z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M312.73 171.477c0-25.924 21.016-46.939 46.94-46.939 25.923 0 46.938 21.015 46.938 46.939 0 25.923-21.015 46.939-46.938 46.939-25.924 0-46.94-21.015-46.94-46.94z",
    fill: "#F2F2F2"
  }), __jsx("path", {
    d: "M289 0h488v317H289V0z",
    fill: "#FFF2F2"
  }), __jsx("path", {
    d: "M484.322 110.516H747.36v-55.04H484.324v55.04zm261.878-1.159H485.481V56.634h260.72v52.723z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M466.362 66.483H728.24v53.882H466.362V66.483zM296.76 11.008a4.056 4.056 0 1 1 8.112 0 4.056 4.056 0 0 1-8.111 0zM310.666 11.008a4.056 4.056 0 1 1 8.111 0 4.056 4.056 0 0 1-8.111 0zM324.57 11.008a4.056 4.056 0 1 1 8.112 0 4.056 4.056 0 0 1-8.111 0z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M289.229 317.498h487.835V0H289.229v317.498zm486.676-1.159H290.387V1.159h485.518v315.18z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M289.808 17.575h486.676v1.16H289.808v-1.16z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M297.34 9.27a4.635 4.635 0 1 0 9.27 0 4.635 4.635 0 0 0-9.27 0zm1.159 0a3.476 3.476 0 0 1 3.476-3.476A3.476 3.476 0 1 1 298.5 9.27zM311.245 9.27a4.635 4.635 0 1 0 9.27 0 4.635 4.635 0 0 0-9.27 0zm1.159 0a3.476 3.476 0 0 1 3.476-3.476 3.476 3.476 0 1 1-3.476 3.476zM329.785 13.905a4.635 4.635 0 1 0-4.282-2.861 4.635 4.635 0 0 0 4.282 2.861zm-3.211-5.965a3.476 3.476 0 0 1 3.211-2.146 3.476 3.476 0 1 1-3.212 2.146z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M442.026 18.155h1.158v299.214h-1.158V18.155z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M497.358 165.267h85.169v11.588h-85.169v-11.588zM631.194 165.267h85.169v11.588h-85.169v-11.588z",
    fill: "#F2F2F2"
  }), __jsx("path", {
    d: "M501.414 171.64h86.327v-12.746h-86.327v12.746zm85.168-1.159h-84.01v-10.429h84.01v10.43z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M497.358 255.07h85.169v11.588h-85.169v-11.587z",
    fill: "#F2F2F2"
  }), __jsx("path", {
    d: "M501.414 261.444h86.327v-12.747h-86.327v12.747zm85.168-1.16h-84.01v-10.428h84.01v10.429z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M721.867 216.542H501.704v-12.747h220.163v12.747z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M497.648 209.01h219.004v11.588H497.648V209.01z",
    fill: "#F2F2F2"
  }), __jsx("path", {
    d: "M502.863 215.383h217.845v-10.429H502.862v10.429z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M635.25 171.64h86.327v-12.746H635.25v12.746zm85.168-1.159h-84.01v-10.429h84.01v10.43zM367.612 206.14c26.31-.03 47.632-21.35 47.662-47.661 0-26.323-21.339-47.661-47.661-47.661-26.323 0-47.661 21.338-47.661 47.66 0 26.323 21.338 47.661 47.66 47.661zm0-93.878c25.513.029 46.188 20.703 46.218 46.217 0 25.524-20.692 46.216-46.217 46.216s-46.217-20.692-46.217-46.216c0-25.525 20.692-46.217 46.216-46.217z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M540.203 537.6h204.364v1.444H540.203v-1.445z",
    fill: "#3F3D56"
  }));
};

Webdev.defaultProps = {
  width: "778",
  height: "546",
  viewBox: "0 0 778 546",
  xmlns: "http://www.w3.org/2000/svg"
};

var Webdevcd = function Webdevcd(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M2.68 0h878.64v552.215H2.68V0z",
    fill: "none"
  }), __jsx("path", {
    d: "M840.542 552.215H97.91c-13.752 0-24.9-11.149-24.9-24.901 269.204-31.287 533.35-31.287 792.434 0 0 13.752-11.148 24.9-24.9 24.9z",
    fill: "#BBB"
  }), __jsx("path", {
    d: "M865.443 528.779l-792.435-1.465 91.84-154.532.44-.733V31.478A31.475 31.475 0 0 1 196.768 0h540.524a31.474 31.474 0 0 1 31.477 31.478v342.915l96.674 154.386z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M196.048 21.971c-5.66.007-10.247 4.594-10.253 10.254v310.53c.006 5.658 4.593 10.245 10.253 10.252h546.356c5.66-.007 10.246-4.594 10.253-10.253V32.224c-.006-5.659-4.593-10.246-10.253-10.253H196.048z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M199.639 394.02a4.406 4.406 0 0 0-3.993 2.558l-28.299 61.52a4.394 4.394 0 0 0 3.992 6.231H766.45a4.393 4.393 0 0 0 3.93-6.36l-30.76-61.52a4.373 4.373 0 0 0-3.93-2.428H199.64z",
    fill: "#BBB"
  }), __jsx("path", {
    d: "M460.437 10.253a6.591 6.591 0 1 1 13.183 0 6.591 6.591 0 0 1-13.183 0z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M408.534 476.047a4.401 4.401 0 0 0-4.243 3.251l-7.098 26.366a4.393 4.393 0 0 0 4.243 5.537h134.997a4.393 4.393 0 0 0 4.151-5.831l-9.126-26.366a4.398 4.398 0 0 0-4.153-2.957h-118.77zM768.77 366.922v5.86H164.849l.454-.733v-5.127H768.77zM694.227 380.344c-.483 0-.907.325-1.033.792l-1.729 6.42a1.07 1.07 0 0 0 1.034 1.349h32.873a1.07 1.07 0 0 0 1.011-1.42l-2.222-6.421a1.07 1.07 0 0 0-1.011-.72h-28.923zM646.227 380.344c-.483 0-.907.325-1.033.792l-1.729 6.42a1.07 1.07 0 0 0 1.034 1.349h32.873a1.07 1.07 0 0 0 1.011-1.42l-2.222-6.421a1.07 1.07 0 0 0-1.011-.72h-28.923z",
    fill: "#BBB"
  }), __jsx("path", {
    d: "M507.161 421.14h2.577L504.585 76.75h-2.577l.103 6.87h-57.747l.103-6.87h-2.576l-5.153 344.388h2.576l.334-22.329h67.179l.334 22.33zM502.15 86.197l.63 42.083h-59.084l.63-42.083h57.824zm-59.122 86.742h60.42l-.63-42.083h-59.16l-.63 42.083zm60.458 2.576l.63 42.082H442.36l.63-42.082h60.496zm1.298 86.741l-.63-42.082h-61.833l-.63 42.082h63.093zm.038 2.576l.63 42.083h-64.429l.63-42.083h63.17zm1.298 86.742l-.63-42.083h-64.505l-.63 42.083h65.765zm-65.804 2.576l-.63 42.082h67.102l-.63-42.082h-65.842z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M418.462 153.358c0-23.203 18.81-42.013 42.012-42.013 23.203 0 42.013 18.81 42.013 42.013 0 23.202-18.81 42.012-42.013 42.012-23.202 0-42.012-18.81-42.012-42.012z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M472.627 184.665l12.56-2.273 4.073 22.502-12.56 2.273-4.073-22.502zM447.509 189.212l12.559-2.273 4.073 22.502-12.559 2.273-4.073-22.502z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M447.555 220.28c-1.423-1.681 1.056-6.121 5.539-9.918 4.482-3.796 9.27-5.51 10.694-3.83 1.424 1.681-1.056 6.121-5.539 9.918-4.482 3.796-9.27 5.51-10.694 3.83zM472.15 215.827c-1.423-1.68 1.056-6.12 5.539-9.917 4.483-3.796 9.27-5.511 10.694-3.83 1.424 1.68-1.056 6.12-5.539 9.917-4.482 3.796-9.27 5.511-10.694 3.83z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M443.174 143.081c0-7.93 6.429-14.358 14.359-14.358s14.359 6.428 14.359 14.358c0 7.93-6.429 14.359-14.36 14.359-7.93 0-14.358-6.429-14.358-14.359z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M446.846 137.934a4.786 4.786 0 1 1 9.572 0 4.786 4.786 0 0 1-9.572 0z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M493.616 107.653c.632-15.554-12.773-28.728-29.94-29.425-17.168-.698-31.598 11.346-32.23 26.9-.631 15.553 11.302 19.087 28.47 19.784 17.168.698 33.068-1.706 33.7-17.26z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M420.208 152.131c-11.308-2.592-19.815-7.57-19.001-11.12.813-3.55 10.64-4.327 21.948-1.735 11.308 2.592 19.816 7.57 19.002 11.12-.814 3.55-10.64 4.327-21.949 1.735zM502.677 165.846c-11.308-2.592-19.816-7.571-19.002-11.121.814-3.55 10.64-4.327 21.949-1.735 11.308 2.592 19.815 7.571 19.001 11.121-.813 3.55-10.64 4.327-21.948 1.735z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M472.013 169.914a9.572 9.572 0 1 1-18.835 3.429l-.004-.018c-.941-5.203 3.08-7.043 8.283-7.985 5.202-.942 9.614-.628 10.556 4.574z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M304.178 313.748c-3.488-1.333-2.873-11.419 1.373-22.528 4.246-11.109 10.515-19.034 14.003-17.7 3.487 1.332 2.872 11.418-1.374 22.527-4.246 11.11-10.515 19.034-14.002 17.701z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M265.16 368.667c-23.478-3.81-39.423-25.932-35.613-49.41 3.81-23.478 25.932-39.422 49.41-35.612 23.479 3.81 39.423 25.931 35.613 49.41-3.81 23.478-25.932 39.422-49.41 35.612z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M252.433 359.955h13.084v23.442h-13.084v-23.442zM278.6 359.955h13.084v23.442H278.6v-23.442z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M252.433 383.67c0-2.259 4.881-4.09 10.903-4.09s10.903 1.831 10.903 4.09c0 2.258-4.881 4.088-10.903 4.088s-10.903-1.83-10.903-4.088zM278.6 383.125c0-2.259 4.882-4.09 10.903-4.09 6.022 0 10.904 1.831 10.904 4.09 0 2.258-4.882 4.088-10.904 4.088-6.021 0-10.903-1.83-10.903-4.088z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M230.282 286.104c-3.478-15.573 7.638-31.31 24.828-35.148 17.19-3.839 33.944 5.675 37.422 21.248 3.478 15.574-7.915 21.318-25.105 25.156-17.19 3.839-33.668 4.318-37.145-11.256z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M220.654 312.28c-10.746-5.096-18.16-11.962-16.56-15.336 1.6-3.373 11.608-1.976 22.353 3.12 10.746 5.097 18.16 11.963 16.56 15.336-1.6 3.373-11.608 1.977-22.353-3.12zM42.513 369.763c0-23.785 19.282-43.067 43.067-43.067 23.786 0 43.068 19.282 43.068 43.067 0 23.786-19.282 43.068-43.068 43.068-23.785 0-43.067-19.282-43.067-43.068z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M65.955 403.563H79.04v23.442H65.955v-23.442zM92.123 403.563h13.083v23.442H92.123v-23.442z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M65.955 427.277c0-2.258 4.881-4.088 10.903-4.088s10.903 1.83 10.903 4.088-4.881 4.089-10.903 4.089-10.903-1.83-10.903-4.089zM92.123 426.732c0-2.258 4.881-4.089 10.903-4.089 6.021 0 10.903 1.83 10.903 4.089 0 2.258-4.882 4.089-10.903 4.089-6.022 0-10.903-1.83-10.903-4.089z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M71.952 358.86c0-8.13 6.59-14.72 14.719-14.72 8.13 0 14.72 6.59 14.72 14.72s-6.59 14.72-14.72 14.72-14.72-6.59-14.72-14.72z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M81.764 358.86a4.906 4.906 0 1 1 9.813 0 4.906 4.906 0 0 1-9.813 0z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M43.804 329.712c-3.478-15.574 7.638-31.31 24.828-35.149 17.19-3.838 33.944 5.675 37.422 21.249 3.477 15.574-7.915 21.318-25.105 25.156-17.19 3.838-33.668 4.318-37.145-11.256z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M102.98 233.605c-3.487-1.333-2.872-11.419 1.374-22.528 4.246-11.109 10.515-19.034 14.003-17.7 3.487 1.332 2.872 11.418-1.374 22.527-4.246 11.11-10.515 19.034-14.003 17.701z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M63.963 288.524c-23.479-3.81-39.423-25.932-35.613-49.41 3.81-23.478 25.932-39.422 49.41-35.612 23.478 3.81 39.423 25.931 35.613 49.41-3.81 23.478-25.932 39.422-49.41 35.612z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M51.236 279.812H64.32v23.442H51.236v-23.442zM77.403 279.812h13.084v23.442H77.403v-23.442z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M51.236 303.527c0-2.258 4.881-4.089 10.903-4.089s10.903 1.83 10.903 4.089c0 2.258-4.881 4.088-10.903 4.088s-10.903-1.83-10.903-4.088zM77.403 302.982c0-2.259 4.882-4.09 10.903-4.09 6.022 0 10.904 1.831 10.904 4.09 0 2.258-4.882 4.088-10.904 4.088-6.021 0-10.903-1.83-10.903-4.088z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M57.232 235.11c0-8.13 6.59-14.72 14.72-14.72 8.129 0 14.719 6.59 14.719 14.72 0 8.129-6.59 14.719-14.72 14.719-8.129 0-14.719-6.59-14.719-14.72z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M67.045 235.11a4.906 4.906 0 1 1 9.813 0 4.906 4.906 0 0 1-9.813 0z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M29.085 205.961c-3.478-15.573 7.638-31.31 24.828-35.148 17.19-3.839 33.945 5.675 37.422 21.248 3.478 15.574-7.915 21.318-25.105 25.156-17.19 3.839-33.668 4.318-37.145-11.256z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M19.456 232.137c-10.745-5.096-18.159-11.962-16.56-15.335 1.6-3.374 11.609-1.977 22.354 3.12 10.745 5.096 18.16 11.962 16.56 15.335-1.6 3.374-11.608 1.977-22.354-3.12z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M49.707 261.55c0 4.215 10.853 12.538 22.896 12.538 12.044 0 23.335-11.867 23.335-16.082s-11.291.818-23.335.818c-12.043 0-22.896-1.49-22.896 2.726z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M113.204 81.569a3.003 3.003 0 0 0-3 3v124a3.003 3.003 0 0 0 3 3h287a3.004 3.004 0 0 0 3-3v-124a3.003 3.003 0 0 0-3-3h-287z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M161.577 146.569c0-16.083 13.038-29.121 29.121-29.121s29.121 13.038 29.121 29.12c0 16.084-13.038 29.122-29.121 29.122s-29.121-13.038-29.121-29.121zM256.423 142.694a3.405 3.405 0 0 0 0 6.81h91.946a3.405 3.405 0 0 0 3.46-3.35c-3.385-3.46-1.468-3.429-3.348-3.46h-.112-91.946zM256.423 122.967a3.405 3.405 0 0 0 0 6.81h45.916a3.405 3.405 0 0 0 3.033-5.06c-2.959-1.75-1.705-1.73-2.922-1.75h-.111-45.916zM256.423 163.36a3.405 3.405 0 0 0 0 6.81h91.946a3.405 3.405 0 0 0 3.46-3.348c-3.385-3.462-1.468-3.43-3.348-3.461h-.112-91.946z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M688.968 375.024c-4.246-11.11-4.861-21.195-1.374-22.528 3.488-1.333 9.757 6.592 14.003 17.7 4.246 11.11 4.861 21.196 1.374 22.529-3.488 1.333-9.757-6.592-14.003-17.701z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M683.579 421.03c-3.81-23.478 12.134-45.6 35.612-49.41 23.478-3.81 45.6 12.135 49.41 35.613 3.81 23.479-12.134 45.6-35.613 49.41-23.478 3.81-45.6-12.134-49.41-35.612z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M745.715 447.932h-13.083l2.56 28.073 10.546-2.865-.023-25.208zM717.192 448.005h-13.084l2.56 28.073 10.07-2.938.454-25.135z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M695.124 474.114c-.165-2.252 4.57-4.434 10.575-4.873 6.006-.439 11.008 1.031 11.173 3.283.164 2.252-4.57 4.434-10.576 4.873-6.006.439-11.008-1.03-11.172-3.283z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M710.28 403.229c0-8.13 6.59-14.72 14.72-14.72 8.128 0 14.718 6.59 14.718 14.72s-6.59 14.72-14.719 14.72-14.719-6.59-14.719-14.72z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M720.093 403.229a4.906 4.906 0 1 1 9.813 0 4.906 4.906 0 0 1-9.813 0z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M758.804 401.47c-3.003-2.218.29-11.771 7.356-21.338 7.066-9.566 15.228-15.523 18.231-13.305 3.004 2.219-.29 11.772-7.356 21.338-7.065 9.566-15.228 15.523-18.23 13.305z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M705.077 436.339c0-3.474 8.945-10.334 18.87-10.334 9.927 0 19.233 9.78 19.233 13.254s-9.307-.674-19.232-.674c-9.926 0-18.871 1.228-18.871-2.246z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M846.856 378.541l-235.745-32.68a7.009 7.009 0 0 1-5.972-7.896l26.501-191.171a7.008 7.008 0 0 1 7.895-5.972l235.745 32.68a7.009 7.009 0 0 1 5.973 7.896l-26.502 191.171a7.008 7.008 0 0 1-7.895 5.972z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M762.402 318.88l-120.354-16.685a2.469 2.469 0 0 1-.445-.098l70.59-90.706a4.024 4.024 0 0 1 6.938.961l29.03 71.463 1.39 3.42 12.85 31.644z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M762.402 318.88l-41.092-5.697 24.234-26.504 1.745-1.909.872-.955 1.39 3.42 12.85 31.644z",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M829.415 328.17l-104.097-14.431 24.234-26.504 1.744-1.91 31.58-34.54a5.37 5.37 0 0 1 7.96.623c.115.168.22.343.313.524l38.266 76.238zM745.866 224.184c0-9.942 8.059-18 18-18s18 8.058 18 18c0 9.94-8.059 18-18 18s-18-8.06-18-18z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M643.557 155.517l21.791 3.021-3.02 21.792-21.792-3.021 3.02-21.792z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M767.866 374.08c3.478-15.573-7.638-31.31-24.828-35.148-17.19-3.839-33.945 5.675-37.422 21.249-3.477 15.574 7.915 21.317 25.105 25.156 17.19 3.838 33.668 4.318 37.145-11.256z",
    fill: "#F2F2F2"
  }), __jsx("path", {
    d: "M723.816 474.045c-.164-2.252 4.57-4.434 10.576-4.873 6.006-.439 11.008 1.03 11.172 3.283.165 2.252-4.57 4.434-10.576 4.873-6.005.439-11.007-1.03-11.172-3.283z",
    fill: "#2F2E41"
  }));
};

Webdevcd.defaultProps = {
  width: "882",
  height: "553",
  viewBox: "0 0 882 553",
  xmlns: "http://www.w3.org/2000/svg"
};

var UiUx = function UiUx(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M0 .372h1041v704.874H0V.372z",
    fill: "none"
  }), __jsx("path", {
    d: "M627.341 360.207c0-42.926 34.799-77.724 77.724-77.724 42.926 0 77.724 34.798 77.724 77.724s-34.798 77.724-77.724 77.724c-42.925 0-77.724-34.798-77.724-77.724z",
    fill: "#6C63FF",
    fillOpacity: ".4"
  }), __jsx("path", {
    d: "M273.42 467.752h433.42v117.47H273.42v-117.47z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M679.08 176.716l-17.307 8.191 15.316-11.453a86.392 86.392 0 0 0-8.362-11.005l-75.056 18.655 67.796-25.861a86.396 86.396 0 0 0-9.845-7.504L537.256 166.16a85.711 85.711 0 0 0-18.772 53.49h172.153a85.667 85.667 0 0 0-11.559-42.936l.001.002zM692.787 50.832A502.255 502.255 0 0 0 471.901 0C316.123 0 176.85 70.637 84.344 181.62c158.408-34.709 434.208-94.791 608.443-130.79z",
    fill: "#F2F2F2"
  }), __jsx("path", {
    d: "M0 702.69h1032.92v2.026H0v-2.026z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M603.41 219.65l-58.596-87.04s88.74 30.98 78.67 87.04H603.41z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M605.71 219.65l58.598-87.04s-88.74 30.98-78.67 87.04h20.073z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M272.913 704.715h434.433V56.61H272.913v648.105zm432.408-2.025H274.938V58.636h430.383V702.69z",
    fill: "#2F2E41",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M274.432 71.984H706.84v2.025H274.432v-2.025z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M281.52 64.712a4.05 4.05 0 1 1 8.102 0 4.05 4.05 0 0 1-8.101 0zM292.66 64.712a4.05 4.05 0 1 1 8.101 0 4.05 4.05 0 0 1-8.101 0zM303.8 64.712a4.05 4.05 0 1 1 8.1 0 4.05 4.05 0 0 1-8.1 0zM289.622 85.978h18.228v10.126h-18.228V85.978zM289.622 165.978h89.114v10.127h-89.114v-10.127z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M695.689 96.103h-89.113V85.976h89.113v10.127zM289.622 183.194h149.874v6.075H289.622v-6.076zM289.622 196.358h141.773v6.076H289.622v-6.076zM289.622 209.523h103.292v6.076H289.622v-6.076zM324.053 389.777h58.734v6.076h-58.734v-6.076zM324.053 402.942h55.56v6.076h-55.56v-6.076zM324.053 416.106h40.479v6.076h-40.48v-6.076zM460.762 389.777h58.735v6.076h-58.735v-6.076zM460.762 402.942h55.56v6.076h-55.56v-6.076zM460.762 416.106h40.48v6.076h-40.48v-6.076zM602.535 389.777h58.735v6.076h-58.735v-6.076zM602.535 402.942h55.56v6.076h-55.56v-6.076zM602.535 416.106h40.48v6.076h-40.48v-6.076z",
    fill: "#F2F2F2"
  }), __jsx("path", {
    d: "M415.192 619.652h89.115v10.126h-89.115v-10.126z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M415.192 636.867h149.874v6.076H415.192v-6.076zM415.192 650.032h141.773v6.076H415.192v-6.076zM415.192 663.196h103.292v6.076H415.192v-6.076z",
    fill: "#F2F2F2"
  }), __jsx("path", {
    d: "M316.457 275.346h352.407v2.025H316.457v-2.025zM315.951 310.79h74.937v66.835h-74.937v-66.836z",
    fill: "#6C63FF",
    fillOpacity: ".3"
  }), __jsx("path", {
    d: "M452.66 310.79h74.938v66.835h-74.937v-66.836zM594.434 310.79h74.937v66.835h-74.937v-66.836z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M480.366 377.344l-.989-.02c.022-1.094.64-26.897 10.798-34.029l.567.81c-9.748 6.843-10.371 32.976-10.376 33.24zM490.458 338.026a4.943 4.943 0 1 1 9.887 0 4.943 4.943 0 0 1-9.887 0z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M494.402 355.48a15.39 15.39 0 0 1-7.94.343 14.026 14.026 0 0 1 14.42-4.947 15.39 15.39 0 0 1-6.48 4.604zM622.139 377.344l-.989-.02c.022-1.094.64-26.897 10.798-34.029l.567.81c-9.748 6.843-10.371 32.976-10.376 33.24zM632.231 338.026a4.943 4.943 0 1 1 9.887 0 4.943 4.943 0 0 1-9.887 0z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M636.176 355.48a15.39 15.39 0 0 1-7.941.343 14.026 14.026 0 0 1 14.42-4.947 15.39 15.39 0 0 1-6.48 4.604zM289.622 505.22h89.114v10.127h-89.114v-10.126z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M289.622 522.436h149.874v6.076H289.622v-6.076zM289.622 535.6h141.773v6.077H289.622V535.6zM289.622 548.765h103.292v6.076H289.622v-6.076z",
    fill: "#F2F2F2"
  }), __jsx("path", {
    d: "M587.856 519.195c0-17.476 14.167-31.643 31.643-31.643 17.477 0 31.644 14.167 31.644 31.643s-14.167 31.644-31.644 31.644c-17.476 0-31.643-14.168-31.643-31.644zM538.737 534.309c0-12.26 9.939-22.198 22.198-22.198 12.26 0 22.198 9.938 22.198 22.198s-9.938 22.198-22.198 22.198-22.197-9.939-22.197-22.198z",
    fill: "#6C63FF",
    fillOpacity: ".4"
  }), __jsx("path", {
    d: "M89.62 589.778c0-44.183 35.818-80 80.001-80 44.184 0 80 35.817 80 80 0 44.184-35.816 80-80 80-44.183 0-80-35.816-80-80z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M133.166 652.563h24.303v43.545h-24.303v-43.545zM181.773 652.563h24.304v43.545h-24.304v-43.545z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M133.166 696.614c0-4.194 9.067-7.595 20.253-7.595 11.185 0 20.253 3.4 20.253 7.595s-9.068 7.595-20.253 7.595c-11.186 0-20.254-3.4-20.254-7.595zM181.773 695.602c0-4.195 9.068-7.595 20.254-7.595 11.185 0 20.253 3.4 20.253 7.595 0 4.194-9.068 7.595-20.254 7.595-11.185 0-20.253-3.4-20.253-7.595z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M144.305 569.525c0-15.1 12.241-27.342 27.342-27.342 15.1 0 27.342 12.241 27.342 27.342 0 15.1-12.242 27.342-27.342 27.342-15.1 0-27.342-12.242-27.342-27.342z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M162.532 557.373a9.114 9.114 0 1 1 18.228 0 9.114 9.114 0 0 1-18.227 0z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M92.018 515.38c-6.46-28.93 14.19-58.161 46.12-65.291 31.932-7.13 63.054 10.541 69.514 39.47 6.46 28.93-14.703 39.6-46.634 46.73-31.931 7.13-62.54 8.02-69-20.909z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M213.295 537.522c-6.29-2.923-3.841-21.532 5.468-41.566 9.31-20.034 21.955-33.906 28.244-30.983 6.29 2.922 3.84 21.532-5.468 41.566-9.31 20.034-21.955 33.905-28.244 30.983zM72.219 531.425c-10.335-19.524-13.744-37.982-7.615-41.227 6.13-3.244 19.476 9.954 29.811 29.478 10.335 19.525 13.744 37.983 7.615 41.227-6.13 3.245-19.476-9.953-29.811-29.478zM818.657 534.792c-7.945-20.613-9.14-39.345-2.668-41.84 6.47-2.494 18.157 12.195 26.102 32.807 7.945 20.614 9.14 39.346 2.669 41.84-6.471 2.494-18.158-12.194-26.103-32.807z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M824.5 590.489c0-44.183 35.818-80 80.001-80 44.184 0 80 35.817 80 80s-35.816 80-80 80c-44.183 0-80-35.817-80-80z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M941.236 696.7l-24.304.069-.122-43.545 24.304-.068.122 43.545zM892.633 696.84l-24.304.069-.122-43.544 24.304-.068.122 43.544z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M900.735 697.324c-.011-4.194 9.047-7.62 20.232-7.651 11.185-.032 20.262 3.343 20.274 7.538.012 4.194-9.046 7.62-20.231 7.652-11.186.03-20.263-3.344-20.275-7.539zM852.125 696.448c-.011-4.195 9.046-7.62 20.232-7.652 11.185-.031 20.262 3.344 20.274 7.538.012 4.195-9.046 7.62-20.232 7.652-11.185.031-20.262-3.344-20.274-7.538z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M875.077 570.241c0-15.1 12.241-27.342 27.342-27.342 15.1 0 27.342 12.242 27.342 27.342 0 15.1-12.241 27.342-27.342 27.342-15.1 0-27.342-12.241-27.342-27.342z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M893.305 570.241a9.114 9.114 0 1 1 18.228 0 9.114 9.114 0 0 1-18.228 0z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M981.895 515.874c6.38-28.948-14.352-58.122-46.303-65.162-31.951-7.04-63.024 10.718-69.402 39.666-6.38 28.947 14.813 39.557 46.764 46.598 31.952 7.04 62.563 7.845 68.941-21.102z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M958.395 570.35c-2.99-6.259 10.747-19.051 30.68-28.574 19.933-9.522 38.516-12.169 41.505-5.911 2.99 6.258-10.746 19.05-30.68 28.573-19.933 9.522-38.515 12.169-41.505 5.911z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M943.878 619.24c.022 7.83-20.096 23.347-42.467 23.41-22.37.063-43.408-21.922-43.43-29.752-.022-7.83 20.98 1.46 43.35 1.398 22.372-.063 42.525-2.886 42.547 4.944z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M817.22 474.638c0-61.66 49.985-111.644 111.644-111.644 61.66 0 111.644 49.985 111.644 111.644 0 61.659-49.984 111.644-111.644 111.644-61.66 0-111.644-49.985-111.644-111.644z",
    fill: "#6C63FF",
    fillOpacity: ".4"
  }), __jsx("path", {
    d: "M112.816 353.005c0-44.183 35.817-80 80-80 44.184 0 80 35.817 80 80 0 44.184-35.816 80-80 80-44.183 0-80-35.816-80-80z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M145.757 408.286l23.914 4.329-7.756 42.847L138 451.133l7.757-42.847zM193.586 416.944l23.915 4.33-7.756 42.847-23.915-4.33 7.756-42.847z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M197.05 473.138c-8.536-7.229-13.258-15.684-10.548-18.885 2.711-3.2 11.828.065 20.364 7.294 8.536 7.228 13.258 15.683 10.547 18.884-2.711 3.201-11.828-.064-20.364-7.293zM150.216 464.66c-8.536-7.23-13.257-15.684-10.547-18.885 2.711-3.2 11.828.065 20.364 7.293 8.535 7.23 13.258 15.684 10.547 18.885-2.711 3.2-11.828-.064-20.364-7.293z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M171.075 333.437c0-15.1 12.241-27.342 27.342-27.342 15.1 0 27.342 12.241 27.342 27.342 0 15.1-12.241 27.342-27.342 27.342-15.1 0-27.342-12.242-27.342-27.342z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M200.54 323.636a9.114 9.114 0 1 1 18.228 0 9.114 9.114 0 0 1-18.227 0z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M129.707 265.974c-1.203-29.618 24.323-54.704 57.014-56.032 32.69-1.328 60.167 21.605 61.37 51.223 1.203 29.617-21.521 36.346-54.212 37.674-32.69 1.328-62.969-3.248-64.172-32.866z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M227.693 347.362c-1.55-6.76 14.65-16.24 36.183-21.177 21.532-4.935 40.244-3.456 41.794 3.303 1.55 6.76-14.65 16.241-36.183 21.177-21.533 4.935-40.245 3.457-41.794-3.303zM70.657 373.477c-1.55-6.76 14.65-16.241 36.183-21.177 21.533-4.935 40.245-3.457 41.794 3.303 1.55 6.76-14.65 16.241-36.183 21.177-21.532 4.935-40.244 3.457-41.794-3.303z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M170.844 384.533c-1.79 9.904 4.786 19.385 14.69 21.178 9.904 1.792 19.387-4.781 21.183-14.684 1.793-9.906-5.866-13.412-15.772-15.205-9.906-1.793-18.308-1.195-20.101 8.71z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M309.4 266.496l71.779 21.52-19.193 64.019-71.78-21.52 19.193-64.02z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M316.83 338.208l-.941-.303c.334-1.042 8.336-25.581 20.114-29.495l.312.938c-11.303 3.756-19.405 28.609-19.485 28.86zM337.58 304.863a4.943 4.943 0 1 1 9.886 0 4.943 4.943 0 0 1-9.886 0z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M336.554 321.295a15.39 15.39 0 0 1-7.705-1.952 14.026 14.026 0 0 1 15.233-.597 15.39 15.39 0 0 1-7.528 2.549z",
    fill: "#6C63FF"
  }));
};

UiUx.defaultProps = {
  width: "1041",
  height: "706",
  viewBox: "0 0 1041 706",
  xmlns: "http://www.w3.org/2000/svg"
}; /// e-comers development using svgs

var Ecom = function Ecom(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M0 0h877v639.474H0V0z",
    fill: "none"
  }), __jsx("path", {
    d: "M.275.365H645v412.91H.275V.365z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M18.71 52.155h607.854v336.693H18.71V52.155z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M0 0h644.725v27.39H0V0z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M15.278 14.003a5.077 5.077 0 1 1 10.153 0 5.077 5.077 0 0 1-10.153 0zM34.547 14.003a5.077 5.077 0 1 1 10.153 0 5.077 5.077 0 0 1-10.153 0zM53.816 14.003a5.077 5.077 0 1 1 10.154 0 5.077 5.077 0 0 1-10.154 0z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M93.5 79.848h118.887V208.83H93.5V79.848zM263.193 79.848H382.08V208.83H263.193V79.848zM432.885 79.848h118.887V208.83H432.885V79.848zM93.5 232.176h118.887v128.982H93.5V232.176zM263.193 232.176H382.08v128.982H263.193V232.176zM432.885 232.176h118.887v128.982H432.885V232.176z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M291.928 265.325l21.722-8.588 2.526 42.939s4.546 13.134 3.03 18.186c0 0 1.01 8.588-1.515 9.093-2.526.505-9.598 1.515-10.103 1.01-.505-.505-.505-2.02-.505-2.02s-5.052 3.535-5.557 7.577c0 0-21.217 6.567-21.722.505-.505-6.062 10.608-11.114 10.608-11.114L299 309.78l-7.072-44.454zM337.897 265.325l21.722-8.588 2.526 42.939s4.547 13.134 3.031 18.186c0 0 1.01 8.588-1.515 9.093-2.526.505-9.598 1.515-10.104 1.01-.505-.505-.505-2.02-.505-2.02s-5.051 3.535-5.557 7.577c0 0-21.216 6.567-21.721.505-.506-6.062 10.608-11.114 10.608-11.114l8.588-13.134-7.073-44.454z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M340.022 99.51s-4.625 12.923.734 18.752l-4.467 15.352s15.873 47.622 11.338 54.274c0 0-16.932 8.466-50.796-3.024l13.757-53.366-1.965-22.526 2.72-10.583 6.048-.605s-3.628 13.607 3.024 15.723c6.652 2.117 13.141-15.383 13.141-15.383l6.466 1.386z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M126.421 182.941l5.837 2.388 27.858-36.613 8.755 42.98 5.837-1.061c3.744-37.055 6.797-74.85 3.05-92.726l-21.622-.928-9.816 31.306-4.776 21.225-15.123 33.43zM480.678 97.612s-7.966 11.075-7.577 15.543c.388 4.469 5.44 77.327 5.44 77.327l11.851.583-3.497-52.458 2.914-14.183 7.19 66.058 14.57.388-13.017-85.68-2.525-7.578h-15.35z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M525.7 276.018c-2.115-2.538-5.75-3.91-9.242-4.652.105-.318-10.618-2.532-10.798-2.076l-4.041-3.219-12.415 6.447-6.977-4.75-3.241 1.15c.132-.57-10.061 1.194-10.061 1.194-1.948.07-4.435.192-7.218.406-9.75.75-10.5 25.998-10.5 25.998a39.852 39.852 0 0 1 14.114-2.955l2.635 30.202c13.553-1.162 27.767.19 42.496 3.5l6.908-23.74 16.09-6.257s-2.75-15.249-7.75-21.248z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M180.441 261.638c-1.743-2.09-4.738-3.222-7.615-3.833.086-.261-8.75-2.086-8.897-1.71l-3.33-2.652-10.23 5.312-5.749-3.914-2.67.948c.109-.47-8.29.984-8.29.984-1.604.057-3.653.158-5.947.334-8.033.618-8.651 21.42-8.651 21.42a32.836 32.836 0 0 1 11.629-2.434l2.171 60.914c11.167-.958 22.879.157 35.015 2.884l5.692-55.59 13.257-5.155s-2.265-12.564-6.385-17.508z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M613 612.618l-80.422 16.461-1.833-.187-70.674-7.133v-89.563l86.516-14.627 62.759 7.32.023.396v.187L613 612.618z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M613 612.618l-80.422 16.46-1.833-.186v-91.816l78.624-11.791L613 612.618z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M609.369 525.472l-.023.023-78.601 11.581-70.674-4.88 86.516-14.627 62.759 7.32.023.396v.187z",
    fillOpacity: ".05"
  }), __jsx("path", {
    d: "M469.8 563.455l48.896 3.188-1.496 22.951-48.896-3.188 1.496-22.95z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M480.788 571.687l25.945 1.692-.52 7.983-25.946-1.692.52-7.983zM722 612.618l-80.422 16.461-1.833-.187-70.674-7.133v-89.563l86.516-14.627 62.759 7.32.023.396v.187L722 612.618z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M722 612.618l-80.422 16.46-1.833-.186v-91.816l78.624-11.791L722 612.618z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M718.369 525.472l-.023.023-78.601 11.581-70.674-4.88 86.516-14.627 62.759 7.32.023.396v.187z",
    fillOpacity: ".05"
  }), __jsx("path", {
    d: "M578.8 563.455l48.896 3.188-1.496 22.951-48.896-3.188 1.496-22.95z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M589.788 571.687l25.945 1.692-.52 7.983-25.946-1.692.52-7.983z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M780.195 165.621s14.19 36.657-11.825 36.657c-26.014 0 40.204 36.656 66.218 15.372 26.014-21.285 10.642-22.467 10.642-22.467s-34.291 3.547-33.109-27.197l-31.926-2.365z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M756.86 134.835c0-23.096 18.723-41.82 41.82-41.82 23.096 0 41.819 18.724 41.819 41.82s-18.723 41.82-41.82 41.82c-23.096 0-41.82-18.724-41.82-41.82zM773.1 318.159l-44.934 115.88s-22.467 35.475-14.19 70.949C722.255 540.462 745 605.025 745 605.025s17.182 4.372 16-11c-1.183-15.372.737-89.898-17-110l71.669-81.911 2.365 93.415s-4.73 42.568-3.547 61.488c1.182 18.919 3.547 50.846 3.547 50.846l14.19-2.365s19.14-87.094 16.776-115.473c0 0 43.934-137.892-1-171l-74.9-.866z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M749.94 604.832s-5.786-1.473-6.452 3.833c-.667 5.307-12.836 28.904-.131 30.085 12.705 1.182 17.1-10.705 19.228-19.061 2.128-8.357 2.934-8.836 4.71-10.437 1.778-1.602 6.007-10.373.7-11.04-5.306-.667-8.026-5.885-8.026-5.885s-1.673 14.633-10.03 12.505zM827.297 600.729s-10.73-1.533-9.964 2.299c.767 3.832-1.532 19.926 0 21.46 1.533 1.532 4.599 4.598 4.599 6.897 0 2.3.766 9.963 13.795 7.664 13.03-2.3 9.963-13.795 9.197-15.328-.766-1.533-9.963-9.197-9.197-13.795.766-4.599-3.832-12.263-8.43-9.197z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M770.23 152.276c0-15.997 12.968-28.966 28.966-28.966 15.997 0 28.966 12.969 28.966 28.966 0 15.998-12.969 28.966-28.967 28.966-15.997 0-28.966-12.968-28.966-28.966z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M826.902 192.226s10.103 19.99-20.35 20.556c-9.361.174-20.495-6.648-25.09-14.806-2.708-4.806-3.393 1.832-7.77 1.345-8.292-.921-17.15 2.519-25.076 6.734a5.001 5.001 0 0 0-2.443 5.865C752.184 231.864 769.35 327.8 772 333.026c6.767 13.339 80-9 80-9 1.003-36.294-12.17-87.071 11-124a44.136 44.136 0 0 0-36.098-7.799z",
    fill: "#575A89"
  }), __jsx("path", {
    d: "M826.283 130.002l-21.223-11.116-29.307 4.547-6.063 26.781 15.094-.581 4.216-9.839v9.677l6.965-.268 4.042-15.664 2.527 16.675 24.758-.506-1.01-19.706zM784.006 87.146c0-9.32 7.555-16.875 16.874-16.875 9.32 0 16.875 7.555 16.875 16.875s-7.555 16.875-16.875 16.875-16.874-7.555-16.874-16.875z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M779.604 82.01c0-8.327 6.074-15.41 14.305-16.68a16.875 16.875 0 1 0 0 33.361 16.879 16.879 0 0 1-14.305-16.68z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M877 483.618l-80.422 16.461-1.833-.187-70.674-7.133v-89.563l86.516-14.627 62.759 7.32.023.396v.187L877 483.618z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M877 483.618l-80.422 16.46-1.833-.186v-91.816l78.624-11.791L877 483.618z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M873.369 396.472l-.023.023-78.601 11.581-70.674-4.88 86.516-14.627 62.759 7.32.023.396v.187z",
    fillOpacity: ".05"
  }), __jsx("path", {
    d: "M733.8 434.455l48.896 3.188-1.496 22.951-48.896-3.188 1.496-22.95z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M744.788 442.687l25.945 1.692-.52 7.983-25.946-1.692.52-7.983z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M751.72 380.194s-29.56 23.65-16.554 31.927c13.007 8.277 28.38-31.927 28.38-31.927H751.72z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M753 205.024c-1.531-1.725-20.867 8.136-18 21l1.349 89.135s-7.095 73.312 10.642 73.312 15.644 2.466 18.009-3.447c2.365-5.912 3-56 3-56l-15-124z",
    fill: "#575A89"
  }), __jsx("path", {
    d: "M844.455 372.194s15.372 40.204 28.379 31.927c13.007-8.278-16.555-31.927-16.555-31.927h-11.824z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M848 322.024s-7.365 49.088-5 55c2.365 5.913.272 3.447 18.009 3.447 17.737 0 10.642-73.312 10.642-73.312L873 218.025c2.867-12.865-16.469-22.726-18-21l-17 58 10 67z",
    fill: "#575A89"
  }));
};

Ecom.defaultProps = {
  width: "877",
  height: "640",
  viewBox: "0 0 877 640",
  xmlns: "http://www.w3.org/2000/svg"
};

var Mapp = function Mapp(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M382.878 139.162h-3.217V51.016C379.66 22.841 356.82 0 328.644 0H141.896C113.72 0 90.879 22.84 90.879 51.016v483.575c0 28.175 22.84 51.016 51.016 51.016h186.749c28.176 0 51.017-22.84 51.017-51.016V201.906h3.217v-62.744z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M305.942 14.48h24.377c21.04 0 38.098 17.057 38.098 38.098v482.865c0 21.041-17.057 38.098-38.098 38.098H142.67c-21.04 0-38.098-17.057-38.098-38.098V52.578c0-21.042 17.057-38.099 38.098-38.099h22.768a18.1 18.1 0 0 0 16.759 24.937h106.986a18.1 18.1 0 0 0 16.759-24.937zM321.7 117.596c5.444-.016 9.853-4.425 9.869-9.868v-2.467c-.016-5.444-4.425-9.853-9.87-9.869H150.65c-5.443.016-9.852 4.425-9.868 9.869v2.467c.016 5.443 4.425 9.852 9.869 9.868H321.7zm9.869 33.716a9.898 9.898 0 0 1-9.87 9.87H150.65c-5.443-.017-9.852-4.426-9.868-9.87v-2.467c.016-5.443 4.425-9.852 9.869-9.868H321.7c5.444.016 9.853 4.425 9.869 9.868v2.467zm-9.87 53.454a9.898 9.898 0 0 0 9.87-9.869v-2.467c-.016-5.443-4.425-9.852-9.87-9.868H150.65c-5.443.016-9.852 4.425-9.868 9.868v2.467c.016 5.444 4.425 9.853 9.869 9.87H321.7zm4.524 33.716c-.016 5.444-4.425 9.853-9.868 9.868h-47.697c-5.443-.015-9.852-4.424-9.868-9.868v-2.467c.016-5.443 4.425-9.852 9.868-9.868h47.697c5.443.016 9.852 4.425 9.868 9.868v2.467z",
    fill: "#EEE",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M148.594 194.076a5.756 5.756 0 1 1 11.513 0 5.756 5.756 0 0 1-11.513 0zM167.508 194.076a5.756 5.756 0 1 1 11.513 0 5.756 5.756 0 0 1-11.513 0zM186.422 194.076a5.756 5.756 0 1 1 11.513 0 5.756 5.756 0 0 1-11.513 0zM205.336 194.076a5.756 5.756 0 1 1 11.513 0 5.756 5.756 0 0 1-11.513 0zM267.013 237.661a5.756 5.756 0 1 1 11.513 0 5.756 5.756 0 0 1-11.513 0zM285.928 237.661a5.756 5.756 0 1 1 11.512 0 5.756 5.756 0 0 1-11.512 0zM304.842 237.661a5.756 5.756 0 1 1 11.513 0 5.756 5.756 0 0 1-11.513 0z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M332.892 312.247H137.813c-9.543 0-17.28 7.737-17.28 17.28v95.046c0 9.544 7.737 17.281 17.28 17.281h195.079c9.543 0 17.28-7.737 17.28-17.28v-95.046c0-9.544-7.737-17.28-17.28-17.28zm-182.821 14.715c-7.564-4.551-16.699-2.996-17.084-2.927l-.982.174.306.95c.12.371 3.025 9.17 10.589 13.72a25.206 25.206 0 0 0 12.851 3.24 26.05 26.05 0 0 0 4.233-.312l.982-.174-.306-.948c-.12-.372-3.026-9.172-10.59-13.723zm173.136 94.016c5.758-.017 10.421-4.68 10.438-10.438v-15.657c-.017-5.758-4.68-10.422-10.438-10.439h-26.095c-5.758.017-10.422 4.68-10.439 10.439v15.657c.017 5.757 4.681 10.421 10.439 10.438h26.095zm-147.874-8.699H140.54c-5.28-.006-9.557-4.287-9.557-9.568a9.568 9.568 0 0 1 9.557-9.568h34.794a9.568 9.568 0 0 1 0 19.136z",
    fill: "#6C63FF",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M305.525 407.313h-10.492a2.825 2.825 0 0 0 0 5.65h10.492a2.825 2.825 0 1 0 0-5.65zM324.895 407.313h-10.492a2.825 2.825 0 1 0 0 5.65h10.492a2.825 2.825 0 0 0 0-5.65zM305.524 399.34h-10.492a2.825 2.825 0 1 0 0 5.649h10.492a2.825 2.825 0 1 0 0-5.65zM324.894 399.34h-10.492a2.825 2.825 0 1 0 0 5.649h10.492a2.825 2.825 0 1 0 0-5.65zM305.524 391.527h-10.492a2.825 2.825 0 1 0 0 5.65h10.492a2.825 2.825 0 1 0 0-5.65zM324.894 391.527h-10.492a2.825 2.825 0 1 0 0 5.65h10.492a2.825 2.825 0 1 0 0-5.65z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M442.56 348.05h25.446v25.446H442.56V348.05z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M454.375 363.5h-41.803v41.802h41.803V363.5zm-39.985 1.817h38.167v38.168H414.39v-38.168z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M0 138.13h25.445v25.445H0V138.13z",
    fill: "#E6E6E6"
  }), __jsx("path", {
    d: "M13.631 148.126h41.803v-41.802H13.63v41.802zm39.985-1.817H15.45V108.14h38.167v38.168z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M593.483 601.062h-11.141l-5.3-42.973h16.443l-.002 42.973z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M574.384 597.878h21.486v13.529h-35.014c0-7.472 6.056-13.529 13.528-13.529z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M648.917 601.062h-11.142l-5.3-42.973h16.443l-.001 42.973z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M629.817 597.878h21.487v13.529h-35.015c0-7.472 6.057-13.529 13.528-13.529z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M537.594 447.38a9.761 9.761 0 0 1 4.099-14.397l37.873-104.385 18.636 10.17-43.243 99.754a9.815 9.815 0 0 1-17.365 8.858zM643.226 466.994a9.762 9.762 0 0 1-2.63-14.736l-11.732-110.422 21.208.97 4.876 108.613a9.815 9.815 0 0 1-11.722 15.575zM587.073 286.943c0-12.327 9.993-22.32 22.32-22.32 12.326 0 22.32 9.993 22.32 22.32s-9.993 22.32-22.32 22.32-22.32-9.993-22.32-22.32z",
    fill: "#FFB8B8"
  }), __jsx("path", {
    d: "M643.083 441.881h-67.29l.081-.523c.121-.783 11.993-78.551 3.237-103.994a10.735 10.735 0 0 1 5.516-13.252c12.515-5.894 36.538-13.151 56.815 4.46a25.658 25.658 0 0 1 8.596 21.262l-6.955 92.047z",
    fill: "#BBB"
  }), __jsx("path", {
    d: "M588.717 374.3l-30.294-6.147 14.2-33.65c1.769-6.787 8.697-10.861 15.488-9.108 6.791 1.753 10.881 8.672 9.144 15.467l-8.538 33.437zM627.517 385.711l-1.821-41.75c-1.381-7.847 3.112-15.266 10.021-16.479 6.911-1.208 13.66 4.235 15.047 12.14l6.846 39.011-30.093 7.078z",
    fill: "#BBB"
  }), __jsx("path", {
    d: "M640.845 436.883c10.827 41.236 12.008 93.665 9.087 150.852l-14.54-1.817-26.354-109.05-14.54 110.867-16.357-.908c-4.887-60.005-9.645-111.517-1.817-145.4l64.52-4.544zM624.1 304.193c-4.165 4.435-11.898 2.054-12.44-4.005-.043-.47-.04-.944.01-1.414.28-2.684 1.83-5.121 1.459-7.955a4.173 4.173 0 0 0-.764-1.953c-3.318-4.443-11.107 1.988-14.238-2.035-1.92-2.466.337-6.35-1.137-9.106-1.945-3.638-7.705-1.843-11.317-3.836-4.02-2.217-3.78-8.383-1.133-12.134 3.226-4.574 8.883-7.015 14.47-7.367 5.586-.352 11.135 1.158 16.35 3.191 5.926 2.31 11.803 5.501 15.45 10.712 4.435 6.337 4.861 14.856 2.643 22.266-1.349 4.507-5.954 10.014-9.354 13.636z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M777.091 612.497H430.858a.909.909 0 1 1 0-1.818H777.09a.909.909 0 1 1 0 1.818z",
    fill: "#3F3D56"
  }));
};

Mapp.defaultProps = {
  width: "778",
  height: "613",
  viewBox: "0 0 778 613",
  xmlns: "http://www.w3.org/2000/svg"
};

var Ecspay = function Ecspay(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M0 0h902v702.007H0V0z",
    fill: "none"
  }), __jsx("path", {
    d: "M801.272 599.507c-12.983 24.077-6.626 53.066-6.56 53.356l.298 1.32 1.267-.475c.279-.105 27.993-10.723 40.975-34.8 12.983-24.077 6.626-53.066 6.56-53.356l-.299-1.32-1.266.475c-.279.105-27.992 10.723-40.975 34.8zm2.079 1.12c10.965-20.334 32.874-30.785 38.425-33.173 1.056 5.95 4.363 29.998-6.602 50.334-10.977 20.356-32.877 30.791-38.426 33.173-1.055-5.947-4.364-29.997 6.603-50.334z",
    fill: "#3F3D56",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M827.331 610.463C804 624.5 795.014 652.381 795.014 652.381s28.842 5.123 52.173-8.914c23.331-14.037 32.317-41.918 32.317-41.918s-28.842-5.123-52.173 8.914z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M169 652.293h733v2H169v-2z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M598.01 316.025l10 155s24 61 23 119c0 0-9 23-2 27s11 7 7 10-7 10-4 12 4 5 3 5h-30s6-15-3-19-4-14-4-14l-67-196-53 180s9 6 2 9-10-3-7 3-1 9-1 10-30-3-30-3 15-13 8-16-10-6-8-8 10-21 10-21 4-72 5-75 0-17 0-24-1-35 2-42 6-93 22-103 117-9 117-9z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M471.01 612.025s20 41 6 46-32 1-36 7-48 13-49-2 48-43 48-43l6.384-10.278 24.617 2.278zM633.01 642.025s20 41 6 46-32 1-36 7-48 13-49-2 48-43 48-43l6.384-10.278 24.617 2.278z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M507.51 94.525c0-18.225 14.775-33 33-33 18.226 0 33 14.775 33 33 0 18.226-14.774 33-33 33-18.225 0-33-14.774-33-33z",
    fill: "#A0616A"
  }), __jsx("path", {
    d: "M563.011 112.025l-4 29-30 23-8-11v-38l42-3z",
    fill: "#A0616A"
  }), __jsx("path", {
    d: "M516.01 149.025s31 3 47-8l32 189s-113 9-118 3v-59l20-96 19-29z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M560.257 131.989l10.754 9.036s44 7 41 19l-12 142 4 48s-34-9-60 0-5.344-193.403-5.344-193.403 23.836-21.67 21.59-24.633zM521.01 142.935s-32 23.09-36 38.09c-4 15-17 173-17 173s6-3 9 2 49-205.18 44-213.09z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M507.526 93.087s-3.572-5.358-2.198-11.13a33.732 33.732 0 0 0 .962-10.03c-.184-3.372 2.885-9.343 5.77-14.564 2.886-5.221 1.512-7.42 10.58-9.069 9.07-1.648 5.36-13.465 29.267-.687a7.011 7.011 0 0 0 7.283 2.748c4.946-.961 6.732 5.909 6.732 5.909s3.298-1.924 4.535.824c1.236 2.748 10.054-1.65 10.054 16.9 0 18.55-10.034 35.119-10.034 35.119s.735-31.202-15.616-34.363c-16.35-3.16-33.938-12.366-38.197-.55a90.08 90.08 0 0 1-9.138 18.893z",
    fill: "#2F2E41"
  }), __jsx("path", {
    d: "M567.61 96.206c0-2.375 1.444-4.3 3.225-4.3 1.781 0 3.225 1.925 3.225 4.3s-1.444 4.3-3.225 4.3c-1.781 0-3.225-1.925-3.225-4.3z",
    fill: "#A0616A"
  }), __jsx("path", {
    d: "M435.3 405.45c-7.912-4.759-17.453-4.395-21.08-4.032 1.381 3.373 5.525 11.974 13.438 16.735 7.932 4.77 17.46 4.396 21.082 4.035-1.38-3.37-5.525-11.976-13.44-16.738zM472.484 499.873h-49.456c-6.146 0-11.128 4.982-11.128 11.128s4.982 11.128 11.128 11.128h49.456c6.145 0 11.127-4.982 11.127-11.128s-4.982-11.127-11.127-11.127z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M696.438 382.416H419.153c-13.565 0-24.562 10.996-24.562 24.562v135.099c0 13.565 10.997 24.562 24.562 24.562h277.285c13.565 0 24.562-10.998 24.562-24.563V406.978c0-13.566-10.997-24.563-24.562-24.563zm-259.862 20.916c-10.752-6.47-23.736-4.26-24.283-4.161l-1.395.247.434 1.349c.17.529 4.3 13.036 15.051 19.503 6.309 3.797 13.384 4.604 18.267 4.604a37.046 37.046 0 0 0 6.017-.442l1.395-.247-.435-1.349c-.17-.529-4.3-13.036-15.051-19.504zm246.096 133.633c8.184-.024 14.813-6.653 14.837-14.837v-22.255c-.024-8.183-6.653-14.812-14.837-14.836H645.58c-8.184.024-14.813 6.653-14.837 14.837v22.255c.024 8.184 6.653 14.813 14.837 14.837h37.092zm-210.188-12.364h-49.456c-7.506-.008-13.586-6.095-13.586-13.6s6.08-13.593 13.586-13.6h49.456c7.506.007 13.586 6.094 13.586 13.6 0 7.505-6.08 13.592-13.586 13.6z",
    fill: "#D0CDE1",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M641.252 517.801h16.073a4.327 4.327 0 0 1 0 8.655h-16.073a4.327 4.327 0 0 1 0-8.655zm0 6.182h16.073a1.855 1.855 0 1 0 0-3.709h-16.073a1.855 1.855 0 1 0 0 3.71zM670.926 517.801h16.073a4.327 4.327 0 0 1 0 8.655h-16.073a4.327 4.327 0 1 1 0-8.655zm0 6.182h16.073a1.855 1.855 0 0 0 0-3.709h-16.073a1.855 1.855 0 1 0 0 3.71zM641.252 506.674h16.073a4.327 4.327 0 1 1 0 8.654h-16.073a4.327 4.327 0 0 1 0-8.654zm0 6.182h16.073a1.855 1.855 0 1 0 0-3.71h-16.073a1.855 1.855 0 1 0 0 3.71zM670.926 506.674h16.073a4.327 4.327 0 0 1 0 8.654h-16.073a4.327 4.327 0 1 1 0-8.654zm0 6.182h16.073a1.855 1.855 0 0 0 0-3.71h-16.073a1.855 1.855 0 0 0 0 3.71zM641.252 495.546h16.073a4.327 4.327 0 0 1 0 8.655h-16.073a4.327 4.327 0 0 1 0-8.655zm0 6.182h16.073a1.855 1.855 0 0 0 0-3.71h-16.073a1.855 1.855 0 0 0 0 3.71zM670.926 495.546h16.073a4.327 4.327 0 0 1 0 8.655h-16.073a4.327 4.327 0 1 1 0-8.655zm0 6.182h16.073a1.855 1.855 0 0 0 0-3.71h-16.073a1.855 1.855 0 0 0 0 3.71z",
    fill: "#D0CDE1",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M609.01 352.025l-7.168 23.392s-1.831 43.608-25.831 37.608 7-57 7-57l7-11 19 7zM473.01 352.025l-7.168 23.392s-1.831 43.608-25.831 37.608 7-57 7-57l7-11 19 7z",
    fill: "#A0616A"
  }), __jsx("path", {
    d: "M604.01 153.025s16-4 21 23 11 104 11 104l-24 81s-24-13-29-11l18.887-70.32-15.887-71.68s14-55 18-55z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M580.747 209.393l21 70-21 71 12-71-12-70z",
    fillOpacity: ".15"
  }), __jsx("path", {
    d: "M485.01 208.025l-36 142S468 356.292 475 361.292l10.01-153.267z",
    fill: "#D0CDE1"
  }), __jsx("path", {
    d: "M7.362 464.884c0-55.228 44.772-100 100-100s100 44.772 100 100-44.772 100-100 100-100-44.772-100-100z",
    fill: "#3F3D56"
  }), __jsx("path", {
    d: "M21.362 464.884c0-47.496 38.504-86 86-86s86 38.504 86 86-38.504 86-86 86-86-38.504-86-86z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M103.241 515.632v-12.517c-6.327-.123-12.873-2.355-16.69-5.453l2.617-8.303a26.682 26.682 0 0 0 15.71 5.328c7.745 0 12.982-5.08 12.982-12.145 0-6.816-4.255-11.03-12.328-14.748-11.127-4.957-18-10.658-18-21.44 0-10.286 6.436-18.094 16.473-19.953v-12.517h6.764v12.022a26.543 26.543 0 0 1 14.182 4.337l-2.728 8.18a24.105 24.105 0 0 0-13.745-4.214c-8.4 0-11.564 5.7-11.564 10.658 0 6.444 4.036 9.667 13.528 14.129 11.236 5.205 16.91 11.649 16.91 22.679 0 9.79-6.001 18.962-17.238 21.067v12.89h-6.873z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M213 668.293a722.023 722.023 0 0 1-213 0v-24a802.325 802.325 0 0 0 213 0v24zM213 631.293a722.023 722.023 0 0 1-213 0v-24a802.325 802.325 0 0 0 213 0v24zM213 594.293a722.023 722.023 0 0 1-213 0v-24a802.325 802.325 0 0 0 213 0v24z",
    fill: "#3F3D56"
  }));
};

Ecspay.defaultProps = {
  width: "902",
  height: "703",
  viewBox: "0 0 902 703",
  xmlns: "http://www.w3.org/2000/svg"
};

var Ecdev = function Ecdev(props) {
  return __jsx("svg", props, __jsx("defs", null, __jsx("linearGradient", {
    x1: ".544",
    y1: "1.043",
    x2: ".544",
    y2: ".043",
    id: "a"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "gray",
    stopOpacity: ".251"
  }), __jsx("stop", {
    offset: ".54",
    stopColor: "gray",
    stopOpacity: ".122"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "gray",
    stopOpacity: ".102"
  })), __jsx("linearGradient", {
    x1: "475.65",
    y1: "861.71",
    x2: "475.65",
    y2: "223.28",
    id: "b"
  })), __jsx("path", {
    d: "M1 1.015h1116.21v857.08H1V1.015z",
    fill: "none"
  }), __jsx("path", {
    d: "M1090.16 583.755c-1 .73-1.92 1.44-2.9 2.13a97.886 97.886 0 0 1-11.33 6.91c-20.58 10.85-45.95 16.15-70.66 19.75-55.42 8.08-112 9.65-168.34 11.19-152.23 4.18-304.83 8.35-456.69-1.28-183.483-32.447-121.32-10.16-175.69-29.66 0 0-15.433-5.86-22.92-9.22-15.15-6.81-29.7-15.1-41.8-25-11.37-9.28-20.59-19.94-26.1-32.06-11.49-25.24-5.41-53.59 7.71-78.33a243.424 243.424 0 0 1 18.39-28.77c10.13-13.93 21.3-27.46 31.49-41.38 36.26-49.48 59.92-112.08 26.45-162.83-9.62-14.58-23.52-27.38-31.36-42.6-5.637-64.757-9.23-41.09-6.05-62.09 0 0 .85-5.307 1.31-7.92 5.43-31.14 15.65-64.69 47.16-84.13 32.73-20.2 79.21-19.18 119.83-12 63.17 11.28 121.44 34.76 180.33 55.96 58.89 21.2 120.5 40.57 185.22 42.65 57.15 1.84 123.81-11.93 161.74-47.72 36.84-34.76 106.09-37.41 156-16.41 34.26 14.41 59.82 40.37 70.6 69.57a90.808 90.808 0 0 1 4.69 18.12 83.529 83.529 0 0 1 .84 17.09 92.28 92.28 0 0 1-.84 8.37c-8.34 57.62-68.37 103.07-104.86 154.54-17.83 25.14-30.42 55.34-18.16 82.45 18.7 41.31 83.73 56 123 86.74a92.41 92.41 0 0 1 19.3 19.8c19.048 27.36 12.018 64.31-16.36 86.13z",
    fill: "#6C63FF",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M258.99 325.875s-46-81.52-115.32-105c-29.09-9.86-54.48-28.4-71.84-53.74a238.003 238.003 0 0 1-21.2-38.12",
    fill: "none",
    stroke: "#535461",
    strokeWidth: "2"
  }), __jsx("path", {
    d: "M7.04 113.925c7.9 7.63 44.68 15.63 44.68 15.63s-9-36.52-16.92-44.19c-7.923-7.502-20.405-7.24-28.005.59-7.6 7.83-7.49 20.315.245 28.01v-.04zM27.85 180.015c10.79 2.14 46-11.19 46-11.19s-27.45-25.76-38.25-27.9c-10.677-1.88-20.897 5.118-23.006 15.752-2.108 10.634 4.67 21.002 15.256 23.338zM103.6 251.555c10.4-3.6 34-32.87 34-32.87s-36.68-8.39-47.07-4.79a19.93 19.93 0 1 0 13 37.66h.07zM173.1 292.745c10.86-1.8 39.1-26.65 39.1-26.65s-34.73-14.47-45.59-12.68c-10.86 1.792-18.212 12.05-16.42 22.91 1.792 10.86 12.05 18.212 22.91 16.42zM104.49 140.285c0 11-19.9 42.93-19.9 42.93s-19.94-31.91-19.95-42.91a19.93 19.93 0 1 1 39.85 0v-.02zM185.17 189.555c-3.29 10.5-31.84 35-31.84 35s-9.48-36.45-6.23-47c3.629-10.036 14.52-15.432 24.703-12.24 10.183 3.191 16.045 13.838 13.297 24.15l.07.09zM257.01 248.105c-1.46 10.91-25.46 39.88-25.46 39.88s-15.5-34.28-14-45.19c1.616-10.767 11.574-18.245 22.365-16.794 10.79 1.45 18.42 11.292 17.135 22.104h-.04z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M7.04 113.925c7.9 7.63 44.68 15.63 44.68 15.63s-9-36.52-16.92-44.19c-7.923-7.502-20.405-7.24-28.005.59-7.6 7.83-7.49 20.315.245 28.01v-.04zM27.85 180.015c10.79 2.14 46-11.19 46-11.19s-27.45-25.76-38.25-27.9c-10.677-1.88-20.897 5.118-23.006 15.752-2.108 10.634 4.67 21.002 15.256 23.338zM103.6 251.555c10.4-3.6 34-32.87 34-32.87s-36.68-8.39-47.07-4.79a19.93 19.93 0 1 0 13 37.66h.07zM173.1 292.745c10.86-1.8 39.1-26.65 39.1-26.65s-34.73-14.47-45.59-12.68c-10.86 1.792-18.212 12.05-16.42 22.91 1.792 10.86 12.05 18.212 22.91 16.42zM104.49 140.285c0 11-19.9 42.93-19.9 42.93s-19.94-31.91-19.95-42.91a19.93 19.93 0 1 1 39.85 0v-.02zM185.17 189.555c-3.29 10.5-31.84 35-31.84 35s-9.48-36.45-6.23-47c3.629-10.036 14.52-15.432 24.703-12.24 10.183 3.191 16.045 13.838 13.297 24.15l.07.09zM257.01 248.105c-1.46 10.91-25.46 39.88-25.46 39.88s-15.5-34.28-14-45.19c1.616-10.767 11.574-18.245 22.365-16.794 10.79 1.45 18.42 11.292 17.135 22.104h-.04z",
    fillOpacity: ".25"
  }), __jsx("path", {
    d: "M256.34 324.255s-9-93.18-62.88-142.74c-22.59-20.8-38.29-48-43.9-78.24a238.148 238.148 0 0 1-3.92-43.45",
    fill: "none",
    stroke: "#535461",
    strokeWidth: "2"
  }), __jsx("path", {
    d: "M111.89 28.395c4.12 10.21 34.53 32.36 34.53 32.36s6.55-37.05 2.44-47.26c-4.116-10.215-15.733-15.16-25.949-11.046-10.216 4.114-15.163 15.73-11.05 25.947l.029-.001zM104.1 97.245c9 6.33 46.57 8.4 46.57 8.4s-14.57-34.66-23.57-40.99c-9-6.351-21.444-4.204-27.795 4.795-6.351 9-4.205 21.444 4.795 27.795zM144.41 193.325c11 .93 44.44-16.26 44.44-16.26s-30.13-22.53-41.1-23.45a19.93 19.93 0 1 0-3.34 39.71zM191.25 259.165c10.66 2.76 46.55-8.52 46.55-8.52s-25.89-27.3-36.54-30.06c-10.577-2.562-21.254 3.834-23.985 14.37-2.73 10.534 3.495 21.312 13.985 24.21h-.01zM190.3 91.985c-4.45 10.06-35.59 31.17-35.59 31.17s-5.3-37.24-.85-47.31a19.93 19.93 0 1 1 36.44 16.14zM244.1 169.665c-7.26 8.27-43.29 19.1-43.29 19.1s6.08-37.12 13.35-45.39c7.26-8.268 19.847-9.085 28.115-1.825 8.268 7.26 9.085 19.847 1.825 28.115zM286.1 252.355c-5.76 9.38-39.44 26.14-39.44 26.14s-.28-37.62 5.48-47c5.762-9.387 18.041-12.326 27.429-6.566 9.387 5.76 12.329 18.04 6.57 27.428l-.039-.002z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M297.63 838.195c0-8.02 49.934-14.52 111.53-14.52 61.596 0 111.53 6.5 111.53 14.52s-49.934 14.52-111.53 14.52c-61.596 0-111.53-6.5-111.53-14.52z",
    fill: "#6C63FF",
    fillOpacity: ".1"
  }), __jsx("g", null, __jsx("path", {
    d: "M150 837.075c0-3.203 15.169-5.8 33.88-5.8 18.711 0 33.88 2.597 33.88 5.8s-15.169 5.8-33.88 5.8c-18.711 0-33.88-2.597-33.88-5.8z",
    fill: "#6C63FF",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M191.24 772.495s5.49 7.19-2.54 18c-8.03 10.81-14.65 20-12 26.77 0 0 12.11-20.15 22-20.43 9.89-.28 3.4-12.22-7.46-24.34z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M191.24 772.495a8.83 8.83 0 0 1 1.12 2.26c9.62 11.3 14.75 21.85 5.5 22.11-8.61.25-18.95 15.65-21.42 19.54.081.301.178.598.29.89.112.292 12.11-20.15 22-20.43 9.89-.28 3.37-12.25-7.49-24.37z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M201.45 781.655c0 2.53-.28 4.58-.63 4.58s-.64-2-.64-4.58.36-1.34.71-1.34.56-1.19.56 1.34z",
    fill: "#FFD037"
  }), __jsx("path", {
    d: "M204.96 784.675c-2.22 1.21-4.16 1.94-4.33 1.63-.17-.31 1.5-1.54 3.72-2.75s1.34-.33 1.51 0c.17.33 1.32-.09-.9 1.12z",
    fill: "#FFD037"
  }), __jsx("path", {
    d: "M162.22 772.495s-5.49 7.19 2.54 18c8.03 10.81 14.65 20 12 26.77 0 0-12.11-20.15-22-20.43-9.89-.28-3.38-12.22 7.46-24.34z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M162.22 772.495a8.83 8.83 0 0 0-1.12 2.26c-9.62 11.3-14.75 21.85-5.5 22.11 8.62.25 18.95 15.65 21.42 19.54-.077.303-.174.6-.29.89-.116.29-12.11-20.15-22-20.43-9.89-.28-3.35-12.25 7.49-24.37z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M152.01 781.655c0 2.53.28 4.58.63 4.58s.64-2 .64-4.58-.36-1.34-.71-1.34-.56-1.19-.56 1.34z",
    fill: "#FFD037"
  }), __jsx("path", {
    d: "M148.51 784.675c2.22 1.21 4.15 1.94 4.32 1.63.17-.31-1.5-1.54-3.72-2.75s-1.34-.33-1.51 0c-.17.33-1.31-.09.91 1.12z",
    fill: "#FFD037"
  }), __jsx("path", {
    d: "M153.76 816.355s15.36-.48 20-3.77c4.64-3.29 23.62-7.24 24.77-1.95 1.15 5.29 23.08 26.29 5.74 26.43-17.34.14-40.29-2.7-44.91-5.51-4.62-2.81-5.6-15.2-5.6-15.2z",
    fill: "#A8A8A8"
  }), __jsx("path", {
    d: "M204.57 835.225c-17.34.14-40.29-2.7-44.91-5.51-3.52-2.15-4.92-9.84-5.39-13.38h-.51s1 12.38 5.59 15.2c4.59 2.82 27.57 5.65 44.91 5.51 5 0 6.74-1.82 6.64-4.46-.69 1.62-2.6 2.61-6.33 2.64z",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M666.7 815.765s-42.28-2.55-37.29 27.08c0 0-1 5.23 3.75 7.61 0 0 .08-2.19 4.34-1.45 1.516.255 3.057.329 4.59.22a9.5 9.5 0 0 0 5.62-2.32s11.88-4.9 16.5-24.33c0 0 3.42-4.24 3.29-5.33l-7.14 3s2.44 5.15.52 9.43c0 0-.23-9.24-1.6-9-.28 0-3.71 1.78-3.71 1.78s4.2 9 1 15.48c0 0 1.2-11-2.34-14.83l-5 2.93s4.9 9.26 1.58 16.82c0 0 .85-11.59-2.63-16.11l-4.55 3.55s4.6 9.13 1.79 15.4c0 0-.36-13.49-2.78-14.51 0 0-4 3.51-4.59 5 0 0 3.15 6.62 1.2 10.12 0 0-1.2-9-2.19-9 0 0-4 6-4.38 10 0 0 .18-6.07 3.42-10.61a11.941 11.941 0 0 0-6.07 3.15c-1.673 1.62.62-4.21 7-4.58 0 0 3.28-4.52 4.16-4.79 0 0-6.4-.54-10.28 1.18 0 0 3.41-4 11.45-2.17l4.49-3.66s-8.42-1.16-12 .12c0 0 4.12-3.52 13.21-1l4.9-2.92s-7.19-1.55-11.47-1c0 0 4.52-2.44 12.9.2l3.5-1.57s-5.27-1-6.81-1.19c-1.54-.19-1.62-.59-1.62-.59a18.26 18.26 0 0 1 9.89 1.1c3.131 1.275 7.48-2.74 7.35-3.21z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M607.66 853.035c0-2.795 13.396-5.06 29.92-5.06s29.92 2.265 29.92 5.06c0 2.795-13.396 5.06-29.92 5.06s-29.92-2.266-29.92-5.06z",
    fill: "#6C63FF",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M592.63 817.345s-23.84-1.44-21 15.27a4.08 4.08 0 0 0 2.12 4.29c1.56.822 0-1.24 2.45-.82.853.139 1.718.182 2.58.13a5.47 5.47 0 0 0 3.17-1.31s6.7-2.77 9.31-13.72c0 0 1.92-2.39 1.85-3l-4 1.71s1.37 2.91.29 5.32c0 0-.13-5.21-.9-5.09-.16 0-2.09 1-2.09 1s2.36 5 .58 8.73c0 0 .67-6.23-1.32-8.37l-2.83 1.66s2.76 5.22.89 9.48c0 0 .48-6.54-1.49-9.08l-2.56 2s2.59 5.15 1 8.68c0 0-.21-7.61-1.57-8.18a15.638 15.638 0 0 0-2.59 2.79c-.747 1.032 1.78 3.74.68 5.71 0 0-.68-5.07-1.23-5.09 0 0-2.24 3.36-2.47 5.66a12.15 12.15 0 0 1 1.92-6 6.72 6.72 0 0 0-3.42 1.77c-.943.91.35-2.38 4-2.58 0 0 1.84-2.55 2.34-2.7 0 0-3.61-.31-5.8.66 0 0 1.93-2.24 6.46-1.22l2.53-2.07s-4.75-.65-6.76.07c0 0 2.32-2 7.45-.54l2.75-1.64a24.71 24.71 0 0 0-6.46-.56c-2.169.098 2.55-1.37 7.27.11l2-.88s-3-.59-3.83-.68c-.83-.09-.92-.33-.92-.33a10.32 10.32 0 0 1 5.58.62c1.767.718 4.09-1.53 4.02-1.8z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M559.34 838.365c0-1.574 7.553-2.85 16.87-2.85s16.87 1.276 16.87 2.85-7.553 2.85-16.87 2.85-16.87-1.276-16.87-2.85z",
    fill: "#6C63FF",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M638 781.935s-28.77-1.74-25.38 18.43a4.92 4.92 0 0 0 2.56 5.18c1.884.99 0-1.49 2.95-1 1.031.165 2.078.215 3.12.15a6.59 6.59 0 0 0 3.83-1.58s8.09-3.34 11.23-16.57c0 0 2.33-2.88 2.24-3.62l-4.86 2.07s1.66 3.51.36 6.42c0 0-.16-6.29-1.1-6.14-.18 0-2.52 1.21-2.52 1.21s2.86 6.11.7 10.54c0 0 .82-7.52-1.59-10.1l-3.42 2s3.34 6.3 1.08 11.45c0 0 .58-7.89-1.8-11l-3.1 2.41s3.14 6.21 1.23 10.48c0 0-.25-9.18-1.9-9.88 0 0-2.71 2.39-3.12 3.37 0 0 2.15 4.51.81 6.89 0 0-.81-6.11-1.48-6.14 0 0-2.7 4-3 6.83a14.71 14.71 0 0 1 2.32-7.22 8.13 8.13 0 0 0-4.13 2.14c-1.139 1.1.42-2.87 4.8-3.12 0 0 2.23-3.07 2.83-3.26 0 0-4.36-.36-7 .81 0 0 2.32-2.71 7.8-1.48l3.06-2.49s-5.74-.79-8.17.08c0 0 2.8-2.39 9-.65l3.33-2s-4.89-1-7.8-.67c0 0 3.07-1.66 8.78.13l2.38-1.06s-3.59-.71-4.64-.82c-1.05-.11-1.1-.4-1.1-.4a12.43 12.43 0 0 1 6.73.75c2.13.868 5.07-1.82 4.97-2.14z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M597.82 807.305c0-1.9 9.12-3.44 20.37-3.44 11.25 0 20.37 1.54 20.37 3.44s-9.12 3.44-20.37 3.44c-11.25 0-20.37-1.54-20.37-3.44z",
    fill: "#6C63FF",
    fillOpacity: ".1"
  })), __jsx("g", null, __jsx("path", {
    d: "M951.35 489.13V0H0v461.07c49.507 29.14 26.76 18.67 42 25.68 0 0 15.173 6.623 23 9.49h875l11.35-7.11z",
    fill: "url(#a)",
    transform: "translate(137.75 96.555)"
  }), __jsx("path", {
    d: "M1087.26 585.885v-475.33H139.83v448.1c49.28 28.333 26.65 18.15 41.8 25 0 0 15.12 6.407 22.92 9.22h871.38l11.33-6.99z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M139.84 97.945h947.42v25.14H139.84v-25.14z",
    fill: "#5A5773"
  })), __jsx("g", {
    fill: "#EEE"
  }, __jsx("path", {
    d: "M152.26 110.515a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0zM169.76 110.515a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0zM187.26 110.515a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"
  })), __jsx("g", null, __jsx("path", {
    d: "M381.95 178.335h156.5v98.34h-156.5v-98.34z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M165.26 178.335h156.5v98.34h-156.5v-98.34zM598.64 178.335h156.5v98.34h-156.5v-98.34zM165.26 318.925h156.5v98.34h-156.5v-98.34zM381.95 318.925h156.5v98.34h-156.5v-98.34zM598.64 318.925h156.5v98.34h-156.5v-98.34zM165.26 459.505h156.5v98.34h-156.5v-98.34zM381.95 459.505h156.5v98.34h-156.5v-98.34zM598.64 459.505h156.5v98.34h-156.5v-98.34z",
    fill: "#5A5773",
    fillOpacity: ".2"
  })), __jsx("g", null, __jsx("path", {
    d: "M141.5 162.122c-4.74 8.36 23.37 59.74 23.37 59.74s18.17 31.74 12.16 32.13c-.773.086-1.536.243-2.28.47a75.046 75.046 0 0 0-7.43 2.78l-.22.09c-3.37 1.43-7.13 3.15-10.68 4.82l-1.06.5c-2.8 1.34-5.42 2.62-7.56 3.68v.08c.12.52.24 1.06.36 1.61 4.54 21.2 9 61.03 2 75.78-9.51 20.05-13.41 43.86-13.41 43.86l-3.41 20.08s1.74 8.77 0 12.11-5.2 8.77-5.2 8.77 1.05 8.25 1.15 14.81c.06 3.75-.2 6.99-1.15 7.75-2.59 2.08 0 14.61 0 14.61l-7.35 35.89-1.29 6.31-12.24 54.24a15.655 15.655 0 0 1-3.73 2.21l-.16.07a16.99 16.99 0 0 1-2.23.73v1.27c-.14 5.1-.48 10.92-1.14 13.69-.59 2.52-.64 7.17-.52 11.46v.68c.39 1.05.77 2.15 1.15 3.31 0 0 .97 8.87 5.35 12 4.38 3.13-.48 16.91-2.43 17.85-.186.077-.381.13-.58.16-.28.04-.61.11-1 .11h-.1c-3.68.29-12.13.07-17.37-.11h-.18v6.59H81l-.42-5.44-.31-3.91a3.838 3.838 0 0 1-.19-1.18v-1.48l-1-12.89c-.52-2.92-1.3-5.27-2.45-6.11-4.06-2.98-7.28-13.23 0-26.16a9.568 9.568 0 0 1 3.67-1.47c.06-.21.11-.43.17-.66.72-3.04 1.38-7.02 1.87-10.44l.15-1.07v-.08c-.98-.58-1.71-1.06-2.1-1.34l-.34-.24 3.43-35.5s.36-4.32.86-10.74c1.24-16.26 3.33-45.97 2.52-52.7a.43.43 0 0 1 0-.11 2.674 2.674 0 0 0-.33-1.2 2.938 2.938 0 0 1-.57-1.13c-.88-3.19.733-7.463 1.44-9.29a27.451 27.451 0 0 0 1.52-5.66c.07-.477.11-.958.12-1.44v-.1a5.321 5.321 0 0 0-.77-3.25 4.527 4.527 0 0 1-.79-2.1c-.33-2.395.66-5.34 1.06-6.533.097-.291.16-.478.16-.527v-.92c-.12-4.57-.54-25.23 1.76-30.43.387-1.06.633-2.166.73-3.29v-.2c1.25-10.85-.75-38.53-.75-38.53l-1-10.53-.07-.74-.54-5.57-.06-.66-.06-.61s-.37 2.5-1 6.37c-1.92 11.79-5.99 36.24-7.6 41.24a52.455 52.455 0 0 1-4.44 10.45s2.25 12.53 0 15.87-.34 7.1-.34 7.1 2.16 10.44-4.33 14.62c-4.22 2.71-2.96 4.55-1.55 5.49.477.324.995.583 1.54.77l-.14.28c-.24.52-.81 1.72-1.53 3.25-1.54 3.3-3.75 8.09-4.82 10.67-1.73 4.14 0 10 0 10l-3.49 33.851s-2.77 12.97-2.62 22.51v1.3c.43 9.6-3.9 31.74-3.9 31.74s-3.99 0-9.42-.15l-1.77-.06-.06.22c-.09.32-.18.65-.26 1a1.42 1.42 0 0 0 0 .2 57.69 57.69 0 0 0-1.28 12.82v2a11.1 11.1 0 0 1 2 3.46c2.37 6.37 1.827 12.945.67 15.37a43.011 43.011 0 0 0-2.77 7.55 58.576 58.576 0 0 0-2.1 15.479 37.003 37.003 0 0 1-2.37 13.352c-.03.72-.1 1.42-.1 2.11-.04.88-.1 1.74-.1 2.56-.18 4.6-.3 8.04-.3 8.79v.15h-5.45v-.22l.16-5.94c-4.19-.17-15.74-.94-20.35-4.63a2.69 2.69 0 0 1-.31-.28 5.11 5.11 0 0 1-1.19-1.47c-2.644-5.083 2.666-19.878 5.18-26.881.566-1.58.991-2.763 1.15-3.349a73.72 73.72 0 0 1 3.22-9.34l.06-.79c.61-7.12 1.86-20.3 3.05-22 .82-1.2 1.39-5.95 1.75-10.36.04-.42.1-.83.1-1.24-3.72-.53-6.65-1.22-7.91-2.14-2.54-1.85-.48-11.73 2.26-21.27 2.81-9.8 6.34-19.24 6.34-19.24s3.73-61.66 3.07-65.81a.56.56 0 0 0-.05-.19c-.89-1.71 0-14.19 3-16.71 3-2.52 0-7.52 0-7.52s-.87-10.03 0-12.53-.13-10.86-.13-10.86-2.9-20.46-3.33-32.16c-.06-1.87-.18-4.1-.32-6.54-.03-.57-.1-1.14-.1-1.73-1.63 1-3.84 1.22-6.84.42a22.174 22.174 0 0 1-2.69-.92c-13.71-5.62-16.46-16.54-15.62-26.37a52.525 52.525 0 0 1 3.26-13.74c.14-.38.29-.74.43-1.09a26.513 26.513 0 0 1-5.37-2.66s.13-10.27.49-23.27c.38-13.18 1-29.12 2-39.77.17-1.66.34-3.26.52-4.66.46-3.58.99-6.05 1.58-6.88a1.06 1.06 0 0 1 .17-.19 4.823 4.823 0 0 0 1.46-2.57 16.78 16.78 0 0 0-.27-7 31.784 31.784 0 0 0-.82-3.12c-.22-.69-.37-1.1-.37-1.1l.52-6.76.37-4.75 2.08-27a1.84 1.84 0 0 1 .06-.77 59.527 59.527 0 0 0 1.84-7.83 186.255 186.255 0 0 0 2.92-31.852 29.761 29.761 0 0 1 1.31-8.92c3.45-11.13 12.91-16.95 18.15-20.32a26.884 26.884 0 0 1 6.21-2.52 30.227 30.227 0 0 0 1.77-9.18c-.01-.61-.04-1.21-.1-1.82-.65-6.82-4.21-13.2-4.46-20.05v-2.96c.02-.37.08-.74.08-1.11 1.42-15.62 18.66-28 18.94-44-.06-.95-.06-1.92-.06-2.87a9.461 9.461 0 0 1 .48-3.89 8.46 8.46 0 0 1 3.09-3.61c.62-.46 1.27-.86 1.92-1.25a60.354 60.354 0 0 1 15.31-6.36 63.493 63.493 0 0 1 6.69-1.38c4.25-1.47 9.94.09 13.75 3 5.12 3.91 8.73 9.61 14.37 12.77 2.44 1.37 5.16 2.2 7.67 3.45a24.589 24.589 0 0 1 13.37 18.63c.03.28.08.56.08.83.1 1 .1 2 .1 3 .059 2.918-.305 5.844-.669 8.772-.314 2.53-.629 5.062-.671 7.588.007.873.064 1.744.17 2.61 1.1 8.66 6.89 16.37 9 24.66a20.171 20.171 0 0 1 3.23.21c.751.102 1.493.26 2.22.47l-2.42-36.38-.29-4.21v-.77l.33-.21-.19-.31-.1-.16c-3.13-5-7.44-11.87-10.64-16.87-3.77-5.88-1.7-13.83.07-18.42a33.11 33.11 0 0 1 1.67-3.71c.223-2.017.557-4.02 1-6a31.393 31.393 0 0 1 3.44-9.55.404.404 0 0 0 .07-.11 9.124 9.124 0 0 1 1.55-1.83 2 2 0 0 1 .82-.47c1.25-.37 2.24 1.26 3 3.68 1.31 4.21 1.92 10.63 2.12 13.21.034.298-.143.46-.277.582-.187.17-.292.266.357.548a24.403 24.403 0 0 1 3.23 1.7c14.6 9.03 5.6 26.28 5.6 26.28l1.85 7.79.32 1.32c3.66.84 7.55 3.12 11.06 8 0 0-.44 9.17 0 11.69.166.949-.218 1.893-.602 2.836-.635 1.562-1.269 3.12.602 4.684 3 2.51 0 10.86 0 10.86s3.43 5.85 5.59 7.52c2.16 1.67 4.33 15.46 0 18.38-4.33 2.92-12.55 9.63-12.55 12.53 0 2.9-10.38 10-10.38 10s-3.49 12.1-8.23 20.46zM29.56 289.812h1.8c-.21.39-.41.79-.61 1.19-.12.24-.24.47-.35.71-.66 1.37-1.27 2.77-1.77 4.14.2-1.48.45-3.09.73-4.81.07-.38.14-.83.2-1.23zm-4.86 25.93a.728.728 0 0 1 0 .14c.11.33.22.67.42 1 .2.61.39 1.23.58 1.86.08-.67.17-1.37.26-2.09.04-.36.13-.72.13-1.1.006-.06.006-.12 0-.18.06-.46.12-.93.17-1.4v-.33h-.13c-.64.234-1.89.63-1.89.63.035.124.118.141.2.157.16.032.314.063.11.843l.15.47z",
    fill: "url(#b)",
    fillRule: "evenodd",
    transform: "translate(345.6 202.893)"
  }), __jsx("path", {
    d: "M500.1 264.475l-10.8 3.82-3.92-6.5c-3-5-7.16-11.84-10.23-16.81-5.42-8.74 1.67-22.06 1.67-22.06s1.28-13.37 5.84-17.49c4.56-4.12 5.83 17.49 5.83 17.49 18.31 8.32 8.5 27.89 8.5 27.89l1.78 7.76 1.33 5.9z",
    fill: "#EFB7B9"
  }), __jsx("path", {
    d: "M500.1 264.475l-10.8 3.82-3.92-6.5v-.57s6.19-4.25 13.41-2.65l1.31 5.9z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M482.66 308.275l5.41-4.58-2.71-41.22s14-9.58 24.36 5.41c0 0-.42 9.16 0 11.66s-2.91 5 0 7.49 0 10.83 0 10.83 3.29 5.83 5.37 7.49c2.08 1.66 4.17 15.41 0 18.32s-11.99 9.58-11.99 12.49-10 10-10 10l-8.78-11.61-1.66-26.28z",
    fill: "#FF6484"
  }), __jsx("path", {
    d: "M365.66 558.495c-20.18-8.56-15.7-29.47-11.9-40a54.457 54.457 0 0 1 2.67-6.24l11.32-6.87s2.31 5.89 4.78 13.79c5.73 18.38 12.32 47.47-6.87 39.32zM393.4 749.285a33.998 33.998 0 0 0-3 8.42 60.812 60.812 0 0 0-1.3 14.33c.08 3.33.36 5.51.36 5.51l-22.48 15.46s.13-1.81.35-4.47c.58-7.08 1.79-20.22 2.93-21.92.79-1.18 1.34-5.92 1.69-10.32.35-4.4.49-8.26.49-8.26s27.05-10.14 20.96 1.25zM446.49 760.375s0 4.3-.16 9.3c-.16 5-.46 10.9-1.09 13.65-.58 2.52-.62 7.15-.51 11.42.15 5 .51 9.5.51 9.5s-22.95-21.7-20.61-23.42c.63-.46 1.25-2.31 1.82-4.77.7-3 1.33-7 1.8-10.4.56-4.05.91-7.31.91-7.31l17.33 2.03z",
    fill: "#EFB7B9"
  }), __jsx("path", {
    d: "M393.4 749.285a34 34 0 0 0-3 8.42 183.71 183.71 0 0 1-18.4-1.41c.34-4.3.49-8.26.49-8.26s27-10.14 20.91 1.25zM446.49 760.375s0 4.3-.16 9.3c-7.16 1.83-14.52-1.83-18.08-4 .56-4.05.91-7.31.91-7.31l17.33 2.01z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M493.48 547.675c-9.16 20-12.91 43.72-12.91 43.72l-3.33 20s1.67 8.74 0 12.07-5 8.75-5 8.75 2.5 20.4 0 22.48c-2.5 2.08 0 14.57 0 14.57l-8.33 42-11.66 54.12c-11.24 9.17-26.2-2.49-26.2-2.49l3.3-35.39s5-62 2.92-64.54c-2.08-2.54.83-10.41.83-10.41s2.92-7.5.84-10.41.41-9.16.41-9.16-.83-25.4 1.67-31.23c2.5-5.83 0-41.89 0-41.89l-1-11.23-.58-6.22-.05-.61s-.38 2.49-1 6.35c-1.84 11.75-5.76 36.1-7.31 41.11a53.53 53.53 0 0 1-4.27 10.41c-1.785 3.31 2.16 12.49 0 15.82s-.33 7.08-.33 7.08 2.08 10.41-4.17 14.57 0 6.25 0 6.25-4.58 10-6.24 14.15c-1.66 4.15 0 10 0 10l-3.33 33.72s-2.92 14.15-2.5 23.73c.42 9.58-3.75 31.64-3.75 31.64s-32.06 0-37-3.75c-4.94-3.75 8.25-40.33 8.25-40.33s3.75-64.12 2.91-65.78c-.84-1.66 0-14.16 2.92-16.65 2.92-2.49 0-7.5 0-7.5s-.83-10 0-12.49-.13-10.83-.13-10.83-2.79-20.4-3.2-32.06c-.41-11.66-2.5-37.88-2.5-37.88s2.18-16.22 2.51-23.94c.12-2.84 1.39-6.39 3-9.73a86.804 86.804 0 0 1 6.2-10.88c2.326-3.473 98.65-29.16 102.79-26.26 1.1.77 2.7 6 4.28 13.57 4.4 21.15 8.7 60.85 1.96 75.55z",
    fill: "#444053"
  }), __jsx("path", {
    d: "M403.97 264.475c0-15.867 12.863-28.73 28.73-28.73s28.73 12.863 28.73 28.73-12.863 28.73-28.73 28.73-28.73-12.863-28.73-28.73z",
    fill: "#A1616A"
  }), __jsx("path", {
    d: "M491.52 472.145c-3.31 1.7-5.53 2.87-5.53 2.87s-46.63 22.07-59.89 20.82c-10.26-1-36.45-.43-47.86-.15a86.812 86.812 0 0 1 6.2-10.88c2.326-3.473 98.66-29.15 102.8-26.25 1.1.79 2.7 6 4.28 13.59z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M412.71 310.355s-26.61 4.2-32.89 8.32c-6.28 4.12-18.72 12.08-18.72 29.15s-2.91 34.56-4.58 39.55c-1.67 4.99 26.23 45.38 26.23 45.38l-10 61.21s40-1.25 53.32 0 59.93-20.82 59.93-20.82 27.48-14.57 33.31-15c5.83-.43-11.66-32.06-11.66-32.06s-27.07-51.2-22.49-59.53c4.58-8.33 7.94-20.4 7.94-20.4l-5-42.46s-7.49-2.5-13.74 2.08-27.48 2.08-27.48 2.08l-34.17 2.5z",
    fill: "#FF6484"
  }), __jsx("path", {
    d: "M367.54 384.465l-10.44 2.91-2.89 39.18s3.75 10.41 0 13.74-4.58 74.53-4.58 74.53 12.08 8.74 26.23 2.08c0 0-2.08-7.91 4.17-36.64s6.24-43.3 6.24-43.3 0-35.81 2.92-41.64c2.92-5.83 0-20.4 0-20.4s-5.83-7.91-5.42-10.82c.41-2.91-16.23 20.36-16.23 20.36z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M372.53 519.205a26.59 26.59 0 0 1-18.77-.68 54.458 54.458 0 0 1 2.67-6.24l11.32-6.87s2.35 5.89 4.78 13.79z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M366.91 384.465l-10.41 2.91-2.91 39.18s3.75 10.41 0 13.74-4.58 74.53-4.58 74.53 12.09 8.73 26.23 2.04c0 0-2.08-7.91 4.16-36.64s6.25-43.3 6.25-43.3 0-35.81 2.91-41.64c2.91-5.83 0-20.4 0-20.4s-5.83-7.91-5.41-10.82c.42-2.91-16.24 20.4-16.24 20.4z",
    fill: "#FF6484"
  }), __jsx("path", {
    d: "M473.5 390.705s-5.41 46.63-21.24 55.38c0 0 35.39-9.99 21.24-55.38zM393.98 394.875s19.56 9.57 15 16.23c-4.56 6.66-15-16.23-15-16.23zM393.98 414.025s12.49 12.91 10 17.49c-2.49 4.58-10-17.49-10-17.49zM494.73 307.025s4.9 8.32 5.37 13.74c.47 5.42-5.37-13.74-5.37-13.74zM494.73 295.785s2.46-2.09 8.74 0-8.74 0-8.74 0zM470.69 539.135a57.9 57.9 0 0 1-30.45-3.9l-5.25 13.44-.58-6.22c.86-5.22 2.53-10.81 5.83-12.22 0 0 11.56 9.21 30.45 8.9zM385.28 556.625s25.61 5.31 32.79 4.37l-32.79-4.37zM387.94 563.335s10.93-.47 16.39 1.72l-16.39-1.72zM389.19 567.865a98.004 98.004 0 0 0 15.14 2l-15.14-2zM388.56 625.165c.47-.31 21.86-5.31 24.52-1.72l-24.52 1.72zM388.56 631.725s18.58-2.19 19.05 0c.47 2.19-19.05 0-19.05 0zM388.56 637.655s19.83-4.1 22.17-3.1c2.34 1-22.17 3.1-22.17 3.1zM389.5 777.555l-22.48 15.46s.13-1.81.35-4.47c5-12.3 11.51-18.79 11.51-18.79 5.07-1.32 8.27-.1 10.26 2.29.08 3.32.36 5.51.36 5.51z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M391.69 791.445a55.791 55.791 0 0 0-4.69 23 35.67 35.67 0 0 1-4.76 18.51 18.248 18.248 0 0 1-1.58 2.26c-.583.712-15.62-.13-21.09-4.66a5.411 5.411 0 0 1-1.47-1.8c-3.13-6.24 6.09-30.13 6.09-30.13 4.84-18.42 14.67-28.26 14.67-28.26 17.51-4.53 12.83 21.08 12.83 21.08z",
    fill: "#444053"
  }), __jsx("path", {
    d: "M382.24 832.905a18.248 18.248 0 0 1-1.58 2.26c-.583.712-15.62-.13-21.09-4.66 2.69-8.9 11.27-35.83 15.29-31.25 3.78 4.3 6.41 24.99 7.38 33.65z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M380.1 800.925l-1.09 40.34h5.24s.85-35.39 3.19-40.34c2.34-4.95-7.34 0-7.34 0z",
    fill: "#444053"
  }), __jsx("path", {
    d: "M445.24 804.245s-22.95-21.7-20.61-23.42c.63-.46 1.25-2.31 1.82-4.77 4.41-.77 12 1.07 18.28 18.69.15 5 .51 9.5.51 9.5z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M448.67 828.445c-.176.076-.36.13-.55.16-2.7.47-12.65.2-18.22 0a3.94 3.94 0 0 1-3.81-3.93c0-1.5 0-3.33-.12-5.28-.26-6.16-1-13.49-3.21-15.14-3.91-3-7-13.18 0-26.07 0 0 13.42-10.25 23.1 20.56 0 0 .94 8.79 5.15 11.91 4.21 3.12-.46 16.9-2.34 17.79z",
    fill: "#444053"
  }), __jsx("path", {
    d: "M448.1 828.605c-2.7.47-12.65.2-18.22 0a3.94 3.94 0 0 1-3.81-3.93c0-1.5 0-3.33-.12-5.28 1.69-7.46 4.12-15.14 7.25-16.89.02-.01 9.49-1.08 14.9 26.1z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M424.46 801.595l2.52 33.57h3.2v-36.43l-5.72 2.86z",
    fill: "#444053"
  }), __jsx("path", {
    d: "M432.28 218.695a57.42 57.42 0 0 0-25.62 8.23c-2 1.21-4 2.68-4.83 4.85-.72 1.88-.42 4-.39 6 .27 17.22-18.93 30.25-18.33 47.46.24 6.83 3.67 13.19 4.3 20 1.05 11.36-5.67 21.81-12.11 31.22a25.86 25.86 0 0 0 18.25-6.05 138.39 138.39 0 0 1 2.55 69.75h9.21a7.01 7.01 0 0 1 2.69.33 6.76 6.76 0 0 1 2.13 1.59c8.61 8.57 14.38 21.24 11.09 32.94l19.6-7.35c4.69-1.76 9.45-3.55 13.53-6.45 4.08-2.9 7.5-7.11 8.36-12.05.53-3 .36-6.58 2.83-8.32a15.418 15.418 0 0 1 3.86-1.43c5.38-1.9 7.76-8.12 8.86-13.72a79.011 79.011 0 0 0 1.25-20.87c-.87-11.7-4.33-23.58-1.48-35 1.61-6.41 5.19-12.38 5.48-19 .47-10.91-8.06-20.31-9.33-31.16-.89-7.56 1.84-15.21.95-22.77a24.46 24.46 0 0 0-12.87-18.57c-2.41-1.24-5-2.07-7.38-3.44-5.43-3.15-8.9-8.82-13.83-12.72-4.93-3.9-13.14-5.37-16.85-.3l8.08-3.17z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M432.28 217.445a57.42 57.42 0 0 0-25.62 8.23c-2 1.21-4 2.68-4.83 4.85-.72 1.88-.42 4-.39 6 .27 17.22-18.93 30.25-18.33 47.47.24 6.82 3.67 13.18 4.3 20 1.05 11.36-5.67 21.81-12.11 31.23a26 26 0 0 0 18.25-6.05 138.341 138.341 0 0 1 2.55 69.73h9.21a6.993 6.993 0 0 1 2.69.34c.81.377 1.535.914 2.13 1.58 8.61 8.58 14.38 21.24 11.09 32.94l19.6-7.35c4.69-1.76 9.45-3.55 13.53-6.45 4.08-2.9 7.5-7.11 8.36-12.05.53-3 .36-6.58 2.83-8.32a15.417 15.417 0 0 1 3.86-1.43c5.38-1.9 7.76-8.12 8.86-13.72a78.999 78.999 0 0 0 1.28-20.89c-.87-11.7-4.33-23.58-1.48-35 1.61-6.41 5.19-12.38 5.48-19 .47-10.91-8.06-20.31-9.33-31.16-.89-7.56 1.84-15.2.95-22.77a24.48 24.48 0 0 0-12.87-18.57c-2.41-1.24-5-2.07-7.38-3.43-5.43-3.16-8.9-8.83-13.83-12.73-4.93-3.9-13.14-5.37-16.85-.3l8.05-3.15z",
    fill: "#925978"
  }), __jsx("g", {
    opacity: ".1",
    fillOpacity: ".1"
  }, __jsx("path", {
    d: "M402.36 232.365c-.67.385-1.003.773-1 1.16.5-.38.833-.77 1-1.16zM474.1 272.395c.36-5.3 1.54-10.62 1.1-15.9-.33 5.3-1.51 10.62-1.1 15.9zM387.41 298.745c-.58-6.2-3.47-12-4.15-18.19a22.803 22.803 0 0 0-.15 3.42c.24 6.75 3.59 13.06 4.27 19.78.165-1.666.175-3.343.03-5.01zM478.1 323.375a42.88 42.88 0 0 0-1 12.42c.1-2.43.435-4.845 1-7.21 1.61-6.41 5.19-12.38 5.48-19a20.614 20.614 0 0 0-.16-3.52c-.78 5.95-3.89 11.49-5.32 17.31zM393.55 323.915a26 26 0 0 1-14.76 6c-1.14 1.78-2.32 3.52-3.49 5.24a26 26 0 0 0 18.25-6.05 138.003 138.003 0 0 1 5.82 37.45 138.31 138.31 0 0 0-5.82-42.64zM478.29 379.205c-1.1 5.6-3.48 11.82-8.86 13.71-1.347.3-2.646.785-3.86 1.44-2.47 1.74-2.3 5.34-2.83 8.32-.86 4.94-4.27 9.14-8.36 12-4.09 2.86-8.84 4.7-13.53 6.46l-18.7 7a25.808 25.808 0 0 1-.9 5.55l19.6-7.35c4.69-1.76 9.45-3.55 13.53-6.45 4.08-2.9 7.5-7.11 8.36-12.05.53-3 .36-6.58 2.83-8.32a15.403 15.403 0 0 1 3.86-1.43c5.38-1.9 7.76-8.12 8.86-13.72a78.42 78.42 0 0 0 1.41-17.7 78.297 78.297 0 0 1-1.41 12.54zM410.16 395.555a6.61 6.61 0 0 0-2.13-1.59 7.15 7.15 0 0 0-2.69-.34h-8.17c-.32 1.74-.66 3.48-1 5.21h9.21a7 7 0 0 1 2.69.34 6.58 6.58 0 0 1 2.13 1.58c6.3 6.28 11.07 14.74 11.89 23.42 1.01-10.38-4.37-21.06-11.93-28.62z"
  })), __jsx("path", {
    d: "M364.47 429.635s7.44-3.12 9.1 0c1.66 3.12-9.1 0-9.1 0zM367.1 434.985s7.44-3.12 9.11 0c1.67 3.12-9.11 0-9.11 0z",
    fillOpacity: ".1"
  })), __jsx("g", {
    fill: "#6C63FF",
    fillOpacity: ".1"
  }, __jsx("path", {
    d: "M828.21 31.235s-38.05-2.29-33.56 24.37c0 0-.89 4.71 3.38 6.85 0 0 .07-2 3.9-1.31 1.364.23 2.75.297 4.13.2a8.57 8.57 0 0 0 5.04-2.09s10.69-4.41 14.85-21.89c0 0 3.08-3.82 3-4.8l-6.42 2.75s2.19 4.63.46 8.48c0 0-.2-8.32-1.44-8.12-.25 0-3.33 1.6-3.33 1.6s3.77 8.07.92 13.94c0 0 1.08-9.94-2.1-13.35l-4.54 2.69s4.41 8.33 1.42 15.13c0 0 .77-10.43-2.37-14.49l-4.1 3.19s4.15 8.17 1.65 13.81c0 0-.33-12.15-2.51-13.06 0 0-3.58 3.16-4.12 4.46 0 0 2.83 6 1.07 9.1 0 0-1.08-8.08-2-8.12 0 0-3.57 5.36-3.94 9a19.51 19.51 0 0 1 3.07-9.55 10.67 10.67 0 0 0-5.46 2.84c-1.502 1.462.55-3.79 6.34-4.13 0 0 2.95-4.06 3.74-4.31 0 0-5.76-.48-9.25 1.07 0 0 3.07-3.58 10.31-2l4-3.3s-7.58-1-10.8.11c0 0 3.7-3.16 11.89-.86l4.4-2.63s-6.46-1.4-10.31-.89c0 0 4.06-2.19 11.6.18l3.15-1.41s-4.74-.93-6.12-1.08c-1.38-.15-1.46-.53-1.46-.53a16.36 16.36 0 0 1 8.89 1c2.813 1.153 6.73-2.43 6.62-2.85zM773.98 9.615s-32 20.71-12.59 39.52c0 0 2.07 4.32 6.78 3.52 0 0-1.12-1.64 2.37-3.37a17.362 17.362 0 0 0 3.45-2.29 8.61 8.61 0 0 0 2.83-4.67s6-9.9-1-26.44c0 0 .22-4.9-.46-5.62l-3.54 6s4.51 2.43 5.4 6.55c0 0-5.09-6.57-6-5.68-.18.18-1.74 3.27-1.74 3.27s7.83 4.26 9 10.67c0 0-5-8.65-9.61-9.5l-2.08 4.8s8.5 4.1 10.12 11.35c0 0-5.57-8.86-10.5-10.27l-1.4 5s8.2 4.16 9.51 10.2c0 0-7.46-9.58-9.76-9 0 0-1 4.66-.68 6 0 0 5.82 3.12 6.26 6.7 0 0-5.66-5.87-6.39-5.38 0 0 .3 6.43 2.17 9.61a19.53 19.53 0 0 1-3.18-9.51 10.7 10.7 0 0 0-2.72 5.52c-.347 2.067-1.8-3.38 2.67-7.08 0 0 0-5 .45-5.69 0 0-4.92 3-6.82 6.34 0 0 .36-4.7 7.15-7.68l1.3-5.05s-6.72 3.66-8.63 6.49c0 0 1.11-4.74 9.06-7.74l2-4.73s-6 2.71-8.84 5.4c0 0 2-4.18 9.46-6.73l1.7-3s-4.37 2.06-5.57 2.76c-1.2.7-1.49.44-1.49.44a16.39 16.39 0 0 1 7.75-4.47c2.948-.742 3.91-5.96 3.57-6.24zM725.28 33.745s-19.13 33 6.7 40.93c0 0 3.81 2.91 7.64 0 0 0-1.73-.94.59-4.07a17.511 17.511 0 0 0 2-3.6 8.64 8.64 0 0 0 .41-5.45s.85-11.54-12.9-23.11c0 0-2-4.46-3-4.79l-.43 7s5.12.12 7.79 3.39c0 0-7.52-3.55-7.9-2.36-.08.24-.07 3.7-.07 3.7s8.99.27 12.99 5.45c0 0-8.4-5.43-12.87-4.11l.32 5.22s9.43-.2 14.16 5.53c0 0-9-5.37-14-4.39l1 5.09s9.2 0 13.1 4.78c0 0-11-5.16-12.79-3.63 0 0 1.21 4.62 2.13 5.69 0 0 6.6.14 8.62 3.13 0 0-7.71-2.67-8.14-1.89 0 0 3.19 5.59 6.3 7.57a19.53 19.53 0 0 1-7.15-7 10.71 10.71 0 0 0 .08 6.15c.627 1.998-3.14-2.19-.84-7.52 0 0-2.3-4.46-2.17-5.27 0 0-3 4.93-3.2 8.74 0 0-1.82-4.35 2.88-10.08l-1.13-5.1s-4.33 6.31-4.75 9.7c0 0-1.16-4.73 4.57-11l-.38-5.11s-4.14 5.15-5.42 8.82c0 0-.14-4.62 5.37-10.29l.15-3.45s-3 3.81-3.71 5-1.13 1.02-1.13 1.02a16.46 16.46 0 0 1 4.88-7.51c2.29-2.004.72-7.09.3-7.18z"
  })), __jsx("path", {
    d: "M847.69 297.635v14.31H862l25.76 52.18-10.77 17.53a13.76 13.76 0 0 0-1.79 6.8c0 9.58 6.55 14.31 15.43 14.31h83.67v-13.76h-81.92a1.69 1.69 0 0 1-1.79-1.79 9.005 9.005 0 0 1 .76-1.78l7.15-11.29h53.31a14 14 0 0 0 12.52-7.51l25.77-44.31a8.323 8.323 0 0 0 .72-3.58 6.88 6.88 0 0 0-7.16-6.8H877.75l-6.8-14.31h-23.26zm28.62 121.124a14.31 14.31 0 0 1 13.22-8.834c7.894.022 14.288 6.416 14.31 14.31a14.31 14.31 0 1 1-27.53-5.476zm69.37 5.483c-.003-7.902 6.398-14.311 14.3-14.317 7.898.017 14.298 6.412 14.32 14.31 0 7.902-6.405 14.308-14.306 14.31-7.902.002-14.31-6.401-14.313-14.303z",
    fill: "#6C63FF",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M941.67 337.225h-12v-12h-9v12h-12v9h12v12h9v-12h12v-9z",
    fill: "#EEE"
  }));
};

Ecdev.defaultProps = {
  width: "1119",
  height: "860",
  viewBox: "0 0 1119 860",
  xmlns: "http://www.w3.org/2000/svg"
};

var Ecres = function Ecres(props) {
  return __jsx("svg", props, __jsx("defs", null, __jsx("linearGradient", {
    x1: ".563",
    y1: "1.114",
    x2: ".563",
    y2: ".114",
    id: "a"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "gray",
    stopOpacity: ".251"
  }), __jsx("stop", {
    offset: ".54",
    stopColor: "gray",
    stopOpacity: ".122"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "gray",
    stopOpacity: ".102"
  })), __jsx("linearGradient", {
    x1: "357.66",
    y1: "752.53",
    x2: "357.66",
    y2: "310.18",
    id: "b"
  }), __jsx("linearGradient", {
    x1: "211.31",
    y1: "788.29",
    x2: "211.31",
    y2: "442.62",
    id: "c"
  })), __jsx("path", {
    d: "M1 1h1086.82v789.35H1V1z",
    fill: "none"
  }), __jsx("path", {
    d: "M154.41 44.62c-8.06-.23-16.32 0-23.88 2.32-20.57 6.32-30.32 27-27.15 44.87 3.17 17.87 16.21 33.44 29.74 47.67 13.53 14.23 28.19 28.3 35.61 45.31 3.7 8.49 5.43 18 1.67 26.48-5.8 13.07-23.29 20.37-40.08 21.89-16.79 1.52-33.65-1.44-50.5-2.43-7.07-.41-14.34-.46-21 1.45-7.31 2.08-13.4 6.33-19 10.76C17.93 260.3.41 284.01 3.27 308.88c3.2 28.23 31.74 50.54 63 62.51 10.35 4 21.3 7.18 30.41 12.84 24 14.93 29.39 42.93 27 67.64-2.39 24.71-10.53 49.45-6 73.94 5.33 28.49 28.92 54.23 60.74 66.25 28.35 10.71 63.83 10 89-5.11 12.27-7.38 21.55-17.63 29.62-28.23a227.77 227.77 0 0 0 29.45-51c3.51-8.49 6.81-17.62 15-23.52 5-3.63 11.48-5.66 17.89-7.24 19.32-4.76 39.67-6.06 59.17-10.3 19.5-4.24 39.07-12.15 49.67-26.28 15-20 8-45.62 8.07-69.14.12-53.66 39.11-101.69 53.5-154 4.7-17.09 6.45-36-4.05-51.25-7.13-10.35-19.16-17.82-31.8-23.59-27.81-12.69-59.42-18.34-90.51-23.84-43.21-7.64-95.68-8.63-129.17-33.35-32.09-23.68-76.06-40.59-119.85-40.59z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("g", {
    opacity: ".5"
  }, __jsx("path", {
    d: "M28.34 350.35c-2.14 3.16-3.9 7.75-1.1 13.1 5.5 10.5 19.1 8.34 25.71 18.39a18.38 18.38 0 0 1 2.85 9.29c.25 5.69-1.51 10.17-2.42 15.18A25.662 25.662 0 0 0 56 423.65a30.625 30.625 0 0 0 14 12.49c5.12 2.26 10 2.84 14.9 3.94a91.683 91.683 0 0 1 17.67 6 33.342 33.342 0 0 1 7.54 4.4 54.896 54.896 0 0 1 7.63 8.22l21.27 26.26a75.132 75.132 0 0 0 9 9.84 54.224 54.224 0 0 0 11.72 7.21c8.49 4.23 17.37 8.56 24.74 8.07 7.37-.49 12.49-7.6 9-17.54-3.3-9.46-12.6-17.43-16.82-26.87-6.65-14.88 2.06-26-3.51-40.9-5.34-14.32-20.31-23.92-29.87-37-6.86-9.3-10.68-20.12-16.86-29.89-9-14-22.4-24.71-35-30.13a67.93 67.93 0 0 0-35.16-4.87c-4.56.5-9.05 1.35-12.29 4.08-3.44 2.9-3 8.32-5.24 12.17-2.57 4.43-7.47 6.94-10.38 11.22z",
    fill: "#6C63FF",
    fillOpacity: ".5"
  }), __jsx("path", {
    d: "M41.69 330.21s106.48 99.55 149.42 177.06M27.65 364.06s42.55-8.27 72 24.9M57.89 426.57s47-32.87 63.26-13.75M91.21 327.51s-4.95 25.16 12.86 66.26M173.09 425.16s-4.16 16.5-37.6 4.37M139.14 482.88s20.41-23.59 11.13-35.17",
    fill: "none",
    stroke: "#535461",
    strokeOpacity: ".5",
    strokeWidth: "2"
  })), __jsx("path", {
    d: "M8.33 234.88c-5 5.91-9.68 14.09-6 22.16 7.08 15.84 33.29 8.09 42.64 22.84 2.8 4.41 3.18 9.8 2.53 14.61-1.26 9.41-5.92 17.4-9.14 26-3.22 8.6-4.89 19-.35 28.08 4.37 8.79 13.58 14.34 22.5 16.55 8.92 2.21 17.86 1.71 26.77 2a148.192 148.192 0 0 1 31.35 4.62 43.293 43.293 0 0 1 12.78 5.14c4.55 2.91 8.23 7.18 11.83 11.38l32 37.29c4.25 5 8.59 10 13.86 13.67 6.08 4.23 13 6.38 19.81 8.45 14.65 4.48 30 9 44 5.93 14-3.07 25.75-16.45 22.25-31.94-3.33-14.75-18.35-25.21-23.41-39.66-8-22.77 11.75-43.89 5.82-67.06-5.68-22.22-30.86-33.68-44.86-52.49-10-13.48-13.94-30.34-22.68-44.68-12.62-20.7-34.62-34.41-56.52-39.62-21.9-5.21-43.93-2.78-64.47 2.43-8.7 2.21-17.4 5-24.3 10.52-7.33 5.87-8.17 14.78-13.51 21.86-6.19 8.23-16.16 13.92-22.9 21.92z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M39.48 197.28s169.67 133.5 226.76 249.6M2.87 257.88s82.37-26.65 127.54 19.66M40.67 352.88s98.11-69 122.91-42.09M133.26 177.76s-16.91 43.39 4 106.46M257.31 315.57s-12.81 28.73-71.9 18.68M176.1 421.98s45.47-45.48 31.57-62",
    fill: "none",
    stroke: "#535461",
    strokeWidth: "2"
  }), __jsx("path", {
    d: "M153.97 648.16c0-68.77 208.188-124.52 465-124.52s465 55.75 465 124.52-208.188 124.52-465 124.52-465-55.75-465-124.52z",
    fill: "#6C63FF",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M981.15 1.41s-35.83 35.83-15.6 89C985.78 143.58 930.87 232 930.87 232s.59-.09 1.68-.28c73.59-13 110.16-97.16 69.24-159.69-15.21-23.24-27.7-50.5-20.64-70.62z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M981.15 1.41s-20.23 43.92 0 79.75 3.47 136.39-50.28 150.84",
    fill: "none",
    stroke: "#535461",
    strokeWidth: "2"
  }), __jsx("path", {
    d: "M1044.97 146.34s-40.89-6.51-44.61 30.13c-3.72 36.64-78.62 41.72-78.62 41.72l1.4.93c61.84 40.59 121 25.86 112-28-3.27-20.08-3-40.24 9.83-44.78z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M1044.97 146.34s-40.89-6.51-44.61 30.13c-3.72 36.64-78.62 41.72-78.62 41.72l1.4.93c61.84 40.59 121 25.86 112-28-3.27-20.08-3-40.24 9.83-44.78z",
    fill: "#F5F5F5",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M1044.97 146.34s-31.74 7-29.13 35.82c2.61 28.82-47.13 63.45-94.1 36M247.7 280.8s-13.26-45 2.49-78.14a71.09 71.09 0 0 0 5.75-44.6 119.573 119.573 0 0 0-6.31-20.93",
    fill: "none",
    stroke: "#535461",
    strokeWidth: "2"
  }), __jsx("path", {
    d: "M259.41 116.18c0 5.52-10 21.51-10 21.51s-10-16-10-21.51c0-5.523 4.477-10 10-10s10 4.477 10 10zM275.93 146.74c-3 4.63-20.08 12.63-20.08 12.63s.31-18.86 3.31-23.49a10 10 0 1 1 16.77 10.86zM275.21 198.96c-4.93 2.48-23.71.77-23.71.77s9.79-16.12 14.71-18.6a10 10 0 1 1 9 17.84v-.01zM265.77 238.34c-4.44 3.28-23.24 4.76-23.24 4.76s6.92-17.54 11.36-20.82a10 10 0 1 1 11.88 16.06zM234.88 160.44c4 3.84 22.39 7.83 22.39 7.83s-4.51-18.31-8.47-22.15a10 10 0 1 0-13.92 14.33v-.01zM224.41 206.64c4.93 2.48 23.71.77 23.71.77s-9.79-16.12-14.71-18.6a10 10 0 0 0-9 17.84v-.01zM220.41 252.94c4.44 3.28 23.24 4.76 23.24 4.76s-6.92-17.54-11.36-20.82a10 10 0 0 0-11.88 16.06z",
    fill: "#6C63FF"
  }), __jsx("path", {
    d: "M805.279 428.62h85.09a7.531 7.531 0 0 1 7.576 7.532v6.071c0 23.273-18.866 42.14-42.14 42.14H42.125C18.852 484.354-.008 465.481 0 442.223v-6.071a7.53 7.53 0 0 1 7.53-7.53h88.1a28.358 28.358 0 0 1-3.001-12.672V28.49c0-15.735 12.755-28.49 28.49-28.49h658.67c15.727 0 28.479 12.743 28.49 28.47v387.48a28.36 28.36 0 0 1-3 12.67zm-446.5 15.81l7.3 8.29h165.73l8.08-8.29h-181.11z",
    transform: "translate(183.041 113.88)",
    fill: "url(#a)",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M283.74 119.35h699.44v434.39H283.74V119.35z",
    fill: "#535461"
  }), __jsx("path", {
    d: "M298.47 182.67h668.52v354.87H298.47V182.67z",
    fill: "#F1F1F4"
  }), __jsx("path", {
    d: "M626.84 151.74a5.89 5.89 0 1 1 11.78 0 5.89 5.89 0 0 1-11.78 0z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M735.95 538.27l-23 23.56h-162l-20.76-23.56H200.54a7.36 7.36 0 0 0-7.36 7.36v5.94a41.18 41.18 0 0 0 41.23 41.18h795.2c22.743 0 41.18-18.437 41.18-41.18v-5.94a7.36 7.36 0 0 0-7.36-7.36H735.95z",
    fill: "#535461"
  }), __jsx("path", {
    d: "M339.3 209.71h182.77v137.74H339.3V209.71z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M357.18 221.63h60.92v34.43h-60.92v-34.43z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M432.67 221.63h71.52v7.95h-71.52v-7.95zM432.67 234.87H483v7.95h-50.33v-7.95zM432.67 248.11h71.52v7.95h-71.52v-7.95zM357.18 261.36h147.01v7.95H357.18v-7.95zM357.18 274.6h147.01v7.95H357.18v-7.95zM357.18 287.85h147.01v7.95H357.18v-7.95zM357.18 301.09h135.09v7.95H357.18v-7.95zM357.18 314.33h147.01v7.95H357.18v-7.95zM357.18 327.58h147.01v7.95H357.18v-7.95z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M540.61 209.71h182.77v137.74H540.61V209.71z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M558.48 221.63h60.92v34.43h-60.92v-34.43z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M633.98 221.63h71.52v7.95h-71.52v-7.95zM633.98 234.87h50.33v7.95h-50.33v-7.95zM633.98 248.11h71.52v7.95h-71.52v-7.95zM558.48 261.36h147.01v7.95H558.48v-7.95zM558.48 274.6h147.01v7.95H558.48v-7.95zM558.48 287.85h147.01v7.95H558.48v-7.95zM558.48 301.09h135.09v7.95H558.48v-7.95zM558.48 314.33h147.01v7.95H558.48v-7.95zM558.48 327.58h147.01v7.95H558.48v-7.95z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M741.91 209.71h182.77v137.74H741.91V209.71z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M759.79 221.63h60.92v34.43h-60.92v-34.43z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M835.28 221.63h71.52v7.95h-71.52v-7.95zM835.28 234.87h50.33v7.95h-50.33v-7.95zM835.28 248.11h71.52v7.95h-71.52v-7.95zM759.79 261.36H906.8v7.95H759.79v-7.95zM759.79 274.6H906.8v7.95H759.79v-7.95zM759.79 287.85H906.8v7.95H759.79v-7.95zM759.79 301.09h135.09v7.95H759.79v-7.95zM759.79 314.33H906.8v7.95H759.79v-7.95zM759.79 327.58H906.8v7.95H759.79v-7.95z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M339.3 364.66h182.77V502.4H339.3V364.66z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M357.18 376.58h60.92v34.43h-60.92v-34.43z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M432.67 376.58h71.52v7.95h-71.52v-7.95zM432.67 389.83H483v7.95h-50.33v-7.95zM432.67 403.07h71.52v7.95h-71.52v-7.95zM357.18 416.31h147.01v7.95H357.18v-7.95zM357.18 429.56h147.01v7.95H357.18v-7.95zM357.18 442.8h147.01v7.95H357.18v-7.95zM357.18 456.05h135.09V464H357.18v-7.95zM357.18 469.29h147.01v7.95H357.18v-7.95zM357.18 482.53h147.01v7.95H357.18v-7.95z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M540.61 364.66h182.77V502.4H540.61V364.66z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M558.48 376.58h60.92v34.43h-60.92v-34.43z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M633.98 376.58h71.52v7.95h-71.52v-7.95zM633.98 389.83h50.33v7.95h-50.33v-7.95zM633.98 403.07h71.52v7.95h-71.52v-7.95zM558.48 416.31h147.01v7.95H558.48v-7.95zM558.48 429.56h147.01v7.95H558.48v-7.95zM558.48 442.8h147.01v7.95H558.48v-7.95zM558.48 456.05h135.09V464H558.48v-7.95zM558.48 469.29h147.01v7.95H558.48v-7.95zM558.48 482.53h147.01v7.95H558.48v-7.95z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M741.91 364.66h182.77V502.4H741.91V364.66z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M307.88 0h-282A25.83 25.83 0 0 0 0 25.82v390.74a25.83 25.83 0 0 0 25.87 25.8h282a25.829 25.829 0 0 0 25.87-25.8V25.82A25.832 25.832 0 0 0 307.881 0h-.001z",
    transform: "translate(135.19 256.06)",
    fill: "url(#b)"
  }), __jsx("path", {
    d: "M139.17 261.36h325.8v433.08h-325.8V261.36z",
    fill: "#535461"
  }), __jsx("path", {
    d: "M155.72 302.33h292.69v351.15H155.72V302.33z",
    fill: "#F1F1F4"
  }), __jsx("path", {
    d: "M296.77 281.23a3.97 3.97 0 1 1 7.94 0 3.97 3.97 0 0 1-7.94 0zM288.82 673.25c0-6.583 5.337-11.92 11.92-11.92s11.92 5.337 11.92 11.92-5.337 11.92-11.92 11.92-11.92-5.337-11.92-11.92zM168.37 338.21h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M176.54 343.66h27.83v15.73h-27.83v-15.73z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M211.02 343.66h32.67v3.63h-32.67v-3.63zM211.02 349.71h22.99v3.63h-22.99v-3.63zM211.02 355.76h32.67v3.63h-32.67v-3.63zM176.54 361.81h67.15v3.63h-67.15v-3.63zM176.54 367.86h67.15v3.63h-67.15v-3.63zM176.54 373.91h67.15v3.63h-67.15v-3.63zM176.54 379.96h61.71v3.63h-61.71v-3.63zM176.54 386.01h67.15v3.63h-67.15v-3.63zM176.54 392.06h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M260.33 338.21h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M268.49 343.66h27.83v15.73h-27.83v-15.73z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M302.98 343.66h32.67v3.63h-32.67v-3.63zM302.98 349.71h22.99v3.63h-22.99v-3.63zM302.98 355.76h32.67v3.63h-32.67v-3.63zM268.49 361.81h67.15v3.63h-67.15v-3.63zM268.49 367.86h67.15v3.63h-67.15v-3.63zM268.49 373.91h67.15v3.63h-67.15v-3.63zM268.49 379.96h61.71v3.63h-61.71v-3.63zM268.49 386.01h67.15v3.63h-67.15v-3.63zM268.49 392.06h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M352.28 338.21h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M360.45 343.66h27.83v15.73h-27.83v-15.73z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M394.93 343.66h32.67v3.63h-32.67v-3.63zM394.93 349.71h22.99v3.63h-22.99v-3.63zM394.93 355.76h32.67v3.63h-32.67v-3.63zM360.45 361.81h67.15v3.63h-67.15v-3.63zM360.45 367.86h67.15v3.63h-67.15v-3.63zM360.45 373.91h67.15v3.63h-67.15v-3.63zM360.45 379.96h61.71v3.63h-61.71v-3.63zM360.45 386.01h67.15v3.63h-67.15v-3.63zM360.45 392.06h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M168.37 408.99h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M176.54 414.44h27.83v15.73h-27.83v-15.73z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M211.02 414.44h32.67v3.63h-32.67v-3.63zM211.02 420.49h22.99v3.63h-22.99v-3.63zM211.02 426.54h32.67v3.63h-32.67v-3.63zM176.54 432.59h67.15v3.63h-67.15v-3.63zM176.54 438.64h67.15v3.63h-67.15v-3.63zM176.54 444.69h67.15v3.63h-67.15v-3.63zM176.54 450.74h61.71v3.63h-61.71v-3.63zM176.54 456.79h67.15v3.63h-67.15v-3.63zM176.54 462.84h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M260.33 408.99h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M268.49 414.44h27.83v15.73h-27.83v-15.73z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M302.98 414.44h32.67v3.63h-32.67v-3.63zM302.98 420.49h22.99v3.63h-22.99v-3.63zM302.98 426.54h32.67v3.63h-32.67v-3.63zM268.49 432.59h67.15v3.63h-67.15v-3.63zM268.49 438.64h67.15v3.63h-67.15v-3.63zM268.49 444.69h67.15v3.63h-67.15v-3.63zM268.49 450.74h61.71v3.63h-61.71v-3.63zM268.49 456.79h67.15v3.63h-67.15v-3.63zM268.49 462.84h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M352.28 408.99h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M360.45 414.44h27.83v15.73h-27.83v-15.73z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M394.93 414.44h32.67v3.63h-32.67v-3.63zM394.93 420.49h22.99v3.63h-22.99v-3.63zM394.93 426.54h32.67v3.63h-32.67v-3.63zM360.45 432.59h67.15v3.63h-67.15v-3.63zM360.45 438.64h67.15v3.63h-67.15v-3.63zM360.45 444.69h67.15v3.63h-67.15v-3.63zM360.45 450.74h61.71v3.63h-61.71v-3.63zM360.45 456.79h67.15v3.63h-67.15v-3.63zM360.45 462.84h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M168.37 482.57h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M176.54 488.02h27.83v15.73h-27.83v-15.73z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M211.02 488.02h32.67v3.63h-32.67v-3.63zM211.02 494.07h22.99v3.63h-22.99v-3.63zM211.02 500.12h32.67v3.63h-32.67v-3.63zM176.54 506.17h67.15v3.63h-67.15v-3.63zM176.54 512.22h67.15v3.63h-67.15v-3.63zM176.54 518.27h67.15v3.63h-67.15v-3.63zM176.54 524.32h61.71v3.63h-61.71v-3.63zM176.54 530.37h67.15V534h-67.15v-3.63zM176.54 536.42h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M260.33 482.57h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M268.49 488.02h27.83v15.73h-27.83v-15.73z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M302.98 488.02h32.67v3.63h-32.67v-3.63zM302.98 494.07h22.99v3.63h-22.99v-3.63zM302.98 500.12h32.67v3.63h-32.67v-3.63zM268.49 506.17h67.15v3.63h-67.15v-3.63zM268.49 512.22h67.15v3.63h-67.15v-3.63zM268.49 518.27h67.15v3.63h-67.15v-3.63zM268.49 524.32h61.71v3.63h-61.71v-3.63zM268.49 530.37h67.15V534h-67.15v-3.63zM268.49 536.42h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M352.28 482.57h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M360.45 488.02h27.83v15.73h-27.83v-15.73z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M394.93 488.02h32.67v3.63h-32.67v-3.63zM394.93 494.07h22.99v3.63h-22.99v-3.63zM394.93 500.12h32.67v3.63h-32.67v-3.63zM360.45 506.17h67.15v3.63h-67.15v-3.63zM360.45 512.22h67.15v3.63h-67.15v-3.63zM360.45 518.27h67.15v3.63h-67.15v-3.63zM360.45 524.32h61.71v3.63h-61.71v-3.63zM360.45 530.37h67.15V534h-67.15v-3.63zM360.45 536.42h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M168.37 553.35h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M176.54 558.8h27.83v15.73h-27.83V558.8z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M211.02 558.8h32.67v3.63h-32.67v-3.63zM211.02 564.85h22.99v3.63h-22.99v-3.63zM211.02 570.9h32.67v3.63h-32.67v-3.63zM176.54 576.95h67.15v3.63h-67.15v-3.63zM176.54 583h67.15v3.63h-67.15V583zM176.54 589.05h67.15v3.63h-67.15v-3.63zM176.54 595.1h61.71v3.63h-61.71v-3.63zM176.54 601.15h67.15v3.63h-67.15v-3.63zM176.54 607.2h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M260.33 553.35h83.48v62.92h-83.48v-62.92z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M268.49 558.8h27.83v15.73h-27.83V558.8z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M302.98 558.8h32.67v3.63h-32.67v-3.63zM302.98 564.85h22.99v3.63h-22.99v-3.63zM302.98 570.9h32.67v3.63h-32.67v-3.63zM268.49 576.95h67.15v3.63h-67.15v-3.63zM268.49 583h67.15v3.63h-67.15V583zM268.49 589.05h67.15v3.63h-67.15v-3.63zM268.49 595.1h61.71v3.63h-61.71v-3.63zM268.49 601.15h67.15v3.63h-67.15v-3.63zM268.49 607.2h67.15v3.63h-67.15v-3.63z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M352.28 553.35h83.48v62.92h-83.48v-62.92z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M159.15 0H14.35C6.441-.017.017 6.381 0 14.29v317.09c.017 7.909 6.441 14.307 14.35 14.29h144.8c7.909.017 14.333-6.381 14.35-14.29V14.3A14.317 14.317 0 0 0 159.15 0z",
    transform: "translate(68.97 388.5)",
    fill: "url(#c)"
  }), __jsx("path", {
    d: "M70.3 391.16h170.85v341.7H70.3v-341.7z",
    fill: "#535461"
  }), __jsx("path", {
    d: "M82.88 422.94h145.68v278.12H82.88V422.94z",
    fill: "#F1F1F4"
  }), __jsx("path", {
    d: "M137.18 407.05a1.32 1.32 0 1 1 2.64 0 1.32 1.32 0 0 1-2.64 0zM145.13 405.72h29.14v2.65h-29.14v-2.65zM145.79 714.31a9.27 9.27 0 1 1 18.54 0 9.27 9.27 0 0 1-18.54 0z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M106.05 439.59h99.34v74.87h-99.34v-74.87z",
    fillOpacity: ".1"
  }), __jsx("path", {
    d: "M106.05 523.82h99.34v74.87h-99.34v-74.87z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M115.77 530.3h33.11v18.72h-33.11V530.3z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M156.8 530.3h38.87v4.32H156.8v-4.32zM156.8 537.5h27.36v4.32H156.8v-4.32zM156.8 544.69h38.87v4.32H156.8v-4.32zM115.77 551.89h79.91v4.32h-79.91v-4.32zM115.77 559.09h79.91v4.32h-79.91v-4.32zM115.77 566.29h79.91v4.32h-79.91v-4.32zM115.77 573.49h73.43v4.32h-73.43v-4.32zM115.77 580.69h79.91v4.32h-79.91v-4.32zM115.77 587.89h79.91v4.32h-79.91v-4.32z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M106.05 608.22h99.34v74.87h-99.34v-74.87z",
    fill: "#EEE"
  }), __jsx("path", {
    d: "M115.77 614.7h33.11v18.72h-33.11V614.7z",
    fill: "#6C63FF",
    fillOpacity: ".2"
  }), __jsx("path", {
    d: "M156.8 614.7h38.87v4.32H156.8v-4.32zM156.8 621.9h27.36v4.32H156.8v-4.32zM156.8 629.1h38.87v4.32H156.8v-4.32zM115.77 636.3h79.91v4.32h-79.91v-4.32zM115.77 643.5h79.91v4.32h-79.91v-4.32zM115.77 650.7h79.91v4.32h-79.91v-4.32zM115.77 657.9h73.43v4.32h-73.43v-4.32zM115.77 665.09h79.91v4.32h-79.91v-4.32zM115.77 672.29h79.91v4.32h-79.91v-4.32z",
    fill: "#E6E8EC"
  }), __jsx("path", {
    d: "M956.17 622.29a11.669 11.669 0 0 0 3.83-5.78c.5-2.3-.48-5.05-2.68-5.89-2.46-.94-5.09.76-7.08 2.49-1.99 1.73-4.28 3.69-6.89 3.32a10.48 10.48 0 0 0 3.24-9.81 4.1 4.1 0 0 0-.9-2c-1.37-1.46-3.84-.83-5.48.32-5.2 3.66-6.65 10.72-6.68 17.08-.52-2.29-.08-4.68-.1-7-.02-2.32-.66-5-2.64-6.22a8 8 0 0 0-4-.95c-2.34-.09-4.94.15-6.54 1.86-2 2.12-1.47 5.69.26 8 1.73 2.31 4.35 3.8 6.77 5.42a15.001 15.001 0 0 1 4.84 4.61c.147.26.267.535.36.82h14.65a40.828 40.828 0 0 0 9.04-6.27z",
    fill: "#6C63FF"
  }));
};

Ecres.defaultProps = {
  width: "1089",
  height: "792",
  viewBox: "0 0 1089 792",
  xmlns: "http://www.w3.org/2000/svg"
};
const apdatacont = "It should not be neglected that the accurate predictions of the operational system will require a vast knowledge. To be more specific, any part of the deep analysis makes no difference to The Assistance of Technology-Driven Idea George Albrecht in The Book of";
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "Web Design",
  headcontent: "We are Codecos, a leading Creative Web Design Agency in India. From our Codecos, we specialise in Creative Websites and Digital Marketing.",
  Headimg: Webdesignsvg,
  approchcontent: "Are you a small business that needs to get started? Do you want your business to outshine in the world of digital marketing? Welcome to CodeCos...we will provide best designs that suites to your business or for your budjet Because your business is unique, your website and online presence should represent who you are, what you offer, and how you work. Our web design and development process uncovers your goals, your competitors, and what sets you apart",
  approchdata: [{
    name: "Good Color Pattren",
    content: "Color plays an important role in how we perceive the world around us. From the dark gloomy clouds that tell us it’s about to rain, to the green light that indicates it’s safe to cross the road, its influence is so deeply ingrained in everyday life, that often we barely notice it.Selecting a color scheme for a project website is not always easy. Codecos will offer you huge colour combination such as newest , most popular etc.",
    Svg: Colorpatter,
    goto: "#contactus"
  }, {
    name: "Responsive Design",
    content: "Almost every new client these days wants a mobile version of their website. It’s practically essential after all: one design for the BlackBerry, another for the iPhone, , desktops — and all screen resolutions must be compatible, too. Screen sizes are always changing, so it's important that your site can adapt to any screen size, today or in the future. In addition, devices have different features with which we interact with them. For example some of your visitors will be using a touchscreen. Modern responsive design considers all of these things to optimize the experience for everyone. from ",
    Svg: Respdesign,
    goto: "#contactus"
  }, {
    name: "Logo Design",
    content: "Codecos agency that expertize in designing amazing logos for small and medium-sized businesses. Our team is a dedicated group of logo designers, capable of delivering professional logo design as per your needs. . We ensure all our work is original and of superior quality when it comes to custom logo designing for various types of logos; iconic logos, landmarks, monograms and emblems - we have it all. you can use this to your advantage to ensure their first impression of your brand is a positive and memorable one.",
    Svg: Logodesign,
    goto: "#contactus"
  }],
  priceingcontent: "Whether you just need a low and accurate website that looks great or you’re ready for more business-building capabilities . we have a plan for you",
  priceingdata: [{
    ptitle: "BRONZE",
    futrsoffer: ["Coustem Design", "Mobile Responsive", "2 pages", "Icons Integration", "Photo Sourcing", "2 Rounds of Revisions"],
    cost: "27",
    extrfutr: "$6 per additional website page"
  }, {
    ptitle: "SILVER",
    futrsoffer: ["Coustem Design", "Mobile Responsive", "4 pages", "Icons Integration", "Photo Sourcing", "Contact Form", "3 Rounds of Revisions"],
    cost: "54",
    extrfutr: "$6 per additional website page"
  }, {
    ptitle: "GOLD",
    futrsoffer: ["Coustem Design", "Mobile Responsive", "6 pages", "single page application", "Icons Integration", "Google Maps", "404 Redirect", "Photo Sourcing", "Contact Form", "4 Rounds of Revisions"],
    cost: "80",
    extrfutr: "$6 per additional website page"
  }]
}, {
  title: "Web Development",
  headcontent: "Building cutting edge websites that encompass the latest technology.",
  Headimg: Webdev,
  approchcontent: "Are you a small business that needs to get started? Do you want your business to outshine in the world of digital marketing? Welcome to CodeCos...we will provide best designs that suites to your business or for your budjet Because your business is unique, your website and online presence should represent who you are, what you offer, and how you work. Our web design and development process uncovers your goals, your competitors, and what sets you apart",
  approchdata: [{
    name: "Coustem Development",
    content: "We offer custom web development, web design, user experience and usability for large and small businesses. Whether you’re looking to start a website from scratch, website redesign or want to digital marketing for existing website",
    Svg: Webdevcd,
    goto: "#contactus"
  }, {
    name: "Responsive Development",
    content: "Our codecos web development company creates beautiful websites that look good ondesktops , laptops, tablets ,smartphone , we also do on page seo task at beginning of project and for small business owners looking to increase organic traffic in Google",
    Svg: Respdesign,
    goto: "#contactus"
  }, {
    name: "Ui/UX Development",
    content: "Codecos is the best UX/UI services provider in India and other countries specializing in handcrafting beautiful UI / UX designs that meet our client’s vision and goals. Graphic design is a creative process, involving a client and a designer to convey a specific message to a target audience.",
    Svg: UiUx,
    goto: "#contactus"
  }],
  priceingcontent: "Whether you just need a low and accurate website that looks great or you’re ready for more business-building capabilities . we have a plan for you",
  priceingdata: [{
    ptitle: "BRONZE",
    futrsoffer: ["Coustem Development", "Mobile Responsive", "2 pages", "Icons Integration", "Photo Sourcing", "2 Rounds of Revisions"],
    cost: "54",
    extrfutr: "$6 per additional website page"
  }, {
    ptitle: "SILVER",
    futrsoffer: ["Coustem Development", "Mobile Responsive", "4 pages", "Icons Integration", "Photo Sourcing", "Contact Form", "3 Rounds of Revisions"],
    cost: "80",
    extrfutr: "$6 per additional website page"
  }, {
    ptitle: "GOLD",
    futrsoffer: ["Coustem Development", "Mobile Responsive", "6 pages", "single page application", "Icons Integration", "Google Maps", "404 Redirect", "Photo Sourcing", "Contact Form", "4 Rounds of Revisions"],
    cost: "107",
    extrfutr: "$6 per additional website page"
  }]
}, {
  title: "E-commerce",
  headcontent: " we have the in-house skills and experience to deliver a successful E-Commerce project for your business.",
  Headimg: Ecom,
  approchcontent: "Are you a small business that needs to get started? Do you want your business to outshine in the world of digital marketing? Welcome to CodeCos...we will provide best designs that suites to your business or for your budjet Because your business is unique, your website and online presence should represent who you are, what you offer, and how you work. Our web design and development process uncovers your goals, your competitors, and what sets you apart",
  approchdata: [{
    name: "Coustem Development",
    content: "We offer custom web development, web design, user experience and usability for large and small businesses. Whether you’re looking to start a website from scratch, website redesign or want to digital marketing for existing website",
    Svg: Ecdev,
    goto: "#contactus"
  }, {
    name: "Responsive Development",
    content: "Our codecos web development company creates beautiful websites that look good ondesktops , laptops, tablets ,smartphone , we also do on page seo task at beginning of project and for small business owners looking to increase organic traffic in Google",
    Svg: Ecres,
    goto: "#contactus"
  }, {
    name: "Secure Payment",
    content: "online payment is the most important part of e-commerce  CodeCos will not only develop an e-commerce  web development but also it will take care of your  payment transaction to be secure while transacting.",
    Svg: Ecspay,
    goto: "#contactus"
  }, {
    name: "Web View Android Application",
    content: "Responsiveness is the most important thing on any website. but some users show interest in using mobile apps more than the website. so by saving their credentials user trust that the user can easily use it. for that purpose, we will provide you with an e-commerce web view android app.",
    Svg: Mapp,
    goto: "#contactus"
  }],
  priceingcontent: "Whether you just need a low and accurate website that looks great or you’re ready for more business-building capabilities . we have a plan for you",
  priceingdata: [{
    ptitle: "BRONZE",
    futrsoffer: ["Coustem Development", "Mobile Responsive", "10 Products Added", "Google Maps", "Contact Form", "single page application", "Icons Integration", "Photo Sourcing", "2 Rounds of Revisions"],
    cost: "270",
    extrfutr: "Contact us for additional futchers"
  }, {
    ptitle: "SILVER",
    futrsoffer: ["Coustem Development", "Mobile Responsive", "20 Products Added", "Google Maps", "Contact Form", "404 Redirect", "single page application", "Icons Integration", "Photo Sourcing", "Web view Android application", "3 Rounds of Revisions"],
    cost: "540",
    extrfutr: "Contact us for additional futchers"
  }, {
    ptitle: "GOLD",
    futrsoffer: ["Coustem Development", "Mobile Responsive", "30 Products Added", "Google Maps", "Contact Form", "404 Redirect", "single page application", "Icons Integration", "Google Maps", "404 Redirect", "Photo Sourcing", "Web view Android application", "4 Rounds of Revisions"],
    cost: "810",
    extrfutr: "Contact us for additional futchers"
  }]
}]);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      setTimeout(() => {
        throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
      }, 0);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/servies/[id].js":
/*!*******************************!*\
  !*** ./pages/servies/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button */ "./components/button.js");
/* harmony import */ var _components_contactus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contactus */ "./components/contactus.js");
/* harmony import */ var _components_subtitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/subtitle */ "./components/subtitle.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data */ "./data/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\mypc\\Desktop\\codecos\\codecos\\pages\\servies\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MainWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "id__MainWapper",
  componentId: "sc-1vx1iiv-0"
})(["position:relative;z-index:30;"]);
const HomeWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "id__HomeWapper",
  componentId: "sc-1vx1iiv-1"
})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:space-around;& > div{font-size:2.5rem;padding:4rem;width:70%;height:80%;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;@media ", "{padding:0;}@media ", "{width:90%;height:50%;}@media ", "{height:70%;}& > h1{font-size:10rem;font-weight:500;@media ", "{font-size:7rem;}}& > p{font-family:", ";}}& > svg{height:80%;width:80%;padding:4rem;@media ", "{display:none;}}"], props => props.theme.media.tabM, props => props.theme.media.mbL, props => props.theme.media.mbS, props => props.theme.media.mbM, props => props.theme.fonts.second, props => props.theme.media.tabM);
const ApprochWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "id__ApprochWapper",
  componentId: "sc-1vx1iiv-2"
})(["margin:0 4rem;"]);
const ApprochgridWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "id__ApprochgridWapper",
  componentId: "sc-1vx1iiv-3"
})(["& > div:nth-child(even){& > div{order:2;}}& > div{display:flex;align-items:center;margin:8rem 0;@media ", "{flex-direction:column;}@media ", "{margin:5rem 0;}& > svg{width:50%;height:100%;@media ", "{width:100%;padding:4rem;}}& > div{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;font-size:2.5rem;width:60%;margin:0 3rem;@media ", "{order:2;}@media ", "{width:100%;margin:0 0;}& > *{margin:2rem 0;}& > h2{font-weight:500;}& > p{font-size:2.5rem;font-family:", ";}}}"], props => props.theme.media.tabM, props => props.theme.media.mbL, props => props.theme.media.mbL, props => props.theme.media.tabM, props => props.theme.media.mbL, props => props.theme.fonts.second);
const PriceingWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "id__PriceingWapper",
  componentId: "sc-1vx1iiv-4"
})(["margin:0 4rem;"]);
const PriceinggridWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "id__PriceinggridWapper",
  componentId: "sc-1vx1iiv-5"
})(["display:flex;justify-content:space-around;flex-wrap:wrap;font-size:2.8rem;& > div{padding:3rem;border-radius:8px;box-shadow:1px 2px 20px -10px black;margin:2rem;& > h2{text-align:center;font-weight:500;font-size:5rem;}& > ul{font-size:2.5rem;list-style:none;font-family:", ";& > li{margin:2rem 0;}}& > div{display:flex;align-items:center;font-family:", ";& > h2{font-size:5rem;padding:0 3rem;border-right:1px solid;}& > p{font-size:1.7rem;margin:0 1rem;}}}"], props => props.theme.fonts.second, props => props.theme.fonts.second);

const Webdesign = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    id
  } = router.query;

  if (id) {
    const rdata = _data__WEBPACK_IMPORTED_MODULE_5__["default"].filter((dt, i) => {
      let cleanid = id.replace('-', " ");
      let cleantitle = dt.title.replace('-', " ");
      return cleantitle === cleanid;
    });
    const {
      title,
      headcontent,
      Headimg,
      approchcontent,
      approchdata,
      priceingcontent,
      priceingdata
    } = rdata[0];
    return __jsx(MainWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 7
      }
    }, __jsx(HomeWapper, {
      id: "home",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }
    }, title), __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }, headcontent), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "View plans",
      goto: `/servies/${id}/#priceing`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    })), __jsx(Headimg, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }
    })), __jsx(ApprochWapper, {
      id: "approche",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }
    }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Approch",
      info: approchcontent,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }), __jsx(ApprochgridWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }
    }, approchdata.map(({
      name,
      Svg,
      content,
      goto
    }, i) => {
      return __jsx("div", {
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 17
        }
      }, __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 19
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }
      }, `${name}`), __jsx("p", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }
      }, content), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "Contact us",
        goto: `/servies/${id}/${goto}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }
      })), __jsx(Svg, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 19
        }
      }));
    }))), __jsx(PriceingWapper, {
      id: "priceing",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }
    }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Priceing",
      info: priceingcontent,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }
    }), __jsx(PriceinggridWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 11
      }
    }, priceingdata.map(({
      cost,
      extrfutr,
      ptitle,
      futrsoffer
    }, i) => {
      return __jsx("div", {
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 19
        }
      }, ptitle), __jsx("ul", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 19
        }
      }, futrsoffer.map((info, i) => {
        return __jsx("li", {
          key: info,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 30
          }
        }, info);
      })), __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 19
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }
      }, "$", cost), __jsx("p", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }
      }, extrfutr)));
    }))), __jsx(_components_contactus__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 12
      }
    }, "Loading");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Webdesign);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3R1cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1YnRpdGxlLmpzIiwid2VicGFjazovLy8uL2RhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NlcnZpZXMvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJCdXR0b25XYXBwZXIiLCJzdHlsZWQiLCJhIiwiQnV0dG9uIiwidGV4dCIsImdvdG8iLCJTcHBvcnRzIiwiQ29udGFjdHVzV2FwcGVyIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIm1lZGlhIiwibWJTIiwiQ29udGFjdHVzY29udGluZXIiLCJ0YWJNIiwibWJNIiwiQ29udGFjdCIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImluY2x1ZGVzIiwiY29sb3IiLCJTdWJUaXRsZVdhcHBlciIsIm1iTCIsImZvbnRzIiwic2Vjb25kIiwiU3ViVGl0bGUiLCJ0aXRsZSIsImluZm8iLCJXZWJkZXNpZ25zdmciLCJSZXNwZGVzaWduIiwiQ29sb3JwYXR0ZXIiLCJMb2dvZGVzaWduIiwiV2ViZGV2IiwiV2ViZGV2Y2QiLCJVaVV4IiwiRWNvbSIsIk1hcHAiLCJFY3NwYXkiLCJFY2RldiIsIkVjcmVzIiwiYXBkYXRhY29udCIsImhlYWRjb250ZW50IiwiSGVhZGltZyIsImFwcHJvY2hjb250ZW50IiwiYXBwcm9jaGRhdGEiLCJuYW1lIiwiY29udGVudCIsIlN2ZyIsInByaWNlaW5nY29udGVudCIsInByaWNlaW5nZGF0YSIsInB0aXRsZSIsImZ1dHJzb2ZmZXIiLCJjb3N0IiwiZXh0cmZ1dHIiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiZG9jdW1lbnQiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJ2YWx1ZSIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwic2V0VGltZW91dCIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwic3RhdGUiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJ1cGRhdGUiLCJtb2QiLCJkYXRhIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImtleSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIk1haW5XYXBwZXIiLCJIb21lV2FwcGVyIiwic2VjdGlvbiIsIkFwcHJvY2hXYXBwZXIiLCJBcHByb2NoZ3JpZFdhcHBlciIsIlByaWNlaW5nV2FwcGVyIiwiUHJpY2VpbmdncmlkV2FwcGVyIiwiV2ViZGVzaWduIiwidXNlUm91dGVyIiwiaWQiLCJyZGF0YSIsImZpbHRlciIsImR0IiwiY2xlYW5pZCIsImNsZWFudGl0bGUiLCJtYXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQSxNQUFNQSxZQUFZLEdBQUdDLHdEQUFNLENBQUNDLENBQVY7QUFBQTtBQUFBO0FBQUEsZ1JBQWxCOztBQWlCQSxNQUFNQyxNQUFNLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBRCxLQUFvQjtBQUNqQyxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQUksR0FBR0EsSUFBSCxHQUFVLEdBQTFCO0FBQStCLFlBQVEsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWVELElBQWYsQ0FERixDQURGO0FBS0QsQ0FORDs7QUFPZUQscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7O0lBRU9HLE8sWUFBQUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPOzs7Ozs7QUFDUDtBQUVBLE1BQU1DLGVBQWUsR0FBR04sd0RBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSw4Q0FFVEMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsR0FGbkIsQ0FBckI7QUFNQSxNQUFNQyxpQkFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxXOzs7Ozs7O0lBQ0FDLFUsWUFBQUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsVTs7Ozs7R0FFUDs7SUFDT0MsTSxZQUFBQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE07Ozs7Ozs7SUFDQUMsUSxZQUFBQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxROzs7Ozs7O0lBQ0FDLEksWUFBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEk7Ozs7O0dBRVA7O0lBQ09DLEksWUFBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxJOzs7Ozs7O0lBQ0FDLEksWUFBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zZXJ2aWVzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NlcnZpZXMvW2lkXS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmNvbnN0IEJ1dHRvbldhcHBlciA9IHN0eWxlZC5hYFxyXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgxYTc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICBib3gtc2hhZG93OiAxcHggMnB4IDE1cHggLTVweCBibGFjaztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA4MWE3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDIwcHggLTVweCBibGFjaztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgdGV4dCwgZ290byB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2dvdG8gPyBnb3RvIDogXCIjXCJ9IHBhc3NIcmVmPlxyXG4gICAgICA8QnV0dG9uV2FwcGVyPnt0ZXh0fTwvQnV0dG9uV2FwcGVyPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBTcHBvcnRzIGZyb20gXCIuLi9pbWFnZXMvc3Bwb3J0LnN2Z1wiO1xyXG5pbXBvcnQgU3VidGl0bGUgZnJvbSBcIi4vc3VidGl0bGVcIjtcclxuXHJcbmNvbnN0IENvbnRhY3R1c1dhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiA1cmVtO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJTfSB7XHJcbiAgICBtYXJnaW46IDNyZW07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBDb250YWN0dXNjb250aW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICYgPiBzdmcge1xyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS50YWJNfSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYgPiBmb3JtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbjogMCA0cmVtO1xyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYlN9IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgICAmID4gbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IHNlbGVjdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZWEyYzc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJiA+IHRleHRhcmVhIHtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmYTNjODtcclxuICAgICAgfVxyXG4gICAgICAmID4gaW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmEzYzg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgxYTc7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTVweCAtNXB4IGJsYWNrO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMwMDgxYTc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAyMHB4IC01cHggYmxhY2s7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iTX0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdzdWNjZXNzPXRydWUnKSApIHtcclxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7c3VjY2VzcyAmJiAoXHJcbiAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbid9fT5cclxuICAgIFN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQgZm9ybSFcclxuICA8L3A+XHJcbil9XHJcbiAgICA8Q29udGFjdHVzV2FwcGVyIGlkPVwiY29udGFjdHVzXCI+XHJcbiAgICAgIDxTdWJ0aXRsZVxyXG4gICAgICAgIHRpdGxlPVwiQ29udGFjdCB1c1wiXHJcbiAgICAgICAgaW5mbz1cIkhhdmUgYSBwcm9qZWN0PyBDb250YWN0IHVzIGFuZCBsZXQncyB3b3JrIHRvZ2V0aGVyIVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb250YWN0dXNjb250aW5lcj5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgbmFtZT1cImNvbnRhY3RcIlxyXG4gICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICBhY3Rpb249XCIvP3N1Y2Nlc3M9dHJ1ZVwiXHJcbiAgICAgICAgICBkYXRhLW5ldGxpZnk9XCJ0cnVlXCJcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3UgYXJlIE5hbWVcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91IGFyZSBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91IGFyZSBQaG9uZVwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZXJ2aWVzdHlwZVwiPlNlcnZpZXMgVHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNlcnZpZXNbXVwiIGlkPVwic2Vydmllc3R5cGVcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiV2ViIGRlc2lnblwiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgIFdlYiBkZXNpZ25cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiV2ViIERldmVsb3BtZW50XCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgV2ViIGRldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkUtY29tbWVyY2VcIiBrZXk9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICBFLWNvbW1lcmNlIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRldGlsZXNcIj5EZXRpbGVzPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY29scz1cIjMwXCJcclxuICAgICAgICAgICAgICBpZD1cImRldGlsZXNcIlxyXG4gICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHJvamVjdCBpbmZvXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91IGFyZSBwcm9qZWN0IGRldGFpbHNcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmV0bGlmeS1yZWNhcHRjaGE9XCJ0cnVlXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImxldCdzIHRhbGtcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8U3Bwb3J0cyAvPlxyXG4gICAgICA8L0NvbnRhY3R1c2NvbnRpbmVyPlxyXG4gICAgPC9Db250YWN0dXNXYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuY29uc3QgU3ViVGl0bGVXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iTH0ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgJiA+IHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmR9O1xyXG4gIH1cclxuICAmID4gaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuXHJcbiAgICAmID4gcCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogNTtcclxuICAgIH1cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZhM2M4O1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICBib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFN1YlRpdGxlID0gKHsgdGl0bGUsIGluZm8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3ViVGl0bGVXYXBwZXI+XHJcbiAgICAgIDxoMT5cclxuICAgICAgICA8cD57dGl0bGV9PC9wPlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8cD57aW5mb308L3A+XHJcbiAgICA8L1N1YlRpdGxlV2FwcGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN1YlRpdGxlO1xyXG4iLCIvLy8gd2ViIGRlc2lnbiB1c2luZyBzdmdzXHJcbmltcG9ydCBXZWJkZXNpZ25zdmcgZnJvbSBcIi4uL2ltYWdlcy93ZWJkZXNpZ24uc3ZnXCI7XHJcbmltcG9ydCBSZXNwZGVzaWduIGZyb20gXCIuLi9pbWFnZXMvcmVzcGRlc2lnbi5zdmdcIjtcclxuaW1wb3J0IENvbG9ycGF0dGVyIGZyb20gXCIuLi9pbWFnZXMvY29sb3JwYXR0ZXIuc3ZnXCI7XHJcbmltcG9ydCBMb2dvZGVzaWduIGZyb20gXCIuLi9pbWFnZXMvbG9nb2Rlc2lnbi5zdmdcIjtcclxuXHJcbi8vLyB3ZWIgZGV2ZWxvcG1lbnQgdXNpbmcgc3Znc1xyXG5pbXBvcnQgV2ViZGV2IGZyb20gXCIuLi9pbWFnZXMvd2ViZGV2LnN2Z1wiO1xyXG5pbXBvcnQgV2ViZGV2Y2QgZnJvbSBcIi4uL2ltYWdlcy93ZWJkZXZjZC5zdmdcIjtcclxuaW1wb3J0IFVpVXggZnJvbSBcIi4uL2ltYWdlcy91aXV4LnN2Z1wiO1xyXG5cclxuLy8vIGUtY29tZXJzIGRldmVsb3BtZW50IHVzaW5nIHN2Z3NcclxuaW1wb3J0IEVjb20gZnJvbSBcIi4uL2ltYWdlcy9lY29tLnN2Z1wiO1xyXG5pbXBvcnQgTWFwcCBmcm9tIFwiLi4vaW1hZ2VzL21icGF5LnN2Z1wiO1xyXG5pbXBvcnQgRWNzcGF5IGZyb20gXCIuLi9pbWFnZXMvZWNzcGF5LnN2Z1wiO1xyXG5pbXBvcnQgRWNkZXYgZnJvbSBcIi4uL2ltYWdlcy9lY2Rldi5zdmdcIjtcclxuaW1wb3J0IEVjcmVzIGZyb20gXCIuLi9pbWFnZXMvZWNyZXMuc3ZnXCI7XHJcblxyXG5jb25zdCBhcGRhdGFjb250ID1cclxuICBcIkl0IHNob3VsZCBub3QgYmUgbmVnbGVjdGVkIHRoYXQgdGhlIGFjY3VyYXRlIHByZWRpY3Rpb25zIG9mIHRoZSBvcGVyYXRpb25hbCBzeXN0ZW0gd2lsbCByZXF1aXJlIGEgdmFzdCBrbm93bGVkZ2UuIFRvIGJlIG1vcmUgc3BlY2lmaWMsIGFueSBwYXJ0IG9mIHRoZSBkZWVwIGFuYWx5c2lzIG1ha2VzIG5vIGRpZmZlcmVuY2UgdG8gVGhlIEFzc2lzdGFuY2Ugb2YgVGVjaG5vbG9neS1Ecml2ZW4gSWRlYSBHZW9yZ2UgQWxicmVjaHQgaW4gVGhlIEJvb2sgb2ZcIjtcclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIldlYiBEZXNpZ25cIixcclxuICAgIGhlYWRjb250ZW50OlxyXG4gICAgICBcIldlIGFyZSBDb2RlY29zLCBhIGxlYWRpbmcgQ3JlYXRpdmUgV2ViIERlc2lnbiBBZ2VuY3kgaW4gSW5kaWEuIEZyb20gb3VyIENvZGVjb3MsIHdlIHNwZWNpYWxpc2UgaW4gQ3JlYXRpdmUgV2Vic2l0ZXMgYW5kIERpZ2l0YWwgTWFya2V0aW5nLlwiLFxyXG4gICAgSGVhZGltZzogV2ViZGVzaWduc3ZnLFxyXG4gICAgYXBwcm9jaGNvbnRlbnQ6XHJcbiAgICAgIFwiQXJlIHlvdSBhIHNtYWxsIGJ1c2luZXNzIHRoYXQgbmVlZHMgdG8gZ2V0IHN0YXJ0ZWQ/IERvIHlvdSB3YW50IHlvdXIgYnVzaW5lc3MgdG8gb3V0c2hpbmUgaW4gdGhlIHdvcmxkIG9mIGRpZ2l0YWwgbWFya2V0aW5nPyBXZWxjb21lIHRvIENvZGVDb3MuLi53ZSB3aWxsIHByb3ZpZGUgYmVzdCBkZXNpZ25zIHRoYXQgc3VpdGVzIHRvIHlvdXIgYnVzaW5lc3Mgb3IgZm9yIHlvdXIgYnVkamV0IEJlY2F1c2UgeW91ciBidXNpbmVzcyBpcyB1bmlxdWUsIHlvdXIgd2Vic2l0ZSBhbmQgb25saW5lIHByZXNlbmNlIHNob3VsZCByZXByZXNlbnQgd2hvIHlvdSBhcmUsIHdoYXQgeW91IG9mZmVyLCBhbmQgaG93IHlvdSB3b3JrLiBPdXIgd2ViIGRlc2lnbiBhbmQgZGV2ZWxvcG1lbnQgcHJvY2VzcyB1bmNvdmVycyB5b3VyIGdvYWxzLCB5b3VyIGNvbXBldGl0b3JzLCBhbmQgd2hhdCBzZXRzIHlvdSBhcGFydFwiLFxyXG4gICAgYXBwcm9jaGRhdGE6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiR29vZCBDb2xvciBQYXR0cmVuXCIsXHJcbiAgICAgICAgY29udGVudDogXCJDb2xvciBwbGF5cyBhbiBpbXBvcnRhbnQgcm9sZSBpbiBob3cgd2UgcGVyY2VpdmUgdGhlIHdvcmxkIGFyb3VuZCB1cy4gRnJvbSB0aGUgZGFyayBnbG9vbXkgY2xvdWRzIHRoYXQgdGVsbCB1cyBpdOKAmXMgYWJvdXQgdG8gcmFpbiwgdG8gdGhlIGdyZWVuIGxpZ2h0IHRoYXQgaW5kaWNhdGVzIGl04oCZcyBzYWZlIHRvIGNyb3NzIHRoZSByb2FkLCBpdHMgaW5mbHVlbmNlIGlzIHNvIGRlZXBseSBpbmdyYWluZWQgaW4gZXZlcnlkYXkgbGlmZSwgdGhhdCBvZnRlbiB3ZSBiYXJlbHkgbm90aWNlIGl0LlNlbGVjdGluZyBhIGNvbG9yIHNjaGVtZSBmb3IgYSBwcm9qZWN0IHdlYnNpdGUgaXMgbm90IGFsd2F5cyBlYXN5LiBDb2RlY29zIHdpbGwgb2ZmZXIgeW91IGh1Z2UgY29sb3VyIGNvbWJpbmF0aW9uIHN1Y2ggYXMgbmV3ZXN0ICwgbW9zdCBwb3B1bGFyIGV0Yy5cIixcclxuICAgICAgICBTdmc6IENvbG9ycGF0dGVyLFxyXG4gICAgICAgIGdvdG86IFwiI2NvbnRhY3R1c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJSZXNwb25zaXZlIERlc2lnblwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiQWxtb3N0IGV2ZXJ5IG5ldyBjbGllbnQgdGhlc2UgZGF5cyB3YW50cyBhIG1vYmlsZSB2ZXJzaW9uIG9mIHRoZWlyIHdlYnNpdGUuIEl04oCZcyBwcmFjdGljYWxseSBlc3NlbnRpYWwgYWZ0ZXIgYWxsOiBvbmUgZGVzaWduIGZvciB0aGUgQmxhY2tCZXJyeSwgYW5vdGhlciBmb3IgdGhlIGlQaG9uZSwgLCBkZXNrdG9wcyDigJQgYW5kIGFsbCBzY3JlZW4gcmVzb2x1dGlvbnMgbXVzdCBiZSBjb21wYXRpYmxlLCB0b28uIFNjcmVlbiBzaXplcyBhcmUgYWx3YXlzIGNoYW5naW5nLCBzbyBpdCdzIGltcG9ydGFudCB0aGF0IHlvdXIgc2l0ZSBjYW4gYWRhcHQgdG8gYW55IHNjcmVlbiBzaXplLCB0b2RheSBvciBpbiB0aGUgZnV0dXJlLiBJbiBhZGRpdGlvbiwgZGV2aWNlcyBoYXZlIGRpZmZlcmVudCBmZWF0dXJlcyB3aXRoIHdoaWNoIHdlIGludGVyYWN0IHdpdGggdGhlbS4gRm9yIGV4YW1wbGUgc29tZSBvZiB5b3VyIHZpc2l0b3JzIHdpbGwgYmUgdXNpbmcgYSB0b3VjaHNjcmVlbi4gTW9kZXJuIHJlc3BvbnNpdmUgZGVzaWduIGNvbnNpZGVycyBhbGwgb2YgdGhlc2UgdGhpbmdzIHRvIG9wdGltaXplIHRoZSBleHBlcmllbmNlIGZvciBldmVyeW9uZS4gZnJvbSBcIixcclxuICAgICAgICBTdmc6IFJlc3BkZXNpZ24sXHJcbiAgICAgICAgZ290bzogXCIjY29udGFjdHVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkxvZ28gRGVzaWduXCIsXHJcbiAgICAgICAgY29udGVudDogXCJDb2RlY29zIGFnZW5jeSB0aGF0IGV4cGVydGl6ZSBpbiBkZXNpZ25pbmcgYW1hemluZyBsb2dvcyBmb3Igc21hbGwgYW5kIG1lZGl1bS1zaXplZCBidXNpbmVzc2VzLiBPdXIgdGVhbSBpcyBhIGRlZGljYXRlZCBncm91cCBvZiBsb2dvIGRlc2lnbmVycywgY2FwYWJsZSBvZiBkZWxpdmVyaW5nIHByb2Zlc3Npb25hbCBsb2dvIGRlc2lnbiBhcyBwZXIgeW91ciBuZWVkcy4gLiBXZSBlbnN1cmUgYWxsIG91ciB3b3JrIGlzIG9yaWdpbmFsIGFuZCBvZiBzdXBlcmlvciBxdWFsaXR5IHdoZW4gaXQgY29tZXMgdG8gY3VzdG9tIGxvZ28gZGVzaWduaW5nIGZvciB2YXJpb3VzIHR5cGVzIG9mIGxvZ29zOyBpY29uaWMgbG9nb3MsIGxhbmRtYXJrcywgbW9ub2dyYW1zIGFuZCBlbWJsZW1zIC0gd2UgaGF2ZSBpdCBhbGwuIHlvdSBjYW4gdXNlIHRoaXMgdG8geW91ciBhZHZhbnRhZ2UgdG8gZW5zdXJlIHRoZWlyIGZpcnN0IGltcHJlc3Npb24gb2YgeW91ciBicmFuZCBpcyBhIHBvc2l0aXZlIGFuZCBtZW1vcmFibGUgb25lLlwiLFxyXG4gICAgICAgIFN2ZzogTG9nb2Rlc2lnbixcclxuICAgICAgICBnb3RvOiBcIiNjb250YWN0dXNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBwcmljZWluZ2NvbnRlbnQ6XHJcbiAgICAgIFwiV2hldGhlciB5b3UganVzdCBuZWVkIGEgbG93IGFuZCBhY2N1cmF0ZSB3ZWJzaXRlIHRoYXQgbG9va3MgZ3JlYXQgb3IgeW914oCZcmUgcmVhZHkgZm9yIG1vcmUgYnVzaW5lc3MtYnVpbGRpbmcgY2FwYWJpbGl0aWVzIC4gd2UgaGF2ZSBhIHBsYW4gZm9yIHlvdVwiLFxyXG4gICAgcHJpY2VpbmdkYXRhOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwdGl0bGU6IFwiQlJPTlpFXCIsXHJcbiAgICAgICAgZnV0cnNvZmZlcjogW1xyXG4gICAgICAgICAgXCJDb3VzdGVtIERlc2lnblwiLFxyXG4gICAgICAgICAgXCJNb2JpbGUgUmVzcG9uc2l2ZVwiLFxyXG4gICAgICAgICAgXCIyIHBhZ2VzXCIsXHJcbiAgICAgICAgICBcIkljb25zIEludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICBcIlBob3RvIFNvdXJjaW5nXCIsXHJcbiAgICAgICAgICBcIjIgUm91bmRzIG9mIFJldmlzaW9uc1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29zdDogXCIyN1wiLFxyXG4gICAgICAgIGV4dHJmdXRyOiBcIiQ2IHBlciBhZGRpdGlvbmFsIHdlYnNpdGUgcGFnZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcHRpdGxlOiBcIlNJTFZFUlwiLFxyXG4gICAgICAgIGZ1dHJzb2ZmZXI6IFtcclxuICAgICAgICAgIFwiQ291c3RlbSBEZXNpZ25cIixcclxuICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmVcIixcclxuICAgICAgICAgIFwiNCBwYWdlc1wiLFxyXG4gICAgICAgICAgXCJJY29ucyBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgXCJQaG90byBTb3VyY2luZ1wiLFxyXG4gICAgICAgICAgXCJDb250YWN0IEZvcm1cIixcclxuICAgICAgICAgIFwiMyBSb3VuZHMgb2YgUmV2aXNpb25zXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb3N0OiBcIjU0XCIsXHJcbiAgICAgICAgZXh0cmZ1dHI6IFwiJDYgcGVyIGFkZGl0aW9uYWwgd2Vic2l0ZSBwYWdlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwdGl0bGU6IFwiR09MRFwiLFxyXG4gICAgICAgIGZ1dHJzb2ZmZXI6IFtcclxuICAgICAgICAgIFwiQ291c3RlbSBEZXNpZ25cIixcclxuICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmVcIixcclxuICAgICAgICAgIFwiNiBwYWdlc1wiLFxyXG4gICAgICAgICAgXCJzaW5nbGUgcGFnZSBhcHBsaWNhdGlvblwiLFxyXG4gICAgICAgICAgXCJJY29ucyBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgXCJHb29nbGUgTWFwc1wiLFxyXG4gICAgICAgICAgXCI0MDQgUmVkaXJlY3RcIixcclxuICAgICAgICAgIFwiUGhvdG8gU291cmNpbmdcIixcclxuICAgICAgICAgIFwiQ29udGFjdCBGb3JtXCIsXHJcbiAgICAgICAgICBcIjQgUm91bmRzIG9mIFJldmlzaW9uc1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29zdDogXCI4MFwiLFxyXG4gICAgICAgIGV4dHJmdXRyOiBcIiQ2IHBlciBhZGRpdGlvbmFsIHdlYnNpdGUgcGFnZVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIldlYiBEZXZlbG9wbWVudFwiLFxyXG4gICAgaGVhZGNvbnRlbnQ6XHJcbiAgICAgIFwiQnVpbGRpbmcgY3V0dGluZyBlZGdlIHdlYnNpdGVzIHRoYXQgZW5jb21wYXNzIHRoZSBsYXRlc3QgdGVjaG5vbG9neS5cIixcclxuICAgIEhlYWRpbWc6IFdlYmRldixcclxuICAgIGFwcHJvY2hjb250ZW50OlxyXG4gICAgICBcIkFyZSB5b3UgYSBzbWFsbCBidXNpbmVzcyB0aGF0IG5lZWRzIHRvIGdldCBzdGFydGVkPyBEbyB5b3Ugd2FudCB5b3VyIGJ1c2luZXNzIHRvIG91dHNoaW5lIGluIHRoZSB3b3JsZCBvZiBkaWdpdGFsIG1hcmtldGluZz8gV2VsY29tZSB0byBDb2RlQ29zLi4ud2Ugd2lsbCBwcm92aWRlIGJlc3QgZGVzaWducyB0aGF0IHN1aXRlcyB0byB5b3VyIGJ1c2luZXNzIG9yIGZvciB5b3VyIGJ1ZGpldCBCZWNhdXNlIHlvdXIgYnVzaW5lc3MgaXMgdW5pcXVlLCB5b3VyIHdlYnNpdGUgYW5kIG9ubGluZSBwcmVzZW5jZSBzaG91bGQgcmVwcmVzZW50IHdobyB5b3UgYXJlLCB3aGF0IHlvdSBvZmZlciwgYW5kIGhvdyB5b3Ugd29yay4gT3VyIHdlYiBkZXNpZ24gYW5kIGRldmVsb3BtZW50IHByb2Nlc3MgdW5jb3ZlcnMgeW91ciBnb2FscywgeW91ciBjb21wZXRpdG9ycywgYW5kIHdoYXQgc2V0cyB5b3UgYXBhcnRcIixcclxuICAgIGFwcHJvY2hkYXRhOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNvdXN0ZW0gRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICBjb250ZW50OiBcIldlIG9mZmVyIGN1c3RvbSB3ZWIgZGV2ZWxvcG1lbnQsIHdlYiBkZXNpZ24sIHVzZXIgZXhwZXJpZW5jZSBhbmQgdXNhYmlsaXR5IGZvciBsYXJnZSBhbmQgc21hbGwgYnVzaW5lc3Nlcy4gV2hldGhlciB5b3XigJlyZSBsb29raW5nIHRvIHN0YXJ0IGEgd2Vic2l0ZSBmcm9tIHNjcmF0Y2gsIHdlYnNpdGUgcmVkZXNpZ24gb3Igd2FudCB0byBkaWdpdGFsIG1hcmtldGluZyBmb3IgZXhpc3Rpbmcgd2Vic2l0ZVwiLFxyXG4gICAgICAgIFN2ZzogV2ViZGV2Y2QsXHJcbiAgICAgICAgZ290bzogXCIjY29udGFjdHVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlJlc3BvbnNpdmUgRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICBjb250ZW50OiBcIk91ciBjb2RlY29zIHdlYiBkZXZlbG9wbWVudCBjb21wYW55IGNyZWF0ZXMgYmVhdXRpZnVsIHdlYnNpdGVzIHRoYXQgbG9vayBnb29kIG9uZGVza3RvcHMgLCBsYXB0b3BzLCB0YWJsZXRzICxzbWFydHBob25lICwgd2UgYWxzbyBkbyBvbiBwYWdlIHNlbyB0YXNrIGF0IGJlZ2lubmluZyBvZiBwcm9qZWN0IGFuZCBmb3Igc21hbGwgYnVzaW5lc3Mgb3duZXJzIGxvb2tpbmcgdG8gaW5jcmVhc2Ugb3JnYW5pYyB0cmFmZmljIGluIEdvb2dsZVwiLFxyXG4gICAgICAgIFN2ZzogUmVzcGRlc2lnbixcclxuICAgICAgICBnb3RvOiBcIiNjb250YWN0dXNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiVWkvVVggRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICBjb250ZW50OiBcIkNvZGVjb3MgaXMgdGhlIGJlc3QgVVgvVUkgc2VydmljZXMgcHJvdmlkZXIgaW4gSW5kaWEgYW5kIG90aGVyIGNvdW50cmllcyBzcGVjaWFsaXppbmcgaW4gaGFuZGNyYWZ0aW5nIGJlYXV0aWZ1bCBVSSAvIFVYIGRlc2lnbnMgdGhhdCBtZWV0IG91ciBjbGllbnTigJlzIHZpc2lvbiBhbmQgZ29hbHMuIEdyYXBoaWMgZGVzaWduIGlzIGEgY3JlYXRpdmUgcHJvY2VzcywgaW52b2x2aW5nIGEgY2xpZW50IGFuZCBhIGRlc2lnbmVyIHRvIGNvbnZleSBhIHNwZWNpZmljIG1lc3NhZ2UgdG8gYSB0YXJnZXQgYXVkaWVuY2UuXCIsXHJcbiAgICAgICAgU3ZnOiBVaVV4LFxyXG4gICAgICAgIGdvdG86IFwiI2NvbnRhY3R1c1wiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHByaWNlaW5nY29udGVudDpcclxuICAgICAgXCJXaGV0aGVyIHlvdSBqdXN0IG5lZWQgYSBsb3cgYW5kIGFjY3VyYXRlIHdlYnNpdGUgdGhhdCBsb29rcyBncmVhdCBvciB5b3XigJlyZSByZWFkeSBmb3IgbW9yZSBidXNpbmVzcy1idWlsZGluZyBjYXBhYmlsaXRpZXMgLiB3ZSBoYXZlIGEgcGxhbiBmb3IgeW91XCIsXHJcbiAgICBwcmljZWluZ2RhdGE6IFtcclxuICAgICAge1xyXG4gICAgICAgIHB0aXRsZTogXCJCUk9OWkVcIixcclxuICAgICAgICBmdXRyc29mZmVyOiBbXHJcbiAgICAgICAgICBcIkNvdXN0ZW0gRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmVcIixcclxuICAgICAgICAgIFwiMiBwYWdlc1wiLFxyXG4gICAgICAgICAgXCJJY29ucyBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgXCJQaG90byBTb3VyY2luZ1wiLFxyXG4gICAgICAgICAgXCIyIFJvdW5kcyBvZiBSZXZpc2lvbnNcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvc3Q6IFwiNTRcIixcclxuICAgICAgICBleHRyZnV0cjogXCIkNiBwZXIgYWRkaXRpb25hbCB3ZWJzaXRlIHBhZ2VcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHB0aXRsZTogXCJTSUxWRVJcIixcclxuICAgICAgICBmdXRyc29mZmVyOiBbXHJcbiAgICAgICAgICBcIkNvdXN0ZW0gRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmVcIixcclxuICAgICAgICAgIFwiNCBwYWdlc1wiLFxyXG4gICAgICAgICAgXCJJY29ucyBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgXCJQaG90byBTb3VyY2luZ1wiLFxyXG4gICAgICAgICAgXCJDb250YWN0IEZvcm1cIixcclxuICAgICAgICAgIFwiMyBSb3VuZHMgb2YgUmV2aXNpb25zXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb3N0OiBcIjgwXCIsXHJcbiAgICAgICAgZXh0cmZ1dHI6IFwiJDYgcGVyIGFkZGl0aW9uYWwgd2Vic2l0ZSBwYWdlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwdGl0bGU6IFwiR09MRFwiLFxyXG4gICAgICAgIGZ1dHJzb2ZmZXI6IFtcclxuICAgICAgICAgIFwiQ291c3RlbSBEZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgXCJNb2JpbGUgUmVzcG9uc2l2ZVwiLFxyXG4gICAgICAgICAgXCI2IHBhZ2VzXCIsXHJcbiAgICAgICAgICBcInNpbmdsZSBwYWdlIGFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICBcIkljb25zIEludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICBcIkdvb2dsZSBNYXBzXCIsXHJcbiAgICAgICAgICBcIjQwNCBSZWRpcmVjdFwiLFxyXG4gICAgICAgICAgXCJQaG90byBTb3VyY2luZ1wiLFxyXG4gICAgICAgICAgXCJDb250YWN0IEZvcm1cIixcclxuICAgICAgICAgIFwiNCBSb3VuZHMgb2YgUmV2aXNpb25zXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb3N0OiBcIjEwN1wiLFxyXG4gICAgICAgIGV4dHJmdXRyOiBcIiQ2IHBlciBhZGRpdGlvbmFsIHdlYnNpdGUgcGFnZVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkUtY29tbWVyY2VcIixcclxuICAgIGhlYWRjb250ZW50OlxyXG4gICAgICBcIiB3ZSBoYXZlIHRoZSBpbi1ob3VzZSBza2lsbHMgYW5kIGV4cGVyaWVuY2UgdG8gZGVsaXZlciBhIHN1Y2Nlc3NmdWwgRS1Db21tZXJjZSBwcm9qZWN0IGZvciB5b3VyIGJ1c2luZXNzLlwiLFxyXG4gICAgSGVhZGltZzogRWNvbSxcclxuICAgIGFwcHJvY2hjb250ZW50OlxyXG4gICAgICBcIkFyZSB5b3UgYSBzbWFsbCBidXNpbmVzcyB0aGF0IG5lZWRzIHRvIGdldCBzdGFydGVkPyBEbyB5b3Ugd2FudCB5b3VyIGJ1c2luZXNzIHRvIG91dHNoaW5lIGluIHRoZSB3b3JsZCBvZiBkaWdpdGFsIG1hcmtldGluZz8gV2VsY29tZSB0byBDb2RlQ29zLi4ud2Ugd2lsbCBwcm92aWRlIGJlc3QgZGVzaWducyB0aGF0IHN1aXRlcyB0byB5b3VyIGJ1c2luZXNzIG9yIGZvciB5b3VyIGJ1ZGpldCBCZWNhdXNlIHlvdXIgYnVzaW5lc3MgaXMgdW5pcXVlLCB5b3VyIHdlYnNpdGUgYW5kIG9ubGluZSBwcmVzZW5jZSBzaG91bGQgcmVwcmVzZW50IHdobyB5b3UgYXJlLCB3aGF0IHlvdSBvZmZlciwgYW5kIGhvdyB5b3Ugd29yay4gT3VyIHdlYiBkZXNpZ24gYW5kIGRldmVsb3BtZW50IHByb2Nlc3MgdW5jb3ZlcnMgeW91ciBnb2FscywgeW91ciBjb21wZXRpdG9ycywgYW5kIHdoYXQgc2V0cyB5b3UgYXBhcnRcIixcclxuICAgIGFwcHJvY2hkYXRhOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNvdXN0ZW0gRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICBjb250ZW50OiBcIldlIG9mZmVyIGN1c3RvbSB3ZWIgZGV2ZWxvcG1lbnQsIHdlYiBkZXNpZ24sIHVzZXIgZXhwZXJpZW5jZSBhbmQgdXNhYmlsaXR5IGZvciBsYXJnZSBhbmQgc21hbGwgYnVzaW5lc3Nlcy4gV2hldGhlciB5b3XigJlyZSBsb29raW5nIHRvIHN0YXJ0IGEgd2Vic2l0ZSBmcm9tIHNjcmF0Y2gsIHdlYnNpdGUgcmVkZXNpZ24gb3Igd2FudCB0byBkaWdpdGFsIG1hcmtldGluZyBmb3IgZXhpc3Rpbmcgd2Vic2l0ZVwiLFxyXG4gICAgICAgIFN2ZzogRWNkZXYsXHJcbiAgICAgICAgZ290bzogXCIjY29udGFjdHVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlJlc3BvbnNpdmUgRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICBjb250ZW50OiBcIk91ciBjb2RlY29zIHdlYiBkZXZlbG9wbWVudCBjb21wYW55IGNyZWF0ZXMgYmVhdXRpZnVsIHdlYnNpdGVzIHRoYXQgbG9vayBnb29kIG9uZGVza3RvcHMgLCBsYXB0b3BzLCB0YWJsZXRzICxzbWFydHBob25lICwgd2UgYWxzbyBkbyBvbiBwYWdlIHNlbyB0YXNrIGF0IGJlZ2lubmluZyBvZiBwcm9qZWN0IGFuZCBmb3Igc21hbGwgYnVzaW5lc3Mgb3duZXJzIGxvb2tpbmcgdG8gaW5jcmVhc2Ugb3JnYW5pYyB0cmFmZmljIGluIEdvb2dsZVwiLFxyXG4gICAgICAgIFN2ZzogRWNyZXMsXHJcbiAgICAgICAgZ290bzogXCIjY29udGFjdHVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNlY3VyZSBQYXltZW50XCIsXHJcbiAgICAgICAgY29udGVudDogXCJvbmxpbmUgcGF5bWVudCBpcyB0aGUgbW9zdCBpbXBvcnRhbnQgcGFydCBvZiBlLWNvbW1lcmNlICBDb2RlQ29zIHdpbGwgbm90IG9ubHkgZGV2ZWxvcCBhbiBlLWNvbW1lcmNlICB3ZWIgZGV2ZWxvcG1lbnQgYnV0IGFsc28gaXQgd2lsbCB0YWtlIGNhcmUgb2YgeW91ciAgcGF5bWVudCB0cmFuc2FjdGlvbiB0byBiZSBzZWN1cmUgd2hpbGUgdHJhbnNhY3RpbmcuXCIsXHJcbiAgICAgICAgU3ZnOiBFY3NwYXksXHJcbiAgICAgICAgZ290bzogXCIjY29udGFjdHVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIldlYiBWaWV3IEFuZHJvaWQgQXBwbGljYXRpb25cIixcclxuICAgICAgICBjb250ZW50OiBcIlJlc3BvbnNpdmVuZXNzIGlzIHRoZSBtb3N0IGltcG9ydGFudCB0aGluZyBvbiBhbnkgd2Vic2l0ZS4gYnV0IHNvbWUgdXNlcnMgc2hvdyBpbnRlcmVzdCBpbiB1c2luZyBtb2JpbGUgYXBwcyBtb3JlIHRoYW4gdGhlIHdlYnNpdGUuIHNvIGJ5IHNhdmluZyB0aGVpciBjcmVkZW50aWFscyB1c2VyIHRydXN0IHRoYXQgdGhlIHVzZXIgY2FuIGVhc2lseSB1c2UgaXQuIGZvciB0aGF0IHB1cnBvc2UsIHdlIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhbiBlLWNvbW1lcmNlIHdlYiB2aWV3IGFuZHJvaWQgYXBwLlwiLFxyXG4gICAgICAgIFN2ZzogTWFwcCxcclxuICAgICAgICBnb3RvOiBcIiNjb250YWN0dXNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBwcmljZWluZ2NvbnRlbnQ6XHJcbiAgICAgIFwiV2hldGhlciB5b3UganVzdCBuZWVkIGEgbG93IGFuZCBhY2N1cmF0ZSB3ZWJzaXRlIHRoYXQgbG9va3MgZ3JlYXQgb3IgeW914oCZcmUgcmVhZHkgZm9yIG1vcmUgYnVzaW5lc3MtYnVpbGRpbmcgY2FwYWJpbGl0aWVzIC4gd2UgaGF2ZSBhIHBsYW4gZm9yIHlvdVwiLFxyXG4gICAgcHJpY2VpbmdkYXRhOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwdGl0bGU6IFwiQlJPTlpFXCIsXHJcbiAgICAgICAgZnV0cnNvZmZlcjogW1xyXG4gICAgICAgICAgXCJDb3VzdGVtIERldmVsb3BtZW50XCIsXHJcbiAgICAgICAgICBcIk1vYmlsZSBSZXNwb25zaXZlXCIsXHJcbiAgICAgICAgICBcIjEwIFByb2R1Y3RzIEFkZGVkXCIsXHJcbiAgICAgICAgICBcIkdvb2dsZSBNYXBzXCIsXHJcbiAgICAgICAgICBcIkNvbnRhY3QgRm9ybVwiLFxyXG4gICAgICAgICAgXCJzaW5nbGUgcGFnZSBhcHBsaWNhdGlvblwiLFxyXG4gICAgICAgICAgXCJJY29ucyBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgXCJQaG90byBTb3VyY2luZ1wiLFxyXG4gICAgICAgICAgXCIyIFJvdW5kcyBvZiBSZXZpc2lvbnNcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvc3Q6IFwiMjcwXCIsXHJcbiAgICAgICAgZXh0cmZ1dHI6IFwiQ29udGFjdCB1cyBmb3IgYWRkaXRpb25hbCBmdXRjaGVyc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcHRpdGxlOiBcIlNJTFZFUlwiLFxyXG4gICAgICAgIGZ1dHJzb2ZmZXI6IFtcclxuICAgICAgICAgIFwiQ291c3RlbSBEZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgXCJNb2JpbGUgUmVzcG9uc2l2ZVwiLFxyXG4gICAgICAgICAgXCIyMCBQcm9kdWN0cyBBZGRlZFwiLFxyXG4gICAgICAgICAgXCJHb29nbGUgTWFwc1wiLFxyXG4gICAgICAgICAgXCJDb250YWN0IEZvcm1cIixcclxuICAgICAgICAgIFwiNDA0IFJlZGlyZWN0XCIsXHJcbiAgICAgICAgICBcInNpbmdsZSBwYWdlIGFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICBcIkljb25zIEludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICBcIlBob3RvIFNvdXJjaW5nXCIsXHJcbiAgICAgICAgICBcIldlYiB2aWV3IEFuZHJvaWQgYXBwbGljYXRpb25cIixcclxuICAgICAgICAgIFwiMyBSb3VuZHMgb2YgUmV2aXNpb25zXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb3N0OiBcIjU0MFwiLFxyXG4gICAgICAgIGV4dHJmdXRyOiBcIkNvbnRhY3QgdXMgZm9yIGFkZGl0aW9uYWwgZnV0Y2hlcnNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHB0aXRsZTogXCJHT0xEXCIsXHJcbiAgICAgICAgZnV0cnNvZmZlcjogW1xyXG4gICAgICAgICAgXCJDb3VzdGVtIERldmVsb3BtZW50XCIsXHJcbiAgICAgICAgICBcIk1vYmlsZSBSZXNwb25zaXZlXCIsXHJcbiAgICAgICAgICBcIjMwIFByb2R1Y3RzIEFkZGVkXCIsXHJcbiAgICAgICAgICBcIkdvb2dsZSBNYXBzXCIsXHJcbiAgICAgICAgICBcIkNvbnRhY3QgRm9ybVwiLFxyXG4gICAgICAgICAgXCI0MDQgUmVkaXJlY3RcIixcclxuICAgICAgICAgIFwic2luZ2xlIHBhZ2UgYXBwbGljYXRpb25cIixcclxuICAgICAgICAgIFwiSWNvbnMgSW50ZWdyYXRpb25cIixcclxuICAgICAgICAgIFwiR29vZ2xlIE1hcHNcIixcclxuICAgICAgICAgIFwiNDA0IFJlZGlyZWN0XCIsXHJcbiAgICAgICAgICBcIlBob3RvIFNvdXJjaW5nXCIsXHJcbiAgICAgICAgICBcIldlYiB2aWV3IEFuZHJvaWQgYXBwbGljYXRpb25cIixcclxuICAgICAgICAgIFwiNCBSb3VuZHMgb2YgUmV2aXNpb25zXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb3N0OiBcIjgxMFwiLFxyXG4gICAgICAgIGV4dHJmdXRyOiBcIkNvbnRhY3QgdXMgZm9yIGFkZGl0aW9uYWwgZnV0Y2hlcnNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBQcmVmZXRjaE9wdGlvbnMsXG4gIE5leHRSb3V0ZXIsXG4gIGlzTG9jYWxVUkwsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgZXhlY09uY2UgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHtcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VSZWxhdGl2ZVVybChcbiAgdXJsOiBzdHJpbmdcbik6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICApXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChjbGVhbmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbylcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIsIGVycm9yOiBlcnIgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PlxuICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgICAgfSBhcyBSb3V0ZUluZm8pXG4gICAgICAgICAgKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250YWN0dXNcIjtcclxuaW1wb3J0IFN1YnRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N1YnRpdGxlXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi9kYXRhXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTWFpbldhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDMwO1xyXG5gO1xyXG5cclxuY29uc3QgSG9tZVdhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICYgPiBkaXYge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS50YWJNfSB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iTH0ge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJTfSB7XHJcbiAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgfVxyXG4gICAgJiA+IGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYk19IHtcclxuICAgICAgICBmb250LXNpemU6IDdyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmR9O1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gc3ZnIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLnRhYk19IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBcHByb2NoV2FwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgbWFyZ2luOiAwIDRyZW07XHJcbmA7XHJcbmNvbnN0IEFwcHJvY2hncmlkV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICAmID4gZGl2Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDhyZW0gMDtcclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEudGFiTX0ge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYkx9IHtcclxuICAgICAgbWFyZ2luOiA1cmVtIDA7XHJcbiAgICB9XHJcbiAgICAmID4gc3ZnIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iTH0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICBtYXJnaW46IDAgM3JlbTtcclxuICAgICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS50YWJNfSB7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYkx9IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgMDtcclxuICAgICAgfVxyXG4gICAgICAmID4gKiB7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZWluZ1dhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbjogMCA0cmVtO1xyXG5gO1xyXG5jb25zdCBQcmljZWluZ2dyaWRXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xyXG4gICYgPiBkaXYge1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMjBweCAtMTBweCBibGFjaztcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgICYgPiBoMiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgfVxyXG4gICAgJiA+IHVsIHtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICAgICAgJiA+IGxpIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICAgICAgJiA+IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgV2ViZGVzaWduID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBpZiAoaWQpIHtcclxuICAgIGNvbnN0IHJkYXRhID0gZGF0YS5maWx0ZXIoKGR0LCBpKSA9PiB7XHJcbiAgICAgIGxldCBjbGVhbmlkID0gaWQucmVwbGFjZSgnLScsIFwiIFwiKVxyXG4gICAgICBsZXQgY2xlYW50aXRsZSA9IGR0LnRpdGxlLnJlcGxhY2UoJy0nLCBcIiBcIilcclxuICAgICAgcmV0dXJuIGNsZWFudGl0bGUgPT09IGNsZWFuaWR9KTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGhlYWRjb250ZW50LFxyXG4gICAgICBIZWFkaW1nLFxyXG4gICAgICBhcHByb2NoY29udGVudCxcclxuICAgICAgYXBwcm9jaGRhdGEsXHJcbiAgICAgIHByaWNlaW5nY29udGVudCxcclxuICAgICAgcHJpY2VpbmdkYXRhLFxyXG4gICAgfSA9IHJkYXRhWzBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNYWluV2FwcGVyPlxyXG4gICAgICAgIDxIb21lV2FwcGVyIGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8cD57aGVhZGNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJWaWV3IHBsYW5zXCIgZ290bz17YC9zZXJ2aWVzLyR7aWR9LyNwcmljZWluZ2B9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxIZWFkaW1nIC8+XHJcbiAgICAgICAgPC9Ib21lV2FwcGVyPlxyXG4gICAgICAgIDxBcHByb2NoV2FwcGVyIGlkPVwiYXBwcm9jaGVcIj5cclxuICAgICAgICAgIDxTdWJ0aXRsZSB0aXRsZT1cIkFwcHJvY2hcIiBpbmZvPXthcHByb2NoY29udGVudH0gLz5cclxuXHJcbiAgICAgICAgICA8QXBwcm9jaGdyaWRXYXBwZXI+XHJcbiAgICAgICAgICAgIHthcHByb2NoZGF0YS5tYXAoKHsgbmFtZSwgU3ZnLCBjb250ZW50LCBnb3RvIH0sIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57YCR7bmFtZX1gfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2NvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNvbnRhY3QgdXNcIiBnb3RvPXtgL3NlcnZpZXMvJHtpZH0vJHtnb3RvfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U3ZnIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvQXBwcm9jaGdyaWRXYXBwZXI+XHJcbiAgICAgICAgPC9BcHByb2NoV2FwcGVyPlxyXG4gICAgICAgIDxQcmljZWluZ1dhcHBlciBpZD1cInByaWNlaW5nXCI+XHJcbiAgICAgICAgICA8U3VidGl0bGUgdGl0bGU9XCJQcmljZWluZ1wiIGluZm89e3ByaWNlaW5nY29udGVudH0gLz5cclxuICAgICAgICAgIDxQcmljZWluZ2dyaWRXYXBwZXI+XHJcbiAgICAgICAgICAgIHtwcmljZWluZ2RhdGEubWFwKCh7IGNvc3QsIGV4dHJmdXRyLCBwdGl0bGUsIGZ1dHJzb2ZmZXIgfSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57cHRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7ZnV0cnNvZmZlci5tYXAoKGluZm8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmZvfT57aW5mb308L2xpPjtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+JHtjb3N0fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2V4dHJmdXRyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvUHJpY2VpbmdncmlkV2FwcGVyPlxyXG4gICAgICAgIDwvUHJpY2VpbmdXYXBwZXI+XHJcbiAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgPC9NYWluV2FwcGVyPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PjtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFdlYmRlc2lnbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=