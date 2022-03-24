import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextCardWithIcon } from './TextCardWithIcon';
import { Heart } from 'phosphor-react';

export default {
  title: 'components/TextCardWithIcon',
  component: TextCardWithIcon,
  args: {
    title: 'Title',
    text: 'Text',
    icon: <Heart size={28} />,
  },
} as ComponentMeta<typeof TextCardWithIcon>;

const Template: ComponentStory<typeof TextCardWithIcon> = (args) => <TextCardWithIcon {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const AsColumn = Template.bind({});
AsColumn.args = {
  displayAs: 'column',
};
