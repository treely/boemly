import React from 'react';
import { Layout } from '.';
import { render, screen } from '../../test/testUtils';
import { LayoutProps } from './Layout';

const defaultProps: LayoutProps = {
  header: 'header',
  extendableHeader: true,
  body: 'body',
  theme: 'light',
  footer: 'footer',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<Layout {...combinedProps} />);
};

describe('The Layout component', () => {
  it('renders the header prop', () => {
    setup();

    expect(screen.getByText('header')).toBeInTheDocument();
  });

  it('renders the body prop', () => {
    setup();

    expect(screen.getByText('body')).toBeInTheDocument();
  });

  it('renders the footer prop', () => {
    setup();

    expect(screen.getByText('footer')).toBeInTheDocument();
  });

  it('renders the banner prop if it is given', () => {
    setup({ banner: 'banner' });

    expect(screen.getByText('banner')).toBeInTheDocument();
  });
});
