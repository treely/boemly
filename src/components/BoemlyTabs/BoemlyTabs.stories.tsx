import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { BoemlyTabs } from './BoemlyTabs';
import { Alien, Heart } from '@phosphor-icons/react';

export default {
  title: 'components/BoemlyTabs',
  component: BoemlyTabs,
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    isFullWidth: {
      control: { type: 'boolean' },
    },
    variant: {
      options: ['line', 'solid'],
      control: { type: 'radio' },
    },
  },
  args: {
    tabs: [
      { key: 'tab-1', title: 'Tab 1 Title', content: <div>Tab 1 Content</div>, icon: <Heart /> },
      { key: 'tab-2', title: 'Tab 2 Title', content: <div>Tab 2 Content</div>, icon: <Alien /> },
    ],
  },
} as Meta<typeof BoemlyTabs>;

const Template: StoryFn<typeof BoemlyTabs> = (args) => <BoemlyTabs {...args} />;

export const Line = Template.bind({});
Line.args = {};

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
};

export const InitialTab = Template.bind({});
InitialTab.args = {
  initialTabKey: 'tab-2',
};

export const SolidNotFullWidth = Template.bind({});
SolidNotFullWidth.args = {
  variant: 'solid',
  isFullWidth: false,
};
