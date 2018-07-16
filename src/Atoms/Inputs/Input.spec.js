import React from 'react'
import { mount } from 'enzyme'

import Input from './Input'

describe('Input', () => {
  it('should render correctly', () => {
    const tree = mount(<Input />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with type', () => {
    const tree = mount(<Input type="password" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with borderColor', () => {
    const tree = mount(<Input borderColor="gold" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mount(<Input width="200px" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with disabled', () => {
    const tree = mount(<Input disabled />)

    expect(tree).toMatchSnapshot()
  })
})
