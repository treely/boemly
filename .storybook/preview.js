import { addDecorator } from '@storybook/react';
import { CSSReset } from '@chakra-ui/react';
import { TreelyThemeProvider } from '../src';

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
      order: ['Welcome', 'Optimizations', 'components'],
    },
  },
};

addDecorator((Storybook) => (
  <TreelyThemeProvider>
    <CSSReset />
    <Storybook />
  </TreelyThemeProvider>
));
