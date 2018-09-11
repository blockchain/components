import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Panel from './Panel'

describe('Panel', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Panel>MyPanel</Panel>)

    expect(tree.find(Panel)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<Panel width="200px">MyPanel</Panel>)

    expect(tree.find(Panel)).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<Panel height="200px">MyPanel</Panel>)

    expect(tree.find(Panel)).toMatchSnapshot()
  })
})
