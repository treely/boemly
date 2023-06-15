import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { BoemlyTabs } from './BoemlyTabs';

export default {
  title: 'components/BoemlyTabs',
  component: BoemlyTabs,
  args: {
    tabs: [
      { key: 'tab-1', title: 'Tab 1 Title', content: <div>Tab 1 Content</div> },
      { key: 'tab-2', title: 'Tab 2 Title', content: <div>Tab 2 Content</div> },
    ],
  },
} as Meta<typeof BoemlyTabs>;

const Template: StoryFn<typeof BoemlyTabs> = (args) => <BoemlyTabs {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const InitialTab = Template.bind({});
InitialTab.args = {
  initialTabKey: 'tab-2',
};
