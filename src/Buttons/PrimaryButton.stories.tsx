import React from 'react';

import { storiesOf } from '@storybook/react';
import { PrimaryButton } from '.';

storiesOf('Buttons/PrimaryButton', module)
  .add('default', () => <PrimaryButton>PrimaryButton</PrimaryButton>)
  .add('with disabled', () => <PrimaryButton disabled>PrimaryButton</PrimaryButton>)
  .add('with fullscreen', () => <PrimaryButton fullscreen>PrimaryButton</PrimaryButton>)
  .add('with width', () => <PrimaryButton width="400px">PrimaryButton</PrimaryButton>)
  .add('with size (small)', () => <PrimaryButton size="small">PrimaryButton</PrimaryButton>)
  .add('with size (large)', () => <PrimaryButton size="large">PrimaryButton</PrimaryButton>)
  .add('with state (loading)', () => <PrimaryButton state="loading">PrimaryButton</PrimaryButton>)
  .add('with state (success)', () => <PrimaryButton state="success">PrimaryButton</PrimaryButton>);
