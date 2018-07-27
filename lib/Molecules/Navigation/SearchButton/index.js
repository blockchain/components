"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: none;\n  @media screen and (max-width: 1024px) {\n    background: none;\n    border: none;\n    display: block;\n    float: right;\n    height: 20px;\n    margin-right: 25px;\n    position: relative;\n    width: 20px;\n\n    &:after {\n      color: ", ";\n      content: 'e92d';\n      font-family: 'icomoon';\n      font-size: 17px;\n      font-style: normal;\n      font-variant: normal;\n      font-weight: normal;\n      left: 2px;\n      position: absolute;\n      speak: none;\n      text-transform: none;\n      top: 0px;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  }\n"], ["\n  display: none;\n  @media screen and (max-width: 1024px) {\n    background: none;\n    border: none;\n    display: block;\n    float: right;\n    height: 20px;\n    margin-right: 25px;\n    position: relative;\n    width: 20px;\n\n    &:after {\n      color: ", ";\n      content: '\\e92d';\n      font-family: 'icomoon';\n      font-size: 17px;\n      font-style: normal;\n      font-variant: normal;\n      font-weight: normal;\n      left: 2px;\n      position: absolute;\n      speak: none;\n      text-transform: none;\n      top: 0px;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  }\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject, function (props) {
  return props.theme['white'];
});

var SearchButton = function SearchButton() {
  return _react.default.createElement(Button, null);
};

var _default = SearchButton;
exports.default = _default;