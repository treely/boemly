import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePicker } from './DatePicker';

export default {
  title: 'components/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [date, setDate] = useState(new Date('2022-01-01'));

  return <DatePicker {...args} value={date} onChange={setDate} />;
};

export const Default = Template.bind({});
