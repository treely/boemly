import React from 'react';
import { render, screen } from '../../test/testUtils';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  left: <div>left</div>,
  right: <div>right</div>,
  bottomLeft: <div>bottomLeft</div>,
  bottomRight: <div>bottomRight</div>,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<Footer {...combinedProps} />);
};

describe('The Footer component', () => {
  it('renders the left prop', () => {
    setup();

    expect(screen.getByText('left')).toBeInTheDocument();
  });

  it('renders the right prop', () => {
    setup();

    expect(screen.getByText('right')).toBeInTheDocument();
  });

  it('renders the bottomLeft prop', () => {
    setup();

    expect(screen.getByText('left')).toBeInTheDocument();
  });

  it('renders the bottomRight prop', () => {
    setup();

    expect(screen.getByText('right')).toBeInTheDocument();
  });
});
