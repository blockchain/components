import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import interpolation from '../Tools/interpolation';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.li`
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
  box-sizing: border-box;
  border-top: 0.5px solid ${interpolation.theme('navbar', 'navbarDropdownContentBorderColor')};

  @media (min-width: ${interpolation.screenSize('sm')}) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: auto;
    margin-right: 1rem;
    padding: 1rem;
    border-top: none;
  }
`;

const NavbarNavItem = ({ children, ...rest }: Props): ReactElement => <Wrapper {...rest}>{children}</Wrapper>;

export default NavbarNavItem;
