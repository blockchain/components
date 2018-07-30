function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: ", ";\n  width: ", ";\n  padding: 7px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background-color: ", ";\n  transition: all 0.5s;\n\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../../Atoms/Images/Image';
import Link from '../../Atoms/Links/Link';
var Wrapper = styled(Link).attrs({
  href: function href(props) {
    return props.url;
  },
  target: '_blank'
})(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.theme['circleBadgeBackgroundColor'];
}, function (props) {
  return props.theme['circleBadgeHoverColor'];
});

var CircleBadge = function CircleBadge(_ref) {
  var name = _ref.name,
      size = _ref.size,
      url = _ref.url,
      rest = _objectWithoutProperties(_ref, ["name", "size", "url"]);

  return React.createElement(Wrapper, {
    size: size,
    url: url
  }, React.createElement(Image, {
    name: name,
    selectable: true
  }));
};

CircleBadge.propTypes = {
  name: PropTypes.oneOf(['facebook', 'linkedIn', 'twitter']),
  size: PropTypes.string,
  url: PropTypes.string.isRequired
};
CircleBadge.defaultProps = {
  name: 'facebook',
  size: '40px'
};
export default CircleBadge;