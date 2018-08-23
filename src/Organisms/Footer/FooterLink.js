import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from '../../Atoms/Links/Link'

const Wrapper = styled(Link).attrs({
  size: '1rem',
  weight: 500,
})`
  position: relative;
`

const FooterLink = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FooterLink
