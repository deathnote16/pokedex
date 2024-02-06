import { FC, ReactNode, memo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { colors } from '@mui/material';
import { customColor } from './customColors';

type MuiThemeProps = {
  children?: ReactNode;
};

const component: FC<MuiThemeProps> = ({ children }) => {
  //put all custom themes here or in seperate container
  const theme = createTheme({
    palette: {
      primary: {
        main: customColor.primary.main
      },
      secondary: {
        main: customColor.secondary.main
      },
      common: {
        black: customColor.common.dark,
        white: customColor.common.light
      }
    }
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const CustomTheme = memo(component);
