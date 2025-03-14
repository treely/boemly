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

export const Default: Story = {
  args: {
    onOpen: fn(),
    onClose: fn(),
    isOpen: false,
    color: 'black',
  },
  render: () => {
    const { isOpen, onToggle } = useDisclosure();
    return <MobileMenuBurger isOpen={isOpen} onClose={onToggle} onOpen={onToggle} color="black" />;
  },
};

export const White: Story = {
  args: {
    onOpen: fn(),
    onClose: fn(),
    isOpen: false,
    color: 'white',
  },
  render: () => {
    const { isOpen, onToggle } = useDisclosure();
    return <MobileMenuBurger isOpen={isOpen} onClose={onToggle} onOpen={onToggle} color="white" />;
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
