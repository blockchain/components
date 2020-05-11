import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import BrandLogoBlack from './BrandLogoBlack'

describe('BrandLogoBlack', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<BrandLogoBlack />)

    expect(tree.find(BrandLogoBlack)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<BrandLogoBlack size="100px" />)

    expect(tree.find(BrandLogoBlack)).toMatchSnapshot()
  })
})
