import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Panel from './Panel'

describe('Panel component', () => {
  it('renders correctly', () => {
    const component = shallow(<Panel>MyPanel</Panel>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with width', () => {
    const component = shallow(<Panel width="200px">MyPanel</Panel>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with height', () => {
    const component = shallow(<Panel height="200px">MyPanel</Panel>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
