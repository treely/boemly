import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { LabelTextPair } from './LabelTextPair';

export default {
  title: 'components/LabelTextPair',
  component: LabelTextPair,
  args: {
    label: 'Label',
    text: 'Text',
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    caption: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof LabelTextPair>;

const Template: StoryFn<typeof LabelTextPair> = (args) => <LabelTextPair {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const WithCaption = Template.bind({});
WithCaption.args = {
  caption: 'Caption',
};

export const Disabled = Template.bind({});
Disabled.args = {
  caption: 'Caption',
  isDisabled: true,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
};
