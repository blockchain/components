import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Toast from './Toast'

describe('Toast', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Toast title="Hey! This is a default toast." />)

    expect(tree.find(Toast)).toMatchSnapshot()
  })

  it('should render correctly with description', () => {
    const tree = mountWithTheme(
      <Toast
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="This is a default toast."
      />,
    )

    expect(tree.find(Toast)).toMatchSnapshot()
  })

  it('should render correctly with type=danger', () => {
    const tree = mountWithTheme(
      <Toast
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="This is a default toast."
        type="danger"
      />,
    )

    expect(tree.find(Toast)).toMatchSnapshot()
  })

  it('should render correctly with type=success', () => {
    const tree = mountWithTheme(
      <Toast
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="This is a default toast."
        type="success"
      />,
    )

    expect(tree.find(Toast)).toMatchSnapshot()
  })

  it('should render correctly with type=warning', () => {
    const tree = mountWithTheme(
      <Toast
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="This is a default toast."
        type="warning"
      />,
    )

    expect(tree.find(Toast)).toMatchSnapshot()
  })
})
