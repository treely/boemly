import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ChakraProvider, defaultSystem, Flex } from '@chakra-ui/react';

import { ImageRadioGroup } from '.';
import { storybookMapThumbnailUrl } from '../../test/storybookMedia';
import { ImageRadioItem } from '../ImageRadioItem';

const Wrapper = () => {
  const [state, setState] = useState('value1');
  return (
    <ImageRadioGroup value={state} onChange={(v) => setState(v as string)}>
      <Flex direction="row" gap="4">
        <ImageRadioItem
          thumbnail={<img alt="Alt text" src={storybookMapThumbnailUrl} />}
          title="Title 1"
          value="value1"
        />
        <ImageRadioItem
          thumbnail={<img alt="Alt text" src={storybookMapThumbnailUrl} />}
          title="Title 2"
          value="value2"
        />
      </Flex>
    </ImageRadioGroup>
  );
};

export default {
  title: 'components/ImageRadioGroup',
  decorators: [
    (Story) => {
      return (
        <ChakraProvider value={defaultSystem}>
          <Story />
        </ChakraProvider>
      );
    },
  ],

  component: Wrapper,
} as Meta<typeof Wrapper>;

const Template: StoryFn<typeof Wrapper> = () => <Wrapper />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};
