import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { BoemlyModal } from './BoemlyModal';
import {
  Button,
  ChakraProvider,
  defaultSystem,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

export default {
  title: 'components/BoemlyModal',
  component: BoemlyModal,
  decorators: [
    (Story) => {
      return (
        <ChakraProvider value={defaultSystem}>
          <Story />
        </ChakraProvider>
      );
    },
  ],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'cover'],
      control: { type: 'radio' },
    },
    position: {
      options: [
        'topLeft',
        'top',
        'topRight',
        'left',
        'center',
        'right',
        'bottomLeft',
        'bottom',
        'bottomRight',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<typeof BoemlyModal>;

const Template: StoryFn<typeof BoemlyModal> = (args) => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <BoemlyModal
      {...args}
      open={open}
      onOpenChange={(isOpen) => (isOpen ? onOpen() : onClose())}
      trigger={
        <Button variant="plain" onClick={onOpen}>
          Open modal
        </Button>
      }
    />
  );
};

export const Minimal = Template.bind({});
Minimal.args = {
  title: 'Title',
  content: <div>Content</div>,
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  title: 'Title',
  content: <div>Content</div>,
  footer: <Button variant="plain">Button</Button>,
};

export const Size = Template.bind({});
Size.args = {
  title: 'Title',
  content: <div>Content</div>,
  footer: <Button variant="plain">Button</Button>,
  size: 'xl',
};

export const Position = Template.bind({});
Position.args = {
  title: 'Centered Modal',
  content: <div>Use the `position` prop to align the modal within the viewport.</div>,
  footer: <Button variant="plain">Button</Button>,
  size: 'md',
  position: 'center',
};

export const WithCustomTitle = Template.bind({});
WithCustomTitle.args = {
  title: (
    <Flex flexDir="row">
      <Heading color="red">Custom title</Heading>
      <Text color="grey" size="smRegularNormal">
        -with custom subtitle
      </Text>
    </Flex>
  ),
  content: <div>Content</div>,
  footer: <Button variant="plain">Button</Button>,
  size: 'xl',
};
