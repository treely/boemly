import { render, screen } from '../../test/testUtils';
import ShapesCard from '.';
import { ShapesCardProps } from './ShapesCard';

const defaultProps: ShapesCardProps = {
  title: 'Title',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<ShapesCard {...combinedProps} />);
};

describe('The ShapesCard component', () => {
  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays a tagline if one is given', () => {
    setup({ tagline: 'Tagline' });

    expect(screen.getByText('Tagline')).toBeInTheDocument();
  });

  it('displays a text if one is given', () => {
    setup({ text: 'Text' });

    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('displays a button if one is given', () => {
    setup({ button: { text: 'Button', href: '/url' } });

    expect(screen.getByRole('button')).toHaveTextContent('Button');
  });

  it('displays shapes if there are given', () => {
    setup({
      shapes: [
        { alt: 'Alt text 1', src: '/src' },
        { alt: 'Alt text 2', src: '/src' },
      ],
    });

    expect(screen.getAllByTestId('shape').length).toBe(2);
  });
});
