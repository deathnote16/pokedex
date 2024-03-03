import { FC, ReactNode, memo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { colors } from '@mui/material';
import { customColor } from './customColors';
import { League_Spartan } from 'next/font/google';
import { muiColors } from 'constant';

type MuiThemeProps = {
  children?: ReactNode;
};

const leaegueSpartan = League_Spartan({
  subsets: []
});

const component: FC<MuiThemeProps> = ({ children }) => {
  //put all custom themes here or in seperate container
  const theme = createTheme({
    typography: {
      fontFamily: leaegueSpartan.style.fontFamily
    },
    palette: {
      primary: {
        main: muiColors.primary
      },
      secondary: {
        main: muiColors.secondary
      }
    }
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const CustomTheme = memo(component);
