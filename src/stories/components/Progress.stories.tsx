import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Progress } from '../..';
import { COLOR_SCHEMES } from '../../constants/colorSchemes';

export default {
  title: 'Components/Progress',
  component: Progress.Root,
  argTypes: {
    size: { options: ['xs', 'sm', 'md', 'lg'], control: { type: 'radio' } },
    colorScheme: {
      options: COLOR_SCHEMES,
      control: { type: 'radio' },
    },
    hasStripe: { control: { type: 'boolean' } },
  },
  args: {
    width: 'sm',
    value: 60,
  },
} as Meta<typeof Progress>;

const Template: StoryFn<typeof Progress> = (args) => (
  <Progress.Root {...args}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
);

export const Primary = Template.bind({});
Primary.args = {
  colorScheme: 'primary',
};

export const ColorScheme = Template.bind({});
ColorScheme.args = {
  colorScheme: 'red',
};

export const WithStripe = Template.bind({});
WithStripe.args = {
  colorScheme: 'primary',
  hasStripe: true,
};
