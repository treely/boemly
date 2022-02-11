import TreelyThemeProvider from '.';
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
