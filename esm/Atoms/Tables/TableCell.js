function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
var BaseTableCell = styled.div(_templateObject());

var TableCell = function TableCell(_ref) {
  var children = _ref.children;
  return React.createElement(BaseTableCell, null, children);
};

TableCell.propTypes = {
  children: PropTypes.node
};
export default TableCell;