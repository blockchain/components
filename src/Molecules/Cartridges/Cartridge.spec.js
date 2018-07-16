import React from 'react'
import { shallow } from 'enzyme'

import Cartridge from './Cartridge'

describe('Cartridge', () => {
  it('should render correctly', () => {
    const tree = shallow(<Cartridge />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with nature', () => {
    const tree = shallow(<Cartridge nature="secondary" />)

    expect(tree).toMatchSnapshot()
  })
})
