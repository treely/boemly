import { mocked } from 'jest-mock';
import { useRouter } from 'next/router';
import { render, screen } from '../../test/testUtils';
import { NavItem } from '.';
import { NavItemProps } from './NavItem';
import { DEFAULT_USE_ROUTER_RETURN_VALUE } from '../../test/defaultMocks/next';

const useRouterMocked = mocked(useRouter);

const defaultProps: NavItemProps = {
  color: 'black',
  link: {
    text: 'Link text',
    href: '/page',
  },
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<NavItem {...combinedProps} />);
};

describe('The NavItem component', () => {
  beforeAll(() => {
    useRouterMocked.mockReturnValue(DEFAULT_USE_ROUTER_RETURN_VALUE);
  });

  afterAll(() => {
    useRouterMocked.mockRestore();
  });

  it('renders a link with the correct text', () => {
    setup();

    expect(screen.getByRole('button')).toHaveTextContent(defaultProps.link.text);
    expect(screen.getByRole('button')).toHaveAttribute('href', defaultProps.link.href);
  });
});
