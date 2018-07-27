"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tpropTypes = _interopRequireDefault(require("tprop-types"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  &:nth-of-type(1) {\n    order: 1;\n  } /* BLOCKCHAIN LOGO */\n  &:nth-of-type(2) {\n    order: 2;\n  } /* WALLET */\n  &:nth-of-type(3) {\n    order: 3;\n  } /* DATA */\n  &:nth-of-type(4) {\n    order: 4;\n  } /* API */\n  &:nth-of-type(5) {\n    order: 5;\n  } /* ABOUT */\n  &:nth-of-type(6) {\n    order: 6;\n  } /* FLEXIBLE SPACE */\n  &:nth-of-type(7) {\n    order: 7;\n  } /* SEARCH BAR */\n  &:nth-of-type(8) {\n    order: 8;\n  } /* GET FREE WALLET BUTTON */\n\n  @media screen and (max-width: 1024px) {\n    &:nth-of-type(1) {\n      order: 1;\n    } /* BLOCKCHAIN LOGO */\n    &:nth-of-type(2) {\n      order: 3;\n    } /* WALLET */\n    &:nth-of-type(3) {\n      order: 4;\n    } /* DATA */\n    &:nth-of-type(4) {\n      order: 5;\n    } /* API */\n    &:nth-of-type(5) {\n      order: 6;\n    } /* ABOUT */\n    &:nth-of-type(6) {\n      order: 7;\n    } /* FLEXIBLE SPACE */\n    &:nth-of-type(7) {\n      order: 2;\n    } /* SEARCH BAR */\n    &:nth-of-type(8) {\n      order: 8;\n    } /* GET FREE WALLET BUTTON */\n  }\n\n  &:first-of-type {\n    /* BLOCKCHAIN LOGO */\n    margin-right: 30px;\n    opacity: 1 !important;\n  }\n\n  &:last-of-type {\n    /* GET FREE WALLET BUTTON */\n    margin-left: 25px;\n    @media screen and (max-width: 1024px) {\n      bottom: 0;\n      margin: 0;\n      opacity: 0;\n      padding: 10px;\n      position: absolute;\n      transition: opacity 500ms ease-in;\n      visibility: collapse;\n      width: 100%;\n    }\n  }\n\n  & > a,\n  & > a:hover,\n  & > a:visited {\n    color: ", ";\n    position: relative;\n    text-decoration: none;\n    text-transform: uppercase;\n    z-index: 1;\n  }\n\n  &.with-children {\n    border-radius: 2px 2px 0 0 !important;\n    padding: 0 40px 0 20px;\n    position: relative;\n    @media screen and (height: 480px) and (orientation: portrait) {\n      margin-top: 0;\n      padding: 0 0 0 30px;\n    }\n    @media screen and (max-height: 667px) and (max-width: 1024px) and (orientation: landscape) {\n      padding: 0 0 0 30px;\n      width: 25%;\n    }\n    @media screen and (height: 568px) and (orientation: portrait) {\n      padding: 0 0 0 30px;\n    }\n    @media screen and (min-width: 667px) and (max-width: 1024px) {\n      width: 25%;\n    }\n    @media screen and (min-width: 1024px) and (max-width: 1155px) {\n      padding-right: 20px;\n    }\n    @media screen and (max-width: 1024px) {\n      margin: 0;\n      min-height: 170px;\n      opacity: 0;\n      padding-left: 40px;\n      width: 50%;\n    }\n  }\n\n  &.with-children:hover ul {\n    background: rgba(255, 255, 255, 0.08);\n    list-style: none;\n    transition: background 0.4s ease-in;\n  }\n\n  &.with-children > a {\n    font-size: 13px;\n    @media screen and (height: 480px) and (orientation: portrait) {\n      font-size: 14px;\n    }\n    @media screen and (width: 480px) and (orientation: landscape) {\n      font-size: 14px;\n    }\n    @media screen and (max-height: 568px) and (max-width: 1024px) {\n      font-size: 16px;\n    }\n  }\n\n  &.with-children:hover ul li {\n    height: 18px;\n    transition: height 0.25s ease-in;\n    @media screen and (max-height: 568px) and (max-width: 1024px) {\n      margin: 10px 0;\n    }\n  }\n\n  &.with-children:hover ul li a {\n    opacity: 0.6;\n    transition: opacity 0.2s ease-in;\n    transition-delay: 0.1s;\n    @media screen and (height: 480px) and (orientation: portrait) {\n      font-size: 14px;\n    }\n  }\n\n  & ul {\n    background: rgba(255, 255, 255, 0);\n    height: 150px;\n    left: 0;\n    list-style: none;\n    padding: 0;\n    position: absolute;\n    top: -10px;\n    min-width: 90px;\n    padding-top: 40px;\n    & li {\n      margin: 6px 0;\n      height: 0;\n      transition: height 0.25s ease-out;\n      &:first-of-type {\n        margin-top: 0;\n      }\n      &:hover {\n        & a,\n        & a:active,\n        & a:visited {\n          text-decoration: none;\n        }\n        & a:focus {\n          outline: none !important;\n        }\n        & a {\n          opacity: 1 !important;\n          transition: opacity 0.2s ease-in;\n        }\n      }\n      & a {\n        color: ", ";\n        display: block;\n        font-size: 12px;\n        font-weight: 300;\n        opacity: 0;\n        padding-left: 20px;\n      }\n    }\n    @media screen and (height: 480px) and (orientation: portrait) {\n      left: 30px;\n      padding-top: 30px;\n    }\n    @media screen and (max-height: 667px) and (max-width: 1024px) and (orientation: landscape) {\n      left: 30px;\n      padding-top: 30px;\n    }\n    @media screen and (height: 568px) and (orientation: portrait) {\n      left: 30px;\n      padding-top: 30px;\n    }\n  }\n"]);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents.default.li(_templateObject, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
});

var MenuItem =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleMouseEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.onChange(true);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleMouseLeave", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.onChange(false);
      }
    }), _temp));
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          hasMenu = _props.hasMenu,
          flexibleSpace = _props.flexibleSpace;
      return flexibleSpace ? _react.default.createElement(Item, {
        style: {
          flexGrow: 1
        }
      }) : _react.default.createElement(Item, {
        className: hasMenu ? 'with-children' : null,
        onMouseEnter: hasMenu ? this.handleMouseEnter : null,
        onMouseLeave: hasMenu ? this.handleMouseLeave : null
      }, ' ', children, ' ');
    }
  }]);

  return MenuItem;
}(_react.Component);

Object.defineProperty(MenuItem, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: _tpropTypes.default.func,
    flexibleSpace: _tpropTypes.default.bool,
    hasMenu: _tpropTypes.default.bool,
    onChange: _tpropTypes.default.func
  }
});
var _default = MenuItem;
exports.default = _default;