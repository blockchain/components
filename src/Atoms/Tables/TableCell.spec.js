import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TableCell from './TableCell'

describe('TableCell', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TableCell>MyTableCell</TableCell>)

    expect(tree).toMatchSnapshot()
  })
})
