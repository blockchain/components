import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import * as TabMenu from './TabMenu'

describe('TabMenu component', () => {
  it('renders correctly', () => {
    const component = shallow(
      <TabMenu.Container>
        <TabMenu.Item>Item 1</TabMenu.Item>
        <TabMenu.Item>Item 2</TabMenu.Item>
        <TabMenu.Item>Item 3</TabMenu.Item>
        <TabMenu.Item>Item 4</TabMenu.Item>
      </TabMenu.Container>
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with a selected item', () => {
    const component = shallow(
      <TabMenu.Container>
        <TabMenu.Item>Item 1</TabMenu.Item>
        <TabMenu.Item selected>Item 2</TabMenu.Item>
        <TabMenu.Item>Item 3</TabMenu.Item>
        <TabMenu.Item>Item 4</TabMenu.Item>
      </TabMenu.Container>
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
