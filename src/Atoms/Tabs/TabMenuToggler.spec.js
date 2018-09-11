import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TabMenuToggler from './TabMenuToggler'

describe('TabMenuToggler', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TabMenuToggler />)

    expect(tree.find(TabMenuToggler)).toMatchSnapshot()
  })
})
