import React from 'react';
import { Meta, StoryFn } from '@storybook/react-webpack5';
import { BoemlyTag, BoemlyTagProps } from './BoemlyTag';
import { COLOR_PALETTES } from '../../constants/colorPalettes';

export default {
  title: 'components/BoemlyTag',
  component: BoemlyTag,
  argTypes: {
    variant: {
      options: ['solid', 'subtle', 'outline'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    colorPalette: {
      options: COLOR_PALETTES,
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
    size: 'lg',
    colorPalette: 'primary',
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
