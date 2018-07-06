import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Section from './Section'

describe('Section component', () => {
  it('renders correctly', () => {
    const component = shallow(<Section>MySection</Section>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with width', () => {
    const component = shallow(<Section width="200px">MySection</Section>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with height', () => {
    const component = shallow(<Section height="200px">MySection</Section>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with color', () => {
    const component = shallow(<Section color="gold">MySection</Section>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
