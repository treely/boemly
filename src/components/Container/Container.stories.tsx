import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { Container } from './Container';

export default {
  title: 'components/Container',
  component: Container,
  args: {
    children: <div>Children</div>,
  },
  argTypes: {
    elevation: {
      options: ['none', 'sm', 'lg'],
      control: { type: 'radio' },
    },
    padding: {
      options: ['none', 'md', 'lg'],
      control: { type: 'radio' },
    },
    fullWidth: { control: { type: 'boolean' } },
  },
} as Meta<typeof Container>;

const Template: StoryFn<typeof Container> = (args) => <Container {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const Elevation = Template.bind({});
Elevation.args = { elevation: 'lg' };

export const Padding = Template.bind({});
Padding.args = { padding: 'lg' };

export const NotFullWidth = Template.bind({});
NotFullWidth.args = { fullWidth: false };

export const WithHeader = Template.bind({});
WithHeader.args = { header: <div>Header</div> };
