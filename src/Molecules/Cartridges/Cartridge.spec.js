import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Cartridge from './Cartridge'

describe('Cartridge component', () => {
  it('renders correctly', () => {
    const component = shallow(<Cartridge />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with nature', () => {
    const component = shallow(<Cartridge nature="secondary" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
