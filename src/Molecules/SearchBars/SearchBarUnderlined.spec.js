/* eslint no-console: 0 */
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import SearchBarUnderlined from './SearchBarUnderlined'

const handleChange = () => console.log('change')
const handleClick = () => console.log('click')

describe('SearchBarUnderlined component', () => {
  it('renders correctly', () => {
    const component = shallow(<SearchBarUnderlined />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with value', () => {
    const component = shallow(<SearchBarUnderlined value="My search" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with handleChange', () => {
    const component = shallow(
      <SearchBarUnderlined handleChange={handleChange} />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with handleClick', () => {
    const component = shallow(<SearchBarUnderlined handleClick={handleClick} />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
