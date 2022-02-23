import { addDecorator } from '@storybook/react';
import { CSSReset } from '@chakra-ui/css-reset';
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
      order: ['Welcome', 'Optimizations', 'Foundations', 'components'],
    },
  },
};

addDecorator((Storybook) => (
  <BoemlyThemeProvider>
    <CSSReset />
    <Storybook />
  </BoemlyThemeProvider>
));
