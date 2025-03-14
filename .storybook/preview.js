import React from 'react';
import { CSSReset } from '@chakra-ui/react';
import { BoemlyThemeProvider } from '../src';

export default {
  decorators: [
    (Storybook) => (
      <BoemlyThemeProvider>
        <CSSReset />
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
