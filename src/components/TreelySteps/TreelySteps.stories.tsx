import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TreelySteps } from './TreelySteps';

export default {
  title: 'components/TreelySteps',
  component: TreelySteps,
} as ComponentMeta<typeof TreelySteps>;

const Template: ComponentStory<typeof TreelySteps> = (args) => <TreelySteps {...args} />;

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
