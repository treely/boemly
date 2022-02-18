import React from 'react';
import { render as rtlRender } from '@testing-library/react';

import { BoemlyThemeProvider } from '../index';

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const render = (ui: any, { ...renderOptions } = {}) => {
  const Wrapper: React.FC<WrapperProps> = ({ children }: WrapperProps) => (
    <BoemlyThemeProvider>{children}</BoemlyThemeProvider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
