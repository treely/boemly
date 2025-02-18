import React from 'react';
import { SubmissionConfirm } from '.';
import { fireEvent, render, screen } from '../../test/testUtils';
import { SubmissionConfirmProps } from './SubmissionConfirm';

const cancelSpy = jest.fn();
const submitSpy = jest.fn();

const defaultProps: SubmissionConfirmProps = {
  title: 'Title',
  submissionText: 'Submit',
  cancelText: 'Cancel',
  trigger: <button>Trigger</button>,
  isOpen: false,
  onCancel: cancelSpy,
  onSubmit: submitSpy,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<SubmissionConfirm {...combinedProps} />);
};

describe('The SubmissionConfirm component', () => {
  afterEach(() => {
    cancelSpy.mockRestore();
    submitSpy.mockRestore();
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

  it('calls the onSubmit function if the delete button is clicked', () => {
    setup();

    fireEvent.click(screen.getByText(defaultProps.submissionText));

    expect(submitSpy).toHaveBeenCalledTimes(1);
  });

  it('calls the onCancel function if the cancel button is clicked', () => {
    setup();

    fireEvent.click(screen.getByText(defaultProps.cancelText));

    expect(cancelSpy).toHaveBeenCalledTimes(1);
  });
});
