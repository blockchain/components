import React from 'react';
import { PrimaryButton, SecondaryButton, MinimalButton, SuccessButton, ErrorButton, ButtonGroup } from '.';
import { mountWithTheme } from '../Tools/testHelper';

const Buttons = (): JSX.Element => (
  <React.Fragment>
    <PrimaryButton>PrimaryButton</PrimaryButton>
    <SecondaryButton>SecondaryButton</SecondaryButton>
    <MinimalButton>MinimalButton</MinimalButton>
    <SuccessButton>SuccessButton</SuccessButton>
    <ErrorButton>ErrorButton</ErrorButton>
  </React.Fragment>
);

describe('ButtonGroup', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(
      <ButtonGroup>
        <Buttons />
      </ButtonGroup>,
    );

    expect(tree.find(ButtonGroup)).toMatchSnapshot();
  });

  it('should render correctly (align right)', () => {
    const tree = mountWithTheme(
      <ButtonGroup align="right">
        <Buttons />
      </ButtonGroup>,
    );

    expect(tree.find(ButtonGroup)).toMatchSnapshot();
  });

  it('should render correctly (align center)', () => {
    const tree = mountWithTheme(
      <ButtonGroup align="center">
        <Buttons />
      </ButtonGroup>,
    );

    expect(tree.find(ButtonGroup)).toMatchSnapshot();
  });

  it('should render correctly (align spaced)', () => {
    const tree = mountWithTheme(
      <ButtonGroup align="spaced">
        <Buttons />
      </ButtonGroup>,
    );

    expect(tree.find(ButtonGroup)).toMatchSnapshot();
  });
});
