import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Table from './Table'

describe('Table', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Table>MyTable</Table>)

    expect(tree).toMatchSnapshot()
  })
})
