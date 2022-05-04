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
  afterEach(() => {
    onChangeSpy.mockRestore();
  });

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

  it('calls the onChange function if the slider is dragged', () => {
    setup();

    fireEvent.mouseDown(screen.getByRole('slider'), {
      clientX: 0,
      clientY: 0,
    });

    expect(onChangeSpy).toHaveBeenCalledWith(0);
  });

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
