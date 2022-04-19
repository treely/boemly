import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from '../..';
import { COLOR_SCHEMES } from '../../constants/docs';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    children: { defaultValue: 'Badge' },
    variant: {
      options: ['solid', 'subtle', 'outline'],
      control: { type: 'radio' },
    },
    colorScheme: {
      options: COLOR_SCHEMES,
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
