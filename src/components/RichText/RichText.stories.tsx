import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RichText } from './RichText';
import { storybookCoverUrl } from '../../test/storybookMedia';

export default {
  title: 'components/RichText',
  component: RichText,
} as ComponentMeta<typeof RichText>;

const Template: ComponentStory<typeof RichText> = (args) => <RichText {...args} />;

const richText = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4

Text with *italic* and **bold** text.

\`\`\`js
function add(a, b) {
  return a + b;
}
\`\`\`

## Unordered list

* List item 1
* List item 2
* List item 3

## Ordered list

1. First item
2. Second item
3. Third item
4. Fourth item

## Blockquote

> Dorothy followed her through many of the beautiful rooms in her castle.

## Link

Go to [Tree.ly](https://tree.ly)

## Image

![A forest from above](${storybookCoverUrl})
`;

export const Default = Template.bind({});
Default.args = {
  content: richText,
};
