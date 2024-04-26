import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { LinkTabs } from './LinkTabs';

export default {
  title: 'components/LinkTabs',
  component: LinkTabs,
  args: {
    tabs: [
      { key: 'tab-1', title: 'Tab 1 Title', href: 'https://tree.ly' },
      { key: 'tab-2', title: 'Tab 2 Title', href: 'https://tree.ly' },
    ],
  },
} as Meta<typeof LinkTabs>;

const Template: StoryFn<typeof LinkTabs> = (args) => <LinkTabs {...args} />;

export const WithoutActiveTab = Template.bind({});
WithoutActiveTab.args = {};

export const WithActiveTab = Template.bind({});
WithActiveTab.args = {
  activeTabKey: 'tab-1',
};
