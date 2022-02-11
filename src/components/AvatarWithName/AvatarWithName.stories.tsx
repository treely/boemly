import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { storybookAvatarUrl } from '../../test/storybookMocks/storybookMedia';
import AvatarWithName from '.';

export default {
  title: 'components/AvatarWithName',
  component: AvatarWithName,
} as ComponentMeta<typeof AvatarWithName>;

const Template: ComponentStory<typeof AvatarWithName> = (args) => <AvatarWithName {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Lukas Bals',
  description: 'Engineer',
  image: { alt: 'Alt text', src: storybookAvatarUrl },
};
