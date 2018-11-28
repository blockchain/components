/* eslint no-console: 0 */
import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import SearchBarUnderlined from './SearchBarUnderlined'

describe('SearchBarUnderlined', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<SearchBarUnderlined />)

    expect(tree.find(SearchBarUnderlined)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(
      <SearchBarUnderlined
        onChange={jest.fn()}
        value="My search"
        width="200px"
      />,
    )

    expect(tree.find(SearchBarUnderlined)).toMatchSnapshot()
  })

  it('should render correctly with value', () => {
    const tree = mountWithTheme(
      <SearchBarUnderlined onChange={jest.fn()} value="My search" />,
    )

    expect(tree.find(SearchBarUnderlined)).toMatchSnapshot()
  })

  it('should render correctly with e2e', () => {
    const tree = mountWithTheme(<SearchBarUnderlined e2e={null} />)

    expect(tree.find(SearchBarUnderlined)).toMatchSnapshot()
  })

  it('should render correctly with onChange', () => {
    const tree = mountWithTheme(<SearchBarUnderlined onChange={jest.fn()} />)

    expect(tree.find(SearchBarUnderlined)).toMatchSnapshot()
  })

  it('should render correctly with onClick', () => {
    const tree = mountWithTheme(<SearchBarUnderlined onClick={jest.fn()} />)

    expect(tree.find(SearchBarUnderlined)).toMatchSnapshot()
  })
})
