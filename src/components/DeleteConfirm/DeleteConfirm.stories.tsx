import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { DeleteConfirm } from './DeleteConfirm';
import { Button, useDisclosure } from '@chakra-ui/react';

export default {
  title: 'components/DeleteConfirm',
  component: DeleteConfirm,
  argTypes: {
    title: { type: { name: 'string' } },
    text: { type: { name: 'string' } },
    deleteText: { type: { name: 'string' } },
    cancelText: { type: { name: 'string' } },
    onDelete: { action: 'Delete' },
  },
  args: {
    title: 'Delete',
    deleteText: 'Delete',
    cancelText: 'Cancel',
  },
} as Meta<typeof DeleteConfirm>;

const Template: StoryFn<typeof DeleteConfirm> = (args) => {
  const { onOpen, onClose } = useDisclosure();

  return (
    <DeleteConfirm {...args} onCancel={onClose} triggerTitle="Trigger" onTriggerClick={onOpen} />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithText = Template.bind({});
WithText.args = {
  text: 'Text',
};
