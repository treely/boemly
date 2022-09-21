import { css } from '@emotion/react';

const datePickerStyle = css`
  .react-date-picker {
    display: inline-flex;
    position: relative;
  }
  .react-date-picker,
  .react-date-picker *,
  .react-date-picker *:before,
  .react-date-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-date-picker--disabled {
    background-color: var(--boemly-colors-gray-100);
    color: var(--boemly-colors-gray-500);
    border-radius: var(--boemly-radii-md);
  }
  .react-date-picker__wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    border: var(--boemly-space-px) solid var(--boemly-colors-gray-200);
    border-radius: var(--boemly-radii-md);
  }
  .react-date-picker__inputGroup {
    min-width: calc((4px * 3) + 0.54em * 8 + 0.217em * 2);
    flex-grow: 1;
    padding: 0 var(--boemly-space-2);
    box-sizing: content-box;
  }
  .react-date-picker__inputGroup__divider {
    padding: var(--boemly-space-1) 0;
    white-space: pre;
  }
  .react-date-picker__inputGroup__input {
    min-width: 0.54em;
    height: var(--boemly-space-8);
    position: relative;
    padding: 0 var(--boemly-space-px);
    border: 0;
    background: none;
    font: inherit;
    font-size: var(--boemly-fontSizes-sm);
    box-sizing: content-box;
    -moz-appearance: textfield;
  }
  .react-date-picker__inputGroup__input::-webkit-outer-spin-button,
  .react-date-picker__inputGroup__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-date-picker__inputGroup__input:invalid {
    background: var(--boemly-colors-transparent);
  }
  .react-date-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(var(--boemly-space-1) + 0.54em);
  }
  .react-date-picker__button {
    border: 0;
    background: transparent;
    padding: var(--boemly-space-1) var(--boemly-space-1);
  }
  .react-date-picker__button:enabled {
    cursor: pointer;
  }
  .react-date-picker__button:enabled:hover .react-date-picker__button__icon,
  .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
    stroke: var(--boemly-colors-primary-500);
  }
  .react-date-picker__button:disabled .react-date-picker__button__icon {
    stroke: var(--boemly-colors-gray-500);
  }
  .react-date-picker__button svg {
    display: inherit;
  }
  // .react-date-picker__calendar {
  //   width: 350px;
  //   max-width: 100vw;
  //   z-index: 1;
  // }
  .react-date-picker__calendar--open {
    position: absolute;
  }
  .react-date-picker__calendar--closed {
    display: none;
    position: absolute;
  }
  .react-date-picker__calendar .react-calendar {
    border-width: var(--boemly-space-px);
  }
  .react-calendar {
    width: var(--boemly-space-72);
    max-width: var(--boemly-space-full);
    background: var(--boemly-colors-white);
    border: var(--boemly-space-px) solid var(--boemly-colors-gray-200);
    line-height: var(--boemly-lineHeights-5);
    font-size: var(--boemly-fontSizes-sm);
    border-radius: calc(var(--boemly-radii-xl) - 0.2em);
    margin-top: var(--boemly-space-1);
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    padding: var(--boemly-space-1);
    height: var(--boemly-space-9);
    background: var(--boemly-colors-gray-100);
    border-top-right-radius: var(--boemly-radii-lg);
    border-top-left-radius: var(--boemly-radii-lg);
  }
  .react-calendar__navigation button {
    min-width: var(--boemly-space-8);
    border-radius: var(--boemly-radii-lg);
    margin: var(--boemly-space-px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-calendar__navigation button:disabled {
    background-color: var(--boemly-colors-gray-100);
  }
  .react-calendar__navigation button:enabled:hover {
    background-color: var(--boemly-colors-gray-200);
    border-radius: var(--boemly-radii-lg);
    margin: var(--boemly-space-px);
  }
  .react-calendar__navigation button:enabled:focus {
    background-color: var(--boemly-colors-gray-100);
    border-radius: var(--boemly-radii-lg);
    margin: var(--boemly-space-px);
  }
  .react-calendar__month-view__weekdays {
    background: var(--boemly-colors-gray-100);
    text-align: center;
    font-size: var(--boemly-fontSizes-xs);
    margin-bottom: var(--boemly-space-2);
    border-bottom: var(--boemly-space-px) solid var(--boemly-colors-gray-200);
  }
  .react-calendar__month-view__weekdays__weekday {
    padding-bottom: var(--boemly-space-1);
  }
  abbr[title] {
    text-decoration: none !important;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--boemly-fontSizes-sm);
    font-weight: bold;
  }
  .react-calendar__month-view__days {
    column-gap: var(--boemly-space-2);
    row-gap: var(--boemly-space-2);
    justify-content: center;
  }
  .react-calendar__month-view__days__day--weekend {
    color: var(--boemly-colors-black);
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--boemly-colors-gray-400);
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--boemly-space-4) var(--boemly-space-1);
  }
  .react-calendar__tile {
    display: flex;
    max-width: var(--boemly-space-8);
    max-height: var(--boemly-space-8);
    padding: var(--boemly-space-3) var(--boemly-space-2);
    align-items: center;
    justify-content: center;
  }
  .react-calendar__year-view__months {
    padding-top: var(--boemly-space-1);
    padding-bottom: var(--boemly-space-1);
    column-gap: var(--boemly-space-1);
    row-gap: var(--boemly-space-1);
    justify-content: center;
  }
  .react-calendar__year-view__months__month {
    max-width: calc(var(--boemly-space-20) + var(--boemly-space-2));
    min-height: var(--boemly-space-full);
  }
  .react-calendar__decade-view__years {
    padding-top: var(--boemly-space-1);
    padding-bottom: var(--boemly-space-1);
    column-gap: var(--boemly-space-1);
    row-gap: var(--boemly-space-1);
    justify-content: flex-start;
    margin-left: var(--boemly-space-4);
  }
  .react-calendar__decade-view__years__year {
    max-width: var(--boemly-space-20);
    min-height: var(--boemly-space-full);
  }
  .react-calendar__century-view__decades {
    padding-top: var(--boemly-space-1);
    padding-bottom: var(--boemly-space-1);
    column-gap: var(--boemly-space-1);
    row-gap: var(--boemly-space-1);
    justify-content: center;
  }
  .react-calendar__century-view__decades__decade {
    max-width: var(--boemly-space-full);
    min-height: var(--boemly-space-full);
  }
  .react-calendar__tile:disabled {
    background-color: var(--boemly-colors-gray-200);
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: var(--boemly-colors-gray-100);
    border-radius: var(--boemly-radii-lg);
  }
  .react-calendar__tile--now {
    font-weight: bold;
    border-radius: var(--boemly-radii-lg);
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: var(--boemly-colors-gray-100);
    border-radius: var(--boemly-radii-lg);
  }
  .react-calendar__tile--hasActive {
    background: var(--boemly-colors-primary-500);
    color: var(--boemly-colors-white);
    border-radius: var(--boemly-radii-lg);
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: var(--boemly-colors-primary-500);
    border-radius: var(--boemly-radii-lg);
  }
  .react-calendar__tile--active {
    background: var(--boemly-colors-primary-500);
    color: var(--boemly-colors-white);
    border-radius: var(--boemly-radii-lg);
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: var(--boemly-colors-primary-500);
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: var(--boemly-colors-gray-100);
  }
`;

export default datePickerStyle;
