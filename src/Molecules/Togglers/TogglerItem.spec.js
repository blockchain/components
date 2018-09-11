import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TogglerItem from './TogglerItem'

describe('TogglerItem', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TogglerItem>TogglerItem</TogglerItem>)

    expect(tree.find(TogglerItem)).toMatchSnapshot()
  })

  it('should render correctly with selected', () => {
    const tree = mountWithTheme(<TogglerItem selected>TogglerItem</TogglerItem>)

    expect(tree.find(TogglerItem)).toMatchSnapshot()
  })
})
