import React from 'react';
import { Slider } from '.';
import { act } from 'react';
import { fireEvent, render, RenderResult, screen, waitFor } from '../../test/testUtils';
import { SliderProps } from './Slider';

const onChangeSpy = jest.fn();

const defaultProps: SliderProps = {
  ariaLabel: 'Aria label',
  onChange: onChangeSpy,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<Slider {...combinedProps} />);
};

describe('The Slider component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    onChangeSpy.mockRestore();
  });

  describe('in the default variant', () => {
    it('displays a slider', async () => {
      await act(async () => {
        setup();
      });

      expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    it('displays an input field', async () => {
      await act(async () => {
        setup();
      });

      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    });

    it('calls the onChange function if the input is used', async () => {
      setup();

      await act(async () => {
        fireEvent.input(screen.getByRole('spinbutton'), { target: { value: '12' } });
      });

      expect(onChangeSpy).toHaveBeenCalledWith(12);
    });

    it('does not call the onChange function if the input value is an empty string', async () => {
      setup();

      await act(async () => {
        fireEvent.input(screen.getByRole('spinbutton'), { target: { value: '' } });
      });

      expect(onChangeSpy).toHaveBeenCalledTimes(0);
    });

    it('calls the onChange function with the minimum if the value in the input field is lower then minimum', async () => {
      setup();

      await act(async () => {
        fireEvent.input(screen.getByRole('spinbutton'), { target: { value: '-1' } });
      });

      expect(onChangeSpy).toHaveBeenCalledWith(0);
    });

    it('calls the onChange function with the maximum if the value in the input field is higher then maximum', async () => {
      setup();

      await act(async () => {
        fireEvent.input(screen.getByRole('spinbutton'), { target: { value: '101' } });
      });

      expect(onChangeSpy).toHaveBeenCalledWith(100);
    });

    // We can't test if the slider triggers the onChange function since we have to polyfill the ResizeObserver

    it('displays the unit if given', async () => {
      await act(async () => {
        setup({ unit: 'unit' });
      });

      expect(screen.getByText('unit')).toBeInTheDocument();
      expect(screen.getByText('0 unit')).toBeInTheDocument();
      expect(screen.getByText('100 unit')).toBeInTheDocument();
    });

    it('displays custom min and max values', async () => {
      await act(async () => {
        setup({ min: 1, max: 99 });
      });

      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('99')).toBeInTheDocument();
    });
  });

  describe('in the boundary variant', () => {
    it('displays a boundary slider', async () => {
      await act(async () => {
        setup({ variant: 'boundary' });
      });

      expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    it('displays the correct boundary slider min and max texts', async () => {
      await act(async () => {
        setup({
          variant: 'boundary',
          min: 10,
          max: 90,
          unit: 'kg',
          lowerBoundText: 'Low',
          upperBoundText: 'High',
        });
      });

      expect(screen.getByText('Low')).toBeInTheDocument();
      expect(screen.getByText('High')).toBeInTheDocument();
      expect(screen.getByText('10 kg')).toBeInTheDocument();
      expect(screen.getByText('90 kg')).toBeInTheDocument();
    });

    it('displays a tooltip with the correct value', async () => {
      await act(async () => {
        setup({ variant: 'boundary' });
      });

      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    it('updates the slider value when the external value prop changes', async () => {
      let rerender: RenderResult['rerender'];

      await act(async () => {
        ({ rerender } = render(<Slider {...defaultProps} value={30} onChange={onChangeSpy} />));
      });

      await act(async () => {
        rerender(<Slider {...defaultProps} value={70} onChange={onChangeSpy} />);
      });

      await waitFor(() =>
        expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '70')
      );
    });
  });
});
