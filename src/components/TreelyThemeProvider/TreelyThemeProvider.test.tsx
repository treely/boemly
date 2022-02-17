import React from 'react';
import { TreelyThemeProvider } from './TreelyThemeProvider';
import { render, screen } from '../../test/testUtils';

const setup = () => {
  render(
    <TreelyThemeProvider>
      <div>Children</div>
    </TreelyThemeProvider>
  );
};

describe('The TreelySteps component', () => {
  it('displays the children', () => {
    setup();

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
