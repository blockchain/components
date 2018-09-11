import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TooltipIcon from './TooltipIcon'

describe('TooltipIcon', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TooltipIcon name="questionInCircle" />)

    expect(tree.find(TooltipIcon)).toMatchSnapshot()
  })
})
