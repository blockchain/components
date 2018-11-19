// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled.div`
  margin-right: 25px;
`

const NavbarHeader = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarHeader.propTypes = {
  children: PropTypes.node,
}

export default NavbarHeader
