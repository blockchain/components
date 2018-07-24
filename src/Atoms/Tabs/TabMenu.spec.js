import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TabMenu from './TabMenu'

describe('TabMenu', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TabMenu>MyTabMenu</TabMenu>)

    expect(tree).toMatchSnapshot()
  })
})
