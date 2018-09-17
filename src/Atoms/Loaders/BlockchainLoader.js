import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const scaleDelay = keyframes`
  0%,
  50%,
  100% { transform: scale3d(1, 1, 1); }
  25% { transform: scale3d(0, 0, 1); }
`
const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`
const Container = styled.div`
  width: 70%;
  height: 70%;
  transform-origin: 85% 35%;
  transform: rotate(-45deg);
  border-radius: 10%;
  overflow: hidden;
`
const Square = styled.div`
  display: inline-block;
  width: 20%;
  height: 20%;
  float: left;
  border: 0;
  animation: ${scaleDelay} 3s infinite ease-in-out;
`
const SquareA = styled(Square)`
  background-color: #153a62;
`
const SquareB = styled(Square)`
  background-color: #799eb2;
`
const SquareC = styled(Square)`
  background-color: #3558a8;
`
const SquareD = styled(Square)`
  background-color: #b2d5e5;
`
const SquareE = styled(Square)`
  background-color: #10ade4;
`
const Square1 = styled(SquareA)`
  animation-delay: 0s;
`
const Square2 = styled(SquareA)`
  animation-delay: 0.1s;
`
const Square3 = styled(SquareA)`
  animation-delay: 0.2s;
`
const Square4 = styled(SquareB)`
  animation-delay: 0.3s;
`
const Square5 = styled(SquareB)`
  animation-delay: 0.4s;
`
const Square6 = styled(SquareA)`
  animation-delay: 0.1s;
`
const Square7 = styled(SquareA)`
  animation-delay: 0.2s;
`
const Square8 = styled(SquareA)`
  animation-delay: 0.3s;
`
const Square9 = styled(SquareB)`
  animation-delay: 0.4s;
`
const Square10 = styled(SquareB)`
  animation-delay: 0.5s;
`
const Square11 = styled(SquareE)`
  animation-delay: 0.2s;
`
const Square12 = styled(SquareE)`
  animation-delay: 0.3s;
`
const Square13 = styled(SquareE)`
  animation-delay: 0.4s;
`
const Square14 = styled(SquareC)`
  animation-delay: 0.5s;
`
const Square15 = styled(SquareC)`
  animation-delay: 0.6s;
`
const Square16 = styled(SquareE)`
  animation-delay: 0.3s;
`
const Square17 = styled(SquareE)`
  animation-delay: 0.4s;
`
const Square18 = styled(SquareE)`
  animation-delay: 0.5s;
`
const Square19 = styled(SquareC)`
  animation-delay: 0.6s;
`
const Square20 = styled(SquareC)`
  animation-delay: 0.7s;
`
const Square21 = styled(SquareE)`
  animation-delay: 0.4s;
`
const Square22 = styled(SquareE)`
  animation-delay: 0.5s;
`
const Square23 = styled(SquareE)`
  animation-delay: 0.6s;
`
const Square24 = styled(SquareD)`
  animation-delay: 0.7s;
`
const Square25 = styled(SquareD)`
  animation-delay: 0.8s;
`

const BlockchainLoader = (props) => (
  <Wrapper {...props}>
    <Container>
      <Square1 />
      <Square2 />
      <Square3 />
      <Square4 />
      <Square5 />
      <Square6 />
      <Square7 />
      <Square8 />
      <Square9 />
      <Square10 />
      <Square11 />
      <Square12 />
      <Square13 />
      <Square14 />
      <Square15 />
      <Square16 />
      <Square17 />
      <Square18 />
      <Square19 />
      <Square20 />
      <Square21 />
      <Square22 />
      <Square23 />
      <Square24 />
      <Square25 />
    </Container>
  </Wrapper>
)

BlockchainLoader.propTypes = {
  size: PropTypes.string.isRequired,
}

BlockchainLoader.defaultProps = {
  size: '150px',
}

export default BlockchainLoader
