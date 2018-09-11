import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Text from './Text'

describe('Text', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Text>MyText</Text>)

    expect(tree.find(Text)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<Text size="32px">MyText</Text>)

    expect(tree.find(Text)).toMatchSnapshot()
  })

  it('should render correctly with weight', () => {
    const tree = mountWithTheme(<Text weight={500}>MyText</Text>)

    expect(tree.find(Text)).toMatchSnapshot()
  })

  it('should render correctly with uppercase', () => {
    const tree = mountWithTheme(<Text uppercase>MyText</Text>)

    expect(tree.find(Text)).toMatchSnapshot()
  })

  it('should render correctly with capitalize', () => {
    const tree = mountWithTheme(<Text capitalize>MyText</Text>)

    expect(tree.find(Text)).toMatchSnapshot()
  })

  it('should render correctly with italic', () => {
    const tree = mountWithTheme(<Text italic>MyText</Text>)

    expect(tree.find(Text)).toMatchSnapshot()
  })

  it('should render correctly with opacity', () => {
    const tree = mountWithTheme(<Text opacity={0.5}>MyText</Text>)

    expect(tree.find(Text)).toMatchSnapshot()
  })
})
