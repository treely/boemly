import React, { useEffect } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Heart } from '@phosphor-icons/react';
import { ChakraProvider, defaultSystem, Heading, Tag, useDisclosure } from '@chakra-ui/react';
import { Expandable } from './Expandable';
import { useTheme } from 'next-themes';

export default {
  title: 'components/Expandable',
  component: Expandable,
  decorators: [
    (Story) => {
      return (
        <ChakraProvider value={defaultSystem}>
          <Story />
        </ChakraProvider>
      );
    },
  ],
} as Meta<typeof Expandable>;

const Children: React.FC = () => {
  return <Heading>Children</Heading>;
};

const Template: StoryFn<typeof Expandable> = (args) => {
  const { open, onToggle } = useDisclosure();

  return (
    <Expandable {...args} isOpen={open} onToggle={onToggle}>
      <Children />
    </Expandable>
  );
};

export const Minimal = Template.bind({});
Minimal.args = {
  title: 'Title',
  tagline: 'Tagline',
  icon: <Heart size={80} />,
};

export const Active = Template.bind({});
Active.args = {
  title: 'Title',
  tagline: 'Tagline',
  isActive: true,
  icon: <Heart size={80} />,
};

export const WithTag = Template.bind({});
WithTag.args = {
  title: 'Title',
  tagline: 'Tagline',
  tag: (
    <Tag.Root colorPalette="green" size="sm">
      <Tag.Label>Tag</Tag.Label>
    </Tag.Root>
  ),
  icon: <Heart size={80} />,
};

export const NotInteractive = Template.bind({});
NotInteractive.args = {
  title: 'Title',
  tagline: 'Tagline',
  interactive: false,
  icon: <Heart size={80} />,
};

export const Loading = Template.bind({});
Loading.args = {
  title: 'Title',
  tagline: 'Tagline',
  icon: <Heart size={80} />,
  loading: true,
};
