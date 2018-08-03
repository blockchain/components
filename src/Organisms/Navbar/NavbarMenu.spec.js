import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarMenu from './NavbarMenu'

describe('NavbarMenu', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarMenu />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with toggled', () => {
    const tree = mountWithTheme(<NavbarMenu toggled />)

    expect(tree).toMatchSnapshot()
  })
})
