import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Icon from './Icon'

describe('Icon component', () => {
  it('renders correctly', () => {
    const component = shallow(<Icon />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with name', () => {
    const component = shallow(<Icon name="ethereum" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with color', () => {
    const component = shallow(<Icon color="gold" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with size', () => {
    const component = shallow(<Icon size="72px" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with uppercase', () => {
    const component = shallow(<Icon weight={400} />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with selectable', () => {
    const component = shallow(<Icon selectable />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
