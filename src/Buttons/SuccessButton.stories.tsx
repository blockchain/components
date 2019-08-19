import React from 'react';

import { storiesOf } from '@storybook/react';
import { SuccessButton } from '.';

storiesOf('Buttons/SuccessButton', module)
  .add('default', () => <SuccessButton>SuccessButton</SuccessButton>)
  .add('with disabled', () => <SuccessButton disabled>SuccessButton</SuccessButton>)
  .add('with fullscreen', () => <SuccessButton fullscreen>SuccessButton</SuccessButton>)
  .add('with width', () => <SuccessButton width="400px">SuccessButton</SuccessButton>)
  .add('with size (small)', () => <SuccessButton size="small">SuccessButton</SuccessButton>)
  .add('with size (large)', () => <SuccessButton size="large">SuccessButton</SuccessButton>)
  .add('with state (loading)', () => <SuccessButton state="loading">SuccessButton</SuccessButton>)
  .add('with state (success)', () => <SuccessButton state="success">SuccessButton</SuccessButton>);
