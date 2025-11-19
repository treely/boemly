import React from 'react';
import { Meta, StoryFn } from '@storybook/react-webpack5';

import { Button } from '../..';
import { HeartIcon } from '@phosphor-icons/react';
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

const Template: StoryFn<typeof Button> = (args) => {
  const { isFullWidth, isLoading, isDisabled, ...restArgs } = args as typeof args & {
    isFullWidth?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
  };
  return (
    <Button
      {...restArgs}
      w={isFullWidth ? 'full' : undefined}
      {...(isLoading && { loading: true })}
      {...(isDisabled && { disabled: true })}
    >
      {args.children}
    </Button>
  );
};

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
OutlineWhite.globals = {
  backgrounds: { value: 'dark' },
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

export const FullWidth = Template.bind({});
FullWidth.args = {
  size: 'md',
  isFullWidth: true,
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
      <HeartIcon /> Button
    </>
  ),
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  size: 'md',
  children: (
    <>
      Button <HeartIcon />
    </>
  ),
};
