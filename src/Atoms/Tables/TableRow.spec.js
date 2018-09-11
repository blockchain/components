import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TableRow from './TableRow'

describe('TableRow', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TableRow>MyTableRow</TableRow>)

    expect(tree.find(TableRow)).toMatchSnapshot()
  })
})
