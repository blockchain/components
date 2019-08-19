import React, { Fragment, ReactElement } from 'react';

import { storiesOf } from '@storybook/react';
import {
  Navbar,
  NavbarBrand,
  NavbarDropdownContent,
  NavbarDropdownHeader,
  NavbarDropdownItem,
  NavbarDropdownItemDescription,
  NavbarDropdownItemTitle,
  NavbarHeader,
  NavbarMenu,
  NavbarNav,
  NavbarNavDropdown,
  NavbarNavItem,
} from '.';

const SmallContent = (): ReactElement => (
  <Fragment>
    {[1, 2, 3].map(value => (
      <NavbarDropdownItem key={value}>
        <NavbarDropdownItemTitle>Link {value}</NavbarDropdownItemTitle>
        <NavbarDropdownItemDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </NavbarDropdownItemDescription>
      </NavbarDropdownItem>
    ))}
  </Fragment>
);

// const BigContent = () => (
//     <React.Fragment>
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => (
//             <NavbarDropdownItem key={value}>
//                 <NavbarDropdownItemTitle>Link {value}</NavbarDropdownItemTitle>
//                 <NavbarDropdownItemDescription>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </NavbarDropdownItemDescription>
//             </NavbarDropdownItem>
//         ))}
//     </React.Fragment>
// )

storiesOf('Navbar/Example 1', module).add('default (Closed on mobile)', () => (
  <Navbar>
    <NavbarHeader>
      <NavbarBrand>
        Blockchain
        {/* <BrandName width="175px" /> */}
      </NavbarBrand>
    </NavbarHeader>
    <NavbarMenu>
      <NavbarNav width="auto">
        <NavbarNavDropdown>
          <NavbarDropdownHeader>Header 1</NavbarDropdownHeader>
          <NavbarDropdownContent>
            <SmallContent />
          </NavbarDropdownContent>
        </NavbarNavDropdown>
        <NavbarNavDropdown>
          <NavbarDropdownHeader>Header 2</NavbarDropdownHeader>
          <NavbarDropdownContent>
            <SmallContent />
          </NavbarDropdownContent>
        </NavbarNavDropdown>
      </NavbarNav>
      <NavbarNav width="auto">
        <NavbarNavItem>Button</NavbarNavItem>
      </NavbarNav>
    </NavbarMenu>
    {/* <NavbarToggler /> */}
  </Navbar>
));
