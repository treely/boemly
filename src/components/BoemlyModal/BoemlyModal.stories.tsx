import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BoemlyModal } from './BoemlyModal';
import { useDisclosure } from '@chakra-ui/react';

export default {
  title: 'components/BoemlyModal',
  component: BoemlyModal,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof BoemlyModal>;

const Template: ComponentStory<typeof BoemlyModal> = (args) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <BoemlyModal
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
  content: <div>Content</div>,
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  isOpen: true,
  title: 'Title',
  content: <div>Content</div>,
  footer: <button>Button</button>,
};

export const Size = Template.bind({});
Size.args = {
  isOpen: true,
  title: 'Title',
  content: <div>Content</div>,
  footer: <button>Button</button>,
  size: '3xl',
};
