import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Footer from './Footer'

describe('Footer', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Footer>Footer</Footer>)

    expect(tree.find(Footer)).toMatchSnapshot()
  })
})
