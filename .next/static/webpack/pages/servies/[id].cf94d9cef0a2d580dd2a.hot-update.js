webpackHotUpdate_N_E("pages/servies/[id]",{

/***/ "./pages/servies/[id].js":
/*!*******************************!*\
  !*** ./pages/servies/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button */ "./components/button.js");
/* harmony import */ var _components_contactus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contactus */ "./components/contactus.js");
/* harmony import */ var _components_subtitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/subtitle */ "./components/subtitle.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data */ "./data/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\mypc\\Desktop\\codecos\\codecos\\pages\\servies\\[id].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var MainWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "id__MainWapper",
  componentId: "sc-1vx1iiv-0"
})(["position:relative;z-index:30;"]);
_c = MainWapper;
var HomeWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "id__HomeWapper",
  componentId: "sc-1vx1iiv-1"
})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:space-around;& > div{font-size:2.5rem;padding:4rem;width:70%;height:80%;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;@media ", "{padding:0;}@media ", "{width:90%;height:50%;}@media ", "{height:70%;}& > h1{font-size:10rem;font-weight:500;@media ", "{font-size:7rem;}}& > p{font-family:", ";}}& > svg{height:80%;width:80%;padding:4rem;@media ", "{display:none;}}"], function (props) {
  return props.theme.media.tabM;
}, function (props) {
  return props.theme.media.mbL;
}, function (props) {
  return props.theme.media.mbS;
}, function (props) {
  return props.theme.media.mbM;
}, function (props) {
  return props.theme.fonts.second;
}, function (props) {
  return props.theme.media.tabM;
});
_c2 = HomeWapper;
var ApprochWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "id__ApprochWapper",
  componentId: "sc-1vx1iiv-2"
})(["margin:0 4rem;"]);
_c3 = ApprochWapper;
var ApprochgridWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "id__ApprochgridWapper",
  componentId: "sc-1vx1iiv-3"
})(["& > div:nth-child(even){& > div{order:2;}}& > div{display:flex;align-items:center;margin:8rem 0;@media ", "{flex-direction:column;}@media ", "{margin:5rem 0;}& > svg{width:50%;height:100%;@media ", "{width:100%;padding:4rem;}}& > div{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;font-size:2.5rem;width:60%;margin:0 3rem;@media ", "{order:2;}@media ", "{width:100%;margin:0 0;}& > *{margin:2rem 0;}& > h2{font-weight:500;}& > p{font-size:2.5rem;font-family:", ";}}}"], function (props) {
  return props.theme.media.tabM;
}, function (props) {
  return props.theme.media.mbL;
}, function (props) {
  return props.theme.media.mbL;
}, function (props) {
  return props.theme.media.tabM;
}, function (props) {
  return props.theme.media.mbL;
}, function (props) {
  return props.theme.fonts.second;
});
_c4 = ApprochgridWapper;
var PriceingWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "id__PriceingWapper",
  componentId: "sc-1vx1iiv-4"
})(["margin:0 4rem;"]);
_c5 = PriceingWapper;
var PriceinggridWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "id__PriceinggridWapper",
  componentId: "sc-1vx1iiv-5"
})(["display:flex;justify-content:space-around;flex-wrap:wrap;font-size:2.8rem;& > div{padding:3rem;border-radius:8px;box-shadow:1px 2px 20px -10px black;margin:2rem;& > h2{text-align:center;font-weight:500;font-size:5rem;}& > ul{font-size:2.5rem;list-style:none;font-family:", ";& > li{margin:2rem 0;}}& > div{display:flex;align-items:center;font-family:", ";& > h2{font-size:5rem;padding:0 3rem;border-right:1px solid;}& > p{font-size:1.7rem;margin:0 1rem;}}}"], function (props) {
  return props.theme.fonts.second;
}, function (props) {
  return props.theme.fonts.second;
});
_c6 = PriceinggridWapper;

var Webdesign = function Webdesign() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var id = router.query.id;

  if (id) {
    var rdata = _data__WEBPACK_IMPORTED_MODULE_5__["default"].filter(function (dt, i) {
      console.log(dt);
      return Number(id) === i;
    });
    var _rdata$ = rdata[0],
        title = _rdata$.title,
        headcontent = _rdata$.headcontent,
        Headimg = _rdata$.Headimg,
        approchcontent = _rdata$.approchcontent,
        approchdata = _rdata$.approchdata,
        priceingcontent = _rdata$.priceingcontent,
        priceingdata = _rdata$.priceingdata;
    return __jsx(MainWapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 7
      }
    }, __jsx(HomeWapper, {
      id: "home",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }, title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }
    }, headcontent), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "View plans",
      "goto": "/servies/".concat(id, "/#priceing"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    })), __jsx(Headimg, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 11
      }
    })), __jsx(ApprochWapper, {
      id: "approche",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }
    }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Approch",
      info: approchcontent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 11
      }
    }), __jsx(ApprochgridWapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, approchdata.map(function (_ref, i) {
      var name = _ref.name,
          Svg = _ref.Svg,
          content = _ref.content,
          _goto = _ref["goto"];
      return __jsx("div", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 19
        }
      }, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }
      }, "".concat(name)), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }
      }, content), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "Contact us",
        "goto": "/servies/".concat(id, "/").concat(_goto),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }
      })), __jsx(Svg, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 19
        }
      }));
    }))), __jsx(PriceingWapper, {
      id: "priceing",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }
    }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Priceing",
      info: priceingcontent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }
    }), __jsx(PriceinggridWapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }
    }, priceingdata.map(function (_ref2, i) {
      var cost = _ref2.cost,
          extrfutr = _ref2.extrfutr,
          ptitle = _ref2.ptitle,
          futrsoffer = _ref2.futrsoffer;
      return __jsx("div", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 19
        }
      }, ptitle), __jsx("ul", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 19
        }
      }, futrsoffer.map(function (info, i) {
        return __jsx("li", {
          key: info,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 30
          }
        }, info);
      })), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 19
        }
      }, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 21
        }
      }, "$", cost), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }
      }, extrfutr)));
    }))), __jsx(_components_contactus__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 12
      }
    }, "Loading");
  }
};

_s(Webdesign, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c7 = Webdesign;
/* harmony default export */ __webpack_exports__["default"] = (Webdesign);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "MainWapper");
$RefreshReg$(_c2, "HomeWapper");
$RefreshReg$(_c3, "ApprochWapper");
$RefreshReg$(_c4, "ApprochgridWapper");
$RefreshReg$(_c5, "PriceingWapper");
$RefreshReg$(_c6, "PriceinggridWapper");
$RefreshReg$(_c7, "Webdesign");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vydmllcy8uanMiXSwibmFtZXMiOlsiTWFpbldhcHBlciIsInN0eWxlZCIsImRpdiIsIkhvbWVXYXBwZXIiLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsIm1lZGlhIiwidGFiTSIsIm1iTCIsIm1iUyIsIm1iTSIsImZvbnRzIiwic2Vjb25kIiwiQXBwcm9jaFdhcHBlciIsIkFwcHJvY2hncmlkV2FwcGVyIiwiUHJpY2VpbmdXYXBwZXIiLCJQcmljZWluZ2dyaWRXYXBwZXIiLCJXZWJkZXNpZ24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicmRhdGEiLCJkYXRhIiwiZmlsdGVyIiwiZHQiLCJpIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsInRpdGxlIiwiaGVhZGNvbnRlbnQiLCJIZWFkaW1nIiwiYXBwcm9jaGNvbnRlbnQiLCJhcHByb2NoZGF0YSIsInByaWNlaW5nY29udGVudCIsInByaWNlaW5nZGF0YSIsIm1hcCIsIm5hbWUiLCJTdmciLCJjb250ZW50IiwiZ290byIsImNvc3QiLCJleHRyZnV0ciIsInB0aXRsZSIsImZ1dHJzb2ZmZXIiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBaEI7S0FBTUYsVTtBQUtOLElBQU1HLFVBQVUsR0FBR0YseURBQU0sQ0FBQ0csT0FBVjtBQUFBO0FBQUE7QUFBQSxtZUFlSCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JDLElBQTdCO0FBQUEsQ0FmRyxFQWtCSCxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JFLEdBQTdCO0FBQUEsQ0FsQkcsRUFzQkgs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Q0FBQ1IsR0FBWCxDQUFlLFVBQUNTLElBQUQsRUFBT3BCLENBQVAsRUFBYTtBQUMzQixlQUFPO0FBQUksYUFBRyxFQUFFb0IsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdCQSxJQUFoQixDQUFQO0FBQ0QsT0FGQSxDQURILENBRkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFNSixJQUFOLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlDLFFBQUosQ0FGRixDQVBGLENBREY7QUFjRCxLQWZBLENBREgsQ0FGRixDQTNCRixFQWdERSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFoREYsQ0FERjtBQW9ERCxHQWxFRCxNQWtFTztBQUNMLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEO0FBQ0YsQ0F4RUQ7O0dBQU0xQixTO1VBQ1dFLHFEOzs7TUFEWEYsUztBQXlFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2Vydmllcy9baWRdLmNmOTRkOWNlZjBhMmQ1ODBkZDJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGFjdHVzXCI7XHJcbmltcG9ydCBTdWJ0aXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdWJ0aXRsZVwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vZGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE1haW5XYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzMDtcclxuYDtcclxuXHJcbmNvbnN0IEhvbWVXYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAmID4gZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgcGFkZGluZzogNHJlbTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEudGFiTX0ge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYkx9IHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iU30ge1xyXG4gICAgICBoZWlnaHQ6IDcwJTtcclxuICAgIH1cclxuICAgICYgPiBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJNfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICAgIH1cclxuICB9XHJcbiAgJiA+IHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS50YWJNfSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQXBwcm9jaFdhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbjogMCA0cmVtO1xyXG5gO1xyXG5jb25zdCBBcHByb2NoZ3JpZFdhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgJiA+IGRpdjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA4cmVtIDA7XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLnRhYk19IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJMfSB7XHJcbiAgICAgIG1hcmdpbjogNXJlbSAwO1xyXG4gICAgfVxyXG4gICAgJiA+IHN2ZyB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYkx9IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgbWFyZ2luOiAwIDNyZW07XHJcbiAgICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEudGFiTX0ge1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJMfSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgJiA+ICoge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBoMiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgICAmID4gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmR9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJpY2VpbmdXYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBtYXJnaW46IDAgNHJlbTtcclxuYDtcclxuY29uc3QgUHJpY2VpbmdncmlkV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmb250LXNpemU6IDIuOHJlbTtcclxuICAmID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDIwcHggLTEwcHggYmxhY2s7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICAmID4gaDIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIH1cclxuICAgICYgPiB1bCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICAgICYgPiBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICAgICYgPiBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgM3JlbTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICAgICAgfVxyXG4gICAgICAmID4gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFdlYmRlc2lnbiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICBjb25zdCByZGF0YSA9IGRhdGEuZmlsdGVyKChkdCwgaSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkdClcclxuICAgICAgcmV0dXJuIE51bWJlcihpZCkgPT09IGl9KTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGhlYWRjb250ZW50LFxyXG4gICAgICBIZWFkaW1nLFxyXG4gICAgICBhcHByb2NoY29udGVudCxcclxuICAgICAgYXBwcm9jaGRhdGEsXHJcbiAgICAgIHByaWNlaW5nY29udGVudCxcclxuICAgICAgcHJpY2VpbmdkYXRhLFxyXG4gICAgfSA9IHJkYXRhWzBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNYWluV2FwcGVyPlxyXG4gICAgICAgIDxIb21lV2FwcGVyIGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8cD57aGVhZGNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJWaWV3IHBsYW5zXCIgZ290bz17YC9zZXJ2aWVzLyR7aWR9LyNwcmljZWluZ2B9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxIZWFkaW1nIC8+XHJcbiAgICAgICAgPC9Ib21lV2FwcGVyPlxyXG4gICAgICAgIDxBcHByb2NoV2FwcGVyIGlkPVwiYXBwcm9jaGVcIj5cclxuICAgICAgICAgIDxTdWJ0aXRsZSB0aXRsZT1cIkFwcHJvY2hcIiBpbmZvPXthcHByb2NoY29udGVudH0gLz5cclxuXHJcbiAgICAgICAgICA8QXBwcm9jaGdyaWRXYXBwZXI+XHJcbiAgICAgICAgICAgIHthcHByb2NoZGF0YS5tYXAoKHsgbmFtZSwgU3ZnLCBjb250ZW50LCBnb3RvIH0sIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57YCR7bmFtZX1gfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2NvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNvbnRhY3QgdXNcIiBnb3RvPXtgL3NlcnZpZXMvJHtpZH0vJHtnb3RvfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U3ZnIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvQXBwcm9jaGdyaWRXYXBwZXI+XHJcbiAgICAgICAgPC9BcHByb2NoV2FwcGVyPlxyXG4gICAgICAgIDxQcmljZWluZ1dhcHBlciBpZD1cInByaWNlaW5nXCI+XHJcbiAgICAgICAgICA8U3VidGl0bGUgdGl0bGU9XCJQcmljZWluZ1wiIGluZm89e3ByaWNlaW5nY29udGVudH0gLz5cclxuICAgICAgICAgIDxQcmljZWluZ2dyaWRXYXBwZXI+XHJcbiAgICAgICAgICAgIHtwcmljZWluZ2RhdGEubWFwKCh7IGNvc3QsIGV4dHJmdXRyLCBwdGl0bGUsIGZ1dHJzb2ZmZXIgfSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57cHRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7ZnV0cnNvZmZlci5tYXAoKGluZm8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmZvfT57aW5mb308L2xpPjtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+JHtjb3N0fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2V4dHJmdXRyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvUHJpY2VpbmdncmlkV2FwcGVyPlxyXG4gICAgICAgIDwvUHJpY2VpbmdXYXBwZXI+XHJcbiAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgPC9NYWluV2FwcGVyPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PjtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFdlYmRlc2lnbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==