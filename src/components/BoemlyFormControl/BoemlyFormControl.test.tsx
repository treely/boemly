import React from 'react';
import { InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { Heart } from 'phosphor-react';
import { render, screen } from '../../test/testUtils';
import { BoemlyFormControlProps } from './BoemlyFormControl';
import { BoemlyFormControl } from '.';

const defaultProps: BoemlyFormControlProps = {
  id: 'form-id',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<BoemlyFormControl {...combinedProps} />);
};

describe('The BoemlyFormControl component', () => {
  it('displays an input field', () => {
    setup();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('displays a number input field if inputType number is given', () => {
    setup({ inputType: 'NumberInput' });

    expect(screen.getByRole('spinbutton')).toHaveAttribute('inputmode', 'decimal');
  });

  it('displays a select field if inputType select is given', () => {
    setup({
      inputType: 'Select',
      selectOptions: [
        { value: 'value-1', label: 'Label 1' },
        { value: 'value-2', label: 'Label 2', disabled: true },
      ],
    });

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')[0]).toHaveAttribute('value', 'value-1');
    expect(screen.getAllByRole('option')[0]).not.toHaveAttribute('disabled');
    expect(screen.getAllByRole('option')[1]).toHaveAttribute('value', 'value-2');
    expect(screen.getAllByRole('option')[1]).toHaveAttribute('disabled');
  });

  it('displays a checkbox field if the inputType checkbox is given', () => {
    setup({ inputType: 'Checkbox' });

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('displays a label if one is given', () => {
    setup({ label: 'Label' });

    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('displays a left addon/element if one is given', () => {
    setup({
      leftAddonsOrElements: [
        <InputLeftElement key="1">
          <Heart data-testid="heart" />
        </InputLeftElement>,
      ],
    });

    expect(screen.getByTestId('heart')).toBeInTheDocument();
  });

  it('displays a right addon/element if one is given', () => {
    setup({
      rightAddonsOrElements: [
        <InputRightElement key="1">
          <Heart data-testid="heart" />
        </InputRightElement>,
      ],
    });

    expect(screen.getByTestId('heart')).toBeInTheDocument();
  });

  it('displays an error message if one given', () => {
    setup({ errorMessage: 'Error message', isInvalid: true });

    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('displays a helper text if one is given', () => {
    setup({ helperText: 'Helper text' });

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('displays a check icon if isValid is true', () => {
    setup({ isValid: true });

    expect(screen.getByTestId('check')).toBeInTheDocument();
  });
});
