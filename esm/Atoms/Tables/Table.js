function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  box-shadow: 0 0 25px 5px ", ";\n\n  & > :nth-child(even) {\n    background-color: ", ";\n  }\n\n  & > :nth-child(odd) {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
var BaseTable = styled.div(_templateObject(), function (props) {
  return props.theme['tableShadowColor'];
}, function (props) {
  return props.theme['tableCellEvenBackgroundColor'];
}, function (props) {
  return props.theme['tableCellOddBackgroundColor'];
});

var Table = function Table(_ref) {
  var children = _ref.children;
  return React.createElement(BaseTable, null, children);
};

Table.propTypes = {
  children: PropTypes.node
};
export default Table;