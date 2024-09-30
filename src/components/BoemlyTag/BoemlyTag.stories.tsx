import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BoemlyTag, BoemlyTagProps } from './BoemlyTag';
import { COLOR_SCHEMES } from '../../constants/colorSchemes';

export default {
  title: 'components/BoemlyTag',
  component: BoemlyTag,
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
    isClosable: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    onClose: {
      action: 'closed',
    },
  },
  args: {
    children: 'Tag',
    variant: 'subtle',
    size: 'md',
    colorScheme: 'primary',
  },
} as Meta<typeof BoemlyTag>;

const Template: StoryFn<BoemlyTagProps> = (args) => <BoemlyTag {...args} />;

export const Subtle = Template.bind({});
Subtle.args = {
  variant: 'subtle',
  isClosable: true,
};

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  isClosable: true,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  isClosable: true,
};
