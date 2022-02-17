import { render, screen } from '@testing-library/react';
import Header from '.';

const defaultProps = {
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
