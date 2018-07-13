import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Input from './Input'

describe('Input component', () => {
  it('renders correctly', () => {
    const component = shallow(<Input />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with type', () => {
    const component = shallow(<Input type="password" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with borderColor', () => {
    const component = shallow(<Input borderColor="gold" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with width', () => {
    const component = shallow(<Input width="200px" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with disabled', () => {
    const component = shallow(<Input disabled />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
