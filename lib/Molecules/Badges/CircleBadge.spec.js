import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import CircleBadge from './CircleBadge'

describe('CircleBadge', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<CircleBadge url="http://www.blockchain.com" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with name', () => {
    const tree = mountWithTheme(
      <CircleBadge name="linkedIn" url="http://www.blockchain.com" />,
    )

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(
      <CircleBadge size="80px" url="http://www.blockchain.com" />,
    )

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with color', () => {
    const tree = mountWithTheme(
      <CircleBadge color="cerulean" url="http://www.blockchain.com" />,
    )

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with hoverColor', () => {
    const tree = mountWithTheme(
      <CircleBadge hoverColor="cerulean" url="http://www.blockchain.com" />,
    )

    expect(tree).toMatchSnapshot()
  })
})
