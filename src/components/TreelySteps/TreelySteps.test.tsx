import TreelySteps from '.';
import { render, screen, userEvent } from '../../test/testUtils';
import { TreelyStepsProps } from './TreelySteps';

const onClickSpy = jest.fn();

const defaultProps: TreelyStepsProps = {
  steps: [
    { text: 'Step 1', onClick: jest.fn() },
    { text: 'Step 2', onClick: jest.fn() },
    { text: 'Step 3', onClick: jest.fn() },
    { text: 'Step 4', onClick: jest.fn() },
  ],
  currentStep: 1,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<TreelySteps {...combinedProps} />);
};

describe('The TreelySteps component', () => {
  afterEach(() => {
    onClickSpy.mockRestore();
  });

  it('displays all given steps', () => {
    setup();

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
    expect(screen.getByText('Step 4')).toBeInTheDocument();
  });

  it('displays all numbers if the current step is 1', () => {
    setup();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('displays only the last number if the current step is the last one', () => {
    setup({ currentStep: 4 });

    expect(screen.queryByText('1')).not.toBeInTheDocument();
    expect(screen.queryByText('2')).not.toBeInTheDocument();
    expect(screen.queryByText('3')).not.toBeInTheDocument();
    expect(screen.queryByText('4')).toBeInTheDocument();
  });

  it('calls the onClick if one step is clicked', () => {
    setup({ steps: [{ text: 'Step 1', onClick: onClickSpy }], currentStep: 1 });

    userEvent.click(screen.getByText('Step 1'));

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
