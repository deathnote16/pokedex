import React, { FC, Fragment, memo } from 'react';
import { AppBar, Box, Button, Typography } from '@mui/material';
import { FlexBoxStartRow } from 'component/BoxLayout/Boxes';
import { ResponsiveTitle } from 'component/typography';
import Image from 'next/image';
import { SubNavigationBar } from '.';
import useWindowSize from 'hook/use-window-size';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import { useDrawer } from 'hook/use-drawer';

type Props = {};

const Component: FC<Props> = ({}) => {
  const { isMobile } = useWindowSize();
  const { isOpenSubNavigationBar, onToggleSubNavigationDrawer } = useDrawer();

  return (
    <Fragment>
      <AppBar position="static">
        <Box
          p={'1rem'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <FlexBoxStartRow>
            <Image
              src={`/images/png/pokeballs2.png`}
              alt="pokemon-img"
              width={50}
              height={50}
            />
            <ResponsiveTitle>{`POKEDEX`}</ResponsiveTitle>
          </FlexBoxStartRow>
          {isMobile && (
            <Button color="secondary" onClick={onToggleSubNavigationDrawer}>
              <LinearScaleIcon fontSize="large" />
            </Button>
          )}
        </Box>
      </AppBar>
      {!isMobile ? <SubNavigationBar /> : null}
    </Fragment>
  );
};

export const MainNavigationBar = memo(Component);
