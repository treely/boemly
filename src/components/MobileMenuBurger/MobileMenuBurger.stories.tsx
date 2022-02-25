import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MobileMenuBurger } from './MobileMenuBurger';

export default {
  title: 'components/MobileMenuBurger',
  component: MobileMenuBurger,
} as ComponentMeta<typeof MobileMenuBurger>;

const Template: ComponentStory<typeof MobileMenuBurger> = (args) => <MobileMenuBurger {...args} />;

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  onOpen: () => alert('Open'),
  onClose: () => alert('Close'),
  color: 'black',
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  onOpen: () => alert('Open'),
  onClose: () => alert('Close'),
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
