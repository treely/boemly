import React from 'react';
import { MobileMenu } from '.';
import { fireEvent, render, screen } from '../../test/testUtils';
import { MobileMenuProps } from './MobileMenu';

const onCloseSpy = jest.fn();
const onLinkClickSpy = jest.fn();

const defaultProps: MobileMenuProps = {
  isOpen: false,
  onClose: onCloseSpy,
  headerLinks: [{ text: 'Link text', onClick: onLinkClickSpy }],
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  return render(<MobileMenu {...combinedProps} />);
};

describe('The MobileMenu component', () => {
  afterEach(() => {
    onCloseSpy.mockRestore();
    onLinkClickSpy.mockRestore();
  });

  it('displays the given links', () => {
    setup({ isOpen: true });

    expect(screen.getByRole('button')).toHaveTextContent('Link text');

    fireEvent.click(screen.getByRole('button'));

    expect(onCloseSpy).toHaveBeenCalledTimes(1);
    expect(onLinkClickSpy).toHaveBeenCalledTimes(1);
  });
});
