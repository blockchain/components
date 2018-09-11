import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Container from './Container'

describe('Container', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Container>MyContainer</Container>)

    expect(tree.find(Container)).toMatchSnapshot()
  })
})
