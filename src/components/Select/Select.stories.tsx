import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BoemlySelect as Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    isDisabled: { control: { type: 'boolean' } },
    isInvalid: { control: { type: 'boolean' } },
    isFullWidth: { control: { type: 'boolean' } },
    isSearchable: { control: { type: 'boolean' } },
    isMultiple: { control: { type: 'boolean' } },
    onChange: { action: 'Select Changed' },
    options: { control: 'object' },
    color: {
      control: { type: 'text' },
    },
    backgroundColor: {
      control: { type: 'text' },
    },
    borderColor: {
      control: { type: 'text' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md',
      control: { type: 'radio' },
    },
    variant: {
      options: ['filled', 'unstyled', 'flushed', 'outline'],
      defaultValue: 'filled',
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select an option',
  options: [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
  ],
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
  value: ['option_2'],
  placeholder: 'Select an option',
  options: [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
  ],
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
  color: 'black',
  options: [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
  ],
};

export const Searchable = Template.bind({});
Searchable.args = {
  isSearchable: true,
  placeholder: 'Search options...',
  options: [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
  ],
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  isMultiple: true,
  placeholder: 'Select multiple options',
  options: [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
  ],
};

export const SearchableMultiSelect = Template.bind({});
SearchableMultiSelect.args = {
  isSearchable: true,
  isMultiple: true,
  placeholder: 'Search and select multiple options',
  searchPlaceholder: 'Search for a content...',
  options: [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
    { label: 'Option 4', value: 'option_4' },
  ],
};
