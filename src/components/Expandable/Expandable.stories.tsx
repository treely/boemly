import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heart } from 'phosphor-react';
import { Heading } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';
import { Tag } from '@chakra-ui/tag';
import { Expandable } from './Expandable';

export default {
  title: 'components/Expandable',
  component: Expandable,
} as ComponentMeta<typeof Expandable>;

const Template: ComponentStory<typeof Expandable> = (args) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Expandable {...args} isOpen={isOpen} onToggle={onToggle}>
      <Heading>Children</Heading>
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
    <Tag colorScheme="green" size="sm">
      Tag
    </Tag>
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
