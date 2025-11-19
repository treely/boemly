import React from 'react';
import { Meta, StoryFn } from '@storybook/react-webpack5';

import { IconButton } from '../..';
import { HeartIcon } from '@phosphor-icons/react';
import { COLOR_PALETTES } from '../../constants/colorPalettes';
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
    colorPalette: {
      options: COLOR_PALETTES,
      control: { type: 'radio' },
    },
    loading: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    rounded: { control: { type: 'radio' }, options: ['none', 'full'] },
  },
  args: {
    'aria-label': 'Heart button',
  },
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <HeartIcon />
  </IconButton>
);

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
OutlineWhite.globals = {
  backgrounds: { value: 'dark' },
};

export const ColorPalette = Template.bind({});
ColorPalette.args = {
  size: 'md',
  colorPalette: 'gray',
};

export const Size = Template.bind({});
Size.args = {
  size: 'lg',
};

export const IsRound = Template.bind({});
IsRound.args = {
  size: 'md',
  rounded: 'full',
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <HeartIcon />,
  size: 'md',
  disabled: true,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  icon: <HeartIcon />,
  size: 'md',
  loading: true,
};
