// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  z-index: 10;

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
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

  @media (max-width: ${(props) => props.theme.screenSizes.sm}) {
    padding: 1.1rem 0;
  }

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    margin-top: 15px;
    padding: 1.5rem;
    border-radius: 0.25rem;
    box-sizing: border-box;
    background-color: ${(props) =>
      props.theme['navbarDropdownContentBackgroundColor']};
    box-shadow: 0 10px 60px -10px ${(props) => props.theme['navbarDropdownContentShadowColor']},
      0 8px 16px ${(props) => props.theme['navbarDropdownContentShadowColor2']};

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
      border-bottom-color: ${(props) =>
        props.theme['navbarDropdownContentBackgroundColor']};
      border-width: 10px;
      margin-left: -10px;
    }

    &::before {
      border-color: transparent;
      border-bottom-color: ${(props) =>
        props.theme['navbarDropdownContentBackgroundColor']};
      border-width: 12px;
      margin-left: -12px;
    }
  }
`

type PropsType = {
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
