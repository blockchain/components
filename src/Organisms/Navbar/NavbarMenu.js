import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: ${(props) => (props.toggled ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 60px 0 15px 0;
  background-color: ${(props) => props.theme['navbarMenuBagroundColor']};
  z-index: 10;

  @media (min-width: 768px) {
    position: relative;
    top: initial;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 0;
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
