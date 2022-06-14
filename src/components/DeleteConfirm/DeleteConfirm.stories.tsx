import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DeleteConfirm } from './DeleteConfirm';
import { Button, useDisclosure } from '@chakra-ui/react';

export default {
  title: 'components/DeleteConfirm',
  component: DeleteConfirm,
  argTypes: {
    title: { type: { name: 'string' }, defaultValue: 'Delete' },
    text: { type: { name: 'string' } },
    deleteText: { type: { name: 'string' }, defaultValue: 'Delete' },
    cancelText: { type: { name: 'string' }, defaultValue: 'Cancel' },
    onDelete: { action: 'Delete' },
  },
} as ComponentMeta<typeof DeleteConfirm>;

const Template: ComponentStory<typeof DeleteConfirm> = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DeleteConfirm
      {...args}
      isOpen={isOpen}
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
