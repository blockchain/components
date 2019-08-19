import React from 'react';
import Text from './Text';
import { mountWithTheme } from '../Tools/testHelper';

const text = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';

describe('Text', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Text>{text}</Text>);

    expect(tree.find(Text)).toMatchSnapshot();
  });

  it('should render correctly (size)', () => {
    const tree = mountWithTheme(<Text size="size5">{text}</Text>);

    expect(tree.find(Text)).toMatchSnapshot();
  });

  it('should render correctly (weight)', () => {
    const tree = mountWithTheme(<Text weight="weight9">{text}</Text>);

    expect(tree.find(Text)).toMatchSnapshot();
  });
});
