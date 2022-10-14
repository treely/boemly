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
  it('displays single line content as inline', () => {
    setup({
      content: '*Emphasised Text*',
    });

    expect(screen.getByTestId('rt-wrapper-span')).toBeInTheDocument();
    expect(screen.queryByTestId('rt-wrapper-div')).not.toBeInTheDocument();

    expect(screen.getByText('Emphasised Text').parentElement).toBe(
      screen.getByTestId('rt-wrapper-span')
    );
  });

  it('displays multi line content as a block', () => {
    setup();

    expect(screen.getByTestId('rt-wrapper-div')).toBeInTheDocument();
    expect(screen.queryByTestId('rt-wrapper-span')).not.toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2 }).parentElement).toBe(
      screen.getByTestId('rt-wrapper-div')
    );
  });

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

  it('displays a code block if the language is defined', () => {
    setup({
      content: `
\`\`\`js
function add(a, b) {
  return a + b;
}
\`\`\`
    `,
    });

    expect(screen.getByText('(a, b) {')).toBeInTheDocument();
  });

  it('displays a code block if the language is not defined', () => {
    setup({
      content: `
\`\`\`
function add(a, b) {
  return a + b;
}
\`\`\`
    `,
    });

    expect(screen.getByText('(a, b) {')).toBeInTheDocument();
  });
});
