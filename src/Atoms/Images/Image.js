import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ImageMap from './ImageMap'

const BaseImage = styled.img.attrs({
  alt: (props) => props.name,
  src: (props) => ImageMap[props.name],
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: ${(props) => (props.selectable ? 'pointer' : 'initial')};
`

const Image = (props) => <BaseImage {...props} />

Image.propTypes = {
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  selectable: PropTypes.bool,
  width: PropTypes.string,
}

Image.defaultProps = {
  height: 'auto',
  name: 'logo',
  selectable: false,
  width: 'auto',
}

export default Image
