import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  background-color: ${(props) => props.theme['circleBadgeBackgroundColor']};
  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => props.theme['circleBadgeHoverColor']};
  }
`

const CircleBadge = ({ name, size, url, ...rest }) => (
  <Wrapper size={size} url={url}>
    <Image name={name} selectable />
  </Wrapper>
)

CircleBadge.propTypes = {
  name: PropTypes.oneOf(['facebook', 'linkedIn', 'twitter']),
  size: PropTypes.string,
  url: PropTypes.string.isRequired,
}

CircleBadge.defaultProps = {
  name: 'facebook',
  size: '40px',
}

export default CircleBadge
