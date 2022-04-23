import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box, Divider } from '../..';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    variant: {
      options: ['solid', 'dashed'],
      control: { type: 'radio' },
      defaultValue: 'solid',
    },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
      defaultValue: 'horizontal',
    },
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Box width="md" height="md">
    <Divider {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};
