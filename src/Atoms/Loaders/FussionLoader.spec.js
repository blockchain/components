import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import FussionLoader from './FussionLoader'

describe('FussionLoader', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<FussionLoader />)

    expect(tree.find(FussionLoader)).toMatchSnapshot()
  })
})
