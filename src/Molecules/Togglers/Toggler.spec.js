import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Toggler from './Toggler'

describe('Toggler', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Toggler>Toggler</Toggler>)

    expect(tree).toMatchSnapshot()
  })
})
