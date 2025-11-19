import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { HeartIcon } from '@phosphor-icons/react';
import { ChakraProvider, defaultSystem, Heading, useDisclosure } from '@chakra-ui/react';
import { Expandable } from './Expandable';
import { BoemlyTag } from '../BoemlyTag';

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
  icon: <HeartIcon size={80} />,
};

export const Active = Template.bind({});
Active.args = {
  title: 'Title',
  tagline: 'Tagline',
  isActive: true,
  icon: <HeartIcon size={80} />,
};

export const WithTag = Template.bind({});
WithTag.args = {
  title: 'Title',
  tagline: 'Tagline',
  tag: (
    <BoemlyTag colorPalette="green" size="sm">
      Tag
    </BoemlyTag>
  ),
  icon: <HeartIcon size={80} />,
};

export const NotInteractive = Template.bind({});
NotInteractive.args = {
  title: 'Title',
  tagline: 'Tagline',
  interactive: false,
  icon: <HeartIcon size={80} />,
};

export const Loading = Template.bind({});
Loading.args = {
  title: 'Title',
  tagline: 'Tagline',
  icon: <HeartIcon size={80} />,
  loading: true,
};
