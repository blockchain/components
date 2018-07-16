import React from 'react'
import { mount } from 'enzyme'

import Background from './Background'

describe('Background', () => {
  it('should render correctly', () => {
    const tree = mount(<Background />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mount(<Background name="brand" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mount(<Background height="400px" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mount(<Background width="600px" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with stretch', () => {
    const tree = mount(<Background stretch />)

    expect(tree).toMatchSnapshot()
  })
})
