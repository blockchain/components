import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.li`
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 10px 15px;
  box-sizing: border-box;
`

const NavbarNavItem = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarNavItem.propTypes = {
  children: PropTypes.node,
}

export default NavbarNavItem
