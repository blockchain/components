// @flow strict
//
//
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import Link from '../../Atoms/Links/Link'

type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled(Link).attrs({
  size: '1rem',
  weight: 500,
})`
  position: relative;
`

const FooterLink = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FooterLink
