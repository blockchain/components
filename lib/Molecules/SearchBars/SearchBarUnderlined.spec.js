/* eslint no-console: 0 */
import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import SearchBarUnderlined from './SearchBarUnderlined'

describe('SearchBarUnderlined', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<SearchBarUnderlined />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with value', () => {
    const tree = mountWithTheme(<SearchBarUnderlined value="My search" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with handleChange', () => {
    const tree = mountWithTheme(
      <SearchBarUnderlined handleChange={jest.fn()} />,
    )

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with handleClick', () => {
    const tree = mountWithTheme(<SearchBarUnderlined handleClick={jest.fn()} />)

    expect(tree).toMatchSnapshot()
  })
})
