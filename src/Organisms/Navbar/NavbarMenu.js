// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { screenSize, theme } from '../../Tools/interpolation'

type PropsType = {
  +children?: React.Node,
  +toggled?: boolean,
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: ${(props: PropsType) => (props.toggled === true ? 'flex' : 'none')};
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 4.5rem 1.5rem 1.5rem 1.5rem;
  box-sizing: border-box;
  background-color: ${theme('navbarMenuBagroundColor')};
  transform: translate3d(0, 0, 0);

  @media (min-width: ${screenSize('sm')}) {
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

const NavbarMenu = ({ children, ...rest }: PropsType) => (
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
