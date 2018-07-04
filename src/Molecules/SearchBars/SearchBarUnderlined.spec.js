import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import SearchBarUnderlined from './SearchBarUnderlined'

describe('SearchBarUnderlined component', () => {
  it('renders correctly', () => {
    const component = shallow(<SearchBarUnderlined />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with value', () => {
    const component = shallow(<SearchBarUnderlined value='My search' />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with handleChange', () => {
    const component = shallow(<SearchBarUnderlined handleChange={() => console.log('change')} />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with handleClick', () => {
    const component = shallow(<SearchBarUnderlined handleClick={() => console.log('click')} />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
