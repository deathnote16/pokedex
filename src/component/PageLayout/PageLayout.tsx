import { Container } from '@mui/material';
import { MainNavigationBar } from 'component/NavigationBar';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <MainNavigationBar />
      <Container>{children}</Container>
    </>
  );
};
