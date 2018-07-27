"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  button:focus {\n    outline: none !important;\n  }\n\n  nav {\n    background: ", ";\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    height: 90px;\n    position: fixed;\n    width: 100%;\n    z-index: 99;\n  }\n\n  body.static-nav nav {\n    left: auto;\n    position: static;\n    top: auto;\n  }\n\n  /* NAVIGATION STATES */\n\n  nav,\n  nav.open {\n    transition: height 0.25s, background 0.25s ease-in-out;\n  }\n\n  nav.open,\n  nav.scrolling:hover,\n  nav.searching,\n  body.opaque-nav nav,\n  nav.opaque {\n    background: ", ";\n  }\n\n  nav.open {\n    height: 175px;\n  }\n  nav.open .igation {\n    overflow: visible;\n  }\n\n  nav.scrolling {\n    background: rgba(0, 74, 124, 0.98);\n  }\n\n  nav ul {\n    list-style: none;\n  }\n\n  @media screen and (min-width: 1025px) {\n    nav:hover {\n      background: ", ";\n    }\n  }\n\n  /* NAVIGATION ITEMS */\n\n  nav .igation {\n    align-items: center;\n    display: flex;\n    flex-flow: row nowrap;\n    font-weight: 400;\n    height: 90px;\n    justify-content: flex-start;\n    margin: 0;\n    overflow: hidden;\n    padding: 0 40px;\n  }\n\n  nav .igation > li:nth-of-type(1) {\n    order: 1;\n  } /* BLOCKCHAIN LOGO */\n  nav .igation > li:nth-of-type(2) {\n    order: 2;\n  } /* WALLET */\n  nav .igation > li:nth-of-type(3) {\n    order: 3;\n  } /* DATA */\n  nav .igation > li:nth-of-type(4) {\n    order: 4;\n  } /* API */\n  nav .igation > li:nth-of-type(5) {\n    order: 5;\n  } /* ABOUT */\n  nav .igation > li:nth-of-type(6) {\n    order: 6;\n  } /* FLEXIBLE SPACE */\n  nav .igation > li:nth-of-type(7) {\n    order: 7;\n  } /* SEARCH BAR */\n  nav .igation > li:nth-of-type(8) {\n    order: 8;\n  } /* GET FREE WALLET BUTTON */\n\n  nav .igation > li:first-of-type {\n    /* BLOCKCHAIN LOGO */\n    margin-right: 30px;\n    opacity: 1 !important;\n  }\n\n  nav .igation > li:last-of-type {\n    margin-left: 25px;\n  } /* GET FREE WALLET BUTTON */\n\n  /* NAVIGATION ITEM LINKS */\n\n  nav .igation > li > a,\n  nav .igation > li > a:hover,\n  nav .igation > li > a:visited {\n    color: ", ";\n    position: relative;\n    text-decoration: none;\n    text-transform: uppercase;\n    z-index: 1;\n  }\n\n  /* NAVIGATION ITEMS WITH CHILDREN */\n\n  nav .igation > li.with-children {\n    border-radius: 2px 2px 0 0 !important;\n    padding: 0 40px 0 20px;\n    position: relative;\n  }\n\n  nav .igation > li.with-children:hover ul {\n    background: rgba(255, 255, 255, 0.08);\n    transition: background 0.4s ease-in;\n  }\n\n  nav .igation > li.with-children > a {\n    font-size: 13px;\n  }\n\n  /* NAVIGATION ITEMS WITH CHILDREN STATES */\n\n  nav .igation > li.with-children:hover ul li {\n    height: 18px;\n    transition: height 0.25s ease-in;\n  }\n\n  nav .igation > li.with-children:hover ul li a {\n    opacity: 0.6;\n    transition: opacity 0.2s ease-in;\n    transition-delay: 0.1s;\n  }\n\n  /* NAVIGATION ITEMS WITH CHILDREN LIST */\n\n  nav .igation ul {\n    background: rgba(255, 255, 255, 0);\n    height: 150px;\n    left: 0;\n    padding: 0;\n    position: absolute;\n    top: -10px;\n    min-width: 90px;\n    padding-top: 40px;\n  }\n\n  nav .igation ul li {\n    margin: 6px 0;\n    height: 0;\n    transition: height 0.25s ease-out;\n  }\n\n  nav .igation ul li:first-of-type {\n    margin-top: 0;\n  }\n\n  /* NAVIGATION ITEM CHILDREN LINKS */\n\n  nav .igation ul li a {\n    color: ", ";\n    display: block;\n    font-size: 12px;\n    font-weight: 300;\n    opacity: 0;\n    padding-left: 20px;\n  }\n\n  /* NAVIGATION ITEM CHILDREN LINK STATES */\n\n  nav .igation ul li:hover a,\n  nav .igation ul li:hover a:active,\n  nav .igation ul li:hover a:visited {\n    text-decoration: none;\n  }\n\n  nav .igation ul li:hover a:focus {\n    outline: none !important;\n  }\n\n  nav .igation ul li:hover a {\n    opacity: 1 !important;\n    transition: opacity 0.2s ease-in;\n  }\n\n  /* NAVIGATION FLEXIBLE SPACER */\n\n  nav .igation > li.flex-space {\n    flex-grow: 1;\n  }\n\n  /* BLOCKCHAIN LOGO */\n\n  .bc-logo {\n    display: block;\n  }\n\n  .bc-logo img {\n    height: 21px;\n    width: 170px;\n  }\n\n  /* SEARCH BAR */\n\n  .search-bar {\n    background: rgba(255, 255, 255, 0.05) url(", ") no-repeat 10px\n      center;\n    background-size: 14px;\n    border: 1px solid ", ";\n    border-radius: 16px;\n    color: ", ";\n    font-size: 14px;\n    font-weight: 300;\n    height: 32px;\n    line-height: 14px;\n    padding: 0 10px 2px 32px;\n    position: relative;\n    width: 260px;\n\n    &:focus {\n      background: ", "\n        url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.38 42.38'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23979797;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 2%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cg id='surface1'%3E%3Cpath className='cls-1' d='M19.18.13a17,17,0,1,0,6.92,31.21L36.25,41.5a3,3,0,0,0,4.25,0h0a3,3,0,0,0,0-4.25l-10-10a16.88,16.88,0,0,0,3.37-12.36A17,17,0,0,0,19.18.13ZM17,4A13,13,0,1,1,4,17,13,13,0,0,1,17,4Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")\n        no-repeat 10px center;\n      background-size: 14px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      color: ", ";\n      outline: none;\n      padding: 0 10px 0 32px;\n    }\n\n    &::placeholder {\n      /* Chrome 57, Firefox 51, Opera 44, Safari 10.1 */\n      color: ", ";\n      font-size: 11px;\n      font-weight: 300;\n      line-height: 30px;\n      text-transform: uppercase;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n\n    &::-webkit-input-placeholder {\n      /* Safari */\n      line-height: 20px;\n    }\n\n    &::-moz-placeholder {\n      /* Firefox < 51 */\n      line-height: 30px;\n      opacity: 1;\n    }\n\n    &:-ms-input-placeholder {\n      /* IE 10, 11 */\n      color: ", ";\n      font-size: 11px;\n      font-weight: 300;\n      line-height: normal;\n      text-transform: uppercase;\n    }\n\n    &::-ms-input-placeholder {\n      /* MS EDGE */\n      color: ", ";\n      font-size: 11px;\n      font-weight: 300;\n      line-height: normal;\n      text-transform: uppercase;\n    }\n  }\n\n  /* GET FREE WALLET BUTTON */\n\n  .wallet-button {\n    background: ", ";\n    border-radius: 16px !important;\n    display: block;\n    font-size: 12px;\n    height: 32px;\n    letter-spacing: normal;\n    line-height: 12px;\n    padding: 11px 20px !important;\n    text-align: center;\n    text-transform: uppercase;\n    white-space: nowrap;\n  }\n\n  .menu-button,\n  .search-button,\n  nav.open .search-button {\n    display: none;\n  }\n\n  /* IN-BETWEEN OPTIMIZATIONS */\n\n  @media screen and (min-width: 1024px) and (max-width: 1155px) {\n    nav .igation > li.with-children {\n      padding-right: 20px;\n    }\n  }\n\n  /* MOBILE NAVIGATION */\n\n  @media screen and (max-width: 1024px) {\n    nav,\n    nav.searching {\n      transition: height 450ms, background 450ms ease-in-out;\n    }\n\n    nav.open {\n      transition: height 450ms;\n      height: 100%;\n    }\n\n    nav.open .igation {\n      height: auto;\n    }\n\n    nav.searching,\n    nav.searching .igation {\n      height: 126px;\n    }\n\n    nav .igation {\n      flex-flow: row wrap;\n      height: 60px;\n      padding: 35px 0 0 0;\n    }\n\n    nav .igation > li:nth-of-type(1) {\n      order: 1;\n    } /* BLOCKCHAIN LOGO */\n    nav .igation > li:nth-of-type(2) {\n      order: 3;\n    } /* WALLET */\n    nav .igation > li:nth-of-type(3) {\n      order: 4;\n    } /* DATA */\n    nav .igation > li:nth-of-type(4) {\n      order: 5;\n    } /* API */\n    nav .igation > li:nth-of-type(5) {\n      order: 6;\n    } /* ABOUT */\n    nav .igation > li:nth-of-type(6) {\n      order: 7;\n    } /* FLEXIBLE SPACE */\n    nav .igation > li:nth-of-type(7) {\n      order: 2;\n    } /* SEARCH BAR */\n    nav .igation > li:nth-of-type(8) {\n      order: 8;\n    } /* GET FREE WALLET BUTTON */\n\n    nav .igation > li:first-of-type {\n      width: 100%;\n    }\n\n    nav .igation > li:nth-of-type(7) {\n      width: 100%;\n    }\n\n    nav.open .igation > li:first-of-type {\n      margin-bottom: 30px;\n    }\n    nav.open .igation > li:nth-of-type(7) {\n      display: none;\n    }\n\n    nav .igation > li ul {\n      background: none !important;\n    }\n\n    nav .igation > li.with-children {\n      margin: 0;\n      min-height: 170px;\n      opacity: 0;\n      padding-left: 40px;\n      width: 50%;\n    }\n\n    nav.open .igation > li.with-children {\n      opacity: 1;\n      transition: opacity 400ms ease-in;\n      transition-delay: 100ms;\n    }\n\n    nav.open .igation > li.with-children > a:after {\n      color: ", ";\n      font-family: 'icomoon';\n      font-size: 14px;\n      font-style: normal;\n      font-variant: normal;\n      font-weight: normal;\n      padding-left: 8px;\n      speak: none;\n      text-transform: none;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n\n    nav .igation ul {\n      left: 40px;\n      top: 0;\n    }\n\n    nav .igation ul li {\n      margin: 16px 0;\n      height: 18px;\n    }\n\n    nav .igation > li.flex-space {\n      display: none;\n    }\n\n    nav .igation > li.with-children > a {\n      font-size: 20px;\n    }\n\n    nav .igation ul li a {\n      font-size: 16px;\n      opacity: 0.6;\n      padding-left: 0;\n    }\n\n    nav .igation > li:last-of-type {\n      /* WALLET BUTTON */\n      bottom: 0;\n      margin: 0;\n      opacity: 0;\n      padding: 10px;\n      position: absolute;\n      transition: opacity 500ms ease-in;\n      visibility: collapse;\n      width: 100%;\n    }\n\n    nav.open .igation > li:last-of-type {\n      /* WALLET BUTTON */\n      opacity: 1;\n      visibility: visible;\n    }\n\n    .bc-logo {\n      float: left;\n      left: 30px;\n    }\n\n    /* ANIMATED MENU BUTTON :) */\n\n    .menu-button {\n      appearance: none;\n      background: none;\n      border: none;\n      display: block;\n      float: right;\n      height: 14px;\n      margin: 3px 0 0 0;\n      padding: 0;\n      position: relative;\n      transform: rotate(\n        0deg\n      ); /* rotate compressed hamburger back to its origin (CCW) */\n      transition: transform 500ms ease; /* duration -> 500ms (should be equal to duration of menu animation) */\n      width: 22px;\n    }\n\n    .menu-button.is-active {\n      /* rotate compressed hamburger 180\xB0 CW after 100ms */\n      transform: rotate(180deg);\n      transition-delay: 100ms;\n    }\n\n    .menu-button span {\n      background: ", ";\n      border-radius: 2px !important;\n      display: block;\n      height: 2px;\n      left: 0px;\n      position: absolute;\n      right: 0px;\n      top: 6px;\n    }\n\n    .menu-button span::before,\n    .menu-button span::after {\n      background-color: ", ";\n      border-radius: 2px !important;\n      content: '';\n      display: block;\n      height: 2px;\n      left: 0;\n      position: absolute;\n      width: 100%;\n    }\n\n    .menu-button span::before {\n      top: -6px;\n    }\n    .menu-button span::after {\n      bottom: -6px;\n    }\n\n    .menu-button span::before {\n      transition-property: top, transform;\n    }\n    .menu-button span::after {\n      transition-property: bottom, transform;\n    }\n\n    .menu-button span::before,\n    .menu-button span::after {\n      transition-duration: 200ms, 250ms;\n      transition-delay: 250ms, 0s; /* wait for origin rotation to complete before decompressing hamburger */\n    }\n\n    .menu-button.is-active span {\n      background: none;\n    }\n\n    .menu-button.is-active span::before {\n      top: 0;\n      transform: rotate(45deg);\n    }\n\n    .menu-button.is-active span::after {\n      bottom: 0;\n      transform: rotate(-45deg);\n    }\n\n    .menu-button.is-active span::before,\n    .menu-button.is-active span::after {\n      transition-delay: 0s, 250ms; /* delay before hamburger decompresses */\n    }\n\n    .search-button {\n      background: none;\n      border: none;\n      display: block;\n      float: right;\n      height: 20px;\n      margin-right: 25px;\n      position: relative;\n      width: 20px;\n\n      &::after {\n        color: ", ";\n        font-family: 'icomoon';\n        font-size: 17px;\n        font-style: normal;\n        font-variant: normal;\n        font-weight: normal;\n        left: 2px;\n        position: absolute;\n        speak: none;\n        text-transform: none;\n        top: 0px;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n    }\n\n    .wallet-button {\n      border-radius: 2px !important;\n      display: block;\n      font-size: 16px !important;\n      height: 48px;\n      padding-top: 17px !important;\n    }\n\n    .search-form {\n      padding: 20px 10px 0 10px;\n      width: 100%;\n    }\n\n    .search-bar,\n    .search-bar:focus {\n      background: ", "\n        url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.38 42.38'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23979797;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 2%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cg id='surface1'%3E%3Cpath className='cls-1' d='M19.18.13a17,17,0,1,0,6.92,31.21L36.25,41.5a3,3,0,0,0,4.25,0h0a3,3,0,0,0,0-4.25l-10-10a16.88,16.88,0,0,0,3.37-12.36A17,17,0,0,0,19.18.13ZM17,4A13,13,0,1,1,4,17,13,13,0,0,1,17,4Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")\n        no-repeat 12px center;\n      background-size: 16px;\n      border: none;\n      border-radius: 20px;\n      color: ", ";\n      height: 40px;\n      line-height: 14px;\n      opacity: 0;\n      padding: 0 10px 0 36px;\n      width: inherit;\n\n      &::placeholder {\n        color: ", ";\n        font-size: 14px;\n        line-height: 18px;\n      }\n\n      &::-moz-placeholder {\n        line-height: 40px;\n      }\n\n      &::-webkit-input-placeholder {\n        color: ", ";\n        font-size: 14px;\n        line-height: 18px;\n      }\n    }\n\n    nav.searching .search-bar {\n      opacity: 1;\n      transition: opacity 1s ease;\n    }\n  }\n\n  /* DEVICE OPTIMIZATIONS */\n\n  @media screen and (height: 480px) and (orientation: portrait) {\n    /* iPhone 4s PORTRAIT */\n    nav .igation > li.with-children {\n      margin-top: 0;\n      padding: 0 0 0 30px;\n    }\n\n    nav .igation > li.with-children > a,\n    nav .igation ul li a {\n      font-size: 14px;\n    }\n\n    nav.open .igation > li:first-of-type {\n      margin-bottom: 25px;\n    }\n\n    nav .igation ul {\n      left: 30px;\n      padding-top: 30px;\n    }\n  }\n\n  @media screen and (width: 480px) and (orientation: landscape) {\n    /* iPhone 4s LANDSCAPE */\n    nav .igation > li.with-children > a {\n      font-size: 14px;\n    }\n  }\n\n  @media screen and (max-height: 667px) and (max-width: 1024px) and (orientation: landscape) {\n    /* iPhone 4, 5, 6 LANDSCAPE */\n    nav .igation > li.with-children {\n      padding: 0 0 0 30px;\n      width: 25%;\n    }\n    nav .igation ul {\n      left: 30px;\n      padding-top: 30px;\n    }\n  }\n\n  @media screen and (max-height: 568px) and (max-width: 1024px) {\n    nav .igation > li.with-children > a {\n      font-size: 16px;\n    }\n    nav .igation ul li {\n      margin: 10px 0;\n    }\n  }\n\n  @media screen and (height: 568px) and (orientation: portrait) {\n    /* iPhone SE PORTRAIT */\n    nav .igation > li.with-children {\n      padding: 0 0 0 30px;\n    }\n    nav .igation ul {\n      left: 30px;\n      padding-top: 30px;\n    }\n  }\n\n  @media screen and (min-width: 667px) and (max-width: 1024px) {\n    /* iPhone 7, 7+ LANDSCAPE, iPad PORTRAIT, iPad LANDSCAPE */\n    nav .igation > li.with-children {\n      width: 25%;\n    }\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1024px) {\n    nav.open {\n      height: 350px;\n    }\n  }\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* babel-plugin-inline-import '../../../Atoms/Images/img/brandname.svg' */
var Logo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzOTcuNCA0My43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzOTcuNCA0My43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTEuNywyOS43Yy0yLjEsMi4yLTUuMSwzLjYtOC4zLDMuNmMtNi4zLDAtMTEuNS01LjItMTEuNS0xMS41czUuMi0xMS41LDExLjUtMTEuNWMyLjksMCw1LjYsMS4xLDcuNiwyLjkKCWMwLjYsMC41LDEuNywxLjYsMS43LDEuNmw3LTcuNWMtNC00LjUtOS44LTcuMy0xNi4zLTcuM2MtMTIsMC0yMS44LDkuNy0yMS44LDIxLjhjMCwxMiw5LjcsMjEuOCwyMS44LDIxLjhjNi44LDAsMTIuOS0zLDE2LjgtOAoJbC03LTcuNUMxNTMuMSwyOC4yLDE1Mi4yLDI5LjIsMTUxLjcsMjkuN3oiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzNC41LDI5LjdjLTIuMSwyLjItNS4xLDMuNi04LjMsMy42Yy02LjMsMC0xMS41LTUuMi0xMS41LTExLjVzNS4yLTExLjUsMTEuNS0xMS41YzIuOSwwLDUuNiwxLjEsNy42LDIuOQoJYzAuNiwwLjUsMS43LDEuNiwxLjcsMS42bDctNy41Yy00LTQuNS05LjgtNy4zLTE2LjMtNy4zYy0xMiwwLTIxLjgsOS43LTIxLjgsMjEuOGMwLDEyLDkuNywyMS44LDIxLjgsMjEuOGM2LjgsMCwxMi45LTMsMTYuOC04CglsLTctNy41QzIzNiwyOC4yLDIzNSwyOS4yLDIzNC41LDI5Ljd6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOS41LDIwLjljMy43LTEuNiw2LjQtNC41LDYuNC05LjN2LTAuMWMwLTIuOS0xLTUuMS0yLjctNi44QzMwLjcsMi4zLDI3LDAuOSwyMS44LDAuOUgwdjQxLjhoMjEuOQoJYzEwLDAsMTUuOC00LjQsMTUuOC0xMS41di0wLjFDMzcuNywyNS41LDM0LjUsMjIuNiwyOS41LDIwLjl6IE0xMS43LDEwLjJoNy41YzMuNSwwLDUuMiwxLjQsNS4yLDMuNnYwLjFjMCwyLjUtMS45LDMuNi01LjUsMy42CgloLTcuM0wxMS43LDEwLjJMMTEuNywxMC4yeiBNMjYuMiwyOS42YzAsMi41LTIsMy44LTUuNiwzLjhoLTl2LTcuN2g4LjhDMjQuMywyNS43LDI2LjEsMjcuMywyNi4yLDI5LjZMMjYuMiwyOS42TDI2LjIsMjkuNnoiLz4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1NC42LDAuOSA0Mi45LDAuOSA0Mi45LDQyLjcgNzMuNCw0Mi43IDczLjQsMzIuNyA1NC42LDMyLjcgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjczLjMsMTYuOCAyNTguNCwxNi44IDI1OC40LDEuMSAyNDYuNywxLjEgMjQ2LjcsNDMgMjU4LjQsNDMgMjU4LjQsMjcuMSAyNzMuMywyNy4xIDI3My4zLDQzIAoJMjg0LjksNDMgMjg0LjksMS4yIDI3My4zLDEuMiAiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTMxNy43LDAuOGgtMTEuMkwyODguNyw0M2gxMi4ybDMtNy41SDMyMGwzLDcuNWgxMi40TDMxNy43LDAuOHogTTMwNy4yLDI2LjVsNC43LTExLjlsNC43LDExLjkKCUMzMTYuNiwyNi41LDMwNy4yLDI2LjUsMzA3LjIsMjYuNXoiLz4KPHJlY3QgeD0iMzM5LjEiIHk9IjEuMiIgY2xhc3M9InN0MCIgd2lkdGg9IjExLjYiIGhlaWdodD0iNDEuOSIvPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM4NS44LDEuMiAzODUuOCwyMy4zIDM2OC41LDEuMiAzNTcuNSwxLjIgMzU3LjUsNDMgMzY5LjIsNDMgMzY5LjIsMjAuMSAzODcuMSw0MyAzOTcuNCw0MyAzOTcuNCwxLjIgCgkiLz4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMDUuNCwxIDE5MS42LDEgMTkxLjYsMSAxOTEuNiwxIDE3Ny4yLDE4IDE3Ny4yLDEgMTY1LjYsMSAxNjUuNiw0Mi45IDE3Ny4yLDQyLjkgMTc3LjIsMzIuMSAKCTE4MS41LDI3LjQgMTkzLjIsNDIuOSAxOTMuMiw0Mi45IDE5My4yLDQyLjkgMjA3LDQyLjkgMTg5LjEsMTkgIi8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05Ni42LDBjLTEyLDAtMjEuOCw5LjctMjEuOCwyMS44YzAsMTIsOS43LDIxLjgsMjEuOCwyMS44YzEyLDAsMjEuOC05LjcsMjEuOC0yMS44QzExOC40LDkuOCwxMDguNywwLDk2LjYsMHoKCSBNOTYuNiwzMy4zYy02LjMsMC0xMS41LTUuMi0xMS41LTExLjVzNS4yLTExLjUsMTEuNS0xMS41YzYuMywwLDExLjUsNS4yLDExLjUsMTEuNVMxMDIuOSwzMy4zLDk2LjYsMzMuM3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";

/* babel-plugin-inline-import '../../../Atoms/Images/img/search.svg' */
var SearchIcon = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5pY29uLWxpYnJhcnktZmlsbGVkPC90aXRsZT48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE4LjU3LjEzQTE2LDE2LDAsMSwwLDI1LjEsMjkuNThsOS41OSw5LjU5YTIuODMsMi44MywwLDAsMCw0LDBoMGEyLjgzLDIuODMsMCwwLDAsMC00bC05LjQzLTkuNDFhMTUuOTMsMTUuOTMsMCwwLDAsMy4xOS0xMS42N0ExNi4wOSwxNi4wOSwwLDAsMCwxOC41Ny4xM1pNMTYuNTIsMy43OEExMi4yNywxMi4yNywwLDEsMSw0LjI1LDE2LDEyLjI1LDEyLjI1LDAsMCwxLDE2LjUyLDMuNzhaIi8+PC9nPjwvc3ZnPgo=";

var Wrapper = _styledComponents.default.div(_templateObject, function (props) {
  return props.theme['primary'];
}, function (props) {
  return props.theme['primary'];
}, function (props) {
  return props.theme['primary'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, SearchIcon, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['gray-4'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['secondary'];
}, function (props) {
  return props.theme['secondary'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['gray-4'];
}, function (props) {
  return props.theme['gray-3'];
}, function (props) {
  return props.theme['gray-3'];
});

var menuItems = [_react.default.createElement(_react.default.Fragment, {
  key: "wallet"
}, _react.default.createElement("a", {
  href: "https://blockchain.info/wallet"
}, "Wallet"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "https://blockchain.info/wallet/#/login"
}, "Login")))), _react.default.createElement(_react.default.Fragment, {
  key: "data"
}, _react.default.createElement("a", {
  href: "https://blockchain.info"
}, "Data"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "https://blockchain.info/charts"
}, "Charts")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "https://blockchain.info/stats"
}, "Stats")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "https://blockchain.info/markets"
}, "Markets")))), _react.default.createElement(_react.default.Fragment, {
  key: "API"
}, _react.default.createElement("a", {
  href: "https://blockchain.info/api"
}, "API"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "https://www.blockchain.com/enterprise"
}, "Business")))), _react.default.createElement(_react.default.Fragment, {
  key: "about"
}, _react.default.createElement("a", {
  href: "https://www.blockchain.com/about"
}, "About"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "https://www.blockchain.com/team"
}, "Team")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "https://www.blockchain.com/careers"
}, "Careers")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "https://www.blockchain.com/press"
}, "Press")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "https://blog.blockchain.com"
}, "Blog"))))];

var NavigationBar =
/*#__PURE__*/
function (_Component) {
  _inherits(NavigationBar, _Component);

  function NavigationBar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, NavigationBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        menuButtonIsActive: false,
        open: false,
        searching: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "setHeaderClosed", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          menuButtonIsActive: false,
          open: false
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "setHeaderOpened", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          menuButtonIsActive: true,
          open: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "menuButtonPressed", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state = _this.state,
            menuButtonIsActive = _this$state.menuButtonIsActive,
            open = _this$state.open;

        _this.setState({
          menuButtonIsActive: !menuButtonIsActive,
          open: !open
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "searchButtonPress", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var searching = _this.state.searching;

        _this.setState({
          open: false,
          searching: !searching
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "menuItemRenderer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(content, index) {
        return _react.default.createElement("li", {
          className: "with-children",
          key: index,
          onMouseEnter: _this.setHeaderOpened,
          onMouseLeave: _this.setHeaderClosed
        }, content);
      }
    }), _temp));
  }

  _createClass(NavigationBar, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          menuButtonIsActive = _state.menuButtonIsActive,
          open = _state.open,
          searching = _state.searching;
      var status = open ? 'open' : searching ? 'searching' : null;
      return _react.default.createElement(Wrapper, null, _react.default.createElement("nav", {
        className: status
      }, _react.default.createElement("ul", {
        className: "igation"
      }, _react.default.createElement("li", {
        className: ""
      }, _react.default.createElement("a", {
        className: "bc-logo",
        href: "https://blockchain.com"
      }, _react.default.createElement("img", {
        alt: "Blockchain",
        src: Logo
      })), _react.default.createElement("button", {
        className: menuButtonIsActive ? 'menu-button is-active' : 'menu-button',
        onClick: this.menuButtonPressed
      }, _react.default.createElement("span", null)), _react.default.createElement("button", {
        className: "search-button",
        onClick: this.searchButtonPress,
        type: "button"
      })), menuItems.map(this.menuItemRenderer), _react.default.createElement("li", {
        className: "flex-space"
      }), _react.default.createElement("li", null, _react.default.createElement("form", {
        action: "https://blockchain.info/search",
        className: "search-form",
        method: "GET"
      }, _react.default.createElement("input", {
        className: "search-bar",
        name: "search",
        placeholder: "block, hash, transaction, etc...",
        type: "text"
      }))), _react.default.createElement("li", null, _react.default.createElement("a", {
        className: "wallet-button",
        href: "https://blockchain.info/wallet/#/signup"
      }, "Get A Free Wallet")))));
    }
  }]);

  return NavigationBar;
}(_react.Component);

var _default = NavigationBar;
exports.default = _default;