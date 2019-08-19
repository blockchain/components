import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import Text from '../Typography/Text';
import interpolation from '../Tools/interpolation';

interface Props {
  children: ReactNode;
}

const Wrapper = styled(Text)`
  color: ${interpolation.theme('navbar', 'navbarDropdownDescriptionMobileColor')};

  @media (min-width: ${interpolation.screenSize('sm')}) {
    color: ${interpolation.theme('navbar', 'navbarDropdownDescriptionColor')};
  }
`;

const NavbarDropdownItemDescription = ({ children, ...rest }: Props): ReactElement => (
  <Wrapper size="size4" weight="weight5" {...rest}>
    {children}
  </Wrapper>
);

export default NavbarDropdownItemDescription;
