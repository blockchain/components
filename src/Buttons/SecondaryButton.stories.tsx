import React from 'react';

import { storiesOf } from '@storybook/react';
import { SecondaryButton } from '.';

storiesOf('Buttons/SecondaryButton', module)
  .add('default', () => <SecondaryButton>SecondaryButton</SecondaryButton>)
  .add('with disabled', () => <SecondaryButton disabled>SecondaryButton</SecondaryButton>)
  .add('with fullscreen', () => <SecondaryButton fullscreen>SecondaryButton</SecondaryButton>)
  .add('with width', () => <SecondaryButton width="400px">SecondaryButton</SecondaryButton>)
  .add('with size (small)', () => <SecondaryButton size="small">SecondaryButton</SecondaryButton>)
  .add('with size (large)', () => <SecondaryButton size="large">SecondaryButton</SecondaryButton>)
  .add('with state (loading)', () => <SecondaryButton state="loading">SecondaryButton</SecondaryButton>)
  .add('with state (success)', () => <SecondaryButton state="success">SecondaryButton</SecondaryButton>);
