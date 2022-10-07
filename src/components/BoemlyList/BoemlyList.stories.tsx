import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heart } from 'phosphor-react';
import { BoemlyList } from './BoemlyList';
import { TEXT_SIZES } from '../../constants/textSizes';

export default {
  title: 'components/BoemlyList',
  component: BoemlyList,
  argTypes: {
    ordered: { control: { type: 'boolean' } },
    textColor: { control: { type: 'color' } },
    textSize: {
      options: TEXT_SIZES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof BoemlyList>;

const Template: ComponentStory<typeof BoemlyList> = (args) => <BoemlyList {...args} />;

const listItems = [
  { id: 1, text: 'One' },
  { id: 2, text: 'Two' },
  { id: 3, text: 'Three' },
];

export const Default = Template.bind({});
Default.args = {
  listItems,
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  listItems,
  icon: <Heart />,
};

export const Ordered = Template.bind({});
Ordered.args = {
  listItems,
  ordered: true,
};

export const WithCustomTextColor = Template.bind({});
WithCustomTextColor.args = {
  listItems,
  textColor: 'primary.500',
};

export const WithCustomTextSize = Template.bind({});
WithCustomTextSize.args = {
  listItems,
  textSize: 'xsRegularNormal',
};
