import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { parseToRgb } from 'polished'
import { equals, keysIn, sum, values } from 'ramda'

import palette from './palette'
import theme from './theme'

const thresholdColor = Math.trunc((255 * 3) / 2)

const selectReadableColor = (color) => {
  const colorValue = palette[color]
  return equals('transparent', color)
    ? 'black'
    : sum(values(parseToRgb(colorValue))) < thresholdColor
    ? 'white'
    : 'black'
}

const selectColors = (color) => ({
  background: palette[color],
  foreground: selectReadableColor(color),
})

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

  > * {
    margin-bottom: 10px;
    box-sizing: border-box;
  }
`
const Cell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 10%;
  padding: 2rem 1rem;
  box-sizing: border-box;
  background: ${(props) => props.background};
  color: ${(props) => props.foreground};

  & > :first-child {
    margin-bottom: 0.5rem;
    box-sizing: border-box;
  }
`
const ColorKey = styled.span`
  font-family: ${theme.fontPrimary};
  font-size: 1rem;
  font-weight: 700;
`
const ColorHex = styled.span`
  font-family: ${theme.fontPrimary};
  font-size: 0.7rem;
  font-weight: 400;
`

const Palette = () => (
  <Wrapper>
    {keysIn(palette).map((color) => (
      <Cell {...selectColors(color)} key={color}>
        <ColorKey>{color}</ColorKey>
        <ColorHex>{palette[color]}</ColorHex>
      </Cell>
    ))}
  </Wrapper>
)

storiesOf('palette', module).add('default', () => <Palette />)
