import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import FlatLoader2 from './FlatLoader2'

describe('FlatLoader2', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<FlatLoader2 />)

    expect(tree.find(FlatLoader2)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<FlatLoader2 width="100px" />)

    expect(tree.find(FlatLoader2)).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<FlatLoader2 height="100px" />)

    expect(tree.find(FlatLoader2)).toMatchSnapshot()
  })
})
