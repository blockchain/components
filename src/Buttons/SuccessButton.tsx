import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { interpolation } from '../Tools';
import Button, { defaultProps, Props } from './Button';

const SuccessButtonStyle = styled(Button)<Props>`
  background: ${interpolation.theme('button', 'successButtonBackgroundColor')};
  color: ${interpolation.theme('button', 'successButtonForegroundColor')};
  border-color: ${interpolation.theme('button', 'successButtonBorderColor')};

  &:disabled {
    background: ${interpolation.theme('button', 'successButtonDisabledBackgroundColor')};
    color: ${interpolation.theme('button', 'successButtonDisabledForegroundColor')};
    border-color: ${interpolation.theme('button', 'successButtonDisabledBorderColor')};
  }

  &:active,
  :focus {
    background: ${interpolation.theme('button', 'successButtonFocusedBackgroundColor')};
    color: ${interpolation.theme('button', 'successButtonFocusedForegroundColor')};
    border-color: ${interpolation.theme('button', 'successButtonFocusedBorderColor')};
  }

  &:hover {
    background: ${interpolation.theme('button', 'successButtonHoverBackgroundColor')};
    color: ${interpolation.theme('button', 'successButtonHoverForegroundColor')};
    border-color: ${interpolation.theme('button', 'successButtonHoverBorderColor')};

    &:disabled {
      background: ${interpolation.theme('button', 'successButtonDisabledBackgroundColor')};
      color: ${interpolation.theme('button', 'successButtonDisabledForegroundColor')};
      border-color: ${interpolation.theme('button', 'successButtonDisabledBorderColor')};
    }
  }
`;

const SuccessButton = (props: Props): ReactElement => <SuccessButtonStyle {...props} />;

SuccessButton.defaultProps = defaultProps;

export default SuccessButton;
