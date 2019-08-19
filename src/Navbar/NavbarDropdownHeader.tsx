import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import interpolation from '../Tools/interpolation';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.span`
  font-family: Inter, sans-serif;
  font-size: ${interpolation.fontSize('size5')};
  font-weight: ${interpolation.fontWeight('weight5')};
  color: ${interpolation.theme('navbar', 'navbarDropdownHeaderColor')};
  cursor: pointer;
  display: none;

  @media (min-width: ${interpolation.screenSize('sm')}) {
    display: block;
  }
`;

const NavbarDropdownHeader = ({ children, ...rest }: Props): ReactElement => <Wrapper {...rest}>{children}</Wrapper>;

export default NavbarDropdownHeader;
