// @flow strict
import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { prop, theme } from '../../Tools/interpolation'

export type PropsType = {
  +height?: string,
  +width?: string,
}

const stretchAnimation = keyframes`
  0%,
  40%,
  100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
`
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${prop<PropsType>('width')};
  height: ${prop<PropsType>('height')};
  text-align: center;
  font-size: 10px;
`
const Rectangle = styled.div`
  display: inline-block;
  width: 15%;
  height: 100%;
  background-color: ${theme('loaderColor')};
  animation: ${stretchAnimation} 1.2s infinite ease-in-out;
`
const Rectangle1 = styled(Rectangle)`
  animation-delay: -1.1s;
`
const Rectangle2 = styled(Rectangle)`
  animation-delay: -1s;
`
const Rectangle3 = styled(Rectangle)`
  animation-delay: -0.9s;
`
const Rectangle4 = styled(Rectangle)`
  animation-delay: -0.8s;
`
const Rectangle5 = styled(Rectangle)`
  animation-delay: -0.7s;
`

const FlatLoader2 = (props: PropsType) => (
  <Container {...props}>
    <Rectangle1 />
    <Rectangle2 />
    <Rectangle3 />
    <Rectangle4 />
    <Rectangle5 />
  </Container>
)

FlatLoader2.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}

FlatLoader2.defaultProps = {
  height: '50px',
  width: '45px',
}

export default FlatLoader2
