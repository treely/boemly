module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  typescript: {
    reactDocgen: false,
  },
};
