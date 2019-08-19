import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { interpolation } from '../Tools';
import Button, { Props, defaultProps } from './Button';

const MinimalButtonStyle = styled(Button)<Props>`
  background: ${interpolation.theme('button', 'minimalButtonBackgroundColor')};
  color: ${interpolation.theme('button', 'minimalButtonForegroundColor')};
  border-color: ${interpolation.theme('button', 'minimalButtonBorderColor')};

  &:disabled {
    background: ${interpolation.theme('button', 'minimalButtonDisabledBackgroundColor')};
    color: ${interpolation.theme('button', 'minimalButtonDisabledForegroundColor')};
    border-color: ${interpolation.theme('button', 'minimalButtonDisabledBorderColor')};
  }

  &:active,
  :focus {
    background: ${interpolation.theme('button', 'minimalButtonFocusedBackgroundColor')};
    color: ${interpolation.theme('button', 'minimalButtonFocusedForegroundColor')};
    border-color: ${interpolation.theme('button', 'minimalButtonFocusedBorderColor')};
  }

  &:hover {
    background: ${interpolation.theme('button', 'minimalButtonHoverBackgroundColor')};
    color: ${interpolation.theme('button', 'minimalButtonHoverForegroundColor')};
    border-color: ${interpolation.theme('button', 'minimalButtonHoverBorderColor')};

    &:disabled {
      background: ${interpolation.theme('button', 'minimalButtonDisabledBackgroundColor')};
      color: ${interpolation.theme('button', 'minimalButtonDisabledForegroundColor')};
      border-color: ${interpolation.theme('button', 'minimalButtonDisabledBorderColor')};
    }
  }
`;

const MinimalButton = (props: Props): ReactElement => <MinimalButtonStyle {...props} />;

MinimalButton.defaultProps = defaultProps;

export default MinimalButton;
