var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background: rgba(255, 255, 255, 0.05)\n    url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.38 42.38'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23ffffff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 2%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cg id='surface1'%3E%3Cpath class='cls-1' d='M19.18.13a17,17,0,1,0,6.92,31.21L36.25,41.5a3,3,0,0,0,4.25,0h0a3,3,0,0,0,0-4.25l-10-10a16.88,16.88,0,0,0,3.37-12.36A17,17,0,0,0,19.18.13ZM17,4A13,13,0,1,1,4,17,13,13,0,0,1,17,4Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")\n    no-repeat 10px center;\n  background-size: 14px;\n  border: 1px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  font-size: 14px;\n  font-weight: 300;\n  height: 32px;\n  line-height: 14px;\n  padding: 0 10px 2px 32px;\n  position: relative;\n  width: 260px;\n\n  &:focus {\n    background: ", "\n      url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.38 42.38'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23979797;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 2%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cg id='surface1'%3E%3Cpath class='cls-1' d='M19.18.13a17,17,0,1,0,6.92,31.21L36.25,41.5a3,3,0,0,0,4.25,0h0a3,3,0,0,0,0-4.25l-10-10a16.88,16.88,0,0,0,3.37-12.36A17,17,0,0,0,19.18.13ZM17,4A13,13,0,1,1,4,17,13,13,0,0,1,17,4Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")\n      no-repeat 10px center;\n    background-size: 14px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    color: #454545;\n    outline: none;\n    padding: 0 10px 0 32px;\n  }\n\n  &::placeholder {\n    /* Chrome 57, Firefox 51, Opera 44, Safari 10.1 */\n    color: ", ";\n    font-size: 11px;\n    font-weight: 300;\n    line-height: 30px;\n    text-transform: uppercase;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  &::-webkit-input-placeholder {\n    /* Safari */\n    line-height: 20px;\n  }\n\n  &::-moz-placeholder {\n    /* Firefox < 51 */\n    line-height: 30px;\n    opacity: 1;\n  }\n\n  &:-ms-input-placeholder {\n    /* IE 10, 11 */\n    color: ", ";\n    font-size: 11px;\n    font-weight: 300;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n\n  &::-ms-input-placeholder {\n    /* MS EDGE */\n    color: ", ";\n    font-size: 11px;\n    font-weight: 300;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n\n  @media screen and (max-width: 1024px) {\n    background: ", "\n      url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.38 42.38'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23979797;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 2%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cg id='surface1'%3E%3Cpath class='cls-1' d='M19.18.13a17,17,0,1,0,6.92,31.21L36.25,41.5a3,3,0,0,0,4.25,0h0a3,3,0,0,0,0-4.25l-10-10a16.88,16.88,0,0,0,3.37-12.36A17,17,0,0,0,19.18.13ZM17,4A13,13,0,1,1,4,17,13,13,0,0,1,17,4Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")\n      no-repeat 12px center;\n    background-size: 16px;\n    border: none;\n    border-radius: 20px;\n    color: #454545;\n    height: 40px;\n    line-height: 14px;\n    opacity: 0;\n    padding: 0 10px 0 36px;\n    width: inherit;\n\n    &::placeholder {\n      color: #979797;\n      font-size: 14px;\n      line-height: 18px;\n    }\n\n    &::-moz-placeholder {\n      line-height: 40px;\n    }\n\n    &::-webkit-input-placeholder {\n      color: #979797;\n      font-size: 14px;\n      line-height: 18px;\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
var TextField = styled.input(_templateObject, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.theme['white'];
});

var SearchBar = function SearchBar(props) {
  return React.createElement(TextField, {
    name: "search",
    placeholder: "block, hash, transaction, etc...",
    type: "text"
  });
};

export default SearchBar;