import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { storybookAvatarUrl } from '../../test/storybookMedia';
import { AvatarWithName } from './AvatarWithName';

export default {
  title: 'components/AvatarWithName',
  component: AvatarWithName,
} as Meta<typeof AvatarWithName>;

const Template: StoryFn<typeof AvatarWithName> = (args) => <AvatarWithName {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  name: 'Lukas Bals',
  description: 'Engineer',
  image: <img alt="Alt text" src={storybookAvatarUrl} />,
};

export const Vertical = Template.bind({});
Vertical.args = {
  name: 'Lukas Bals',
  description: 'Engineer',
  image: <img alt="Alt text" src={storybookAvatarUrl} />,
  orientation: 'vertical',
};
