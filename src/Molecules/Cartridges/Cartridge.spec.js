import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Cartridge from './Cartridge'

describe('Cartridge', () => {
  it('should render correctly', () => {
    const item = <span />
    const tree = mountWithTheme(<Cartridge>{item}</Cartridge>)

    expect(tree.find(Cartridge)).toMatchSnapshot()
  })
})
