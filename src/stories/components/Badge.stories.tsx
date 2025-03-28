import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Badge } from '../..';
import { COLOR_PALETTES } from '../../constants/colorPalettes';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['solid', 'subtle', 'outline'],
      control: { type: 'radio' },
    },
    colorPalette: {
      options: COLOR_PALETTES,
      control: { type: 'radio' },
    },
  },
  args: {
    children: 'Badge',
    colorPalette: 'primary',
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
