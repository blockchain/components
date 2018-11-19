import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Modal from './Modal'

describe('Modal', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Modal />)

    expect(tree.find(Modal)).toMatchSnapshot()
  })
})
