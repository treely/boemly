import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BoemlySlider as Slider } from './Slider';

export default {
  title: 'components/Slider',
  component: Slider,
  argTypes: {
    ariaLabel: {
      type: { name: 'string', required: true },
      defaultValue: 'Label',
      control: { type: 'text' },
    },
    onChange: { action: 'Slider changed' },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

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
