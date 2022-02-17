import { render, screen } from '@testing-library/react';
import TreelyAccordion from '.';
import { TreelyAccordionProps } from './TreelyAccordion';

const defaultProps: TreelyAccordionProps = {
  defaultIndex: 0,
  rows: [{ id: 1, key: 'Heading', value: 'Text' }],
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<TreelyAccordion {...combinedProps} />);
};

describe('The TreelyAccordion component', () => {
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
