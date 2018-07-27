import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import theme from '../../Tools/theme'
import Icon from './Icon'

describe('Icon theme={theme}', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Icon theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with name', () => {
    const tree = mountWithTheme(<Icon name="ethereum" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with color', () => {
    const tree = mountWithTheme(<Icon color="gold" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<Icon size="72px" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with uppercase', () => {
    const tree = mountWithTheme(<Icon theme={theme} weight={400} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with selectable', () => {
    const tree = mountWithTheme(<Icon selectable theme={theme} />)

    expect(tree).toMatchSnapshot()
  })
})
