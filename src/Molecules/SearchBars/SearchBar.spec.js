/* eslint no-console: 0 */
import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<SearchBar />)

    expect(tree.find(SearchBar)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(
      <SearchBar onChange={jest.fn()} value="My search" width="200px" />,
    )

    expect(tree.find(SearchBar)).toMatchSnapshot()
  })

  it('should render correctly with value', () => {
    const tree = mountWithTheme(
      <SearchBar onChange={jest.fn()} value="My search" />,
    )

    expect(tree.find(SearchBar)).toMatchSnapshot()
  })

  it('should render correctly with onChange', () => {
    const tree = mountWithTheme(<SearchBar onChange={jest.fn()} />)

    expect(tree.find(SearchBar)).toMatchSnapshot()
  })

  it('should render correctly with onClick', () => {
    const tree = mountWithTheme(<SearchBar onClick={jest.fn()} />)

    expect(tree.find(SearchBar)).toMatchSnapshot()
  })
})
