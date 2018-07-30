import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Section from './Section'

describe('Section', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Section>MySection</Section>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<Section height="200px">MySection</Section>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with nature', () => {
    const tree = mountWithTheme(<Section nature="blocks">MySection</Section>)

    expect(tree).toMatchSnapshot()

    const tree2 = mountWithTheme(<Section nature="diamonds">MySection</Section>)

    expect(tree2).toMatchSnapshot()
  })
})
