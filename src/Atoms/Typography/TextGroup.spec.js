import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Text from './Text'
import TextGroup from './TextGroup'

const Texts = () => (
  <React.Fragment>
    <Text>
      This is my first text. This is my first text. This is my first text. This
      is my first text.
    </Text>
    <Text>
      This is my second text. This is my second text. This is my second text.
      This is my second text.
    </Text>
    <Text>
      This is my third text. This is my third text. This is my third text. This
      is my third text.
    </Text>
    <Text>
      This is my fourth text. This is my fourth text. This is my fourth text.
      This is my fourth text.
    </Text>
    <Text>
      This is my fifth text. This is my fifth text. This is my fifth text. This
      is my fifth text.
    </Text>
    <Text>
      This is my sixth text. This is my sixth text. This is my sixth text. This
      is my sixth text.
    </Text>
    <Text>
      This is my seventh text. This is my seventh text. This is my seventh text.
      This is my seventh text.
    </Text>
  </React.Fragment>
)

describe('TextGroup', () => {
  it('mount render correctly', () => {
    const tree = mountWithTheme(
      <TextGroup>
        <Texts />
      </TextGroup>,
    )

    expect(tree.find(TextGroup)).toMatchSnapshot()
  })

  it('mount render correctly with align', () => {
    const tree = mountWithTheme(
      <TextGroup align="right">
        <Texts />
      </TextGroup>,
    )

    expect(tree.find(TextGroup)).toMatchSnapshot()
  })

  it('mount render correctly with inline', () => {
    const tree = mountWithTheme(
      <TextGroup inline={false}>
        <Texts />
      </TextGroup>,
    )

    expect(tree.find(TextGroup)).toMatchSnapshot()
  })
})
