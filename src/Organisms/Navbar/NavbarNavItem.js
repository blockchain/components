import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.li`
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
  box-sizing: border-box;
  border-top: 0.5px solid
    ${(props) => props.theme['navbarDropdownContentBorderColor']};

  @media (min-width: 48rem) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: auto;
    margin-right: 1rem;
    padding: 1rem;
    border-top: none;
  }
`

const NavbarNavItem = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarNavItem.propTypes = {
  children: PropTypes.node,
}

export default NavbarNavItem
