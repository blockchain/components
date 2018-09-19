
  import React from 'react'
  import { mountWithTheme } from '../../../../Utils/testHelper'

  import BitcoinCash from './BitcoinCash'

  describe('BitcoinCash', () => {
    it('should render correctly', () => {
      const tree = mountWithTheme(<BitcoinCash />)
      expect(tree.find(BitcoinCash)).toMatchSnapshot()
    })
  })
