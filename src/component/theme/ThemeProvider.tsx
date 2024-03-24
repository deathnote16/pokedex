import { FC, ReactNode, memo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { customColor } from './customColors';
import { Teko } from 'next/font/google';

type MuiThemeProps = {
  children?: ReactNode;
};

const teko = Teko({
  subsets: []
});

const component: FC<MuiThemeProps> = ({ children }) => {
  //put all custom themes here or in seperate container
  const theme = createTheme({
    typography: {
      fontFamily: teko.style.fontFamily
    },
    palette: {
      primary: {
        main: customColor.primary.main
      },
      secondary: {
        main: customColor.secondary.main
      }
    }
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const CustomTheme = memo(component);
