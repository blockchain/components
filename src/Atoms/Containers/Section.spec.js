import React from 'react'
import { mount } from 'enzyme'

import Section from './Section'

describe('Section', () => {
  it('should render correctly', () => {
    const tree = mount(<Section>MySection</Section>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mount(<Section width="200px">MySection</Section>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mount(<Section height="200px">MySection</Section>)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with color', () => {
    const tree = mount(<Section color="gold">MySection</Section>)

    expect(tree).toMatchSnapshot()
  })
})
