import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import HeartbeatLoader from './HeartbeatLoader'

describe('HeartbeatLoader', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<HeartbeatLoader />)

    expect(tree.find(HeartbeatLoader)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<HeartbeatLoader size="100px" />)

    expect(tree.find(HeartbeatLoader)).toMatchSnapshot()
  })
})
