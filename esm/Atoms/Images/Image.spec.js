import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import theme from '../../Tools/theme'
import Image from './Image'

describe('Image', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Image theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with name', () => {
    const tree = mountWithTheme(<Image name="brand" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<Image height="50px" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly width width', () => {
    const tree = mountWithTheme(<Image theme={theme} width="200px" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with selectable', () => {
    const tree = mountWithTheme(<Image selectable theme={theme} />)

    expect(tree).toMatchSnapshot()
  })
})
