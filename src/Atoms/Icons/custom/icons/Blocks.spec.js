
  import React from 'react'
  import { mountWithTheme } from '../../../../Utils/testHelper'

  import Blocks from './Blocks'

  describe('Blocks', () => {
    it('should render correctly', () => {
      const tree = mountWithTheme(<Blocks />)
      expect(tree.find(Blocks)).toMatchSnapshot()
    })
  })
