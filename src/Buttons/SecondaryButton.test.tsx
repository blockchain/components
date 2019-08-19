import React from 'react';
import { SecondaryButton } from '.';
import { mountWithTheme } from '../Tools/testHelper';

describe('SecondaryButton', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<SecondaryButton>SecondaryButton</SecondaryButton>);
    expect(tree.find(SecondaryButton)).toMatchSnapshot();
  });

  it('should render correctly (disabled)', () => {
    const tree = mountWithTheme(<SecondaryButton disabled>SecondaryButton</SecondaryButton>);
    expect(tree.find(SecondaryButton)).toMatchSnapshot();
  });

  it('should render correctly (fullscreen)', () => {
    const tree = mountWithTheme(<SecondaryButton fullscreen>SecondaryButton</SecondaryButton>);
    expect(tree.find(SecondaryButton)).toMatchSnapshot();
  });

  it('should render correctly (width)', () => {
    const tree = mountWithTheme(<SecondaryButton width="400px">SecondaryButton</SecondaryButton>);
    expect(tree.find(SecondaryButton)).toMatchSnapshot();
  });

  it('should render correctly (size - large)', () => {
    const tree = mountWithTheme(<SecondaryButton size="large">SecondaryButton</SecondaryButton>);
    expect(tree.find(SecondaryButton)).toMatchSnapshot();
  });

  it('should render correctly (size - small)', () => {
    const tree = mountWithTheme(<SecondaryButton size="small">SecondaryButton</SecondaryButton>);
    expect(tree.find(SecondaryButton)).toMatchSnapshot();
  });

  it('should render correctly (state -loading)', () => {
    const tree = mountWithTheme(<SecondaryButton state="loading">SecondaryButton</SecondaryButton>);
    expect(tree.find(SecondaryButton)).toMatchSnapshot();
  });

  it('should render correctly (state - success)', () => {
    const tree = mountWithTheme(<SecondaryButton state="success">SecondaryButton</SecondaryButton>);
    expect(tree.find(SecondaryButton)).toMatchSnapshot();
  });
});
