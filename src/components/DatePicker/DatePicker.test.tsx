import React from 'react';
import { fireEvent, render, screen, waitFor } from '../../test/testUtils';
import { DatePicker, DatePickerProps } from './DatePicker';

const defaultProps: DatePickerProps = {
  yearRange: { start: 1990, end: 2100 },
  locale: 'de',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<DatePicker {...combinedProps} />);
};

describe('The DatePicker component', () => {
  it('displays a field with the current date ', () => {
    setup();

    expect(screen.getByTestId('datepicker-input1')).toHaveValue(
      `${new Date().toLocaleDateString('de')}`
    );
  });

  it('changes the date value in the field if the user clicks on another date in the calender', async () => {
    setup();

    fireEvent.click(screen.getByTestId('datepicker-input1'));
    await waitFor(() =>
      fireEvent.change(screen.getByTestId('datepicker-input1'), { target: { value: '20.04.2022' } })
    );
    expect(screen.getByTestId('datepicker-input1')).toHaveValue('20.04.2022');
  });
});
