import { css } from '@emotion/react';

const datePickerStyle = css`
  @charset "UTF-8";
  .react-datepicker__navigation-icon::before,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    border-color: var(--boemly-colors-gray-300);
    border-style: solid;
    border-width: var(--boemly-spacing-px) var(--boemly-spacing-px) 0 0;
    content: '';
    display: block;
    height: var(--boemly-spacing-1);
    position: absolute;
    top: var(--boemly-spacing-1-5);
    width: var(--boemly-spacing-1);
  }
  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
  }

  .react-datepicker {
    font-size: var(--boemly-font-sizes-sm);
    background-color: var(--boemly-colors-white);
    color: var(--boemly-colors-black);
    border-radius: var(--boemly-radii-xl);
    border: var(--boemly-spacing-px) solid var(--boemly-colors-gray-200);
    display: inline-block;
    position: relative;
  }

  .react-datepicker--time-only .react-datepicker__triangle {
    left: var(--boemly-spacing-9);
  }
  .react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0;
  }
  .react-datepicker--time-only .react-datepicker__time,
  .react-datepicker--time-only .react-datepicker__time-box {
    border-bottom-left-radius: var(--boemly-spacing-1);
    border-bottom-right-radius: var(--boemly-spacing-1);
  }

  .react-datepicker-popper {
    z-index: 1;
  }
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle {
    padding-top: var(--boemly-spacing-3);
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle {
    padding-bottom: var(--boemly-spacing-3);
  }
  .react-datepicker-popper[data-placement='bottom-end'] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement='top-end'] .react-datepicker__triangle {
    left: auto;
    right: var(--boemly-spacing-12);
  }
  .react-datepicker-popper[data-placement^='right'] {
    padding-left: var(--boemly-spacing-2);
  }
  .react-datepicker-popper[data-placement^='right'] .react-datepicker__triangle {
    left: auto;
    right: var(--boemly-spacing-10);
  }
  .react-datepicker-popper[data-placement^='left'] {
    padding-right: var(--boemly-spacing-2);
  }
  .react-datepicker-popper[data-placement^='left'] .react-datepicker__triangle {
    left: var(--boemly-spacing-10);
    right: auto;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: var(--boemly-colors-gray-100);
    border-bottom: var(--boemly-spacing-px) solid var(--boemly-colors-gray-200);
    border-top-left-radius: 0.3rem;
    padding: 8px 0;
    position: relative;
  }
  .react-datepicker__header--time {
    padding-bottom: var(--boemly-spacing-2);
    padding-left: var(--boemly-spacing-1);
    padding-right: var(--boemly-spacing-1);
  }
  .react-datepicker__header--time:not(.react-datepicker__header--time--only) {
    border-top-left-radius: 0;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: var(--boemly-radii-xl);
    border-top-left-radius: var(--boemly-radii-xl);
  }

  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block;
    margin: 0 15px;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: var(--boemly-colors-black);
    font-weight: bold;
    font-size: var(--boemly-font-sizes-md);
  }

  h2.react-datepicker__current-month {
    padding: 0;
    margin: 0;
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
    height: var(--boemly-spacing-8);
    width: var(--boemly-spacing-8);
    text-indent: -999em;
    overflow: hidden;
  }
  .react-datepicker__navigation--previous {
    left: 2px;
  }
  .react-datepicker__navigation--next {
    right: 2px;
  }
  .react-datepicker__navigation--next--with-time:not(
      .react-datepicker__navigation--next--with-today-button
    ) {
    right: var(--boemly-spacing-20);
  }
  .react-datepicker__navigation--years {
    position: relative;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .react-datepicker__navigation--years-previous {
    top: var(--boemly-spacing-1);
  }
  .react-datepicker__navigation--years-upcoming {
    top: -var(--boemly-spacing-1);
  }
  .react-datepicker__navigation:hover *::before {
    border-color: rgb(165.75, 165.75, 165.75);
  }

  .react-datepicker__navigation-icon {
    position: relative;
    top: -var(--boemly-spacing-px);
    font-size: var(--boemly-font-sizes-lg);
    width: 0;
  }
  .react-datepicker__navigation-icon--next {
    left: -2px;
  }
  .react-datepicker__navigation-icon--next::before {
    transform: rotate(45deg);
    left: -var(--boemly-spacing-2);
  }
  .react-datepicker__navigation-icon--previous {
    right: -2px;
  }
  .react-datepicker__navigation-icon--previous::before {
    transform: rotate(225deg);
    right: -var(--boemly-spacing-2);
  }

  .react-datepicker__month-container {
    float: left;
  }

  .react-datepicker__year {
    margin: var(--boemly-spacing-2);
    text-align: center;
  }
  .react-datepicker__year-wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: var(--boemly-spacing-44);
  }
  .react-datepicker__year .react-datepicker__year-text {
    display: inline-block;
    width: var(--boemly-spacing-16);
    margin: 2px;
  }

  .react-datepicker__month {
    margin: var(--boemly-spacing-2);
    text-align: center;
  }
  .react-datepicker__month .react-datepicker__month-text,
  .react-datepicker__month .react-datepicker__quarter-text {
    display: inline-block;
    width: var(--boemly-spacing-16);
    margin: 2px;
  }

  .react-datepicker__input-time-container {
    clear: both;
    width: var(--boemly-sizes-full);
    float: left;
    margin: var(--boemly-spacing-1) 0 var(--boemly-spacing-2) var(--boemly-spacing-4);
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
    margin-left: var(--boemly-spacing-3);
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
    margin-left: var(--boemly-spacing-1);
    display: inline-block;
  }

  .react-datepicker__time-container {
    float: right;
    border-left: var(--boemly-spacing-px) solid var(--boemly-colors-gray-200);
    width: var(--boemly-spacing-20);
  }
  .react-datepicker__time-container--with-today-button {
    display: inline;
    border: var(--boemly-spacing-px) solid var(--boemly-colors-gray-200);
    border-radius: var(--boemly-radii-md);
    position: absolute;
    right: -var(--boemly-spacing-20);
    top: 0;
  }
  .react-datepicker__time-container .react-datepicker__time {
    position: relative;
    background: var(--boemly-colors-white);
    border-bottom-right-radius: var(--boemly-spacing-1);
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    width: var(--boemly-spacing-20);
    overflow-x: hidden;
    margin: 0 auto;
    text-align: center;
    border-bottom-right-radius: var(--boemly-spacing-1);
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    list-style: none;
    margin: 0;
    height: calc(var(--boemly-spacing-48) + (var(--boemly-spacing-7) / 2));
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
    height: var(--boemly-spacing-8);
    padding: var(--boemly-spacing-1) var(--boemly-spacing-3);
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
    background-color: var(--boemly-colors-primary-800);
    color: var(--boemly-colors-white);
    font-weight: bold;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover {
    background-color: var(--boemly-colors-primary-800);
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
    width: var(--boemly-spacing-7);
    line-height: var(--boemly-line-heights-7);
    text-align: center;
    margin: var(--boemly-spacing-1);
  }
  .react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer;
  }
  .react-datepicker__week-number.react-datepicker__week-number--clickable:not(
      .react-datepicker__week-number--selected
    ):hover {
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-gray-100);
  }
  .react-datepicker__week-number--selected {
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-primary-800);
    color: var(--boemly-colors-white);
  }
  .react-datepicker__week-number--selected:hover {
    background-color: var(--boemly-colors-primary-800);
  }

  .react-datepicker__day-names {
    white-space: nowrap;
    margin-bottom: -var(--boemly-spacing-2);
  }

  .react-datepicker__day--outside-month {
    color: var(--boemly-colors-gray-500) !important;
  }

  .react-datepicker__week {
    white-space: nowrap;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: var(--boemly-colors-black);
    display: inline-block;
    width: var(--boemly-spacing-7);
    line-height: var(--boemly-line-heights-7);
    text-align: center;
    margin: var(--boemly-spacing-1);
  }

  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text,
  .react-datepicker__year-text {
    cursor: pointer;
  }
  .react-datepicker__day:not([aria-disabled='true']):hover,
  .react-datepicker__month-text:not([aria-disabled='true']):hover,
  .react-datepicker__quarter-text:not([aria-disabled='true']):hover,
  .react-datepicker__year-text:not([aria-disabled='true']):hover {
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-white);
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
    background-color: var(--boemly-colors-primary-800);
    color: var(--boemly-colors-white);
  }
  .react-datepicker__day--highlighted:not([aria-disabled='true']):hover,
  .react-datepicker__month-text--highlighted:not([aria-disabled='true']):hover,
  .react-datepicker__quarter-text--highlighted:not([aria-disabled='true']):hover,
  .react-datepicker__year-text--highlighted:not([aria-disabled='true']):hover {
    background-color: rgb(49.8551020408, 189.6448979592, 62.5632653061);
  }
  .react-datepicker__day--highlighted-custom-1,
  .react-datepicker__month-text--highlighted-custom-1,
  .react-datepicker__quarter-text--highlighted-custom-1,
  .react-datepicker__year-text--highlighted-custom-1 {
    color: magenta;
  }
  .react-datepicker__day--highlighted-custom-2,
  .react-datepicker__month-text--highlighted-custom-2,
  .react-datepicker__quarter-text--highlighted-custom-2,
  .react-datepicker__year-text--highlighted-custom-2 {
    color: green;
  }
  .react-datepicker__day--holidays,
  .react-datepicker__month-text--holidays,
  .react-datepicker__quarter-text--holidays,
  .react-datepicker__year-text--holidays {
    position: relative;
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-orange-500);
    color: var(--boemly-colors-white);
  }
  .react-datepicker__day--holidays .overlay,
  .react-datepicker__month-text--holidays .overlay,
  .react-datepicker__quarter-text--holidays .overlay,
  .react-datepicker__year-text--holidays .overlay {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: var(--boemly-colors-white);
    padding: var(--boemly-spacing-1);
    border-radius: var(--boemly-radii-base);
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s ease-in-out;
  }
  .react-datepicker__day--holidays:not([aria-disabled='true']):hover,
  .react-datepicker__month-text--holidays:not([aria-disabled='true']):hover,
  .react-datepicker__quarter-text--holidays:not([aria-disabled='true']):hover,
  .react-datepicker__year-text--holidays:not([aria-disabled='true']):hover {
    background-color: rgb(207, 82.9642857143, 0);
  }
  .react-datepicker__day--holidays:hover .overlay,
  .react-datepicker__month-text--holidays:hover .overlay,
  .react-datepicker__quarter-text--holidays:hover .overlay,
  .react-datepicker__year-text--holidays:hover .overlay {
    visibility: visible;
    opacity: 1;
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
    background-color: var(--boemly-colors-primary-800);
    color: var(--boemly-colors-white);
  }
  .react-datepicker__day--selected:not([aria-disabled='true']):hover,
  .react-datepicker__day--in-selecting-range:not([aria-disabled='true']):hover,
  .react-datepicker__day--in-range:not([aria-disabled='true']):hover,
  .react-datepicker__month-text--selected:not([aria-disabled='true']):hover,
  .react-datepicker__month-text--in-selecting-range:not([aria-disabled='true']):hover,
  .react-datepicker__month-text--in-range:not([aria-disabled='true']):hover,
  .react-datepicker__quarter-text--selected:not([aria-disabled='true']):hover,
  .react-datepicker__quarter-text--in-selecting-range:not([aria-disabled='true']):hover,
  .react-datepicker__quarter-text--in-range:not([aria-disabled='true']):hover,
  .react-datepicker__year-text--selected:not([aria-disabled='true']):hover,
  .react-datepicker__year-text--in-selecting-range:not([aria-disabled='true']):hover,
  .react-datepicker__year-text--in-range:not([aria-disabled='true']):hover {
    background-color: rgb(28.75, 93.2196969697, 143.75);
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: var(--boemly-radii-md);
    background-color: var(--boemly-colors-primary-800);
    color: var(--boemly-colors-white);
  }
  .react-datepicker__day--keyboard-selected:not([aria-disabled='true']):hover,
  .react-datepicker__month-text--keyboard-selected:not([aria-disabled='true']):hover,
  .react-datepicker__quarter-text--keyboard-selected:not([aria-disabled='true']):hover,
  .react-datepicker__year-text--keyboard-selected:not([aria-disabled='true']):hover {
    background-color: rgb(28.75, 93.2196969697, 143.75);
  }
  .react-datepicker__day--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range
    ),
  .react-datepicker__month-text--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range
    ),
  .react-datepicker__quarter-text--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range
    ),
  .react-datepicker__year-text--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range
    ) {
    background-color: rgba(33, 107, 165, 0.5);
  }
  .react-datepicker__month--selecting-range
    .react-datepicker__day--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ),
  .react-datepicker__year--selecting-range
    .react-datepicker__day--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ),
  .react-datepicker__month--selecting-range
    .react-datepicker__month-text--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ),
  .react-datepicker__year--selecting-range
    .react-datepicker__month-text--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ),
  .react-datepicker__month--selecting-range
    .react-datepicker__quarter-text--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ),
  .react-datepicker__year--selecting-range
    .react-datepicker__quarter-text--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ),
  .react-datepicker__month--selecting-range
    .react-datepicker__year-text--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ),
  .react-datepicker__year--selecting-range
    .react-datepicker__year-text--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ) {
    background-color: var(--boemly-colors-white);
    color: var(--boemly-colors-black);
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    color: #ccc;
  }
  .react-datepicker__day--disabled .overlay,
  .react-datepicker__month-text--disabled .overlay,
  .react-datepicker__quarter-text--disabled .overlay,
  .react-datepicker__year-text--disabled .overlay {
    position: absolute;
    bottom: 70%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: var(--boemly-spacing-1);
    border-radius: var(--boemly-radii-base);
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s ease-in-out;
  }

  .react-datepicker__input-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }
  .react-datepicker__input-container .react-datepicker__calendar-icon {
    position: absolute;
    padding: var(--boemly-spacing-2);
    box-sizing: content-box;
  }

  .react-datepicker__view-calendar-icon input {
    padding: var(--boemly-spacing-2) var(--boemly-spacing-3) var(--boemly-spacing-2)
      var(--boemly-spacing-6);
  }

  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    border: var(--boemly-spacing-px) solid var(--boemly-colors-transparent);
    border-radius: var(--boemly-radii-md);
    position: relative;
  }
  .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-year-read-view:hover {
    cursor: pointer;
  }
  .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {
    border-top-color: rgb(178.5, 178.5, 178.5);
  }
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    transform: rotate(135deg);
    right: -var(--boemly-spacing-4);
    top: 0;
  }

  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown,
  .react-datepicker__month-year-dropdown {
    background-color: var(--boemly-colors-white);
    position: absolute;
    width: 50%;
    left: 25%;
    top: 30px;
    z-index: 1;
    text-align: center;
    border-radius: var(--boemly-radii-md);
    border: var(--boemly-spacing-px) solid var(--boemly-colors-gray-200);
  }
  .react-datepicker__year-dropdown:hover,
  .react-datepicker__month-dropdown:hover,
  .react-datepicker__month-year-dropdown:hover {
    cursor: pointer;
  }
  .react-datepicker__year-dropdown--scrollable,
  .react-datepicker__month-dropdown--scrollable,
  .react-datepicker__month-year-dropdown--scrollable {
    height: var(--boemly-spacing-36);
    overflow-y: scroll;
  }

  .react-datepicker__year-option,
  .react-datepicker__month-option,
  .react-datepicker__month-year-option {
    line-height: 20px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .react-datepicker__year-option:first-of-type,
  .react-datepicker__month-option:first-of-type,
  .react-datepicker__month-year-option:first-of-type {
    border-top-left-radius: var(--boemly-radii-md);
    border-top-right-radius: var(--boemly-radii-md);
  }
  .react-datepicker__year-option:last-of-type,
  .react-datepicker__month-option:last-of-type,
  .react-datepicker__month-year-option:last-of-type {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-bottom-left-radius: var(--boemly-radii-md);
    border-bottom-right-radius: var(--boemly-radii-md);
  }
  .react-datepicker__year-option:hover,
  .react-datepicker__month-option:hover,
  .react-datepicker__month-year-option:hover {
    background-color: #ccc;
  }
  .react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {
    border-bottom-color: var(--boemly-colors-gray-300);
  }
  .react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
  .react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
  .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {
    border-top-color: var(--boemly-colors-gray-300);
  }
  .react-datepicker__year-option--selected,
  .react-datepicker__month-option--selected,
  .react-datepicker__month-year-option--selected {
    position: absolute;
    left: 15px;
  }

  .react-datepicker__close-icon {
    cursor: pointer;
    background-color: var(--boemly-colors-transparent);
    border: 0;
    outline: 0;
    padding: 0 var(--boemly-spacing-2) 0 0;
    position: absolute;
    top: 0;
    right: 0;
    height: var(--boemly-sizes-full);
    display: table-cell;
    vertical-align: middle;
  }
  .react-datepicker__close-icon::after {
    cursor: pointer;
    background-color: #216ba5;
    color: #fff;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    padding: 2px;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    content: '×';
  }
  .react-datepicker__close-icon--disabled {
    cursor: default;
  }
  .react-datepicker__close-icon--disabled::after {
    cursor: default;
    background-color: #ccc;
  }

  .react-datepicker__today-button {
    background: #f0f0f0;
    border-top: 1px solid #aeaeae;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    padding: 5px 0;
    clear: left;
  }

  .react-datepicker__portal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2147483647;
  }
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: var(--boemly-spacing-12);
    line-height: var(--boemly-spacing-12);
  }
  @media (max-width: 400px), (max-height: 550px) {
    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__time-name {
      width: var(--boemly-spacing-8);
      line-height: var(--boemly-spacing-8);
    }
  }
  .react-datepicker__portal .react-datepicker__current-month,
  .react-datepicker__portal .react-datepicker-time__header {
    font-size: var(--boemly-font-sizes-2xl);
  }

  .react-datepicker__children-container {
    width: var(--boemly-spacing-56);
    margin: var(--boemly-spacing-2);
    padding-right: var(--boemly-spacing-1);
    padding-left: var(--boemly-spacing-1);
    height: auto;
  }

  .react-datepicker__aria-live {
    position: absolute;
    clip-path: circle(0);
    border: 0;
    height: var(--boemly-spacing-px);
    margin: -var(--boemly-spacing-px);
    overflow: hidden;
    padding: 0;
    width: var(--boemly-spacing-px);
    white-space: nowrap;
  }

  .react-datepicker__calendar-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
  }
`;

export default datePickerStyle;
