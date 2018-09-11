import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Link from './Link'

describe('Link', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Link>MyLink</Link>)

    expect(tree.find(Link)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<Link size="32px">MyLink</Link>)

    expect(tree.find(Link)).toMatchSnapshot()
  })

  it('should render correctly with weight', () => {
    const tree = mountWithTheme(<Link weight={500}>MyLink</Link>)

    expect(tree.find(Link)).toMatchSnapshot()
  })

  it('should render correctly with uppercase', () => {
    const tree = mountWithTheme(<Link uppercase>MyLink</Link>)

    expect(tree.find(Link)).toMatchSnapshot()
  })

  it('should render correctly with capitalize', () => {
    const tree = mountWithTheme(<Link capitalize>MyLink</Link>)

    expect(tree.find(Link)).toMatchSnapshot()
  })

  it('should render correctly with italic', () => {
    const tree = mountWithTheme(<Link italic>MyLink</Link>)

    expect(tree.find(Link)).toMatchSnapshot()
  })

  it('should render correctly with opacity', () => {
    const tree = mountWithTheme(<Link opacity={0.5}>MyLink</Link>)

    expect(tree.find(Link)).toMatchSnapshot()
  })
})
