import React from 'react';
import { RichText } from '.';
import { render, screen } from '../../test/testUtils';
import { RichTextProps } from './RichText';

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

* List item 1
* List item 2
* List item 3

---

1. First item
2. Second item
3. Third item
4. Fourth item

> Dorothy followed her through many of the beautiful rooms in her castle.

Go to [Tree.ly](https://tree.ly)

![Alt text](/src)
`;

const defaultProps: RichTextProps = {
  content: richText,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<RichText {...combinedProps} />);
};

describe('The RichText component', () => {
  it('displays the h1 from the Markdown as h2', () => {
    setup();

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Heading 1');
  });

  it('displays the h2 from the Markdown as h3', () => {
    setup();

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Heading 2');
  });

  it('displays the h3 from the Markdown as h4', () => {
    setup();

    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Heading 3');
  });

  it('displays the h4 from the Markdown as h5', () => {
    setup();

    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('Heading 4');
  });
});
