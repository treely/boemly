import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { SplitScreen } from './SplitScreen';

export default {
  title: 'components/SplitScreen',
  component: SplitScreen,
  args: {
    left: (
      <div style={{ backgroundColor: 'var(--boemly-colors-primary-500)', height: '100%' }}>
        Left
      </div>
    ),
    right: (
      <div style={{ backgroundColor: 'var(--boemly-colors-primary-700)', height: '100%' }}>
        Right
      </div>
    ),
  },
} as Meta<typeof SplitScreen>;

const Template: StoryFn<typeof SplitScreen> = (args) => <SplitScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  hideLeftOnMobile: false,
  mobileIsOpen: false,
};

export const MobileOpen = Template.bind({});
MobileOpen.args = {
  hideLeftOnMobile: false,
  mobileIsOpen: true,
};

export const HideLeftOnMobile = Template.bind({});
HideLeftOnMobile.args = {
  hideLeftOnMobile: true,
  mobileIsOpen: false,
};

export const Apportionment = Template.bind({});
Apportionment.args = {
  hideLeftOnMobile: false,
  mobileIsOpen: false,
  apportionment: 60,
};

export const NoHeaderGap = Template.bind({});
NoHeaderGap.args = {
  hideLeftOnMobile: false,
  mobileIsOpen: false,
  showHeaderGap: false,
};
