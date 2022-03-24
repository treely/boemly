import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useDisclosure } from '@chakra-ui/react';

import { MobileMenuBurger } from './MobileMenuBurger';

export default {
  title: 'components/MobileMenuBurger',
  component: MobileMenuBurger,
} as ComponentMeta<typeof MobileMenuBurger>;

const Template: ComponentStory<typeof MobileMenuBurger> = (args) => {
  const { isOpen, onToggle } = useDisclosure();

  return <MobileMenuBurger {...args} isOpen={isOpen} onClose={onToggle} onOpen={onToggle} />;
};

export const Default = Template.bind({});
Default.args = {
  color: 'black',
};

export const White = Template.bind({});
White.args = {
  isOpen: false,
  onOpen: () => alert('Open'),
  onClose: () => alert('Close'),
  color: 'white',
};
White.parameters = {
  backgrounds: { default: 'dark' },
};
