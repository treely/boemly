import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { LabelTextPair } from './LabelTextPair';

export default {
  title: 'components/LabelTextPair',
  component: LabelTextPair,
  args: {
    label: 'Label',
    text: 'Text',
  },
} as Meta<typeof LabelTextPair>;

const Template: StoryFn<typeof LabelTextPair> = (args) => <LabelTextPair {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const WithCaption = Template.bind({});
WithCaption.args = {
  caption: 'Caption',
};
