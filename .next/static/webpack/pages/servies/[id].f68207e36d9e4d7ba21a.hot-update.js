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
      console.log();
      return dt.title === id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vydmllcy8uanMiXSwibmFtZXMiOlsiTWFpbldhcHBlciIsInN0eWxlZCIsImRpdiIsIkhvbWVXYXBwZXIiLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsIm1lZGlhIiwidGFiTSIsIm1iTCIsIm1iUyIsIm1iTSIsImZvbnRzIiwic2Vjb25kIiwiQXBwcm9jaFdhcHBlciIsIkFwcHJvY2hncmlkV2FwcGVyIiwiUHJpY2VpbmdXYXBwZXIiLCJQcmljZWluZ2dyaWRXYXBwZXIiLCJXZWJkZXNpZ24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicmRhdGEiLCJkYXRhIiwiZmlsdGVyIiwiZHQiLCJpIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiaGVhZGNvbnRlbnQiLCJIZWFkaW1nIiwiYXBwcm9jaGNvbnRlbnQiLCJhcHByb2NoZGF0YSIsInByaWNlaW5nY29udGVudCIsInByaWNlaW5nZGF0YSIsIm1hcCIsIm5hbWUiLCJTdmciLCJjb250ZW50IiwiZ290byIsImNvc3QiLCJleHRyZnV0ciIsInB0aXRsZSIsImZ1dHJzb2ZmZXIiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBaEI7S0FBTUYsVTtBQUtOLElBQU1HLFVBQVUsR0FBR0YseURBQU0sQ0FBQ0csT0FBVjtBQUFBO0FBQUE7QUFBQSxtZUFlSCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JDLElBQTdCO0FBQUEsQ0FmRyxFQWtCSCxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JFLEdBQTdCO0FBQUEsQ0FsQkcsRUFzQkgsVUFBQ0osS0FB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LEVBQU9uQixDQUFQLEVBQWE7QUFDM0IsZUFBTztBQUFJLGFBQUcsRUFBRW1CLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnQkEsSUFBaEIsQ0FBUDtBQUNELE9BRkEsQ0FESCxDQUZGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTUosSUFBTixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJQyxRQUFKLENBRkYsQ0FQRixDQURGO0FBY0QsS0FmQSxDQURILENBRkYsQ0EzQkYsRUFnREUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BaERGLENBREY7QUFvREQsR0FsRUQsTUFrRU87QUFDTCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDtBQUNGLENBeEVEOztHQUFNekIsUztVQUNXRSxxRDs7O01BRFhGLFM7QUF5RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZpZXMvW2lkXS5mNjgyMDdlMzZkOWU0ZDdiYTIxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRhY3R1c1wiO1xyXG5pbXBvcnQgU3VidGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3VidGl0bGVcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uLy4uL2RhdGFcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBNYWluV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMzA7XHJcbmA7XHJcblxyXG5jb25zdCBIb21lV2FwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLnRhYk19IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJMfSB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYlN9IHtcclxuICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB9XHJcbiAgICAmID4gaDEge1xyXG4gICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iTX0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiA+IHAge1xyXG4gICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICB9XHJcbiAgfVxyXG4gICYgPiBzdmcge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogNHJlbTtcclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEudGFiTX0ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFwcHJvY2hXYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBtYXJnaW46IDAgNHJlbTtcclxuYDtcclxuY29uc3QgQXBwcm9jaGdyaWRXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICYgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICYgPiBkaXYge1xyXG4gICAgICBvcmRlcjogMjtcclxuICAgIH1cclxuICB9XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogOHJlbSAwO1xyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS50YWJNfSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iTH0ge1xyXG4gICAgICBtYXJnaW46IDVyZW0gMDtcclxuICAgIH1cclxuICAgICYgPiBzdmcge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJMfSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIG1hcmdpbjogMCAzcmVtO1xyXG4gICAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLnRhYk19IHtcclxuICAgICAgICBvcmRlcjogMjtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iTH0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCAwO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiAqIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgfVxyXG4gICAgICAmID4gaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByaWNlaW5nV2FwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgbWFyZ2luOiAwIDRyZW07XHJcbmA7XHJcbmNvbnN0IFByaWNlaW5nZ3JpZFdhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAyMHB4IC0xMHB4IGJsYWNrO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgJiA+IGgyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICB9XHJcbiAgICAmID4gdWwge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmR9O1xyXG4gICAgICAmID4gbGkge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmR9O1xyXG4gICAgICAmID4gaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBXZWJkZXNpZ24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGlmIChpZCkge1xyXG4gICAgY29uc3QgcmRhdGEgPSBkYXRhLmZpbHRlcigoZHQsIGkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICByZXR1cm4gZHQudGl0bGUgPT09IGlkfSk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBoZWFkY29udGVudCxcclxuICAgICAgSGVhZGltZyxcclxuICAgICAgYXBwcm9jaGNvbnRlbnQsXHJcbiAgICAgIGFwcHJvY2hkYXRhLFxyXG4gICAgICBwcmljZWluZ2NvbnRlbnQsXHJcbiAgICAgIHByaWNlaW5nZGF0YSxcclxuICAgIH0gPSByZGF0YVswXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWFpbldhcHBlcj5cclxuICAgICAgICA8SG9tZVdhcHBlciBpZD1cImhvbWVcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHA+e2hlYWRjb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVmlldyBwbGFuc1wiIGdvdG89e2Avc2Vydmllcy8ke2lkfS8jcHJpY2VpbmdgfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8SGVhZGltZyAvPlxyXG4gICAgICAgIDwvSG9tZVdhcHBlcj5cclxuICAgICAgICA8QXBwcm9jaFdhcHBlciBpZD1cImFwcHJvY2hlXCI+XHJcbiAgICAgICAgICA8U3VidGl0bGUgdGl0bGU9XCJBcHByb2NoXCIgaW5mbz17YXBwcm9jaGNvbnRlbnR9IC8+XHJcblxyXG4gICAgICAgICAgPEFwcHJvY2hncmlkV2FwcGVyPlxyXG4gICAgICAgICAgICB7YXBwcm9jaGRhdGEubWFwKCh7IG5hbWUsIFN2ZywgY29udGVudCwgZ290byB9LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2Ake25hbWV9YH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntjb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDb250YWN0IHVzXCIgZ290bz17YC9zZXJ2aWVzLyR7aWR9LyR7Z290b31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPFN2ZyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0FwcHJvY2hncmlkV2FwcGVyPlxyXG4gICAgICAgIDwvQXBwcm9jaFdhcHBlcj5cclxuICAgICAgICA8UHJpY2VpbmdXYXBwZXIgaWQ9XCJwcmljZWluZ1wiPlxyXG4gICAgICAgICAgPFN1YnRpdGxlIHRpdGxlPVwiUHJpY2VpbmdcIiBpbmZvPXtwcmljZWluZ2NvbnRlbnR9IC8+XHJcbiAgICAgICAgICA8UHJpY2VpbmdncmlkV2FwcGVyPlxyXG4gICAgICAgICAgICB7cHJpY2VpbmdkYXRhLm1hcCgoeyBjb3N0LCBleHRyZnV0ciwgcHRpdGxlLCBmdXRyc29mZmVyIH0sIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8aDI+e3B0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2Z1dHJzb2ZmZXIubWFwKChpbmZvLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5mb30+e2luZm99PC9saT47XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPiR7Y29zdH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntleHRyZnV0cn08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1ByaWNlaW5nZ3JpZFdhcHBlcj5cclxuICAgICAgICA8L1ByaWNlaW5nV2FwcGVyPlxyXG4gICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgIDwvTWFpbldhcHBlcj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBXZWJkZXNpZ247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=