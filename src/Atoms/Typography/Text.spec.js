import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Text from './Text'

describe('Text component', () => {
  it('renders correctly', () => {
    const component = shallow(<Text>MyText</Text>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with color', () => {
    const component = shallow(<Text color='gold'>MyText</Text>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with size', () => {
    const component = shallow(<Text size='32px'>MyText</Text>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with weight', () => {
    const component = shallow(<Text weight={500}>MyText</Text>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with uppercase', () => {
    const component = shallow(<Text uppercase>MyText</Text>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with capitalize', () => {
    const component = shallow(<Text capitalize>MyText</Text>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with italic', () => {
    const component = shallow(<Text italic>MyText</Text>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with opacity', () => {
    const component = shallow(<Text opacity={0.5}>MyText</Text>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
