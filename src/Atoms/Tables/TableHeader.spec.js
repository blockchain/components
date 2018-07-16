import React from 'react'
import { mount } from 'enzyme'

import TableHeader from './TableHeader'

describe('TableHeader', () => {
  it('should render correctly', () => {
    const tree = mount(<TableHeader>MyTableHeader</TableHeader>)

    expect(tree).toMatchSnapshot()
  })
})
