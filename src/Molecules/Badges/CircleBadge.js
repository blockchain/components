import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BcFacebook, BcLinkedin, BcTwitter } from '../../Atoms/Icons'
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
`
const WhiteBcFacebook = styled(BcFacebook).attrs({
  selectable: true,
  size: 'fit-content',
})`
  fill: ${(props) => props.theme['circleBadgeColor']};

  &:hover {
    fill: ${(props) => props.theme['circleBadgeColor']};
  }
`
const WhiteBcLinkedin = styled(BcLinkedin).attrs({
  selectable: true,
  size: 'fit-content',
})`
  fill: ${(props) => props.theme['circleBadgeColor']};

  &:hover {
    fill: ${(props) => props.theme['circleBadgeColor']};
  }
`
const WhiteBcTwitter = styled(BcTwitter).attrs({
  selectable: true,
  size: 'fit-content',
})`
  fill: ${(props) => props.theme['circleBadgeColor']};

  &:hover {
    fill: ${(props) => props.theme['circleBadgeColor']};
  }
`

const CircleBadge = ({ name, size, ...rest }) => (
  <Wrapper size={size} {...rest}>
    {name === 'facebook' && <WhiteBcFacebook />}
    {name === 'linkedin' && <WhiteBcLinkedin />}
    {name === 'twitter' && <WhiteBcTwitter />}
  </Wrapper>
)

CircleBadge.propTypes = {
  name: PropTypes.oneOf(['facebook', 'linkedin', 'twitter']),
  size: PropTypes.string,
}

CircleBadge.defaultProps = {
  name: 'facebook',
  size: '2.625rem',
}

export default CircleBadge
