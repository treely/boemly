import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'components/Header',
  component: Header,
  args: {
    left: (
      <div
        style={{
          backgroundColor: 'var(--boemly-colors-green-500)',
          width: 'var(--boemly-sizes-full)',
        }}
      >
        Left
      </div>
    ),
    center: (
      <div
        style={{
          backgroundColor: 'var(--boemly-colors-red-500)',
          width: 'var(--boemly-sizes-full)',
        }}
      >
        Center
      </div>
    ),
    right: (
      <div
        style={{
          backgroundColor: 'var(--boemly-colors-orange-500)',
          width: 'var(--boemly-sizes-full)',
        }}
      >
        Right
      </div>
    ),
  },
  argTypes: {
    hideCenter: { control: { type: 'boolean' }, defaultValue: false },
    showWrapper: { control: { type: 'boolean' }, defaultValue: false },
  },
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const hideCenter = Template.bind({});
hideCenter.args = {
  hideCenter: true,
};

export const showWrapper = Template.bind({});
showWrapper.args = {
  showWrapper: true,
};
