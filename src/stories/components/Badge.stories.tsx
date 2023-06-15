import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Badge } from '../..';
import { COLOR_SCHEMES } from '../../constants/colorSchemes';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['solid', 'subtle', 'outline'],
      control: { type: 'radio' },
    },
    colorScheme: {
      options: COLOR_SCHEMES,
      control: { type: 'radio' },
    },
  },
  args: {
    children: 'Badge',
    colorScheme: 'primary',
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
