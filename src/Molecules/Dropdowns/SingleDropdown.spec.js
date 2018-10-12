import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import SingleDropdown from './SingleDropdown'

const items = [
  { text: 'Item1', value: 1 },
  { text: 'Item2', value: 2 },
  { text: 'Item3', value: 3 },
  { text: 'Item4', value: 4 },
  { text: 'Item5', value: 5 },
  { text: 'Item6', value: 6 },
  { text: 'Item7', value: 7 },
  { text: 'Item8', value: 8 },
  { text: 'Item9', value: 9 },
]

describe('SingleDropdown', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(
      <SingleDropdown items={items} onChange={jest.fn()} />,
    )

    expect(tree.find(SingleDropdown)).toMatchSnapshot()
  })

  it('should render correctly with capitalize', () => {
    const tree = mountWithTheme(
      <SingleDropdown capitalize items={items} onChange={jest.fn()} />,
    )

    expect(tree.find(SingleDropdown)).toMatchSnapshot()
  })

  it('should render correctly with inline', () => {
    const tree = mountWithTheme(
      <SingleDropdown inline items={items} onChange={jest.fn()} />,
    )

    expect(tree.find(SingleDropdown)).toMatchSnapshot()
  })

  it('should render correctly with italic', () => {
    const tree = mountWithTheme(
      <SingleDropdown italic items={items} onChange={jest.fn()} />,
    )

    expect(tree.find(SingleDropdown)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(
      <SingleDropdown items={items} onChange={jest.fn()} size="32px" />,
    )

    expect(tree.find(SingleDropdown)).toMatchSnapshot()
  })

  it('should render correctly with uppercase', () => {
    const tree = mountWithTheme(
      <SingleDropdown items={items} onChange={jest.fn()} uppercase />,
    )

    expect(tree.find(SingleDropdown)).toMatchSnapshot()
  })

  it('should render correctly with weight', () => {
    const tree = mountWithTheme(
      <SingleDropdown items={items} onChange={jest.fn()} weight={500} />,
    )

    expect(tree.find(SingleDropdown)).toMatchSnapshot()
  })
})
