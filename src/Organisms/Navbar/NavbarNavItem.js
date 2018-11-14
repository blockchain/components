// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { screenSize, theme } from '../../Tools/interpolation'

const Wrapper = styled.li`
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
  box-sizing: border-box;
  border-top: 0.5px solid ${theme('navbarDropdownContentBorderColor')};

  @media (min-width: ${screenSize('sm')}) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: auto;
    margin-right: 1rem;
    padding: 1rem;
    border-top: none;
  }
`

type PropsType = {
  +children?: React.Node,
}

const NavbarNavItem = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarNavItem.propTypes = {
  children: PropTypes.node,
}

export default NavbarNavItem
