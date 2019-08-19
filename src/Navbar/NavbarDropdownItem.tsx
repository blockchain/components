import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import interpolation from '../Tools/interpolation';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  height: 2.5rem;
  margin-bottom: 1.5rem;
  white-space: nowrap;
  text-decoration: none;
  @media (min-width: ${interpolation.screenSize('sm')}) {
    &:hover span:first-child {
      text-decoration: underline;
    }
  }
`;

const NavbarDropdownItem = ({ children, ...rest }: Props): ReactElement => <Wrapper {...rest}>{children}</Wrapper>;

export default NavbarDropdownItem;
