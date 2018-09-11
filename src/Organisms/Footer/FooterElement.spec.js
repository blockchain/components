import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import FooterElement from './FooterElement'

describe('FooterElement', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<FooterElement>FooterElement</FooterElement>)

    expect(tree.find(FooterElement)).toMatchSnapshot()
  })
})
