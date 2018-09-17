import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import BlockchainLoader from './BlockchainLoader'

describe('BlockchainLoader', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<BlockchainLoader />)

    expect(tree.find(BlockchainLoader)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<BlockchainLoader size="200px" />)

    expect(tree.find(BlockchainLoader)).toMatchSnapshot()
  })
})
