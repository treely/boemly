import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TreelyAlert } from './TreelyAlert';

export default {
  title: 'components/TreelyAlert',
  component: TreelyAlert,
} as ComponentMeta<typeof TreelyAlert>;

const Template: ComponentStory<typeof TreelyAlert> = (args) => <TreelyAlert {...args} />;

// eslint-disable-next-line no-console
const onClose = () => console.log('Close');

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
  onClose,
};
