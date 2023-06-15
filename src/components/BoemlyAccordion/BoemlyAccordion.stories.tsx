import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { BoemlyAccordion } from './BoemlyAccordion';

export default {
  title: 'components/BoemlyAccordion',
  component: BoemlyAccordion,
} as Meta<typeof BoemlyAccordion>;

const Template: StoryFn<typeof BoemlyAccordion> = (args) => <BoemlyAccordion {...args} />;

const rows = [
  { id: 1, key: 'Key 1', value: 'Value 1' },
  { id: 2, key: 'Key 2', value: 'Value 2' },
];

export const Black = Template.bind({});
Black.args = {
  defaultIndex: 0,
  rows,
  variant: 'black',
};

export const White = Template.bind({});
White.args = {
  defaultIndex: 0,
  rows,
  variant: 'white',
};
White.parameters = {
  backgrounds: { default: 'dark' },
};
