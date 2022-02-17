import { render, screen } from '@testing-library/react';
import Shape from '.';
import { ShapeProps } from './Shape';

const defaultProps: ShapeProps = {
  shape: { alt: 'Alt text', src: '/src' },
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<Shape {...combinedProps} />);
};

describe('The Shape component', () => {
  it('displays the shape', () => {
    setup();

    expect(screen.getByTestId('shape')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Alt text');
  });
});
