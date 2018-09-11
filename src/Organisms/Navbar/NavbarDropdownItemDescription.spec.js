import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarDropdownItemDescription from './NavbarDropdownItemDescription'

describe('NavbarDropdownItemDescription', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarDropdownItemDescription />)

    expect(tree.find(NavbarDropdownItemDescription)).toMatchSnapshot()
  })
})
