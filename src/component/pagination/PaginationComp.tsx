import React from 'react';
import { usePagination } from 'hook';
import { styled } from '@mui/system';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';

const FlexBox = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}));

const FontStyle = styled(Typography)(({ theme }) => ({
  fontWeight: '900',
  [theme.breakpoints.up('xs')]: {
    fontSize: '8px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '12px'
  }
}));

type Props = { nextPage?: () => void; prevPage?: () => void };

const Component: React.FC<Props> = ({ prevPage, nextPage }) => {
  return (
    <FlexBox>
      <Button onClick={prevPage}>
        <FontStyle>{'PREVIOUS'}</FontStyle>
      </Button>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Button onClick={nextPage}>
        <FontStyle>{'NEXT'}</FontStyle>
      </Button>
    </FlexBox>
  );
};

export const PaginationPage = React.memo(Component);
