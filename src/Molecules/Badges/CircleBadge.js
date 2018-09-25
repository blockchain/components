import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FabFacebookF, FabLinkedinIn, FabTwitter } from '../../Atoms/Icons'
import Link from '../../Atoms/Links/Link'

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: 50%;
  background-color: ${(props) => props.theme['circleBadgeBackgroundColor']};
  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => props.theme['circleBadgeHoverColor']};
  }
`
const WhiteFacebook = styled(FabFacebookF).attrs({
  selectable: true,
})`
  fill: ${(props) => props.theme['circleBadgeColor']};
  max-height: 60%;
  max-width: 60%;

  &:hover {
    fill: ${(props) => props.theme['circleBadgeColor']};
  }
`
const WhiteLinkedin = styled(FabLinkedinIn).attrs({
  selectable: true,
})`
  fill: ${(props) => props.theme['circleBadgeColor']};
  max-height: 60%;
  max-width: 60%;

  &:hover {
    fill: ${(props) => props.theme['circleBadgeColor']};
  }
`
const WhiteTwitter = styled(FabTwitter).attrs({
  selectable: true,
})`
  fill: ${(props) => props.theme['circleBadgeColor']};
  max-height: 60%;
  max-width: 60%;

  &:hover {
    fill: ${(props) => props.theme['circleBadgeColor']};
  }
`

const CircleBadge = ({ name, size, ...rest }) => (
  <Wrapper size={size} {...rest}>
    {name === 'facebook' && <WhiteFacebook size={size} />}
    {name === 'linkedin' && <WhiteLinkedin size={size} />}
    {name === 'twitter' && <WhiteTwitter size={size} />}
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
