import React from 'react';
import { BoemlyThemeProvider } from '../src';
import { withThemeByClassName } from '@storybook/addon-themes';

export default {
  decorators: [
    withThemeByClassName({
      defaultTheme: 'light',
      themes: {
        light: '',
        dark: 'dark',
      },
    }),
    (Storybook) => (
      <BoemlyThemeProvider>
        <Storybook />
      </BoemlyThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Optimizations',
          'Customizations',
          'How to use tokens',
          'Tokens',
          'components',
        ],
      },
    },
  },
};
