import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ImageRadioItem } from '.';
import { storybookMapThumbnailUrl } from '../../test/storybookMedia';

export default {
  title: 'components/ImageRadioItem',
  component: ImageRadioItem,
  args: {
    thumbnail: <img alt="Alt text" src={storybookMapThumbnailUrl} />,
    title: 'Title',
    value: 'value',
  },
} as Meta<typeof ImageRadioItem>;

const Template: StoryFn<typeof ImageRadioItem> = (args) => <ImageRadioItem {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const Selected = Template.bind({});
Selected.args = { isSelected: true };

export const Disabled = Template.bind({});
Disabled.args = { isDisabled: true };
