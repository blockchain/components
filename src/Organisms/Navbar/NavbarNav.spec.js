import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarNav from './NavbarNav'

describe('NavbarNav', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarNav />)

    expect(tree.find(NavbarNav)).toMatchSnapshot()
  })

  it('should render correctly with toggled', () => {
    const tree = mountWithTheme(<NavbarNav toggled />)

    expect(tree.find(NavbarNav)).toMatchSnapshot()
  })

  it('should render correctly with toggled', () => {
    const tree = mountWithTheme(<NavbarNav width="auto" />)

    expect(tree.find(NavbarNav)).toMatchSnapshot()
  })
})
