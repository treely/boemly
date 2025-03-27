import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Button, Tooltip } from '../..';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    'aria-label': {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    label: { control: { type: 'text' } },
    shouldWrapChildren: {
      control: { type: 'boolean' },
      description: 'Is needed if you want to wrap a disabled element like a button',
    },
    hasArrow: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    placement: {
      options: [
        'auto-start',
        'auto',
        'auto-end',
        'left-start',
        'left',
        'left-end',
        'right-start',
        'right',
        'right-end',
        'top-start',
        'top',
        'top-end',
        'bottom-start',
        'bottom',
        'bottom-end',
      ],
      control: { type: 'radio' },
    },
    closeOnClick: {
      control: { type: 'boolean' },
    },
    closeOnEsc: {
      control: { type: 'boolean' },
    },
    closeOnMouseDown: {
      control: { type: 'boolean' },
    },
    defaultIsOpen: {
      control: { type: 'boolean' },
    },
    gutter: {
      type: { name: 'number' },
      control: { type: 'number' },
    },
  },
  args: {
    children: <span>Hover me</span>,
    'aria-label': 'Tooltip',
    label: 'Label',
    shouldWrapChildren: false,
    hasArrow: false,
    isDisabled: false,
    placement: 'bottom',
    closeOnClick: false,
    closeOnEsc: false,
    closeOnMouseDown: false,
    defaultIsOpen: false,
    gutter: 8,
  },
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {};
