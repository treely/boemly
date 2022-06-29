import React from 'react';
import { AvatarWithName } from '.';
import { render, screen } from '../../test/testUtils';
import { AvatarWithNameProps } from './AvatarWithName';

const defaultProps: AvatarWithNameProps = {
  name: 'Name',
  description: 'Description',
  image: <img alt="alt" />,
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

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'alt');
  });

  it('renders in horizontal orientation', () => {
    setup({ orientation: 'horizontal' });

    expect(screen.getByTestId('avatar-with-name-horizontal')).toBeInTheDocument();
  });

  it('renders in vertical orientation', () => {
    setup({ orientation: 'vertical' });

    expect(screen.getByTestId('avatar-with-name-vertical')).toBeInTheDocument();
  });
});
