import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Separator } from '../..';

export default {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    variant: {
      options: ['solid', 'dashed', 'dotted'],
      control: { type: 'radio' },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
  args: {
    variant: 'solid',
    orientation: 'horizontal',
  },
} as Meta<typeof Separator>;

const Template: StoryFn<typeof Separator> = (args) => <Separator {...args} minW="md" minH="md" />;

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
};
