import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import FlatLoader from './FlatLoader'

describe('FlatLoader', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<FlatLoader />)

    expect(tree.find(FlatLoader)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<FlatLoader width="100px" />)

    expect(tree.find(FlatLoader)).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<FlatLoader height="100px" />)

    expect(tree.find(FlatLoader)).toMatchSnapshot()
  })
})
