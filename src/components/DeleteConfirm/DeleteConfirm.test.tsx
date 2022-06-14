import React from 'react';
import { DeleteConfirm } from '.';
import { fireEvent, render, screen } from '../../test/testUtils';
import { DeleteConfirmProps } from './DeleteConfirm';

const cancelSpy = jest.fn();
const deleteSpy = jest.fn();

const defaultProps: DeleteConfirmProps = {
  title: 'Title',
  deleteText: 'Delete',
  cancelText: 'Cancel',
  trigger: <button>Trigger</button>,
  isOpen: false,
  onCancel: cancelSpy,
  onDelete: deleteSpy,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<DeleteConfirm {...combinedProps} />);
};

describe('The DeleteConfirm component', () => {
  afterEach(() => {
    cancelSpy.mockRestore();
    deleteSpy.mockRestore();
  });

  it('displays the trigger', () => {
    setup();

    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays the text if one is given', () => {
    setup({ text: 'Text' });

    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('calls the onDelete function if the delete button is clicked', () => {
    setup();

    fireEvent.click(screen.getByText(defaultProps.deleteText));

    expect(deleteSpy).toHaveBeenCalledTimes(1);
  });

  it('calls the onCancel function if the cancel button is clicked', () => {
    setup();

    fireEvent.click(screen.getByText(defaultProps.cancelText));

    expect(cancelSpy).toHaveBeenCalledTimes(1);
  });
});
