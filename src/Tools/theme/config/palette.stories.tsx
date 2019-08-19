import React from 'react';
import styled from 'styled-components';
import { equals, keys, sum, values } from 'ramda';
import { parseToRgb } from 'polished';
import { storiesOf } from '@storybook/react';
import { defaultPalette, PaletteType } from '.';

const thresholdColor = Math.trunc((255 * 3) / 2);

const selectReadableColor = (color: PaletteType): string => {
  const colorValue = defaultPalette[color];
  return equals('transparent', color)
    ? 'black'
    : sum(values(parseToRgb(colorValue))) < thresholdColor
    ? 'white'
    : 'black';
};

interface ColorProps {
  backgroundColor: string;
  textColor: string;
}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
`;
const Color = styled.div<ColorProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: ${(props): string => props.backgroundColor};
  width: 10%;
  height: 100px;
  border: 1px solid #fff;
  box-sizing: border-box;
  color: ${(props): string => props.textColor};
`;
const ColorName = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
const ColorHex = styled.span`
  font-size: 0.8rem;
`;

const PaletteStory = (): JSX.Element => (
  <Layout>
    {keys(defaultPalette).map(
      (color: PaletteType): JSX.Element => (
        <Color backgroundColor={defaultPalette[color]} textColor={selectReadableColor(color)} key={color}>
          <ColorName>{color}</ColorName>
          <ColorHex>{defaultPalette[color]}</ColorHex>
        </Color>
      ),
    )}
  </Layout>
);

storiesOf('Config/Palette', module).add('default', (): JSX.Element => <PaletteStory />);
