import React from 'react';
import { SuccessButton } from '.';
import { mountWithTheme } from '../Tools/testHelper';

describe('SuccessButton', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<SuccessButton>SuccessButton</SuccessButton>);
    expect(tree.find(SuccessButton)).toMatchSnapshot();
  });

  it('should render correctly (disabled)', () => {
    const tree = mountWithTheme(<SuccessButton disabled>SuccessButton</SuccessButton>);
    expect(tree.find(SuccessButton)).toMatchSnapshot();
  });

  it('should render correctly (fullscreen)', () => {
    const tree = mountWithTheme(<SuccessButton fullscreen>SuccessButton</SuccessButton>);
    expect(tree.find(SuccessButton)).toMatchSnapshot();
  });

  it('should render correctly (width)', () => {
    const tree = mountWithTheme(<SuccessButton width="400px">SuccessButton</SuccessButton>);
    expect(tree.find(SuccessButton)).toMatchSnapshot();
  });

  it('should render correctly (size - large)', () => {
    const tree = mountWithTheme(<SuccessButton size="large">SuccessButton</SuccessButton>);
    expect(tree.find(SuccessButton)).toMatchSnapshot();
  });

  it('should render correctly (size - small)', () => {
    const tree = mountWithTheme(<SuccessButton size="small">SuccessButton</SuccessButton>);
    expect(tree.find(SuccessButton)).toMatchSnapshot();
  });

  it('should render correctly (state -loading)', () => {
    const tree = mountWithTheme(<SuccessButton state="loading">SuccessButton</SuccessButton>);
    expect(tree.find(SuccessButton)).toMatchSnapshot();
  });

  it('should render correctly (state - success)', () => {
    const tree = mountWithTheme(<SuccessButton state="success">SuccessButton</SuccessButton>);
    expect(tree.find(SuccessButton)).toMatchSnapshot();
  });
});
