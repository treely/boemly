import React from 'react';
import { BoemlyThemeProvider } from '../src';
import { withThemeByClassName } from '@storybook/addon-themes';

export default {
  decorators: [
    (Storybook) => (
      <BoemlyThemeProvider>
        <Storybook />
      </BoemlyThemeProvider>
    ),
    withThemeByClassName({
      defaultTheme: 'light',
      themes: { light: '', dark: 'dark' },
    }),
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
