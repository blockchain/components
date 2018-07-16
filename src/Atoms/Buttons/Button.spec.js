import React from 'react'
import { mount } from 'enzyme'

import theme from '../../Tools/theme'
import Button from './Button'

describe('Button component', () => {
  it('should render correctly', () => {
    const tree = mount(<Button theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should have a disabled state', () => {
    const tree = mount(<Button disabled theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should have a secondary style', () => {
    const tree = mount(<Button nature="secondary" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should have a type property', () => {
    const submit = mount(<Button theme={theme} type="submit" />)

    expect(submit).toMatchSnapshot()

    const reset = mount(<Button theme={theme} type="reset" />)

    expect(reset).toMatchSnapshot()
  })
})
