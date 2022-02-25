import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DefaultSectionContainer } from './DefaultSectionContainer';
import { Center } from '@chakra-ui/react';

export default {
  title: 'components/DefaultSectionContainer',
  component: DefaultSectionContainer,
  args: {
    children: (
      <Center width="full" height="3xs" background="primary.300">
        Content
      </Center>
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
