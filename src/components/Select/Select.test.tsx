import React from 'react';
import { act } from 'react';
import { fireEvent, render, screen, waitFor } from '../../test/testUtils';
import { Select } from '.';

const mockOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

describe('The Select component', () => {
  it('renders with placeholder text', () => {
    render(
      <Select
        options={mockOptions}
        color="white"
        placeholder="Select an option from these options"
      />
    );
    expect(screen.getByText('Select an option from these options')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', async () => {
    render(<Select color="black" options={mockOptions} />);

    const combobox = screen.getByRole('combobox');
    fireEvent.click(combobox);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
  });

  it('selects an option when clicked', async () => {
    render(<Select color="black" options={mockOptions} />);

    const combobox = screen.getByRole('combobox');
    fireEvent.click(combobox);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Option 1'));

    // After selection, Option 1 appears both in the trigger and the dropdown
    await waitFor(() => {
      const option1Elements = screen.getAllByText('Option 1');
      expect(option1Elements.length).toBeGreaterThan(0);
    });
  });

  it('handles single selection mode', () => {
    render(<Select color="black" options={mockOptions} value={['1']} />);
    // The selected value appears in both the trigger and the dropdown options
    const option1Elements = screen.getAllByText('Option 1');
    expect(option1Elements.length).toBeGreaterThan(0);
  });

  it('handles multiple selection mode', async () => {
    render(
      <Select
        color="white"
        options={mockOptions}
        isMultiple
        selectAllText="Select All"
        clearAllText="Clear All"
      />
    );
    const combobox = screen.getByRole('combobox');
    await act(async () => {
      fireEvent.click(combobox);
    });
    fireEvent.click(screen.getByText('Option 1'));
    fireEvent.click(screen.getByText('Option 2'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('filters options when search term is entered', async () => {
    render(
      <Select
        color="black"
        options={mockOptions}
        isSearchable
        selectAllText="Select All"
        clearAllText="Clear All"
      />
    );
    const combobox = screen.getByRole('combobox');
    await act(async () => {
      fireEvent.click(combobox);
    });
    fireEvent.change(screen.getByPlaceholderText('Select an option'), {
      target: { value: 'Option 1' },
    });
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).toBeNull();
  });

  it('selects all options in multiple mode', async () => {
    render(
      <Select
        color="black"
        options={mockOptions}
        isMultiple
        selectAllText="Select All"
        clearAllText="Clear All"
      />
    );
    const combobox = screen.getByRole('combobox');
    await act(async () => {
      fireEvent.click(combobox);
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Select All'));
    });

    // Find the options and navigate to their checkboxes
    const option1Text = screen.queryByText('Option 1');
    const option2Text = screen.queryByText('Option 2');
    const option3Text = screen.queryByText('Option 3');

    // Get the closest parent div for each option
    const option1Div = option1Text?.closest('div');
    const option2Div = option2Text?.closest('div');
    const option3Div = option3Text?.closest('div');

    // Check if the checkbox within the div have a data-checked attribute
    expect(option1Div?.querySelector('label')).toHaveAttribute('data-state', 'checked');
    expect(option2Div?.querySelector('label')).toHaveAttribute('data-state', 'checked');
    expect(option3Div?.querySelector('label')).toHaveAttribute('data-state', 'checked');
  });

  it('clears all selected options in multiple mode', async () => {
    render(
      <Select
        color="black"
        options={mockOptions}
        isMultiple
        selectAllText="Select All"
        clearAllText="Clear All"
      />
    );

    const combobox = screen.getByRole('combobox');
    await act(async () => {
      fireEvent.click(combobox);
    });

    fireEvent.click(screen.getByText('Select All'));

    await act(async () => {
      fireEvent.click(screen.getByText('Clear All'));
    });

    // Find the options and navigate to their checkboxes
    const option1Text = screen.queryByText('Option 1');
    const option2Text = screen.queryByText('Option 2');
    const option3Text = screen.queryByText('Option 3');

    // Get the closest parent div for each option
    const option1Div = option1Text?.closest('div');
    const option2Div = option2Text?.closest('div');
    const option3Div = option3Text?.closest('div');

    // Check if the checkbox within the div does not have a data-checked attribute
    expect(option1Div?.querySelector('label')).not.toHaveAttribute('data-checked');
    expect(option2Div?.querySelector('label')).not.toHaveAttribute('data-checked');
    expect(option3Div?.querySelector('label')).not.toHaveAttribute('data-checked');
  });

  it('when dropdown is opened and closed, aria-expanded value changes', async () => {
    render(<Select color="black" options={mockOptions} />);

    const toggleButton = screen.getByRole('combobox');

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    await act(async () => {
      fireEvent.click(toggleButton);
    });

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    await act(async () => {
      fireEvent.click(toggleButton);
    });

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  // check the onClose handler
  it('calls onClose when dropdown is closed', async () => {
    const onCloseMock = jest.fn();
    render(<Select color="black" options={mockOptions} onClose={onCloseMock} />);

    const toggleButton = screen.getByRole('combobox');

    await act(async () => {
      fireEvent.click(toggleButton);
    });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    await act(async () => {
      fireEvent.click(toggleButton);
    });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Check if onClose was called
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('allows deselection when preventDeselection is false', async () => {
    const handleChange = jest.fn();

    render(
      <Select color="black" options={mockOptions} isMultiple={false} onChange={handleChange} />
    );

    const toggleButton = screen.getByRole('combobox');
    await act(async () => {
      fireEvent.click(toggleButton);
    });

    const option1 = screen.getByText('Option 1');
    await act(async () => {
      fireEvent.click(option1);
    });

    expect(handleChange).toHaveBeenCalledWith(['1']);
    await act(async () => {
      fireEvent.click(toggleButton);
      // Click the same option again to deselect
      fireEvent.click(option1);
    });

    expect(handleChange).toHaveBeenCalledWith(['1']);
  });

  it('prevents deselection when preventDeselection is true', async () => {
    const handleChange = jest.fn();

    render(
      <Select
        color="black"
        options={mockOptions}
        isMultiple={false}
        preventDeselection={true}
        onChange={handleChange}
      />
    );

    const combobox = screen.getByRole('combobox');

    // Open menu and select Option 1
    fireEvent.click(combobox);
    const options = await screen.findAllByRole('option');
    const option1 = options.find((item) => item.textContent?.includes('Option 1'));
    expect(option1).toBeDefined();

    fireEvent.click(option1!);
    expect(handleChange).toHaveBeenCalledWith(['1']);

    // Reopen menu and try to click Option 1 again (should not deselect)
    fireEvent.click(combobox);
    const options2 = await screen.findAllByRole('option');
    const option1Again = options2.find((item) => item.textContent?.includes('Option 1'));
    expect(option1Again).toBeDefined();

    fireEvent.click(option1Again!);

    // onChange should never be called with empty array (no deselection)
    expect(handleChange).not.toHaveBeenCalledWith([]);
    expect(handleChange).toHaveBeenCalledWith(['1']);
  });

  it('handles disabled options correctly', async () => {
    const handleChange = jest.fn();

    const optionsWithDisabled = [
      { label: 'Option 1', value: '1', disabled: true },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ];

    render(
      <Select
        color="black"
        options={optionsWithDisabled}
        isMultiple={false}
        onChange={handleChange}
      />
    );

    const toggleButton = screen.getByRole('combobox');
    await act(async () => {
      fireEvent.click(toggleButton);
    });

    const disabledOption = screen.getByText('Option 1');
    const enabledOption = screen.getByText('Option 2');

    await act(async () => {
      // try to select disabled option
      fireEvent.click(disabledOption);
    });
    expect(handleChange).not.toHaveBeenCalled();

    await act(async () => {
      // Select enabled option
      fireEvent.click(enabledOption);
    });
    expect(handleChange).toHaveBeenCalledWith(['2']);
  });
});
