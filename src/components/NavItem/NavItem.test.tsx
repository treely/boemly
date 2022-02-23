import React from 'react';
import { NavItem } from '.';
import { fireEvent, render, screen } from '../../test/testUtils';
import { NavItemProps } from './NavItem';

const onClickSpy = jest.fn();

const defaultProps: NavItemProps = {
  color: 'black',
  link: {
    text: 'Link text',
    onClick: onClickSpy,
  },
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<NavItem {...combinedProps} />);
};

describe('The NavItem component', () => {
  afterEach(() => {
    onClickSpy.mockRestore();
  });
  it('renders a link with the correct text', () => {
    setup();

    expect(screen.getByRole('button')).toHaveTextContent(defaultProps.link.text);

    fireEvent.click(screen.getByRole('button'));

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
