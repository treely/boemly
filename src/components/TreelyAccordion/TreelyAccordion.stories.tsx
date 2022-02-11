import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TreelyAccordion from '.';

export default {
  title: 'components/TreelyAccordion',
  component: TreelyAccordion,
} as ComponentMeta<typeof TreelyAccordion>;

const Template: ComponentStory<typeof TreelyAccordion> = (args) => <TreelyAccordion {...args} />;

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
