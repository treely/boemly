import React from 'react';
import { screen, render, fireEvent } from '../../test/testUtils';
import { BoemlyTabs, BoemlyTabsProps } from './BoemlyTabs';
import { Alien, Heart } from '@phosphor-icons/react';

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

  it('renders the tabs correctly', () => {
    setup();

    const tabContainer = screen.getByTestId('tabsBoxContainer');
    expect(tabContainer).toHaveStyle('display: block');
    expect(tabContainer).toHaveStyle('width: full');

    expect(screen.getByText('Tab 1 Content')).toBeInTheDocument();
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

    const [firstTabButton] = screen.getAllByTestId('lineTabButtonBox');
    const firstTabIndicator = screen.getByTestId('lineTabButtonIndicator');

    expect(firstTabButton).toBeInTheDocument();
    expect(firstTabButton).toContainElement(firstTabIndicator);
  });

  it('renders the SolidTabButton correctly when variant is solid', () => {
    setup({
      ...defaultProps,
      variant: 'solid',
      tabs: [
        { key: 'tab-1', title: 'Tab 1 Title', content: <div>Tab 1 Content</div>, icon: <Heart /> },
        { key: 'tab-2', title: 'Tab 2 Title', content: <div>Tab 2 Content</div>, icon: <Alien /> },
      ],
    });

    const tabContainer = screen.getByTestId('tabsBoxContainer');
    expect(tabContainer).toHaveStyle('display: block');
    expect(tabContainer).toHaveStyle('width: full');

    const [firstTabButton] = screen.getAllByTestId('solidTabButtonBox');
    const tabIndicators = screen.getAllByTestId('solidTabButtonIndicator');

    expect(firstTabButton).toBeInTheDocument();
    expect(firstTabButton).toHaveStyle('background-color: gray.100');
    expect(tabIndicators.length).toBeGreaterThan(0);
    expect(firstTabButton).toContainElement(tabIndicators[0]);
  });

  it('renders the SolidTabButton correctly when isFullWidth is false', () => {
    setup({
      ...defaultProps,
      variant: 'solid',
      isFullWidth: false,
    });

    const tabContainer = screen.getByTestId('tabsBoxContainer');
    expect(tabContainer).toHaveStyle('display: inline-block');
    expect(tabContainer).toHaveStyle('width: fit-content');

    const [firstTabButton] = screen.getAllByTestId('solidTabButtonBox');
    const tabIndicators = screen.getAllByTestId('solidTabButtonIndicator');

    expect(firstTabButton).toBeInTheDocument();
    expect(firstTabButton).toHaveStyle('background-color: gray.100');
    expect(tabIndicators.length).toBeGreaterThan(0);
    expect(firstTabButton).toContainElement(tabIndicators[0]);
  });
});
