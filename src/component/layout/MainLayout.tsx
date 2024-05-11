import React, { FC, Fragment } from 'react';
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import { MainNavigationBar } from 'component/NavigationBar';
import { MainFooter } from 'component/footer';

type Props = {
  children?: React.ReactNode;
};

const Component: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Pokedex</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MainNavigationBar />
      <Container maxWidth="xl">{children}</Container>

      <MainFooter />
    </Fragment>
  );
};

export const MainLayout = React.memo(Component);
