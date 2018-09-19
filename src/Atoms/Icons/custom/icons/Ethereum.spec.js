
  import React from 'react'
  import { mountWithTheme } from '../../../../Utils/testHelper'

  import Ethereum from './Ethereum'

  describe('Ethereum', () => {
    it('should render correctly', () => {
      const tree = mountWithTheme(<Ethereum />)
      expect(tree.find(Ethereum)).toMatchSnapshot()
    })
  })
