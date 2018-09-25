import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TooltipHost from './TooltipHost'

describe('TooltipHost', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(
      <TooltipHost id="storybook.test">TooltipHost</TooltipHost>,
    )

    expect(tree.find(TooltipHost)).toMatchSnapshot()
  })

  it('should render correctly with tip', () => {
    const tree = mountWithTheme(
      <TooltipHost id="storybook.test" tip="test">
        TooltipHost
      </TooltipHost>,
    )

    expect(tree.find(TooltipHost)).toMatchSnapshot()
  })
})
