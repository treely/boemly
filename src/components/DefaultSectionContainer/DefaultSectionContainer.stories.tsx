import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DefaultSectionContainer } from './DefaultSectionContainer';

export default {
  title: 'components/DefaultSectionContainer',
  component: DefaultSectionContainer,
  args: {
    children: (
      <div
        style={{
          backgroundColor: 'var(--boemly-colors-primary-500)',
          height: '24rem',
          width: '100%',
          padding: '2rem',
        }}
      >
        Content
      </div>
    ),
  },
} as ComponentMeta<typeof DefaultSectionContainer>;

const Template: ComponentStory<typeof DefaultSectionContainer> = (args) => (
  <DefaultSectionContainer {...args} />
);

export const Default = Template.bind({});

export const WithBackground = Template.bind({});
WithBackground.args = {
  backgroundColor: 'primary.700',
};
