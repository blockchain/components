import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import BrandLogo from './BrandLogo'

describe('BrandLogo', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<BrandLogo />)

    expect(tree.find(BrandLogo)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<BrandLogo size="100px" />)

    expect(tree.find(BrandLogo)).toMatchSnapshot()
  })
})
