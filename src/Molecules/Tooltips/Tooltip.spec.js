import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Tooltip from './Tooltip'

describe('Tooltip', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Tooltip id="storybook.test">Tooltip</Tooltip>)

    expect(tree).toMatchSnapshot()
  })
})
