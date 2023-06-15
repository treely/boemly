import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { LabelNumberPair } from './LabelNumberPair';

export default {
  title: 'components/LabelNumberPair',
  component: LabelNumberPair,
  args: {
    label: 'Label',
    number: '1.23',
  },
} as Meta<typeof LabelNumberPair>;

const Template: StoryFn<typeof LabelNumberPair> = (args) => <LabelNumberPair {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const WithCaption = Template.bind({});
WithCaption.args = {
  caption: 'Caption',
};
