import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from '../../Atoms/Images/Image'
import Link from '../../Atoms/Links/Link'

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  padding: 0.6rem;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: ${(props) => props.theme['circleBadgeBackgroundColor']};
  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => props.theme['circleBadgeHoverColor']};
  }

  & > img {
    width: auto;
  }
`

const CircleBadge = ({ name, size, ...rest }) => (
  <Wrapper size={size} {...rest}>
    <Image name={name} selectable />
  </Wrapper>
)

CircleBadge.propTypes = {
  name: PropTypes.oneOf(['facebook', 'linkedIn', 'twitter']),
  size: PropTypes.string,
}

CircleBadge.defaultProps = {
  name: 'facebook',
  size: '2.625rem',
}

export default CircleBadge
