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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Logo = function Logo(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M47.333 49.37L5 89.306l41.743 41.506M173.445 130.812l42.333-39.936-41.744-41.506M169.09 45.784l-33.539 82.98",
    fill: "none",
    stroke: "#000",
    strokeWidth: "10"
  }), __jsx("path", {
    d: "M80.963 120.96q-8.64 0-14.82-4.5t-8.46-12.18q-1.56-5.28-1.56-14.88 0-8.64 1.56-14.64 2.16-7.44 8.4-11.94 6.24-4.5 14.88-4.5 8.76 0 15.18 4.44t8.34 11.04q.6 2.16.72 3.6v.24q0 .84-1.08 1.08l-6 .84h-.24q-.84 0-1.08-1.08l-.36-1.8q-1.08-4.56-5.28-7.74-4.2-3.18-10.2-3.18-6 0-10.02 3.18t-5.22 8.46q-1.08 4.56-1.08 12.12 0 7.92 1.08 12.24 1.2 5.4 5.22 8.58 4.02 3.18 10.02 3.18 5.88 0 10.14-3.06 4.26-3.06 5.34-7.86v-.48l.12-.48q.12-1.2 1.44-.96l5.88.96q1.2.24 1.08 1.32l-.48 2.4q-1.8 6.96-8.28 11.28-6.48 4.32-15.24 4.32z",
    fill: "#FF9993"
  }), __jsx("path", {
    d: "M99.703 119.96q-8.64 0-14.82-4.5t-8.46-12.18q-1.56-5.28-1.56-14.88 0-8.64 1.56-14.64 2.16-7.44 8.4-11.94 6.24-4.5 14.88-4.5 8.76 0 15.18 4.44t8.34 11.04q.6 2.16.72 3.6v.24q0 .84-1.08 1.08l-6 .84h-.24q-.84 0-1.08-1.08l-.36-1.8q-1.08-4.56-5.28-7.74-4.2-3.18-10.2-3.18-6 0-10.02 3.18t-5.22 8.46q-1.08 4.56-1.08 12.12 0 7.92 1.08 12.24 1.2 5.4 5.22 8.58 4.02 3.18 10.02 3.18 5.88 0 10.14-3.06 4.26-3.06 5.34-7.86v-.48l.12-.48q.12-1.2 1.44-.96l5.88.96q1.2.24 1.08 1.32l-.48 2.4q-1.8 6.96-8.28 11.28-6.48 4.32-15.24 4.32z"
  }), __jsx("g", null, __jsx("path", {
    d: "M90.684 169.634h3.703V151.87h-3.703v7.136h-.047q-.914-1.664-3.234-1.664-2.45 0-3.961 1.793-1.512 1.793-1.512 4.77 0 2.847 1.371 4.435 1.371 1.588 3.621 1.588 2.45 0 3.715-1.945h.047v1.652zm-25.277-.597q-1.84.89-4.805.89-3.867 0-6.082-2.273-2.215-2.274-2.215-6.059 0-4.031 2.49-6.539t6.463-2.508q2.461 0 4.149.621v3.645q-1.688-1.008-3.844-1.008-2.367 0-3.82 1.488-1.454 1.489-1.454 4.032 0 2.437 1.372 3.884 1.37 1.448 3.69 1.448 2.216 0 4.056-1.078v3.457zm52.687.89q2.965 0 4.805-.89v-3.457q-1.84 1.078-4.055 1.078-2.32 0-3.691-1.448-1.371-1.447-1.371-3.884 0-2.543 1.453-4.032 1.453-1.488 3.82-1.488 2.156 0 3.844 1.008v-3.645q-1.688-.62-4.149-.62-3.972 0-6.463 2.507-2.49 2.508-2.49 6.54 0 3.784 2.215 6.058 2.215 2.273 6.082 2.273zm-44.402 0q-3 0-4.717-1.681-1.717-1.682-1.717-4.565 0-2.976 1.781-4.658 1.782-1.682 4.817-1.682 2.988 0 4.687 1.682 1.7 1.682 1.7 4.447 0 2.988-1.752 4.723-1.752 1.734-4.8 1.734zm34.594-5.238h-7.829q.188 2.613 3.293 2.613 1.98 0 3.48-.937v2.672q-1.663.89-4.323.89-2.907 0-4.512-1.611-1.606-1.611-1.606-4.494 0-2.989 1.735-4.735 1.734-1.746 4.265-1.746 2.625 0 4.061 1.559 1.436 1.558 1.436 4.23v1.559zm22.898 5.238q-3 0-4.717-1.681-1.717-1.682-1.717-4.565 0-2.976 1.782-4.658 1.78-1.682 4.816-1.682 2.988 0 4.688 1.682 1.699 1.682 1.699 4.447 0 2.988-1.752 4.723-1.752 1.734-4.799 1.734zm8.168-3.61v3q1.687.61 3.668.61 1.078 0 2.08-.217 1.002-.216 1.77-.691.767-.475 1.23-1.23.463-.756.463-1.823 0-.761-.229-1.312-.228-.551-.656-.961-.428-.41-1.025-.715-.598-.305-1.336-.563-.41-.14-.826-.275t-.756-.305q-.34-.17-.551-.404-.21-.234-.21-.562 0-.247.14-.44t.386-.316q.246-.123.569-.188.322-.064.685-.064.774 0 1.576.205.803.205 1.506.615v-2.86q-.797-.234-1.617-.357-.82-.123-1.617-.123-1.02 0-1.963.217-.943.217-1.676.68-.732.463-1.172 1.19-.439.726-.439 1.734 0 .738.193 1.277.194.539.563.95.369.41.914.72t1.26.58q.445.176.925.316.48.141.885.317.404.175.662.41.258.234.258.586 0 .55-.568.82-.569.27-1.553.27-.809 0-1.717-.27t-1.822-.82zm-34.5-3.902q0-2.578-2.086-2.578-.89 0-1.541.739-.65.738-.791 1.84h4.418zm-31.066-2.238q-1.313 0-2.04.903-.726.902-.726 2.554 0 3.457 2.789 3.457 2.66 0 2.66-3.55 0-3.364-2.683-3.364zm16.968 2.719v.902q0 1.489-.709 2.39-.709.903-1.834.903-1.183 0-1.851-.855-.668-.856-.668-2.438 0-1.687.691-2.654.692-.967 1.922-.967 1.09 0 1.77.774.68.773.68 1.945zm40.524-2.719q-1.313 0-2.04.903-.726.902-.726 2.554 0 3.457 2.79 3.457 2.66 0 2.66-3.55 0-3.364-2.684-3.364z"
  })));
};

Logo.defaultProps = {
  width: "221",
  height: "183",
  viewBox: "0 0 221 183",
  xmlns: "http://www.w3.org/2000/svg"
};

var Topcurv = function Topcurv(props) {
  return __jsx("svg", props, __jsx("defs", null, __jsx("filter", {
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB",
    id: "a"
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), __jsx("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), __jsx("feOffset", {
    dy: "5"
  }), __jsx("feGaussianBlur", {
    stdDeviation: "25"
  }), __jsx("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), __jsx("feColorMatrix", {
    values: "0 0 0 0 0.3921569 0 0 0 0 0.3921569 0 0 0 0 0.3921569 0 0 0 0.4980392 0"
  }), __jsx("feBlend", {
    in2: "shape",
    result: "effect0_innerShadow"
  }))), __jsx("path", {
    d: "M140.265 949.318c259.38-133.42 712.911-13.303 922.005-483 209.09-469.697 544.5-448 544.5-448L24.75 0l-4.545 904.546s-40.22 87.637 4.545 95.454c44.765 7.82-143.864 82.74 115.515-50.682z",
    transform: "translate(0 -69.818)",
    fill: "#FFA3C8",
    filter: "url(#a)"
  }));
};

Topcurv.defaultProps = {
  width: "1607",
  height: "959",
  viewBox: "0 0 1607 959",
  xmlns: "http://www.w3.org/2000/svg"
};

var Bottomcurv = function Bottomcurv(props) {
  return __jsx("svg", props, __jsx("defs", null, __jsx("filter", {
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB",
    id: "a"
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), __jsx("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), __jsx("feOffset", {
    dy: "5"
  }), __jsx("feGaussianBlur", {
    stdDeviation: "25"
  }), __jsx("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), __jsx("feColorMatrix", {
    values: "0 0 0 0 0.3921569 0 0 0 0 0.3921569 0 0 0 0 0.3921569 0 0 0 0.4980392 0"
  }), __jsx("feBlend", {
    in2: "shape",
    result: "effect0_innerShadow"
  }))), __jsx("path", {
    d: "M0 250.231S196.452 92.613 365.5 140.232C534.547 187.85 606 106.231 606 106.231s136.285-119.571 170.5-105c34.214 14.572-.796 279.551-.796 279.551L1.286 287.759 0 250.231z",
    fill: "#FFA3C8",
    filter: "url(#a)"
  }));
};

Bottomcurv.defaultProps = {
  width: "755",
  height: "251",
  viewBox: "0 0 755 251",
  xmlns: "http://www.w3.org/2000/svg"
};

const MainWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__MainWapper",
  componentId: "kvghlw-0"
})(["display:flex;flex-direction:column;& > main{flex:1;position:relative;}"]);
const SNavbar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "Layout__SNavbar",
  componentId: "kvghlw-1"
})(["height:15vh;position:sticky;z-index:80;top:0;background-color:", ";background:linear-gradient(to top,#ffc7ce,#ffdde1);box-shadow:1px 1px 20px -7px rgb(0 0 0 / 66%);@media ", "{height:12vh;}& > ul{height:100%;display:flex;align-items:center;justify-content:space-around;font-size:3rem;list-style:none;@media ", "{font-size:2.5rem;}& > span{font-size:5rem;transform:rotate(90deg);font-weight:900;display:none;@media ", "{display:block;}}& > li{height:100%;}& > li > svg{height:100%;width:auto;}& > div{display:flex;align-items:center;justify-content:space-around;@media ", "{display:none;}& > li{padding:1rem;margin:0 2rem;}& > li > a{color:", ";text-decoration:none;}}}"], props => props.theme.colors.background, props => props.theme.media.mbS, props => props.theme.media.laptopM, props => props.theme.media.tabL, props => props.theme.media.tabL, props => props.theme.colors.text);
const Topcurvsty = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Topcurv).withConfig({
  displayName: "Layout__Topcurvsty",
  componentId: "kvghlw-2"
})(["width:70%;height:auto;position:absolute;z-index:10;left:-20px;"]);
const Bottomcurvsty = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Bottomcurv).withConfig({
  displayName: "Layout__Bottomcurvsty",
  componentId: "kvghlw-3"
})(["position:absolute;right:0;bottom:0;"]);
const MblNav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__MblNav",
  componentId: "kvghlw-4"
})(["position:fixed;z-index:100;background:white;width:100%;height:100vh;display:", ";& > span{position:absolute;z-index:110;top:0;right:0;font-size:5rem;padding:2rem 4rem;font-family:", ";}& > ul{list-style:none;font-size:4rem;height:100%;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;& > li{& > a{color:black;text-decoration:none;}}}"], props => props.show ? "block" : "none", props => props.theme.fonts.second);
const homeNavLink = [{
  linkname: "Home",
  linkgoto: "#home"
}, {
  linkname: "Services",
  linkgoto: "#servies"
}, {
  linkname: "About Us",
  linkgoto: "#aboutus"
}, {
  linkname: "Contact us",
  linkgoto: "#contactus"
}];
const serviceNavLink = [{
  linkname: "Home",
  linkgoto: "#home"
}, {
  linkname: "Approche",
  linkgoto: "#approche"
}, {
  linkname: "Priceing",
  linkgoto: "#priceing"
}, {
  linkname: "Contact us",
  linkgoto: "#contactus"
}];

const LayOut = ({
  children
}) => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  const showLinks = id ? serviceNavLink : homeNavLink;
  return __jsx(MainWapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, __jsx(SNavbar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx(Logo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, showLinks.map((data, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: data.linkgoto,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, data.linkname)))), __jsx("span", {
    onClick: () => setState(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, "|||"))), __jsx(MblNav, {
    show: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, showLinks.map((data, i) => __jsx("li", {
    key: i,
    onClick: () => setState(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: data.linkgoto,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }, data.linkname)))), __jsx("span", {
    onClick: () => setState(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, "X")), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx(Topcurvsty, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }), children, __jsx(Bottomcurvsty, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LayOut);

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const theme = {
  colors: {
    background: "#FFF2F2",
    text: "#000000"
  },
  fonts: {
    second: "Source Sans Pro, sans-serif"
  },
  media: {
    laptopL: "(max-width: 1024px)",
    laptopM: "(max-width: 816px)",
    tabL: "(max-width: 692px)",
    tabM: "(max-width: 653px)",
    mbL: "(max-width:495px)",
    mbM: "(max-width:425px)",
    mbS: "(max-width:375px)"
  }
};
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    outline: none;
}
html {
    box-sizing: border-box;
    font-size: 52.6%;
    scroll-behavior: smooth;
    @media ${props => props.theme.media.laptopL} {
      font-size: 46.6%;
    }
    @media ${props => props.theme.media.mbM} {
      font-size: 40.6%;

    }
}
body {
  background: linear-gradient(to top,#ffc7ce, #ffdde1);
  font-family: 'Playfair Display', serif;
  scroll-behavior: smooth;
/* font-family: 'Source Sans Pro', sans-serif; */
}
 `;
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  componentDidMount() {
    let localState = localStorage.getItem("_theme");

    if (localState) {
      document.documentElement.setAttribute("data-mode", JSON.parse(localState));
    } else {
      localStorage.setItem("_theme", JSON.stringify("light"));
    }
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: theme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }, "Codecos")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    })), __jsx(GlobalStyle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    })));
  }

}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiTG9nbyIsIlRvcGN1cnYiLCJCb3R0b21jdXJ2IiwiTWFpbldhcHBlciIsInN0eWxlZCIsImRpdiIsIlNOYXZiYXIiLCJuYXYiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsIm1lZGlhIiwibWJTIiwibGFwdG9wTSIsInRhYkwiLCJ0ZXh0IiwiVG9wY3VydnN0eSIsIkJvdHRvbWN1cnZzdHkiLCJNYmxOYXYiLCJzaG93IiwiZm9udHMiLCJzZWNvbmQiLCJob21lTmF2TGluayIsImxpbmtuYW1lIiwibGlua2dvdG8iLCJzZXJ2aWNlTmF2TGluayIsIkxheU91dCIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInNob3dMaW5rcyIsIm1hcCIsImRhdGEiLCJpIiwicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJsYXB0b3BMIiwidGFiTSIsIm1iTCIsIm1iTSIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJNeUFwcCIsImNvbXBvbmVudERpZE1vdW50IiwibG9jYWxTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QVQsQ0FBeUJDLFlBQXpCLENBQ0UsV0FERixFQUVFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsVUFBWCxDQUZGO0FBSUQsS0FMRCxNQUtPO0FBQ0xDLGtCQUFZLENBQUNPLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0JGLElBQUksQ0FBQ0csU0FBTCxDQUFlLE9BQWYsQ0FBL0I7QUFDRDtBQUNGOztBQUNEdkMsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFRixlQUFGO0FBQWFGO0FBQWIsUUFBMkIsS0FBS2hDLEtBQXRDO0FBQ0EsV0FDRSxNQUFDLCtEQUFEO0FBQWUsV0FBSyxFQUFFQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLEVBSUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxTQUFELGVBQWUrQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixFQUVFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FKRixDQURGO0FBV0Q7O0FBekJvQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEdkMsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2ltYWdlcy9sb2dvLnN2Z1wiO1xyXG5pbXBvcnQgVG9wY3VydiBmcm9tIFwiLi4vaW1hZ2VzL3RvcGN1cnYuc3ZnXCI7XHJcbmltcG9ydCBCb3R0b21jdXJ2IGZyb20gXCIuLi9pbWFnZXMvYm90dG9tY3VyLnN2Z1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IE1haW5XYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAmID4gbWFpbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNOYXZiYXIgPSBzdHlsZWQubmF2YFxyXG4gIGhlaWdodDogMTV2aDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDgwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmM3Y2UsICNmZmRkZTEpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMjBweCAtN3B4IHJnYigwIDAgMCAvIDY2JSk7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYlN9IHtcclxuICAgIGhlaWdodDogMTJ2aDtcclxuICB9XHJcbiAgJiA+IHVsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5sYXB0b3BNfSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgJiA+IHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS50YWJMfSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBsaSB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgICYgPiBsaSA+IHN2ZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEudGFiTH0ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IGxpIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMCAycmVtO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBsaSA+IGEge1xyXG4gICAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgVG9wY3VydnN0eSA9IHN0eWxlZChUb3BjdXJ2KWBcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbGVmdDogLTIwcHg7XHJcbmA7XHJcbmNvbnN0IEJvdHRvbWN1cnZzdHkgPSBzdHlsZWQoQm90dG9tY3VydilgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuYDtcclxuY29uc3QgTWJsTmF2ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCIpfTtcclxuICAmID4gc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMTA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICB9XHJcbiAgJiA+IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICYgPiBsaSB7XHJcbiAgICAgICYgPiBhIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBob21lTmF2TGluayA9IFtcclxuICB7XHJcbiAgICBsaW5rbmFtZTogXCJIb21lXCIsXHJcbiAgICBsaW5rZ290bzogXCIjaG9tZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGlua25hbWU6IFwiU2VydmljZXNcIixcclxuICAgIGxpbmtnb3RvOiBcIiNzZXJ2aWVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsaW5rbmFtZTogXCJBYm91dCBVc1wiLFxyXG4gICAgbGlua2dvdG86IFwiI2Fib3V0dXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxpbmtuYW1lOiBcIkNvbnRhY3QgdXNcIixcclxuICAgIGxpbmtnb3RvOiBcIiNjb250YWN0dXNcIixcclxuICB9LFxyXG5dO1xyXG5jb25zdCBzZXJ2aWNlTmF2TGluayA9IFtcclxuICB7XHJcbiAgICBsaW5rbmFtZTogXCJIb21lXCIsXHJcbiAgICBsaW5rZ290bzogXCIjaG9tZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGlua25hbWU6IFwiQXBwcm9jaGVcIixcclxuICAgIGxpbmtnb3RvOiBcIiNhcHByb2NoZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGlua25hbWU6IFwiUHJpY2VpbmdcIixcclxuICAgIGxpbmtnb3RvOiBcIiNwcmljZWluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGlua25hbWU6IFwiQ29udGFjdCB1c1wiLFxyXG4gICAgbGlua2dvdG86IFwiI2NvbnRhY3R1c1wiLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IExheU91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qgc2hvd0xpbmtzID0gaWQgPyBzZXJ2aWNlTmF2TGluayA6IGhvbWVOYXZMaW5rO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbldhcHBlcj5cclxuICAgICAgPFNOYXZiYXI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzaG93TGlua3MubWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtkYXRhLmxpbmtnb3RvfT57ZGF0YS5saW5rbmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHRydWUpfT58fHw8L3NwYW4+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9TTmF2YmFyPlxyXG4gICAgICA8TWJsTmF2IHNob3c9e3N0YXRlfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7c2hvd0xpbmtzLm1hcCgoZGF0YSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEubGlua2dvdG99PntkYXRhLmxpbmtuYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gc2V0U3RhdGUoZmFsc2UpfT5YPC9zcGFuPlxyXG4gICAgICA8L01ibE5hdj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPFRvcGN1cnZzdHkgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPEJvdHRvbWN1cnZzdHkgLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9NYWluV2FwcGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExheU91dDtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIGNvbG9yczoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjRkZGMkYyXCIsXHJcbiAgICB0ZXh0OiBcIiMwMDAwMDBcIixcclxuICB9LFxyXG4gIGZvbnRzOiB7XHJcbiAgICBzZWNvbmQ6IFwiU291cmNlIFNhbnMgUHJvLCBzYW5zLXNlcmlmXCIsXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgbGFwdG9wTDogXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIsXHJcbiAgICBsYXB0b3BNOiBcIihtYXgtd2lkdGg6IDgxNnB4KVwiLFxyXG4gICAgdGFiTDogXCIobWF4LXdpZHRoOiA2OTJweClcIixcclxuICAgIHRhYk06IFwiKG1heC13aWR0aDogNjUzcHgpXCIsXHJcbiAgICBtYkw6IFwiKG1heC13aWR0aDo0OTVweClcIixcclxuICAgIG1iTTogXCIobWF4LXdpZHRoOjQyNXB4KVwiLFxyXG4gICAgbWJTOiBcIihtYXgtd2lkdGg6Mzc1cHgpXCIsXHJcbiAgfSxcclxufTtcclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogNTIuNiU7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubGFwdG9wTH0ge1xyXG4gICAgICBmb250LXNpemU6IDQ2LjYlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYk19IHtcclxuICAgICAgZm9udC1zaXplOiA0MC42JTtcclxuXHJcbiAgICB9XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjZmZjN2NlLCAjZmZkZGUxKTtcclxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuLyogZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmOyAqL1xyXG59XHJcbiBgO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBsZXQgbG9jYWxTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3RoZW1lXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RhdGUpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICBcImRhdGEtbW9kZVwiLFxyXG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdGF0ZSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX3RoZW1lXCIsIEpTT04uc3RyaW5naWZ5KFwibGlnaHRcIikpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5Db2RlY29zPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==