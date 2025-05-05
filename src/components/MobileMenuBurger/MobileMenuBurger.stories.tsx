import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useDisclosure } from '@chakra-ui/react';
import { fn } from '@storybook/test';

import { MobileMenuBurger } from './MobileMenuBurger';

const meta = {
  title: 'components/MobileMenuBurger',
  component: MobileMenuBurger,
  tags: ['autodocs'],
} satisfies Meta<typeof MobileMenuBurger>;

export default meta;
type Story = StoryObj<typeof meta>;

const StoryComponent = () => {
  const { isOpen, onToggle } = useDisclosure();
  return <MobileMenuBurger isOpen={isOpen} onClose={onToggle} onOpen={onToggle} color="black" />;
};

export const Default: Story = {
  args: {
    onOpen: fn(),
    onClose: fn(),
    isOpen: false,
    color: 'black',
  },
  render: () => <StoryComponent />,
};

const WhiteStoryComponent = () => {
  const { isOpen, onToggle } = useDisclosure();
  return <MobileMenuBurger isOpen={isOpen} onClose={onToggle} onOpen={onToggle} color="white" />;
};

export const White: Story = {
  args: {
    onOpen: fn(),
    onClose: fn(),
    isOpen: false,
    color: 'white',
  },
  render: () => <WhiteStoryComponent />,
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
