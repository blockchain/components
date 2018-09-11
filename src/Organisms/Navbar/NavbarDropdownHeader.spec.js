import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarDropdownHeader from './NavbarDropdownHeader'

describe('NavbarDropdownHeader', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarDropdownHeader />)

    expect(tree.find(NavbarDropdownHeader)).toMatchSnapshot()
  })
})
