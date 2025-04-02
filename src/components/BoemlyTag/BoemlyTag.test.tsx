import React from 'react';
import { screen, render, fireEvent } from '../../test/testUtils';
import { BoemlyTag, BoemlyTagProps } from './BoemlyTag';

const defaultProps: BoemlyTagProps = {
  children: 'Test Tag',
  variant: 'solid',
  colorPalette: 'blue',
};

const setup = (props: BoemlyTagProps = defaultProps) => {
  render(<BoemlyTag {...props} />);
};

describe('The BoemlyTag component', () => {
  it('renders the tag without a close button if closable is false', () => {
    setup({ ...defaultProps, isClosable: false });

    expect(screen.getByText('Test Tag')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('closes the tag when the close button is clicked', () => {
    setup({ ...defaultProps, isClosable: true });

    expect(screen.getByText('Test Tag')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    expect(screen.queryByText('Test Tag')).not.toBeInTheDocument();
  });
});
