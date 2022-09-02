import React from 'react';
import { screen, render, fireEvent } from '../../test/testUtils';
import { BoemlyTabs, BoemlyTabsProps } from './BoemlyTabs';

const onChangeSpy = jest.fn();

const defaultProps: BoemlyTabsProps = {
  tabs: [
    { key: 'tab-1', title: 'Tab 1 Title', content: <div>Tab 1 Content</div> },
    { key: 'tab-2', title: 'Tab 2 Title', content: <div>Tab 2 Content</div> },
  ],
  onChange: onChangeSpy,
};

const setup = (props: BoemlyTabsProps = defaultProps) => {
  render(<BoemlyTabs {...props} />);
};

describe('The BoemlyTabs component', () => {
  afterEach(() => {
    onChangeSpy.mockRestore();
  });

  it('calls the onChange callback and switches tabs if a tab button is clicked', () => {
    setup();

    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Tab 2 Title'));

    expect(onChangeSpy).toHaveBeenCalledWith('tab-2');
    expect(screen.queryByText('Tab 1 Content')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 2 Content')).toBeInTheDocument();
  });

  it('renders the active indicator on the active tab', async () => {
    setup();

    const [firstTabButton] = screen.getAllByTestId('tabBottonBox');
    const firstTabIndicator = screen.getByTestId('tabBottonIndicator');

    expect(firstTabButton).toBeInTheDocument();
    expect(firstTabButton).toContainElement(firstTabIndicator);
  });
});
