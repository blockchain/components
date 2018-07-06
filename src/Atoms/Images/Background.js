import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ImageMap from './ImageMap'

const BaseBackground = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-image: url(${(props) => props.path});
  background-size: ${(props) => (props.stretch ? 'cover' : 'contain')};
  background-repeat: no-repeat;
  background-position: center;
`

const Background = ({ children, name, height, width, stretch, ...rest }) => (
  <BaseBackground
    height={height}
    path={ImageMap[name]}
    stretch={stretch}
    width={width}
    {...rest}
  >
    {children}
  </BaseBackground>
)

Background.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  name: PropTypes.string,
  stretch: PropTypes.bool,
  width: PropTypes.string,
}

Background.defaultProps = {
  height: '200px',
  name: 'rocket',
  stretch: false,
  width: '200px',
}

export default Background
