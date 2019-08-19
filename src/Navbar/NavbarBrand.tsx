import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import interpolation from '../Tools/interpolation';

interface Props {
  children?: ReactNode;
  height?: string;
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  z-index: ${interpolation.theme('navbar', 'navbarBrandZIndex')};
`;

const NavbarBrand = ({ children, ...rest }: Props): ReactElement => <Wrapper {...rest}>{children}</Wrapper>;

NavbarBrand.defaultProps = {
  height: '60px',
};

export default NavbarBrand;
