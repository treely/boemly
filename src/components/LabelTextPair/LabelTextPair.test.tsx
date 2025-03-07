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

  it('displays the caption if a caption is given', () => {
    setup({ caption: 'Caption' });

    expect(screen.getByText('Caption')).toBeInTheDocument();
  });

  it('allows to set the size', () => {
    setup({ size: 'lg' });

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  it('changes the color if isDisabled is true', () => {
    setup({ caption: 'Caption', isDisabled: true });

    expect(screen.getByText('Text')).toHaveStyle('color: gray.400');
    expect(screen.getByText('Label')).toHaveStyle('color: gray.400');
    expect(screen.getByText('Caption')).toHaveStyle('color: gray.400');
  });
});
