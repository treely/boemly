import { addDecorator } from '@storybook/react';
import { CSSReset } from '@chakra-ui/react';
import { BoemlyThemeProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
};

addDecorator((Storybook) => (
  <BoemlyThemeProvider>
    <CSSReset />
    <Storybook />
  </BoemlyThemeProvider>
));
