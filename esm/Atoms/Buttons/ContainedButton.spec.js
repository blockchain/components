import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import ContainedButton from './ContainedButton'

describe('ContainedButton component', () => {
  it('renders correctly', () => {
    const tree = mountWithTheme(<ContainedButton />)
    expect(tree).toMatchSnapshot()
  })
})
