module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

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
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\components\\button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ButtonWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  padding: 1.5rem 2rem;
  background-color: #0081a7;
  color: white;
  text-decoration: none;
  border-radius: 12px;
`;

const Button = ({
  text
}) => {
  return __jsx(ButtonWapper, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }, text);
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
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\components\\contactus.js";
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
})(["margin:5rem;"]);
const Contactuscontiner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "contactus__Contactuscontiner",
  componentId: "sc-9u9tv2-1"
})(["display:flex;align-items:center;& > form{flex:1;}"]);

const Contact = () => {
  return __jsx(ContactusWapper, {
    id: "contactus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_subtitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Contact us",
    info: "Feel free Contact us",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(Contactuscontiner, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Name"), __jsx("input", {
    type: "text",
    id: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Email"), __jsx("input", {
    type: "email",
    id: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Phone"), __jsx("input", {
    type: "number",
    id: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "serviestype",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Servies Type"), __jsx("select", {
    id: "serviestype",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "Web design",
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Web design"), __jsx("option", {
    value: "Web Development",
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Web development"), __jsx("option", {
    value: "E-commerce",
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "E-commerce application"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "detiles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Detiles"), __jsx("textarea", {
    cols: "30",
    id: "detiles",
    rows: "10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }))), __jsx(Spports, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })));
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
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\components\\subtitle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SubTitleWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "subtitle__SubTitleWapper",
  componentId: "sc-1emdqaw-0"
})(["font-size:3rem;padding:4rem 0;width:70%;& > p{font-family:", ";}& > h1{font-weight:500;display:inline-block;position:relative;font-size:5rem;& > p{position:relative;z-index:5;}&::before{content:\"\";width:100%;height:20%;position:absolute;background:#ffa3c8;z-index:3;bottom:5px;}}"], props => props.theme.fonts.second);

const SubTitle = ({
  title,
  info
}) => {
  return __jsx(SubTitleWapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, title)), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, info));
};

/* harmony default export */ __webpack_exports__["default"] = (SubTitle);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var _components_subtitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/subtitle */ "./components/subtitle.js");
/* harmony import */ var _components_contactus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contactus */ "./components/contactus.js");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Heroimg = function Heroimg(props) {
  return __jsx("svg", props, __jsx("defs", null, __jsx("linearGradient", {
    x1: ".137",
    y1: ".125",
    x2: ".816",
    y2: ".922",
    id: "a"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#DBEFFF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F7EBFF"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "b"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F7EBFF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#DBEFFF"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "c"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F7EBFF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#DBEFFF"
  })), __jsx("linearGradient", {
    x1: ".022",
    y1: ".022",
    x2: ".978",
    y2: ".978",
    id: "d"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FF57BD"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FE6A77"
  })), __jsx("linearGradient", {
    x1: ".022",
    y1: ".022",
    x2: ".978",
    y2: ".978",
    id: "e"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FF57BD"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FE6A77"
  })), __jsx("linearGradient", {
    x1: ".022",
    y1: ".022",
    x2: ".978",
    y2: ".978",
    id: "f"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FF57BD"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FE6A77"
  })), __jsx("linearGradient", {
    x1: ".027",
    y1: "-.031",
    x2: ".973",
    y2: "1.031",
    id: "g"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#706AED"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#271068"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "h"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FFF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F1D1F8"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "i"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FDE1A7"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F9A144"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "j"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00E2EC"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0090B2"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "k"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#1AA9E8"
  }), __jsx("stop", {
    offset: ".422",
    stopColor: "#3D80EF"
  }), __jsx("stop", {
    offset: ".791",
    stopColor: "#5662F4"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5F57F6"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "l"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00E2EC"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0090B2"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "m"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FF57BD"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FE6A77"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "n"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00E2EC"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0090B2"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "o"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C7A0F6"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FF57BD"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "p"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00E2EC"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0090B2"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "q"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FDE1A7"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F9A144"
  })), __jsx("linearGradient", {
    x1: ".101",
    y1: "-.171",
    x2: ".899",
    y2: "1.171",
    id: "r"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00E2EC"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0090B2"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "s"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FFF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F1D1F8"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "t"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FDE1A7"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F9A144"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "u"
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
    id: "v"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FF57BD"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FE6A77"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "w"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#C7A0F6"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FF57BD"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "x"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#994574"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#43256F"
  })), __jsx("linearGradient", {
    x1: ".217",
    y1: ".216",
    x2: ".738",
    y2: ".739",
    id: "y"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#1AA9E8"
  }), __jsx("stop", {
    offset: ".422",
    stopColor: "#3D80EF"
  }), __jsx("stop", {
    offset: ".791",
    stopColor: "#5662F4"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5F57F6"
  })), __jsx("linearGradient", {
    x1: ".093",
    y1: "-.149",
    x2: ".907",
    y2: "1.149",
    id: "z"
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
    id: "A"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FFF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F1D1F8"
  })), __jsx("linearGradient", {
    x1: ".5",
    y1: "1",
    x2: ".5",
    id: "B"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#994574"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#9F36AD"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "C"
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
    id: "D"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FDE1A7"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F9A144"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "E"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00E2EC"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0090B2"
  })), __jsx("linearGradient", {
    x1: ".172",
    y1: ".041",
    x2: ".819",
    y2: ".863",
    id: "F"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#994574"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#43256F"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "G"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F4BEA3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "H"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#706AED"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#271068"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "I"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F4BEA3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "J"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#706AED"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#271068"
  })), __jsx("linearGradient", {
    x1: ".09",
    y1: ".21",
    x2: ".934",
    y2: ".971",
    id: "K"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FF57BD"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FE6A77"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "L"
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
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "M"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FDE1A7"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F9A144"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "N"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F4BEA3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "O"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FDE1A7"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F9A144"
  })), __jsx("linearGradient", {
    x1: "-.059",
    y1: ".139",
    x2: ".863",
    y2: ".794",
    id: "P"
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
    id: "Q"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F4BEA3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "R"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F4BEA3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "S"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FF57BD"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#EC9895"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "T"
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
    id: "U"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F4BEA3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "V"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#FDE1A7"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#F9A144"
  })), __jsx("linearGradient", {
    x1: ".09",
    y1: "-.095",
    x2: ".91",
    y2: "1.095",
    id: "W"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00E2EC"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#0090B2"
  })), __jsx("linearGradient", {
    x1: ".09",
    y1: "-.095",
    x2: ".91",
    y2: "1.095",
    id: "X"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#706AED"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#271068"
  })), __jsx("linearGradient", {
    x1: ".109",
    y1: "-.221",
    x2: ".761",
    y2: "1.412",
    id: "Y"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#706AED"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#271068"
  })), __jsx("linearGradient", {
    x1: "-.81",
    y1: ".222",
    x2: "1.533",
    y2: ".744",
    id: "Z"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#994574"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#43256F"
  })), __jsx("linearGradient", {
    x1: ".142",
    y1: "-.29",
    x2: ".761",
    y2: "1.471",
    id: "aa"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#706AED"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#271068"
  })), __jsx("linearGradient", {
    x1: "-.543",
    y1: ".173",
    x2: "1.726",
    y2: ".788",
    id: "ab"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#994574"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#43256F"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ac"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F4BEA3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    x1: "-.26",
    y1: ".236",
    x2: "1.102",
    y2: ".893",
    id: "ad"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#1AA9E8"
  }), __jsx("stop", {
    offset: ".422",
    stopColor: "#3D80EF"
  }), __jsx("stop", {
    offset: ".791",
    stopColor: "#5662F4"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5F57F6"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ae"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#EC9895"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FF57BD"
  })), __jsx("linearGradient", {
    x1: "-.034",
    y1: ".261",
    x2: ".87",
    y2: ".803",
    id: "af"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F4BEA3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ag"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#CB2090"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#43256F"
  })), __jsx("linearGradient", {
    x1: ".05",
    y1: ".011",
    x2: ".837",
    y2: ".819",
    id: "ah"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#CB2090"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#43256F"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ai"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#1AA9E8"
  }), __jsx("stop", {
    offset: ".422",
    stopColor: "#3D80EF"
  }), __jsx("stop", {
    offset: ".791",
    stopColor: "#5662F4"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5F57F6"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "aj"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#F4BEA3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#E8878E"
  })), __jsx("linearGradient", {
    y1: ".5",
    x2: "1",
    y2: ".5",
    id: "ak"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#1AA9E8"
  }), __jsx("stop", {
    offset: ".422",
    stopColor: "#3D80EF"
  }), __jsx("stop", {
    offset: ".791",
    stopColor: "#5662F4"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#5F57F6"
  }))), __jsx("path", {
    d: "M0 0h719.501V681.369H0V0z",
    fill: "none"
  }), __jsx("path", {
    d: "M383.722.133c54.411.892 131.569 23.192 152.53 78.495 22.534 59.448 19.869 72.162 56.642 136.921 36.721 64.667 17.097 155.65-22.15 194.303-55.593 54.749-103.922 41.161-202.632 40.736-69.129-.297-146.374 49.833-185.534 62.886-26.313 8.771-82.509 18.285-118.188-18.286-39.4-40.385-30.625-115.067-37.464-143.611-7.163-29.9-54.602-135.623-3.568-218.091C84.905 34.029 222.254-2.514 383.722.133z",
    fill: "url(#a)",
    transform: "translate(40.797 37.355)"
  }), __jsx("path", {
    d: "M100.815 6.74c19.64-3.565 92.372-18.127 95.641 11.38 2.749 24.828-56.222 22.753-84.443 21.409C76.11 37.819 2.848 45.637.088 30.763c-1.654-8.926 20.2-13.683 42.753-15.015 18.542-1.095 29.21-3.788 57.974-9.009z",
    transform: "translate(405.273 631.868)",
    fill: "url(#b)"
  }), __jsx("path", {
    d: "M90.348 3.984C72.384 1.957-3.592-9.717.132 19.702c2.973 23.49 59.022 14.301 84.442 16.354 35.903 2.899 97.198-.916 98.4-15.95.722-9.02-19.335-12.065-39.729-11.643-16.764.347-26.587-1.508-52.897-4.479z",
    transform: "translate(86.322 657.046)",
    fill: "url(#c)"
  }), __jsx("path", {
    d: "M0 1.683C0 .753.754 0 1.683 0h18.934c.93 0 1.684.754 1.684 1.683v18.934c0 .93-.754 1.684-1.684 1.684H1.683C.753 22.3 0 21.547 0 20.617V1.683z",
    fill: "url(#d)",
    transform: "translate(290.535 409.365)"
  }), __jsx("path", {
    d: "M300.904 427.038a.892.892 0 0 1-.708-.35l-5.463-7.137a.891.891 0 1 1 1.416-1.083l4.68 6.113 6.342-10.168a.893.893 0 0 1 1.514.945l-7.024 11.261a.894.894 0 0 1-.715.42l-.042-.001z",
    fill: "#FDE1A7"
  }), __jsx("path", {
    d: "M0 1.683C0 .753.754 0 1.683 0h18.934c.93 0 1.684.754 1.684 1.683v18.934c0 .93-.754 1.684-1.684 1.684H1.683C.753 22.3 0 21.547 0 20.618V1.683z",
    fill: "url(#e)",
    transform: "translate(290.535 442.243)"
  }), __jsx("path", {
    d: "M300.904 459.916a.892.892 0 0 1-.708-.35l-5.463-7.137a.891.891 0 1 1 1.416-1.083l4.68 6.113 6.342-10.168a.893.893 0 0 1 1.514.945l-7.024 11.261a.895.895 0 0 1-.715.42l-.042-.001z",
    fill: "#FDE1A7"
  }), __jsx("path", {
    d: "M0 1.683C0 .753.754 0 1.683 0h18.934c.93 0 1.684.754 1.684 1.683v18.934c0 .93-.754 1.684-1.684 1.684H1.683C.753 22.3 0 21.547 0 20.618V1.683z",
    fill: "url(#f)",
    transform: "translate(290.535 475.121)"
  }), __jsx("path", {
    d: "M300.904 492.793a.892.892 0 0 1-.708-.35l-5.463-7.136a.891.891 0 1 1 1.416-1.083l4.68 6.113 6.342-10.168a.892.892 0 0 1 1.514.945l-7.024 11.261a.895.895 0 0 1-.715.42c-.013-.002-.027-.002-.042-.002z",
    fill: "#FDE1A7"
  }), __jsx("path", {
    d: "M0 0h125.994v112.279H0V0z",
    fill: "url(#g)",
    transform: "translate(254.874 285.796)"
  }), __jsx("path", {
    d: "M0 0h47.201v4.46H0V0z",
    fill: "url(#h)",
    transform: "translate(267.697 295.348)"
  }), __jsx("path", {
    d: "M14.272 1.784C14.272.799 13.473 0 12.488 0H1.784C.799 0 0 .8 0 1.784v84.739h14.272V1.784z",
    fill: "url(#i)",
    transform: "translate(353.773 299.288)"
  }), __jsx("path", {
    d: "M14.272 34.045V1.784C14.272.799 13.473 0 12.488 0H1.784C.799 0 0 .8 0 1.784v32.26h14.272z",
    fill: "url(#j)",
    transform: "translate(353.773 299.288)"
  }), __jsx("path", {
    d: "M14.272 1.784c0-.985-.8-1.784-1.784-1.784H1.784C.799 0 0 .8 0 1.784v65.784h14.272V1.784z",
    fill: "url(#k)",
    transform: "translate(310.735 318.243)"
  }), __jsx("path", {
    d: "M14.272 39.768V1.784c0-.985-.8-1.784-1.784-1.784H1.784C.799 0 0 .8 0 1.784v37.984h14.272z",
    fill: "url(#l)",
    transform: "translate(310.735 318.243)"
  }), __jsx("path", {
    d: "M14.272 1.784c0-.985-.8-1.784-1.784-1.784H1.784C.799 0 0 .8 0 1.784V55.08h14.272V1.784z",
    fill: "url(#m)",
    transform: "translate(332.254 330.73)"
  }), __jsx("path", {
    d: "M14.272 27.28V1.784c0-.985-.8-1.784-1.784-1.784H1.784C.799 0 0 .8 0 1.784V27.28h14.272z",
    fill: "url(#n)",
    transform: "translate(332.254 330.73)"
  }), __jsx("path", {
    d: "M14.272 1.784c0-.985-.8-1.784-1.784-1.784H1.784C.799 0 0 .8 0 1.784V79.61h14.272V1.784z",
    fill: "url(#o)",
    transform: "translate(289.216 306.2)"
  }), __jsx("path", {
    d: "M14.272 29.362V1.784c0-.985-.8-1.784-1.784-1.784H1.784C.799 0 0 .8 0 1.784v27.578h14.272z",
    fill: "url(#p)",
    transform: "translate(289.216 306.2)"
  }), __jsx("path", {
    d: "M14.272 1.784c0-.985-.8-1.784-1.784-1.784H1.784C.799 0 0 .8 0 1.784v38.579h14.272V1.784z",
    fill: "url(#q)",
    transform: "translate(267.697 345.448)"
  }), __jsx("path", {
    d: "M14.272 24.307V1.784c0-.985-.8-1.784-1.784-1.784H1.784C.799 0 0 .8 0 1.784v22.523h14.272z",
    fill: "url(#p)",
    transform: "translate(267.697 345.448)"
  }), __jsx("path", {
    d: "M368.045 386.703H267.92a.892.892 0 1 1 0-1.784h100.126a.891.891 0 1 1 0 1.784z",
    fill: "#1AA9E8"
  }), __jsx("path", {
    d: "M0 0h126.44v75.15H0V0z",
    fill: "url(#r)",
    transform: "translate(86.009 117.322)"
  }), __jsx("path", {
    d: "M103.233 181.322h36.89V134.42l-36.89 46.903zM174.316 169.95v11.372h22.746v-38.43l-22.746 27.057z",
    fill: "#00E2EC"
  }), __jsx("path", {
    d: "M140.123 134.419v46.903h34.193V169.95l-34.193-35.53zM208.064 157.573l-11.002-14.68v38.43h11.002v-23.75z",
    fill: "#0090B2"
  }), __jsx("path", {
    d: "M0 0h48.39v4.46H0V0z",
    fill: "url(#s)",
    transform: "translate(154.915 127.134)"
  }), __jsx("path", {
    d: "M126.939 169.363a.89.89 0 0 1-.759-.42l-21.104-33.938a.891.891 0 1 1 1.515-.942L127.695 168a.891.891 0 0 1-.756 1.363z",
    fill: "#1AA9E8"
  }), __jsx("path", {
    d: "M101.039 134.534a4.794 4.794 0 1 1 9.589 0 4.794 4.794 0 0 1-9.59 0z",
    fill: "#F95FC3"
  }), __jsx("path", {
    d: "M123.88 168.471a3.057 3.057 0 1 1 6.115 0 3.057 3.057 0 0 1-6.114 0z",
    fill: "#FFF"
  }), __jsx("g", null, __jsx("g", {
    fill: "#FFF"
  }, __jsx("path", {
    d: "M228.308 209.07a58.284 58.284 0 0 1-3.086-33.045c3.334-16.925 13.65-30.697 27.364-38.922l-12.833-25.219c-21.168 12.058-37.168 32.906-42.245 58.683-3.496 17.755-1.308 35.31 5.297 50.786l25.503-12.282zM259.736 133.454c10.444-4.46 22.291-5.941 34.275-3.582 17.385 3.423 31.433 14.221 39.569 28.496l25.506-12.285c-11.899-22-33.162-38.715-59.618-43.925-18.438-3.631-36.662-1.134-52.565 6.078l12.833 25.218zM362.573 153.314l-25.502 12.283a58.274 58.274 0 0 1 3.092 33.064c-6.251 31.74-37.048 52.404-68.788 46.153-17.393-3.425-31.444-14.23-39.58-28.513l-25.505 12.285c11.897 22.007 33.164 38.73 59.627 43.942 47.046 9.265 92.695-21.363 101.961-68.408 3.498-17.764 1.306-35.325-5.305-50.806z"
  })), __jsx("path", {
    d: "M37.66 97.567a58.279 58.279 0 0 1-9.412-31.827c0-17.25 7.46-32.757 19.326-43.476L30.11 0C11.67 15.921 0 39.467 0 65.74c0 18.096 5.54 34.897 15.01 48.806l22.65-16.98z",
    transform: "translate(195.87 121.603)",
    fill: "url(#t)"
  }), __jsx("path", {
    d: "M17.462 38.383c9.386-6.395 20.723-10.136 32.937-10.136 17.72 0 33.589 7.879 44.33 20.312l22.651-16.982C101.455 12.292 77.362 0 50.4 0 31.606 0 14.21 5.972 0 16.12l17.462 22.263z",
    transform: "translate(232.294 100.522)",
    fill: "url(#u)"
  }), __jsx("path", {
    d: "M138.794 0l-22.649 16.979a58.283 58.283 0 0 1 9.423 31.843c0 32.35-26.224 58.574-58.574 58.574-17.727 0-33.601-7.885-44.343-20.327L0 104.05c15.925 19.294 40.023 31.592 66.993 31.592 47.95 0 86.82-38.87 86.82-86.82.002-18.103-5.542-34.91-15.019-48.822z",
    transform: "translate(215.698 138.52)",
    fill: "url(#v)"
  }), __jsx("path", {
    d: "M0 12.766C5.166 26.5 18.418 36.275 33.957 36.275c11.152 0 21.124-5.037 27.779-12.955L33.957 0 0 12.766z",
    transform: "translate(248.735 187.343)",
    fill: "url(#w)"
  }), __jsx("path", {
    d: "M12.866 0L0 33.918l27.778 23.32a36.125 36.125 0 0 0 8.497-23.32c0-15.502-9.728-28.726-23.409-33.918z",
    transform: "translate(282.692 153.425)",
    fill: "url(#x)"
  }), __jsx("path", {
    d: "M49.14 2.357A36.174 36.174 0 0 0 36.275 0C16.24 0 0 16.24 0 36.275c0 4.493.822 8.794 2.316 12.766l33.958-12.766L49.14 2.357z",
    transform: "translate(246.419 151.068)",
    fill: "url(#y)"
  })), __jsx("g", null, __jsx("path", {
    d: "M0 0h194.529v121.868H0V0z",
    fill: "url(#z)",
    transform: "translate(388.046 78.855)"
  }), __jsx("path", {
    d: "M402.949 98.824a4.794 4.794 0 1 1 9.589 0 4.794 4.794 0 0 1-9.59 0z",
    fill: "#FDE1A7"
  }), __jsx("path", {
    d: "M428.674 98.824a4.794 4.794 0 1 1 9.588 0 4.794 4.794 0 0 1-9.588 0z",
    fill: "#00E2EC"
  }), __jsx("path", {
    d: "M454.399 98.824a4.794 4.794 0 1 1 9.589 0 4.794 4.794 0 0 1-9.59 0z",
    fill: "#C7A0F6"
  }), __jsx("g", null, __jsx("path", {
    d: "M0 0h61.04v4.46H0V0z",
    fill: "url(#A)",
    transform: "translate(402.949 111.672)"
  })), __jsx("path", {
    d: "M154.314 10.95C151.359 5.133 146.928-.2 140.637.006c-13.676.446-22.598 36.125-32.112 36.571-9.514.446-6.244-35.976-18.434-35.68-15.312.374-15.908 70.914-35.085 72.549-19.178 1.635-23.49-37.91-32.112-37.315-8.622.595-12.33 31.007-13.826 37.613C7.571 80.35 0 81.623 0 81.623h154.314V10.95z",
    transform: "translate(413.356 97.99)",
    fill: "url(#B)"
  }), __jsx("path", {
    d: "M164.722 0c-21.112.892-25.572 57.682-47.275 56.344-18.006-1.11-15.016-31.665-30.774-32.557-15.76-.892-23.192 36.125-42.221 37.314-9.253.578-16.65-5.203-25.124-4.46C10.854 57.384 2.082 68.683 0 71.062h164.722V0z",
    transform: "translate(402.949 108.55)",
    fill: "url(#C)"
  })), __jsx("g", null, __jsx("path", {
    d: "M0 0h78.792v24.976H0V0z",
    fill: "url(#D)",
    transform: "translate(282.094 63.282)"
  }), __jsx("path", {
    d: "M353.66 80.119c-3.118 0-4.685-2.02-6.067-3.802-1.295-1.67-2.414-3.111-4.657-3.111-2.245 0-3.363 1.441-4.658 3.111-1.383 1.782-2.95 3.802-6.068 3.802-3.118 0-4.684-2.02-6.066-3.802-1.295-1.67-2.414-3.111-4.657-3.111-2.244 0-3.363 1.441-4.657 3.111-1.382 1.782-2.95 3.802-6.067 3.802-3.116 0-4.683-2.02-6.064-3.802-1.295-1.67-2.413-3.111-4.656-3.111s-3.362 1.441-4.656 3.111c-1.382 1.782-2.948 3.802-6.066 3.802a.892.892 0 0 1 0-1.784c2.244 0 3.362-1.442 4.657-3.112 1.381-1.782 2.948-3.801 6.065-3.801 3.118 0 4.683 2.02 6.066 3.801 1.294 1.67 2.412 3.112 4.654 3.112 2.245 0 3.362-1.442 4.657-3.112 1.382-1.782 2.95-3.801 6.067-3.801s4.685 2.02 6.066 3.801c1.295 1.67 2.414 3.112 4.657 3.112 2.245 0 3.363-1.442 4.658-3.112 1.383-1.782 2.95-3.801 6.068-3.801 3.118 0 4.683 2.02 6.066 3.801 1.295 1.67 2.414 3.112 4.658 3.112a.892.892 0 1 1 0 1.784z",
    fill: "#05C5DA"
  }), __jsx("path", {
    d: "M293.167 115.819a.893.893 0 0 1-.62-1.534l27.658-26.67a.892.892 0 1 1 1.24 1.284l-27.659 26.67a.886.886 0 0 1-.619.25z",
    fill: "#1AA9E8"
  }), __jsx("path", {
    d: "M289.636 114.927a3.53 3.53 0 1 1 7.061 0 3.53 3.53 0 0 1-7.06 0z",
    fill: "#FDE1A7"
  })), __jsx("g", null, __jsx("path", {
    d: "M23.557 53.243a2.514 2.514 0 0 0 3.438.9l40.953-18.49a2.512 2.512 0 0 0 .901-3.438L50.243 1.245a2.513 2.513 0 0 0-3.437-.9L1.246 12.97a2.513 2.513 0 0 0-.902 3.438l23.213 36.834z",
    transform: "translate(412.993 289.741)",
    fill: "url(#E)"
  }), __jsx("path", {
    d: "M53.512 1.325L73.327 34.31a2.675 2.675 0 0 1-.958 3.661L28.751 57.664a2.678 2.678 0 0 1-3.662-.96L.366 17.477a2.676 2.676 0 0 1 .96-3.661L49.85.366a2.677 2.677 0 0 1 3.662.96zM7.53 17.26l20.952 33.87 39.814-16.922-18.174-29.77L7.531 17.259z",
    fill: "url(#F)",
    fillRule: "evenodd",
    transform: "translate(410.744 288.161)"
  }), __jsx("path", {
    d: "M468.171 312.11l-32.36 12.77-2.621-3.758 32.847-12.293 2.134 3.281z",
    fill: "#FDE1A7"
  }), __jsx("path", {
    d: "M442.478 308.932a3.597 3.597 0 1 1 7.193 0 3.597 3.597 0 0 1-7.193 0z",
    fill: "#F95FC3"
  }), __jsx("path", {
    d: "M430.226 313.642a3.597 3.597 0 1 1 7.193 0 3.597 3.597 0 0 1-7.193 0z",
    fill: "#FE687E"
  }), __jsx("path", {
    d: "M454.342 304.732a3.236 3.236 0 1 1 6.472 0 3.236 3.236 0 0 1-6.472 0z",
    fill: "#00E2EC"
  })), __jsx("g", null, __jsx("path", {
    d: "M33.09 48.167c-1.048-17.814 2.957-39.66 2.809-46.498L6.776 0s-.562 20.839-.298 38.877c.298 20.367 4.534 78.792 3.271 87.935-.787 5.698-5.44 9.374-9.749 12.089 2.07 1.059 5.735 1.789 10.978-.805 5.93-2.935 12.61-6.214 17.32-6.378-.19-3.076-.381-5.955-.413-7.879-.148-9.292 6.467-54.189 5.204-75.672z",
    transform: "translate(478.697 506.824)",
    fill: "url(#G)"
  }), __jsx("path", {
    d: "M23.503 6.379c-5.242 2.594-8.908 1.865-10.978.804-1.122.707-2.221 1.352-3.221 1.946C5.493 11.393-.612 12.282.05 14.645c.519 1.858 14.918 2.703 22.634.505 3.643-1.038 9.885-4.386 9.885-4.386l.242 4.552s6.922.516 7.665-.302c1.13-1.243.742-8.566.347-15.014-4.71.165-11.39 3.444-17.32 6.379z",
    transform: "translate(466.172 638.54)",
    fill: "url(#H)"
  })), __jsx("g", null, __jsx("path", {
    d: "M16.058 134.69c6.193-3.066 13.204-6.505 17.933-6.378-.194-3.073-.42-5.959-.541-7.894-.372-5.946-.52-16.204.224-37.76.744-21.558-3.122-36.72-4.46-49.506C27.878 20.366 27.878 6.838 27.727 0L0 3.418s2.133 20.415 4.014 38.356c1.779 16.948 12.563 71.285 11.3 80.427-.777 5.619-6.341 10.221-10.472 13.171 2.02 1.123 5.77 2.011 11.216-.682z",
    transform: "translate(530.443 510.84)",
    fill: "url(#I)"
  }), __jsx("path", {
    d: "M0 15.598c0 1.264 14.436 1.752 22.152-.446 3.642-1.037 9.885-4.386 9.885-4.386l.241 4.553s7.416.279 8.159-.539c1.123-1.238.867-8.412.466-14.777-4.73-.126-11.74 3.313-17.933 6.378-5.445 2.695-9.196 1.806-11.216.683-1.148.82-2.192 1.518-2.983 2.067C5.129 11.658 0 13.145 0 15.598z",
    transform: "translate(523.53 639.148)",
    fill: "url(#J)"
  })), __jsx("g", null, __jsx("path", {
    d: "M79.182 0C82.304 4.757 90.78 19.922 93.9 35.754c2.88 14.604 2.676 22.968 4.237 34.341 1.56 11.373 9.589 36.349 9.143 37.91-.446 1.561-4.014 3.902-11 4.089-5.222.139-9.068-.297-18.434 2.825-9.366 3.122-19.922 4.906-32.708 3.568-12.784-1.338-22.894-6.69-29.286-6.839-6.393-.149-14.867-.149-15.76-1.933-.891-1.784 4.914-15.582 6.17-24.233 1.42-9.766 4.535-28.395 11.373-46.83 6.41-17.277 15.461-37.166 15.461-37.166s13.305-.074 22.894-.297C65.58.966 79.182 0 79.182 0z",
    fill: "url(#K)",
    transform: "translate(470.216 404.245)"
  }), __jsx("path", {
    d: "M523.901 517.393c-2.83 0-5.702-.156-8.64-.464-7.055-.738-13.414-2.717-18.524-4.308-4.243-1.32-7.907-2.462-10.69-2.526l-1.763-.038c-4.962-.102-10.585-.217-13.134-1.153a.891.891 0 1 1 .614-1.674c2.269.832 7.973.95 12.556 1.044l1.767.037c3.033.07 6.808 1.245 11.18 2.607 5.296 1.649 11.298 3.517 18.178 4.237 11.29 1.182 21.568.06 32.332-3.526 8.205-2.735 12.284-2.784 16.603-2.836a143.71 143.71 0 0 0 2.09-.036c6.257-.167 8.864-2.03 9.514-2.598a.891.891 0 1 1 1.172 1.345c-.979.854-3.974 2.859-10.64 3.037-.725.019-1.425.027-2.115.036-4.176.05-8.12.096-16.06 2.743-8.211 2.738-16.145 4.073-24.44 4.073z",
    fill: "#CFAEFF"
  }), __jsx("path", {
    d: "M526.747 511.45c-3.55 0-7.275-.206-11.189-.616-7.394-.773-13.974-2.804-19.779-4.593-4.196-1.294-7.82-2.412-10.691-2.69-2.372-.229-4.527-.039-6.427.13-2.25.2-4.196.374-5.817-.222a.891.891 0 1 1 .615-1.674c1.245.458 3.008.301 5.044.12 1.977-.177 4.217-.375 6.757-.13 3.051.294 6.756 1.437 11.045 2.76 5.727 1.767 12.218 3.77 19.44 4.525 12.636 1.319 23.23.48 32.382-2.568 8.13-2.71 10.4-2.638 13.82-2.535a83.56 83.56 0 0 0 1.88.043c6.507.06 9.213-1.65 10.689-2.94a.892.892 0 0 1 1.173 1.345c-1.67 1.458-4.68 3.381-11.552 3.381-.108 0-.216 0-.327-.002a82.01 82.01 0 0 1-1.918-.044c-3.352-.103-5.374-.166-13.201 2.443-6.545 2.183-13.791 3.266-21.944 3.266z",
    fill: "#CFAEFF"
  })), __jsx("g", null, __jsx("path", {
    d: "M3.254.742C1.898 1.194-.39 2.415.057 4.645c.446 2.23 4.463 6.146 5.801 6.74 1.338.594.445-2.95-.745-4.51-1.19-1.561 2.129 1.99 3.195 1.635.78-.26 1.042-1.747.186-4.088C7.732 2.339 11.134.408 9.646.11 8.16-.187 5.038.147 3.254.742z",
    transform: "translate(462.372 308.692)",
    fill: "url(#L)"
  }), __jsx("path", {
    d: "M.035 8.322C.42 7.818 11.265.3 12.069.005 13.2-.408 30.78 22.548 33.232 25.112c2.453 2.565-3.243 15.361-7.926 16.253C20.623 42.257-.98 9.652.035 8.322z",
    transform: "translate(486.508 326.913)",
    fill: "url(#M)"
  }), __jsx("path", {
    d: "M.164 2.31c1.577-1.578 9.44-.67 10.48-.373C11.688 2.234 14.289.08 15.85.004c1.56-.074 6.336.8 9.142 2.38 3.11 1.75 18.657 18.88 18.657 18.88s-.22 4.46-4.125 7.136c-3.913 2.682-6.423 1.456-6.423 1.456s-5.508-10.041-7.403-11.268c-1.895-1.226-6.578.837-10.434-.109-3.635-.89-8.688-5.577-7.293-6.804 1.481-1.302 5.022 1.703 6.615 2.23 2.36.78 6.783-.156 6.875-1.951.111-2.175-6.935-4.192-12.265-5.798C5.427 5.02-1.118 3.59.164 2.309z",
    fill: "url(#N)",
    transform: "translate(455.352 306.121)"
  }), __jsx("path", {
    d: "M489.806 337.143c-2.386 0-3.758-1.154-3.848-1.234a.892.892 0 0 1 1.168-1.347c.103.085 2.7 2.172 7.264-.789 3.512-2.28 3.717-6.38 3.72-6.42a.89.89 0 0 1 .923-.857.89.89 0 0 1 .858.92c-.007.206-.22 5.057-4.53 7.855-2.2 1.425-4.073 1.872-5.555 1.872z",
    fill: "#1AA9E8"
  })), __jsx("g", null, __jsx("path", {
    d: "M47.276.123c2.378 4.906 11.298 22.002 10.703 35.233-.594 13.232-4.163 26.91-4.61 37.167-.445 10.258-.147 16.948-.147 16.948s-9.81 6.095-24.678 5.649c-14.415-.432-21.408-4.163-21.408-4.163s-.427-15.736-2.23-26.462C3.493 56.095.036 51.19 0 41.75-.049 29.67 18.546 14.06 24.084 5.624 28.637-1.312 47.276.123 47.276.123z",
    fill: "url(#O)",
    transform: "translate(496.176 314.775)"
  }), __jsx("path", {
    d: "M526.297 410.81c-.528 0-1.062-.008-1.604-.023-14.457-.434-21.508-4.112-21.8-4.269a.891.891 0 0 1 .84-1.574c.067.037 7.024 3.64 21.015 4.059 14.4.443 24.085-5.456 24.18-5.516a.893.893 0 0 1 .941 1.516c-.396.246-9.516 5.807-23.572 5.807z",
    fill: "#1AA9E8"
  })), __jsx("g", null, __jsx("path", {
    d: "M3.81 4.067c2.23.112 9.057-1.657 14.16-2.787C28.044-.95 37.944-.817 40.493 6.186c2.194 6.02-1.455 11.02-.853 15.238.817 5.724 17.914 10.555 18.247 22.002.32 10.975-8.697 14.941-11.15 19.736-2.453 4.794-7.336 19.344-24.307 18.174-9.698-.669-12.374-6.393-12.376-10.37 0-5.105 4.906-9.03 2.565-12.71-2.342-3.68-9.847-1.243-11.485-5.575-1.782-4.72 2.23-8.585 5.24-10.927 3.011-2.341 7.471-4.794 6.468-8.25-1.004-3.457-7.136-4.328-6.913-7.806.261-4.051 7.7-7.058 6.467-11.15-.929-3.084-6.244-2.453-10.816-3.345-4.571-.892 2.23-7.136 2.23-7.136z",
    fill: "url(#P)",
    transform: "translate(553.838 261.882)"
  })), __jsx("g", null, __jsx("path", {
    d: "M20.962 4.397c-.576 5.166 2.23 20.218 2.23 20.218s-6.988 7.248-17.246 7.731C.913 32.584 0 30.116 0 30.116L2.082 9.452s3.134-5.881 9.514-8.325c6.378-2.445 8.772-.15 8.772-.15l.594 3.42z",
    transform: "translate(520.26 290.282)",
    fill: "url(#Q)"
  }), __jsx("path", {
    d: "M33.688 3.698C24.618-.167 17.863.001 17.863.001 10.793 3.846-8.003 39.002 3.807 47.554c7.29 5.279 19.794-.106 28.105-7.282.508.16 1.05.247 1.613.247 2.896 0 5.24-2.271 5.24-5.074 0-.8-.196-1.554-.536-2.227.766-1.207 1.356-2.389 1.703-3.505 2.047-6.574 2.824-22.149-6.244-26.015z",
    transform: "translate(504.71 253.517)",
    fill: "url(#R)"
  }), __jsx("path", {
    d: "M524.31 278.494a1.339 1.339 0 0 1-1.276-1.741c.412-1.304 1.91-3.73 2.863-4.637a1.339 1.339 0 0 1 1.845 1.94c-.617.585-1.887 2.648-2.156 3.502-.18.57-.706.936-1.275.936zM511.657 271.432a1.115 1.115 0 0 1-1.063-1.451c.397-1.258 1.604-3.206 2.53-4.088a1.115 1.115 0 1 1 1.537 1.616c-.646.614-1.66 2.26-1.94 3.143-.15.476-.59.78-1.064.78z",
    fill: "#0090B2"
  }), __jsx("path", {
    d: "M521.8 283.132a5.413 5.413 0 0 0 2.584.634c2.936 0 5.96-2.11 7.706-5.374 2.347-4.392 1.551-9.411-1.774-11.19a5.413 5.413 0 0 0-2.584-.633c-2.935 0-5.958 2.11-7.704 5.375-1.12 2.095-1.57 4.396-1.267 6.478.314 2.158 1.394 3.83 3.04 4.71zm-.593-10.558c1.492-2.791 4.115-4.668 6.524-4.668.706 0 1.363.16 1.954.475 2.674 1.43 3.223 5.637 1.225 9.379-1.492 2.79-4.115 4.667-6.526 4.667-.705 0-1.363-.161-1.953-.477-1.261-.674-2.094-1.995-2.346-3.722-.263-1.802.137-3.81 1.122-5.654zM507.591 274.903a3.854 3.854 0 0 0 1.835.446c2.427 0 5.158-2.057 6.793-5.119 1.007-1.88 1.49-3.907 1.36-5.705-.136-1.911-.942-3.355-2.269-4.063a3.843 3.843 0 0 0-1.834-.447c-2.427 0-5.157 2.056-6.794 5.119-2.163 4.047-1.763 8.339.91 9.769zm.271-9.14c1.39-2.596 3.698-4.41 5.614-4.41.44 0 .845.097 1.205.287.907.484 1.462 1.542 1.565 2.979.11 1.55-.318 3.319-1.206 4.98-1.388 2.597-3.696 4.41-5.614 4.41-.44 0-.846-.097-1.204-.287-1.944-1.04-2.109-4.685-.36-7.959z",
    fill: "#9F36AD",
    fillRule: "evenodd"
  }), __jsx("path", {
    d: "M13.547.323C10.033 3.24.282 8.055.017 9.763c-.353 2.286 4.871 3.56 6.061 3.56 1.19 0 2.06-3.226 5.239-7.65 1.791-2.49 4.098-6.901 2.23-5.35z",
    transform: "translate(503.964 268.34)",
    fill: "url(#S)"
  }), __jsx("path", {
    d: "M521.061 272.169a.668.668 0 0 1-.62-.42c-.919-2.295-2.094-2.98-4.066-2.367a.67.67 0 0 1-.397-1.277c2.661-.828 4.526.202 5.705 3.147a.669.669 0 0 1-.622.917z",
    fill: "#9F36AD"
  }), __jsx("path", {
    d: "M505.605 286.705c.125.524.45 1.065.822 1.51.38.45.841.816 1.352 1.043 1.022.477 2.21.296 3.267-.224a.67.67 0 1 1 .594 1.2l-.044.019c-.66.27-1.374.477-2.125.497a4.352 4.352 0 0 1-2.185-.48 4.946 4.946 0 0 1-1.656-1.42c-.426-.58-.774-1.206-.918-1.965a.458.458 0 0 1 .892-.193v.013z",
    fill: "#954374"
  }), __jsx("path", {
    d: "M525.55 323.536c-5.02 0-6.081-2.708-6.126-2.828a.891.891 0 1 1 1.673-.619c.025.055.852 1.846 5.068 1.648 9.79-.46 16.577-7.388 16.645-7.458a.891.891 0 1 1 1.284 1.239c-.295.305-7.355 7.507-17.846 8.002-.241.01-.474.016-.699.016z",
    fill: "#1AA9E8"
  }), __jsx("path", {
    d: "M23.605 46.416c-.946.232-2.301-.183-2.202-2.116.184-3.642 6.436-9.226 6.282-14.383-.188-6.263-11.95-7.657-20.035-10.815C-1.054 15.7-.935 5.646 1.24 2.358c2.397-3.624 6.634-2.434 8.418-.65 1.784 1.784 2.601 3.765 4.164 3.717 1.802-.056 1.133-3.568 3.864-3.568 2.767 0 5.162 5.103 7.063 7.21 3.251 3.605 20.315 9.231 21.183 21.482C47.123 47.347 30.398 60.43 28.539 60.43c-3.166.001-2.998-3.662-1.647-4.395 1.354-.734 3.903-2.281 3.258-5.819-.646-3.537-4.437-4.317-6.545-3.8z",
    transform: "translate(513.204 237.668)",
    fill: "url(#T)"
  }), __jsx("path", {
    d: "M540.125 284.236c1.491.558 2.653 1.755 3.123 3.248a.657.657 0 0 0 .107-.562c-1.072-3.835-6.66-7.241-9.659-9.07-.634-.387-1.18-.72-1.504-.949a.669.669 0 0 0-.771 1.093c.358.254.897.582 1.578.997 1.955 1.193 5.068 3.091 7.126 5.243z",
    fill: "#9F36AD"
  })), __jsx("g", null, __jsx("path", {
    d: "M10.412.015c1.804-.352 3.85 5.543 4.741 8.888.892 3.345 1.539 9.007 4.813 12.748 2.992 3.42 12.563 6.541 12.563 6.541s1.04 5.575-1.488 8.697c-2.526 3.122-6.256 2.964-6.256 2.964S13.797 28.935 9.188 25.74c-4.608-3.196-7.432-7.508-8.14-10.592-.756-3.3-1.3-4.944-.928-8.586.2-1.976.977-4.601.977-4.601S7.941 12.819 9.71 15.63c1.858-.372.966-5.5.743-7.582-.223-2.08-1.876-7.675-.04-8.033z",
    fill: "url(#U)",
    transform: "translate(424.473 326.622)"
  }), __jsx("path", {
    d: "M83.267.29c7.803-1.352 12.385 2.163 14.827 7.457 2.676 5.798 2.119 12.971-2.043 17.133-4.162 4.162-30.966 36.014-45.084 35.61C35.209 60.04.365 40.15.014 38.111c-.353-2.038 6.15-13.317 7.063-12.99.91.33 36.939 13.94 42.293 12.499C54.72 36.179 77.844 1.23 83.267.29z",
    transform: "translate(448.293 329.116)",
    fill: "url(#V)"
  }), __jsx("path", {
    d: "M448.297 368.101a.871.871 0 0 1-.87-.721c-.41-2.367 5.363-12.277 7.024-13.672.415-.349.823-.452 1.22-.31a.893.893 0 0 1-.123 1.714c-1.377 1.155-6.56 10.411-6.363 11.965.062.481-.27.942-.749 1.014a.822.822 0 0 1-.139.01z",
    fill: "#1AA9E8"
  })), __jsx("g", null, __jsx("path", {
    d: "M0 39.191a2.502 2.502 0 0 0 2.502 2.502h55.45a2.501 2.501 0 0 0 2.503-2.502V2.501A2.501 2.501 0 0 0 57.953 0H2.502A2.501 2.501 0 0 0 0 2.501v36.69z",
    transform: "translate(193.135 488.073)",
    fill: "url(#W)"
  }), __jsx("path", {
    d: "M2.676 0h59.317a2.675 2.675 0 0 1 2.676 2.676v39.248a2.676 2.676 0 0 1-2.676 2.675H2.676A2.676 2.676 0 0 1 0 41.925V2.676A2.676 2.676 0 0 1 2.676 0zM4.46 40.14h55.75V4.46H4.46v35.68z",
    fill: "url(#X)",
    fillRule: "evenodd",
    transform: "translate(191.027 486.62)"
  }), __jsx("path", {
    d: "M193.661 511.656h47.202v4.46h-47.202v-4.46z",
    fill: "#FDE1A7"
  }), __jsx("path", {
    d: "M234.736 501.119l6.127 7.16-12.217.033 6.09-7.193z",
    fill: "#00E2EC"
  }), __jsx("path", {
    d: "M214.873 504.715a3.597 3.597 0 1 1 7.193 0 3.597 3.597 0 0 1-7.193 0z",
    fill: "#F95FC3"
  })), __jsx("g", null, __jsx("path", {
    d: "M19.093 1.921c1.644 4.116 8.677 5.84 14.577 7.238 6.359 1.505 10.889 2.374 10.63 4.906-.297 2.899-14.123 3.865-24.158 3.568-10.035-.297-17.305-1.48-18.79-2.595C-.219 13.86-.15 3.212.221.834.591-1.544 19.092 1.92 19.092 1.92z",
    transform: "translate(121.84 659.19)",
    fill: "url(#Y)"
  }), __jsx("path", {
    d: "M10.124.214C8.786 5.12 5.367 16.42 4.177 37.827c-1.19 21.408.297 87.118.297 103.174 0 16.055-3.865 44.598-4.163 63.925-.297 19.327-.68 37.5.446 38.207 2.49 1.561 16.763 2.676 21.557 0 .837-.467 8.623-67.94 13.975-96.186 3.53-18.636 17.245-119.826 18.137-134.692C55.318-2.61 10.124.215 10.124.215z",
    transform: "translate(120.336 419.195)",
    fill: "url(#Z)"
  }), __jsx("path", {
    d: "M133.57 657.807c-6.616 0-11.73-1.322-13.597-2.265a.892.892 0 1 1 .804-1.592c2.588 1.306 11.925 3.374 22.806 1.008a.892.892 0 1 1 .378 1.744c-3.68.8-7.21 1.105-10.39 1.105z",
    fill: "#CD218F"
  })), __jsx("g", null, __jsx("path", {
    d: "M20.307.066C21.72 2.594 28.01 5.73 33.91 7.128c6.36 1.505 10.889 2.374 10.63 4.906-.297 2.899-14.123 3.865-24.158 3.568-10.035-.297-16.799-.67-18.285-1.784C.527 12.64-.283 4.228.09 1.85.462-.528 20.307.066 20.307.066z",
    transform: "translate(193.033 666.202)",
    fill: "url(#aa)"
  }), __jsx("path", {
    d: "M52.95 8.632c.669 8.92 6.69 117.074 8.028 134.913 1.338 17.84 7.209 100.189 6.467 101.762-1.227 2.601-20.182 5.5-23.08 2.936-1.855-1.641-7.843-43.372-12.6-70.727-4.757-27.355-15.164-75.819-20.516-94.848C5.897 63.639-3.915 32.493 1.66 4.84 6.79-.957 18.167-.827 30.65 1.496c12.854 2.391 22.3 7.136 22.3 7.136z",
    transform: "translate(148.349 421.332)",
    fill: "url(#ab)"
  }), __jsx("path", {
    d: "M163.707 521.994a626.166 626.166 0 0 0-3.214-12.552c-1.108-4.17-2.364-8.298-3.575-12.453-2.434-8.302-4.723-16.67-6.467-25.179a.892.892 0 1 1 1.751-.343c1.58 8.464 3.71 16.83 5.994 25.16 1.133 4.166 2.323 8.333 3.361 12.538 1.05 4.2 2.036 8.412 2.998 12.629a.434.434 0 0 1-.848.2z",
    fill: "#CD218F"
  }), __jsx("path", {
    d: "M151.316 472.474a.885.885 0 0 1-.347-.07c-2.609-1.101-8.522-5.367-9.976-7.788a.892.892 0 1 1 1.53-.917c1.169 1.947 6.607 5.992 9.141 7.062a.891.891 0 0 1-.347 1.713zM198.068 664.36c-3.502 0-6.335-.381-7.548-.835a.89.89 0 1 1 .626-1.67c2.858 1.068 16.302 1.64 24.028-3.197a.89.89 0 1 1 .947 1.512c-5.135 3.215-12.45 4.19-18.053 4.19z",
    fill: "#CD218F"
  })), __jsx("g", null, __jsx("path", {
    d: "M23.702 93.545c5.352-10.704 26.946-56.99 29.176-59.815 2.23-2.825 3.98-3.38 4.609-7.656.522-3.55.24-6.002.892-8.771.892-3.791 6.273-13.913 4.906-16.874-.892-1.933-4.46 3.197-5.798 4.832-1.338 1.635-5.312 8.022-6.26 7.43-.253-2.487.073-10.849.073-10.849-1.692 2.007-4.033 7.136-5.371 12.488-1.338 5.352-.93 7.21-3.903 13.306-2.973 6.096-27.429 32.854-39.916 60.73A168.692 168.692 0 0 0 0 93.292c5.278 3.701 12.332 7.434 20.829 8.917.89-3.603 1.859-6.638 2.873-8.665z",
    fill: "url(#ac)",
    transform: "translate(144.778 179.481)"
  })), __jsx("g", null, __jsx("path", {
    d: "M50.65 54.835c-15.846-4.447-14.285-2.039-16.014-2.812-1.897-1.899.45-27.698 4.257-43.107C30.396 7.434 23.343 3.702 18.064 0 6.861 27.301.524 62.082.104 89.4c-.446 28.989.67 57.979.892 59.317.223 1.338 20.507 13.825 43.039 14.049 22.449.223 30.55-5.575 30.55-5.575s4.5-79.475 3.774-81.698c-.727-2.224-11.862-16.21-27.708-20.658z",
    transform: "translate(126.713 272.773)",
    fill: "url(#ad)"
  }), __jsx("path", {
    d: "M173.907 430.136c-.69 0-1.39-.007-2.11-.02-26.625-.459-43.137-12.2-45.067-14.34a.893.893 0 0 1 1.324-1.196c1.561 1.731 17.844 13.306 43.773 13.753 21.882.379 29.193-5.29 29.264-5.348a.893.893 0 0 1 1.117 1.392c-.302.243-7.428 5.758-28.301 5.758zM190.87 345.157a.89.89 0 0 1-.79-.478c-2.788-5.31-12.318-12.723-16.598-14.388a.892.892 0 0 1 .646-1.663c4.624 1.798 14.523 9.495 17.531 15.222a.892.892 0 0 1-.788 1.307zM146.566 318.056a.891.891 0 0 1-.877-.74c-1.824-10.476 4.015-27.28 6.822-35.353.606-1.747 1.086-3.126 1.275-3.839a.89.89 0 0 1 1.091-.632.89.89 0 0 1 .632 1.09c-.206.779-.67 2.116-1.314 3.967-2.757 7.933-8.494 24.441-6.75 34.463a.892.892 0 0 1-.879 1.044z",
    fill: "#05C5DA"
  }), __jsx("path", {
    d: "M135.738 321.81a.891.891 0 0 1-.588-1.563c1.787-1.562 11.42-6.86 22.565-2.157a.892.892 0 1 1-.693 1.644c-10.354-4.368-19.354.68-20.697 1.856a.894.894 0 0 1-.587.22z",
    fill: "#05C5DA"
  })), __jsx("g", null, __jsx("path", {
    d: "M.564 0C3.96 5.625 10.718 6.69 11.276 8.585c.557 1.896-3.122 5.687-4.237 6.356C5.924 15.61.572 4.683.126 3.456-.32 2.23.564 0 .564 0z",
    transform: "translate(184.336 265.504)",
    fill: "url(#ae)"
  }), __jsx("path", {
    d: "M27.163 0S11.72 4.515 4.14 15.071c-4.187 5.828 1.01 16.094 6.504 24.124-1.84 1.572-2.788 3.379-2.788 3.379l-.706 1.97C6.74 49.04 1.846 64.523.062 69.133c-.663 1.714 3.984 8.018 14.111 8.524 8.92.446 14.867-3.79 14.867-3.79l.855-19.569s.3-1.225.622-2.892c4.314-.55 9.22-2.24 13.315-6.455C54.09 34.397 32.905 4.627 27.163 0z",
    transform: "translate(148.323 253.741)",
    fill: "url(#af)"
  }), __jsx("path", {
    d: "M30.485 41.658c1.13-.764.818-3.122-1.858-5.798s-5.5-5.055-4.98-7.879c.517-2.802 9.742-5.788 14.072-8.998C44.832 13.709 47.136.923 42.825.106c-5.915-1.12-7.803 6.987-9.366 6.987-1.858 0-.907-4.334-3.573-4.02-3.86.452-5.348 5.953-7.577 7.662C18.968 13.297 1.2 18.763.083 31.995c-.908 10.77 5.838 16.894 8.809 20.738 3.16 4.088 4.134 6.19 4.683 6.355.985.297 5.32-.35 9.031-1.895 4.014-1.673 6.467-3.791 5.686-4.795-.78-1.003-6.615-2.123-7.024-7.024-.297-3.568 2.119-5.129 4.014-4.794 1.896.334 3.94 1.933 5.203 1.078z",
    fill: "url(#ag)",
    transform: "translate(141.899 239.195)"
  }), __jsx("path", {
    d: "M2.008.215c.698.022 1.226 4.757 3.959 5.408C7.787 6.056 13.64 2 16.28.83 17.884.118 20.74-.37 20.925.364c.184.733.596 3.42 1.6 5.817.847 2.024 2.787 3.884 1.84 8.028-1.392 6.086-11.987 10.648-19.234 9.589-.168-1.729-.41-4.41-1.617-9.255C2.119 8.95-.051 3.858 0 2.836.076 1.368.819.178 2.008.216z",
    transform: "translate(173.088 284.243)",
    fill: "url(#ah)"
  }), __jsx("path", {
    d: "M182.864 274.461a1.338 1.338 0 0 1-1.288-.98c-.307-1.106-1.71-3.542-1.991-3.915a1.35 1.35 0 0 1 .24-1.873 1.326 1.326 0 0 1 1.855.208c.36.449 2.042 3.304 2.475 4.864a1.338 1.338 0 0 1-1.291 1.696z",
    fill: "#0090B2"
  }), __jsx("path", {
    d: "M189.842 289.029c.158.265.643.59 1.075.763.452.185.939.275 1.406.223.948-.083 1.746-.853 2.238-1.81a.356.356 0 0 1 .645.3c-.235.554-.543 1.103-.995 1.566a3.327 3.327 0 0 1-1.717.954c-.663.139-1.345.073-1.968-.118-.627-.219-1.207-.445-1.76-1.082l-.009-.012a.673.673 0 0 1 1.016-.88c.025.03.05.064.069.096z",
    fill: "#F1D2F8"
  }), __jsx("path", {
    d: "M14.173 14.646c8.92.446 14.866-3.791 14.866-3.791l.312-7.13C27.105 4.933 22.257 7.01 15.869 6.69 8.116 6.303 3.586 2.523 2.181 0 1.339 2.589.572 4.802.062 6.12c-.663 1.715 3.983 8.019 14.11 8.526z",
    transform: "translate(148.324 316.754)",
    fill: "url(#ai)"
  }), __jsx("path", {
    d: "M163.827 332.324c-.45 0-.908-.01-1.375-.034-7.484-.374-12.314-3.857-14.177-6.726-.763-1.175-1.019-2.244-.722-3.012a.892.892 0 0 1 1.666.638c-.026.11.03.71.777 1.726 1.828 2.49 6.085 5.268 12.545 5.591 8.512.419 14.246-3.585 14.304-3.626a.892.892 0 1 1 1.036 1.453c-.24.172-5.702 3.99-14.054 3.99z",
    fill: "#05C5DA"
  })), __jsx("g", null, __jsx("path", {
    d: "M37.845 92.903C35.318 85.17 32.654 34.936 28.138 0 15.604.332 5.408 3.473 0 6.057c1.273 5.879 3.106 13.57 6.013 23.683 7.954 27.671 18.62 59.206 18.806 66.007.11 4.012-3.306 8.722-3.741 14.647-.292 3.973 1.324 10.44 2.849 10.329 1.933-.141 1.771-6.027 2.546-8.809 1.226-4.404 3.847-5.909 3.847-5.909s5.575.014 14.974.014c-1.32-4.739-6.347-9.743-7.449-13.116z",
    transform: "translate(184.137 380.6)",
    fill: "url(#aj)"
  }), __jsx("path", {
    d: "M27.686 3.784C18.766-5.731 1.669 4.23.034 16.718c-.35 2.67 2.08 5.799 3.865 10.407 1.058 2.732 1.721 7.445 3.576 16.011 5.407-2.585 15.604-5.726 28.138-6.058-2.157-16.689-4.737-29.891-7.927-33.294z",
    transform: "translate(176.66 343.522)",
    fill: "url(#ak)"
  }), __jsx("path", {
    d: "M184.137 387.55a.893.893 0 0 1-.385-1.697c2.798-1.337 13.128-5.737 28.498-6.144.495.002.903.376.916.869a.891.891 0 0 1-.868.915c-11.933.315-22.173 3.29-27.777 5.97a.882.882 0 0 1-.384.087zM176.696 361.132a.893.893 0 0 1-.886-1.008c.947-7.231 7.089-14.235 14.603-16.654 5.642-1.817 10.959-.641 14.585 3.227a.893.893 0 0 1-1.302 1.221c-4.292-4.578-9.822-3.688-12.737-2.749-6.891 2.218-12.518 8.606-13.38 15.188a.893.893 0 0 1-.883.775z",
    fill: "#05C5DA"
  })), __jsx("g", null, __jsx("path", {
    d: "M473.455 258.241l-9.389-.818 8.697-8.58.692 9.398z",
    fill: "#F95FC3"
  }), __jsx("path", {
    d: "M440.279 286.949a.892.892 0 0 1-.848-.615c-4.577-13.986 4.46-22.654 19.432-37.015 3.092-2.965 6.597-6.326 10.218-9.977 21.318-21.488 17.156-43.31 15.372-49.485a.892.892 0 0 1 1.714-.494c1.852 6.411 6.184 29.057-15.82 51.235-3.637 3.666-7.15 7.036-10.248 10.008-14.468 13.876-23.2 22.252-18.973 35.173a.89.89 0 0 1-.847 1.17z",
    fill: "#1AA9E8"
  }), __jsx("path", {
    d: "M482.614 245.212l-3.166-3.14c8.101-8.167 13.301-17.262 15.458-27.032l4.356.962c-2.342 10.607-7.942 20.435-16.648 29.21z",
    fill: "#00E2EC"
  }), __jsx("path", {
    d: "M481.78 189.61a3.53 3.53 0 1 1 7.062 0 3.53 3.53 0 0 1-7.061 0z",
    fill: "#FDE1A7"
  })), __jsx("g", null, __jsx("path", {
    d: "M432.248 290.517a.883.883 0 0 1-.412-.103c-.261-.137-6.39-3.482-4.928-13.7.827-5.792 4.6-10.663 8.597-15.82 5.196-6.705 10.569-13.64 9.83-23.234-.285-3.717-2.193-6.983-5.67-9.71-18.623-14.606-76.119-10.674-90.727-8.259a.891.891 0 1 1-.29-1.76c14.779-2.443 73.025-6.36 92.118 8.615 3.886 3.048 6.022 6.742 6.348 10.978.79 10.28-5.048 17.815-10.2 24.463-3.847 4.965-7.481 9.655-8.24 14.979-1.275 8.915 3.78 11.755 3.995 11.872a.894.894 0 0 1 .366 1.206.89.89 0 0 1-.787.473z",
    fill: "#1AA9E8"
  }), __jsx("path", {
    d: "M416.705 230.111c-8.53-1.402-18.706-2.122-30.247-2.138l.007-4.46c11.78.017 22.197.756 30.964 2.197l-.724 4.401z",
    fill: "#C7A0F6"
  }), __jsx("path", {
    d: "M345.261 218.81a3.53 3.53 0 1 1 7.061 0 3.53 3.53 0 0 1-7.06 0z",
    fill: "#FDE1A7"
  })), __jsx("g", null, __jsx("path", {
    d: "M93.321 301.043l-3.229 8.854-6.027-10.625 9.256 1.771z",
    fill: "#F95FC3"
  }), __jsx("path", {
    d: "M185.73 375.053c-.706 0-1.409-.006-2.115-.016-35.644-.54-67.372-14.404-89.339-39.043-25.836-28.98-38.1-65.71-32.807-98.253 3.975-24.435 17.456-44.36 37.962-56.105a.892.892 0 1 1 .887 1.549c-20.03 11.472-33.202 30.95-37.088 54.843-5.208 32.018 6.895 68.197 32.378 96.78 45.9 51.483 129.39 51.583 190.076.223 10.498-8.884 19.448-18.047 28.104-26.908 20.59-21.077 38.372-39.28 65.35-39.958 25.201-.631 37.717 12.381 43.783 23.409a.893.893 0 1 1-1.563.86c-5.827-10.594-17.863-23.09-42.175-22.485-26.254.659-43.8 18.622-64.119 39.42-8.685 8.89-17.666 18.084-28.228 27.022-29.513 24.98-65.34 38.66-101.107 38.662z",
    fill: "#1AA9E8"
  }), __jsx("path", {
    d: "M80.711 291.192c-4.18-11.887-6.404-23.903-6.611-35.714l4.459-.079c.199 11.333 2.338 22.877 6.36 34.313l-4.208 1.48z",
    fill: "#C7A0F6"
  }), __jsx("path", {
    d: "M217.635 364.358l-.974-4.352c10.427-2.334 20.743-5.844 30.664-10.433l1.872 4.048c-10.207 4.723-20.826 8.335-31.562 10.738z",
    fill: "#00E2EC"
  }), __jsx("path", {
    d: "M96.345 182.411a3.53 3.53 0 1 1 7.061 0 3.53 3.53 0 0 1-7.061 0z",
    fill: "#FDE1A7"
  })), __jsx("g", null, __jsx("path", {
    d: "M397.432 433.754l-9.262 1.749 6.056-10.612 3.206 8.863z",
    fill: "#00E2EC"
  }), __jsx("path", {
    d: "M329.272 454.377c-1.23 0-2.418-.033-3.551-.097a.892.892 0 0 1-.84-.94.902.902 0 0 1 .94-.84c17.201.975 46.783-5.294 57.768-26.514 4.917-9.497 6.296-23.115 7.754-37.532 2.42-23.894 4.92-48.6 23.494-60.044a.892.892 0 1 1 .935 1.52c-17.822 10.98-20.278 35.242-22.653 58.704-1.477 14.591-2.873 28.374-7.946 38.174-10.645 20.561-37.96 27.57-55.9 27.57z",
    fill: "#1AA9E8"
  }), __jsx("path", {
    d: "M400.468 416.492l-4.34-1.03c1.821-7.667 2.71-16.454 3.652-25.759.265-2.616.532-5.252.823-7.886l4.434.49a871.19 871.19 0 0 0-.819 7.846c-.957 9.455-1.861 18.384-3.75 26.339z",
    fill: "#F95FC3"
  }), __jsx("path", {
    d: "M322.239 453.39a3.53 3.53 0 1 1 7.061 0 3.53 3.53 0 0 1-7.061 0z",
    fill: "#C7A0F6"
  })));
};

Heroimg.defaultProps = {
  width: "720",
  height: "695",
  viewBox: "0 0 720 695",
  xmlns: "http://www.w3.org/2000/svg"
};

var Webdesign = function Webdesign(props) {
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

Webdesign.defaultProps = {
  width: "865",
  height: "426",
  viewBox: "0 0 865 426",
  xmlns: "http://www.w3.org/2000/svg"
};

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



const MainWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__MainWapper",
  componentId: "pvabpx-0"
})(["position:relative;z-index:30;"]);
const HomeWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "pages__HomeWapper",
  componentId: "pvabpx-1"
})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:space-around;& > div{font-size:2.5rem;padding:4rem;width:70%;height:50vh;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;& > h1{font-size:7rem;font-weight:500;}& > p{font-family:", ";}}& > svg{height:100%;}"], props => props.theme.fonts.second);
const ServiesWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "pages__ServiesWapper",
  componentId: "pvabpx-2"
})(["margin:0 4rem;"]);
const SubtitlegridWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__SubtitlegridWapper",
  componentId: "pvabpx-3"
})(["& > div:nth-child(even){& > div{order:2;}}& > div{display:flex;align-items:center;& > svg{width:50%;}& > div{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;font-size:2.5rem;width:60%;margin:0 3rem;& > *{margin:2rem 0;}& > h2{font-weight:500;}& > p{font-size:2.5rem;font-family:", ";}}}"], props => props.theme.fonts.second);
const Aboutuswapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Aboutuswapper",
  componentId: "pvabpx-4"
})(["margin:4rem;& > p{font-size:3rem;font-family:", ";}"], props => props.theme.fonts.second);
const content = "It should not be neglected that the accurate predictions of the operational system will require a vast knowledge. To be more specific, any part of the deep analysis makes no difference to The Assistance of Technology-Driven Idea George Albrecht in The Book of ";
const serviesdata = [{
  name: "Web Design",
  content,
  Svg: Webdesign
}, {
  name: "Web Development",
  content,
  Svg: Webdev
}, {
  name: "E-commerce",
  content,
  Svg: Ecom
}];

const Home = () => __jsx(MainWapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 3
  }
}, __jsx(HomeWapper, {
  id: "home",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 7
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }
}, "The Codecos"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 9
  }
}, "Fortunately, a supervisory action of the condition of the application rules likely the existing network. Therefore, the concept of the first-class pac"), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: "Contact us",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }
})), __jsx(Heroimg, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 7
  }
})), __jsx(ServiesWapper, {
  id: "servies",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }
}, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Serviesse",
  info: "Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 7
  }
}), __jsx(SubtitlegridWapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 7
  }
}, serviesdata.map(({
  name,
  Svg,
  content
}, i) => {
  return __jsx("div", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, `${i + 1}.${name}`), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, content), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "View Prices",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  })), __jsx(Svg, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }));
}))), __jsx(Aboutuswapper, {
  id: "aboutus",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }
}, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "About us",
  info: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 7
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 7
  }
}, "\"To be quite frank, elements of the software engineering concepts and practices can be regarded as remotely insignificant. The sources and influences of the independent knowledge presumably the primary element. It should rather be regarded as an integral part of the technical terms the strategic decisions and The Facility of Relational Index\" (Jude Bartley in The Book of the Major Outcomes) Conversely, with the exception of the skills the operations research. The real reason of the continuing enhancement doctrine successfully the sources and influences of the application rules.")), __jsx(_components_contactus__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWN0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJ0aXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQnV0dG9uV2FwcGVyIiwic3R5bGVkIiwiYSIsIkJ1dHRvbiIsInRleHQiLCJTcHBvcnRzIiwiQ29udGFjdHVzV2FwcGVyIiwiZGl2IiwiQ29udGFjdHVzY29udGluZXIiLCJDb250YWN0IiwiU3ViVGl0bGVXYXBwZXIiLCJwcm9wcyIsInRoZW1lIiwiZm9udHMiLCJzZWNvbmQiLCJTdWJUaXRsZSIsInRpdGxlIiwiaW5mbyIsIkhlcm9pbWciLCJXZWJkZXNpZ24iLCJXZWJkZXYiLCJFY29tIiwiTWFpbldhcHBlciIsIkhvbWVXYXBwZXIiLCJzZWN0aW9uIiwiU2Vydmllc1dhcHBlciIsIlN1YnRpdGxlZ3JpZFdhcHBlciIsIkFib3V0dXN3YXBwZXIiLCJjb250ZW50Iiwic2Vydmllc2RhdGEiLCJuYW1lIiwiU3ZnIiwiSG9tZSIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBLE1BQU1BLFlBQVksR0FBR0Msd0RBQU0sQ0FBQ0MsQ0FBRTs7Ozs7O0NBQTlCOztBQVFBLE1BQU1DLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQzNCLFNBQU8sTUFBQyxZQUFEO0FBQWMsUUFBSSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JBLElBQXhCLENBQVA7QUFDRCxDQUZEOztBQUdlRCxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTs7SUFDT0UsTyxZQUFBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE87Ozs7OztBQUNQO0FBQ0EsTUFBTUMsZUFBZSxHQUFHTCx3REFBTSxDQUFDTSxHQUFWO0FBQUE7QUFBQTtBQUFBLG9CQUFyQjtBQUdBLE1BQU1DLGlCQUFpQixHQUFHUCx3REFBTSxDQUFDTSxHQUFWO0FBQUE7QUFBQTtBQUFBLHlEQUF2Qjs7QUFPQSxNQUFNRSxPQUFPLEdBQUcsTUFBTTtBQUNwQixTQUNFLE1BQUMsZUFBRDtBQUFpQixNQUFFLEVBQUMsV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUMsWUFBaEI7QUFBNkIsUUFBSSxFQUFDLHNCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFFLEVBQUMsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLE1BQUUsRUFBQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FMRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsTUFBRSxFQUFDLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVRGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQVEsTUFBRSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsU0FBSyxFQUFDLFlBQWQ7QUFBMkIsT0FBRyxFQUFDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFJRTtBQUFRLFNBQUssRUFBQyxpQkFBZDtBQUFnQyxPQUFHLEVBQUMsR0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixFQU9FO0FBQVEsU0FBSyxFQUFDLFlBQWQ7QUFBMkIsT0FBRyxFQUFDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBUEYsQ0FGRixDQWJGLEVBMkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQVUsUUFBSSxFQUFDLElBQWY7QUFBb0IsTUFBRSxFQUFDLFNBQXZCO0FBQWlDLFFBQUksRUFBQyxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0EzQkYsQ0FERixFQWlDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDRixDQUZGLENBREY7QUF3Q0QsQ0F6Q0Q7O0FBMkNlQSxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBLE1BQU1DLGNBQWMsR0FBR1Qsd0RBQU0sQ0FBQ00sR0FBVjtBQUFBO0FBQUE7QUFBQSxrU0FLQUksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsTUFMNUIsQ0FBcEI7O0FBNEJBLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUFELEtBQXFCO0FBQ3BDLFNBQ0UsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRCxLQUFKLENBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsSUFBSixDQUpGLENBREY7QUFRRCxDQVREOztBQVVlRix1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTs7SUFDT0csTyxZQUFBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPOzs7Ozs7O0lBQ0FDLFMsWUFBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxTOzs7Ozs7O0lBQ0FDLE0sWUFBQUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNOzs7Ozs7O0lBQ0FDLEksWUFBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxJOzs7Ozs7QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxVQUFVLEdBQUdyQix3REFBTSxDQUFDTSxHQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUFoQjtBQUtBLE1BQU1nQixVQUFVLEdBQUd0Qix3REFBTSxDQUFDdUIsT0FBVjtBQUFBO0FBQUE7QUFBQSxzVUFvQk1iLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JDLE1BcEJsQyxDQUFoQjtBQTJCQSxNQUFNVyxhQUFhLEdBQUd4Qix3REFBTSxDQUFDdUIsT0FBVjtBQUFBO0FBQUE7QUFBQSxzQkFBbkI7QUFHQSxNQUFNRSxrQkFBa0IsR0FBR3pCLHdEQUFNLENBQUNNLEdBQVY7QUFBQTtBQUFBO0FBQUEsOFVBNEJBSSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFaLENBQWtCQyxNQTVCNUIsQ0FBeEI7QUFpQ0EsTUFBTWEsYUFBYSxHQUFHMUIsd0RBQU0sQ0FBQ00sR0FBVjtBQUFBO0FBQUE7QUFBQSw0REFJQ0ksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsTUFKN0IsQ0FBbkI7QUFPQSxNQUFNYyxPQUFPLEdBQ1gsc1FBREY7QUFFQSxNQUFNQyxXQUFXLEdBQUcsQ0FDbEI7QUFBRUMsTUFBSSxFQUFFLFlBQVI7QUFBc0JGLFNBQXRCO0FBQStCRyxLQUFHLEVBQUVaO0FBQXBDLENBRGtCLEVBRWxCO0FBQUVXLE1BQUksRUFBRSxpQkFBUjtBQUEyQkYsU0FBM0I7QUFBb0NHLEtBQUcsRUFBRVg7QUFBekMsQ0FGa0IsRUFHbEI7QUFBRVUsTUFBSSxFQUFFLFlBQVI7QUFBc0JGLFNBQXRCO0FBQStCRyxLQUFHLEVBQUVWO0FBQXBDLENBSGtCLENBQXBCOztBQUtBLE1BQU1XLElBQUksR0FBRyxNQUNYLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxVQUFEO0FBQVksSUFBRSxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0SkFGRixFQU9FLE1BQUMsMERBQUQ7QUFBUSxNQUFJLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUEYsQ0FERixFQVVFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVkYsQ0FERixFQWFFLE1BQUMsYUFBRDtBQUFlLElBQUUsRUFBQyxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyw0REFBRDtBQUNFLE9BQUssRUFBQyxXQURSO0FBRUUsTUFBSSxFQUFDLDZIQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUtFLE1BQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNHSCxXQUFXLENBQUNJLEdBQVosQ0FBZ0IsQ0FBQztBQUFFSCxNQUFGO0FBQVFDLEtBQVI7QUFBYUg7QUFBYixDQUFELEVBQXlCTSxDQUF6QixLQUErQjtBQUM5QyxTQUNFO0FBQUssT0FBRyxFQUFFQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLEdBQUVBLENBQUMsR0FBRyxDQUFFLElBQUdKLElBQUssRUFBdEIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUYsT0FBSixDQUZGLEVBR0UsTUFBQywwREFBRDtBQUFRLFFBQUksRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBTUUsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGO0FBVUQsQ0FYQSxDQURILENBTEYsQ0FiRixFQWlDRSxNQUFDLGFBQUQ7QUFBZSxJQUFFLEVBQUMsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsNERBQUQ7QUFBVSxPQUFLLEVBQUMsVUFBaEI7QUFBMkIsTUFBSSxFQUFDLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ2xCQUZGLENBakNGLEVBK0NFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQS9DRixDQURGOztBQW9EZUksbUVBQWYsRTs7Ozs7Ozs7Ozs7QUM5SUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuY29uc3QgQnV0dG9uV2FwcGVyID0gc3R5bGVkLmFgXHJcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODFhNztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyB0ZXh0IH0pID0+IHtcclxuICByZXR1cm4gPEJ1dHRvbldhcHBlciBocmVmPVwiI1wiPnt0ZXh0fTwvQnV0dG9uV2FwcGVyPjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgU3Bwb3J0cyBmcm9tIFwiLi4vaW1hZ2VzL3NwcG9ydC5zdmdcIjtcclxuaW1wb3J0IFN1YnRpdGxlIGZyb20gXCIuL3N1YnRpdGxlXCI7XHJcbmNvbnN0IENvbnRhY3R1c1dhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiA1cmVtO1xyXG5gO1xyXG5jb25zdCBDb250YWN0dXNjb250aW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICYgPiBmb3JtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFjdHVzV2FwcGVyIGlkPVwiY29udGFjdHVzXCI+XHJcbiAgICAgIDxTdWJ0aXRsZSB0aXRsZT1cIkNvbnRhY3QgdXNcIiBpbmZvPVwiRmVlbCBmcmVlIENvbnRhY3QgdXNcIiAvPlxyXG4gICAgICA8Q29udGFjdHVzY29udGluZXI+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicGhvbmVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlcnZpZXN0eXBlXCI+U2VydmllcyBUeXBlPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlcnZpZXN0eXBlXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldlYiBkZXNpZ25cIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICBXZWIgZGVzaWduXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldlYiBEZXZlbG9wbWVudFwiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAgICAgIFdlYiBkZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFLWNvbW1lcmNlXCIga2V5PVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgRS1jb21tZXJjZSBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXRpbGVzXCI+RGV0aWxlczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiBpZD1cImRldGlsZXNcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxTcHBvcnRzIC8+XHJcbiAgICAgIDwvQ29udGFjdHVzY29udGluZXI+XHJcbiAgICA8L0NvbnRhY3R1c1dhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuY29uc3QgU3ViVGl0bGVXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgd2lkdGg6IDcwJTtcclxuICAmID4gcCB7XHJcbiAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgfVxyXG4gICYgPiBoMSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG5cclxuICAgICYgPiBwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmEzYzg7XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgU3ViVGl0bGUgPSAoeyB0aXRsZSwgaW5mbyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdWJUaXRsZVdhcHBlcj5cclxuICAgICAgPGgxPlxyXG4gICAgICAgIDxwPnt0aXRsZX08L3A+XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxwPntpbmZvfTwvcD5cclxuICAgIDwvU3ViVGl0bGVXYXBwZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3ViVGl0bGU7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBIZXJvaW1nIGZyb20gXCIuLi9pbWFnZXMvaGVyby5zdmdcIjtcclxuaW1wb3J0IFdlYmRlc2lnbiBmcm9tIFwiLi4vaW1hZ2VzL3dlYmRlc2lnbi5zdmdcIjtcclxuaW1wb3J0IFdlYmRldiBmcm9tIFwiLi4vaW1hZ2VzL3dlYmRldi5zdmdcIjtcclxuaW1wb3J0IEVjb20gZnJvbSBcIi4uL2ltYWdlcy9lY29tLnN2Z1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgU3VidGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3VidGl0bGVcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFjdHVzXCI7XHJcbmNvbnN0IE1haW5XYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzMDtcclxuYDtcclxuXHJcbmNvbnN0IEhvbWVXYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAmID4gZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgcGFkZGluZzogNHJlbTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAmID4gaDEge1xyXG4gICAgICBmb250LXNpemU6IDdyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAmID4gcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICAgIH1cclxuICB9XHJcbiAgJiA+IHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTZXJ2aWVzV2FwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgbWFyZ2luOiAwIDRyZW07XHJcbmA7XHJcbmNvbnN0IFN1YnRpdGxlZ3JpZFdhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgJiA+IGRpdjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgJiA+IHN2ZyB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgbWFyZ2luOiAwIDNyZW07XHJcbiAgICAgICYgPiAqIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgfVxyXG4gICAgICAmID4gaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgQWJvdXR1c3dhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiA0cmVtO1xyXG4gICYgPiBwIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IGNvbnRlbnQgPVxyXG4gIFwiSXQgc2hvdWxkIG5vdCBiZSBuZWdsZWN0ZWQgdGhhdCB0aGUgYWNjdXJhdGUgcHJlZGljdGlvbnMgb2YgdGhlIG9wZXJhdGlvbmFsIHN5c3RlbSB3aWxsIHJlcXVpcmUgYSB2YXN0IGtub3dsZWRnZS4gVG8gYmUgbW9yZSBzcGVjaWZpYywgYW55IHBhcnQgb2YgdGhlIGRlZXAgYW5hbHlzaXMgbWFrZXMgbm8gZGlmZmVyZW5jZSB0byBUaGUgQXNzaXN0YW5jZSBvZiBUZWNobm9sb2d5LURyaXZlbiBJZGVhIEdlb3JnZSBBbGJyZWNodCBpbiBUaGUgQm9vayBvZiBcIjtcclxuY29uc3Qgc2Vydmllc2RhdGEgPSBbXHJcbiAgeyBuYW1lOiBcIldlYiBEZXNpZ25cIiwgY29udGVudCwgU3ZnOiBXZWJkZXNpZ24gfSxcclxuICB7IG5hbWU6IFwiV2ViIERldmVsb3BtZW50XCIsIGNvbnRlbnQsIFN2ZzogV2ViZGV2IH0sXHJcbiAgeyBuYW1lOiBcIkUtY29tbWVyY2VcIiwgY29udGVudCwgU3ZnOiBFY29tIH0sXHJcbl07XHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgPE1haW5XYXBwZXI+XHJcbiAgICA8SG9tZVdhcHBlciBpZD1cImhvbWVcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+VGhlIENvZGVjb3M8L2gxPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgRm9ydHVuYXRlbHksIGEgc3VwZXJ2aXNvcnkgYWN0aW9uIG9mIHRoZSBjb25kaXRpb24gb2YgdGhlIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICBydWxlcyBsaWtlbHkgdGhlIGV4aXN0aW5nIG5ldHdvcmsuIFRoZXJlZm9yZSwgdGhlIGNvbmNlcHQgb2YgdGhlXHJcbiAgICAgICAgICBmaXJzdC1jbGFzcyBwYWNcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ29udGFjdCB1c1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SGVyb2ltZyAvPlxyXG4gICAgPC9Ib21lV2FwcGVyPlxyXG4gICAgPFNlcnZpZXNXYXBwZXIgaWQ9XCJzZXJ2aWVzXCI+XHJcbiAgICAgIDxTdWJ0aXRsZVxyXG4gICAgICAgIHRpdGxlPVwiU2Vydmllc3NlXCJcclxuICAgICAgICBpbmZvPVwiTW9yZW92ZXIsIHRoZSB1dGlsaXphdGlvbiBvZiB0aGUgbWVjaGFuaXNtIHNob3VsZCBoZWxwIGluIHJlc29sdmluZyBwcmVzZW50IGNoYWxsZW5nZXMuIFdoYXQgaXMgbW9yZSwgdGhlIHJhdyBkcmFmdCBvZiB0aGUgXCJcclxuICAgICAgLz5cclxuICAgICAgPFN1YnRpdGxlZ3JpZFdhcHBlcj5cclxuICAgICAgICB7c2Vydmllc2RhdGEubWFwKCh7IG5hbWUsIFN2ZywgY29udGVudCB9LCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj57YCR7aSArIDF9LiR7bmFtZX1gfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD57Y29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJWaWV3IFByaWNlc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFN2ZyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvU3VidGl0bGVncmlkV2FwcGVyPlxyXG4gICAgPC9TZXJ2aWVzV2FwcGVyPlxyXG4gICAgPEFib3V0dXN3YXBwZXIgaWQ9XCJhYm91dHVzXCI+XHJcbiAgICAgIDxTdWJ0aXRsZSB0aXRsZT1cIkFib3V0IHVzXCIgaW5mbz1cIlwiIC8+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFwiVG8gYmUgcXVpdGUgZnJhbmssIGVsZW1lbnRzIG9mIHRoZSBzb2Z0d2FyZSBlbmdpbmVlcmluZyBjb25jZXB0cyBhbmRcclxuICAgICAgICBwcmFjdGljZXMgY2FuIGJlIHJlZ2FyZGVkIGFzIHJlbW90ZWx5IGluc2lnbmlmaWNhbnQuIFRoZSBzb3VyY2VzIGFuZFxyXG4gICAgICAgIGluZmx1ZW5jZXMgb2YgdGhlIGluZGVwZW5kZW50IGtub3dsZWRnZSBwcmVzdW1hYmx5IHRoZSBwcmltYXJ5IGVsZW1lbnQuXHJcbiAgICAgICAgSXQgc2hvdWxkIHJhdGhlciBiZSByZWdhcmRlZCBhcyBhbiBpbnRlZ3JhbCBwYXJ0IG9mIHRoZSB0ZWNobmljYWwgdGVybXNcclxuICAgICAgICB0aGUgc3RyYXRlZ2ljIGRlY2lzaW9ucyBhbmQgVGhlIEZhY2lsaXR5IG9mIFJlbGF0aW9uYWwgSW5kZXhcIiAoSnVkZVxyXG4gICAgICAgIEJhcnRsZXkgaW4gVGhlIEJvb2sgb2YgdGhlIE1ham9yIE91dGNvbWVzKSBDb252ZXJzZWx5LCB3aXRoIHRoZVxyXG4gICAgICAgIGV4Y2VwdGlvbiBvZiB0aGUgc2tpbGxzIHRoZSBvcGVyYXRpb25zIHJlc2VhcmNoLiBUaGUgcmVhbCByZWFzb24gb2YgdGhlXHJcbiAgICAgICAgY29udGludWluZyBlbmhhbmNlbWVudCBkb2N0cmluZSBzdWNjZXNzZnVsbHkgdGhlIHNvdXJjZXMgYW5kIGluZmx1ZW5jZXNcclxuICAgICAgICBvZiB0aGUgYXBwbGljYXRpb24gcnVsZXMuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWJvdXR1c3dhcHBlcj5cclxuICAgIDxDb250YWN0IC8+XHJcbiAgPC9NYWluV2FwcGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==