
  import React from 'react'
  import { mountWithTheme } from '../../../../Utils/testHelper'

  import Bitcoin from './Bitcoin'

  describe('Bitcoin', () => {
    it('should render correctly', () => {
      const tree = mountWithTheme(<Bitcoin />)
      expect(tree.find(Bitcoin)).toMatchSnapshot()
    })
  })
