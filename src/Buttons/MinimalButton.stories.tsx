import React from 'react';

import { storiesOf } from '@storybook/react';
import { MinimalButton } from '.';

storiesOf('Buttons/MinimalButton', module)
  .add('default', () => <MinimalButton>MinimalButton</MinimalButton>)
  .add('with disabled', () => <MinimalButton disabled>MinimalButton</MinimalButton>)
  .add('with fullscreen', () => <MinimalButton fullscreen>MinimalButton</MinimalButton>)
  .add('with width', () => <MinimalButton width="400px">MinimalButton</MinimalButton>)
  .add('with size (small)', () => <MinimalButton size="small">MinimalButton</MinimalButton>)
  .add('with size (large)', () => <MinimalButton size="large">MinimalButton</MinimalButton>)
  .add('with state (loading)', () => <MinimalButton state="loading">MinimalButton</MinimalButton>)
  .add('with state (success)', () => <MinimalButton state="success">MinimalButton</MinimalButton>);
