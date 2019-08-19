import React from 'react';

import { storiesOf } from '@storybook/react';
import { ErrorButton } from '.';

storiesOf('Buttons/ErrorButton', module)
  .add('default', () => <ErrorButton>ErrorButton</ErrorButton>)
  .add('with disabled', () => <ErrorButton disabled>ErrorButton</ErrorButton>)
  .add('with fullscreen', () => <ErrorButton fullscreen>ErrorButton</ErrorButton>)
  .add('with width', () => <ErrorButton width="400px">ErrorButton</ErrorButton>)
  .add('with size (small)', () => <ErrorButton size="small">ErrorButton</ErrorButton>)
  .add('with size (large)', () => <ErrorButton size="large">ErrorButton</ErrorButton>)
  .add('with state (loading)', () => <ErrorButton state="loading">ErrorButton</ErrorButton>)
  .add('with state (success)', () => <ErrorButton state="success">ErrorButton</ErrorButton>);
