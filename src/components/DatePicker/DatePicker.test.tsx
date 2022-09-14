import React from 'react';
import { fireEvent, render, screen } from '../../test/testUtils';
import { months } from './constants';
import { DatePicker } from '.';
import { DatePickerProps } from './DatePicker';

const onChangeSpy = jest.fn();

const defaultProps: DatePickerProps = {
  value: new Date('2022-01-01'),
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

  it('displays a field with the current date ', () => {
    setup();

    expect(screen.getByTestId('datepicker-input')).toHaveValue(
      `${new Date('2022-01-01').toLocaleDateString('en')}`
    );
  });

  it('changes the date value in the field if the user clicks on another date in the calender', () => {
    setup();

    fireEvent.click(screen.getByTestId('datepicker-input'));

    fireEvent.click(screen.getByTestId('datepicker-input'));
    fireEvent.click(screen.getByText('12'));

    expect(onChangeSpy).toHaveBeenCalledWith(new Date('2022-01-12'));
  });

  it('changes the date if a year is selected', async () => {
    setup({
      yearRange: { start: 2020, end: 2022 },
    });

    fireEvent.click(screen.getByTestId('datepicker-input'));
    fireEvent.change(screen.getByTestId('datepicker-select-year'), { target: { value: '2020' } });
    fireEvent.click(screen.getByText('12'));

    expect(onChangeSpy).toHaveBeenCalledWith(new Date('2020-01-12'));
  });

  it('changes the date if a month is selected', async () => {
    setup({
      locale: 'de',
    });

    fireEvent.click(screen.getByTestId('datepicker-input'));
    fireEvent.change(screen.getByTestId('datepicker-select-month'), {
      target: { value: months.de[1] },
    });
    fireEvent.click(screen.getByText('12'));

    expect(onChangeSpy).toHaveBeenCalledWith(new Date('2022-02-12'));
  });
});
