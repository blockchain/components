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
    const tree = mountWithTheme(
      <SearchBarUnderlined onChange={jest.fn()} value="My search" />,
    )

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with onChange', () => {
    const tree = mountWithTheme(<SearchBarUnderlined onChange={jest.fn()} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with onClick', () => {
    const tree = mountWithTheme(<SearchBarUnderlined onClick={jest.fn()} />)

    expect(tree).toMatchSnapshot()
  })
})
