import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const stretchAnimation = keyframes`
  0%,
  40%,
  100% { opacity: 1; }
  20% { opacity: 0; }
`
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: center;
  font-size: 10px;
`
const Rectangle = styled.div`
  display: inline-block;
  width: 15%;
  height: 100%;
  background-color: ${(props) => props.theme['loaderColor']};
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

const FlatLoader = (props) => (
  <Container {...props}>
    <Rectangle1 />
    <Rectangle2 />
    <Rectangle3 />
    <Rectangle4 />
    <Rectangle5 />
  </Container>
)

FlatLoader.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}

FlatLoader.defaultProps = {
  height: '30px',
  width: '50px',
}

export default FlatLoader
