import React, { ReactNode } from 'react';
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
  StyleProps,
  Text,
  Textarea,
  TextareaProps,
  useMediaQuery,
  useToken,
} from '@chakra-ui/react';
import { CaretDown, CaretUp, Check, WarningOctagon } from '@phosphor-icons/react';
import { DatePicker, DatePickerProps } from '../DatePicker/DatePicker';
import InputSize from '../../types/InputSize';
import { Slider, SliderProps } from '../..';
import { BREAKPOINT_MD_QUERY } from '../../constants/breakpoints';
import { Select, BoemlySelectProps } from '../Select';
// TODO: Migrate component

export interface BoemlyFormControlProps extends StyleProps {
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
    | 'DatePicker'
    | 'Textarea'
    | 'Slider';
  inputProps?: InputProps;
  numberInputProps?: NumberInputProps;
  selectProps?: BoemlySelectProps;
  selectOptions?: { value: string; label: string; disabled?: boolean }[];
  checkboxProps?: CheckboxProps;
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

  leftAddonsOrElements = [],
  rightAddonsOrElements = [],

  isValid = false,
  isInvalid = false,
  isReadOnly = false,
  isDisabled = false,

  ...styleProps
}: BoemlyFormControlProps) => {
  const [isMobile] = useMediaQuery(BREAKPOINT_MD_QUERY);
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
          <Select
            bgColor="white"
            {...{ isDisabled, isInvalid, ...selectProps }}
            options={selectOptions}
          />
        );
      case 'Checkbox':
        return <Checkbox {...checkboxProps} />;
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
    <FormControl
      id={id}
      {...styleProps}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
    >
      {label && (
        <FormLabel
          fontSize="sm"
          lineHeight="1"
          position={inputType === 'Slider' && isMobile ? 'absolute' : 'unset'}
        >
          {label}
        </FormLabel>
      )}
      {inputType === ('DatePicker' || 'Slider') ? (
        renderInputField()
      ) : (
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
      )}
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
