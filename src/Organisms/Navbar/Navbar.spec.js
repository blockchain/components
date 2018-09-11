import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Navbar from './Navbar'

describe('Navbar', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Navbar />)

    expect(tree.find(Navbar)).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<Navbar height="60px" />)

    expect(tree.find(Navbar)).toMatchSnapshot()
  })
})
