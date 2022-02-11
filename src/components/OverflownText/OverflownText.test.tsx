import { Box, TextProps } from '@chakra-ui/react';
import { render, screen } from '../../test/testUtils';
import OverflownText from '.';

const defaultProps: TextProps = {
  children: 'Short text',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(
    <Box width="100px">
      <OverflownText {...combinedProps} />
    </Box>
  );
};

describe('The OverflownText component', () => {
  it('displays the text', () => {
    setup();

    expect(screen.getByText('Short text')).toBeInTheDocument();
  });
});
