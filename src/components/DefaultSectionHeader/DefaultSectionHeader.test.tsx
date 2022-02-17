import { render, screen } from '../../test/testUtils';
import { DefaultSectionHeader } from '.';
import { DefaultSectionHeaderProps } from './DefaultSectionHeader';

const defaultProps: DefaultSectionHeaderProps = {
  title: 'Title',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<DefaultSectionHeader {...combinedProps} />);
};

describe('The TextCardGrid component', () => {
  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays the tagline if there is a tagline in the props', () => {
    setup({ tagline: 'Tagline' });

    expect(screen.getByText('Tagline')).toBeInTheDocument();
  });

  it('displays the text if there is text in the props', () => {
    setup({ text: 'Text' });

    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});
