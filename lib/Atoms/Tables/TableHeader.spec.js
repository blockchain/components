import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TableHeader from './TableHeader'

describe('TableHeader', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TableHeader>MyTableHeader</TableHeader>)

    expect(tree).toMatchSnapshot()
  })
})
