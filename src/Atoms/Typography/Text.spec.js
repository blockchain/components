import React from 'react'
import { mount } from 'enzyme'

import Text from './Text'

describe('Text', () => {
  it('should render correctly', () => {
    const tree = mount(<Text>MyText</Text>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with color', () => {
    const tree = mount(<Text color="gold">MyText</Text>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mount(<Text size="32px">MyText</Text>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with weight', () => {
    const tree = mount(<Text weight={500}>MyText</Text>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with uppercase', () => {
    const tree = mount(<Text uppercase>MyText</Text>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with capitalize', () => {
    const tree = mount(<Text capitalize>MyText</Text>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with italic', () => {
    const tree = mount(<Text italic>MyText</Text>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with opacity', () => {
    const tree = mount(<Text opacity={0.5}>MyText</Text>)

    expect(tree).toMatchSnapshot()
  })
})
