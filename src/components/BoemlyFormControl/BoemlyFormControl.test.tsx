import React from 'react';
import { HeartIcon } from '@phosphor-icons/react';
import { fireEvent, render, screen } from '../../test/testUtils';
import { BoemlyFormControlProps } from './BoemlyFormControl';
import { BoemlyFormControl } from '.';
import { act } from 'react';

const defaultProps: BoemlyFormControlProps = {
  id: 'form-id',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<BoemlyFormControl {...combinedProps} />);
};

describe('The BoemlyFormControl component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  it('displays an input field', () => {
    setup();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('displays a number input field if inputType number is given', () => {
    setup({ inputType: 'NumberInput' });

    expect(screen.getByRole('spinbutton')).toHaveAttribute('inputmode', 'decimal');
  });

  it('displays a select field if inputType select is given', async () => {
    setup({
      inputType: 'Select',
      selectOptions: [
        { value: 'value-1', label: 'Label 1' },
        { value: 'value-2', label: 'Label 2', disabled: true },
      ],
    });

    fireEvent.click(screen.getByRole('combobox'));

    const option1 = await screen.findByText('Label 1');
    const option1Element = option1.closest('[role="option"]');
    expect(option1Element).not.toHaveAttribute('aria-disabled', 'true');

    const option2 = await screen.findByText('Label 2');
    const option2Element = option2.closest('[role="option"]');

    const isDisabled = option2Element?.getAttribute('aria-disabled') === 'true';
    expect(isDisabled).toBe(true);
  });

  it('displays a checkbox field if the inputType checkbox is given', () => {
    setup({ inputType: 'Checkbox' });

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('displays a date picker field if the inputType DatePicker is given', () => {
    setup({ inputType: 'DatePicker' });

    expect(screen.getByTestId('datepicker-input')).toBeInTheDocument();
  });

  it('displays a slider if the inputType Slider is given', async () => {
    await act(async () => {
      setup({ inputType: 'Slider' });
    });

    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('displays a label if one is given', () => {
    setup({ label: 'Label' });

    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('displays a left addon if one is given', () => {
    setup({
      leftAddons: [<HeartIcon data-testid="heart" />],
    });

    expect(screen.getByTestId('heart')).toBeInTheDocument();
  });

  it('displays a left element if one is given', () => {
    setup({
      leftElements: [<HeartIcon data-testid="heart" />],
    });

    expect(screen.getByTestId('heart')).toBeInTheDocument();
  });

  it('displays a right addon if one is given', () => {
    setup({
      rightAddons: [<HeartIcon data-testid="heart" />],
    });

    expect(screen.getByTestId('heart')).toBeInTheDocument();
  });

  it('displays a right element if one is given', () => {
    setup({
      rightElements: [<HeartIcon data-testid="heart" />],
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
    setup({
      inputType: 'NumberInput', // Check icon only renders when inputType !== 'Input'
      isValid: true,
    });

    expect(screen.getByTestId('check')).toBeInTheDocument();
  });

  it('displays radio buttons if the inputType Radio is given', async () => {
    await act(async () => {
      setup({
        inputType: 'Radio',
        radioGroupProps: { defaultValue: 'option1' },
        radioOptions: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3', disabled: true },
        ],
      });
    });

    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 3')).toBeInTheDocument();
  });
});
