import React from 'react'
import { mount } from 'enzyme'

import TableRow from './TableRow'

describe('TableRow', () => {
  it('should render correctly', () => {
    const tree = mount(<TableRow>MyTableRow</TableRow>)

    expect(tree).toMatchSnapshot()
  })
})
