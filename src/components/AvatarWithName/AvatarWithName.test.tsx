import { render, screen } from '@testing-library/react';
import AvatarWithName from '.';
import { AvatarWithNameProps } from './AvatarWithName';

const defaultProps: AvatarWithNameProps = {
  name: 'Name',
  description: 'Description',
  image: { src: '/src', alt: 'Alt text' },
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<AvatarWithName {...combinedProps} />);
};

describe('The AvatarWithName component', () => {
  it('displays the name', () => {
    setup();

    expect(screen.getByText(defaultProps.name, { exact: false })).toBeInTheDocument();
  });

  it('displays the description', () => {
    setup();

    expect(screen.getByText(defaultProps.description, { exact: false })).toBeInTheDocument();
  });

  it('displays the image', () => {
    setup();

    expect(screen.getByRole('img')).toHaveAttribute('alt', defaultProps.image.alt);
  });
});
