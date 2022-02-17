import React from 'react';
import { render, screen } from '../../test/testUtils';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<Header {...combinedProps} />);
};

describe('The Header component', () => {
  it('renders the left prop', () => {
    setup();

    expect(screen.getByText('left')).toBeInTheDocument();
  });

  it('renders the center prop', () => {
    setup();

    expect(screen.getByText('center')).toBeInTheDocument();
  });

  it('renders the right prop', () => {
    setup();

    expect(screen.getByText('right')).toBeInTheDocument();
  });
});
