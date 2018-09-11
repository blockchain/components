import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import NavbarDropdownContent from './NavbarDropdownContent'

describe('NavbarDropdownContent', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarDropdownContent />)

    expect(tree.find(NavbarDropdownContent)).toMatchSnapshot()
  })
})
