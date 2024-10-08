import React from 'react';
import { fireEvent, render, screen } from '../../test/testUtils';
import { months } from './constants';
import { DatePicker } from '.';
import { DatePickerProps } from './DatePicker';

const onChangeSpy = jest.fn();
const onSelectSpy = jest.fn();

const defaultProps: DatePickerProps = {
  value: new Date('2022-01-01'),
  onChange: onChangeSpy,
  onSelect: onSelectSpy,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<DatePicker {...combinedProps} />);
};

describe('The DatePicker component', () => {
  afterEach(() => {
    onChangeSpy.mockRestore();
    onSelectSpy.mockRestore();
  });

  it('displays a field with the current date', () => {
    setup();

    expect(screen.getByTestId('datepicker-input')).toHaveValue(
      `${new Date('2022-01-01').toLocaleDateString('en')}`
    );
  });

  it('displays the placeholder', () => {
    setup({ placeholder: 'datepicker-placeholder' });

    expect(screen.getByTestId('datepicker-input')).toHaveAttribute(
      'placeholder',
      'datepicker-placeholder'
    );
  });

  it('changes the date value in the field if the user clicks on another date in the calender', () => {
    setup();

    fireEvent.click(screen.getByTestId('datepicker-input'));

    fireEvent.click(screen.getByTestId('datepicker-input'));
    fireEvent.click(screen.getByText('12'));

    expect(onChangeSpy).toHaveBeenCalledWith(new Date('2022-01-12'));
    expect(onSelectSpy).toHaveBeenCalledWith(new Date('2022-01-12'));
  });

  it('changes the date if a year is selected', async () => {
    setup({
      yearRange: { start: 2020, end: 2022 },
    });

    fireEvent.click(screen.getByTestId('datepicker-input'));
    fireEvent.change(screen.getByTestId('datepicker-select-year'), { target: { value: '2020' } });
    fireEvent.click(screen.getByText('12'));

    expect(onChangeSpy).toHaveBeenCalledWith(new Date('2020-01-12'));
    expect(onSelectSpy).toHaveBeenCalledWith(new Date('2020-01-12'));
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
    expect(onSelectSpy).toHaveBeenCalledWith(new Date('2022-02-12'));
  });

  it('also allows to change the date when clicking on the icon', () => {
    setup();

    fireEvent.click(screen.getByTestId('calendar-icon'));

    fireEvent.click(screen.getByTestId('calendar-icon'));
    fireEvent.click(screen.getByText('12'));

    expect(onChangeSpy).toHaveBeenCalledWith(new Date('2022-01-12'));
    expect(onSelectSpy).toHaveBeenCalledWith(new Date('2022-01-12'));
  });

  it('does not display a clear button by default', () => {
    setup();

    fireEvent.click(screen.getByTestId('datepicker-input'));

    fireEvent.click(screen.getByTestId('datepicker-input'));
    fireEvent.click(screen.getByText('12'));

    expect(screen.queryByTestId('clear-button')).not.toBeInTheDocument();
  });

  it('allows for clearing of the field if isClearable is true', () => {
    setup({ isClearable: true });

    fireEvent.click(screen.getByTestId('datepicker-input'));

    fireEvent.click(screen.getByTestId('datepicker-input'));
    fireEvent.click(screen.getByText('12'));

    expect(onChangeSpy).toHaveBeenCalledWith(new Date('2022-01-12'));
    expect(onSelectSpy).toHaveBeenCalledWith(new Date('2022-01-12'));

    fireEvent.click(screen.getByTestId('clear-button'));

    expect(onChangeSpy).toHaveBeenCalledWith(undefined);
    expect(onChangeSpy).toHaveBeenCalledTimes(2);

    expect(onSelectSpy).toHaveBeenCalledTimes(1);
  });
});
