import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: ${(props) => (props.toggled ? 'flex' : 'none')};
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 4.5rem 1.5rem 1.5rem 1.5rem;
  box-sizing: border-box;
  background-color: ${(props) => props.theme['navbarMenuBagroundColor']};
  z-index: 10;
  transform: translate3d(0, 0, 0);

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    position: relative;
    top: initial;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    background-color: transparent;
  }
`

const NavbarMenu = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarMenu.propTypes = {
  children: PropTypes.node,
  toggled: PropTypes.bool,
}

NavbarMenu.defaultProps = {
  toggled: false,
}

export default NavbarMenu
