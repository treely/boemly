import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Box, Divider } from '../..';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    variant: {
      options: ['solid', 'dashed'],
      control: { type: 'radio' },
    },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
    },
  },
  args: {
    variant: 'solid',
    orientation: 'horizontal',
  },
} as Meta<typeof Divider>;

const Template: StoryFn<typeof Divider> = (args) => (
  <Box width="md" height="md">
    <Divider {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};
