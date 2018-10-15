import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.li`
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
  border-top: 0.5px solid
    ${(props) => props.theme['navbarDropdownContentBorderColor']};
  box-sizing: border-box;

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: auto;
    padding: 0.75rem 1rem;
    border-top: none;

    & > :last-child {
      display: none;
    }

    &:hover {
      & > :last-child {
        display: block;
      }
    }
  }
`

const NavbarNavItem = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarNavItem.propTypes = {
  children: PropTypes.node,
}

export default NavbarNavItem
