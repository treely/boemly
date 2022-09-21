import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePicker } from './DatePicker';

export default {
  title: 'components/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = () => {
  const [value, onChange] = useState(new Date());

  return <DatePicker value={value} onChange={onChange} />;
};

export const Default = Template.bind({});
