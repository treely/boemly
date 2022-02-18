import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DefaultSectionHeader } from './DefaultSectionHeader';

export default {
  title: 'components/DefaultSectionHeader',
  component: DefaultSectionHeader,
} as ComponentMeta<typeof DefaultSectionHeader>;

const Template: ComponentStory<typeof DefaultSectionHeader> = (args) => (
  <DefaultSectionHeader {...args} />
);

export const justTitle = Template.bind({});
justTitle.args = {
  title: 'Title',
};

export const taglineAndTitle = Template.bind({});
taglineAndTitle.args = {
  tagline: 'Tagline',
  title: 'Title',
};

export const taglineTitleAndText = Template.bind({});
taglineTitleAndText.args = {
  tagline: 'Tagline',
  title: 'Title',
  text: 'Text',
};

export const centered = Template.bind({});
centered.args = {
  tagline: 'Tagline',
  title: 'Title',
  text: 'Text',

  taglineProps: { textAlign: 'center' },
  titleProps: { textAlign: 'center', width: '100%' },
  textProps: { textAlign: 'center' },
};

export const centeredAsHero = Template.bind({});
centeredAsHero.args = {
  tagline: 'Tagline',
  title: 'Title',
  text: 'Text',

  taglineProps: { textAlign: 'center' },
  titleProps: { textAlign: 'center', width: '100%' },
  textProps: { textAlign: 'center' },

  isHero: true,
};
