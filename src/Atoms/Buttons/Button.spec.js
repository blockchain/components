import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Button from './Button'

describe('Button', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Button />)

    expect(tree).toMatchSnapshot()
  })

  it('should have a disabled state', () => {
    const tree = mountWithTheme(<Button disabled />)

    expect(tree).toMatchSnapshot()
  })

  it('should have a secondary style', () => {
    const tree = mountWithTheme(<Button nature="secondary" />)

    expect(tree).toMatchSnapshot()
  })

  it('should have a type property', () => {
    const submit = mountWithTheme(<Button type="submit" />)

    expect(submit).toMatchSnapshot()

    const reset = mountWithTheme(<Button type="reset" />)

    expect(reset).toMatchSnapshot()
  })
})
