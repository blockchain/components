import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Button from './Button'
import ButtonGroup from './ButtonGroup'

const Button1 = () => <Button>Button1</Button>
const Button2 = () => <Button>Button2</Button>
const Button3 = () => <Button>Button3</Button>

describe('Button', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(
      <ButtonGroup>
        <Button1 />
        <Button2 />
        <Button3 />
      </ButtonGroup>,
    )

    expect(tree.find(ButtonGroup)).toMatchSnapshot()
  })
})
