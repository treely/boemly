import React from 'react';
import { LabelNumberPair } from '.';
import { render, screen } from '../../test/testUtils';
import { LabelNumberPairProps } from './LabelNumberPair';

const defaultProps: LabelNumberPairProps = {
  label: 'Label',
  number: '12',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<LabelNumberPair {...combinedProps} />);
};

describe('The LabelNumberPair component', () => {
  it('displays the label', () => {
    setup();

    expect(screen.getByText(defaultProps.label)).toBeInTheDocument();
  });

  it('displays the number', () => {
    setup();

    expect(screen.getByText(defaultProps.number)).toBeInTheDocument();
  });
});
