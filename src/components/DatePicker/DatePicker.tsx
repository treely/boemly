import { Box } from '@chakra-ui/react';
import {
  CalendarBlank,
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from 'phosphor-react';
import React from 'react';
import ReactDatePicker from 'react-date-picker/dist/entry.nostyle';
import datePickerStyle from './styles';

export interface DatePickerProps {
  yearRange?: { start: number; end: number };
  locale?: 'de' | 'en' | 'fr';
  value?: Date;
  onChange?: (date: Date) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }: DatePickerProps) => {
  return (
    <Box css={datePickerStyle}>
      <ReactDatePicker
        calendarAriaLabel="open-calender"
        dayAriaLabel="day-input"
        monthAriaLabel="month-input"
        yearAriaLabel="year-input"
        navigationAriaLabel="calender-navigation"
        nextAriaLabel="next-month"
        next2AriaLabel="next-year"
        prevAriaLabel="previous-month"
        prev2AriaLabel="previous-year"
        onChange={onChange}
        value={value}
        clearIcon={null}
        calendarIcon={<CalendarBlank />}
        nextLabel={<CaretRight />}
        next2Label={<CaretDoubleRight />}
        prevLabel={<CaretLeft />}
        prev2Label={<CaretDoubleLeft />}
      />
    </Box>
  );
};
