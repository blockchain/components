import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarDropdownItemTitle from './NavbarDropdownItemTitle'

describe('NavbarDropdownItemTitle', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarDropdownItemTitle />)

    expect(tree.find(NavbarDropdownItemTitle)).toMatchSnapshot()
  })
})
