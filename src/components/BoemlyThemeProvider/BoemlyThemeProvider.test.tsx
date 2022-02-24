import React from 'react';
import { BoemlyThemeProvider } from './BoemlyThemeProvider';
import { render, screen } from '../../test/testUtils';

const defaultProps = {};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(
    <BoemlyThemeProvider {...combinedProps}>
      <div>Children</div>
    </BoemlyThemeProvider>
  );
};

describe('The BoemlySteps component', () => {
  it('displays the children', () => {
    setup();

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('displays the children if there is a color customization passed in', () => {
    setup({ colors: { black: '#000000' } });

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('displays the children if there is a border radii customization passed in', () => {
    setup({ radii: { sm: '1rem' } });

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
