import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { TextCardWithIcon } from './TextCardWithIcon';
import { HeartIcon } from '@phosphor-icons/react';
import { storybookCoverUrl } from '../../test/storybookMedia';

export default {
  title: 'components/TextCardWithIcon',
  component: TextCardWithIcon,
  args: {
    title: 'Title',
    text: 'Text',
    icon: <HeartIcon size={28} />,
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
  button: { text: 'Button', onClick: () => alert('Button clicked') },
};
export const AsRowWithButton = Template.bind({});
AsRowWithButton.args = {
  displayAs: 'row',
  button: { text: 'Button', onClick: () => alert('Button clicked') },
};
