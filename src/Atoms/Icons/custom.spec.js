import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import { BcBitcoin } from '.'

describe('bc', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<BcBitcoin />)

    expect(tree.find(BcBitcoin)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<BcBitcoin size="100px" />)

    expect(tree.find(BcBitcoin)).toMatchSnapshot()
  })

  it('should render correctly with selectable', () => {
    const tree = mountWithTheme(<BcBitcoin selectable />)

    expect(tree.find(BcBitcoin)).toMatchSnapshot()
  })
})
