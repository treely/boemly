import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { storybookCoverUrl } from '../../test/storybookMedia';
import { Gradient } from './Gradient';
import { Box, ChakraProvider, defaultSystem } from '@chakra-ui/react';

export default {
  title: 'components/Gradient',
  component: Gradient,
  decorators: [
    (Story) => {
      return (
        <ChakraProvider value={defaultSystem}>
          <Story />
        </ChakraProvider>
      );
    },
  ],
} as Meta<typeof Gradient>;

const Template: StoryFn<typeof Gradient> = (args) => (
  <Box width="3xs" height="3xs" position="relative">
    <img
      src={storybookCoverUrl}
      alt="Background"
      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
    />
    <Gradient {...args} />
  </Box>
);

export const Default = Template.bind({});
