import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { BoemlyAlert } from './BoemlyAlert';

export default {
  title: 'components/BoemlyAlert',
  component: BoemlyAlert,
  argTypes: {
    title: { type: { name: 'string' } },
    text: { type: { name: 'string' } },
    onClose: { action: 'Close Boemly alert' },
  },
} as Meta<typeof BoemlyAlert>;

const Template: StoryFn<typeof BoemlyAlert> = (args) => <BoemlyAlert {...args} />;

export const Info = Template.bind({});
Info.args = {
  text: 'Info',
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
  text: 'Warning',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  text: 'Error',
};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  text: 'Success',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Title',
  text: 'Text',
};

export const Closeable = Template.bind({});
Closeable.args = {
  title: 'Title',
  text: 'Text',
  isClosable: true,
};
