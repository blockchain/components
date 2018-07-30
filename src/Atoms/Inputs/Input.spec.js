import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Input from './Input'

describe('Input', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Input />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with type', () => {
    const tree = mountWithTheme(<Input type="password" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<Input width="200px" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with disabled', () => {
    const tree = mountWithTheme(<Input disabled />)

    expect(tree).toMatchSnapshot()
  })
})
