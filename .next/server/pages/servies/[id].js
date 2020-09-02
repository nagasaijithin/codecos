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
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\components\\button.js";

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
})(["margin:5rem;@media ", "{margin:3rem;}"], props => props.theme.media.mbS);
const Contactuscontiner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "contactus__Contactuscontiner",
  componentId: "sc-9u9tv2-1"
})(["display:flex;align-items:center;& > svg{@media ", "{display:none;}}& > form{flex:1;font-size:2.5rem;margin:0 4rem;@media ", "{margin:0;}& > div{display:flex;flex-direction:column;margin:3rem 0;& > label{margin:0.5rem 0;}& > select{font-size:2.5rem;border:none;background:#fea2c7;color:white;padding:1rem;& > *{padding:1rem;}}& > textarea{resize:none;font-size:3rem;background:transparent;border:none;border-bottom:2px solid #ffa3c8;}& > input{font-size:3rem;background:transparent;border:none;border-bottom:2px solid #ffa3c8;}}& > input[type=\"submit\"]{padding:1.5rem 2rem;background-color:#0081a7;color:white;text-decoration:none;border-radius:12px;border:none;cursor:pointer;font-size:2.5rem;box-shadow:1px 2px 15px -5px black;transition:all 0.4s ease-out;&:hover{color:#0081a7;background-color:white;box-shadow:1px 2px 20px -5px black;transform:scale(1.02);}@media ", "{width:100%;}}}"], props => props.theme.media.tabM, props => props.theme.media.mbS, props => props.theme.media.mbM);

const Contact = () => {
  return __jsx(ContactusWapper, {
    id: "contactus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx(_subtitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Contact us",
    info: "Have a project? Contact us and let's work together!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }), __jsx(Contactuscontiner, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("form", {
    name: "contact",
    method: "POST",
    action: "/",
    "data-netlify": "true",
    autoComplete: "off",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Name"), __jsx("input", {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Type you'r Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Type you'r Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "Phone"), __jsx("input", {
    type: "number",
    name: "phone",
    id: "phone",
    placeholder: "Type you'r Phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "serviestype",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "Servies Type"), __jsx("select", {
    name: "servies[]",
    id: "serviestype",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "Web design",
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, "Web design"), __jsx("option", {
    value: "Web Development",
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "Web development"), __jsx("option", {
    value: "E-commerce",
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, "E-commerce application"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "detiles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, "Detiles"), __jsx("textarea", {
    cols: "30",
    id: "detiles",
    rows: "5",
    name: "project info",
    placeholder: "Type you'r project details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  })), __jsx("input", {
    type: "submit",
    value: "let's talk",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  })), __jsx(Spports, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
  headcontent: "Fortunately, a supervisory action of the condition of the application rules likely the existing network. Therefore, the concept of the first-class pac",
  Headimg: Webdesignsvg,
  approchcontent: "Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the",
  approchdata: [{
    name: "Good Color Pattren",
    content: apdatacont,
    Svg: Colorpatter,
    goto: "#contactus"
  }, {
    name: "Responsive Design",
    content: apdatacont,
    Svg: Respdesign,
    goto: "#contactus"
  }, {
    name: "Logo Design",
    content: apdatacont,
    Svg: Logodesign,
    goto: "#contactus"
  }],
  priceingcontent: "Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the ",
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
  headcontent: "Fortunately, a supervisory action of the condition of the application rules likely the existing network. Therefore, the concept of the first-class pac",
  Headimg: Webdev,
  approchcontent: "Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the",
  approchdata: [{
    name: "Coustem Development",
    content: apdatacont,
    Svg: Webdevcd,
    goto: "#contactus"
  }, {
    name: "Responsive Development",
    content: apdatacont,
    Svg: Respdesign,
    goto: "#contactus"
  }, {
    name: "Ui/UX Development",
    content: apdatacont,
    Svg: UiUx,
    goto: "#contactus"
  }],
  priceingcontent: "Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the ",
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
  headcontent: "Fortunately, a supervisory action of the condition of the application rules likely the existing network. Therefore, the concept of the first-class pac",
  Headimg: Ecom,
  approchcontent: "Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the",
  approchdata: [{
    name: "Coustem Development",
    content: apdatacont,
    Svg: Ecdev,
    goto: "#contactus"
  }, {
    name: "Responsive Development",
    content: apdatacont,
    Svg: Ecres,
    goto: "#contactus"
  }, {
    name: "Secure Payment",
    content: apdatacont,
    Svg: Ecspay,
    goto: "#contactus"
  }, {
    name: "Web View Android Application",
    content: apdatacont,
    Svg: Mapp,
    goto: "#contactus"
  }],
  priceingcontent: "Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the ",
  priceingdata: [{
    ptitle: "BRONZE",
    futrsoffer: ["Coustem Development", "Mobile Responsive", "2 pages", "Icons Integration", "Photo Sourcing", "2 Rounds of Revisions"],
    cost: "270",
    extrfutr: "Contact us for additional futchers"
  }, {
    ptitle: "SILVER",
    futrsoffer: ["Coustem Development", "Mobile Responsive", "4 pages", "Icons Integration", "Photo Sourcing", "Contact Form", "3 Rounds of Revisions"],
    cost: "540",
    extrfutr: "Contact us for additional futchers"
  }, {
    ptitle: "GOLD",
    futrsoffer: ["Coustem Development", "Mobile Responsive", "6 pages", "single page application", "Icons Integration", "Google Maps", "404 Redirect", "Photo Sourcing", "Contact Form", "4 Rounds of Revisions"],
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
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\pages\\servies\\[id].js";

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
    const rdata = _data__WEBPACK_IMPORTED_MODULE_5__["default"].filter((dt, i) => Number(id) === i);
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
        lineNumber: 174,
        columnNumber: 7
      }
    }, __jsx(HomeWapper, {
      id: "home",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }, title), __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }
    }, headcontent), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "View plans",
      goto: `/servies/${id}/#priceing`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    })), __jsx(Headimg, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }
    })), __jsx(ApprochWapper, {
      id: "approche",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }
    }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Approch",
      info: approchcontent,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }
    }), __jsx(ApprochgridWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
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
          lineNumber: 189,
          columnNumber: 17
        }
      }, __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 19
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }
      }, `${name}`), __jsx("p", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }
      }, content), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "Contact us",
        goto: `/servies/${id}/${goto}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }
      })), __jsx(Svg, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 19
        }
      }));
    }))), __jsx(PriceingWapper, {
      id: "priceing",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }
    }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Priceing",
      info: priceingcontent,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 11
      }
    }), __jsx(PriceinggridWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
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
          lineNumber: 206,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 19
        }
      }, ptitle), __jsx("ul", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 19
        }
      }, futrsoffer.map((info, i) => {
        return __jsx("li", {
          key: info,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 30
          }
        }, info);
      })), __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 19
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 21
        }
      }, "$", cost), __jsx("p", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }
      }, extrfutr)));
    }))), __jsx(_components_contactus__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3R1cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1YnRpdGxlLmpzIiwid2VicGFjazovLy8uL2RhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NlcnZpZXMvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJCdXR0b25XYXBwZXIiLCJzdHlsZWQiLCJhIiwiQnV0dG9uIiwidGV4dCIsImdvdG8iLCJTcHBvcnRzIiwiQ29udGFjdHVzV2FwcGVyIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIm1lZGlhIiwibWJTIiwiQ29udGFjdHVzY29udGluZXIiLCJ0YWJNIiwibWJNIiwiQ29udGFjdCIsIlN1YlRpdGxlV2FwcGVyIiwibWJMIiwiZm9udHMiLCJzZWNvbmQiLCJTdWJUaXRsZSIsInRpdGxlIiwiaW5mbyIsIldlYmRlc2lnbnN2ZyIsIlJlc3BkZXNpZ24iLCJDb2xvcnBhdHRlciIsIkxvZ29kZXNpZ24iLCJXZWJkZXYiLCJXZWJkZXZjZCIsIlVpVXgiLCJFY29tIiwiTWFwcCIsIkVjc3BheSIsIkVjZGV2IiwiRWNyZXMiLCJhcGRhdGFjb250IiwiaGVhZGNvbnRlbnQiLCJIZWFkaW1nIiwiYXBwcm9jaGNvbnRlbnQiLCJhcHByb2NoZGF0YSIsIm5hbWUiLCJjb250ZW50IiwiU3ZnIiwicHJpY2Vpbmdjb250ZW50IiwicHJpY2VpbmdkYXRhIiwicHRpdGxlIiwiZnV0cnNvZmZlciIsImNvc3QiLCJleHRyZnV0ciIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJ2YWx1ZSIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwic2V0VGltZW91dCIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwic3RhdGUiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJ1cGRhdGUiLCJtb2QiLCJkYXRhIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImtleSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIk1haW5XYXBwZXIiLCJIb21lV2FwcGVyIiwic2VjdGlvbiIsIkFwcHJvY2hXYXBwZXIiLCJBcHByb2NoZ3JpZFdhcHBlciIsIlByaWNlaW5nV2FwcGVyIiwiUHJpY2VpbmdncmlkV2FwcGVyIiwiV2ViZGVzaWduIiwidXNlUm91dGVyIiwiaWQiLCJyZGF0YSIsImZpbHRlciIsImR0IiwiTnVtYmVyIiwibWFwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0EsTUFBTUEsWUFBWSxHQUFHQyx3REFBTSxDQUFDQyxDQUFWO0FBQUE7QUFBQTtBQUFBLGdSQUFsQjs7QUFpQkEsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBb0I7QUFDakMsU0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFQSxJQUFJLEdBQUdBLElBQUgsR0FBVSxHQUExQjtBQUErQixZQUFRLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlRCxJQUFmLENBREYsQ0FERjtBQUtELENBTkQ7O0FBT2VELHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTs7SUFDT0csTyxZQUFBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxJQUFKLENBSkYsQ0FERjtBQVFELENBVEQ7O0FBVWVGLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtJQUNPRyxZLFlBQUFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsWTs7Ozs7OztJQUNBQyxVLFlBQUFBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsVTs7Ozs7OztJQUNBQyxXLFlBQUFBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLFc7Ozs7Ozs7SUFDQUMsVSxZQUFBQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxVOzs7OztHQUVQOztJQUNPQyxNLFlBQUFBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTTs7Ozs7OztJQUNBQyxRLFlBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLFE7Ozs7Ozs7SUFDQUMsSSxZQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsSTs7Ozs7R0FFUDs7SUFDT0MsSSxZQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEk7Ozs7Ozs7SUFDQUMsSSxZQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxJOzs7Ozs7O0lBQ0FDLE0sWUFBQUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNOzs7Ozs7O0lBQ0FDLEssWUFBQUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEs7Ozs7Ozs7SUFDQUMsSyxZQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3NlcnZpZXMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2Vydmllcy9baWRdLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3QgQnV0dG9uV2FwcGVyID0gc3R5bGVkLmFgXHJcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODFhNztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4gIGJveC1zaGFkb3c6IDFweCAycHggMTVweCAtNXB4IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDgxYTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMjBweCAtNXB4IGJsYWNrO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyB0ZXh0LCBnb3RvIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17Z290byA/IGdvdG8gOiBcIiNcIn0gcGFzc0hyZWY+XHJcbiAgICAgIDxCdXR0b25XYXBwZXI+e3RleHR9PC9CdXR0b25XYXBwZXI+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgU3Bwb3J0cyBmcm9tIFwiLi4vaW1hZ2VzL3NwcG9ydC5zdmdcIjtcclxuaW1wb3J0IFN1YnRpdGxlIGZyb20gXCIuL3N1YnRpdGxlXCI7XHJcblxyXG5jb25zdCBDb250YWN0dXNXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogNXJlbTtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iU30ge1xyXG4gICAgbWFyZ2luOiAzcmVtO1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ29udGFjdHVzY29udGluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAmID4gc3ZnIHtcclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEudGFiTX0ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gZm9ybSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW46IDAgNHJlbTtcclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJTfSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgICYgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBtYXJnaW46IDNyZW0gMDtcclxuICAgICAgJiA+IGxhYmVsIHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBzZWxlY3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmVhMmM3O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICYgPiAqIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYgPiB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmEzYzg7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZhM2M4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MWE3O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDE1cHggLTVweCBibGFjaztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDA4MWE3O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMjBweCAtNXB4IGJsYWNrO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYk19IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhY3R1c1dhcHBlciBpZD1cImNvbnRhY3R1c1wiPlxyXG4gICAgICA8U3VidGl0bGVcclxuICAgICAgICB0aXRsZT1cIkNvbnRhY3QgdXNcIlxyXG4gICAgICAgIGluZm89XCJIYXZlIGEgcHJvamVjdD8gQ29udGFjdCB1cyBhbmQgbGV0J3Mgd29yayB0b2dldGhlciFcIlxyXG4gICAgICAvPlxyXG4gICAgICA8Q29udGFjdHVzY29udGluZXI+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIG5hbWU9XCJjb250YWN0XCJcclxuICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICAgICAgYWN0aW9uPVwiL1wiXHJcbiAgICAgICAgICBkYXRhLW5ldGxpZnk9XCJ0cnVlXCJcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3UnciBOYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3UnciBFbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdSdyIFBob25lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZXJ2aWVzdHlwZVwiPlNlcnZpZXMgVHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNlcnZpZXNbXVwiIGlkPVwic2Vydmllc3R5cGVcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiV2ViIGRlc2lnblwiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgIFdlYiBkZXNpZ25cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiV2ViIERldmVsb3BtZW50XCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgV2ViIGRldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkUtY29tbWVyY2VcIiBrZXk9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICBFLWNvbW1lcmNlIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRldGlsZXNcIj5EZXRpbGVzPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY29scz1cIjMwXCJcclxuICAgICAgICAgICAgICBpZD1cImRldGlsZXNcIlxyXG4gICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHJvamVjdCBpbmZvXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91J3IgcHJvamVjdCBkZXRhaWxzXCJcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJsZXQncyB0YWxrXCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPFNwcG9ydHMgLz5cclxuICAgICAgPC9Db250YWN0dXNjb250aW5lcj5cclxuICAgIDwvQ29udGFjdHVzV2FwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5jb25zdCBTdWJUaXRsZVdhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIHBhZGRpbmc6IDRyZW0gMDtcclxuICB3aWR0aDogNzAlO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJMfSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICAmID4gcCB7XHJcbiAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgfVxyXG4gICYgPiBoMSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG5cclxuICAgICYgPiBwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmEzYzg7XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgU3ViVGl0bGUgPSAoeyB0aXRsZSwgaW5mbyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdWJUaXRsZVdhcHBlcj5cclxuICAgICAgPGgxPlxyXG4gICAgICAgIDxwPnt0aXRsZX08L3A+XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxwPntpbmZvfTwvcD5cclxuICAgIDwvU3ViVGl0bGVXYXBwZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3ViVGl0bGU7XHJcbiIsIi8vLyB3ZWIgZGVzaWduIHVzaW5nIHN2Z3NcclxuaW1wb3J0IFdlYmRlc2lnbnN2ZyBmcm9tIFwiLi4vaW1hZ2VzL3dlYmRlc2lnbi5zdmdcIjtcclxuaW1wb3J0IFJlc3BkZXNpZ24gZnJvbSBcIi4uL2ltYWdlcy9yZXNwZGVzaWduLnN2Z1wiO1xyXG5pbXBvcnQgQ29sb3JwYXR0ZXIgZnJvbSBcIi4uL2ltYWdlcy9jb2xvcnBhdHRlci5zdmdcIjtcclxuaW1wb3J0IExvZ29kZXNpZ24gZnJvbSBcIi4uL2ltYWdlcy9sb2dvZGVzaWduLnN2Z1wiO1xyXG5cclxuLy8vIHdlYiBkZXZlbG9wbWVudCB1c2luZyBzdmdzXHJcbmltcG9ydCBXZWJkZXYgZnJvbSBcIi4uL2ltYWdlcy93ZWJkZXYuc3ZnXCI7XHJcbmltcG9ydCBXZWJkZXZjZCBmcm9tIFwiLi4vaW1hZ2VzL3dlYmRldmNkLnN2Z1wiO1xyXG5pbXBvcnQgVWlVeCBmcm9tIFwiLi4vaW1hZ2VzL3VpdXguc3ZnXCI7XHJcblxyXG4vLy8gZS1jb21lcnMgZGV2ZWxvcG1lbnQgdXNpbmcgc3Znc1xyXG5pbXBvcnQgRWNvbSBmcm9tIFwiLi4vaW1hZ2VzL2Vjb20uc3ZnXCI7XHJcbmltcG9ydCBNYXBwIGZyb20gXCIuLi9pbWFnZXMvbWJwYXkuc3ZnXCI7XHJcbmltcG9ydCBFY3NwYXkgZnJvbSBcIi4uL2ltYWdlcy9lY3NwYXkuc3ZnXCI7XHJcbmltcG9ydCBFY2RldiBmcm9tIFwiLi4vaW1hZ2VzL2VjZGV2LnN2Z1wiO1xyXG5pbXBvcnQgRWNyZXMgZnJvbSBcIi4uL2ltYWdlcy9lY3Jlcy5zdmdcIjtcclxuXHJcbmNvbnN0IGFwZGF0YWNvbnQgPVxyXG4gIFwiSXQgc2hvdWxkIG5vdCBiZSBuZWdsZWN0ZWQgdGhhdCB0aGUgYWNjdXJhdGUgcHJlZGljdGlvbnMgb2YgdGhlIG9wZXJhdGlvbmFsIHN5c3RlbSB3aWxsIHJlcXVpcmUgYSB2YXN0IGtub3dsZWRnZS4gVG8gYmUgbW9yZSBzcGVjaWZpYywgYW55IHBhcnQgb2YgdGhlIGRlZXAgYW5hbHlzaXMgbWFrZXMgbm8gZGlmZmVyZW5jZSB0byBUaGUgQXNzaXN0YW5jZSBvZiBUZWNobm9sb2d5LURyaXZlbiBJZGVhIEdlb3JnZSBBbGJyZWNodCBpbiBUaGUgQm9vayBvZlwiO1xyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2ViIERlc2lnblwiLFxyXG4gICAgaGVhZGNvbnRlbnQ6XHJcbiAgICAgIFwiRm9ydHVuYXRlbHksIGEgc3VwZXJ2aXNvcnkgYWN0aW9uIG9mIHRoZSBjb25kaXRpb24gb2YgdGhlIGFwcGxpY2F0aW9uIHJ1bGVzIGxpa2VseSB0aGUgZXhpc3RpbmcgbmV0d29yay4gVGhlcmVmb3JlLCB0aGUgY29uY2VwdCBvZiB0aGUgZmlyc3QtY2xhc3MgcGFjXCIsXHJcbiAgICBIZWFkaW1nOiBXZWJkZXNpZ25zdmcsXHJcbiAgICBhcHByb2NoY29udGVudDpcclxuICAgICAgXCJNb3Jlb3ZlciwgdGhlIHV0aWxpemF0aW9uIG9mIHRoZSBtZWNoYW5pc20gc2hvdWxkIGhlbHAgaW4gcmVzb2x2aW5nIHByZXNlbnQgY2hhbGxlbmdlcy4gV2hhdCBpcyBtb3JlLCB0aGUgcmF3IGRyYWZ0IG9mIHRoZVwiLFxyXG4gICAgYXBwcm9jaGRhdGE6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiR29vZCBDb2xvciBQYXR0cmVuXCIsXHJcbiAgICAgICAgY29udGVudDogYXBkYXRhY29udCxcclxuICAgICAgICBTdmc6IENvbG9ycGF0dGVyLFxyXG4gICAgICAgIGdvdG86IFwiI2NvbnRhY3R1c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJSZXNwb25zaXZlIERlc2lnblwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IGFwZGF0YWNvbnQsXHJcbiAgICAgICAgU3ZnOiBSZXNwZGVzaWduLFxyXG4gICAgICAgIGdvdG86IFwiI2NvbnRhY3R1c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJMb2dvIERlc2lnblwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IGFwZGF0YWNvbnQsXHJcbiAgICAgICAgU3ZnOiBMb2dvZGVzaWduLFxyXG4gICAgICAgIGdvdG86IFwiI2NvbnRhY3R1c1wiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHByaWNlaW5nY29udGVudDpcclxuICAgICAgXCJNb3Jlb3ZlciwgdGhlIHV0aWxpemF0aW9uIG9mIHRoZSBtZWNoYW5pc20gc2hvdWxkIGhlbHAgaW4gcmVzb2x2aW5nIHByZXNlbnQgY2hhbGxlbmdlcy4gV2hhdCBpcyBtb3JlLCB0aGUgcmF3IGRyYWZ0IG9mIHRoZSBcIixcclxuICAgIHByaWNlaW5nZGF0YTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcHRpdGxlOiBcIkJST05aRVwiLFxyXG4gICAgICAgIGZ1dHJzb2ZmZXI6IFtcclxuICAgICAgICAgIFwiQ291c3RlbSBEZXNpZ25cIixcclxuICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmVcIixcclxuICAgICAgICAgIFwiMiBwYWdlc1wiLFxyXG4gICAgICAgICAgXCJJY29ucyBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgXCJQaG90byBTb3VyY2luZ1wiLFxyXG4gICAgICAgICAgXCIyIFJvdW5kcyBvZiBSZXZpc2lvbnNcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvc3Q6IFwiMjdcIixcclxuICAgICAgICBleHRyZnV0cjogXCIkNiBwZXIgYWRkaXRpb25hbCB3ZWJzaXRlIHBhZ2VcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHB0aXRsZTogXCJTSUxWRVJcIixcclxuICAgICAgICBmdXRyc29mZmVyOiBbXHJcbiAgICAgICAgICBcIkNvdXN0ZW0gRGVzaWduXCIsXHJcbiAgICAgICAgICBcIk1vYmlsZSBSZXNwb25zaXZlXCIsXHJcbiAgICAgICAgICBcIjQgcGFnZXNcIixcclxuICAgICAgICAgIFwiSWNvbnMgSW50ZWdyYXRpb25cIixcclxuICAgICAgICAgIFwiUGhvdG8gU291cmNpbmdcIixcclxuICAgICAgICAgIFwiQ29udGFjdCBGb3JtXCIsXHJcbiAgICAgICAgICBcIjMgUm91bmRzIG9mIFJldmlzaW9uc1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29zdDogXCI1NFwiLFxyXG4gICAgICAgIGV4dHJmdXRyOiBcIiQ2IHBlciBhZGRpdGlvbmFsIHdlYnNpdGUgcGFnZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcHRpdGxlOiBcIkdPTERcIixcclxuICAgICAgICBmdXRyc29mZmVyOiBbXHJcbiAgICAgICAgICBcIkNvdXN0ZW0gRGVzaWduXCIsXHJcbiAgICAgICAgICBcIk1vYmlsZSBSZXNwb25zaXZlXCIsXHJcbiAgICAgICAgICBcIjYgcGFnZXNcIixcclxuICAgICAgICAgIFwic2luZ2xlIHBhZ2UgYXBwbGljYXRpb25cIixcclxuICAgICAgICAgIFwiSWNvbnMgSW50ZWdyYXRpb25cIixcclxuICAgICAgICAgIFwiR29vZ2xlIE1hcHNcIixcclxuICAgICAgICAgIFwiNDA0IFJlZGlyZWN0XCIsXHJcbiAgICAgICAgICBcIlBob3RvIFNvdXJjaW5nXCIsXHJcbiAgICAgICAgICBcIkNvbnRhY3QgRm9ybVwiLFxyXG4gICAgICAgICAgXCI0IFJvdW5kcyBvZiBSZXZpc2lvbnNcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvc3Q6IFwiODBcIixcclxuICAgICAgICBleHRyZnV0cjogXCIkNiBwZXIgYWRkaXRpb25hbCB3ZWJzaXRlIHBhZ2VcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXZWIgRGV2ZWxvcG1lbnRcIixcclxuICAgIGhlYWRjb250ZW50OlxyXG4gICAgICBcIkZvcnR1bmF0ZWx5LCBhIHN1cGVydmlzb3J5IGFjdGlvbiBvZiB0aGUgY29uZGl0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbiBydWxlcyBsaWtlbHkgdGhlIGV4aXN0aW5nIG5ldHdvcmsuIFRoZXJlZm9yZSwgdGhlIGNvbmNlcHQgb2YgdGhlIGZpcnN0LWNsYXNzIHBhY1wiLFxyXG4gICAgSGVhZGltZzogV2ViZGV2LFxyXG4gICAgYXBwcm9jaGNvbnRlbnQ6XHJcbiAgICAgIFwiTW9yZW92ZXIsIHRoZSB1dGlsaXphdGlvbiBvZiB0aGUgbWVjaGFuaXNtIHNob3VsZCBoZWxwIGluIHJlc29sdmluZyBwcmVzZW50IGNoYWxsZW5nZXMuIFdoYXQgaXMgbW9yZSwgdGhlIHJhdyBkcmFmdCBvZiB0aGVcIixcclxuICAgIGFwcHJvY2hkYXRhOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNvdXN0ZW0gRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICBjb250ZW50OiBhcGRhdGFjb250LFxyXG4gICAgICAgIFN2ZzogV2ViZGV2Y2QsXHJcbiAgICAgICAgZ290bzogXCIjY29udGFjdHVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlJlc3BvbnNpdmUgRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICBjb250ZW50OiBhcGRhdGFjb250LFxyXG4gICAgICAgIFN2ZzogUmVzcGRlc2lnbixcclxuICAgICAgICBnb3RvOiBcIiNjb250YWN0dXNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiVWkvVVggRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICBjb250ZW50OiBhcGRhdGFjb250LFxyXG4gICAgICAgIFN2ZzogVWlVeCxcclxuICAgICAgICBnb3RvOiBcIiNjb250YWN0dXNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBwcmljZWluZ2NvbnRlbnQ6XHJcbiAgICAgIFwiTW9yZW92ZXIsIHRoZSB1dGlsaXphdGlvbiBvZiB0aGUgbWVjaGFuaXNtIHNob3VsZCBoZWxwIGluIHJlc29sdmluZyBwcmVzZW50IGNoYWxsZW5nZXMuIFdoYXQgaXMgbW9yZSwgdGhlIHJhdyBkcmFmdCBvZiB0aGUgXCIsXHJcbiAgICBwcmljZWluZ2RhdGE6IFtcclxuICAgICAge1xyXG4gICAgICAgIHB0aXRsZTogXCJCUk9OWkVcIixcclxuICAgICAgICBmdXRyc29mZmVyOiBbXHJcbiAgICAgICAgICBcIkNvdXN0ZW0gRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmVcIixcclxuICAgICAgICAgIFwiMiBwYWdlc1wiLFxyXG4gICAgICAgICAgXCJJY29ucyBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgXCJQaG90byBTb3VyY2luZ1wiLFxyXG4gICAgICAgICAgXCIyIFJvdW5kcyBvZiBSZXZpc2lvbnNcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvc3Q6IFwiNTRcIixcclxuICAgICAgICBleHRyZnV0cjogXCIkNiBwZXIgYWRkaXRpb25hbCB3ZWJzaXRlIHBhZ2VcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHB0aXRsZTogXCJTSUxWRVJcIixcclxuICAgICAgICBmdXRyc29mZmVyOiBbXHJcbiAgICAgICAgICBcIkNvdXN0ZW0gRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmVcIixcclxuICAgICAgICAgIFwiNCBwYWdlc1wiLFxyXG4gICAgICAgICAgXCJJY29ucyBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgXCJQaG90byBTb3VyY2luZ1wiLFxyXG4gICAgICAgICAgXCJDb250YWN0IEZvcm1cIixcclxuICAgICAgICAgIFwiMyBSb3VuZHMgb2YgUmV2aXNpb25zXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb3N0OiBcIjgwXCIsXHJcbiAgICAgICAgZXh0cmZ1dHI6IFwiJDYgcGVyIGFkZGl0aW9uYWwgd2Vic2l0ZSBwYWdlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwdGl0bGU6IFwiR09MRFwiLFxyXG4gICAgICAgIGZ1dHJzb2ZmZXI6IFtcclxuICAgICAgICAgIFwiQ291c3RlbSBEZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgXCJNb2JpbGUgUmVzcG9uc2l2ZVwiLFxyXG4gICAgICAgICAgXCI2IHBhZ2VzXCIsXHJcbiAgICAgICAgICBcInNpbmdsZSBwYWdlIGFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICBcIkljb25zIEludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICBcIkdvb2dsZSBNYXBzXCIsXHJcbiAgICAgICAgICBcIjQwNCBSZWRpcmVjdFwiLFxyXG4gICAgICAgICAgXCJQaG90byBTb3VyY2luZ1wiLFxyXG4gICAgICAgICAgXCJDb250YWN0IEZvcm1cIixcclxuICAgICAgICAgIFwiNCBSb3VuZHMgb2YgUmV2aXNpb25zXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb3N0OiBcIjEwN1wiLFxyXG4gICAgICAgIGV4dHJmdXRyOiBcIiQ2IHBlciBhZGRpdGlvbmFsIHdlYnNpdGUgcGFnZVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkUtY29tbWVyY2VcIixcclxuICAgIGhlYWRjb250ZW50OlxyXG4gICAgICBcIkZvcnR1bmF0ZWx5LCBhIHN1cGVydmlzb3J5IGFjdGlvbiBvZiB0aGUgY29uZGl0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbiBydWxlcyBsaWtlbHkgdGhlIGV4aXN0aW5nIG5ldHdvcmsuIFRoZXJlZm9yZSwgdGhlIGNvbmNlcHQgb2YgdGhlIGZpcnN0LWNsYXNzIHBhY1wiLFxyXG4gICAgSGVhZGltZzogRWNvbSxcclxuICAgIGFwcHJvY2hjb250ZW50OlxyXG4gICAgICBcIk1vcmVvdmVyLCB0aGUgdXRpbGl6YXRpb24gb2YgdGhlIG1lY2hhbmlzbSBzaG91bGQgaGVscCBpbiByZXNvbHZpbmcgcHJlc2VudCBjaGFsbGVuZ2VzLiBXaGF0IGlzIG1vcmUsIHRoZSByYXcgZHJhZnQgb2YgdGhlXCIsXHJcbiAgICBhcHByb2NoZGF0YTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDb3VzdGVtIERldmVsb3BtZW50XCIsXHJcbiAgICAgICAgY29udGVudDogYXBkYXRhY29udCxcclxuICAgICAgICBTdmc6IEVjZGV2LFxyXG4gICAgICAgIGdvdG86IFwiI2NvbnRhY3R1c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJSZXNwb25zaXZlIERldmVsb3BtZW50XCIsXHJcbiAgICAgICAgY29udGVudDogYXBkYXRhY29udCxcclxuICAgICAgICBTdmc6IEVjcmVzLFxyXG4gICAgICAgIGdvdG86IFwiI2NvbnRhY3R1c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTZWN1cmUgUGF5bWVudFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IGFwZGF0YWNvbnQsXHJcbiAgICAgICAgU3ZnOiBFY3NwYXksXHJcbiAgICAgICAgZ290bzogXCIjY29udGFjdHVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIldlYiBWaWV3IEFuZHJvaWQgQXBwbGljYXRpb25cIixcclxuICAgICAgICBjb250ZW50OiBhcGRhdGFjb250LFxyXG4gICAgICAgIFN2ZzogTWFwcCxcclxuICAgICAgICBnb3RvOiBcIiNjb250YWN0dXNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBwcmljZWluZ2NvbnRlbnQ6XHJcbiAgICAgIFwiTW9yZW92ZXIsIHRoZSB1dGlsaXphdGlvbiBvZiB0aGUgbWVjaGFuaXNtIHNob3VsZCBoZWxwIGluIHJlc29sdmluZyBwcmVzZW50IGNoYWxsZW5nZXMuIFdoYXQgaXMgbW9yZSwgdGhlIHJhdyBkcmFmdCBvZiB0aGUgXCIsXHJcbiAgICBwcmljZWluZ2RhdGE6IFtcclxuICAgICAge1xyXG4gICAgICAgIHB0aXRsZTogXCJCUk9OWkVcIixcclxuICAgICAgICBmdXRyc29mZmVyOiBbXHJcbiAgICAgICAgICBcIkNvdXN0ZW0gRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmVcIixcclxuICAgICAgICAgIFwiMiBwYWdlc1wiLFxyXG4gICAgICAgICAgXCJJY29ucyBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgXCJQaG90byBTb3VyY2luZ1wiLFxyXG4gICAgICAgICAgXCIyIFJvdW5kcyBvZiBSZXZpc2lvbnNcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvc3Q6IFwiMjcwXCIsXHJcbiAgICAgICAgZXh0cmZ1dHI6IFwiQ29udGFjdCB1cyBmb3IgYWRkaXRpb25hbCBmdXRjaGVyc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcHRpdGxlOiBcIlNJTFZFUlwiLFxyXG4gICAgICAgIGZ1dHJzb2ZmZXI6IFtcclxuICAgICAgICAgIFwiQ291c3RlbSBEZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgXCJNb2JpbGUgUmVzcG9uc2l2ZVwiLFxyXG4gICAgICAgICAgXCI0IHBhZ2VzXCIsXHJcbiAgICAgICAgICBcIkljb25zIEludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICBcIlBob3RvIFNvdXJjaW5nXCIsXHJcbiAgICAgICAgICBcIkNvbnRhY3QgRm9ybVwiLFxyXG4gICAgICAgICAgXCIzIFJvdW5kcyBvZiBSZXZpc2lvbnNcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvc3Q6IFwiNTQwXCIsXHJcbiAgICAgICAgZXh0cmZ1dHI6IFwiQ29udGFjdCB1cyBmb3IgYWRkaXRpb25hbCBmdXRjaGVyc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcHRpdGxlOiBcIkdPTERcIixcclxuICAgICAgICBmdXRyc29mZmVyOiBbXHJcbiAgICAgICAgICBcIkNvdXN0ZW0gRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmVcIixcclxuICAgICAgICAgIFwiNiBwYWdlc1wiLFxyXG4gICAgICAgICAgXCJzaW5nbGUgcGFnZSBhcHBsaWNhdGlvblwiLFxyXG4gICAgICAgICAgXCJJY29ucyBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgXCJHb29nbGUgTWFwc1wiLFxyXG4gICAgICAgICAgXCI0MDQgUmVkaXJlY3RcIixcclxuICAgICAgICAgIFwiUGhvdG8gU291cmNpbmdcIixcclxuICAgICAgICAgIFwiQ29udGFjdCBGb3JtXCIsXHJcbiAgICAgICAgICBcIjQgUm91bmRzIG9mIFJldmlzaW9uc1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29zdDogXCI4MTBcIixcclxuICAgICAgICBleHRyZnV0cjogXCJDb250YWN0IHVzIGZvciBhZGRpdGlvbmFsIGZ1dGNoZXJzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICBOZXh0Um91dGVyLFxuICBpc0xvY2FsVVJMLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGV4ZWNPbmNlIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgKVxuICAgICAgfSwgMClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGFjdHVzXCI7XHJcbmltcG9ydCBTdWJ0aXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdWJ0aXRsZVwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vZGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE1haW5XYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzMDtcclxuYDtcclxuXHJcbmNvbnN0IEhvbWVXYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAmID4gZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgcGFkZGluZzogNHJlbTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEudGFiTX0ge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYkx9IHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iU30ge1xyXG4gICAgICBoZWlnaHQ6IDcwJTtcclxuICAgIH1cclxuICAgICYgPiBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJNfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICAgIH1cclxuICB9XHJcbiAgJiA+IHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS50YWJNfSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQXBwcm9jaFdhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbjogMCA0cmVtO1xyXG5gO1xyXG5jb25zdCBBcHByb2NoZ3JpZFdhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgJiA+IGRpdjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA4cmVtIDA7XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLnRhYk19IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJMfSB7XHJcbiAgICAgIG1hcmdpbjogNXJlbSAwO1xyXG4gICAgfVxyXG4gICAgJiA+IHN2ZyB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYkx9IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgbWFyZ2luOiAwIDNyZW07XHJcbiAgICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEudGFiTX0ge1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJMfSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgJiA+ICoge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBoMiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgICAmID4gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmR9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJpY2VpbmdXYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBtYXJnaW46IDAgNHJlbTtcclxuYDtcclxuY29uc3QgUHJpY2VpbmdncmlkV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmb250LXNpemU6IDIuOHJlbTtcclxuICAmID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDIwcHggLTEwcHggYmxhY2s7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICAmID4gaDIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIH1cclxuICAgICYgPiB1bCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICAgICYgPiBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICAgICYgPiBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgM3JlbTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICAgICAgfVxyXG4gICAgICAmID4gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFdlYmRlc2lnbiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICBjb25zdCByZGF0YSA9IGRhdGEuZmlsdGVyKChkdCwgaSkgPT4gTnVtYmVyKGlkKSA9PT0gaSk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBoZWFkY29udGVudCxcclxuICAgICAgSGVhZGltZyxcclxuICAgICAgYXBwcm9jaGNvbnRlbnQsXHJcbiAgICAgIGFwcHJvY2hkYXRhLFxyXG4gICAgICBwcmljZWluZ2NvbnRlbnQsXHJcbiAgICAgIHByaWNlaW5nZGF0YSxcclxuICAgIH0gPSByZGF0YVswXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWFpbldhcHBlcj5cclxuICAgICAgICA8SG9tZVdhcHBlciBpZD1cImhvbWVcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHA+e2hlYWRjb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVmlldyBwbGFuc1wiIGdvdG89e2Avc2Vydmllcy8ke2lkfS8jcHJpY2VpbmdgfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8SGVhZGltZyAvPlxyXG4gICAgICAgIDwvSG9tZVdhcHBlcj5cclxuICAgICAgICA8QXBwcm9jaFdhcHBlciBpZD1cImFwcHJvY2hlXCI+XHJcbiAgICAgICAgICA8U3VidGl0bGUgdGl0bGU9XCJBcHByb2NoXCIgaW5mbz17YXBwcm9jaGNvbnRlbnR9IC8+XHJcblxyXG4gICAgICAgICAgPEFwcHJvY2hncmlkV2FwcGVyPlxyXG4gICAgICAgICAgICB7YXBwcm9jaGRhdGEubWFwKCh7IG5hbWUsIFN2ZywgY29udGVudCwgZ290byB9LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2Ake25hbWV9YH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntjb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDb250YWN0IHVzXCIgZ290bz17YC9zZXJ2aWVzLyR7aWR9LyR7Z290b31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPFN2ZyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0FwcHJvY2hncmlkV2FwcGVyPlxyXG4gICAgICAgIDwvQXBwcm9jaFdhcHBlcj5cclxuICAgICAgICA8UHJpY2VpbmdXYXBwZXIgaWQ9XCJwcmljZWluZ1wiPlxyXG4gICAgICAgICAgPFN1YnRpdGxlIHRpdGxlPVwiUHJpY2VpbmdcIiBpbmZvPXtwcmljZWluZ2NvbnRlbnR9IC8+XHJcbiAgICAgICAgICA8UHJpY2VpbmdncmlkV2FwcGVyPlxyXG4gICAgICAgICAgICB7cHJpY2VpbmdkYXRhLm1hcCgoeyBjb3N0LCBleHRyZnV0ciwgcHRpdGxlLCBmdXRyc29mZmVyIH0sIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8aDI+e3B0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2Z1dHJzb2ZmZXIubWFwKChpbmZvLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5mb30+e2luZm99PC9saT47XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPiR7Y29zdH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntleHRyZnV0cn08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1ByaWNlaW5nZ3JpZFdhcHBlcj5cclxuICAgICAgICA8L1ByaWNlaW5nV2FwcGVyPlxyXG4gICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgIDwvTWFpbldhcHBlcj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBXZWJkZXNpZ247XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9