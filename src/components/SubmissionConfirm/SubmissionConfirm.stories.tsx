import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SubmissionConfirm } from './SubmissionConfirm';
import { Button, useDisclosure } from '@chakra-ui/react';

const meta = {
  title: 'components/SubmissionConfirm',
  component: SubmissionConfirm,
  argTypes: {
    title: { type: { name: 'string' } },
    text: { type: { name: 'string' } },
    submissionText: { type: { name: 'string' } },
    cancelText: { type: { name: 'string' } },
    confirmButtonColor: {
      control: { type: 'text' },
    },
    cancelButtonColor: {
      control: { type: 'text' },
    },
    confirmButtonTextColor: {
      control: { type: 'text' },
    },
    cancelButtonTextColor: {
      control: { type: 'text' },
    },
    onSubmit: { action: 'Delete' },
  },
  args: {
    title: 'Submit',
    submissionText: 'Ok',
    cancelText: 'Cancel',
  },
} satisfies Meta<typeof SubmissionConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof SubmissionConfirm> = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SubmissionConfirm
      {...args}
      isOpen={isOpen}
      onCancel={onClose}
      trigger={<Button onClick={onOpen}>Trigger</Button>}
    />
  );
};

export const Default: Story = {
  args: {
    trigger: <Button>Open Dialog</Button>,
    submissionText: 'Ok',
    onSubmit: fn(),
    onCancel: fn(),
    isOpen: false,
    cancelText: 'Cancel',
  },
};

export const WithText = Template.bind({});
WithText.args = {
  text: 'Text',
};
