
  import React from 'react'
  import { mountWithTheme } from '../../../../Utils/testHelper'

  import Transactions from './Transactions'

  describe('Transactions', () => {
    it('should render correctly', () => {
      const tree = mountWithTheme(<Transactions />)
      expect(tree.find(Transactions)).toMatchSnapshot()
    })
  })
