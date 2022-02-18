import React from 'react';
import { BoemlyThemeProvider } from './BoemlyThemeProvider';
import { render, screen } from '../../test/testUtils';

const setup = () => {
  render(
    <BoemlyThemeProvider>
      <div>Children</div>
    </BoemlyThemeProvider>
  );
};

describe('The BoemlySteps component', () => {
  it('displays the children', () => {
    setup();

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
