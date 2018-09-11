import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Pagination from './Pagination'

describe('Pagination', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Pagination />)

    expect(tree.find(Pagination)).toMatchSnapshot()
  })
})
