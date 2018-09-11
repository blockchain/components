import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Button from './Button'

describe('Button', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Button />)

    expect(tree.find(Button)).toMatchSnapshot()
  })

  it('should have a bounced state', () => {
    const tree = mountWithTheme(<Button bounced />)

    expect(tree.find(Button)).toMatchSnapshot()
  })

  it('should have a disabled state', () => {
    const tree = mountWithTheme(<Button disabled />)

    expect(tree.find(Button)).toMatchSnapshot()
  })

  it('should have a type property', () => {
    const submit = mountWithTheme(<Button type="submit" />)

    expect(submit.find(Button)).toMatchSnapshot()

    const reset = mountWithTheme(<Button type="reset" />)

    expect(reset.find(Button)).toMatchSnapshot()
  })
})
