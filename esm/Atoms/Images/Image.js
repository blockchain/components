function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  cursor: ", ";\n  object-fit: contain;\n"]);

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
var BaseImage = styled.img.attrs({
  alt: function alt(props) {
    return props.name;
  },
  src: function src(props) {
    return ImageMap[props.name];
  }
})(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.selectable ? 'pointer' : 'initial';
});

var Image = function Image(props) {
  return React.createElement(BaseImage, props);
};

Image.propTypes = {
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  selectable: PropTypes.bool,
  width: PropTypes.string
};
Image.defaultProps = {
  height: '100%',
  name: 'logo',
  selectable: false,
  width: '100%'
};
export default Image;