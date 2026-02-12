import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react-webpack5';
import { RangeSelect } from './RangeSelect';

export default {
  title: 'Components/RangeSelect',
  component: RangeSelect,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    rangeFromLabel: { control: { type: 'text' } },
    rangeToLabel: { control: { type: 'text' } },
    rangeFromPlaceholder: { control: { type: 'text' } },
    rangeToPlaceholder: { control: { type: 'text' } },
    isDisabled: { control: { type: 'boolean' } },
    isInvalid: { control: { type: 'boolean' } },
    isFullWidth: { control: { type: 'boolean' } },
    onChange: { action: 'Range Changed' },
    onClose: { action: 'Dropdown Closed' },
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
      defaultValue: 'outline',
      control: { type: 'radio' },
    },
  },
} as Meta<typeof RangeSelect>;

const Template: StoryFn<typeof RangeSelect> = (args) => <RangeSelect {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithValidation: StoryFn<typeof RangeSelect> = (args) => {
  const [value, setValue] = useState<string[]>(['', '']);
  const [fromError, setFromError] = useState<string>('');
  const [toError, setToError] = useState<string>('');

  const handleChange = (newValue: string[]) => {
    setValue(newValue);

    // Validation logic
    const rangeMin = 1;
    const rangeMax = 100;
    const fromStr = newValue[0] ?? '';
    const toStr = newValue[1] ?? '';
    const fromNum = fromStr === '' ? undefined : Number(fromStr);
    const toNum = toStr === '' ? undefined : Number(toStr);

    let nextFromError = '';
    let nextToError = '';

    if (fromNum !== undefined && !Number.isNaN(fromNum)) {
      if (fromNum < rangeMin) nextFromError = `Value must be at least ${rangeMin}`;
      else if (fromNum > rangeMax) nextFromError = `Value must not exceed ${rangeMax}`;
    }

    if (toNum !== undefined && !Number.isNaN(toNum)) {
      if (toNum < rangeMin) nextToError = `Value must be at least ${rangeMin}`;
      else if (toNum > rangeMax) nextToError = `Value must not exceed ${rangeMax}`;
    }

    if (
      nextFromError === '' &&
      nextToError === '' &&
      fromNum !== undefined &&
      toNum !== undefined &&
      !Number.isNaN(fromNum) &&
      !Number.isNaN(toNum) &&
      fromNum > toNum
    ) {
      nextFromError = 'The minimum value cannot be greater than the maximum value';
    }

    setFromError(nextFromError);
    setToError(nextToError);
  };

  return (
    <RangeSelect
      {...args}
      rangeFromError={fromError}
      rangeToError={toError}
      value={value}
      onChange={handleChange}
    />
  );
};

WithValidation.args = {
  ...Default.args,
  placeholder: 'Select a range (1-100)',
};
