// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import Link from '../../Atoms/Links/Link'

export type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled(Link)`
  position: relative;
  white-space: nowrap;
`

const FooterLink = ({ children, ...rest }: PropsType) => (
  <Wrapper size="1rem" weight={500} {...rest}>
    {children}
  </Wrapper>
)

FooterLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FooterLink
