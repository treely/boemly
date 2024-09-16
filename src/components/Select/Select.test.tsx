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
});
