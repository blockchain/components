import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Text from './Text'
import TextGroup from './TextGroup'

const Texts = () => (
  <React.Fragment>
    <Text>This is my first text. This is my first text. This is my first text. This is my first text.</Text>
    <Text>This is my second text. This is my second text. This is my second text. This is my second text.</Text>
    <Text>This is my third text. This is my third text. This is my third text. This is my third text.</Text>
    <Text>This is my fourth text. This is my fourth text. This is my fourth text. This is my fourth text.</Text>
    <Text>This is my fifth text. This is my fifth text. This is my fifth text. This is my fifth text.</Text>
    <Text>This is my sixth text. This is my sixth text. This is my sixth text. This is my sixth text.</Text>
    <Text>This is my seventh text. This is my seventh text. This is my seventh text. This is my seventh text.</Text>
  </React.Fragment>
)

describe('Text component', () => {
  it('renders correctly', () => {
    const component = shallow(<TextGroup><Texts /></TextGroup>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with align', () => {
    const component = shallow(<TextGroup align='right'><Texts /></TextGroup>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with inline', () => {
    const component = shallow(<TextGroup inline={false}><Texts /></TextGroup>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
