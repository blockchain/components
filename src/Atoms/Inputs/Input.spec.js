import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Input from './Input'

describe('Input', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Input />)

    expect(tree.find(Input)).toMatchSnapshot()
  })

  it('should render correctly with type', () => {
    const tree = mountWithTheme(<Input type="password" />)

    expect(tree.find(Input)).toMatchSnapshot()
  })

  it('should render correctly with error="error"', () => {
    const tree = mountWithTheme(<Input error="error" />)

    expect(tree.find(Input)).toMatchSnapshot()
  })

  it('should render correctly with label="label"', () => {
    const tree = mountWithTheme(<Input label="label" />)

    expect(tree.find(Input)).toMatchSnapshot()
  })

  it('should render correctly with label="label" and disabled', () => {
    const tree = mountWithTheme(<Input disabled label="label" />)

    expect(tree.find(Input)).toMatchSnapshot()
  })

  it('should render correctly with label="label" and error="error"', () => {
    const tree = mountWithTheme(<Input error="error" label="label" />)

    expect(tree.find(Input)).toMatchSnapshot()
  })

  it('should render correctly with type="checkbox"', () => {
    const tree = mountWithTheme(<Input type="checkbox" />)

    expect(tree.find(Input)).toMatchSnapshot()
  })

  it('should render correctly with type="radio"', () => {
    const tree = mountWithTheme(<Input type="radio" />)

    expect(tree.find(Input)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<Input width="200px" />)

    expect(tree.find(Input)).toMatchSnapshot()
  })

  it('should render correctly with disabled', () => {
    const tree = mountWithTheme(<Input disabled />)

    expect(tree.find(Input)).toMatchSnapshot()
  })
})
