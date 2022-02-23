import React from 'react';
import { HeroCard } from '.';
import { render, screen } from '../../test/testUtils';
import { HeroCardProps } from './HeroCard';

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
    setup({ link: { text: 'Link text', onClick: jest.fn() } });

    expect(screen.getByRole('button')).toHaveTextContent('Link text');
  });

  it('displays an image if an image is in the props', () => {
    setup({ image: <img alt="Alt text" src="/src" /> });

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Alt text');
  });
});
