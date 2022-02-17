import { render, screen } from '@testing-library/react';
import DatePersonPair from '.';
import { DatePersonPairProps } from './DatePersonPair';

const defaultProps: DatePersonPairProps = {
  date: '10/1/2021',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<DatePersonPair {...combinedProps} />);
};

describe('The DatePersonPair component', () => {
  it('displays the date', () => {
    setup();

    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
  });

  it('displays the name if there is a person in the props', () => {
    setup({ person: { name: 'Lukas', imageUrl: '/image-url', imageAlt: 'image-alt' } });

    expect(screen.getByText('Lukas')).toBeInTheDocument();
  });

  it('displays an image with the alt text if there is a person in the props', () => {
    setup({ person: { name: 'Lukas', imageUrl: '/image-url', imageAlt: 'image-alt' } });

    expect(screen.getByRole('img')).toHaveAttribute('src');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'image-alt');
  });
});
