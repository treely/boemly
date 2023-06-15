import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import {
  Box,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { Heart } from 'phosphor-react';
import { BoemlyFormControl } from './BoemlyFormControl';
import { INPUT_SIZES } from '../../constants/inputSizes';

export default {
  title: 'components/BoemlyFormControl',
  component: BoemlyFormControl,
  argTypes: {
    id: { control: { type: 'text' } },
    inputType: {
      options: ['Input', 'NumberInput', 'Select', 'Checkbox', 'DatePicker', 'Textarea', 'Slider'],
      control: { type: 'radio' },
    },
    size: {
      options: INPUT_SIZES,
      control: { type: 'radio' },
    },
    label: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    isInvalid: { control: { type: 'boolean' } },
    isValid: { control: { type: 'boolean' } },
    isDisabled: { control: { type: 'boolean' } },
    isReadOnly: { control: { type: 'boolean' } },
  },
} as Meta<typeof BoemlyFormControl>;

const Template: StoryFn<typeof BoemlyFormControl> = (args) => <BoemlyFormControl {...args} />;

export const InputOnly = Template.bind({});
InputOnly.args = {
  id: 'input-only',
};

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  id: 'input-with-label',
  label: 'Label',
};

export const InputWithHelperText = Template.bind({});
InputWithHelperText.args = {
  id: 'input-with-helper-text',
  helperText: 'Helper text',
};

export const InputWithLabelAndHelperText = Template.bind({});
InputWithLabelAndHelperText.args = {
  id: 'input-with-label-and-helper-text',
  label: 'Label',
  helperText: 'Helper text',
};

export const InputWithErrorMessage = Template.bind({});
InputWithErrorMessage.args = {
  id: 'input-with-error-message',
  isInvalid: true,
  errorMessage: 'Error message 1',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  id: 'number-input',
  inputType: 'NumberInput',
};

export const Select = Template.bind({});
Select.args = {
  id: 'select',
  inputType: 'Select',
  selectOptions: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
};

export const SelectWithDisabledOption = Template.bind({});
SelectWithDisabledOption.args = {
  id: 'select',
  inputType: 'Select',
  selectOptions: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2', disabled: true },
  ],
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  id: 'checkbox',
  inputType: 'Checkbox',
  checkboxProps: { children: 'Checkbox' },
};

export const Textarea = Template.bind({});
Textarea.args = {
  id: 'textarea',
  inputType: 'Textarea',
  textareaProps: { placeholder: 'Textarea' },
};

export const DatePicker = Template.bind({});
DatePicker.args = {
  id: 'date-picker',
  inputType: 'DatePicker',
  datePickerProps: {
    yearRange: { start: 2000, end: 2050 },
    locale: 'en',
    value: new Date('2022-01-01'),
    onChange: (date) => console.log(date),
  },
};

export const Slider = Template.bind({});
Slider.args = {
  id: 'slider',
  inputType: 'Slider',
  sliderProps: {
    onChange: (value) => console.log(value),
    ariaLabel: 'slider',
    defaultValue: 0,
    min: 0,
    max: 500,
    unit: 'ha',
  },
};

export const InputWithLeftAddon = Template.bind({});
InputWithLeftAddon.args = {
  id: 'input-with-left-addon',
  leftAddonsOrElements: [
    <InputLeftAddon key="1">
      <Heart />
    </InputLeftAddon>,
  ],
};

export const InputWithLeftElement = Template.bind({});
InputWithLeftElement.args = {
  id: 'input-with-left-element',
  leftAddonsOrElements: [
    <InputLeftElement key="1">
      <Heart />
    </InputLeftElement>,
  ],
};

export const InputWithRightAddon = Template.bind({});
InputWithRightAddon.args = {
  id: 'input-with-right-addon',
  rightAddonsOrElements: [
    <InputRightAddon key="1">
      <Heart />
    </InputRightAddon>,
  ],
};

export const InputWithRightElement = Template.bind({});
InputWithRightElement.args = {
  id: 'input-with-right-element',
  rightAddonsOrElements: [
    <InputRightElement key="1">
      <Heart />
    </InputRightElement>,
  ],
};

export const StatesOverview = () => (
  <Box maxW="xs">
    <Box mb="4">
      <BoemlyFormControl id="default-state" label="Default state" />
    </Box>
    <Box mb="4">
      <BoemlyFormControl id="valid-state" label="Valid state" isValid />
    </Box>
    <Box mb="4">
      <BoemlyFormControl
        id="invalid-state"
        label="Invalid state"
        isInvalid
        errorMessage="Error message"
      />
    </Box>
    <Box mb="4">
      <BoemlyFormControl
        id="disabled-state"
        label="Disabled state"
        isDisabled
        inputProps={{ value: 'Disabled value' }}
      />
    </Box>
    <Box>
      <BoemlyFormControl
        id="read-only-state"
        label="Read only state"
        isReadOnly
        inputProps={{ value: 'Read only value' }}
      />
    </Box>
  </Box>
);
