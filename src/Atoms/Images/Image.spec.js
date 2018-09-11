import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Image from './Image'

describe('Image', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Image />)

    expect(tree.find(Image)).toMatchSnapshot()
  })

  it('should render correctly with name', () => {
    const tree = mountWithTheme(<Image name="brand" />)

    expect(tree.find(Image)).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<Image height="50px" />)

    expect(tree.find(Image)).toMatchSnapshot()
  })

  it('should render correctly width width', () => {
    const tree = mountWithTheme(<Image width="200px" />)

    expect(tree.find(Image)).toMatchSnapshot()
  })

  it('should render correctly with selectable', () => {
    const tree = mountWithTheme(<Image selectable />)

    expect(tree.find(Image)).toMatchSnapshot()
  })
})
