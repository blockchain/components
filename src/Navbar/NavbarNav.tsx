import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import interpolation from '../Tools/interpolation';

interface Props {
  children: ReactNode;
  order: string;
  toggled: boolean;
  width: string;
}

const Wrapper = styled.ul<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  order: ${props => props.order};
  flex-shrink: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;

  @media (max-width: ${interpolation.screenSize('sm')}) {
    & > li:first-child {
      border-top: none;
    }
  }

  @media (min-width: ${interpolation.screenSize('sm')}) {
    display: ${props => (props.toggled === true ? 'flex' : 'none')};
    flex-direction: row;
    align-items: center;
    order: initial;
    height: auto;
    width: ${props => props.width};
  }
`;

const NavbarNav = ({ children, ...rest }: Props): ReactElement => <Wrapper {...rest}>{children}</Wrapper>;

NavbarNav.defaultProps = {
  order: '0',
  toggled: true,
  width: '100%',
};

export default NavbarNav;
