import React, { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './theme';
import { CssBaseline } from '@mui/material';
import { EnumTheme, themeAtom } from '../../state/global/system';
import { useAtom } from 'jotai';

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

const ThemeProviderWrapper: FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [theme] = useAtom(themeAtom);

  return (
    <ThemeProvider theme={theme === EnumTheme.LIGHT ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
