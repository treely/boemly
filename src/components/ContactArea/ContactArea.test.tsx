import { render, screen } from '../../test/testUtils';
import ContactArea from '.';
import { ContactAreaProps } from './ContactArea';

const defaultProps: ContactAreaProps = {
  title: 'Title',
  text: 'Text',
  avatar: { name: 'Name', description: 'Description', image: { src: '/src', alt: 'Alt text' } },
  link: { text: 'Button Text', href: '/url' },
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<ContactArea {...combinedProps} />);
};

describe('The ContactArea component', () => {
  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays the text', () => {
    setup();

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  it('displays an avatar', () => {
    setup();

    expect(screen.getByTestId('avatar-with-name')).toBeInTheDocument();
  });

  it('display the link as a button', () => {
    setup();

    expect(screen.getByRole('button')).toHaveTextContent(defaultProps.link.text);
  });
});
