import { Container } from '@mui/material';
import { MainNavigationBar } from 'component/NavigationBar';
import React, { FC } from 'react';

type Props = {};

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <MainNavigationBar />
      <Container>{children}</Container>
    </>
  );
};
