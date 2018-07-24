import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { keysIn } from 'ramda'

import theme from '../../Tools/theme'
import Image from '../../Atoms/Images/Image'
import Link from '../../Atoms/Links/Link'

const Wrapper = styled(Link).attrs({
  href: (props) => props.url,
  target: '_blank',
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  padding: 7px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.color]};
  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => props.theme[props.hoverColor]};
  }
`

const CircleBadge = ({ color, hoverColor, name, size, url, ...rest }) => (
  <Wrapper color={color} hoverColor={hoverColor} size={size} url={url}>
    <Image name={name} selectable />
  </Wrapper>
)

CircleBadge.propTypes = {
  color: PropTypes.oneOf(keysIn(theme)),
  hoverColor: PropTypes.oneOf(keysIn(theme)),
  name: PropTypes.oneOf(['facebook', 'linkedIn', 'twitter']),
  size: PropTypes.string,
  url: PropTypes.string.isRequired,
}

CircleBadge.defaultProps = {
  color: 'gray2',
  hoverColor: 'orient',
  name: 'facebook',
  size: '40px',
}

export default CircleBadge
