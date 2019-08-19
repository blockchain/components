import React from 'react';
import { ErrorButton } from '.';
import { mountWithTheme } from '../Tools/testHelper';

describe('ErrorButton', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<ErrorButton>ErrorButton</ErrorButton>);
    expect(tree.find(ErrorButton)).toMatchSnapshot();
  });

  it('should render correctly (disabled)', () => {
    const tree = mountWithTheme(<ErrorButton disabled>ErrorButton</ErrorButton>);
    expect(tree.find(ErrorButton)).toMatchSnapshot();
  });

  it('should render correctly (fullscreen)', () => {
    const tree = mountWithTheme(<ErrorButton fullscreen>ErrorButton</ErrorButton>);
    expect(tree.find(ErrorButton)).toMatchSnapshot();
  });

  it('should render correctly (width)', () => {
    const tree = mountWithTheme(<ErrorButton width="400px">ErrorButton</ErrorButton>);
    expect(tree.find(ErrorButton)).toMatchSnapshot();
  });

  it('should render correctly (size - large)', () => {
    const tree = mountWithTheme(<ErrorButton size="large">ErrorButton</ErrorButton>);
    expect(tree.find(ErrorButton)).toMatchSnapshot();
  });

  it('should render correctly (size - small)', () => {
    const tree = mountWithTheme(<ErrorButton size="small">ErrorButton</ErrorButton>);
    expect(tree.find(ErrorButton)).toMatchSnapshot();
  });

  it('should render correctly (state -loading)', () => {
    const tree = mountWithTheme(<ErrorButton state="loading">ErrorButton</ErrorButton>);
    expect(tree.find(ErrorButton)).toMatchSnapshot();
  });

  it('should render correctly (state - success)', () => {
    const tree = mountWithTheme(<ErrorButton state="success">ErrorButton</ErrorButton>);
    expect(tree.find(ErrorButton)).toMatchSnapshot();
  });
});
