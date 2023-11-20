import React from 'react';
import { Heart } from '@phosphor-icons/react';
import { render, screen } from '../../test/testUtils';
import { BoemlyListProps } from './BoemlyList';
import { BoemlyList } from '.';

const defaultProps: BoemlyListProps = { listItems: [{ id: 1, text: 'Text' }] };

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<BoemlyList {...combinedProps} />);
};

describe('The BoemlyList component', () => {
  it('displays the check mark', () => {
    setup();

    expect(screen.getByText(defaultProps.listItems[0].text)).toBeInTheDocument();
  });

  it('displays a custom icon', () => {
    setup({ icon: <Heart data-testid="heart-icon" /> });

    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });

  it('displays number for the ordered list', () => {
    setup({ ordered: true });

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
