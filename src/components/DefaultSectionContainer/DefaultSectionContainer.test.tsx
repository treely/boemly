import React from 'react';
import { render, screen } from '../../test/testUtils';
import { DefaultSectionContainer, DefaultSectionContainerProps } from './DefaultSectionContainer';

const defaultProps: DefaultSectionContainerProps = {
  children: <div>children</div>,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<DefaultSectionContainer {...combinedProps} />);
};

describe('The DefaultSectionContainer component', () => {
  it('correctly sets the id attribute based on the title.', () => {
    setup({ title: 'My title' });

    expect(screen.getByText('children').parentElement).toHaveAttribute('id', 'my-title');
  });

  it('does not set the id attribute if no title is set.', () => {
    setup();

    expect(screen.getByText('children').parentElement).not.toHaveAttribute('id');
  });
});
