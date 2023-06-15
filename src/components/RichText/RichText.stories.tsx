import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { RichText } from './RichText';
import { storybookCoverUrl } from '../../test/storybookMedia';
import { Heart } from 'phosphor-react';

export default {
  title: 'components/RichText',
  component: RichText,
  argTypes: {
    headingProps: { control: { type: 'object' } },
    textProps: { control: { type: 'object' } },
    listProps: { control: { type: 'object' } },
  },
} as Meta<typeof RichText>;

const Template: StoryFn<typeof RichText> = (args) => <RichText {...args} />;

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

export const CustomHeading = Template.bind({});
CustomHeading.args = {
  content: `
  # Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  
  Text with *italic* and **bold** text.
  `,
  headingProps: { color: 'primary.500' },
};

export const CustomText = Template.bind({});
CustomText.args = {
  content: `
  # Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  
  Text with *italic* and **bold** text.
  `,
  textProps: { color: 'primary.500', size: 'smRegularNormalBold' },
};

export const CustomUnorderedList = Template.bind({});
CustomUnorderedList.args = {
  content: `
  ## Unordered list
  
  * List item 1
  * List item 2
  * List item 3
  `,
  listProps: { textColor: 'primary.500', textSize: 'xsMonoUppercase', icon: <Heart /> },
};

export const CustomOrderedList = Template.bind({});
CustomOrderedList.args = {
  content: `
  ## Ordered list
  
  1. First item
  2. Second item
  3. Third item
  4. Fourth item
  `,
  listProps: { textColor: 'primary.500', textSize: 'xsMonoUppercase' },
};

export const InlineContent = Template.bind({});
InlineContent.args = {
  content:
    'Inline *content* gets **rendered** in line, just like [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx) handles it.',
};
