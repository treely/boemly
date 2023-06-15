import React, { useEffect } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Heart } from 'phosphor-react';
import { Heading, Tag, useDisclosure } from '@chakra-ui/react';
import { Expandable } from './Expandable';

export default {
  title: 'components/Expandable',
  component: Expandable,
} as Meta<typeof Expandable>;

const Children: React.FC = () => {
  useEffect(() => {
    console.log('COMPONENT RENDERED');
  }, []);

  return <Heading>Children</Heading>;
};

const Template: StoryFn<typeof Expandable> = (args) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Expandable {...args} isOpen={isOpen} onToggle={onToggle}>
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
