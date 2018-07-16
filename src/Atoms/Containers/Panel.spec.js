import React from 'react'
import { mount } from 'enzyme'

import Panel from './Panel'

describe('Panel', () => {
  it('should render correctly', () => {
    const tree = mount(<Panel>MyPanel</Panel>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mount(<Panel width="200px">MyPanel</Panel>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mount(<Panel height="200px">MyPanel</Panel>)

    expect(tree).toMatchSnapshot()
  })
})
