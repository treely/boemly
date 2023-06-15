import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Tag } from '../..';
import { COLOR_SCHEMES } from '../../constants/colorSchemes';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      options: ['solid', 'subtle', 'outline'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    colorScheme: {
      options: COLOR_SCHEMES,
      control: { type: 'radio' },
    },
  },
  args: {
    children: 'Tag',
    variant: 'subtle',
    size: 'md',
    colorScheme: 'primary',
  },
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => <Tag {...args} />;

export const Subtle = Template.bind({});
Subtle.args = {
  variant: 'subtle',
};

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};
