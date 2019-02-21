import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Navbar from './Navbar'

describe('Navbar', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Navbar />)

    expect(tree.find(Navbar)).toMatchSnapshot()
  })
})
