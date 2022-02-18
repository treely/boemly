import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heart } from 'phosphor-react';
import { BoemlyList } from './BoemlyList';

export default {
  title: 'components/BoemlyList',
  component: BoemlyList,
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
