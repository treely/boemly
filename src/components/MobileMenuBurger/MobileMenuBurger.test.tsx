import { render, screen, fireEvent } from '../../test/testUtils';
import MobileMenuBurger from '.';
import { MobileMenuBurgerProps } from './MobileMenuBurger';

const onOpenSpy = jest.fn();
const onCloseSpy = jest.fn();

const defaultProps: MobileMenuBurgerProps = {
  isOpen: false,
  onOpen: onOpenSpy,
  onClose: onCloseSpy,
  color: 'black',
};
const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  return render(<MobileMenuBurger {...combinedProps} />);
};

describe('The MobileMenuBurger component', () => {
  afterEach(() => {
    onOpenSpy.mockRestore();
    onCloseSpy.mockRestore();
  });

  it('displays a burger icon if the menu is closed', () => {
    setup({ isOpen: false });

    expect(screen.getByTestId('list')).toBeInTheDocument();
  });

  it('displays a close icon if the menu is open', () => {
    setup({ isOpen: true });

    expect(screen.getByTestId('x')).toBeInTheDocument();
  });

  it('calls the onOpen function if the burger icon is clicked', () => {
    setup({ isOpen: false });

    fireEvent.click(screen.getByTestId('list'));

    expect(onOpenSpy).toHaveBeenCalledTimes(1);
  });

  it('calls the onClose function if the close icon is clicked', () => {
    setup({ isOpen: true });

    fireEvent.click(screen.getByTestId('x'));

    expect(onCloseSpy).toHaveBeenCalledTimes(1);
  });
});
