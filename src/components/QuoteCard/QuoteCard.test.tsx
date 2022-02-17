import { render, screen } from '../../test/testUtils';
import { QuoteCard } from '.';
import { QuoteCardProps } from './QuoteCard';

const defaultProps: QuoteCardProps = {
  text: 'Text',
  avatar: { name: 'Name', description: 'Description', image: { src: '/src', alt: 'Alt text' } },
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<QuoteCard {...combinedProps} />);
};

describe('The QuoteCard component', () => {
  it('displays the text', () => {
    setup();

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  it('displays the avatar', () => {
    setup();

    expect(screen.getByTestId('avatar-with-name')).toBeInTheDocument();
  });
});
