webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_navigation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/navigation.js */ "./lib/navigation.js");
/* harmony import */ var _lib_navigation_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_navigation_js__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/home/bjarki/nwerc2020/nwerc.is/Website/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






function MenuButton(props) {
  var _case_variable2, _case_variable4;

  var onClick = function onClick() {
    return props.parent.toggleMenu(props.id);
  };

  var isOpen = props.parent.isMenuOpen(props.id);
  return __jsx("button", {
    onClick: onClick,
    className: "block text-gray-800 hover_text-gray-600 focus_text-gray-600 focus_outline-none " + props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 1
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    className: "fill-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 1
    }
  }, !isOpen ? (_case_variable2 = props.style, _case_variable2 === 'hamburger' ? __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 1
    }
  }) : _case_variable2 === 'arrow' ? __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 1
    }
  }) : null) : (_case_variable4 = props.style, _case_variable4 === 'hamburger' ? __jsx("path", {
    d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 1
    }
  }) : _case_variable4 === 'arrow' ? __jsx("path", {
    d: "M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 1
    }
  }) : null)));
}

var Layout = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = _super.call(this, props);
    _this.state = {
      menuOpen: {},
      atTop: true
    };
    _this.onScroll = _this.onScroll.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.toggleMenu = _this.toggleMenu.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.clickOutside = _this.clickOutside.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "onScroll",
    value: function onScroll(e) {
      this.setState({
        atTop: window.pageYOffset == 0
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: "isMenuOpen",
    value: function isMenuOpen(id) {
      return this.state.menuOpen.hasOwnProperty(id) && this.state.menuOpen[id];
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu(id) {
      var menuOpen = this.state.menuOpen;
      menuOpen[id] = !this.isMenuOpen(id);
      this.setState({
        menuOpen: menuOpen
      });
    }
  }, {
    key: "clickOutside",
    value: function clickOutside() {
      var menuOpen = this.state.menuOpen;
      menuOpen['main'] = false;
      this.setState({
        menuOpen: menuOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var that = this;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 1
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 1
        }
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 1
        }
      }, "NWERC 2020"), __jsx("link", {
        rel: "icon",
        href: "/images/favicon_small.png",
        sizes: "32x32",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 1
        }
      }), __jsx("link", {
        rel: "icon",
        href: "/images/favicon_large.png",
        sizes: "192x192",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 1
        }
      }), __jsx("link", {
        rel: "apple-touch-icon-precomposed",
        href: "/images/favicon_large.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 1
        }
      }), __jsx("meta", {
        name: "msapplication-TileImage",
        content: "/images/favicon_large.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 1
        }
      })), __jsx("div", {
        className: "fixed top-0 left-0 right-0 z-10 bg-white transition duration-100 sm_duration-200 " + (!this.state.atTop || this.isMenuOpen('main') ? "bg-gray-100 shadow-menu" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 1
        }
      }, __jsx("div", {
        className: "container mx-auto sm_flex sm_justify-between sm_items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 1
        }
      }, __jsx("div", {
        className: "flex justify-between items-center h-24 mx-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 1
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 1
        }
      }, __jsx("a", {
        className: "focus_outline-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 1
        }
      }, __jsx("img", {
        src: "/images/nwerc-2020-logo.png",
        className: "h-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 1
        }
      }))), __jsx(MenuButton, {
        parent: that,
        id: "main",
        style: "hamburger",
        className: "h-8 w-8 sm_hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 1
        }
      })), __jsx("ul", {
        className: "border-t-2 sm_block sm_border-0 sm_flex sm_pr-6 " + (this.isMenuOpen('main') ? "" : "hidden"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 1
        }
      }, _lib_navigation_js__WEBPACK_IMPORTED_MODULE_10__["menu_items"].map(function (menu_item) {
        return __jsx("li", {
          className: "border-b-2 sm_border-b-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 1
          }
        }, __jsx("div", {
          className: "flex items-center bg-gray-200 sm_bg-transparent",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 1
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: menu_item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 1
          }
        }, __jsx("a", {
          className: "menu_item block flex-grow px-4 sm_px-2 md_px-4 py-2 text-gray-800 sm_transition sm_duration-100 sm_hover_bg-gray-700 sm_hover_text-white sm_rounded sm_relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 1
          }
        }, menu_item.title, menu_item.sub && menu_item.sub.length > 0 ? __jsx("div", {
          className: "absolute hidden",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 1
          }
        }, __jsx("ul", {
          className: "mt-3 -ml-5 w-48 rounded bg-white border-2 border-gray-100 shadow-lg overflow-hidden",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 1
          }
        }, menu_item.sub.map(function (sub_item, index) {
          return __jsx("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 1
            }
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: sub_item.url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 1
            }
          }, __jsx("a", {
            className: "block px-4 py-2 text-gray-700 hover_bg-gray-700 hover_text-white border-gray-200 " + (index != 0 ? "border-t-2" : ""),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 1
            }
          }, sub_item.title)));
        }))) : null)), menu_item.sub && menu_item.sub.length > 0 ? __jsx(MenuButton, {
          parent: that,
          id: menu_item.title,
          style: "arrow",
          className: "h-8 w-8 p-2 mr-4 sm_hidden",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 1
          }
        }) : null), __jsx("ul", {
          className: "sm_hidden " + (_this2.isMenuOpen(menu_item.title) ? "" : "hidden"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 1
          }
        }, (menu_item.sub || []).map(function (sub_item) {
          return __jsx("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 1
            }
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: sub_item.url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 1
            }
          }, __jsx("a", {
            className: "block bg-gray-300 pl-6 pr-4 py-2 text-gray-700",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 1
            }
          }, sub_item.title)));
        })));
      })))), __jsx("div", {
        onClick: this.clickOutside,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 1
        }
      }, __jsx("div", {
        className: "container mx-auto pb-10 pt-24 px-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 1
        }
      }, this.props.icpcBanner ? __jsx("div", {
        className: "mt-0 relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 1
        }
      }, __jsx("img", {
        src: "/images/icpc-regional-header-master-jb-hua_Europe-NWERC_art.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 1
        }
      }), __jsx("a", {
        style: {
          'top': '8%',
          'left': '75%',
          'height': '70%',
          'width': '12%'
        },
        href: "https://www.huawei.com/en/",
        target: "_blank",
        className: "block border-2 absolute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 1
        }
      })) : null, this.props.ruBanner ? __jsx("div", {
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.0), rgba(0,0,0,0.55)), url(/images/ru-background.jpg)"
        },
        className: "mt-2 py-64 relative bg-cover bg-center rounded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 1
        }
      }, __jsx("div", {
        className: "absolute bottom-0 px-6 py-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 1
        }
      }, __jsx("h1", {
        className: "text-gray-200 font-black text-xl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 1
        }
      }, "Northwestern Europe Regional Contest"), __jsx("h2", {
        className: "text-gray-100 font-medium text-md flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 1
        }
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "pt-1 h-5 w-5 fill-current",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 1
        }
      }, __jsx("path", {
        d: "M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 1
        }
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 1
        }
      }, "March 27-28, 2021")), __jsx("h3", {
        className: "text-gray-100 font-medium text-md flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 1
        }
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "pt-1 h-5 w-5 fill-current",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 1
        }
      }, __jsx("path", {
        d: "M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 1
        }
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 1
        }
      }, "Online contest")))) : null, this.props.icpcBanner && !this.props.ruBanner ? __jsx("div", {
        className: "mt-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 1
        }
      }) : null, __jsx("div", {
        className: "mt-2 sm_grid grid-cols-6 gap-4 content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 1
        }
      }, __jsx("div", {
        className: "col-span-4 px-1 " + (this.props.showSponsors ? "" : "col-start-2"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 1
        }
      }, this.props.children), this.props.showSponsors ? __jsx("div", {
        className: "col-span-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 1
        }
      }, __jsx("h2", {
        className: "mt-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 1
        }
      }, "Partners"), __jsx("p", {
        className: "max-w-xs mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 1
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "https://en.ru.is/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 1
        }
      }, __jsx("a", {
        className: "block mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 1
        }
      }, __jsx("img", {
        src: "/images/HR_logo_midjad_transparent.png",
        className: "mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 1
        }
      })))), this.props.icpcSponsors ? __jsx("p", {
        className: "max-w-xs mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 1
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "https://aws.amazon.com/education/awseducate/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 1
        }
      }, __jsx("a", {
        className: "block mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 1
        }
      }, __jsx("img", {
        src: "/images/sponsor-EdTech-icpc-gold-aws-educate-cropped.png",
        className: "mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 1
        }
      })))) : null, __jsx("p", {
        className: "max-w-xs mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 1
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "https://www.kattis.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 1
        }
      }, __jsx("a", {
        className: "block mt-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 1
        }
      }, __jsx("img", {
        src: "/images/kattis-logo.png",
        className: "mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 1
        }
      }))))) : null))));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Layout, "defaultProps", {
  icpcBanner: true,
  icpcSponsors: true,
  ruBanner: false,
  showSponsors: true
});



/***/ })

})
//# sourceMappingURL=index.js.202f9f5cf4c8eadc6c4b.hot-update.js.map