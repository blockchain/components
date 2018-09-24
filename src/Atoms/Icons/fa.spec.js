import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import { FasArrowLeft } from '.'

describe('fa', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<FasArrowLeft />)

    expect(tree.find(FasArrowLeft)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<FasArrowLeft size="100px" />)

    expect(tree.find(FasArrowLeft)).toMatchSnapshot()
  })

  it('should render correctly with selectable', () => {
    const tree = mountWithTheme(<FasArrowLeft selectable />)

    expect(tree.find(FasArrowLeft)).toMatchSnapshot()
  })
})
