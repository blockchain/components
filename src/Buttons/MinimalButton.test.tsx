import React from 'react';
import { MinimalButton } from '.';
import { mountWithTheme } from '../Tools/testHelper';

describe('MinimalButton', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<MinimalButton>MinimalButton</MinimalButton>);
    expect(tree.find(MinimalButton)).toMatchSnapshot();
  });

  it('should render correctly (disabled)', () => {
    const tree = mountWithTheme(<MinimalButton disabled>MinimalButton</MinimalButton>);
    expect(tree.find(MinimalButton)).toMatchSnapshot();
  });

  it('should render correctly (fullscreen)', () => {
    const tree = mountWithTheme(<MinimalButton fullscreen>MinimalButton</MinimalButton>);
    expect(tree.find(MinimalButton)).toMatchSnapshot();
  });

  it('should render correctly (width)', () => {
    const tree = mountWithTheme(<MinimalButton width="400px">MinimalButton</MinimalButton>);
    expect(tree.find(MinimalButton)).toMatchSnapshot();
  });

  it('should render correctly (size - large)', () => {
    const tree = mountWithTheme(<MinimalButton size="large">MinimalButton</MinimalButton>);
    expect(tree.find(MinimalButton)).toMatchSnapshot();
  });

  it('should render correctly (size - small)', () => {
    const tree = mountWithTheme(<MinimalButton size="small">MinimalButton</MinimalButton>);
    expect(tree.find(MinimalButton)).toMatchSnapshot();
  });

  it('should render correctly (state -loading)', () => {
    const tree = mountWithTheme(<MinimalButton state="loading">MinimalButton</MinimalButton>);
    expect(tree.find(MinimalButton)).toMatchSnapshot();
  });

  it('should render correctly (state - success)', () => {
    const tree = mountWithTheme(<MinimalButton state="success">MinimalButton</MinimalButton>);
    expect(tree.find(MinimalButton)).toMatchSnapshot();
  });
});
