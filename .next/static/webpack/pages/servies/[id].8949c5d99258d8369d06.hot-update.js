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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./pages/data/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\my brand website\\pages\\servies\\[id].js",
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
})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:space-around;& > div{font-size:2.5rem;padding:4rem;width:70%;height:50vh;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;@media ", "{padding:0;}@media ", "{width:90%;height:50%;}@media ", "{height:70%;}& > h1{font-size:10rem;font-weight:500;}& > p{font-family:", ";}}& > svg{height:80%;width:80%;padding:4rem;@media ", "{display:none;}}"], function (props) {
  return props.theme.media.tabM;
}, function (props) {
  return props.theme.media.mbL;
}, function (props) {
  return props.theme.media.mbS;
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
        lineNumber: 171,
        columnNumber: 7
      }
    }, __jsx(HomeWapper, {
      id: "home",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 13
      }
    }, title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }
    }, headcontent), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "View plans",
      "goto": "#priceing",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }
    })), __jsx(Headimg, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }
    })), __jsx(ApprochWapper, {
      id: "approche",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }
    }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Approch",
      info: approchcontent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }
    }), __jsx(ApprochgridWapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
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
          lineNumber: 186,
          columnNumber: 17
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 19
        }
      }, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }
      }, "".concat(name)), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }
      }, content), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "Contact us",
        "goto": "/servies/".concat(id, "/").concat(_goto),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }
      })), __jsx(Svg, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 19
        }
      }));
    }))), __jsx(PriceingWapper, {
      id: "priceing",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }
    }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Priceing",
      info: priceingcontent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }
    }), __jsx(PriceinggridWapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
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
          lineNumber: 203,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 19
        }
      }, ptitle), __jsx("ul", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 19
        }
      }, futrsoffer.map(function (info, i) {
        return __jsx("li", {
          key: info,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 30
          }
        }, info);
      })), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 19
        }
      }, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }
      }, "$", cost), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }
      }, extrfutr)));
    }))), __jsx(_components_contactus__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vydmllcy8uanMiXSwibmFtZXMiOlsiTWFpbldhcHBlciIsInN0eWxlZCIsImRpdiIsIkhvbWVXYXBwZXIiLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsIm1lZGlhIiwidGFiTSIsIm1iTCIsIm1iUyIsImZvbnRzIiwic2Vjb25kIiwiQXBwcm9jaFdhcHBlciIsIkFwcHJvY2hncmlkV2FwcGVyIiwiUHJpY2VpbmdXYXBwZXIiLCJQcmljZWluZ2dyaWRXYXBwZXIiLCJXZWJkZXNpZ24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicmRhdGEiLCJkYXRhIiwiZmlsdGVyIiwiZHQiLCJpIiwiTnVtYmVyIiwidGl0bGUiLCJoZWFkY29udGVudCIsIkhlYWRpbWciLCJhcHByb2NoY29udGVudCIsImFwcHJvY2hkYXRhIiwicHJpY2Vpbmdjb250ZW50IiwicHJpY2VpbmdkYXRhIiwibWFwIiwibmFtZSIsIlN2ZyIsImNvbnRlbnQiLCJnb3RvIiwiY29zdCIsImV4dHJmdXRyIiwicHRpdGxlIiwiZnV0cnNvZmZlciIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUFoQjtLQUFNRixVO0FBS04sSUFBTUcsVUFBVSxHQUFHRix5REFBTSxDQUFDRyxPQUFWO0FBQUE7QUFBQTtBQUFBLHdjQWVILFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsSUFBN0I7QUFBQSxDQWZHLEVBa0JILFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkUsR0FBN0I7QUFBQSxDQWxCRyxFQXNCSCxVQUFDSixLQUFEO0FBQUEsU0FBV0Es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T0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTUosSUFBTixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJQyxRQUFKLENBRkYsQ0FQRixDQURGO0FBY0QsS0FmQSxDQURILENBRkYsQ0EzQkYsRUFnREUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BaERGLENBREY7QUFvREQsR0FoRUQsTUFnRU87QUFDTCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDtBQUNGLENBdEVEOztHQUFNeEIsUztVQUNXRSxxRDs7O01BRFhGLFM7QUF1RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZpZXMvW2lkXS44OTQ5YzVkOTkyNThkODM2OWQwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRhY3R1c1wiO1xyXG5pbXBvcnQgU3VidGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3VidGl0bGVcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGFcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBNYWluV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMzA7XHJcbmA7XHJcblxyXG5jb25zdCBIb21lV2FwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS50YWJNfSB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iTH0ge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEubWJTfSB7XHJcbiAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgfVxyXG4gICAgJiA+IGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgICYgPiBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmR9O1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gc3ZnIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLnRhYk19IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBcHByb2NoV2FwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgbWFyZ2luOiAwIDRyZW07XHJcbmA7XHJcbmNvbnN0IEFwcHJvY2hncmlkV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICAmID4gZGl2Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDhyZW0gMDtcclxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWEudGFiTX0ge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYkx9IHtcclxuICAgICAgbWFyZ2luOiA1cmVtIDA7XHJcbiAgICB9XHJcbiAgICAmID4gc3ZnIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1lZGlhLm1iTH0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICBtYXJnaW46IDAgM3JlbTtcclxuICAgICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS50YWJNfSB7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYS5tYkx9IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgMDtcclxuICAgICAgfVxyXG4gICAgICAmID4gKiB7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZWluZ1dhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbjogMCA0cmVtO1xyXG5gO1xyXG5jb25zdCBQcmljZWluZ2dyaWRXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xyXG4gICYgPiBkaXYge1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMjBweCAtMTBweCBibGFjaztcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgICYgPiBoMiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgfVxyXG4gICAgJiA+IHVsIHtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICAgICAgJiA+IGxpIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuc2Vjb25kfTtcclxuICAgICAgJiA+IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgV2ViZGVzaWduID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBpZiAoaWQpIHtcclxuICAgIGNvbnN0IHJkYXRhID0gZGF0YS5maWx0ZXIoKGR0LCBpKSA9PiBOdW1iZXIoaWQpID09PSBpKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGhlYWRjb250ZW50LFxyXG4gICAgICBIZWFkaW1nLFxyXG4gICAgICBhcHByb2NoY29udGVudCxcclxuICAgICAgYXBwcm9jaGRhdGEsXHJcbiAgICAgIHByaWNlaW5nY29udGVudCxcclxuICAgICAgcHJpY2VpbmdkYXRhLFxyXG4gICAgfSA9IHJkYXRhWzBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNYWluV2FwcGVyPlxyXG4gICAgICAgIDxIb21lV2FwcGVyIGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8cD57aGVhZGNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJWaWV3IHBsYW5zXCIgZ290bz1cIiNwcmljZWluZ1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxIZWFkaW1nIC8+XHJcbiAgICAgICAgPC9Ib21lV2FwcGVyPlxyXG4gICAgICAgIDxBcHByb2NoV2FwcGVyIGlkPVwiYXBwcm9jaGVcIj5cclxuICAgICAgICAgIDxTdWJ0aXRsZSB0aXRsZT1cIkFwcHJvY2hcIiBpbmZvPXthcHByb2NoY29udGVudH0gLz5cclxuXHJcbiAgICAgICAgICA8QXBwcm9jaGdyaWRXYXBwZXI+XHJcbiAgICAgICAgICAgIHthcHByb2NoZGF0YS5tYXAoKHsgbmFtZSwgU3ZnLCBjb250ZW50LCBnb3RvIH0sIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57YCR7bmFtZX1gfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2NvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNvbnRhY3QgdXNcIiBnb3RvPXtgL3NlcnZpZXMvJHtpZH0vJHtnb3RvfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U3ZnIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvQXBwcm9jaGdyaWRXYXBwZXI+XHJcbiAgICAgICAgPC9BcHByb2NoV2FwcGVyPlxyXG4gICAgICAgIDxQcmljZWluZ1dhcHBlciBpZD1cInByaWNlaW5nXCI+XHJcbiAgICAgICAgICA8U3VidGl0bGUgdGl0bGU9XCJQcmljZWluZ1wiIGluZm89e3ByaWNlaW5nY29udGVudH0gLz5cclxuICAgICAgICAgIDxQcmljZWluZ2dyaWRXYXBwZXI+XHJcbiAgICAgICAgICAgIHtwcmljZWluZ2RhdGEubWFwKCh7IGNvc3QsIGV4dHJmdXRyLCBwdGl0bGUsIGZ1dHJzb2ZmZXIgfSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57cHRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7ZnV0cnNvZmZlci5tYXAoKGluZm8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmZvfT57aW5mb308L2xpPjtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+JHtjb3N0fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2V4dHJmdXRyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvUHJpY2VpbmdncmlkV2FwcGVyPlxyXG4gICAgICAgIDwvUHJpY2VpbmdXYXBwZXI+XHJcbiAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgPC9NYWluV2FwcGVyPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PjtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFdlYmRlc2lnbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==