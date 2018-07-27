var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: none;\n  @media screen and (max-width: 1024px) {\n    appearance: none;\n    background: none;\n    border: none;\n    display: block;\n    float: right;\n    height: 14px;\n    margin: 3px 0 0 0;\n    padding: 0;\n    position: relative;\n    transform: rotate(\n      0deg\n    ); /* rotate compressed hamburger back to its origin (CCW) */\n    transition: transform 500ms ease; /* duration -> 500ms (should be equal to duration of menu animation) */\n    width: 22px;\n    &.is-active {\n      /* rotate compressed hamburger 180\xB0 CW after 100ms */\n      transform: rotate(180deg);\n      transition-delay: 100ms;\n    }\n    & span {\n      background: ", ";\n      border-radius: 2px !important;\n      display: block;\n      height: 2px;\n      left: 0px;\n      position: absolute;\n      right: 0px;\n      top: 6px;\n    }\n    & span::before,\n    & span::after {\n      background-color: ", ";\n      border-radius: 2px !important;\n      content: '';\n      display: block;\n      height: 2px;\n      left: 0;\n      position: absolute;\n      width: 100%;\n    }\n\n    & span::before {\n      top: -6px;\n    }\n    & span::after {\n      bottom: -6px;\n    }\n\n    & span::before {\n      transition-property: top, transform;\n    }\n    & span::after {\n      transition-property: bottom, transform;\n    }\n\n    & span::before,\n    & span::after {\n      transition-duration: 200ms, 250ms;\n      transition-delay: 250ms, 0s; /* wait for origin rotation to complete before decompressing hamburger */\n    }\n\n    &.is-active span {\n      background: none;\n    }\n\n    &.is-active span::before {\n      top: 0;\n      transform: rotate(45deg);\n    }\n\n    &.is-active span::after {\n      bottom: 0;\n      transform: rotate(-45deg);\n    }\n\n    &.is-active span::before,\n    &.is-active span::after {\n      transition-delay: 0s, 250ms; /* delay before hamburger decompresses */\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
var Button = styled.button(_templateObject, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
});

var MenuButton = function MenuButton(props) {
  return React.createElement(Button, null);
};

export default MenuButton;