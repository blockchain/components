function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 10px 30px;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
var BaseTableHeader = styled.div(_templateObject());

var TableHeader = function TableHeader(_ref) {
  var children = _ref.children;
  return React.createElement(BaseTableHeader, null, children);
};

TableHeader.propTypes = {
  children: PropTypes.node
};
export default TableHeader;