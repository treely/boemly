import React from 'react';
import { render, screen } from '../../test/testUtils';
import { BoemlyModalProps } from './BoemlyModal';
import { BoemlyModal } from '.';

const onCloseSpy = jest.fn();

const defaultProps: BoemlyModalProps = {
  title: 'Title',
  content: <div>Content</div>,
  isOpen: true,
  onClose: onCloseSpy,
  trigger: <button>Trigger</button>,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<BoemlyModal {...combinedProps} />);
};

describe('The BoemlyModal component', () => {
  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays the content', () => {
    setup();

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('displays the footer if passed in', () => {
    setup({ footer: <div>Footer</div> });

    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('displays the trigger', () => {
    setup({ isOpen: false });

    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('renders without error in specific size', () => {
    setup({ size: '2xl' });

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });
});
