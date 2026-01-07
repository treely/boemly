'use client';

import React, { ReactNode } from 'react';
import {
  Checkbox,
  CheckboxRootProps,
  Input,
  InputGroup,
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
  RadioGroup,
  RadioGroupRootProps,
  HStack,
} from '@chakra-ui/react';
import { CaretDownIcon, CaretUpIcon, CheckIcon, WarningOctagonIcon } from '@phosphor-icons/react';
import { DatePicker, DatePickerProps } from '../DatePicker/DatePicker';
import { Slider, SliderProps } from '../..';
import { BREAKPOINT_MD_QUERY } from '../../constants/breakpoints';
import { Select, BoemlySelectProps } from '../Select';
import InputSize from '../../types/InputSize';

export interface BoemlyFormControlProps extends Field.RootProps {
  id: string;
  size?: InputSize;
  label?: string;
  helperText?: string;
  errorMessage?: string;

  // Input type
  inputType?:
    | 'Input'
    | 'NumberInput'
    | 'Select'
    | 'Checkbox'
    | 'Radio'
    | 'DatePicker'
    | 'Textarea'
    | 'Slider'
    | 'Radio';
  inputProps?: InputProps;
  numberInputProps?: NumberInputRootProps;
  selectProps?: BoemlySelectProps;
  selectOptions?: { value: string; label: string; disabled?: boolean }[];
  checkboxProps?: CheckboxRootProps;
  datePickerProps?: DatePickerProps;
  textareaProps?: TextareaProps;
  sliderProps?: SliderProps;
  radioGroupProps?: RadioGroupRootProps;
  radioOptions?: { value: string; label: string; disabled?: boolean }[];

  // Inner input elements
  leftAddons?: ReactNode[];
  rightAddons?: ReactNode[];
  leftElements?: ReactNode[];
  rightElements?: ReactNode[];

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
  textareaProps,
  sliderProps,
  radioGroupProps,
  radioOptions = [],

  leftAddons,
  rightAddons,
  leftElements,
  rightElements,

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
          <NumberInput.Root size={size} {...numberInputProps}>
            <NumberInput.Input bgColor="white" role="spinbutton" />
            <NumberInput.Control>
              <NumberInput.IncrementTrigger>
                <CaretUpIcon />
              </NumberInput.IncrementTrigger>
              <NumberInput.DecrementTrigger>
                <CaretDownIcon />
              </NumberInput.DecrementTrigger>
            </NumberInput.Control>
          </NumberInput.Root>
        );
      case 'Select':
        return (
          <Select
            backgroundColor="white"
            size={size}
            {...{ isDisabled, isInvalid, ...selectProps }}
            options={selectOptions}
          />
        );
      case 'Checkbox':
        return (
          <Checkbox.Root size={size} {...checkboxProps}>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>{checkboxProps?.children}</Checkbox.Label>
          </Checkbox.Root>
        );
      case 'DatePicker':
        return <DatePicker size={size} {...datePickerProps} />;
      case 'Textarea':
        return <Textarea bgColor="white" size={size} {...textareaProps} />;
      case 'Slider':
        return <Slider onChange={() => undefined} ariaLabel={label || 'slider'} {...sliderProps} />;
      case 'Radio':
        return (
          <RadioGroup.Root
            size={size === 'sm' ? 'xs' : size === 'md' ? 'sm' : size === 'lg' ? 'md' : 'lg'}
            {...radioGroupProps}
          >
            <HStack>
              {radioOptions.map((option) => (
                <RadioGroup.Item key={option.value} value={option.value}>
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
                </RadioGroup.Item>
              ))}
            </HStack>
          </RadioGroup.Root>
        );
      default:
        return <Input role="textbox" bgColor="white" {...inputProps} />;
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
        <Field.Label position={inputType === 'Slider' && isMobile ? 'absolute' : 'unset'}>
          {label}
        </Field.Label>
      )}
      {inputType === 'Input' ? (
        <InputGroup
          startAddon={
            leftAddons && leftAddons.length > 0 ? (
              <Flex gap="2" alignItems="center">
                {leftAddons.map((addon, index) => (
                  <Box key={index}>{addon}</Box>
                ))}
              </Flex>
            ) : undefined
          }
          startElement={
            leftElements && leftElements.length > 0 ? (
              <Flex gap="2" alignItems="center">
                {leftElements.map((element, index) => (
                  <Box key={index}>{element}</Box>
                ))}
              </Flex>
            ) : undefined
          }
          endAddon={
            rightAddons && rightAddons.length > 0 ? (
              <Flex gap="2" alignItems="center">
                {rightAddons.map((addon, index) => (
                  <Box key={index}>{addon}</Box>
                ))}
              </Flex>
            ) : undefined
          }
          endElement={
            (rightElements && rightElements.length > 0) || isValid ? (
              <Flex gap="2" alignItems="center">
                {rightElements &&
                  rightElements.map((element, index) => <Box key={index}>{element}</Box>)}
                {isValid && <CheckIcon size={20} color={primary700} data-testid="check" />}
              </Flex>
            ) : undefined
          }
        >
          <Input
            role={inputProps?.type === 'number' ? 'spinbutton' : 'textbox'}
            backgroundColor="white"
            size={size}
            {...inputProps}
          />
        </InputGroup>
      ) : (
        <Flex alignItems="center" width="full">
          {leftAddons && leftAddons.map((addon, index) => <Box key={index}>{addon}</Box>)}
          {leftElements && leftElements.map((element, index) => <Box key={index}>{element}</Box>)}
          {renderInputField()}
          {rightAddons && rightAddons.map((addon, index) => <Box key={index}>{addon}</Box>)}
          {rightElements && rightElements.map((element, index) => <Box key={index}>{element}</Box>)}
          {isValid && <CheckIcon size={20} color={primary700} data-testid="check" />}
        </Flex>
      )}
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
      {errorMessage && (
        <Field.ErrorText>
          <WarningOctagonIcon color={red500} size={12} />
          <Text fontSize="xs" color="red.500" ml="2">
            {errorMessage}
          </Text>
        </Field.ErrorText>
      )}
    </Field.Root>
  );
};
