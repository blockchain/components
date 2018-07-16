import React from 'react'
import { mount } from 'enzyme'

import Table from './Table'

describe('Table', () => {
  it('should render correctly', () => {
    const tree = mount(<Table>MyTable</Table>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with highlighted', () => {
    const tree = mount(<Table>MyTable</Table>)

    expect(tree).toMatchSnapshot()
  })
})
