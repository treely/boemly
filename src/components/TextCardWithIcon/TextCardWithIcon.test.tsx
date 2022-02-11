import { render, screen } from '../../test/testUtils';
import TextCardWithIcon from '.';
import { TextCardWithIconProps } from './TextCardWithIcon';

const defaultProps: TextCardWithIconProps = {
  title: 'Title',
  text: 'Text',
  icon: { alt: 'Alt text', src: '/src' },
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<TextCardWithIcon {...combinedProps} />);
};

describe('The TextCardWithIcon component', () => {
  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays the text', () => {
    setup();

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  it('displays the icon', () => {
    setup();

    expect(screen.getByRole('img')).toHaveAttribute('alt', defaultProps.icon.alt);
  });
});
