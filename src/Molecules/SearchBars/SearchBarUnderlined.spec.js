/* eslint no-console: 0 */
import React from 'react'
import { shallow } from 'enzyme'

import SearchBarUnderlined from './SearchBarUnderlined'

const handleChange = () => console.log('change')
const handleClick = () => console.log('click')

describe('SearchBarUnderlined', () => {
  it('should render correctly', () => {
    const tree = shallow(<SearchBarUnderlined />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with value', () => {
    const tree = shallow(<SearchBarUnderlined value="My search" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with handleChange', () => {
    const tree = shallow(<SearchBarUnderlined handleChange={handleChange} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with handleClick', () => {
    const tree = shallow(<SearchBarUnderlined handleClick={handleClick} />)

    expect(tree).toMatchSnapshot()
  })
})
