import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../..';
import { Heart } from 'phosphor-react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['solid', 'outline', 'outlineWhite', 'link'],
      control: { type: 'radio' },
    },
    colorScheme: {
      options: ['primary', 'gray', 'orange', 'green'],
      control: { type: 'radio' },
    },
    isLoading: { control: { type: 'boolean' } },
    isDisabled: { control: { type: 'boolean' } },
    isFullWidth: { control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const onClick = () => alert('Button clicked');

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  onClick,
};

export const Link = Template.bind({});
Link.args = {
  children: 'Button',
  size: 'md',
  variant: 'link',
  onClick,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  size: 'md',
  variant: 'outline',
  onClick,
};

export const OutlineWhite = Template.bind({});
OutlineWhite.args = {
  children: 'Button',
  size: 'md',
  variant: 'outlineWhite',
  onClick,
};
OutlineWhite.parameters = {
  backgrounds: { default: 'dark' },
};

export const ColorScheme = Template.bind({});
ColorScheme.args = {
  children: 'Button',
  size: 'md',
  colorScheme: 'gray',
  onClick,
};

export const Size = Template.bind({});
Size.args = {
  children: 'Button',
  size: 'xl',
  onClick,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Button',
  size: 'md',
  isFullWidth: true,
  onClick,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  size: 'md',
  isDisabled: true,
  onClick,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  children: 'Button',
  size: 'md',
  isLoading: true,
  onClick,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'Button',
  size: 'md',
  leftIcon: <Heart />,
  onClick,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: 'Button',
  size: 'md',
  rightIcon: <Heart />,
  onClick,
};
