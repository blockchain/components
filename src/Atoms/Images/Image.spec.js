import React from 'react'
import { mount } from 'enzyme'

import theme from '../../Tools/theme'
import Image from './Image'

describe('Image', () => {
  it('should render correctly', () => {
    const tree = mount(<Image theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with name', () => {
    const tree = mount(<Image name="brand" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mount(<Image height="50px" theme={theme} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly width width', () => {
    const tree = mount(<Image theme={theme} width="200px" />)

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with selectable', () => {
    const tree = mount(<Image selectable theme={theme} />)

    expect(tree).toMatchSnapshot()
  })
})
