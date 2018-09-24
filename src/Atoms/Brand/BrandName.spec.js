import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import BrandName from './BrandName'

describe('BrandName', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<BrandName />)

    expect(tree.find(BrandName)).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<BrandName height="100px" />)

    expect(tree.find(BrandName)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<BrandName width="300px" />)

    expect(tree.find(BrandName)).toMatchSnapshot()
  })
})
