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
})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:space-around;& > div{font-size:2.5rem;padding:4rem;width:70%;height:50vh;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;& > h1{font-size:7rem;font-weight:500;}& > p{font-family:", ";}}& > svg{height:100%;width:100%;padding:4rem;}"], function (props) {
  return props.theme.fonts.second;
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
})(["& > div:nth-child(even){& > div{order:2;}}& > div{display:flex;align-items:center;& > svg{width:50%;}& > div{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;font-size:2.5rem;width:60%;margin:0 3rem;& > *{margin:2rem 0;}& > h2{font-weight:500;}& > p{font-size:2.5rem;font-family:", ";}}}"], function (props) {
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
})(["display:flex;justify-content:space-around;font-size:2.8rem;& > div{padding:3rem;border-radius:8px;box-shadow:1px 2px 20px -10px black;margin:2rem;& > h2{text-align:center;font-weight:500;font-size:5rem;}& > ul{font-size:2.5rem;list-style:none;font-family:", ";& > li{margin:2rem 0;}}& > div{display:flex;align-items:center;font-family:", ";& > h2{font-size:5rem;padding:0 3rem;border-right:1px solid;}& > p{font-size:1.7rem;margin:0 1rem;}}}"], function (props) {
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
    var title = rdata.title,
        headcontent = rdata.headcontent,
        Headimg = rdata.Headimg,
        approchcontent = rdata.approchcontent,
        approchdata = rdata.approchdata,
        priceingcontent = rdata.priceingcontent,
        priceingdata = rdata.priceingdata;
    console.log(rdata);
    return __jsx(MainWapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 7
      }
    }, __jsx(HomeWapper, {
      id: "home",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }, headcontent), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "View plans",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    })), __jsx(Headimg, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    })), __jsx(ApprochWapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }
    }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Approch",
      info: approchcontent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 11
      }
    }), __jsx(ApprochgridWapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
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
          lineNumber: 153,
          columnNumber: 17
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 19
        }
      }, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }
      }, "".concat(name)), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }
      }, content), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "Contact us",
        "goto": _goto,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }
      })), __jsx(Svg, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 19
        }
      }));
    }))), __jsx(PriceingWapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }
    }, __jsx(_components_subtitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Priceing",
      info: priceingcontent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }
    }), __jsx(PriceinggridWapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
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
          lineNumber: 170,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 19
        }
      }, ptitle), __jsx("ul", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 19
        }
      }, futrsoffer.map(function (info, i) {
        return __jsx("li", {
          key: info,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 30
          }
        }, info);
      })), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 19
        }
      }, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }
      }, "$", cost), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }
      }, extrfutr)));
    }))), __jsx(_components_contactus__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vydmllcy8uanMiXSwibmFtZXMiOlsiTWFpbldhcHBlciIsInN0eWxlZCIsImRpdiIsIkhvbWVXYXBwZXIiLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImZvbnRzIiwic2Vjb25kIiwiQXBwcm9jaFdhcHBlciIsIkFwcHJvY2hncmlkV2FwcGVyIiwiUHJpY2VpbmdXYXBwZXIiLCJQcmljZWluZ2dyaWRXYXBwZXIiLCJXZWJkZXNpZ24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicmRhdGEiLCJkYXRhIiwiZmlsdGVyIiwiZHQiLCJpIiwiTnVtYmVyIiwidGl0bGUiLCJoZWFkY29udGVudCIsIkhlYWRpbWciLCJhcHByb2NoY29udGVudCIsImFwcHJvY2hkYXRhIiwicHJpY2Vpbmdjb250ZW50IiwicHJpY2VpbmdkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm5hbWUiLCJTdmciLCJjb250ZW50IiwiZ290byIsImNvc3QiLCJleHRyZnV0ciIsInB0aXRsZSIsImZ1dHJzb2ZmZXIiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBaEI7S0FBTUYsVTtBQUtOLElBQU1HLFVBQVUsR0FBR0YseURBQU0sQ0FBQ0csT0FBVjtBQUFBO0FBQUE7QUFBQSw4VkFvQkssVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFaLENBQWtCQyxNQUE3QjtBQUFBLENBcEJMLENBQWhCO01BQU1MLFU7QUE4Qk4sSUFBTU0sYUFBYSxHQUFHUix5REFBTSxDQUFDRyxPQUFWO0FBQUE7QUFBQTtBQUFBLHNCQUFuQjtNQUFNSyxhO0FBR04sSUFBTUMsaUJBQWlCLEdBQUdULHlEQUFNLENB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QTtBQUFBO0FBQUE7QUFBQSxTQUNHQyxVQUFVLENBQUNSLEdBQVgsQ0FBZSxVQUFDUyxJQUFELEVBQU9wQixDQUFQLEVBQWE7QUFDM0IsZUFBTztBQUFJLGFBQUcsRUFBRW9CLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnQkEsSUFBaEIsQ0FBUDtBQUNELE9BRkEsQ0FESCxDQUZGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTUosSUFBTixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJQyxRQUFKLENBRkYsQ0FQRixDQURGO0FBY0QsS0FmQSxDQURILENBRkYsQ0EzQkYsRUFnREUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BaERGLENBREY7QUFvREQsR0FoRUQsTUFnRU87QUFDTCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDtBQUNGLENBdEVEOztHQUFNMUIsUztVQUNXRSxxRDs7O01BRFhGLFM7QUF1RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZpZXMvW2lkXS5iODhkMjc2OTc4NmE2Njk5OTNlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRhY3R1c1wiO1xyXG5pbXBvcnQgU3VidGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3VidGl0bGVcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGFcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBNYWluV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMzA7XHJcbmA7XHJcblxyXG5jb25zdCBIb21lV2FwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgJiA+IGgxIHtcclxuICAgICAgZm9udC1zaXplOiA3cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgJiA+IHAge1xyXG4gICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICB9XHJcbiAgfVxyXG4gICYgPiBzdmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFwcHJvY2hXYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBtYXJnaW46IDAgNHJlbTtcclxuYDtcclxuY29uc3QgQXBwcm9jaGdyaWRXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICYgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICYgPiBkaXYge1xyXG4gICAgICBvcmRlcjogMjtcclxuICAgIH1cclxuICB9XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICYgPiBzdmcge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIG1hcmdpbjogMCAzcmVtO1xyXG4gICAgICAmID4gKiB7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnNlY29uZH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZWluZ1dhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbjogMCA0cmVtO1xyXG5gO1xyXG5jb25zdCBQcmljZWluZ2dyaWRXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAyMHB4IC0xMHB4IGJsYWNrO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgJiA+IGgyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICB9XHJcbiAgICAmID4gdWwge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmR9O1xyXG4gICAgICAmID4gbGkge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmR9O1xyXG4gICAgICAmID4gaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBXZWJkZXNpZ24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGlmIChpZCkge1xyXG4gICAgY29uc3QgcmRhdGEgPSBkYXRhLmZpbHRlcigoZHQsIGkpID0+IE51bWJlcihpZCkgPT09IGkpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgaGVhZGNvbnRlbnQsXHJcbiAgICAgIEhlYWRpbWcsXHJcbiAgICAgIGFwcHJvY2hjb250ZW50LFxyXG4gICAgICBhcHByb2NoZGF0YSxcclxuICAgICAgcHJpY2Vpbmdjb250ZW50LFxyXG4gICAgICBwcmljZWluZ2RhdGEsXHJcbiAgICB9ID0gcmRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhyZGF0YSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWFpbldhcHBlcj5cclxuICAgICAgICA8SG9tZVdhcHBlciBpZD1cImhvbWVcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHA+e2hlYWRjb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVmlldyBwbGFuc1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxIZWFkaW1nIC8+XHJcbiAgICAgICAgPC9Ib21lV2FwcGVyPlxyXG4gICAgICAgIDxBcHByb2NoV2FwcGVyPlxyXG4gICAgICAgICAgPFN1YnRpdGxlIHRpdGxlPVwiQXBwcm9jaFwiIGluZm89e2FwcHJvY2hjb250ZW50fSAvPlxyXG5cclxuICAgICAgICAgIDxBcHByb2NoZ3JpZFdhcHBlcj5cclxuICAgICAgICAgICAge2FwcHJvY2hkYXRhLm1hcCgoeyBuYW1lLCBTdmcsIGNvbnRlbnQsIGdvdG8gfSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntgJHtuYW1lfWB9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57Y29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ29udGFjdCB1c1wiIGdvdG89e2dvdG99IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U3ZnIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvQXBwcm9jaGdyaWRXYXBwZXI+XHJcbiAgICAgICAgPC9BcHByb2NoV2FwcGVyPlxyXG4gICAgICAgIDxQcmljZWluZ1dhcHBlcj5cclxuICAgICAgICAgIDxTdWJ0aXRsZSB0aXRsZT1cIlByaWNlaW5nXCIgaW5mbz17cHJpY2Vpbmdjb250ZW50fSAvPlxyXG4gICAgICAgICAgPFByaWNlaW5nZ3JpZFdhcHBlcj5cclxuICAgICAgICAgICAge3ByaWNlaW5nZGF0YS5tYXAoKHsgY29zdCwgZXh0cmZ1dHIsIHB0aXRsZSwgZnV0cnNvZmZlciB9LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGgyPntwdGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmdXRyc29mZmVyLm1hcCgoaW5mbywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZm99PntpbmZvfTwvbGk+O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj4ke2Nvc3R9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57ZXh0cmZ1dHJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9QcmljZWluZ2dyaWRXYXBwZXI+XHJcbiAgICAgICAgPC9QcmljZWluZ1dhcHBlcj5cclxuICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICA8L01haW5XYXBwZXI+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgV2ViZGVzaWduO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9