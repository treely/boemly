import type { StyleProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import {
  Checkbox,
  CheckboxProps,
  Text,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  InputProps,
  NumberInputProps,
  SelectProps,
  useToken,
} from '@chakra-ui/react';
import { CaretDown, CaretUp, Check, WarningOctagon } from 'phosphor-react';
import { DatePicker, DatePickerProps } from '../DatePicker/DatePicker';

export interface BoemlyFormControlProps extends StyleProps {
  id: string;
  size?: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;

  // Input type
  inputType?: 'Input' | 'NumberInput' | 'Select' | 'Checkbox' | 'DatePicker';
  inputProps?: InputProps;
  numberInputProps?: NumberInputProps;
  selectProps?: SelectProps;
  selectOptions?: { value: string; label: string; disabled?: boolean }[];
  checkboxProps?: CheckboxProps;
  datePickerProps?: DatePickerProps;

  // Inner input elements
  leftAddonsOrElements?: ReactNode[];
  rightAddonsOrElements?: ReactNode[];

  // States
  isValid?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
}

export const BoemlyFormControl: React.FC<BoemlyFormControlProps> = ({
  id,
  size = 'lg',
  label,
  helperText,
  errorMessage,

  inputType = 'Input',
  inputProps,
  numberInputProps,
  selectProps,
  selectOptions = [],
  checkboxProps,
  datePickerProps,

  leftAddonsOrElements = [],
  rightAddonsOrElements = [],

  isValid = false,
  isInvalid = false,
  isReadOnly = false,
  isDisabled = false,

  ...styleProps
}: BoemlyFormControlProps) => {
  const [primary700, red500] = useToken('colors', ['primary.700', 'red.500']);

  const renderInputField = () => {
    switch (inputType) {
      case 'NumberInput':
        return (
          <NumberInput {...numberInputProps}>
            <NumberInputField bgColor="white" />
            <NumberInputStepper>
              <NumberIncrementStepper>
                <CaretUp />
              </NumberIncrementStepper>
              <NumberDecrementStepper>
                <CaretDown />
              </NumberDecrementStepper>
            </NumberInputStepper>
          </NumberInput>
        );
      case 'Select':
        return (
          <Select bgColor="white" {...selectProps}>
            {selectOptions.map((selectOption) => (
              <option
                key={selectOption.value}
                value={selectOption.value}
                disabled={selectOption.disabled}
              >
                {selectOption.label}
              </option>
            ))}
          </Select>
        );
      case 'Checkbox':
        return <Checkbox {...checkboxProps} />;
      case 'DatePicker':
        return <DatePicker {...datePickerProps} />;
      default:
        return <Input bgColor="white" {...inputProps} />;
    }
  };

  return (
    <FormControl
      id={id}
      {...styleProps}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
    >
      {label && (
        <FormLabel fontSize="sm" lineHeight="1">
          {label}
        </FormLabel>
      )}
      <InputGroup size={size}>
        {leftAddonsOrElements.map((addonOrElement) => addonOrElement)}

        {renderInputField()}

        {isValid && inputType === 'Input' && (
          <InputRightElement>
            <Check size={20} color={primary700} data-testid="check" />
          </InputRightElement>
        )}
        {rightAddonsOrElements.map((addonOrElement) => addonOrElement)}
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {errorMessage && (
        <FormErrorMessage>
          <WarningOctagon color={red500} size={12} />
          <Text size="xsRegularNormal" color="red.500" ml="2">
            {errorMessage}
          </Text>
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
