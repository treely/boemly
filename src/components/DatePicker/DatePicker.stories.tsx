import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { INPUT_SIZES } from '../../constants/inputSizes';

export default {
  title: 'components/DatePicker',
  component: DatePicker,
  argTypes: {
    locale: {
      options: ['en', 'de', 'fr'],
      control: { type: 'radio' },
    },
    size: {
      options: INPUT_SIZES,
      control: { type: 'radio' },
    },
    yearRange: {
      control: { type: 'object' },
    },
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [date, setDate] = useState(new Date('2022-01-01'));

  return <DatePicker {...args} value={date} onChange={setDate} />;
};

export const Default = Template.bind({});

export const WithYearRangeDefined = Template.bind({});
WithYearRangeDefined.args = {
  yearRange: { start: 2020, end: 2040 },
};
