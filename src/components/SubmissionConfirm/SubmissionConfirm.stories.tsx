import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { SubmissionConfirm } from './SubmissionConfirm';
import { useDisclosure } from '@chakra-ui/react';
import { Button } from '../ui/button';

export default {
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
} as Meta<typeof SubmissionConfirm>;

const Template: StoryFn<typeof SubmissionConfirm> = (args) => {
  const { onOpen, onClose, open } = useDisclosure();

  return (
    <SubmissionConfirm
      {...args}
      isOpen={open}
      onCancel={onClose}
      trigger={<Button onClick={onOpen}>Trigger</Button>}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithText = Template.bind({});
WithText.args = {
  text: 'Text',
};
