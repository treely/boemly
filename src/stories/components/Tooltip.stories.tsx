import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tooltip } from '../..';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      defaultValue: <span>Hover me</span>,
    },
    'aria-label': {
      type: { name: 'string' },
      defaultValue: 'Tooltip',
      control: { type: 'text' },
    },
    label: { defaultValue: 'Label', control: { type: 'text' } },
    shouldWrapChildren: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Is needed if you want to wrap a disabled element like a button',
    },
    hasArrow: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isDisabled: {
      control: { type: 'boolean' },
      defaultValue: false,
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
      defaultValue: 'bottom',
    },
    closeOnClick: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    closeOnEsc: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    closeOnMouseDown: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    defaultIsOpen: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    gutter: {
      type: { name: 'number' },
      control: { type: 'number' },
      defaultValue: 8,
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {};
