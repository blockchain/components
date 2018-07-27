var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: none;\n  @media screen and (max-width: 1024px) {\n    background: none;\n    border: none;\n    display: block;\n    float: right;\n    height: 20px;\n    margin-right: 25px;\n    position: relative;\n    width: 20px;\n\n    &:after {\n      color: ", ";\n      content: 'e92d';\n      font-family: 'icomoon';\n      font-size: 17px;\n      font-style: normal;\n      font-variant: normal;\n      font-weight: normal;\n      left: 2px;\n      position: absolute;\n      speak: none;\n      text-transform: none;\n      top: 0px;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  }\n"], ["\n  display: none;\n  @media screen and (max-width: 1024px) {\n    background: none;\n    border: none;\n    display: block;\n    float: right;\n    height: 20px;\n    margin-right: 25px;\n    position: relative;\n    width: 20px;\n\n    &:after {\n      color: ", ";\n      content: '\\e92d';\n      font-family: 'icomoon';\n      font-size: 17px;\n      font-style: normal;\n      font-variant: normal;\n      font-weight: normal;\n      left: 2px;\n      position: absolute;\n      speak: none;\n      text-transform: none;\n      top: 0px;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import styled from 'styled-components';
var Button = styled.button(_templateObject, function (props) {
  return props.theme['white'];
});

var SearchButton = function SearchButton() {
  return React.createElement(Button, null);
};

export default SearchButton;