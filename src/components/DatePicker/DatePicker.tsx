import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputGroupProps,
  InputProps,
  InputRightAddon,
  InputRightElement,
  Select,
  Spacer,
  forwardRef,
} from '@chakra-ui/react';
import { CalendarBlank, CaretLeft, CaretRight, X } from '@phosphor-icons/react';
import React, { useMemo, useRef } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import de from 'date-fns/locale/de';
import en from 'date-fns/locale/en-US';
import fr from 'date-fns/locale/fr';
import datePickerStyle from './styles';
import { dateFormat, months } from './constants';

export interface DatePickerProps extends Omit<InputGroupProps, 'onChange' | 'onSelect'> {
  yearRange?: { start: number; end: number };
  locale?: 'de' | 'en' | 'fr';
  value?: Date;
  placeholder?: string;
  isClearable?: boolean;

  // These collide with the props inherited from `InputGroupProps`
  onChange?: (date: Date | undefined) => void;
  onSelect?: (date: Date) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  yearRange = { start: new Date().getFullYear() - 100, end: new Date().getFullYear() + 100 },
  locale = 'en',
  isClearable = false,
  value,
  onChange,
  onSelect,
  placeholder,
  ...inputGroupProps
}: DatePickerProps) => {
  const datePickerRef = useRef<ReactDatePicker>(null);

  const CustomInput = forwardRef<InputProps, typeof Input>(({ value, onClick }, ref) => (
    <InputGroup {...inputGroupProps}>
      <Input
        data-testid="datepicker-input"
        className="custom-input"
        onClick={onClick}
        ref={ref}
        variant="outline"
        value={value}
        type="input"
        placeholder={placeholder}
        readOnly
      />

      {isClearable && value && (
        <InputRightElement mr="12">
          <IconButton
            data-testid="clear-button"
            aria-label="clear"
            variant="ghost"
            size="sm"
            onClick={() => onChange && onChange(undefined)}
            icon={<X size={16} />}
          />
        </InputRightElement>
      )}

      <InputRightAddon px="2">
        <IconButton
          data-testid="calendar-icon"
          aria-label="open calendar"
          size="sm"
          variant="ghost"
          icon={<CalendarBlank size={16} />}
          onClick={(ev) => {
            onClick && onClick(ev as any);
            datePickerRef.current && datePickerRef.current.setFocus();
          }}
        />
      </InputRightAddon>
    </InputGroup>
  ));

  const years = useMemo(
    () =>
      Array.from({ length: yearRange.end - yearRange.start + 1 }, (_, i) => yearRange.start + i),
    [yearRange]
  );

  registerLocale('de', de);
  registerLocale('en', en);
  registerLocale('fr', fr);

  return (
    <Box css={datePickerStyle}>
      <ReactDatePicker
        ref={datePickerRef}
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
              data-testid="datepicker-select-year"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
            <Spacer width="2" />
            <Select
              width="auto"
              size="sm"
              value={months[locale][date.getMonth()]}
              onChange={({ target: { value } }) => changeMonth(months[locale].indexOf(value))}
              data-testid="datepicker-select-month"
            >
              {months[locale].map((month) => (
                <option key={month} value={month}>
                  {month}
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
        selected={value}
        onSelect={(date: Date) => onSelect && onSelect(date)}
        onChange={(date: Date) => onChange && onChange(date)}
        locale={locale}
        dateFormat={dateFormat[locale]}
        customInput={<CustomInput />}
        showPopperArrow={false}
      />
    </Box>
  );
};
