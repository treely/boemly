import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Tooltip } from '../..';

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
    showArrow: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placement: {
      options: [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
      ],
      control: { type: 'radio' },
    },
    closeOnClick: {
      control: { type: 'boolean' },
    },
    closeOnEscape: {
      control: { type: 'boolean' },
    },
    closeOnPointerDown: {
      control: { type: 'boolean' },
    },
    closeOnScroll: {
      control: { type: 'boolean' },
    },
    defaultOpen: {
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
    content: 'Label',
    shouldWrapChildren: false,
    showArrow: false,
    disabled: false,
    placement: 'right',
    closeOnClick: false,
    closeOnEscape: false,
    closeOnMouseDown: false,
    defaultOpen: false,
    gutter: 8,
    interactive: true,
  },
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {};
