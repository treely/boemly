import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { BoemlySlider as Slider } from './Slider';

export default {
  title: 'components/Slider',
  component: Slider,
  argTypes: {
    ariaLabel: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    onChange: { action: 'Slider changed' },
  },
  args: {
    ariaLabel: 'Label',
  },
} as Meta<typeof Slider>;

const Template: StoryFn<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithUnit = Template.bind({});
WithUnit.args = {
  unit: 'ha',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: 12,
};

export const WithCustomMinAndMax = Template.bind({});
WithCustomMinAndMax.args = {
  min: 10,
  max: 90,
};
