import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { interpolation } from '../Tools';
import Button, { defaultProps, Props } from './Button';

const PrimaryButtonStyle = styled(Button)<Props>`
  background: ${interpolation.theme('button', 'primaryButtonBackgroundColor')};
  color: ${interpolation.theme('button', 'primaryButtonForegroundColor')};
  border-color: ${interpolation.theme('button', 'primaryButtonBorderColor')};

  &:disabled {
    background: ${interpolation.theme('button', 'primaryButtonDisabledBackgroundColor')};
    color: ${interpolation.theme('button', 'primaryButtonDisabledForegroundColor')};
    border-color: ${interpolation.theme('button', 'primaryButtonDisabledBorderColor')};
  }

  &:active,
  :focus {
    background: ${interpolation.theme('button', 'primaryButtonFocusedBackgroundColor')};
    color: ${interpolation.theme('button', 'primaryButtonFocusedForegroundColor')};
    border-color: ${interpolation.theme('button', 'primaryButtonFocusedBorderColor')};
  }

  &:hover {
    background: ${interpolation.theme('button', 'primaryButtonHoverBackgroundColor')};
    color: ${interpolation.theme('button', 'primaryButtonHoverForegroundColor')};
    border-color: ${interpolation.theme('button', 'primaryButtonHoverBorderColor')};

    &:disabled {
      background: ${interpolation.theme('button', 'primaryButtonDisabledBackgroundColor')};
      color: ${interpolation.theme('button', 'primaryButtonDisabledForegroundColor')};
      border-color: ${interpolation.theme('button', 'primaryButtonDisabledBorderColor')};
    }
  }
`;

const PrimaryButton = (props: Props): ReactElement => <PrimaryButtonStyle {...props} />;

PrimaryButton.defaultProps = defaultProps;

export default PrimaryButton;
