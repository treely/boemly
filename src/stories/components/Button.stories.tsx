import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../..';
import { Heart } from 'phosphor-react';
import { COLOR_SCHEMES } from '../../constants/colorSchemes';
import { BUTTON_VARIANTS } from '../../constants/buttonVariants';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'Button clicked' },
    children: { defaultValue: 'Button' },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
    isFullWidth: { control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Link = Template.bind({});
Link.args = {
  size: 'md',
  variant: 'link',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
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
  children: 'Button',
  size: 'md',
  variant: 'ghost',
};

export const ColorScheme = Template.bind({});
ColorScheme.args = {
  size: 'md',
  colorScheme: 'gray',
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
  isDisabled: true,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  size: 'md',
  isLoading: true,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  size: 'md',
  leftIcon: <Heart />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  size: 'md',
  rightIcon: <Heart />,
};
