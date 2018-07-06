/* eslint no-console: 0 */
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import SearchBar from './SearchBar'

const handleChange = () => console.log('change')
const handleClick = () => console.log('click')

describe('SearchBar component', () => {
  it('renders correctly', () => {
    const component = shallow(<SearchBar />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with value', () => {
    const component = shallow(<SearchBar value="My search" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with borderColor', () => {
    const component = shallow(<SearchBar borderColor="gold" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with handleChange', () => {
    const component = shallow(<SearchBar handleChange={handleChange} />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with handleClick', () => {
    const component = shallow(<SearchBar handleClick={handleClick} />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
