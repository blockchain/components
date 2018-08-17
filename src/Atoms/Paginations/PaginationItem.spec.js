import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import PaginationItem from './PaginationItem'

describe('PaginationItem', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<PaginationItem selected />)

    expect(tree).toMatchSnapshot()
  })
})
