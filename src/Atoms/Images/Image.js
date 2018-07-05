import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ImageMap from './ImageMap'

const BaseImage = styled.img.attrs({ src: props => props.path })`
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: ${props => props.selectable ? 'pointer': 'initial'};
`

const Image = ({ name, ...rest }) => <BaseImage path={ImageMap[name]} {...rest} />

Image.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  selectable: PropTypes.bool
}

Image.defaultProps = {
  name: 'blockchain-blue',
  width: 'auto',
  height: 'auto',
  selectable: false
}

export default Image
