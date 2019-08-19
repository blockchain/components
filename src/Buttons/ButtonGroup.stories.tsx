import React from 'react';

import { storiesOf } from '@storybook/react';
import { PrimaryButton, SecondaryButton, MinimalButton, SuccessButton, ErrorButton, ButtonGroup } from '.';

const Buttons = (): JSX.Element => (
  <React.Fragment>
    <PrimaryButton>PrimaryButton</PrimaryButton>
    <SecondaryButton>SecondaryButton</SecondaryButton>
    <MinimalButton>MinimalButton</MinimalButton>
    <SuccessButton>SuccessButton</SuccessButton>
    <ErrorButton>ErrorButton</ErrorButton>
  </React.Fragment>
);

storiesOf('Buttons/ButtonGroup', module)
  .add('default', () => (
    <ButtonGroup>
      <Buttons />
    </ButtonGroup>
  ))
  .add('with align (right)', () => (
    <ButtonGroup align="right">
      <Buttons />
    </ButtonGroup>
  ))
  .add('with align (center)', () => (
    <ButtonGroup align="center">
      <Buttons />
    </ButtonGroup>
  ))
  .add('with align (spaced)', () => (
    <ButtonGroup align="spaced">
      <Buttons />
    </ButtonGroup>
  ));
