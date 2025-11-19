import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';
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
    confirmColorPalette: { options: ['primary', 'red'], control: { type: 'radio' } },
    confirmLoading: { control: { type: 'boolean' } },
  },
} as Meta<typeof ConfirmAction>;

const Template: StoryFn<typeof ConfirmAction> = (args) => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <ConfirmAction
      {...args}
      trigger={<button onClick={onOpen}>Open modal</button>}
      open={open}
      onOpenChange={(isOpen) => (isOpen ? onOpen() : onClose())}
    />
  );
};

export const Minimal = Template.bind({});
Minimal.args = {
  title: 'Title',
  cancelButton: 'Cancel',
  confirmButton: 'Confirm',
};

export const WithText = Template.bind({});
WithText.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  cancelButton: 'Cancel',
  confirmButton: 'Confirm',
};

export const WithRedButton = Template.bind({});
WithRedButton.args = {
  title: 'Title',
  cancelButton: 'Cancel',
  confirmButton: 'Delete',
  confirmColorPalette: 'red',
};

export const WithLoadingConfirmationButton = Template.bind({});
WithLoadingConfirmationButton.args = {
  title: 'Title',
  cancelButton: 'Cancel',
  confirmButton: 'Confirm',
  confirmLoading: true,
};
