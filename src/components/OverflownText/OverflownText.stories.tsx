import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Box } from '@chakra-ui/react';
import { OverflownText } from './OverflownText';

export default {
  title: 'components/OverflownText',
  component: OverflownText,
} as Meta<typeof OverflownText>;

const Template: StoryFn<typeof OverflownText> = (args) => (
  <Box width="100px">
    <OverflownText {...args} />
  </Box>
);

export const NotTruncated = Template.bind({});
NotTruncated.args = {
  children: 'Text',
};

export const Truncated = Template.bind({});
Truncated.args = {
  children: 'Very very long text',
};
