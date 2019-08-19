import React, { ReactElement } from 'react';
import styled from 'styled-components';
import interpolation from '../Tools/interpolation';

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
  background: ${interpolation.theme('navbar', 'navbarBackgroundColor')};
`;

const Navbar = ({ children, ...rest }: Props): ReactElement => <Wrapper {...rest}>{children}</Wrapper>;

export default Navbar;
