import React, { FC, Fragment, memo } from 'react';
import {
  AppBar,
  Box,
  Button,
  TextField,
  Typography,
  styled
} from '@mui/material';
import { FlexBoxRow, FlexBoxStartRow } from 'component/BoxLayout/Boxes';
import {
  ResponsiveBoldTypography,
  ResponsiveTitle
} from 'component/typography';
import Image from 'next/image';
import { SubNavigationBar } from '.';
import useWindowSize from 'hook/use-window-size';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import { useDrawer } from 'hook/use-drawer';
import { customColor } from 'component/theme';
import { SearchBar } from 'component/SearchBar/SearchBar';

const BoxNav = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '150px',
  padding: '0.5rem',
  background: customColor.primary.main,
  borderLeft: `1px solid ${customColor.secondary.main}`,
  borderRight: `1px solid ${customColor.secondary.main}`,
  cursor: 'pointer',
  '&:hover': { background: 'white' }
});

type Props = {};

const Component: FC<Props> = ({}) => {
  const { isOpenSubNavigationBar, onToggleSubNavigationDrawer } = useDrawer();

  return (
    <Fragment>
      <AppBar position="static" sx={{ background: customColor.secondary.main }}>
        <FlexBoxRow justifyContent={'center'} padding={'0.5rem'}>
          <SearchBar />
        </FlexBoxRow>
      </AppBar>
    </Fragment>
  );
};

export const MobileNavigation = memo(Component);
