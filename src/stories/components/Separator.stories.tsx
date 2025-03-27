import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Box, Separator } from '../..';

export default {
  title: 'Components/Separator',
  component: Separator,
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
} as Meta<typeof Separator>;

const Template: StoryFn<typeof Separator> = (args) => (
  <Box width="md" height="md">
    <Separator {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};
