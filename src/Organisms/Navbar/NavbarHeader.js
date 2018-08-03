import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  z-index: 15;
  margin-right: 25px;
`

const NavbarHeader = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarHeader.propTypes = {
  children: PropTypes.node,
}

export default NavbarHeader
