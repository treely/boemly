import React from 'react';
import { act } from 'react';
import { fireEvent, render, screen, waitFor } from '../../test/testUtils';
import { RangeSelect } from '.';

describe('The RangeSelect component', () => {
  it('renders with placeholder text', () => {
    render(<RangeSelect placeholder="Select a range" />);
    expect(screen.getByText('Select a range')).toBeInTheDocument();
  });

  it('opens dropdown and shows From/To labels when clicked', async () => {
    render(<RangeSelect />);

    const combobox = screen.getByRole('combobox');
    await act(async () => {
      fireEvent.click(combobox);
    });

    await waitFor(() => {
      expect(screen.getByText('From')).toBeInTheDocument();
      expect(screen.getByText('To')).toBeInTheDocument();
    });
  });

  it('handles range input changes', async () => {
    const handleChange = jest.fn();

    render(<RangeSelect onChange={handleChange} />);

    const toggleButton = screen.getByRole('combobox');

    await act(async () => {
      fireEvent.click(toggleButton);
    });

    const inputFields = screen.getAllByRole('spinbutton');

    fireEvent.change(inputFields[0], {
      target: { value: '1' },
    });
    fireEvent.change(inputFields[1], {
      target: { value: '100' },
    });

    expect(handleChange).toHaveBeenCalledWith(['1', '100']);
  });

  it('displays error messages when error props are provided', async () => {
    render(
      <RangeSelect
        rangeFromError="Value must be at least 5"
        rangeToError="Value must be at most 10"
      />
    );

    const toggleButton = screen.getByRole('combobox');
    await act(async () => {
      fireEvent.click(toggleButton);
    });

    expect(screen.getByText('Value must be at least 5')).toBeInTheDocument();
    expect(screen.getByText('Value must be at most 10')).toBeInTheDocument();
  });

  it('displays the range in the trigger when values are set', () => {
    render(<RangeSelect value={['10', '50']} />);
    expect(screen.getByText('10 – 50')).toBeInTheDocument();
  });

  it('displays partial range when only one value is set', () => {
    render(<RangeSelect value={['10', '']} />);
    expect(screen.getByText('10 – ...')).toBeInTheDocument();
  });

  it('calls onClose when dropdown is closed', async () => {
    const onCloseMock = jest.fn();
    render(<RangeSelect onClose={onCloseMock} />);

    const toggleButton = screen.getByRole('combobox');

    await act(async () => {
      fireEvent.click(toggleButton);
    });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    await act(async () => {
      fireEvent.click(toggleButton);
    });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
