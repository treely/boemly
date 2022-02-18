import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LabelTextPair } from './LabelTextPair';

export default {
  title: 'components/LabelTextPair',
  component: LabelTextPair,
} as ComponentMeta<typeof LabelTextPair>;

const Template: ComponentStory<typeof LabelTextPair> = (args) => <LabelTextPair {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {
  label: 'Label',
  text: 'Text',
};
