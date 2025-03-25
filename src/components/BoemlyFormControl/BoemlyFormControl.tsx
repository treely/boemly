import React, { ReactNode } from 'react';
import {
  Checkbox,
  CheckboxRootProps,
  Input,
  InputProps,
  NumberInput,
  Text,
  Textarea,
  TextareaProps,
  useMediaQuery,
  useToken,
  Field,
  NumberInputRootProps,
  Box,
  Flex,
} from '@chakra-ui/react';
import { CaretDown, CaretUp, Check, WarningOctagon } from '@phosphor-icons/react';
import { DatePicker, DatePickerProps } from '../DatePicker/DatePicker';
import { Slider, SliderProps } from '../..';
import { BREAKPOINT_MD_QUERY } from '../../constants/breakpoints';
import { Select, BoemlySelectProps } from '../Select';

export interface BoemlyFormControlProps extends Field.RootProps {
  id: string;
  size?: number;
  label?: string;
  helperText?: string;
  errorMessage?: string;

  // Input type
  inputType?:
    | 'Input'
    | 'NumberInput'
    | 'Select'
    | 'Checkbox'
    | 'DatePicker'
    | 'Textarea'
    | 'Slider';
  inputProps?: InputProps;
  numberInputProps?: NumberInputRootProps;
  selectProps?: BoemlySelectProps;
  selectOptions?: { value: string; label: string; disabled?: boolean }[];
  checkboxProps?: CheckboxRootProps;
  datePickerProps?: DatePickerProps;
  textareaProps?: TextareaProps;
  sliderProps?: SliderProps;

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
  size = 12, // TODO: Find out what's equivalent to "lg"
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
  textareaProps,
  sliderProps,

  leftAddonsOrElements = [],
  rightAddonsOrElements = [],

  isValid = false,
  isInvalid = false,
  isReadOnly = false,
  isDisabled = false,

  ...styleProps
}: BoemlyFormControlProps) => {
  const [isMobile] = useMediaQuery([BREAKPOINT_MD_QUERY], { fallback: [false] });
  const [primary700, red500] = useToken('colors', ['primary.700', 'red.500']);

  const renderInputField = () => {
    switch (inputType) {
      case 'NumberInput':
        return (
          <NumberInput.Root {...numberInputProps}>
            <NumberInput.Input bgColor="white" />
            <NumberInput.Control>
              <NumberInput.IncrementTrigger>
                <CaretUp />
              </NumberInput.IncrementTrigger>
              <NumberInput.DecrementTrigger>
                <CaretDown />
              </NumberInput.DecrementTrigger>
            </NumberInput.Control>
          </NumberInput.Root>
        );
      case 'Select':
        return (
          <Select
            bgColor="white"
            {...{ isDisabled, isInvalid, ...selectProps }}
            options={selectOptions}
          />
        );
      case 'Checkbox':
        return (
          <Checkbox.Root {...checkboxProps}>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Label>{label}</Checkbox.Label>
          </Checkbox.Root>
        );
      case 'DatePicker':
        return <DatePicker size={size} {...datePickerProps} />;
      case 'Textarea':
        return <Textarea bgColor="white" {...textareaProps} />;
      case 'Slider':
        return <Slider onChange={() => undefined} ariaLabel={label || 'slider'} {...sliderProps} />;
      default:
        return <Input bgColor="white" {...inputProps} />;
    }
  };

  return (
    <Field.Root
      id={id}
      {...styleProps}
      invalid={isInvalid}
      readOnly={isReadOnly}
      disabled={isDisabled}
    >
      {label && (
        <Field.Label>
          <Text
            fontSize="sm"
            lineHeight="1"
            position={inputType === 'Slider' && isMobile ? 'absolute' : 'unset'}
          >
            {label}
          </Text>
        </Field.Label>
      )}
      {inputType === 'Input' ? (
        <Box position="relative">
          <Input bgColor="white" size={size} {...inputProps} />
          <Box
            position="absolute"
            left="4"
            top="50%"
            transform="translateY(-50%)"
            display="flex"
            gap="2"
          >
            {leftAddonsOrElements.map((addonOrElement, index) => (
              <Box key={index}>{addonOrElement}</Box>
            ))}
          </Box>
          <Box
            position="absolute"
            right="4"
            top="50%"
            transform="translateY(-50%)"
            display="flex"
            gap="2"
          >
            {rightAddonsOrElements.map((addonOrElement, index) => (
              <Box key={index}>{addonOrElement}</Box>
            ))}
            {isValid && <Check size={20} color={primary700} data-testid="check" />}
          </Box>
        </Box>
      ) : (
        <Flex alignItems="center">
          {leftAddonsOrElements.map((addonOrElement, index) => (
            <Box key={index}>{addonOrElement}</Box>
          ))}
          {renderInputField()}
          {rightAddonsOrElements.map((addonOrElement, index) => (
            <Box key={index}>{addonOrElement}</Box>
          ))}
        </Flex>
      )}
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
      {errorMessage && (
        <Field.ErrorText>
          <WarningOctagon color={red500} size={12} />
          <Text fontSize="xs" color="red.500" ml="2">
            {errorMessage}
          </Text>
        </Field.ErrorText>
      )}
    </Field.Root>
  );
};
