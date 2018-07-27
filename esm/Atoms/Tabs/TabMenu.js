function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  border-bottom: 2px solid ", ";\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
var Wrapper = styled.div(_templateObject(), function (props) {
  return props.theme['gray1'];
});
var Container = styled.div(_templateObject2(), function (props) {
  return props.width;
});

var TabMenu = function TabMenu(_ref) {
  var children = _ref.children,
      width = _ref.width;
  return React.createElement(Wrapper, null, React.createElement(Container, {
    width: width
  }, children));
};

TabMenu.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string
};
TabMenu.defaultProps = {
  width: '100%'
};
export default TabMenu;