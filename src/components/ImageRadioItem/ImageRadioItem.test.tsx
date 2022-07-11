import React from 'react';
import { ImageRadioItem } from '.';
import { storybookMapThumbnailUrl } from '../../test/storybookMedia';
import { fireEvent, render, screen } from '../../test/testUtils';
import { ImageRadioItemProps } from './ImageRadioItem';

const onClickSpy = jest.fn();

const defaultProps: ImageRadioItemProps = {
  thumbnail: <img alt="Alt text" src={storybookMapThumbnailUrl} />,
  title: 'Title',
  value: 'value',
};

const setup = (props: Partial<ImageRadioItemProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<ImageRadioItem {...combinedProps} />);
};

describe('The ImageRadioItem component', () => {
  afterEach(() => {
    onClickSpy.mockRestore();
  });

  it('renders the title prop', () => {
    setup();

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('renders the thumbnail prop', () => {
    setup();

    expect(screen.getByAltText('Alt text')).toBeInTheDocument();
  });

  it('calls the onChange callback when the item is clicked', () => {
    setup({ onClick: onClickSpy });

    fireEvent.click(screen.getByRole('button'));
    expect(onClickSpy).toHaveBeenCalledWith('value');
  });

  it('does not call the onChange callback when the item is disabled', () => {
    setup({ onClick: onClickSpy, isDisabled: true });

    fireEvent.click(screen.getByRole('button'));
    expect(onClickSpy).toHaveBeenCalledTimes(0);
  });
});
