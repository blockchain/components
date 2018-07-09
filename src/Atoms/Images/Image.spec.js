import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Image from './Image'

describe('Image component', () => {
  it('renders correctly', () => {
    const component = shallow(<Image />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with name', () => {
    const component = shallow(<Image name="brand" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with height', () => {
    const component = shallow(<Image height="50px" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly width width', () => {
    const component = shallow(<Image width="200px" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with selectable', () => {
    const component = shallow(<Image selectable />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
