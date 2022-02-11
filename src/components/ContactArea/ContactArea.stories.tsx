import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { storybookAvatarUrl } from '../../test/storybookMocks/storybookMedia';
import ContactArea from '.';

export default {
  title: 'components/ContactArea',
  component: ContactArea,
} as ComponentMeta<typeof ContactArea>;

const Template: ComponentStory<typeof ContactArea> = (args) => <ContactArea {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {
  title: 'Title',
  text: 'Lorem ipsum dollar ...',
  avatar: {
    name: 'Lukas Bals',
    description: 'Engineer',
    image: {
      alt: 'Alt text',
      src: storybookAvatarUrl,
    },
  },
  link: {
    text: 'Button',
    href: 'https://apple.com',
  },
};
