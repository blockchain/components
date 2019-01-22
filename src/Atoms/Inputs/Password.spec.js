import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Password from './Password'

describe('Password', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Password />)

    expect(tree.find(Password)).toMatchSnapshot()
  })

  it('should render correctly with type', () => {
    const tree = mountWithTheme(<Password type="password" />)

    expect(tree.find(Password)).toMatchSnapshot()
  })

  it('should render correctly with error="error"', () => {
    const tree = mountWithTheme(<Password error="error" />)

    expect(tree.find(Password)).toMatchSnapshot()
  })

  it('should render correctly with label="label"', () => {
    const tree = mountWithTheme(<Password label="label" />)

    expect(tree.find(Password)).toMatchSnapshot()
  })

  it('should render correctly with label="label" and disabled', () => {
    const tree = mountWithTheme(<Password disabled label="label" />)

    expect(tree.find(Password)).toMatchSnapshot()
  })

  it('should render correctly with label="label" and error="error"', () => {
    const tree = mountWithTheme(<Password error="error" label="label" />)

    expect(tree.find(Password)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<Password width="200px" />)

    expect(tree.find(Password)).toMatchSnapshot()
  })

  it('should render correctly with disabled', () => {
    const tree = mountWithTheme(<Password disabled />)

    expect(tree.find(Password)).toMatchSnapshot()
  })

  it('should render correctly with switching its type', () => {
    const tree = mountWithTheme(<Password />)

    tree.find('svg').simulate('click')

    expect(tree.find(Password)).toMatchSnapshot()

    tree.find('svg').simulate('click')

    expect(tree.find(Password)).toMatchSnapshot()
  })
})
