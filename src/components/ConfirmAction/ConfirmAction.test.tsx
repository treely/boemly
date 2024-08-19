import React from 'react';
import { fireEvent, render, screen } from '../../test/testUtils';
import { ConfirmAction } from '.';
import { ConfirmActionProps } from './ConfirmAction';

const onCloseSpy = jest.fn();

const defaultProps: ConfirmActionProps = {
  title: 'Title',
  isOpen: true,
  onClose: onCloseSpy,
  trigger: <button>Trigger</button>,
  cancelButton: 'Cancel',
  confirmButton: 'Confirm',
  onConfirm: jest.fn(),
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<ConfirmAction {...combinedProps} />);
};

describe('The ConfirmAction component', () => {
  afterEach(() => {
    onCloseSpy.mockRestore();
  });

  it('displays the title', () => {
    setup();

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('displays the text', () => {
    setup({ text: 'Text' });

    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('displays the trigger', () => {
    setup({ isOpen: false });

    expect(screen.getByRole('button')).toHaveTextContent('Trigger');
  });

  it('displays cancel and confirm buttons', () => {
    setup();

    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getAllByRole('button')[1]).toHaveTextContent('Cancel');
    expect(screen.getAllByRole('button')[2]).toHaveTextContent('Confirm');
  });

  it('displays loading state on the confirm button if confirmLoading property is true', () => {
    setup({ confirmLoading: true });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('closes the modal when the cancel button is clicked', () => {
    setup({ onClose: onCloseSpy });

    fireEvent.click(screen.getAllByRole('button')[1]);

    expect(onCloseSpy).toHaveBeenCalled();
  });
});
