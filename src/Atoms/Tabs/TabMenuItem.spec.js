import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TabMenuItem from './TabMenuItem'

describe('TabMenuItem', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TabMenuItem>MyTabMenuItem</TabMenuItem>)

    expect(tree.find(TabMenuItem)).toMatchSnapshot()
  })

  it('should render correctly when selected', () => {
    const tree = mountWithTheme(
      <TabMenuItem selected>MyTabMenuItem</TabMenuItem>,
    )

    expect(tree.find(TabMenuItem)).toMatchSnapshot()
  })
})
