import {
  CloseButton,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputGroupProps,
  InputProps,
  NativeSelect,
  Spacer,
} from '@chakra-ui/react';
import { CalendarBlankIcon, CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import React, { forwardRef, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as ReactDatePickerModule from 'react-datepicker';
import type { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { de, enUS, fr } from 'date-fns/locale';
import datePickerStyle from './styles';
import { dateFormat, months } from './constants';
import { Global } from '@emotion/react';

const DatePickerModule = ReactDatePickerModule as any;
const DatePickerComponent = DatePickerModule.default || DatePickerModule;
const registerLocale =
  DatePickerModule.registerLocale ||
  DatePickerModule.default?.registerLocale ||
  DatePickerComponent.registerLocale;

if (registerLocale && typeof registerLocale === 'function') {
  try {
    registerLocale('de', de);
    registerLocale('en', enUS);
    registerLocale('fr', fr);
  } catch (error) {
    console.error('Failed to register locales:', error);
  }
}

export interface DatePickerProps
  extends Omit<InputGroupProps, 'onChange' | 'onSelect' | 'children' | 'size'> {
  yearRange?: { start: number; end: number };
  locale?: 'de' | 'en' | 'fr';
  value?: Date;
  placeholder?: string;
  isClearable?: boolean;
  size?: InputProps['size'];

  // These collide with the props inherited from `InputGroupProps`
  onChange?: (date: Date | undefined) => void;
  onSelect?: (date: Date | null) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  yearRange = { start: new Date().getFullYear() - 100, end: new Date().getFullYear() + 100 },
  locale = 'en',
  isClearable = false,
  value,
  onChange,
  onSelect,
  placeholder,
  size,
  ...inputGroupProps
}: DatePickerProps) => {
  const datePickerRef = useRef<typeof DatePickerComponent>(null);

  const addonRef = useRef<HTMLDivElement>(null);
  const [addonWidth, setAddonWidth] = useState(0);

  useLayoutEffect(() => {
    if (addonRef.current) {
      setAddonWidth(addonRef.current.offsetWidth);
    }
  }, []);

  const CustomInput = forwardRef<
    HTMLInputElement,
    InputProps & { value?: string; onClick?: () => void }
  >(({ value, onClick }, ref) => (
    <InputGroup
      {...inputGroupProps}
      endElement={
        isClearable ? (
          <CloseButton
            marginEnd={`${addonWidth + 50}px`}
            aria-label="Clear date"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onChange?.(undefined);
            }}
            visibility={value ? 'visible' : 'hidden'}
            pointerEvents={value ? 'auto' : 'none'}
          />
        ) : undefined
      }
      endElementProps={
        isClearable
          ? {
              pointerEvents: value ? 'auto' : 'none',
            }
          : undefined
      }
      endAddon={
        <IconButton
          data-testid="calendar-icon"
          aria-label="open calendar"
          size="sm"
          variant="ghost"
          onClick={onClick} // Triggers react-datepicker open
          minWidth="auto"
          padding="1"
        >
          <CalendarBlankIcon size={16} />
        </IconButton>
      }
    >
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
        size={size}
      />
    </InputGroup>
  ));

  const years = useMemo(
    () =>
      Array.from({ length: yearRange.end - yearRange.start + 1 }, (_, i) => yearRange.start + i),
    [yearRange]
  );

  return (
    <>
      <Global styles={datePickerStyle} />
      <DatePickerComponent
        ref={datePickerRef}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }: ReactDatePickerCustomHeaderProps) => (
          <Flex margin="2" justifyContent="center">
            <IconButton
              aria-label="caret-left"
              variant="ghost"
              size="sm"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <CaretLeftIcon />
            </IconButton>
            <Spacer width="2" />
            <NativeSelect.Root width="auto" size="sm">
              <NativeSelect.Field
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(parseInt(value, 10))}
                data-testid="datepicker-select-year"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
            <Spacer width="2" />
            <NativeSelect.Root width="auto" size="sm">
              <NativeSelect.Field
                value={months[locale][date.getMonth()]}
                onChange={({ target: { value } }) => changeMonth(months[locale].indexOf(value))}
                data-testid="datepicker-select-month"
              >
                {months[locale].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
            <Spacer width="2" />
            <IconButton
              aria-label="caret-right"
              variant="ghost"
              size="sm"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <CaretRightIcon />
            </IconButton>
          </Flex>
        )}
        selected={value}
        onSelect={(date: Date | null) => onSelect && onSelect(date)}
        onChange={(date: Date | null) => onChange && onChange(date ?? undefined)}
        locale={locale}
        dateFormat={dateFormat[locale]}
        customInput={<CustomInput />}
        showPopperArrow={false}
        popperPlacement="bottom-start"
      />
    </>
  );
};
