import { AppBar, Box, Typography } from '@mui/material';
import { FlexBoxStartRow } from 'component/BoxLayout/Boxes';
import { ResponsiveTitle } from 'component/typography';
import Image from 'next/image';
import React, { FC, Fragment, memo } from 'react';
import { SubNavigationBar } from '.';

type Props = {};

const Component: FC<Props> = ({}) => {
  return (
    <Fragment>
      <AppBar position="static">
        <FlexBoxStartRow p={'1rem'}>
          <FlexBoxStartRow>
            <Image
              src={`/images/png/pokeballs2.png`}
              alt="pokemon-img"
              width={50}
              height={50}
            />
            <ResponsiveTitle>{`POKEDEX`}</ResponsiveTitle>
          </FlexBoxStartRow>
        </FlexBoxStartRow>
      </AppBar>
      <SubNavigationBar />
    </Fragment>
  );
};

export const MainNavigationBar = memo(Component);
