import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { storybookAvatarUrl } from '../../test/storybookMedia';
import { ContactArea } from './ContactArea';

export default {
  title: 'components/ContactArea',
  component: ContactArea,
} as Meta<typeof ContactArea>;

const Template: StoryFn<typeof ContactArea> = (args) => <ContactArea {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {
  title: 'Title',
  text: 'Lorem ipsum dollar ...',
  avatar: {
    name: 'Lukas Bals',
    description: 'Engineer',
    imageSrc: storybookAvatarUrl,
  },
  link: {
    text: 'Button',
    onClick: () => alert('Clicked link'),
  },
};
