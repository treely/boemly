import React from 'react';
import { ImageRadioItem } from '../ImageRadioItem';
import { ImageRadioGroup, ImageRadioGroupProps } from './ImageRadioGroup';
import { fireEvent, render, screen } from '../../test/testUtils';
import { storybookMapThumbnailUrl } from '../../test/storybookMedia';

const onChangeSpy = jest.fn();

const defaultProps: ImageRadioGroupProps = {
  onChange: onChangeSpy,
  value: 'value1',
};

const Image = <img alt="Alt text" src={storybookMapThumbnailUrl} />;

const setup = (props: Partial<ImageRadioGroupProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(
    <ImageRadioGroup {...combinedProps}>
      <ImageRadioItem thumbnail={Image} value="value1" title="Card 1" />
      <ImageRadioItem thumbnail={Image} value="value2" title="Card 2" />
    </ImageRadioGroup>
  );
};

describe('The ImageRadioGroup feature', () => {
  afterEach(() => {
    onChangeSpy.mockRestore();
  });

  it('renders all children', () => {
    setup();

    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
  });

  it('calls the onChange callback when a item is clicked', () => {
    setup();

    fireEvent.click(screen.getByText('Card 2'));
    expect(onChangeSpy).toHaveBeenCalledWith('value2');
  });
});
