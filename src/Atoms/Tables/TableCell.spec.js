import React from 'react'
import { mount } from 'enzyme'

import TableCell from './TableCell'

describe('TableCell', () => {
  it('should render correctly', () => {
    const tree = mount(<TableCell>MyTableCell</TableCell>)

    expect(tree).toMatchSnapshot()
  })
})
