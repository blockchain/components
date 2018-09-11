import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarToggler from './NavbarToggler'

describe('NavbarToggler', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarToggler onToggle={jest.fn()} />)

    expect(tree.find(NavbarToggler)).toMatchSnapshot()
  })

  it('should render correctly with toggled', () => {
    const tree = mountWithTheme(<NavbarToggler onToggle={jest.fn()} toggled />)

    expect(tree.find(NavbarToggler)).toMatchSnapshot()
  })
})
