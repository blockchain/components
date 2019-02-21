// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { screenSize, theme } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
  +toggled?: boolean,
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(80vh - 60px);

  @media (min-width: ${screenSize('sm')}) {
    position: relative;
    top: 0;
    width: calc(100% - 12rem);
    height: 100%;
  }
`
const Container = styled.div`
  position: relative;
  display: ${(props) => (props.toggled ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  width: 100%;
  max-height: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
  box-sizing: border-box;
  background: ${theme('navbarMenuBackgroundColor')};
  transform: translate3d(0, 0, 0);
  z-index: ${theme('navbarMenuZIndex')};
  overflow-y: auto;

  @media (min-width: ${screenSize('sm')}) {
    position: relative;
    top: initial;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 100%;
    padding: 0;
    background: transparent;
    overflow-y: initial;
  }
`

const NavbarMenu = ({ children, toggled, ...rest }: PropsType) => (
  <Wrapper {...rest}>
    <Container toggled={toggled}>{children}</Container>
  </Wrapper>
)

NavbarMenu.propTypes = {
  children: PropTypes.node,
  toggled: PropTypes.bool,
}

NavbarMenu.defaultProps = {
  toggled: false,
}

export default NavbarMenu
