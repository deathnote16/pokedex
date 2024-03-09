import React, { FC, Fragment } from 'react';
import { Container } from '@mui/material';
import Head from 'next/head';
import { MainNavigationBar } from 'component/NavigationBar';

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
      {/* TODO: add navigation here */}
      <>
        <MainNavigationBar />
        <Container maxWidth="lg">{children}</Container>
      </>
    </Fragment>
  );
};

export const MainLayout = React.memo(Component);
