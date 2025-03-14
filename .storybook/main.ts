import type { StorybookConfig } from '@storybook/react-webpack5';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',

  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

  core: {
    disableTelemetry: true,
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

export default config;
