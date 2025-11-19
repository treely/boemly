import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';
import { Header } from '.';
import { Box, ChakraProvider, defaultSystem } from '@chakra-ui/react';

export default {
  title: 'components/Header',
  component: Header,
  decorators: [
    (Story) => {
      return (
        <ChakraProvider value={defaultSystem}>
          <Story />
        </ChakraProvider>
      );
    },
  ],
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

const Template: StoryFn<typeof Header> = (args) => (
  <Box height="20" backgroundColor="var(--boemly-colors-primary-50)">
    <Header {...args} />
  </Box>
);

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const HideCenter = Template.bind({});
HideCenter.args = {
  hideCenter: true,
};

export const ShowWrapper = Template.bind({});
ShowWrapper.args = {
  showWrapper: true,
};
