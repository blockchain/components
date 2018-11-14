// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { screenSize, theme } from '../../Tools/interpolation'

const Wrapper = styled.li`
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
  border-top: 0.5px solid ${theme('navbarDropdownContentBorderColor')};
  box-sizing: border-box;

  @media (min-width: ${screenSize('sm')}) {
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
