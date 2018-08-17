import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TooltipHost from './TooltipHost'

describe('Tooltip', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(
      <TooltipHost id="storybook.test" tip="test">
        TooltipHost
      </TooltipHost>,
    )

    expect(tree).toMatchSnapshot()
  })
})
