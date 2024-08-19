import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ConfirmAction } from './ConfirmAction';
import { useDisclosure } from '@chakra-ui/react';

export default {
  title: 'components/ConfirmAction',
  component: ConfirmAction,
  argTypes: {
    title: { type: { name: 'string' } },
    text: { type: { name: 'string' } },
    cancelButton: { type: { name: 'string' } },
    confirmButton: { type: { name: 'string' } },
    confirmColorScheme: { options: ['primary', 'red'], control: { type: 'radio' } },
    confirmLoading: { control: { type: 'boolean' } },
  },
} as Meta<typeof ConfirmAction>;

const Template: StoryFn<typeof ConfirmAction> = (args) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <ConfirmAction
      {...args}
      trigger={<button onClick={onOpen}>Open modal</button>}
      onClose={onClose}
      isOpen={isOpen}
    />
  );
};

export const Minimal = Template.bind({});
Minimal.args = {
  isOpen: true,
  title: 'Title',
  cancelButton: 'Cancel',
  confirmButton: 'Confirm',
};

export const WithText = Template.bind({});
WithText.args = {
  isOpen: true,
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  cancelButton: 'Cancel',
  confirmButton: 'Confirm',
};

export const WithRedButton = Template.bind({});
WithRedButton.args = {
  isOpen: true,
  title: 'Title',
  cancelButton: 'Cancel',
  confirmButton: 'Delete',
  confirmColorScheme: 'red',
};

export const WithLoadingConfirmationButton = Template.bind({});
WithLoadingConfirmationButton.args = {
  isOpen: true,
  title: 'Title',
  cancelButton: 'Cancel',
  confirmButton: 'Confirm',
  onConfirmLoading: true,
};
