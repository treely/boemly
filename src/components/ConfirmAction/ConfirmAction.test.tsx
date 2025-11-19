import React, { useState } from 'react';
import { act } from 'react';
import { fireEvent, render, screen, waitFor } from '../../test/testUtils';
import { ConfirmAction } from '.';
import { ConfirmActionProps } from './ConfirmAction';

// Wrapper component to manage controlled state
const ConfirmActionWrapper: React.FC<
  Omit<ConfirmActionProps, 'open' | 'onOpenChange'> & { defaultOpen?: boolean }
> = ({ defaultOpen = false, ...props }) => {
  const [open, setOpen] = useState(defaultOpen);
  return <ConfirmAction {...props} open={open} onOpenChange={setOpen} />;
};

const defaultProps: Omit<ConfirmActionProps, 'open' | 'onOpenChange'> = {
  trigger: <button>Trigger</button>,
  cancelButton: 'Cancel',
  confirmButton: 'Confirm',
  title: 'Title',
  text: 'Text',
  onConfirm: jest.fn(),
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<ConfirmActionWrapper {...combinedProps} />);
};

describe('The ConfirmAction component', () => {
  it('displays the trigger', () => {
    setup();

    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('displays the title', async () => {
    setup();

    await act(async () => {
      fireEvent.click(screen.getByText('Trigger'));
    });

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('displays the text', async () => {
    setup({ text: 'Text' });

    await act(async () => {
      fireEvent.click(screen.getByText('Trigger'));
    });

    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('displays cancel and confirm buttons', async () => {
    setup();

    await act(async () => {
      fireEvent.click(screen.getByText('Trigger'));
    });

    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('displays loading state on the confirm button if confirmLoading property is true', async () => {
    setup({ confirmLoading: true });

    await act(async () => {
      fireEvent.click(screen.getByText('Trigger'));
    });

    // Check if the confirm button is present and in loading state
    const confirmText = screen.getByText('Confirm');
    const confirmButton = confirmText.closest('button');
    expect(confirmButton).toBeInTheDocument();

    expect(confirmButton).toHaveAttribute('data-loading');
  });

  it('closes the modal when the cancel button is clicked', async () => {
    setup();

    await act(async () => {
      fireEvent.click(screen.getByText('Trigger'));
    });

    // Verify modal is open
    expect(screen.getByText('Title')).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByText('Cancel'));
    });

    // Verify modal is closed
    await waitFor(() => {
      expect(screen.queryByText('Title')).not.toBeInTheDocument();
    });
  });
});
