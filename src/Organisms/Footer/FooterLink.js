// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import Link, { type PropsType as LinkPropsType } from '../../Atoms/Links/Link'

export type PropsType = {
  +children?: React.Node,
}

const Wrapper: ReactComponentFunctional<LinkPropsType> = styled(Link).attrs({
  size: '1rem',
  weight: 500,
})`
  position: relative;
  white-space: nowrap;
`

const FooterLink = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FooterLink
