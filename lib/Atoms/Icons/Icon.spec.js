import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import theme from '../../Tools/theme'
import Icon from './Icon'

describe('Icon theme={theme}', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Icon />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with name', () => {
    const tree = mountWithTheme(<Icon name="ethereum" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<Icon size="72px" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with uppercase', () => {
    const tree = mountWithTheme(<Icon weight={400} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with selectable', () => {
    const tree = mountWithTheme(<Icon selectable />)

    expect(tree).toMatchSnapshot()
  })
})
