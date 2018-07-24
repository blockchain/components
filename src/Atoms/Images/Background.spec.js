import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Background from './Background'

describe('Background', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Background />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<Background name="brand" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<Background height="400px" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<Background width="600px" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with stretch', () => {
    const tree = mountWithTheme(<Background stretch />)

    expect(tree).toMatchSnapshot()
  })
})
