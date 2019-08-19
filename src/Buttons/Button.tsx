import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { interpolation } from '../Tools';
import { FontSizeType } from 'src/Tools/theme/config';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonState = 'initial' | 'loading' | 'success';

export interface Props {
  children: React.ReactNode;
  disabled: boolean;
  fullscreen: boolean;
  size: ButtonSize;
  state: ButtonState;
  width: string;
}

export const defaultProps = {
  disabled: false,
  fullscreen: false,
  size: 'medium',
  state: 'initial',
  width: 'auto',
};

const selectFontSize = (size: ButtonSize): FontSizeType => {
  switch (size) {
    case 'small':
      return 'size3';
    case 'medium':
      return 'size5';
    case 'large':
      return 'size7';
  }
};

const selectPadding = (size: ButtonSize): string => {
  switch (size) {
    case 'small':
      return '0.25rem 0.5rem';
    case 'medium':
      return '0.5rem 1rem';
    case 'large':
      return '1rem 1.5rem';
  }
};

const ButtonStyle = styled.button<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  min-width: 100px;
  padding: ${(props: Props) => selectPadding(props.size)};
  box-sizing: border-box;
  width: ${(props: Props) => (props.fullscreen ? '100%' : props.width)};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  transition: 0.2s;
  cursor: ${(props: Props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-family: Inter, sans-serif;
  font-size: ${(props: Props) => interpolation.fontSize(selectFontSize(props.size))};
  font-weight: ${interpolation.fontWeight('weight6')};
`;

const Button = ({ children, state, ...rest }: Props): ReactElement => {
  switch (state) {
    case 'loading':
      return (
        <ButtonStyle state={state} {...rest}>
          Loading
        </ButtonStyle>
      );
    case 'success':
      return (
        <ButtonStyle state={state} {...rest}>
          Success
        </ButtonStyle>
      );
    case 'initial':
    default:
      return (
        <ButtonStyle state={state} {...rest}>
          {children}
        </ButtonStyle>
      );
  }
};

Button.defaultProps = defaultProps;

export default Button;
