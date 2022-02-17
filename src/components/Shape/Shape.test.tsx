import React from 'react';
import { render, screen } from '../../test/testUtils';
import { Shape, ShapeProps } from './Shape';

const defaultProps: ShapeProps = {
  shape: <img alt="Alt text" src="/src" />,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<Shape {...combinedProps} />);
};

describe('The Shape component', () => {
  it('displays the shape', () => {
    setup();

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Alt text');
  });
});
