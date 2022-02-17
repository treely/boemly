import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LabelNumberPair from '.';

export default {
  title: 'components/LabelNumberPair',
  component: LabelNumberPair,
} as ComponentMeta<typeof LabelNumberPair>;

const Template: ComponentStory<typeof LabelNumberPair> = (args) => <LabelNumberPair {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {
  label: 'Label',
  number: '1.23',
};
