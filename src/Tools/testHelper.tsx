import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ThemeProvider from './ThemeProvider';

interface Props {
  children: React.ReactElement;
}

const getThemeProviderWrappingComponent = ({ children }: Props): JSX.Element => (
  <ThemeProvider>{children}</ThemeProvider>
);

export const mountWithTheme = (component: React.ReactElement): ReactWrapper => {
  const wrapper = mount(component, {
    wrappingComponent: getThemeProviderWrappingComponent,
  });

  return wrapper;
};
