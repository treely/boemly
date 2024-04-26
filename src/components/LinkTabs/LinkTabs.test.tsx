import React from 'react';
import { LinkTabs } from '.';
import { render, screen } from '../../test/testUtils';
import { LinkTabsProps } from './LinkTabs';

const defaultProps: LinkTabsProps = {
  tabs: [
    { key: 'tab-1', title: 'Tab 1', href: 'https://tree.ly/path-1' },
    { key: 'tab-2', title: 'Tab 2', href: 'https://tree.ly/path-2' },
  ],
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<LinkTabs {...combinedProps} />);
};

describe('The LinkTabs component', () => {
  it('displays links to all tabs', () => {
    setup();

    defaultProps.tabs.forEach((tab) => {
      expect(screen.getByText(tab.title)).toHaveAttribute('href', tab.href);
    });
  });

  it('displays an indicator if a tab is active', () => {
    setup({ activeTabKey: 'tab-1' });

    expect(screen.getByTestId('active-indicator')).toBeInTheDocument();
  });
});
