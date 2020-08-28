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

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
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
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\components\\layout.js";
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
  displayName: "layout__MainWapper",
  componentId: "sc-173i0ui-0"
})(["display:flex;flex-direction:column;& > main{flex:1;position:relative;}"]);
const SNavbar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "layout__SNavbar",
  componentId: "sc-173i0ui-1"
})(["height:15vh;position:sticky;z-index:80;top:0;background-color:", ";background:linear-gradient(to top,#ffc7ce,#ffdde1);box-shadow:1px 1px 20px -7px rgb(0 0 0 / 66%);@media ", "{height:12vh;}& > ul{height:100%;display:flex;align-items:center;justify-content:space-around;font-size:3rem;list-style:none;@media ", "{font-size:2.5rem;}& > span{font-size:5rem;transform:rotate(90deg);font-weight:900;display:none;@media ", "{display:block;}}& > li{height:100%;}& > li > svg{height:100%;width:auto;}& > div{display:flex;align-items:center;justify-content:space-around;@media ", "{display:none;}& > li{padding:1rem;margin:0 2rem;}& > li > a{color:", ";text-decoration:none;}}}"], props => props.theme.colors.background, props => props.theme.media.mbS, props => props.theme.media.laptopM, props => props.theme.media.tabL, props => props.theme.media.tabL, props => props.theme.colors.text);
const Topcurvsty = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Topcurv).withConfig({
  displayName: "layout__Topcurvsty",
  componentId: "sc-173i0ui-2"
})(["width:70%;height:auto;position:absolute;z-index:10;left:-20px;"]);
const Bottomcurvsty = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Bottomcurv).withConfig({
  displayName: "layout__Bottomcurvsty",
  componentId: "sc-173i0ui-3"
})(["position:absolute;right:0;bottom:0;"]);
const MblNav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "layout__MblNav",
  componentId: "sc-173i0ui-4"
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-ga */ "next-ga");
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_ga__WEBPACK_IMPORTED_MODULE_6__);
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
        lineNumber: 60,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, "Codecos"), __jsx("meta", {
      name: "description",
      content: "Codecos is a serviers help your bussines live in onlie and get custmers and make it as a brand",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "og:title",
      property: "og:title",
      content: "codecos that provied live your bussines on online",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "https://codecos.netlify.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:description",
      content: "code",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "/static/logo.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "twitter:card",
      content: "summary_large_image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "twitter:url",
      content: "https://codecos.netlify.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "twitter:title",
      content: "codecos",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "twitter:image",
      content: "/static/logo.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "twitter:description",
      content: "codecos",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "robots",
      content: "index, follow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "URL",
      rel: "canonical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    })), __jsx(GlobalStyle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_6___default()("UA-166135822-2", next_router__WEBPACK_IMPORTED_MODULE_5___default.a)(MyApp));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-ga":
/*!**************************!*\
  !*** external "next-ga" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-ga");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1nYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkxvZ28iLCJUb3BjdXJ2IiwiQm90dG9tY3VydiIsIk1haW5XYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJTTmF2YmFyIiwibmF2IiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJtZWRpYSIsIm1iUyIsImxhcHRvcE0iLCJ0YWJMIiwidGV4dCIsIlRvcGN1cnZzdHkiLCJCb3R0b21jdXJ2c3R5IiwiTWJsTmF2Iiwic2hvdyIsImZvbnRzIiwic2Vjb25kIiwiaG9tZU5hdkxpbmsiLCJsaW5rbmFtZSIsImxpbmtnb3RvIiwic2VydmljZU5hdkxpbmsiLCJMYXlPdXQiLCJjaGlsZHJlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJzaG93TGlua3MiLCJtYXAiLCJkYXRhIiwiaSIsInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwibGFwdG9wTCIsInRhYk0iLCJtYkwiLCJtYk0iLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiTXlBcHAiLCJ3aXRoR0EiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0lBQ09BLEksWUFBQUEsSTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxJOzs7Ozs7O0lBQ0FDLE8sWUFBQUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTzs7Ozs7OztJQUNBQyxVLFlBQUFBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsVTs7Ozs7O0FBRVA7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEVBQWhCO0FBU0EsTUFBTUMsT0FBTyxHQUFHRix3REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFxQkFLVUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsVUFMdkMsRUFRREgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsS0FBWixDQUFrQkMsR0FSM0IsRUFrQkNMLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLEtBQVosQ0FBa0JFLE9BbEI3QixFQTBCR04sS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsS0FBWixDQUFrQkcsSUExQi9CLEVBeUNHUCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxLQUFaLENBQWtCRyxJQXpDL0IsRUFpREtQLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJNLElBakRsQyxDQUFiO0FBdURBLE1BQU1DLFVBQVUsR0FBR2Isd0RBQU0sQ0FBQ0gsT0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHNFQUFoQjtBQU9BLE1BQU1pQixhQUFhLEdBQUdkLHdEQUFNLENBQUNGLFVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwyQ0FBbkI7QUFLQSxNQUFNaUIsTUFBTSxHQUFHZix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdYQU1FRyxLQUFELElBQVlBLEtBQUssQ0FBQ1ksSUFBTixHQUFhLE9BQWIsR0FBdUIsTUFOcEMsRUFjUVosS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVksS0FBWixDQUFrQkMsTUFkcEMsQ0FBWjtBQWdDQSxNQUFNQyxXQUFXLEdBQUcsQ0FDbEI7QUFDRUMsVUFBUSxFQUFFLE1BRFo7QUFFRUMsVUFBUSxFQUFFO0FBRlosQ0FEa0IsRUFLbEI7QUFDRUQsVUFBUSxFQUFFLFVBRFo7QUFFRUMsVUFBUSxFQUFFO0FBRlosQ0FMa0IsRUFTbEI7QUFDRUQsVUFBUSxFQUFFLFVBRFo7QUFFRUMsVUFBUSxFQUFFO0FBRlosQ0FUa0IsRUFhbEI7QUFDRUQsVUFBUSxFQUFFLFlBRFo7QUFFRUMsVUFBUSxFQUFFO0FBRlosQ0Fia0IsQ0FBcEI7QUFrQkEsTUFBTUMsY0FBYyxHQUFHLENBQ3JCO0FBQ0VGLFVBQVEsRUFBRSxNQURaO0FBRUVDLFVBQVEsRUFBRTtBQUZaLENBRHFCLEVBS3JCO0FBQ0VELFVBQVEsRUFBRSxVQURaO0FBRUVDLFVBQVEsRUFBRTtBQUZaLENBTHFCLEVBU3JCO0FBQ0VELFVBQVEsRUFBRSxVQURaO0FBRUVDLFVBQVEsRUFBRTtBQUZaLENBVHFCLEVBYXJCO0FBQ0VELFVBQVEsRUFBRSxZQURaO0FBRUVDLFVBQVEsRUFBRTtBQUZaLENBYnFCLENBQXZCOztBQWtCQSxNQUFNRSxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDL0IsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNGLE1BQU0sQ0FBQ0csS0FBdEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLEVBQUUsR0FBR1IsY0FBSCxHQUFvQkgsV0FBeEM7QUFDQSxTQUNFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2EsU0FBUyxDQUFDQyxHQUFWLENBQWMsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEtBQ2I7QUFBSSxPQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFFRCxJQUFJLENBQUNiLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QmEsSUFBSSxDQUFDZCxRQUE5QixDQURGLENBREQsQ0FESCxDQUpGLEVBV0U7QUFBTSxXQUFPLEVBQUUsTUFBTU0sUUFBUSxDQUFDLElBQUQsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVhGLENBREYsQ0FERixFQWdCRSxNQUFDLE1BQUQ7QUFBUSxRQUFJLEVBQUVELEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR08sU0FBUyxDQUFDQyxHQUFWLENBQWMsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEtBQ2I7QUFBSSxPQUFHLEVBQUVBLENBQVQ7QUFBWSxXQUFPLEVBQUUsTUFBTVQsUUFBUSxDQUFDLEtBQUQsQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFFUSxJQUFJLENBQUNiLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QmEsSUFBSSxDQUFDZCxRQUE5QixDQURGLENBREQsQ0FESCxDQURGLEVBUUU7QUFBTSxXQUFPLEVBQUUsTUFBTU0sUUFBUSxDQUFDLEtBQUQsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVJGLENBaEJGLEVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdGLFFBRkgsRUFHRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBMUJGLENBREY7QUFrQ0QsQ0F2Q0Q7O0FBd0NlRCxxRUFBZixFOzs7Ozs7Ozs7OztBQy9MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1Qzs7QUFDQTs7OztBQWtCQTs7Ozs7QUFJQSxrQ0FBa0M7QUFBQTtBQUFsQztBQUFrQyxDQUFsQyxFQUd5QztBQUN2QyxRQUFNYSxTQUFTLEdBQUcsTUFBTSwyQ0FBeEIsR0FBd0IsQ0FBeEI7QUFDQSxTQUFPO0FBQVA7QUFBTyxHQUFQO0FBR2E7O0FBQUEsa0JBQTJDQyxlQUFNQyxTQUFqRCxDQUdiO0FBSUE7QUFDQTtBQUNBO0FBQ0FDLG1CQUFpQixvQkFBNEM7QUFDM0Q7QUFHRkM7O0FBQUFBLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBcUQsS0FBM0Q7QUFHQSx3QkFDRSxxRUFHSTtBQUNBO0FBQ0ksTUFBRUMsT0FBTyxJQUFULFdBQXdCO0FBQUVDLFNBQUcsRUFBRUMsU0FBUyxDQUF4QyxNQUF3QztBQUFoQixLQUF4QixHQU5WLEVBQ0UsRUFERjtBQWZGOztBQUFBOzs7QUFIbUJDLEcsQ0FJWkMsbUJBSllELEdBSVVFLGtCQUpWRjtBQUFBQSxHLENBS1pHLGVBTFlILEdBS01FLGtCQUxORjtBQStCckI7QUFDQTs7QUFFQSxVQUEyQztBQUN6Q0ksZUFBYSxHQUFHLHFCQUFTLE1BQU07QUFDN0JDLFdBQU8sQ0FBUEE7QUFERkQsR0FBZ0IsQ0FBaEJBO0FBTUFFLFNBQU8sR0FBRyxxQkFBUyxNQUFNO0FBQ3ZCRCxXQUFPLENBQVBBO0FBREZDLEdBQVUsQ0FBVkE7QUFPRixDLENBQUE7OztBQUNPLHNCQUEyQjtBQUNoQyxZQUEyQ0YsYUFBYTtBQUN4RCxTQUFPRyxDQUFDLENBQVI7QUFHSzs7QUFBQSwyQkFBbUM7QUFDeEM7QUFDQSxRQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUNBLFNBQU87QUFDTCxnQkFBWTtBQUNWLGdCQUEyQ0QsT0FBTztBQUNsRDtBQUhHOztBQUtMLG1CQUFlO0FBQ2IsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBUEc7O0FBU0wsaUJBQWE7QUFDWCxnQkFBMkNBLE9BQU87QUFDbEQ7QUFYRzs7QUFhTEUsUUFBSSxFQUFFLE1BQU07QUFDVixnQkFBMkNGLE9BQU87QUFDbER0QixZQUFNLENBQU5BO0FBZkc7QUFpQkx5QixRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSCxPQUFPO0FBQ2xELGFBQU90QixNQUFNLENBQU5BLFVBQVAsRUFBT0EsQ0FBUDtBQW5CRztBQXFCTDBCLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNKLE9BQU87QUFDbEQsWUFBTUssU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBTzVCLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTDhCLFdBQU8sRUFBRSxhQUE4QjtBQUNyQyxnQkFBMkNSLE9BQU87QUFDbEQsYUFBT3RCLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMK0IsYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1QsT0FBTztBQUNsRCxZQUFNVSxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPNUIsTUFBTSxDQUFOQSxzQkFBUCxVQUFPQSxDQUFQO0FBckNKO0FBQU8sR0FBUDtBQXdDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU12QixLQUFLLEdBQUc7QUFDWkMsUUFBTSxFQUFFO0FBQ05DLGNBQVUsRUFBRSxTQUROO0FBRU5LLFFBQUksRUFBRTtBQUZBLEdBREk7QUFLWkssT0FBSyxFQUFFO0FBQ0xDLFVBQU0sRUFBRTtBQURILEdBTEs7QUFRWlYsT0FBSyxFQUFFO0FBQ0xzRCxXQUFPLEVBQUUscUJBREo7QUFFTHBELFdBQU8sRUFBRSxvQkFGSjtBQUdMQyxRQUFJLEVBQUUsb0JBSEQ7QUFJTG9ELFFBQUksRUFBRSxvQkFKRDtBQUtMQyxPQUFHLEVBQUUsbUJBTEE7QUFNTEMsT0FBRyxFQUFFLG1CQU5BO0FBT0x4RCxPQUFHLEVBQUU7QUFQQTtBQVJLLENBQWQ7QUFrQkEsTUFBTXlELFdBQVcsR0FBR0MsbUVBQWtCOzs7Ozs7Ozs7OzthQVd4Qi9ELEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLEtBQVosQ0FBa0JzRCxPQUFROzs7YUFHcEMxRCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxLQUFaLENBQWtCeUQsR0FBSTs7Ozs7Ozs7Ozs7RUFkOUM7O0FBMkJBLE1BQU1HLEtBQU4sU0FBb0J4QiwrQ0FBcEIsQ0FBd0I7QUFDdEJKLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUYsZUFBRjtBQUFhRjtBQUFiLFFBQTJCLEtBQUtoQyxLQUF0QztBQUNBLFdBQ0UsTUFBQywrREFBRDtBQUFlLFdBQUssRUFBRUMsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFHRTtBQUNFLFVBQUksRUFBQyxhQURQO0FBRUUsYUFBTyxFQUFDLGdHQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixFQVFFO0FBQ0UsVUFBSSxFQUFDLFVBRFA7QUFFRSxjQUFRLEVBQUMsVUFGWDtBQUdFLGFBQU8sRUFBQyxtREFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsRUFhRTtBQUFNLGNBQVEsRUFBQyxTQUFmO0FBQXlCLGFBQU8sRUFBQyxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYkYsRUFjRTtBQUFNLGNBQVEsRUFBQyxRQUFmO0FBQXdCLGFBQU8sRUFBQyw4QkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWRGLEVBZUU7QUFBTSxjQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsYUFBTyxFQUFDLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFmRixFQWdCRTtBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sRUFBQyxrQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWhCRixFQW1CRTtBQUFNLGNBQVEsRUFBQyxjQUFmO0FBQThCLGFBQU8sRUFBQyxxQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CRixFQW9CRTtBQUFNLGNBQVEsRUFBQyxhQUFmO0FBQTZCLGFBQU8sRUFBQyw2QkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXBCRixFQXFCRTtBQUFNLGNBQVEsRUFBQyxlQUFmO0FBQStCLGFBQU8sRUFBQyxTQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BckJGLEVBc0JFO0FBQU0sY0FBUSxFQUFDLGVBQWY7QUFBK0IsYUFBTyxFQUFDLGtCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdEJGLEVBdUJFO0FBQU0sY0FBUSxFQUFDLHFCQUFmO0FBQXFDLGFBQU8sRUFBQyxTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdkJGLEVBeUJFO0FBQU0sVUFBSSxFQUFDLFFBQVg7QUFBb0IsYUFBTyxFQUFDLGVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF6QkYsRUEwQkU7QUFBTSxVQUFJLEVBQUMsS0FBWDtBQUFpQixTQUFHLEVBQUMsV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTFCRixDQURGLEVBNkJFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsU0FBRCxlQUFlK0IsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREYsRUFFRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBN0JGLENBREY7QUFvQ0Q7O0FBdkNxQjs7QUEwQ1RpQyw2R0FBTSxDQUFDLGdCQUFELEVBQW1CQyxrREFBbkIsQ0FBTixDQUFpQ0YsS0FBakMsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28uc3ZnXCI7XHJcbmltcG9ydCBUb3BjdXJ2IGZyb20gXCIuLi9pbWFnZXMvdG9wY3Vydi5zdmdcIjtcclxuaW1wb3J0IEJvdHRvbWN1cnYgZnJvbSBcIi4uL2ltYWdlcy9ib3R0b21jdXIuc3ZnXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgTWFpbldhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICYgPiBtYWluIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU05hdmJhciA9IHN0eWxlZC5uYXZgXHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgei1pbmRleDogODA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZmYzdjZSwgI2ZmZGRlMSk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAyMHB4IC03cHggcmdiKDAgMCAwIC8gNjYlKTtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iU30ge1xyXG4gICAgaGVpZ2h0OiAxMnZoO1xyXG4gIH1cclxuICAmID4gdWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLmxhcHRvcE19IHtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICAmID4gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLnRhYkx9IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiA+IGxpIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJiA+IGxpID4gc3ZnIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgICYgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS50YWJMfSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAmID4gbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIDJyZW07XHJcbiAgICAgIH1cclxuICAgICAgJiA+IGxpID4gYSB7XHJcbiAgICAgICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBUb3BjdXJ2c3R5ID0gc3R5bGVkKFRvcGN1cnYpYFxyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBsZWZ0OiAtMjBweDtcclxuYDtcclxuY29uc3QgQm90dG9tY3VydnN0eSA9IHN0eWxlZChCb3R0b21jdXJ2KWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5gO1xyXG5jb25zdCBNYmxOYXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLnNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIil9O1xyXG4gICYgPiBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDExMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmR9O1xyXG4gIH1cclxuICAmID4gdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgJiA+IGxpIHtcclxuICAgICAgJiA+IGEge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGhvbWVOYXZMaW5rID0gW1xyXG4gIHtcclxuICAgIGxpbmtuYW1lOiBcIkhvbWVcIixcclxuICAgIGxpbmtnb3RvOiBcIiNob21lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsaW5rbmFtZTogXCJTZXJ2aWNlc1wiLFxyXG4gICAgbGlua2dvdG86IFwiI3NlcnZpZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxpbmtuYW1lOiBcIkFib3V0IFVzXCIsXHJcbiAgICBsaW5rZ290bzogXCIjYWJvdXR1c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGlua25hbWU6IFwiQ29udGFjdCB1c1wiLFxyXG4gICAgbGlua2dvdG86IFwiI2NvbnRhY3R1c1wiLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IHNlcnZpY2VOYXZMaW5rID0gW1xyXG4gIHtcclxuICAgIGxpbmtuYW1lOiBcIkhvbWVcIixcclxuICAgIGxpbmtnb3RvOiBcIiNob21lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsaW5rbmFtZTogXCJBcHByb2NoZVwiLFxyXG4gICAgbGlua2dvdG86IFwiI2FwcHJvY2hlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsaW5rbmFtZTogXCJQcmljZWluZ1wiLFxyXG4gICAgbGlua2dvdG86IFwiI3ByaWNlaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsaW5rbmFtZTogXCJDb250YWN0IHVzXCIsXHJcbiAgICBsaW5rZ290bzogXCIjY29udGFjdHVzXCIsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgTGF5T3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBzaG93TGlua3MgPSBpZCA/IHNlcnZpY2VOYXZMaW5rIDogaG9tZU5hdkxpbms7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluV2FwcGVyPlxyXG4gICAgICA8U05hdmJhcj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Nob3dMaW5rcy5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEubGlua2dvdG99PntkYXRhLmxpbmtuYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gc2V0U3RhdGUodHJ1ZSl9Pnx8fDwvc3Bhbj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L1NOYXZiYXI+XHJcbiAgICAgIDxNYmxOYXYgc2hvdz17c3RhdGV9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtzaG93TGlua3MubWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5saW5rZ290b30+e2RhdGEubGlua25hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZShmYWxzZSl9Plg8L3NwYW4+XHJcbiAgICAgIDwvTWJsTmF2PlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8VG9wY3VydnN0eSAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8Qm90dG9tY3VydnN0eSAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L01haW5XYXBwZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGF5T3V0O1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMYXlPdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgd2l0aEdBIGZyb20gXCJuZXh0LWdhXCI7XHJcblxyXG5jb25zdCB0aGVtZSA9IHtcclxuICBjb2xvcnM6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiI0ZGRjJGMlwiLFxyXG4gICAgdGV4dDogXCIjMDAwMDAwXCIsXHJcbiAgfSxcclxuICBmb250czoge1xyXG4gICAgc2Vjb25kOiBcIlNvdXJjZSBTYW5zIFBybywgc2Fucy1zZXJpZlwiLFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIGxhcHRvcEw6IFwiKG1heC13aWR0aDogMTAyNHB4KVwiLFxyXG4gICAgbGFwdG9wTTogXCIobWF4LXdpZHRoOiA4MTZweClcIixcclxuICAgIHRhYkw6IFwiKG1heC13aWR0aDogNjkycHgpXCIsXHJcbiAgICB0YWJNOiBcIihtYXgtd2lkdGg6IDY1M3B4KVwiLFxyXG4gICAgbWJMOiBcIihtYXgtd2lkdGg6NDk1cHgpXCIsXHJcbiAgICBtYk06IFwiKG1heC13aWR0aDo0MjVweClcIixcclxuICAgIG1iUzogXCIobWF4LXdpZHRoOjM3NXB4KVwiLFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbip7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5odG1sIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDUyLjYlO1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLmxhcHRvcEx9IHtcclxuICAgICAgZm9udC1zaXplOiA0Ni42JTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJNfSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDAuNiU7XHJcblxyXG4gICAgfVxyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsI2ZmYzdjZSwgI2ZmZGRlMSk7XHJcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbi8qIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgKi9cclxufVxyXG4gYDtcclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5Db2RlY29zPC90aXRsZT5cclxuXHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiQ29kZWNvcyBpcyBhIHNlcnZpZXJzIGhlbHAgeW91ciBidXNzaW5lcyBsaXZlIGluIG9ubGllIGFuZCBnZXQgY3VzdG1lcnMgYW5kIG1ha2UgaXQgYXMgYSBicmFuZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIG9nIHRhZ3MgKi99XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwib2c6dGl0bGVcIlxyXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcclxuICAgICAgICAgICAgY29udGVudD1cImNvZGVjb3MgdGhhdCBwcm92aWVkIGxpdmUgeW91ciBidXNzaW5lcyBvbiBvbmxpbmVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vY29kZWNvcy5uZXRsaWZ5LmNvbS9cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJjb2RlXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL3N0YXRpYy9sb2dvLnN2Z1wiIC8+XHJcbiAgICAgICAgICB7Lyogb2cgdGFncyBlbmQqL31cclxuICAgICAgICAgIHsvKiB0d2l0dGVyIHRhZ3MqL31cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2NvZGVjb3MubmV0bGlmeS5jb21cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cImNvZGVjb3NcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cIi9zdGF0aWMvbG9nby5zdmdcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cImNvZGVjb3NcIiAvPlxyXG4gICAgICAgICAgey8qIHR3aXR0ZXIgdGFncyBlbmQqL31cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiVVJMXCIgcmVsPVwiY2Fub25pY2FsXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPExheU91dD5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDwvTGF5T3V0PlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEdBKFwiVUEtMTY2MTM1ODIyLTJcIiwgUm91dGVyKShNeUFwcCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=