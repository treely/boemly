import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LabelNumberPair } from './LabelNumberPair';

export default {
  title: 'components/LabelNumberPair',
  component: LabelNumberPair,
  args: {
    label: 'Label',
    number: '1.23',
  },
} as ComponentMeta<typeof LabelNumberPair>;

const Template: ComponentStory<typeof LabelNumberPair> = (args) => <LabelNumberPair {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const WithCaption = Template.bind({});
WithCaption.args = {
  caption: 'Caption',
};
