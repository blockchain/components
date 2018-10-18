// @flow strict
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

type PropsType = {
  +size?: string,
}

const Wrapper = styled.svg.attrs({
  viewBox: '0 0 103.9 103.9',
})`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`
const Path1 = styled.path`
  fill: #00aee6;
`
const Path2 = styled.path`
  fill: #123962;
`
const Path3 = styled.path`
  fill: #b1d4e5;
`
const Polygon1 = styled.polygon`
  fill: #b1d4e5;
`
const Polygon2 = styled.polygon`
  fill: #2754ba;
`
const Path4 = styled.path`
  fill: #799eb2;
`

const BrandLogo = (props: PropsType) => (
  <Wrapper {...props}>
    <Path1 d="M38.6,52L17,73.5l27.1,27.1c4.4,4.4,11.4,4.4,15.8,0l27.1-27.1L65.3,52L52,38.6L38.6,52z" />
    <Path2 d="M17,30.4L3.3,44.1c-4.4,4.4-4.4,11.4,0,15.8L17,73.5L38.6,52L52,38.6L30.4,17L17,30.4z" />
    <Path3 d="M73.5,60.1l13.4,13.4l13.7-13.7c4.4-4.4,4.4-11.4,0-15.8l-5.5-5.5L73.5,60.1z" />
    <Polygon1 points="65.3,52 65.3,52 52,38.6 73.5,17 73.5,17 52,38.6 	" />
    <Polygon2 points="52,38.6 65.3,52 73.5,60.1 95.1,38.6 86.9,30.4 73.5,17 	" />
    <Path4 d="M73.5,17L59.8,3.3c-4.4-4.4-11.4-4.4-15.8,0L30.4,17L52,38.6L73.5,17z" />
  </Wrapper>
)

BrandLogo.propTypes = {
  size: PropTypes.string,
}

BrandLogo.defaultProps = {
  size: '100px',
}

export default BrandLogo
