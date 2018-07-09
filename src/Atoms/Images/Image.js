import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ImageMap from './ImageMap'

const BaseImage = styled.img.attrs({ src: (props) => props.path })`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: ${(props) => (props.selectable ? 'pointer' : 'initial')};
`

const Image = ({ name, ...rest }) => (
  <BaseImage path={ImageMap[name]} {...rest} />
)

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
