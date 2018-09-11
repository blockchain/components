import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarBrand from './NavbarBrand'

describe('NavbarBrand', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarBrand />)

    expect(tree.find(NavbarBrand)).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<NavbarBrand height="60px" />)

    expect(tree.find(NavbarBrand)).toMatchSnapshot()
  })
})
