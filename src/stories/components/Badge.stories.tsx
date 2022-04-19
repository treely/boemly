import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from '../..';

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
      options: [
        'primary',
        'whiteAlpha',
        'blackAlpha',
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
        'linkedin',
        'facebook',
        'messenger',
        'whatsapp',
        'twitter',
        'telegram',
      ],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
