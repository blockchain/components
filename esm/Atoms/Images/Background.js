function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n  background-image: url(", ");\n  background-size: ", ";\n  background-repeat: no-repeat;\n  background-position: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageMap from './ImageMap';
var BaseBackground = styled.div(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.width;
}, function (props) {
  return props.path;
}, function (props) {
  return props.stretch ? 'cover' : 'contain';
});

var Background = function Background(_ref) {
  var children = _ref.children,
      name = _ref.name,
      height = _ref.height,
      width = _ref.width,
      stretch = _ref.stretch,
      rest = _objectWithoutProperties(_ref, ["children", "name", "height", "width", "stretch"]);

  return React.createElement(BaseBackground, _extends({
    height: height,
    path: ImageMap[name],
    stretch: stretch,
    width: width
  }, rest), children);
};

Background.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  name: PropTypes.string,
  stretch: PropTypes.bool,
  width: PropTypes.string
};
Background.defaultProps = {
  height: '200px',
  name: 'logo',
  stretch: false,
  width: '200px'
};
export default Background;