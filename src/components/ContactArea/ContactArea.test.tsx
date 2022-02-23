import React from 'react';
import { ContactArea } from '.';
import { render, screen } from '../../test/testUtils';
import { ContactAreaProps } from './ContactArea';

const defaultProps: ContactAreaProps = {
  title: 'Title',
  text: 'Text',
  avatar: {
    name: 'Name',
    description: 'Description',
    image: <img alt="Alt text" />,
  },
  link: { text: 'Button Text', onClick: () => jest.fn() },
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<ContactArea {...combinedProps} />);
};

describe('The ContactArea component', () => {
  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays the text', () => {
    setup();

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  it('displays an avatar', () => {
    setup();

    expect(screen.getByTestId('avatar-with-name')).toBeInTheDocument();
  });

  it('display the link as a button', () => {
    setup();

    expect(screen.getByRole('button')).toHaveTextContent(defaultProps.link.text);
  });
});
