import React from 'react'
import { mount } from 'enzyme'

import TabMenu from './TabMenu'

describe('TabMenu', () => {
  it('should render correctly', () => {
    const tree = mount(<TabMenu>MyTabMenu</TabMenu>)

    expect(tree).toMatchSnapshot()
  })
})
