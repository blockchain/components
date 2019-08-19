import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import interpolation from '../Tools/interpolation';

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: ${interpolation.screenSize('sm')}) {
    position: absolute;
    width: auto;
    margin: 0.25rem 0;
    background-color: transparent;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  & > :last-child {
    margin-bottom: 0 !important;
  }
  @media (max-width: ${interpolation.screenSize('sm')}) {
    padding: 1.1rem 0;
  }
  @media (min-width: ${interpolation.screenSize('sm')}) {
    margin-top: 15px;
    padding: 1.5rem;
    border-radius: 0.25rem;
    box-sizing: border-box;
    background-color: ${interpolation.theme('navbar', 'navbarDropdownContentBackgroundColor')};
    box-shadow: 0 10px 60px -10px ${interpolation.theme('navbar', 'navbarDropdownContentShadowColor')},
      0 8px 16px ${interpolation.theme('navbar', 'navbarDropdownContentShadowColor2')};
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
      border-bottom-color: ${interpolation.theme('navbar', 'navbarDropdownContentBackgroundColor')};
      border-width: 10px;
      margin-left: -10px;
    }
    &::before {
      border-color: transparent;
      border-bottom-color: ${interpolation.theme('navbar', 'navbarDropdownContentBackgroundColor')};
      border-width: 12px;
      margin-left: -12px;
    }
  }
`;

interface Props {
  children: ReactNode;
}

const NavbarDropdownContent = ({ children, ...rest }: Props): ReactElement => (
  <Wrapper {...rest}>
    <Container>{children}</Container>
  </Wrapper>
);

export default NavbarDropdownContent;
