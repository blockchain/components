import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import FooterGroup from './FooterGroup'

describe('FooterGroup', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<FooterGroup>FooterGroup</FooterGroup>)

    expect(tree.find(FooterGroup)).toMatchSnapshot()
  })
})
