import React from 'react';
import { render, screen } from '../../test/testUtils';
import { BoemlyAccordion, BoemlyAccordionProps } from './BoemlyAccordion';

const defaultProps: BoemlyAccordionProps = {
  defaultIndex: 0,
  rows: [{ id: 1, key: 'Heading', value: 'Text' }],
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<BoemlyAccordion {...combinedProps} />);
};

describe('The BoemlyAccordion component', () => {
  it('displays the key', () => {
    setup();

    expect(screen.getByText(defaultProps.rows[0].key)).toBeInTheDocument();
  });

  it('displays the value', () => {
    setup();

    expect(screen.getByText(defaultProps.rows[0].value)).toBeInTheDocument();
  });

  it('renders with variant `white` without an error', () => {
    setup({ variant: 'white' });

    expect(screen.getByText(defaultProps.rows[0].key)).toBeInTheDocument();
  });
});
