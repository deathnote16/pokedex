import 'styles/globals.css';
import { persistor, store } from 'app/store';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CustomTheme } from 'component/theme';
import { Box } from '@mui/material';
import { SideNavigationBar } from 'component/NavigationBar/SideNavigationBar';
import useWindowSize from 'hook/use-window-size';
import { SubNavigationDrawer } from 'component/drawer';
import { GlobalDialog } from 'component/GlobalComponent';

export default function App({ Component, pageProps }: AppProps) {
  const { isMobile } = useWindowSize();

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokededx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {!isMobile && <SideNavigationBar />}
          <SubNavigationDrawer />
          <GlobalDialog />
          <CustomTheme>
            <Component {...pageProps} />
          </CustomTheme>
        </PersistGate>
      </Provider>
    </>
  );
}
