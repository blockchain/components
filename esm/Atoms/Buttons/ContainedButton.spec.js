import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import ContainedButton from './ContainedButton'

describe('ContainedButton component', () => {
  it('renders correctly', () => {
    const component = shallow(<ContainedButton />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
