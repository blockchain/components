/* eslint no-console: 0 */
import React from 'react'
import { shallow } from 'enzyme'

import SearchBar from './SearchBar'

const handleChange = () => console.log('change')
const handleClick = () => console.log('click')

describe('SearchBar', () => {
  it('should render correctly', () => {
    const tree = shallow(<SearchBar />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with value', () => {
    const tree = shallow(<SearchBar value="My search" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with borderColor', () => {
    const tree = shallow(<SearchBar borderColor="gold" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with handleChange', () => {
    const tree = shallow(<SearchBar handleChange={handleChange} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with handleClick', () => {
    const tree = shallow(<SearchBar handleClick={handleClick} />)

    expect(tree).toMatchSnapshot()
  })
})
