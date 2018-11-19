import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TextArea from './TextArea'

describe('TextArea', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TextArea />)
    expect(tree.find(TextArea)).toMatchSnapshot()
  })

  it('should render correctly with disabled', () => {
    const tree = mountWithTheme(<TextArea disabled />)
    expect(tree.find(TextArea)).toMatchSnapshot()
  })

  it('should render correctly with e2e', () => {
    const tree = mountWithTheme(<TextArea e2e="E2ELabel" />)
    expect(tree.find(TextArea)).toMatchSnapshot()
  })

  it('should render correctly with height', () => {
    const tree = mountWithTheme(<TextArea height="200px" />)
    expect(tree.find(TextArea)).toMatchSnapshot()
  })

  it('should render correctly with name', () => {
    const tree = mountWithTheme(<TextArea name="mytextarea" />)
    expect(tree.find(TextArea)).toMatchSnapshot()
  })

  it('should render correctly with value', () => {
    const tree = mountWithTheme(<TextArea value="Hello dear friend" />)
    expect(tree.find(TextArea)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<TextArea width="200px" />)
    expect(tree.find(TextArea)).toMatchSnapshot()
  })
})
