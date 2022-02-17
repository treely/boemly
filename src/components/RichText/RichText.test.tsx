import React from 'react';
import { render, screen } from '../../test/testUtils';
import { RichText, RichTextProps } from './RichText';

const defaultProps: RichTextProps = {
  content: 'Content',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<RichText {...combinedProps} />);
};

describe('The RichText component', () => {
  it('displays the content', () => {
    setup();

    expect(screen.getByText(defaultProps.content)).toBeInTheDocument();
  });
});
