import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import Text from '../Typography/Text';
import interpolation from '../Tools/interpolation';

interface Props {
  children: ReactNode;
}

const Wrapper = styled(Text)`
  color: ${interpolation.theme('navbar', 'navbarDropdownTitleMobileColor')};

  @media (min-width: ${interpolation.screenSize('sm')}) {
    color: ${interpolation.theme('navbar', 'navbarDropdownTitleColor')};
  }
`;

const NavbarDropdownItemTitle = ({ children, ...rest }: Props): ReactElement => (
  <Wrapper size="size5" weight="weight5" {...rest}>
    {children}
  </Wrapper>
);

export default NavbarDropdownItemTitle;
