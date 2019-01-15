// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { screenSize, theme } from '../../Tools/interpolation'

const Wrapper = styled.div`
  width: 100%;

  @media (min-width: ${screenSize('sm')}) {
    position: absolute;
    width: auto;
    margin: 0.25rem 0;
    background-color: transparent;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  & > :last-child {
    margin-bottom: 0 !important;
  }

  @media (max-width: ${screenSize('sm')}) {
    padding: 1.1rem 0;
  }

  @media (min-width: ${screenSize('sm')}) {
    margin-top: 15px;
    padding: 1.5rem;
    border-radius: 0.25rem;
    box-sizing: border-box;
    background-color: ${theme('navbarDropdownContentBackgroundColor')};
    box-shadow: 0 10px 60px -10px ${theme('navbarDropdownContentShadowColor')},
      0 8px 16px ${theme('navbarDropdownContentShadowColor2')};

    &::after,
    &::before {
      bottom: 100%;
      left: 10%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &::after {
      border-color: transparent;
      border-bottom-color: ${theme('navbarDropdownContentBackgroundColor')};
      border-width: 10px;
      margin-left: -10px;
    }

    &::before {
      border-color: transparent;
      border-bottom-color: ${theme('navbarDropdownContentBackgroundColor')};
      border-width: 12px;
      margin-left: -12px;
    }
  }
`

export type PropsType = {
  +children?: React.Node,
}

const NavbarDropdownContent = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>
    <Container>{children}</Container>
  </Wrapper>
)

NavbarDropdownContent.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownContent
