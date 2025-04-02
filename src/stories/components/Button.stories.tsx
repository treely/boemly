import React, { Children } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Button } from '../..';
import { Heart } from '@phosphor-icons/react';
import { COLOR_PALETTES } from '../../constants/colorPalettes';
import { BUTTON_VARIANTS } from '../../constants/buttonVariants';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'Button clicked' },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
    isLoading: { control: { type: 'boolean' } },
    isDisabled: { control: { type: 'boolean' } },
    isFullWidth: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Button',
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {};

export const Link = Template.bind({});
Link.args = {
  size: 'md',
  variant: 'link',
};

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

export const Ghost = Template.bind({});
Ghost.args = {
  size: 'md',
  variant: 'ghost',
};

export const ColorPalette = Template.bind({});
ColorPalette.args = {
  size: 'md',
  colorPalette: 'gray',
};

export const Size = Template.bind({});
Size.args = {
  size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'md',
  disabled: true,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  size: 'md',
  loading: true,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  size: 'md',
  children: (
    <>
      <Heart /> Button
    </>
  ),
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  size: 'md',
  children: (
    <>
      Button <Heart />
    </>
  ),
};
