import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react-webpack5';
import { DatePicker } from './DatePicker';

export default {
  title: 'components/DatePicker',
  component: DatePicker,
  argTypes: {
    locale: {
      options: ['en', 'de', 'fr'],
      control: { type: 'radio' },
    },
    yearRange: {
      control: { type: 'object' },
    },
    placeholder: { type: 'string' },
    onSelect: {
      type: 'function',
      description: 'Gets called every time the user clicks on a date',
    },
    onChange: {
      type: 'function',
      description:
        'Only gets called if the date the user clicked on is not the one provided in `value`',
    },
  },
  args: {
    placeholder: 'Placeholder',
  },
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args) => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return <DatePicker {...args} value={date} onChange={setDate} />;
};

export const Default = Template.bind({});

export const WithYearRangeDefined = Template.bind({});
WithYearRangeDefined.args = {
  yearRange: { start: 2020, end: 2040 },
};

export const Clearable = Template.bind({});
Clearable.args = {
  isClearable: true,
};
