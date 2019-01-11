import React from 'react'
import styled from 'styled-components'

import { mountWithTheme } from '../../Utils/testHelper'
import Tooltip from './Tooltip'

const Text = styled.div`
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  ${({ active }) => (active ? 'color: rebeccapurple' : 'color: black')};
  padding: 1rem;
  font-weight: 600;
`

const renderTrigger = (active) => <Text active={active}>Custom trigger!</Text>

describe('Tooltip', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  it('should render correctly', () => {
    const tree = mountWithTheme(<Tooltip text="My Tooltip">Content</Tooltip>)

    expect(tree.find(Tooltip)).toMatchSnapshot()
  })

  it('should cleanup body node', () => {
    const tree = mountWithTheme(<Tooltip text="My Tooltip">Content</Tooltip>)

    tree.find(Tooltip).simulate('mousemove')

    expect(document.body.childNodes).toHaveLength(1)
    expect(tree.find(Tooltip).state('active')).toBe(true)

    tree.unmount()

    expect(document.body.childNodes).toHaveLength(0)
  })

  it('should react to mouseleave', () => {
    const tree = mountWithTheme(
      <Tooltip placement="left" text="My Tooltip">
        Content
      </Tooltip>,
    )

    expect(tree.find(Tooltip).state('active')).toBe(false)

    tree.find(Tooltip).simulate('mousemove')
    tree.find(Tooltip).simulate('mouseleave')

    jest.runAllTimers()

    expect(tree.find(Tooltip).state('active')).toBe(false)
  })

  it('should render correctly with placement', () => {
    const tree = mountWithTheme(
      <Tooltip placement="left" text="My Tooltip">
        Content
      </Tooltip>,
    )

    expect(tree.find(Tooltip)).toMatchSnapshot()
  })

  it('should render correctly with renderTrigger', () => {
    const tree = mountWithTheme(
      <Tooltip placement="bottom" renderTrigger={renderTrigger}>
        Custom renderTrigger prop
      </Tooltip>,
    )

    expect(tree.find(Tooltip)).toMatchSnapshot()
  })
})
