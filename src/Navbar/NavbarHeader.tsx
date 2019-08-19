import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  margin-right: 25px;
`;

const NavbarHeader = ({ children, ...rest }: Props): ReactElement => <Wrapper {...rest}>{children}</Wrapper>;

export default NavbarHeader;
