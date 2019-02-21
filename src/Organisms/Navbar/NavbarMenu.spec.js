import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarMenu from './NavbarMenu'

describe('NavbarMenu', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarMenu />)

    expect(tree.find(NavbarMenu)).toMatchSnapshot()
  })

  it('should render correctly with toggled', () => {
    const tree = mountWithTheme(<NavbarMenu toggled />)

    expect(tree.find(NavbarMenu)).toMatchSnapshot()
  })

  it('should render correctly with maxHeight', () => {
    const tree = mountWithTheme(<NavbarMenu maxHeight="60vh" />)

    expect(tree.find(NavbarMenu)).toMatchSnapshot()
  })
})
