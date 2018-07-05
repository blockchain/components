import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ImageMap from './ImageMap'

const BaseBackground = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-image: url(${props => props.path});
  background-size: ${props => props.stretch ? 'cover': 'contain'};
  background-repeat: no-repeat;
  background-position: center; 
`

const Background = ({ children, name, height, width, stretch, ...rest }) => (
  <BaseBackground path={ImageMap[name]} height={height} width={width} stretch={stretch} {...rest}>
    {children}
  </BaseBackground>
)

Background.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  stretch: PropTypes.bool
}

Background.defaultProps = {
  name: 'rocket',
  height: '200px',
  width: '200px',
  stretch: false
}

export default Background
