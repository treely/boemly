import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { storybookAvatarUrl } from '../../test/storybookMedia';
import { AvatarWithName } from './AvatarWithName';

export default {
  title: 'components/AvatarWithName',
  component: AvatarWithName,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
      control: { type: 'radio' },
    },
  },
} as Meta<typeof AvatarWithName>;

const Template: StoryFn<typeof AvatarWithName> = (args) => <AvatarWithName {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  name: 'Lukas Bals',
  description: 'Engineer',
  imageSrc: storybookAvatarUrl,
};

export const Vertical = Template.bind({});
Vertical.args = {
  name: 'Lukas Bals',
  description: 'Engineer',
  imageSrc: storybookAvatarUrl,
  orientation: 'vertical',
};
