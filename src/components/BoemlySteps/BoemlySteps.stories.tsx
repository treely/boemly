import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BoemlySteps } from './BoemlySteps';

export default {
  title: 'components/BoemlySteps',
  component: BoemlySteps,
} as ComponentMeta<typeof BoemlySteps>;

const Template: ComponentStory<typeof BoemlySteps> = (args) => <BoemlySteps {...args} />;

const onClick = () => {
  // eslint-disable-next-line no-console
  console.log('Click');
};
const steps = [
  { text: 'Step 1', onClick },
  { text: 'Step 2', onClick },
  { text: 'Step 3', onClick },
  { text: 'Step 4', onClick },
];

export const FirstStepActive = Template.bind({});
FirstStepActive.args = {
  steps,
  currentStep: 1,
};

export const LastStepActive = Template.bind({});
LastStepActive.args = {
  steps,
  currentStep: 4,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  steps,
  orientation: 'horizontal',
  currentStep: 2,
};
