import {
  Box,
  Flex,
  forwardRef,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spacer,
} from '@chakra-ui/react';
import { CalendarBlank, CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import { useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import de from 'date-fns/locale/de';
import en from 'date-fns/locale/en-US';
import fr from 'date-fns/locale/fr';
import { css } from '@emotion/react';

export interface DatePickerProps {
  yearRange?: { start: number; end: number };
  locale?: 'de' | 'en' | 'fr';
}

export const DatePicker: React.FC<DatePickerProps> = ({
  yearRange = { start: 1990, end: new Date().getFullYear() + 100 },
  locale = 'en',
}: DatePickerProps) => {
  const [date, setDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <InputGroup>
      <Input
        data-testid="datepicker-input1"
        className="custom-input"
        onClick={onClick}
        ref={ref}
        variant="outline"
        value={value}
        type="input"
        readOnly
      />
      <InputRightElement children={<CalendarBlank size="16" />} />
    </InputGroup>
  ));

  const years = Array.from(
    { length: yearRange.end - yearRange.start },
    (_, i) => yearRange.start + 1 + i
  );
  const months = {
    de: [
      'Jänner',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ],
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    fr: [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
    ],
  };
  const dateFormat = { de: 'd.M.yyyy', en: 'M/d/yyyy', fr: 'd/M/yyyy' };

  registerLocale('de', de);
  registerLocale('en', en);
  registerLocale('fr', fr);

  return (
    <Box
      css={css`
        .react-datepicker {
          border-radius: var(--boemly-radii-xl);
        }
        .react-datepicker__header {
          border-top-left-radius: var(--boemly-radii-xl);
          border-top-right-radius: var(--boemly-radii-xl);
        }
        .react-datepicker__day--selected {
          background-color: var(--boemly-colors-green-500);
        }
        .react-datepicker__day--outside-month {
          color: var(--boemly-colors-gray-500);
        }
      `}
    >
      <ReactDatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <Flex margin="2" justifyContent="center">
            <IconButton
              aria-label="caret-left"
              variant="ghost"
              size="sm"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <CaretLeft />
            </IconButton>
            <Spacer width="2" />
            <Select
              width="auto"
              size="sm"
              value={date.getFullYear()}
              onChange={({ target: { value } }) => changeYear(parseInt(value, 10))}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <Spacer width="2" />
            <Select
              width="auto"
              size="sm"
              value={months[locale][date.getMonth()]}
              onChange={({ target: { value } }) => changeMonth(months[locale].indexOf(value))}
            >
              {months[locale].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <Spacer width="2" />
            <IconButton
              aria-label="caret-right"
              variant="ghost"
              size="sm"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <CaretRight />
            </IconButton>
          </Flex>
        )}
        selected={date}
        onChange={(date: Date) => setDate(date)}
        locale={locale}
        dateFormat={dateFormat[locale]}
        customInput={<CustomInput />}
        showPopperArrow={false}
      />
    </Box>
  );
};
