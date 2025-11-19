import React from 'react';
import { Meta, StoryFn } from '@storybook/react-webpack5';
import { BoemlySelect as Select } from './Select';

const commonOptions = [
  { label: 'Option 1', value: 'option_1' },
  { label: 'Option 2', value: 'option_2' },
  { label: 'Option 3', value: 'option_3' },
  { label: 'Option 4', value: 'option_4' },
  { label: 'Option 5', value: 'option_5' },
];

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
    onClose: { action: 'Dropdown Closed' },
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
  options: commonOptions,
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
  value: ['option_2'],
  placeholder: 'Select an option',
  options: commonOptions,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
  color: 'black',
  options: commonOptions,
};

export const WithPreventDeselection = Template.bind({});
WithPreventDeselection.args = {
  color: 'black',
  preventDeselection: true,
  options: commonOptions,
};

export const Searchable = Template.bind({});
Searchable.args = {
  isSearchable: true,
  placeholder: 'Search options...',
  options: commonOptions,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  isMultiple: true,
  placeholder: 'Select multiple options',
  options: commonOptions,
};

export const SearchableMultiSelect = Template.bind({});
SearchableMultiSelect.args = {
  isSearchable: true,
  isMultiple: true,
  placeholder: 'Search and select multiple options',
  searchPlaceholder: 'Search for a content...',
  noOptionsPlaceholder: 'No options available from the list',
  options: [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
    { label: 'Option 4', value: 'option_4' },
  ],
};
