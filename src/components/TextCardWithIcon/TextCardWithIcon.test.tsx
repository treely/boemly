import React from 'react';
import { TextCardWithIcon } from '.';
import { fireEvent, render, screen } from '../../test/testUtils';
import { TextCardWithIconProps } from './TextCardWithIcon';

const defaultProps: TextCardWithIconProps = {
  title: 'Title',
  text: 'Text',
  height: 'auto',
  icon: <img alt="Alt text" src="/src" />,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<TextCardWithIcon {...combinedProps} />);
};

describe('The TextCardWithIcon component', () => {
  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays the text', () => {
    setup();

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  it('displays the icon', () => {
    setup();

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Alt text');
  });

  it('displays the image', () => {
    setup({ image: <img alt="Alt text" src="/src" />, displaysAs: 'column' });

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Alt text');
  });

  it('displays a button if one is passed in', () => {
    const onClickSpy = jest.fn();
    setup({
      button: {
        onClick: onClickSpy,
        text: 'Button text',
      },
    });

    expect(screen.getByRole('button')).toHaveTextContent('Button text');

    fireEvent.click(screen.getByRole('button'));

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
