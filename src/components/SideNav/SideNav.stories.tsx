import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { SideNav, SideNavItemState } from './SideNav';

export default {
  title: 'components/SideNav',
  component: SideNav,
} as Meta<typeof SideNav>;

const Template: StoryFn<typeof SideNav> = (args) => {
  const [activeItem, setActiveItem] = React.useState(2);

  const items = [
    { text: 'Done Step', state: SideNavItemState.Done, onClick: () => setActiveItem(0) },
    {
      text: 'Disabled Step',
      state: SideNavItemState.Done,
      isDisabled: true,
      onClick: () => setActiveItem(1),
    },
    {
      text: 'In Progress State',
      state: SideNavItemState.InProgress,
      onClick: () => setActiveItem(2),
    },
    { text: 'Open Step', state: SideNavItemState.Open, onClick: () => setActiveItem(3) },
  ];

  return <SideNav items={items} activeItem={activeItem} inProgressText="In Progress" />;
};

export const Default = Template.bind({});
Default.args = {};
