import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { TextCardWithIcon } from './TextCardWithIcon';
import { Heart } from '@phosphor-icons/react';
import { storybookCoverUrl } from '../../test/storybookMedia';

export default {
  title: 'components/TextCardWithIcon',
  component: TextCardWithIcon,
  args: {
    title: 'Title',
    text: 'Text',
    icon: <Heart size={28} />,
  },
} as Meta<typeof TextCardWithIcon>;

const Template: StoryFn<typeof TextCardWithIcon> = (args) => <TextCardWithIcon {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const AsColumn = Template.bind({});
AsColumn.args = {
  displayAs: 'column',
};

export const WithImage = Template.bind({});
WithImage.args = {
  displayAs: 'column',
  image: (
    <img
      src={storybookCoverUrl}
      alt="Alt"
      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
    />
  ),
};

export const WithButton = Template.bind({});
WithButton.args = {
  displayAs: 'column',
  image: (
    <img
      src={storybookCoverUrl}
      alt="Alt"
      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
    />
  ),
  button: { text: 'Button', onClick: () => alert('Button clicked') },
};
