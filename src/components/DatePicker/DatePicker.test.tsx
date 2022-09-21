import React from 'react';
import { fireEvent, render, screen } from '../../test/testUtils';
import { DatePicker } from '.';
import { DatePickerProps } from './DatePicker';
import 'jest-canvas-mock';

const onChangeSpy = jest.fn();

const defaultProps: DatePickerProps = {
  value: new Date('2022-10-01'),
  onChange: onChangeSpy,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<DatePicker {...combinedProps} />);
};

describe('The DatePicker component', () => {
  afterEach(() => {
    onChangeSpy.mockRestore();
  });

  it('displays a field with a date and calender button', () => {
    setup();

    expect(screen.getByLabelText('day-input')).toHaveValue(1);
    expect(screen.getByLabelText('month-input')).toHaveValue(10);
    expect(screen.getByLabelText('year-input')).toHaveValue(2022);
    expect(screen.getByLabelText('open-calender')).toBeInTheDocument();
  });

  it('changes the date value in the field if the user clicks on another date in the calender', () => {
    setup();

    fireEvent.click(screen.getByLabelText('open-calender'));
    fireEvent.click(screen.getByText('12'));

    expect(onChangeSpy).toHaveBeenCalledWith(new Date('2022-10-12'));
  });

  it('changes the date value in the field if the user types in another date in the input field', () => {
    setup();

    fireEvent.change(screen.getByLabelText('year-input'), {
      target: { value: '2023' },
    });

    expect(onChangeSpy).toHaveBeenCalledWith(new Date('2023-10-01'));
  });

  it('shows the months when the user clicks on the top calender navigation button once', () => {
    setup();

    fireEvent.click(screen.getByLabelText('open-calender'));
    fireEvent.click(screen.getByLabelText('calender-navigation'));

    expect(screen.getByText('January')).toBeInTheDocument();
    expect(screen.getByText('June')).toBeInTheDocument();
    expect(screen.getByText('December')).toBeInTheDocument();
  });

  it('shows the years of the decade when the user clicks on the top calender navigation button twice', () => {
    setup();

    fireEvent.click(screen.getByLabelText('open-calender'));
    fireEvent.click(screen.getByLabelText('calender-navigation'));
    fireEvent.click(screen.getByLabelText('calender-navigation'));

    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('2025')).toBeInTheDocument();
    expect(screen.getByText('2030')).toBeInTheDocument();
  });

  it('shows the decades of the century when the user clicks on the top calender navigation button three times', () => {
    setup();

    fireEvent.click(screen.getByLabelText('open-calender'));
    fireEvent.click(screen.getByLabelText('calender-navigation'));
    fireEvent.click(screen.getByLabelText('calender-navigation'));
    fireEvent.click(screen.getByLabelText('calender-navigation'));

    expect(screen.getByText('2001 – 2010')).toBeInTheDocument();
    expect(screen.getByText('2041 – 2050')).toBeInTheDocument();
    expect(screen.getByText('2091 – 2100')).toBeInTheDocument();
  });

  it('shows the next month when the user clicks on the next month button', () => {
    setup();

    fireEvent.click(screen.getByLabelText('open-calender'));
    fireEvent.click(screen.getByLabelText('next-month'));

    expect(screen.getByText('November 2022')).toBeInTheDocument();
  });

  it('shows the previous month when the user clicks on the previous month button', () => {
    setup();

    fireEvent.click(screen.getByLabelText('open-calender'));
    fireEvent.click(screen.getByLabelText('previous-month'));

    expect(screen.getByText('September 2022')).toBeInTheDocument();
  });

  it('shows the next year when the user clicks on the next year button', () => {
    setup();

    fireEvent.click(screen.getByLabelText('open-calender'));
    fireEvent.click(screen.getByLabelText('next-year'));

    expect(screen.getByText('October 2023')).toBeInTheDocument();
  });

  it('shows the previous year when the user clicks on the previous year button', () => {
    setup();

    fireEvent.click(screen.getByLabelText('open-calender'));
    fireEvent.click(screen.getByLabelText('previous-year'));

    expect(screen.getByText('October 2021')).toBeInTheDocument();
  });
});
