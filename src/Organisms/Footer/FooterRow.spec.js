import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import FooterRow from './FooterRow'

describe('FooterRow', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<FooterRow>FooterRow</FooterRow>)

    expect(tree.find(FooterRow)).toMatchSnapshot()
  })
})
