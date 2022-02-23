import React from 'react';
import { LabelTextPair } from '.';
import { render, screen } from '../../test/testUtils';
import { LabelTextPairProps } from './LabelTextPair';

const defaultProps: LabelTextPairProps = {
  label: 'Label',
  text: 'Text',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<LabelTextPair {...combinedProps} />);
};

describe('The LabelTextPair component', () => {
  it('displays the label', () => {
    setup();

    expect(screen.getByText(defaultProps.label)).toBeInTheDocument();
  });

  it('displays the text', () => {
    setup();

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });
});
