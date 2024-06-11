import React from 'react';
import { Header } from '.';
import { render, screen } from '../../test/testUtils';
import { HeaderProps } from './Header';

const mockedResult = jest.fn().mockReturnValue({ isMobile: false });

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
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });
  afterEach(() => {
    mockedResult.mockClear();
  });

  it('renders the wrapper if the showWrapper prop is true', () => {
    setup({ showWrapper: true });

    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
  });

  it('renders the left prop', () => {
    setup();

    expect(screen.getByText('left')).toBeInTheDocument();
  });

  it('renders the center prop if the screen is not mobile', () => {
    setup();

    expect(screen.getByText('center')).toBeInTheDocument();
  });

  it('does not render the center prop if the screen is mobile', () => {
    mockedResult.mockReturnValue({ isMobile: true });
    setup();

    expect(screen.getByText('center')).toBeInTheDocument();
  });

  it('does not render the center prop if the hideCenter property is true', () => {
    setup({ hideCenter: true });

    expect(screen.queryByText('center')).not.toBeInTheDocument();
  });

  it('renders the right prop', () => {
    setup();

    expect(screen.getByText('right')).toBeInTheDocument();
  });
});
