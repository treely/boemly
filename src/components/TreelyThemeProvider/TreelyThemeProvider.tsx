import { ChakraProvider } from '@chakra-ui/react';
import { IconContext } from 'phosphor-react';
import chakraTheme from '../../constants/chakraTheme';
import iconCustomizations from '../../constants/iconCustomizations';

interface TreelyThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const TreelyThemeProvider: React.FC<TreelyThemeProviderProps> = ({
  children,
}: TreelyThemeProviderProps) => (
  <ChakraProvider theme={chakraTheme}>
    <IconContext.Provider value={iconCustomizations}>{children}</IconContext.Provider>
  </ChakraProvider>
);
