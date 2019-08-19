import React from 'react';
import { PrimaryButton } from '.';
import { mountWithTheme } from '../Tools/testHelper';

describe('PrimaryButton', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<PrimaryButton>PrimaryButton</PrimaryButton>);
    expect(tree.find(PrimaryButton)).toMatchSnapshot();
  });

  it('should render correctly (disabled)', () => {
    const tree = mountWithTheme(<PrimaryButton disabled>PrimaryButton</PrimaryButton>);
    expect(tree.find(PrimaryButton)).toMatchSnapshot();
  });

  it('should render correctly (fullscreen)', () => {
    const tree = mountWithTheme(<PrimaryButton fullscreen>PrimaryButton</PrimaryButton>);
    expect(tree.find(PrimaryButton)).toMatchSnapshot();
  });

  it('should render correctly (width)', () => {
    const tree = mountWithTheme(<PrimaryButton width="400px">PrimaryButton</PrimaryButton>);
    expect(tree.find(PrimaryButton)).toMatchSnapshot();
  });

  it('should render correctly (size - large)', () => {
    const tree = mountWithTheme(<PrimaryButton size="large">PrimaryButton</PrimaryButton>);
    expect(tree.find(PrimaryButton)).toMatchSnapshot();
  });

  it('should render correctly (size - small)', () => {
    const tree = mountWithTheme(<PrimaryButton size="small">PrimaryButton</PrimaryButton>);
    expect(tree.find(PrimaryButton)).toMatchSnapshot();
  });

  it('should render correctly (state -loading)', () => {
    const tree = mountWithTheme(<PrimaryButton state="loading">PrimaryButton</PrimaryButton>);
    expect(tree.find(PrimaryButton)).toMatchSnapshot();
  });

  it('should render correctly (state - success)', () => {
    const tree = mountWithTheme(<PrimaryButton state="success">PrimaryButton</PrimaryButton>);
    expect(tree.find(PrimaryButton)).toMatchSnapshot();
  });
});
