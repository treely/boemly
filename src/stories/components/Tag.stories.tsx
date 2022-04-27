import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tag } from '../..';
import { COLOR_SCHEMES } from '../../constants/docs';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    children: { defaultValue: 'Tag' },
    variant: {
      options: ['solid', 'subtle', 'outline'],
      control: { type: 'radio' },
      defaultValue: 'subtle',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      defaultValue: 'md',
    },
    colorScheme: {
      options: COLOR_SCHEMES,
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

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
