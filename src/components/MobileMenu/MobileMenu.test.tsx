import { render, screen } from '../../test/testUtils';
import { MobileMenu } from '.';
import { MobileMenuProps } from './MobileMenu';

const onCloseSpy = jest.fn();

const defaultProps: MobileMenuProps = {
  isOpen: false,
  onClose: onCloseSpy,
  headerLinks: [{ text: 'Link text', href: '/href' }],
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  return render(<MobileMenu {...combinedProps} />);
};

describe('The MobileMenu component', () => {
  afterEach(() => {
    onCloseSpy.mockRestore();
  });

  it('displays the given links', () => {
    setup({ isOpen: true });

    expect(screen.getByRole('button')).toHaveTextContent('Link text');
    expect(screen.getByRole('button')).toHaveAttribute('href', `/href`);
  });
});
