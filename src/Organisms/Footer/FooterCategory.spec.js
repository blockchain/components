import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import FooterCategory from './FooterCategory'

describe('FooterCategory', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<FooterCategory>FooterCategory</FooterCategory>)

    expect(tree.find(FooterCategory)).toMatchSnapshot()
  })
})
