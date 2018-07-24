/* eslint no-console: 0 */
import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<SearchBar />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with value', () => {
    const tree = mountWithTheme(<SearchBar value="My search" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with borderColor', () => {
    const tree = mountWithTheme(<SearchBar borderColor="gold" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with handleChange', () => {
    const tree = mountWithTheme(<SearchBar handleChange={jest.fn()} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with handleClick', () => {
    const tree = mountWithTheme(<SearchBar handleClick={jest.fn()} />)

    expect(tree).toMatchSnapshot()
  })
})
