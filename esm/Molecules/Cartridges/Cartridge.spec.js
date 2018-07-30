import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Cartridge from './Cartridge'

describe('Cartridge', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Cartridge />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with capitalize', () => {
    const tree = mountWithTheme(<Cartridge capitalize />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with italic', () => {
    const tree = mountWithTheme(<Cartridge italic />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with opacity', () => {
    const tree = mountWithTheme(<Cartridge opacity={0.5} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<Cartridge size="18px" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with uppercase', () => {
    const tree = mountWithTheme(<Cartridge uppercase />)

    expect(tree).toMatchSnapshot()
  })
})
