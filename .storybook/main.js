const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    '../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../src/components/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  reactOptions: {
    fastRefresh: true,
  },
  refs: {
    '@chakra-ui/accordion': { disable: true },
    '@chakra-ui/alert': { disable: true },
    '@chakra-ui/avatar': { disable: true },
    '@chakra-ui/button': { disable: true },
    '@chakra-ui/checkbox': { disable: true },
    '@chakra-ui/close-button': { disable: true },
    '@chakra-ui/form-control': { disable: true },
    '@chakra-ui/hooks': { disable: true },
    '@chakra-ui/input': { disable: true },
    '@chakra-ui/layout': { disable: true },
    '@chakra-ui/media-query': { disable: true },
    '@chakra-ui/menu': { disable: true },
    '@chakra-ui/number-input': { disable: true },
    '@chakra-ui/provider': { disable: true },
    '@chakra-ui/select': { disable: true },
    '@chakra-ui/spinner': { disable: true },
    '@chakra-ui/system': { disable: true },
    '@chakra-ui/table': { disable: true },
    '@chakra-ui/tag': { disable: true },
    '@chakra-ui/theme': { disable: true },
    '@chakra-ui/theme-tools': { disable: true },
    '@chakra-ui/toast': { disable: true },
    '@chakra-ui/tooltip': { disable: true },
    '@chakra-ui/utils': { disable: true },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
