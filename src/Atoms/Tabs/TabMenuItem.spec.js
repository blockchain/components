import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import TabMenuItem from './TabMenuItem'

describe('TabMenuItem component', () => {
  it('renders correctly', () => {
    const component = shallow(<TabMenuItem>MyTabMenuItem</TabMenuItem>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when selected', () => {
    const component = shallow(<TabMenuItem selected>MyTabMenuItem</TabMenuItem>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
