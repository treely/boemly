import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { useDisclosure } from '@chakra-ui/react';

import { MobileMenuBurger } from './MobileMenuBurger';

export default {
  title: 'components/MobileMenuBurger',
  component: MobileMenuBurger,
} as Meta<typeof MobileMenuBurger>;

const Template: StoryFn<typeof MobileMenuBurger> = (args) => {
  const { open, onToggle } = useDisclosure();

  return <MobileMenuBurger {...args} isOpen={open} onClose={onToggle} onOpen={onToggle} />;
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
