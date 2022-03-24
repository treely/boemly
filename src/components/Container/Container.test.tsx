import React from 'react';
import { Container } from '.';
import { render, screen } from '../../test/testUtils';
import { ContainerProps } from './Container';

const defaultProps: ContainerProps = {
  children: <div>Children</div>,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<Container {...combinedProps} />);
};

describe('The Container component', () => {
  it('displays the children', () => {
    setup();

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('renders correct with elevation prop', () => {
    setup({ elevation: 'lg' });

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('renders correct with padding prop', () => {
    setup({ padding: 'lg' });

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('renders correct with fullWidth prop', () => {
    setup({ fullWidth: false });

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
