import React from 'react'
import { mount } from 'enzyme'

import TabMenuItem from './TabMenuItem'

describe('TabMenuItem', () => {
  it('should render correctly', () => {
    const tree = mount(<TabMenuItem>MyTabMenuItem</TabMenuItem>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly when selected', () => {
    const tree = mount(<TabMenuItem selected>MyTabMenuItem</TabMenuItem>)

    expect(tree).toMatchSnapshot()
  })
})
