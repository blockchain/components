import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import CircleBadge from './CircleBadge'

describe('CircleBadge', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<CircleBadge />)

    expect(tree.find(CircleBadge)).toMatchSnapshot()
  })

  it('should render correctly with name facebook', () => {
    const tree = mountWithTheme(<CircleBadge name="facebook" />)

    expect(tree.find(CircleBadge)).toMatchSnapshot()
  })

  it('should render correctly with name linkedin', () => {
    const tree = mountWithTheme(<CircleBadge name="linkedin" />)

    expect(tree.find(CircleBadge)).toMatchSnapshot()
  })

  it('should render correctly with name twitter', () => {
    const tree = mountWithTheme(<CircleBadge name="twitter" />)

    expect(tree.find(CircleBadge)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<CircleBadge size="80px" />)

    expect(tree.find(CircleBadge)).toMatchSnapshot()
  })
})
