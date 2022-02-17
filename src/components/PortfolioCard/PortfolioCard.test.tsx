import { render, screen } from '@testing-library/react';
import LeftTextRightCard from '.';
import { PortfolioCardProps } from './PortfolioCard';

const defaultProps: PortfolioCardProps = {
  id: 1,
  portfolioNumber: 'Portfolio #1',
  title: 'My forest',
  facts: [
    {
      id: 1,
      key: 'key1',
      value: 'value1',
    },
    {
      id: 2,
      key: 'key2',
      value: 'value2',
    },
    {
      id: 3,
      key: 'key3',
      value: 'value3',
    },
    {
      id: 4,
      key: 'key4',
      value: 'value4',
    },
  ],
  button: {
    href: '/login',
    text: 'Buy certificates',
  },
  image: {
    alt: 'Alt text',
    src: '/src',
  },
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<LeftTextRightCard {...combinedProps} />);
};

describe('The PortfolioCard component', () => {
  it('displays the portfolioNumber', () => {
    setup();

    expect(screen.getByText(defaultProps.portfolioNumber)).toBeInTheDocument();
  });

  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.portfolioNumber)).toBeInTheDocument();
  });

  it('displays the facts', () => {
    setup();

    expect(screen.getByText(defaultProps.facts[0].key)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.facts[0].value)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.facts[1].key)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.facts[2].value)).toBeInTheDocument();
  });
});
