import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavItem } from './NavItem';

export default {
  title: 'components/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />;

const link = { text: 'Nav Item', onClick: () => alert('Clicked') };

export const Black = Template.bind({});
Black.args = {
  color: 'black',
  active: false,
  link,
};

export const White = Template.bind({});
White.args = {
  color: 'white',
  active: false,
  link,
};
White.parameters = {
  backgrounds: { default: 'dark' },
};

export const Active = Template.bind({});
Active.args = {
  color: 'black',
  active: true,
  link,
};
