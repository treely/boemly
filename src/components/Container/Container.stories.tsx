import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from './Container';

export default {
  title: 'components/Container',
  component: Container,
  args: {
    children: <div>Children</div>,
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const Elevation = Template.bind({});
Elevation.args = { elevation: 'lg' };

export const Padding = Template.bind({});
Padding.args = { padding: 'lg' };

export const NotFullWidth = Template.bind({});
NotFullWidth.args = { fullWidth: false };
