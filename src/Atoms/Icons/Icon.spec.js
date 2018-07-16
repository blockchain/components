import React from 'react'
import { mount } from 'enzyme'

import theme from '../../Tools/theme'
import Icon from './Icon'

describe('Icon theme={theme}', () => {
  it('should render correctly', () => {
    const tree = mount(<Icon theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with name', () => {
    const tree = mount(<Icon name="ethereum" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with color', () => {
    const tree = mount(<Icon color="gold" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mount(<Icon size="72px" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with uppercase', () => {
    const tree = mount(<Icon theme={theme} weight={400} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with selectable', () => {
    const tree = mount(<Icon selectable theme={theme} />)

    expect(tree).toMatchSnapshot()
  })
})
