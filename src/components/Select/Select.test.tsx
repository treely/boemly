import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('opens dropdown when clicked', () => {
    render(<Select color="black" options={mockOptions} />);
    fireEvent.click(screen.getByRole('button', { name: /toggle dropdown/i }));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('selects an option when clicked', () => {
    render(<Select color="black" options={mockOptions} />);
    fireEvent.click(screen.getByRole('button', { name: /toggle dropdown/i }));
    fireEvent.click(screen.getByText('Option 1'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('handles single selection mode', () => {
    render(<Select color="black" options={mockOptions} value={['1']} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('handles multiple selection mode', () => {
    render(
      <Select
        color="white"
        options={mockOptions}
        isMultiple
        selectAllText="Select All"
        clearAllText="Clear All"
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /toggle dropdown/i }));
    fireEvent.click(screen.getByText('Option 1'));
    fireEvent.click(screen.getByText('Option 2'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('filters options when search term is entered', () => {
    render(
      <Select
        color="black"
        options={mockOptions}
        isSearchable
        selectAllText="Select All"
        clearAllText="Clear All"
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /toggle dropdown/i }));
    fireEvent.change(screen.getByPlaceholderText('Select an option'), {
      target: { value: 'Option 1' },
    });
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).toBeNull();
  });

  it('selects all options in multiple mode', () => {
    render(
      <Select
        color="black"
        options={mockOptions}
        isMultiple
        selectAllText="Select All"
        clearAllText="Clear All"
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /toggle dropdown/i }));
    fireEvent.click(screen.getByText('Select All'));

    // Find the options and navigate to their checkboxes
    const option1Text = screen.queryByText('Option 1');
    const option2Text = screen.queryByText('Option 2');
    const option3Text = screen.queryByText('Option 3');

    // Get the closest parent div for each option
    const option1Div = option1Text?.closest('div');
    const option2Div = option2Text?.closest('div');
    const option3Div = option3Text?.closest('div');

    // Check if the checkbox within the div have a data-checked attribute
    expect(option1Div?.querySelector('label')).toHaveAttribute('data-checked');
    expect(option2Div?.querySelector('label')).toHaveAttribute('data-checked');
    expect(option3Div?.querySelector('label')).toHaveAttribute('data-checked');
  });

  it('clears all selected options in multiple mode', () => {
    render(
      <Select
        color="black"
        options={mockOptions}
        isMultiple
        selectAllText="Select All"
        clearAllText="Clear All"
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /toggle dropdown/i }));

    fireEvent.click(screen.getByText('Select All'));

    fireEvent.click(screen.getByText('Clear All'));

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

  it('when dropdown is opened and closed, aria-expanded value changes', () => {
    render(<Select color="black" options={mockOptions} />);

    const toggleButton = screen.getByRole('combobox');

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  // check the onClose handler
  it('calls onClose when dropdown is closed', () => {
    const onCloseMock = jest.fn();
    render(<Select color="black" options={mockOptions} onClose={onCloseMock} />);

    const toggleButton = screen.getByRole('combobox');

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Check if onClose was called
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('allows deselection when preventDeselection is false', () => {
    const handleChange = jest.fn();

    render(
      <Select color="black" options={mockOptions} isMultiple={false} onChange={handleChange} />
    );

    const toggleButton = screen.getByRole('combobox');
    fireEvent.click(toggleButton);

    const option1 = screen.getByText('Option 1');
    fireEvent.click(option1);

    expect(handleChange).toHaveBeenCalledWith(['1']);
    fireEvent.click(toggleButton);
    // Click the same option again to deselect
    fireEvent.click(option1);

    expect(handleChange).toHaveBeenCalledWith(['1']);
  });

  it('prevents deselection when preventDeselection is true', () => {
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

    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(screen.getByText('Option 1'));

    expect(handleChange).toHaveBeenCalledWith(['1']);

    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(screen.getByRole('menuitemradio', { name: 'Option 1' })); // try to deselect

    // check that the text in the combobox doesn't change
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 1');
  });

  it('allows switching between options when preventDeselection is true', () => {
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

    const toggleButton = screen.getByRole('combobox');
    fireEvent.click(toggleButton);

    const option1 = screen.getByText('Option 1');

    fireEvent.click(option1);
    expect(handleChange).toHaveBeenCalledWith(['1']);

    expect(screen.getByRole('combobox')).toHaveTextContent('Option 1');

    // re open dropdown and select another option
    fireEvent.click(toggleButton);

    const option2 = screen.getByText('Option 2');

    fireEvent.click(option2);
    expect(handleChange).toHaveBeenCalledWith(['2']);
    // check that the text in the combobox did change
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 2');
  });

  it('handles disabled options correctly', () => {
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
    fireEvent.click(toggleButton);

    const disabledOption = screen.getByText('Option 1');
    const enabledOption = screen.getByText('Option 2');

    // try to select disabled option
    fireEvent.click(disabledOption);
    expect(handleChange).not.toHaveBeenCalled();

    // Select enabled option
    fireEvent.click(enabledOption);
    expect(handleChange).toHaveBeenCalledWith(['2']);
  });
});
