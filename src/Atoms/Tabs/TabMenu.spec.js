import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TabMenu from './TabMenu'

describe('TabMenu', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TabMenu>MyTabMenu</TabMenu>)

    expect(tree.find(TabMenu)).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<TabMenu height="200px">MyTabMenu</TabMenu>)

    expect(tree.find(TabMenu)).toMatchSnapshot()
  })

  it('should render correctly with toggled', () => {
    const tree = mountWithTheme(<TabMenu toggled>MyTabMenu</TabMenu>)

    expect(tree.find(TabMenu)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<TabMenu width="50%">MyTabMenu</TabMenu>)

    expect(tree.find(TabMenu)).toMatchSnapshot()
  })
})
