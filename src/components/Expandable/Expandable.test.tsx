import React from 'react';
import { Expandable } from '.';
import { render, screen } from '../../test/testUtils';
import { ExpandableProps } from './Expandable';

const onToggleSpy = jest.fn();

const defaultProps: ExpandableProps = {
  title: 'Title',
  tagline: 'Tagline',
  icon: <div>icon</div>,
  isOpen: false,
  onToggle: onToggleSpy,
  children: <div>Children</div>,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<Expandable {...combinedProps} />);
};

describe('The Expandable component', () => {
  it('displays the title, tagline, and icon', () => {
    setup();

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Tagline')).toBeInTheDocument();
    expect(screen.getByText('icon')).toBeInTheDocument();
  });

  it('displays no children if it is closed', () => {
    setup({ isOpen: false });

    expect(screen.queryByText('Children')?.parentElement?.parentElement).toHaveAttribute(
      'style',
      'height: 0px; opacity: 0;'
    );
  });

  it('displays children if it is open', () => {
    setup({ isOpen: true });

    expect(screen.getByText('Children').parentElement?.parentElement).toHaveAttribute(
      'style',
      'height: auto; opacity: 1;'
    );
  });

  it('renders correct if it is active', () => {
    setup({ isActive: true });

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('displays a tag if one is given', () => {
    setup({ tag: 'Tag' });

    expect(screen.getByText('Tag')).toBeInTheDocument();
  });

  it('displays a loading spinner if loading is true', () => {
    setup({ loading: true });

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
