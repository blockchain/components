import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Card from './Card'

describe('Card component', () => {
  it('renders correctly', () => {
    const component = shallow(<Card>MyCard</Card>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
