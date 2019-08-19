import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import interpolation from '../Tools/interpolation';

interface Props {
  children: ReactNode;
  maxHeight: string;
  toggled: boolean;
}

const Wrapper = styled.div<Props>`
  display: ${props => (props.toggled ? 'block' : 'none')};
  position: absolute;
  top: 4.5rem;
  left: 0;
  width: 100%;
  height: calc(${props => props.maxHeight} - 4.5rem);

  @media (min-width: ${interpolation.screenSize('sm')}) {
    display: block;
    position: relative;
    top: 0;
    width: calc(100% - 12rem);
    height: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  width: 100%;
  max-height: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
  box-sizing: border-box;
  background: ${interpolation.theme('navbar', 'navbarMenuBackgroundColor')};
  transform: translate3d(0, 0, 0);
  z-index: ${interpolation.theme('navbar', 'navbarMenuZIndex')};
  overflow-y: auto;

  @media (min-width: ${interpolation.screenSize('sm')}) {
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
`;

const NavbarMenu = ({ children, ...rest }: Props): ReactElement => (
  <Wrapper {...rest}>
    <Container>{children}</Container>
  </Wrapper>
);

NavbarMenu.defaultProps = {
  maxHeight: '80vh',
  toggled: false,
};

export default NavbarMenu;
