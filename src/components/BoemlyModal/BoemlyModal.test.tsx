import React, { useState } from 'react';
import { act } from 'react';
import { fireEvent, render, screen, waitFor } from '../../test/testUtils';
import { BoemlyModalProps } from './BoemlyModal';
import { BoemlyModal } from '.';
import { Flex, Heading, Text } from '@chakra-ui/react';

// Wrapper component to manage controlled state
const BoemlyModalWrapper: React.FC<Omit<BoemlyModalProps, 'open' | 'onOpenChange'>> = (props) => {
  const [open, setOpen] = useState(false);
  return <BoemlyModal {...props} open={open} onOpenChange={setOpen} />;
};

const defaultProps: Omit<BoemlyModalProps, 'open' | 'onOpenChange'> = {
  title: 'Title',
  content: <div>Content</div>,
  trigger: <button>Trigger</button>,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<BoemlyModalWrapper {...combinedProps} />);
};

describe('The BoemlyModal component', () => {
  it('displays the trigger', () => {
    setup();

    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('displays the title', async () => {
    setup();

    await act(async () => {
      fireEvent.click(screen.getByText('Trigger'));
    });

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('displays the content', async () => {
    setup();

    await act(async () => {
      fireEvent.click(screen.getByText('Trigger'));
    });

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('displays the footer if passed in', async () => {
    setup({ footer: <div>Footer</div> });

    await act(async () => {
      fireEvent.click(screen.getByText('Trigger'));
    });

    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('displays a custom title if passed in', async () => {
    await waitFor(() => {
      setup({
        title: (
          <Flex flexDir="row">
            <Heading color="red">Custom title</Heading>
            <Text color="grey" size="xlRegularNormal">
              -with custom subtitle
            </Text>
          </Flex>
        ),
      });
    });

    await act(async () => {
      fireEvent.click(screen.getByText('Trigger'));
    });

    expect(screen.getByText((content) => content.includes('Custom title'))).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes('-with custom subtitle'))
    ).toBeInTheDocument();
  });

  it('renders without error in specific size', async () => {
    setup({ size: 'xl' });

    await act(async () => {
      fireEvent.click(screen.getByText('Trigger'));
    });

    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
