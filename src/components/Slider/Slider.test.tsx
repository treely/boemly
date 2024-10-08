import React from 'react';
import { Slider } from '.';
import { fireEvent, render, screen } from '../../test/testUtils';
import { SliderProps } from './Slider';

const onChangeSpy = jest.fn();

const defaultProps: SliderProps = {
  ariaLabel: 'Aria label',
  onChange: onChangeSpy,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<Slider {...combinedProps} />);
};

describe('The Slider component', () => {
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

  afterEach(() => {
    onChangeSpy.mockRestore();
  });

  describe('in the default variant', () => {
    it('displays a slider', () => {
      setup();

      expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    it('displays an input field', () => {
      setup();

      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    });

    it('calls the onChange function if the input is used', () => {
      setup();

      fireEvent.input(screen.getByRole('spinbutton'), { target: { value: '12' } });

      expect(onChangeSpy).toHaveBeenCalledWith(12);
    });

    it('does not call the onChange function if the input value is an empty string', () => {
      setup();

      fireEvent.input(screen.getByRole('spinbutton'), { target: { value: '' } });

      expect(onChangeSpy).toHaveBeenCalledTimes(0);
    });

    it('calls the onChange function with the minimum if the value in the input field is lower then minimum', () => {
      setup();

      fireEvent.input(screen.getByRole('spinbutton'), { target: { value: '-1' } });

      expect(onChangeSpy).toHaveBeenCalledWith(0);
    });

    it('calls the onChange function with the maximum if the value in the input field is higher then maximum', () => {
      setup();

      fireEvent.input(screen.getByRole('spinbutton'), { target: { value: '101' } });

      expect(onChangeSpy).toHaveBeenCalledWith(100);
    });

    // We can't test if the slider triggers the onChange function since we have to polyfill the ResizeObserver

    it('displays the unit if given', () => {
      setup({ unit: 'unit' });

      expect(screen.getByText('unit')).toBeInTheDocument();
      expect(screen.getByText('0 unit')).toBeInTheDocument();
      expect(screen.getByText('100 unit')).toBeInTheDocument();
    });

    it('displays custom min and max values', () => {
      setup({ min: 1, max: 99 });

      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('99')).toBeInTheDocument();
    });
  });

  describe('in the boundary variant', () => {
    it('displays a boundary slider', () => {
      setup({ variant: 'boundary' });

      expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    it('displays the correct boundary slider min and max texts', () => {
      setup({
        variant: 'boundary',
        min: 10,
        max: 90,
        unit: 'kg',
        lowerBoundText: 'Low',
        upperBoundText: 'High',
      });

      expect(screen.getByText('Low')).toBeInTheDocument();
      expect(screen.getByText('High')).toBeInTheDocument();
      expect(screen.getByText('10 kg')).toBeInTheDocument();
      expect(screen.getByText('90 kg')).toBeInTheDocument();
    });

    it('displays a tooltip with the correct value', () => {
      setup({ variant: 'boundary' });

      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    it('updates the slider value when the external value prop changes', () => {
      const { rerender } = render(<Slider {...defaultProps} value={30} onChange={onChangeSpy} />);

      expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '30');

      rerender(<Slider {...defaultProps} value={70} onChange={onChangeSpy} />);

      expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '70');
    });
  });
});
