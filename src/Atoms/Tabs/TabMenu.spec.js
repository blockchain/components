import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import TabMenu from './TabMenu'

describe('TabMenu component', () => {
  it('renders correctly', () => {
    const component = shallow(<TabMenu>MyTabMenu</TabMenu>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
