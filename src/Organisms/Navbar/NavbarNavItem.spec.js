import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarNavItem from './NavbarNavItem'

describe('NavbarNavItem', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarNavItem />)

    expect(tree.find(NavbarNavItem)).toMatchSnapshot()
  })
})
