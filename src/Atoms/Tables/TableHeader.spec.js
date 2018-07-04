import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import TableHeader from './TableHeader'

describe('TableHeader component', () => {
  it('renders correctly', () => {
    const component = shallow(<TableHeader>MyTableHeader</TableHeader>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
