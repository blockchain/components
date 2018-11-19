import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import ModalHeader from './ModalHeader'

describe('ModalHeader', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<ModalHeader />)

    expect(tree.find(ModalHeader)).toMatchSnapshot()
  })
})
