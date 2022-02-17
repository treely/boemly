import { render, screen } from '@testing-library/react';
import { HeroCardProps } from './HeroCard';
import HeroCard from '.';

const defaultProps: HeroCardProps = {
  title: 'Title',
  subTitle: 'Sub title',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<HeroCard {...combinedProps} />);
};

describe('The HeroCard component', () => {
  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays the sub title', () => {
    setup();

    expect(screen.getByText(defaultProps.subTitle)).toBeInTheDocument();
  });

  it('displays a link as a button if there is a link in the props', () => {
    setup({ link: { text: 'Link text', href: 'url' } });

    expect(screen.getByRole('button')).toHaveTextContent('Link text');
  });

  it('displays an image if an image is in the props', () => {
    setup({ image: { alt: 'Alt text', src: '/src' } });

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Alt text');
  });
});
