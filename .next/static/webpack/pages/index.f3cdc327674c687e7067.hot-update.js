webpackHotUpdate_N_E("pages/index",{

/***/ "./components/contactus.js":
/*!*********************************!*\
  !*** ./components/contactus.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\components\\contactus.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var ContactusWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "contactus__ContactusWapper",
  componentId: "sc-9u9tv2-0"
})(["margin:5rem;"]);
_c = ContactusWapper;

var Contact = function Contact() {
  return __jsx(ContactusWapper, {
    id: "contactus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(Subtitle, {
    title: "Contact us",
    info: "Feel free Contact us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "Name"), __jsx("input", {
    type: "text",
    id: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Email"), __jsx("input", {
    type: "email",
    id: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: "phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Phone"), __jsx("input", {
    type: "number",
    id: "phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("select", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "Web design",
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Web design"), __jsx("option", {
    value: "Web Development",
    key: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Web development"), __jsx("option", {
    value: "E-commerce",
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "E-commerce application")), __jsx("label", {
    htmlFor: "detiles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Detiles"), __jsx("textarea", {
    cols: "30",
    id: "detiles",
    rows: "10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }))));
};

_c2 = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c, _c2;

$RefreshReg$(_c, "ContactusWapper");
$RefreshReg$(_c2, "Contact");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var _components_subtitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/subtitle */ "./components/subtitle.js");
/* harmony import */ var _components_contactus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contactus */ "./components/contactus.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\pages\\index.js";

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

_c7 = Heroimg;
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

_c8 = Webdesign;
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

_c9 = Webdev;
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

_c10 = Ecom;
Ecom.defaultProps = {
  width: "877",
  height: "640",
  viewBox: "0 0 877 640",
  xmlns: "http://www.w3.org/2000/svg"
};



var MainWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__MainWapper",
  componentId: "pvabpx-0"
})(["position:relative;z-index:30;"]);
_c = MainWapper;
var HomeWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__HomeWapper",
  componentId: "pvabpx-1"
})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:space-around;& > div{font-size:2.5rem;padding:4rem;width:70%;height:50vh;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;& > h1{font-size:7rem;font-weight:500;}& > p{font-family:", ";}}& > svg{height:100%;}"], function (props) {
  return props.theme.fonts.second;
});
_c2 = HomeWapper;
var ServiesWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__ServiesWapper",
  componentId: "pvabpx-2"
})(["margin:0 4rem;"]);
_c3 = ServiesWapper;
var SubtitlegridWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__SubtitlegridWapper",
  componentId: "pvabpx-3"
})(["& > div:nth-child(even){& > div{order:2;}}& > div{display:flex;align-items:center;& > svg{width:50%;}& > div{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;font-size:2.5rem;width:60%;margin:0 3rem;& > *{margin:2rem 0;}& > h2{font-weight:500;}& > p{font-size:2.5rem;font-family:", ";}}}"], function (props) {
  return props.theme.fonts.second;
});
_c4 = SubtitlegridWapper;
var Aboutuswapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Aboutuswapper",
  componentId: "pvabpx-4"
})(["margin:4rem;& > p{font-size:3rem;font-family:", ";}"], function (props) {
  return props.theme.fonts.second;
});
_c5 = Aboutuswapper;
var content = "It should not be neglected that the accurate predictions of the operational system will require a vast knowledge. To be more specific, any part of the deep analysis makes no difference to The Assistance of Technology-Driven Idea George Albrecht in The Book of ";
var serviesdata = [{
  name: "Web Design",
  content: content,
  Svg: Webdesign
}, {
  name: "Web Development",
  content: content,
  Svg: Webdev
}, {
  name: "E-commerce",
  content: content,
  Svg: Ecom
}];

var Home = function Home() {
  return __jsx(MainWapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 3
    }
  }, __jsx(HomeWapper, {
    id: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "The Codecos"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Fortunately, a supervisory action of the condition of the application rules likely the existing network. Therefore, the concept of the first-class pac"), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Contact us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  })), __jsx(Heroimg, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  })), __jsx(ServiesWapper, {
    id: "servies",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Serviesse",
    info: "Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }), __jsx(SubtitlegridWapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, serviesdata.map(function (_ref, i) {
    var name = _ref.name,
        Svg = _ref.Svg,
        content = _ref.content;
    return __jsx("div", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, "".concat(i + 1, ".").concat(name)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, content), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "View Prices",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    })), __jsx(Svg, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 15
      }
    }));
  }))), __jsx(Aboutuswapper, {
    id: "aboutus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "About us",
    info: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, "\"To be quite frank, elements of the software engineering concepts and practices can be regarded as remotely insignificant. The sources and influences of the independent knowledge presumably the primary element. It should rather be regarded as an integral part of the technical terms the strategic decisions and The Facility of Relational Index\" (Jude Bartley in The Book of the Major Outcomes) Conversely, with the exception of the skills the operations research. The real reason of the continuing enhancement doctrine successfully the sources and influences of the application rules.")), __jsx(_components_contactus__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }));
};

_c6 = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "MainWapper");
$RefreshReg$(_c2, "HomeWapper");
$RefreshReg$(_c3, "ServiesWapper");
$RefreshReg$(_c4, "SubtitlegridWapper");
$RefreshReg$(_c5, "Aboutuswapper");
$RefreshReg$(_c6, "Home");
$RefreshReg$(_c7, "Heroimg");
$RefreshReg$(_c8, "Webdesign");
$RefreshReg$(_c9, "Webdev");
$RefreshReg$(_c10, "Ecom");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0dXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnRhY3R1c1dhcHBlciIsInN0eWxlZCIsImRpdiIsIkNvbnRhY3QiLCJIZXJvaW1nIiwiV2ViZGVzaWduIiwiV2ViZGV2IiwiRWNvbSIsIk1haW5XYXBwZXIiLCJIb21lV2FwcGVyIiwic2VjdGlvbiIsInByb3BzIiwidGhlbWUiLCJmb250cyIsInNlY29uZCIsIlNlcnZpZXNXYXBwZXIiLCJTdWJ0aXRsZWdyaWRXYXBwZXIiLCJBYm91dHVzd2FwcGVyIiwiY29udGVudCIsInNlcnZpZXNkYXRhIiwibmFtZSIsIlN2ZyIsIkhvbWUiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxlQUFlLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0JBQXJCO0tBQU1GLGU7O0FBR04sSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixTQUNFLE1BQUMsZUFBRDtBQUFpQixNQUFFLEVBQUMsV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFVLFNBQUssRUFBQyxZQUFoQjtBQUE2QixRQUFJLEVBQUMsc0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUUsRUFBQyxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFPLFdBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQUlFO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsTUFBRSxFQUFDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLEVBTUU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixNQUFFLEVBQUMsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsU0FBSyxFQUFDLFlBQWQ7QUFBMkIsT0FBRyxFQUFDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFJRTtBQUFRLFNBQUssRUFBQyxpQkFBZDtBQUFnQyxPQUFHLEVBQUMsR0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixFQU9FO0FBQVEsU0FBSyxFQUFDLFlBQWQ7QUFBMkIsT0FBRyxFQUFDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBUEYsQ0FQRixFQWtCRTtBQUFPLFdBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkYsRUFtQkU7QUFBVSxRQUFJLEVBQUMsSUFBZjtBQUFvQixNQUFFLEVBQUMsU0FBdkI7QUFBaUMsUUFBSSxFQUFDLElBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0FERixDQUZGLENBREY7QUE0QkQsQ0E3QkQ7O01BQU1BLE87QUErQlNBLHNFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7SUFDT0MsTyxZQUFBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxPO0FBQUFBLE87Ozs7Ozs7SUFDQUMsUyxZQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUFBLFM7QUFBQUEsUzs7Ozs7OztJQUNBQyxNLFlBQUFBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsTTtBQUFBQSxNOzs7Ozs7O0lBQ0FDLEksWUFBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUFBQSxJO0FBQUFBLEk7Ozs7OztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFVBQVUsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBaEI7S0FBTU0sVTtBQUtOLElBQU1DLFVBQVUsR0FBR1IseURBQU0sQ0FBQ1MsT0FBVjtBQUFBO0FBQUE7QUFBQSxzVUFvQkssVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFaLENBQWtCQyxNQUE3QjtBQUFBLENBcEJMLENBQWhCO01BQU1MLFU7QUEyQk4sSUFBTU0sYUFBYSxHQUFHZCx5REFBTSxDQUFDUyxPQUFWO0FBQUE7QUFBQTtBQUFBLHNCQUFuQjtNQUFNSyxhO0FBR04sSUFBTUMsa0JBQWtCLEdBQUdmLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOFVBNEJELFVBQUNTLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsTUFBN0I7QUFBQSxDQTVCQyxDQUF4QjtNQUFNRSxrQjtBQWlDTixJQUFNQyxhQUFhLEdBQUdoQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDREQUlBLFVBQUNTLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsTUFBN0I7QUFBQSxDQUpBLENBQW5CO01BQU1HLGE7QUFPTixJQUFNQyxPQUFPLEdBQ1gsc1FBREY7QUFFQSxJQUFNQyxXQUFXLEdBQUcsQ0FDbEI7QUFBRUMsTUFBSSxFQUFFLFlBQVI7QUFBc0JGLFNBQU8sRUFBUEEsT0FBdEI7QUFBK0JHLEtBQUcsRUFBRWhCO0FBQXBDLENBRGtCLEVBRWxCO0FBQUVlLE1BQUksRUFBRSxpQkFBUjtBQUEyQkYsU0FBTyxFQUFQQSxPQUEzQjtBQUFvQ0csS0FBRyxFQUFFZjtBQUF6QyxDQUZrQixFQUdsQjtBQUFFYyxNQUFJLEVBQUUsWUFBUjtBQUFzQkYsU0FBTyxFQUFQQSxPQUF0QjtBQUErQkcsS0FBRyxFQUFFZDtBQUFwQyxDQUhrQixDQUFwQjs7QUFLQSxJQUFNZSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQ1gsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBWSxNQUFFLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhKQUZGLEVBT0UsTUFBQywwREFBRDtBQUFRLFFBQUksRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGLEVBVUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQURGLEVBYUUsTUFBQyxhQUFEO0FBQWUsTUFBRSxFQUFDLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsU0FBSyxFQUFDLFdBRFI7QUFFRSxRQUFJLEVBQUMsNkhBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFdBQVcsQ0FBQ0ksR0FBWixDQUFnQixnQkFBeUJDLENBQXpCLEVBQStCO0FBQUEsUUFBNUJKLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLFFBQXRCQyxHQUFzQixRQUF0QkEsR0FBc0I7QUFBQSxRQUFqQkgsT0FBaUIsUUFBakJBLE9BQWlCO0FBQzlDLFdBQ0U7QUFBSyxTQUFHLEVBQUVNLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFRQSxDQUFDLEdBQUcsQ0FBWixjQUFpQkosSUFBakIsRUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUYsT0FBSixDQUZGLEVBR0UsTUFBQywwREFBRDtBQUFRLFVBQUksRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQURGLEVBTUUsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORixDQURGO0FBVUQsR0FYQSxDQURILENBTEYsQ0FiRixFQWlDRSxNQUFDLGFBQUQ7QUFBZSxNQUFFLEVBQUMsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBVSxTQUFLLEVBQUMsVUFBaEI7QUFBMkIsUUFBSSxFQUFDLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa2xCQUZGLENBakNGLEVBK0NFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9DRixDQURXO0FBQUEsQ0FBYjs7TUFBTUksSTtBQW9EU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjNjZGMzMjc2NzRjNjg3ZTcwNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmNvbnN0IENvbnRhY3R1c1dhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiA1cmVtO1xyXG5gO1xyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFjdHVzV2FwcGVyIGlkPVwiY29udGFjdHVzXCI+XHJcbiAgICAgIDxTdWJ0aXRsZSB0aXRsZT1cIkNvbnRhY3QgdXNcIiBpbmZvPVwiRmVlbCBmcmVlIENvbnRhY3QgdXNcIiAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgLz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicGhvbmVcIiAvPlxyXG4gICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldlYiBkZXNpZ25cIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgV2ViIGRlc2lnblxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldlYiBEZXZlbG9wbWVudFwiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAgICBXZWIgZGV2ZWxvcG1lbnRcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFLWNvbW1lcmNlXCIga2V5PVwiM1wiPlxyXG4gICAgICAgICAgICAgIEUtY29tbWVyY2UgYXBwbGljYXRpb25cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGV0aWxlc1wiPkRldGlsZXM8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIGlkPVwiZGV0aWxlc1wiIHJvd3M9XCIxMFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFjdHVzV2FwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgSGVyb2ltZyBmcm9tIFwiLi4vaW1hZ2VzL2hlcm8uc3ZnXCI7XHJcbmltcG9ydCBXZWJkZXNpZ24gZnJvbSBcIi4uL2ltYWdlcy93ZWJkZXNpZ24uc3ZnXCI7XHJcbmltcG9ydCBXZWJkZXYgZnJvbSBcIi4uL2ltYWdlcy93ZWJkZXYuc3ZnXCI7XHJcbmltcG9ydCBFY29tIGZyb20gXCIuLi9pbWFnZXMvZWNvbS5zdmdcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IFN1YnRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL3N1YnRpdGxlXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3R1c1wiO1xyXG5jb25zdCBNYWluV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMzA7XHJcbmA7XHJcblxyXG5jb25zdCBIb21lV2FwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgJiA+IGgxIHtcclxuICAgICAgZm9udC1zaXplOiA3cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgJiA+IHAge1xyXG4gICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICB9XHJcbiAgfVxyXG4gICYgPiBzdmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuYDtcclxuY29uc3QgU2Vydmllc1dhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbjogMCA0cmVtO1xyXG5gO1xyXG5jb25zdCBTdWJ0aXRsZWdyaWRXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICYgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICYgPiBkaXYge1xyXG4gICAgICBvcmRlcjogMjtcclxuICAgIH1cclxuICB9XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICYgPiBzdmcge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIG1hcmdpbjogMCAzcmVtO1xyXG4gICAgICAmID4gKiB7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEFib3V0dXN3YXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogNHJlbTtcclxuICAmID4gcCB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBjb250ZW50ID1cclxuICBcIkl0IHNob3VsZCBub3QgYmUgbmVnbGVjdGVkIHRoYXQgdGhlIGFjY3VyYXRlIHByZWRpY3Rpb25zIG9mIHRoZSBvcGVyYXRpb25hbCBzeXN0ZW0gd2lsbCByZXF1aXJlIGEgdmFzdCBrbm93bGVkZ2UuIFRvIGJlIG1vcmUgc3BlY2lmaWMsIGFueSBwYXJ0IG9mIHRoZSBkZWVwIGFuYWx5c2lzIG1ha2VzIG5vIGRpZmZlcmVuY2UgdG8gVGhlIEFzc2lzdGFuY2Ugb2YgVGVjaG5vbG9neS1Ecml2ZW4gSWRlYSBHZW9yZ2UgQWxicmVjaHQgaW4gVGhlIEJvb2sgb2YgXCI7XHJcbmNvbnN0IHNlcnZpZXNkYXRhID0gW1xyXG4gIHsgbmFtZTogXCJXZWIgRGVzaWduXCIsIGNvbnRlbnQsIFN2ZzogV2ViZGVzaWduIH0sXHJcbiAgeyBuYW1lOiBcIldlYiBEZXZlbG9wbWVudFwiLCBjb250ZW50LCBTdmc6IFdlYmRldiB9LFxyXG4gIHsgbmFtZTogXCJFLWNvbW1lcmNlXCIsIGNvbnRlbnQsIFN2ZzogRWNvbSB9LFxyXG5dO1xyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG4gIDxNYWluV2FwcGVyPlxyXG4gICAgPEhvbWVXYXBwZXIgaWQ9XCJob21lXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlRoZSBDb2RlY29zPC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEZvcnR1bmF0ZWx5LCBhIHN1cGVydmlzb3J5IGFjdGlvbiBvZiB0aGUgY29uZGl0aW9uIG9mIHRoZSBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgcnVsZXMgbGlrZWx5IHRoZSBleGlzdGluZyBuZXR3b3JrLiBUaGVyZWZvcmUsIHRoZSBjb25jZXB0IG9mIHRoZVxyXG4gICAgICAgICAgZmlyc3QtY2xhc3MgcGFjXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxCdXR0b24gdGV4dD1cIkNvbnRhY3QgdXNcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEhlcm9pbWcgLz5cclxuICAgIDwvSG9tZVdhcHBlcj5cclxuICAgIDxTZXJ2aWVzV2FwcGVyIGlkPVwic2Vydmllc1wiPlxyXG4gICAgICA8U3VidGl0bGVcclxuICAgICAgICB0aXRsZT1cIlNlcnZpZXNzZVwiXHJcbiAgICAgICAgaW5mbz1cIk1vcmVvdmVyLCB0aGUgdXRpbGl6YXRpb24gb2YgdGhlIG1lY2hhbmlzbSBzaG91bGQgaGVscCBpbiByZXNvbHZpbmcgcHJlc2VudCBjaGFsbGVuZ2VzLiBXaGF0IGlzIG1vcmUsIHRoZSByYXcgZHJhZnQgb2YgdGhlIFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxTdWJ0aXRsZWdyaWRXYXBwZXI+XHJcbiAgICAgICAge3NlcnZpZXNkYXRhLm1hcCgoeyBuYW1lLCBTdmcsIGNvbnRlbnQgfSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2Ake2kgKyAxfS4ke25hbWV9YH08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+e2NvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVmlldyBQcmljZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxTdmcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1N1YnRpdGxlZ3JpZFdhcHBlcj5cclxuICAgIDwvU2Vydmllc1dhcHBlcj5cclxuICAgIDxBYm91dHVzd2FwcGVyIGlkPVwiYWJvdXR1c1wiPlxyXG4gICAgICA8U3VidGl0bGUgdGl0bGU9XCJBYm91dCB1c1wiIGluZm89XCJcIiAvPlxyXG4gICAgICA8cD5cclxuICAgICAgICBcIlRvIGJlIHF1aXRlIGZyYW5rLCBlbGVtZW50cyBvZiB0aGUgc29mdHdhcmUgZW5naW5lZXJpbmcgY29uY2VwdHMgYW5kXHJcbiAgICAgICAgcHJhY3RpY2VzIGNhbiBiZSByZWdhcmRlZCBhcyByZW1vdGVseSBpbnNpZ25pZmljYW50LiBUaGUgc291cmNlcyBhbmRcclxuICAgICAgICBpbmZsdWVuY2VzIG9mIHRoZSBpbmRlcGVuZGVudCBrbm93bGVkZ2UgcHJlc3VtYWJseSB0aGUgcHJpbWFyeSBlbGVtZW50LlxyXG4gICAgICAgIEl0IHNob3VsZCByYXRoZXIgYmUgcmVnYXJkZWQgYXMgYW4gaW50ZWdyYWwgcGFydCBvZiB0aGUgdGVjaG5pY2FsIHRlcm1zXHJcbiAgICAgICAgdGhlIHN0cmF0ZWdpYyBkZWNpc2lvbnMgYW5kIFRoZSBGYWNpbGl0eSBvZiBSZWxhdGlvbmFsIEluZGV4XCIgKEp1ZGVcclxuICAgICAgICBCYXJ0bGV5IGluIFRoZSBCb29rIG9mIHRoZSBNYWpvciBPdXRjb21lcykgQ29udmVyc2VseSwgd2l0aCB0aGVcclxuICAgICAgICBleGNlcHRpb24gb2YgdGhlIHNraWxscyB0aGUgb3BlcmF0aW9ucyByZXNlYXJjaC4gVGhlIHJlYWwgcmVhc29uIG9mIHRoZVxyXG4gICAgICAgIGNvbnRpbnVpbmcgZW5oYW5jZW1lbnQgZG9jdHJpbmUgc3VjY2Vzc2Z1bGx5IHRoZSBzb3VyY2VzIGFuZCBpbmZsdWVuY2VzXHJcbiAgICAgICAgb2YgdGhlIGFwcGxpY2F0aW9uIHJ1bGVzLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0Fib3V0dXN3YXBwZXI+XHJcbiAgICA8Q29udGFjdCAvPlxyXG4gIDwvTWFpbldhcHBlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=