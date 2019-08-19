import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { interpolation } from '../Tools';
import Button, { Props, defaultProps } from './Button';

const ErrorButtonStyle = styled(Button)<Props>`
  background: ${interpolation.theme('button', 'errorButtonBackgroundColor')};
  color: ${interpolation.theme('button', 'errorButtonForegroundColor')};
  border-color: ${interpolation.theme('button', 'errorButtonBorderColor')};

  &:disabled {
    background: ${interpolation.theme('button', 'errorButtonDisabledBackgroundColor')};
    color: ${interpolation.theme('button', 'errorButtonDisabledForegroundColor')};
    border-color: ${interpolation.theme('button', 'errorButtonDisabledBorderColor')};
  }

  &:active,
  :focus {
    background: ${interpolation.theme('button', 'errorButtonFocusedBackgroundColor')};
    color: ${interpolation.theme('button', 'errorButtonFocusedForegroundColor')};
    border-color: ${interpolation.theme('button', 'errorButtonFocusedBorderColor')};
  }

  &:hover {
    background: ${interpolation.theme('button', 'errorButtonHoverBackgroundColor')};
    color: ${interpolation.theme('button', 'errorButtonHoverForegroundColor')};
    border-color: ${interpolation.theme('button', 'errorButtonHoverBorderColor')};

    &:disabled {
      background: ${interpolation.theme('button', 'errorButtonDisabledBackgroundColor')};
      color: ${interpolation.theme('button', 'errorButtonDisabledForegroundColor')};
      border-color: ${interpolation.theme('button', 'errorButtonDisabledBorderColor')};
    }
  }
`;

const ErrorButton = (props: Props): ReactElement => <ErrorButtonStyle {...props} />;

ErrorButton.defaultProps = defaultProps;

export default ErrorButton;
