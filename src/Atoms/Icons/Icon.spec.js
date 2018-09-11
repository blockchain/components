import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Icon from './Icon'

describe('Icon', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Icon />)

    expect(tree.find(Icon)).toMatchSnapshot()
  })

  it('should render correctly with name', () => {
    const tree = mountWithTheme(<Icon name="ethereum" />)

    expect(tree.find(Icon)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<Icon size="72px" />)

    expect(tree.find(Icon)).toMatchSnapshot()
  })

  it('should render correctly with selectable', () => {
    const tree = mountWithTheme(<Icon selectable />)

    expect(tree.find(Icon)).toMatchSnapshot()
  })
})
