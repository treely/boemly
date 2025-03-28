import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Progress } from '../..';
import { COLOR_PALETTES } from '../../constants/colorPalettes';

export default {
  title: 'Components/Progress',
  component: Progress.Root,
  argTypes: {
    size: { options: ['xs', 'sm', 'md', 'lg'], control: { type: 'radio' } },
    colorPalette: {
      options: COLOR_PALETTES,
      control: { type: 'radio' },
    },
    striped: { control: { type: 'boolean' } },
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
  colorPalette: 'primary',
};

export const ColorPalette = Template.bind({});
ColorPalette.args = {
  colorPalette: 'red',
};

export const WithStripe = Template.bind({});
WithStripe.args = {
  colorPalette: 'primary',
  striped: true,
};
