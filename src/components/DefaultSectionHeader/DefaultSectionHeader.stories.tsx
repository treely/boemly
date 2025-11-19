import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { DefaultSectionHeader } from './DefaultSectionHeader';

export default {
  title: 'components/DefaultSectionHeader',
  component: DefaultSectionHeader,
} as Meta<typeof DefaultSectionHeader>;

const Template: StoryFn<typeof DefaultSectionHeader> = (args) => <DefaultSectionHeader {...args} />;

export const JustTitle = Template.bind({});
JustTitle.args = {
  title: 'Title',
};

export const TaglineAndTitle = Template.bind({});
TaglineAndTitle.args = {
  tagline: 'Tagline',
  title: 'Title',
};

export const TaglineTitleAndText = Template.bind({});
TaglineTitleAndText.args = {
  tagline: 'Tagline',
  title: 'Title',
  text: 'Text',
};

export const Centered = Template.bind({});
Centered.args = {
  tagline: 'Tagline',
  title: 'Title',
  text: 'Text',

  taglineProps: { textAlign: 'center' },
  titleProps: { textAlign: 'center', width: '100%' },
  textProps: { textAlign: 'center' },
};

export const CenteredAsHero = Template.bind({});
CenteredAsHero.args = {
  tagline: 'Tagline',
  title: 'Title',
  text: 'Text',

  taglineProps: { textAlign: 'center' },
  titleProps: { textAlign: 'center', width: '100%' },
  textProps: { textAlign: 'center' },

  isHero: true,
};
