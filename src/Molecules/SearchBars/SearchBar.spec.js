import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import SearchBar from './SearchBar'

describe('SearchBar component', () => {
  it('renders correctly', () => {
    const component = shallow(<SearchBar />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with borderColor', () => {
    const component = shallow(<SearchBar borderColor='gold' />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
