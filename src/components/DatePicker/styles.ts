import { css } from '@emotion/react';

const datePickerStyle = css`
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: var(--boemly-colors-gray-300);
    border-style: solid;
    border-width: var(--boemly-space-1) var(--boemly-space-1) 0 0;
    content: '';
    display: block;
    height: var(--boemly-space-1);
    position: absolute;
    top: var(--boemly-space-1-5);
    width: var(--boemly-space-1);
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle {
    margin-left: -var(--boemly-space-1);
    position: absolute;
    width: 0;
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::after,
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::after {
    box-sizing: content-box;
    position: absolute;
    border: var(--boemly-space-2) solid var(--boemly-colors-transparent);
    height: 0;
    width: 1px;
    content: '';
    z-index: var(--boemly-zIndices-hide);
    border-width: var(--boemly-space-2);
    left: -var(--boemly-space-1);
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before {
    border-bottom-color: var(--boemly-colors-gray-200);
  }

  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle {
    top: 0;
    margin-top: -var(--boemly-space-2);
  }
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::after {
    border-top: none;
    border-bottom-color: var(--boemly-colors-gray-100);
  }
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::after {
    top: 0;
  }
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before {
    top: -1px;
    border-bottom-color: var(--boemly-colors-gray-200);
  }

  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle {
    bottom: 0;
    margin-bottom: -var(--boemly-space-2);
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::after {
    border-bottom: none;
    border-top-color: var(--boemly-colors-white);
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::after {
    bottom: 0;
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before {
    bottom: -1px;
    border-top-color: var(--boemly-colors-gray-200);
  }

  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
    width: var(--boemly-sizes-full);
  }

  .react-datepicker {
    font-size: var(--boemly-fontSizes-sm);
    background-color: var(--boemly-colors-white);
    color: var(--boemly-colors-black);
    border-radius: var(--boemly-radii-xl);
    border: 1px solid var(--boemly-colors-gray-200);
    display: inline-block;
    position: relative;
  }

  .react-datepicker--time-only .react-datepicker__triangle {
    left: var(--boemly-space-9);
  }
  .react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0;
  }
  .react-datepicker--time-only .react-datepicker__time,
  .react-datepicker--time-only .react-datepicker__time-box {
    border-bottom-left-radius: var(--boemly-space-1);
    border-bottom-right-radius: var(--boemly-space-1);
  }

  .react-datepicker__triangle {
    position: absolute;
    left: var(--boemly-space-12);
  }

  .react-datepicker-popper {
    z-index: 1;
  }
  .react-datepicker-popper[data-placement^='bottom'] {
    padding-top: var(--boemly-space-3);
  }
  .react-datepicker-popper[data-placement='bottom-end'] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement='top-end'] .react-datepicker__triangle {
    left: auto;
    right: var(--boemly-space-12);
  }
  .react-datepicker-popper[data-placement^='top'] {
    padding-bottom: var(--boemly-space-3);
  }
  .react-datepicker-popper[data-placement^='right'] {
    padding-left: var(--boemly-space-2);
  }
  .react-datepicker-popper[data-placement^='right'] .react-datepicker__triangle {
    left: auto;
    right: var(--boemly-space-10);
  }
  .react-datepicker-popper[data-placement^='left'] {
    padding-right: var(--boemly-space-2);
  }
  .react-datepicker-popper[data-placement^='left'] .react-datepicker__triangle {
    left: var(--boemly-space-10);
    right: auto;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: var(--boemly-colors-gray-100);
    border-bottom: 1px solid var(--boemly-colors-gray-200);
    border-top-left-radius: var(--boemly-radii-xl);
    padding: var(--boemly-space-2) 0;
    position: relative;
  }
  .react-datepicker__header--time {
    padding-bottom: var(--boemly-space-2);
    padding-left: var(--boemly-space-1);
    padding-right: var(--boemly-space-1);
  }
  .react-datepicker__header--time:not(.react-datepicker__header--time--only) {
    border-top-left-radius: 0;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: var(--boemly-radii-xl);
  }

  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block;
    margin: 0 2px;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: var(--boemly-colors-black);
    font-weight: bold;
    font-size: var(--boemly-fontSizes-md);
  }

  .react-datepicker-time__header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 2px;
    padding: 0;
    border: none;
    z-index: 1;
    height: var(--boemly-space-8);
    width: var(--boemly-space-8);
    text-indent: -999em;
    overflow: hidden;
  }
  .react-datepicker__navigation--previous {
    left: 2px;
  }
  .react-datepicker__navigation--next {
    right: 2px;
  }
  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: var(--boemly-space-20);
  }
  .react-datepicker__navigation--years {
    position: relative;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .react-datepicker__navigation--years-previous {
    top: var(--boemly-space-1);
  }
  .react-datepicker__navigation--years-upcoming {
    top: -var(--boemly-space-1);
  }
  .react-datepicker__navigation:hover *::before {
    border-color: #a6a6a6;
  }

  .react-datepicker__navigation-icon {
    position: relative;
    top: -1px;
    font-size: var(--boemly-fontSizes-lg);
    width: 0;
  }
  .react-datepicker__navigation-icon--next {
    left: -2px;
  }
  .react-datepicker__navigation-icon--next::before {
    transform: rotate(45deg);
    left: -var(--boemly-space-2);
  }
  .react-datepicker__navigation-icon--previous {
    right: -2px;
  }
  .react-datepicker__navigation-icon--previous::before {
    transform: rotate(225deg);
    right: -var(--boemly-space-2);
  }

  .react-datepicker__month-container {
    float: left;
  }

  .react-datepicker__year {
    margin: var(--boemly-space-2);
    text-align: center;
  }
  .react-datepicker__year-wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: var(--boemly-space-44);
  }
  .react-datepicker__year .react-datepicker__year-text {
    display: inline-block;
    width: var(--boemly-space-16);
    margin: 2px;
  }

  .react-datepicker__month {
    margin: var(--boemly-space-2);
    text-align: center;
  }
  .react-datepicker__month .react-datepicker__month-text,
  .react-datepicker__month .react-datepicker__quarter-text {
    display: inline-block;
    width: var(--boemly-space-16);
    margin: 2px;
  }

  .react-datepicker__input-time-container {
    clear: both;
    width: var(--boemly-sizes-full);
    float: left;
    margin: var(--boemly-space-1) 0 var(--boemly-space-2) var(--boemly-space-4);
    text-align: left;
  }
  .react-datepicker__input-time-container .react-datepicker-time__caption {
    display: inline-block;
  }
  .react-datepicker__input-time-container .react-datepicker-time__input-container {
    display: inline-block;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input {
    display: inline-block;
    margin-left: var(--boemly-space-3);
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input {
    width: auto;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type='time']::-webkit-inner-spin-button,
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type='time']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type='time'] {
    -moz-appearance: textfield;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__delimiter {
    margin-left: var(--boemly-space-1);
    display: inline-block;
  }

  .react-datepicker__time-container {
    float: right;
    border-left: 1px solid var(--boemly-colors-gray-200);
    width: var(--boemly-space-20);
  }
  .react-datepicker__time-container--with-today-button {
    display: inline;
    border: 1px solid var(--boemly-colors-gray-200);
    border-radius: var(--boemly-radii-md);
    position: absolute;
    right: -var(--boemly-space-20);
    top: 0;
  }
  .react-datepicker__time-container .react-datepicker__time {
    position: relative;
    background: var(--boemly-colors-white);
    border-bottom-right-radius: var(--boemly-space-1);
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    width: var(--boemly-space-20);
    overflow-x: hidden;
    margin: 0 auto;
    text-align: center;
    border-bottom-right-radius: var(--boemly-space-1);
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    list-style: none;
    margin: 0;
    height: calc(var(--boemly-space-48) + (var(--boemly-space-7) / 2));
    overflow-y: scroll;
    padding-right: 0;
    padding-left: 0;
    width: var(--boemly-sizes-full);
    box-sizing: content-box;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    height: var(--boemly-space-8);
    padding: var(--boemly-space-1) var(--boemly-space-3);
    white-space: nowrap;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    cursor: pointer;
    background-color: var(--boemly-colors-gray-100);
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: var(--boemly-colors-primary-600);
    color: var(--boemly-colors-white);
    font-weight: bold;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover {
    background-color: var(--boemly-colors-primary-600);
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled {
    color: var(--boemly-colors-gray-300);
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled:hover {
    cursor: default;
    background-color: var(--boemly-colors-transparent);
  }

  .react-datepicker__week-number {
    color: var(--boemly-colors-gray-300);
    display: inline-block;
    width: var(--boemly-space-7);
    line-height: var(--boemly-lineHeights-7);
    text-align: center;
    margin: var(--boemly-space-1);
  }
  .react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer;
  }
  .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-gray-100);
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }

  .react-datepicker__day--outside-month {
    color: var(--boemly-colors-gray-500) !important;
  }

  .react-datepicker__day-names {
    margin-bottom: -var(--boemly-space-2);
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: var(--boemly-colors-black);
    display: inline-block;
    width: var(--boemly-space-7);
    line-height: var(--boemly-lineHeights-7);
    text-align: center;
    margin: var(--boemly-space-1);
  }

  .react-datepicker__month--selected,
  .react-datepicker__month--in-selecting-range,
  .react-datepicker__month--in-range,
  .react-datepicker__quarter--selected,
  .react-datepicker__quarter--in-selecting-range,
  .react-datepicker__quarter--in-range {
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-primary-600);
    color: var(--boemly-colors-white);
  }
  .react-datepicker__month--selected:hover,
  .react-datepicker__month--in-selecting-range:hover,
  .react-datepicker__month--in-range:hover,
  .react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter--in-selecting-range:hover,
  .react-datepicker__quarter--in-range:hover {
    background-color: #1d5d90;
  }
  .react-datepicker__month--disabled,
  .react-datepicker__quarter--disabled {
    color: var(--boemly-colors-gray-300);
    pointer-events: none;
  }
  .react-datepicker__month--disabled:hover,
  .react-datepicker__quarter--disabled:hover {
    cursor: default;
    background-color: var(--boemly-colors-transparent);
  }

  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text,
  .react-datepicker__year-text {
    cursor: pointer;
  }
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-gray-100);
  }
  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: bold;
  }
  .react-datepicker__day--highlighted,
  .react-datepicker__month-text--highlighted,
  .react-datepicker__quarter-text--highlighted,
  .react-datepicker__year-text--highlighted {
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-primary-600);
    color: var(--boemly-colors-white);
  }
  .react-datepicker__day--highlighted:hover,
  .react-datepicker__month-text--highlighted:hover,
  .react-datepicker__quarter-text--highlighted:hover,
  .react-datepicker__year-text--highlighted:hover {
    background-color: var(--boemly-colors-primary-700);
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-primary-600);
    color: var(--boemly-colors-white);
  }
  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover {
    background-color: var(--boemly-colors-primary-700);
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-primary-600);
    color: var(--boemly-colors-white);
  }
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover,
  .react-datepicker__year-text--keyboard-selected:hover {
    background-color: var(--boemly-colors-primary-700);
  }
  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range) {
    background-color: rgba(33, 107, 165, 0.5);
  }
  .react-datepicker__month--selecting-range
    .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range),
  .react-datepicker__month--selecting-range
    .react-datepicker__month-text--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range),
  .react-datepicker__month--selecting-range
    .react-datepicker__quarter-text--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range),
  .react-datepicker__month--selecting-range
    .react-datepicker__year-text--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range) {
    background-color: var(--boemly-colors-gray-100);
    color: var(--boemly-colors-black);
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    color: var(--boemly-colors-gray-300);
  }
  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: var(--boemly-colors-transparent);
  }
`;

export default datePickerStyle;
