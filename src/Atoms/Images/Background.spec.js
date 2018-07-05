import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Background from './Background'

describe('Background component', () => {
  it('renders correctly', () => {
    const component = shallow(<Background />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with width', () => {
    const component = shallow(<Background name='buy-sell-sell-bch' />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with height', () => {
    const component = shallow(<Background height='400px' />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with width', () => {
    const component = shallow(<Background width='600px' />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with stretch', () => {
    const component = shallow(<Background stretch />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
