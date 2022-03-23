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

  it('displays the caption if a caption is given', () => {
    setup({ caption: 'Caption' });

    expect(screen.getByText('Caption')).toBeInTheDocument();
  });

  it('allows to set the size', () => {
    setup({ size: 'lg' });

    expect(screen.getByText(defaultProps.number)).toBeInTheDocument();
  });
});
