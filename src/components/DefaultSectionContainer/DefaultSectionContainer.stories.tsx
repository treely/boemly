import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { DefaultSectionContainer } from './DefaultSectionContainer';

export default {
  title: 'components/DefaultSectionContainer',
  component: DefaultSectionContainer,
  args: {
    children: (
      <div
        style={{
          backgroundColor: 'var(--boemly-colors-primary-500)',
          height: 'var(--boemly-sizes-sm)',
          width: '100%',
          padding: 'var(--boemly-spacing-8)',
        }}
      >
        Content
      </div>
    ),
  },
} as Meta<typeof DefaultSectionContainer>;

const Template: StoryFn<typeof DefaultSectionContainer> = (args) => (
  <DefaultSectionContainer {...args} />
);

export const Default = Template.bind({});

export const WithBackground = Template.bind({});
WithBackground.args = {
  backgroundColor: 'primary.700',
};
