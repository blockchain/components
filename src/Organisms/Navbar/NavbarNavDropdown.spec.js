import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarNavDropdown from './NavbarNavDropdown'

describe('NavbarNavDropdown', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarNavDropdown />)

    expect(tree.find(NavbarNavDropdown)).toMatchSnapshot()
  })
})
