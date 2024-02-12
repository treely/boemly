import React from 'react';
import { BoemlyAlert } from '.';
import { render, screen, fireEvent } from '../../test/testUtils';
import { BoemlyAlertProps } from './BoemlyAlert';

const onCloseSpy = jest.fn();

const defaultProps: BoemlyAlertProps = {
  text: 'Text',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<BoemlyAlert {...combinedProps} />);
};

describe('The BoemlyAlert component', () => {
  afterEach(() => {
    onCloseSpy.mockRestore();
  });

  it('displays the text in a default info alert', () => {
    setup();

    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByTestId('info-icon')).toBeInTheDocument();
  });

  it('displays the text in a warning alert', () => {
    setup({ status: 'warning' });

    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByTestId('warning-icon')).toBeInTheDocument();
  });

  it('displays the text in a error alert', () => {
    setup({ status: 'error' });

    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByTestId('error-icon')).toBeInTheDocument();
  });

  it('displays the text in a success alert', () => {
    setup({ status: 'success' });

    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByTestId('success-icon')).toBeInTheDocument();
  });

  it('displays the text in a loading alert', () => {
    setup({ status: 'loading' });

    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays the title if there is a title given', () => {
    setup({ title: 'Title' });

    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('calls the onClose button if the close icon is clicked', () => {
    setup({ isClosable: true, onClose: onCloseSpy });

    fireEvent.click(screen.getByRole('button'));

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it('displays a close button if isClosable is true', () => {
    setup({ isClosable: true, onClose: onCloseSpy });

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
