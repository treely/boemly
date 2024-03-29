import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { IconButton } from '../..';
import { Heart } from '@phosphor-icons/react';
import { COLOR_SCHEMES } from '../../constants/colorSchemes';
import { BUTTON_VARIANTS } from '../../constants/buttonVariants';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    'aria-label': {
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    onClick: { action: 'IconButton clicked' },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    variant: {
      options: BUTTON_VARIANTS,
      control: { type: 'radio' },
    },
    colorScheme: {
      options: COLOR_SCHEMES,
      control: { type: 'radio' },
    },
    isLoading: { control: { type: 'boolean' } },
    isDisabled: { control: { type: 'boolean' } },
    isRound: { control: { type: 'boolean' } },
  },
  args: {
    icon: <Heart />,
    'aria-label': 'Heart button',
  },
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Outline = Template.bind({});
Outline.args = {
  size: 'md',
  variant: 'outline',
};

export const OutlineWhite = Template.bind({});
OutlineWhite.args = {
  size: 'md',
  variant: 'outlineWhite',
};
OutlineWhite.parameters = {
  backgrounds: { default: 'dark' },
};

export const ColorScheme = Template.bind({});
ColorScheme.args = {
  size: 'md',
  colorScheme: 'gray',
};

export const Size = Template.bind({});
Size.args = {
  size: 'lg',
};

export const IsRound = Template.bind({});
IsRound.args = {
  size: 'md',
  isRound: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <Heart />,
  size: 'md',
  isDisabled: true,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  icon: <Heart />,
  size: 'md',
  isLoading: true,
};
