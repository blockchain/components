import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  z-index: 10;

  @media (min-width: 768px) {
    position: absolute;
    width: auto;
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

  @media (min-width: 768px) {
    margin-top: 15px;
    padding: 30px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: ${(props) =>
      props.theme['navbarDropdownContentBackgroundColor']};
    border: 1px solid
      ${(props) => props.theme['navbarDropdownContentBackgroundColor']};
    box-shadow: 0 0 15px 0
      ${(props) => props.theme['navbarDropdownContentShadowColor']};

    &::after,
    &::before {
      bottom: 100%;
      left: 15%;
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

const NavbarDropdownContent = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <Container>{children}</Container>
  </Wrapper>
)

NavbarDropdownContent.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownContent
