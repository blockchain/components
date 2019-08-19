import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { interpolation } from '../Tools';
import Button, { defaultProps, Props } from './Button';

const SecondaryButtonStyle = styled(Button)<Props>`
  background: ${interpolation.theme('button', 'secondaryButtonBackgroundColor')};
  color: ${interpolation.theme('button', 'secondaryButtonForegroundColor')};
  border-color: ${interpolation.theme('button', 'secondaryButtonBorderColor')};

  &:disabled {
    background: ${interpolation.theme('button', 'secondaryButtonDisabledBackgroundColor')};
    color: ${interpolation.theme('button', 'secondaryButtonDisabledForegroundColor')};
    border-color: ${interpolation.theme('button', 'secondaryButtonDisabledBorderColor')};
  }

  &:active,
  :focus {
    background: ${interpolation.theme('button', 'secondaryButtonFocusedBackgroundColor')};
    color: ${interpolation.theme('button', 'secondaryButtonFocusedForegroundColor')};
    border-color: ${interpolation.theme('button', 'secondaryButtonFocusedBorderColor')};
  }

  &:hover {
    background: ${interpolation.theme('button', 'secondaryButtonHoverBackgroundColor')};
    color: ${interpolation.theme('button', 'secondaryButtonHoverForegroundColor')};
    border-color: ${interpolation.theme('button', 'secondaryButtonHoverBorderColor')};

    &:disabled {
      background: ${interpolation.theme('button', 'secondaryButtonDisabledBackgroundColor')};
      color: ${interpolation.theme('button', 'secondaryButtonDisabledForegroundColor')};
      border-color: ${interpolation.theme('button', 'secondaryButtonDisabledBorderColor')};
    }
  }
`;

const SecondaryButton = (props: Props): ReactElement => <SecondaryButtonStyle {...props} />;

SecondaryButton.defaultProps = defaultProps;

export default SecondaryButton;
