import { fireEvent, render, screen } from '../../test/testUtils';
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
  image: <img src="/src" alt="Alt text" />,
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

  it('displays a button if one is passed in', () => {
    const onClickSpy = jest.fn();
    setup({
      button: {
        onClick: onClickSpy,
        text: 'Button text',
      },
    });

    expect(screen.getByRole('button')).toHaveTextContent('Button text');

    fireEvent.click(screen.getByRole('button'));

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
