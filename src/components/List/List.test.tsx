import { Heart } from 'phosphor-react';
import { render, screen } from '@testing-library/react';
import List from '.';
import { ListProps } from './List';

const defaultProps: ListProps = { listItems: [{ id: 1, text: 'Text' }] };

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<List {...combinedProps} />);
};

describe('The List component', () => {
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
