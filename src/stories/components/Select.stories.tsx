import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Select } from '../..';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    variant: {
      options: ['outline', 'filled', 'flushed', 'unstyled'],
      control: { type: 'radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    placeholder: { control: { type: 'text' } },
    isDisabled: { control: { type: 'boolean' } },
    isInvalid: { control: { type: 'boolean' } },
    isFullWidth: { control: { type: 'boolean' } },
    onChange: { action: 'Select changed' },
    value: { control: { type: 'text' } },
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <Select {...args}>
    <option value="option_1">Option 1</option>
    <option value="option_2">Option 2</option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
  value: 'option_2',
};
