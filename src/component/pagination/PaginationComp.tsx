import React from 'react';
import { styled } from '@mui/system';
import { Button, ButtonGroup, Paper } from '@mui/material';

type Props = { nextPage?: () => void; prevPage?: () => void };

const Component: React.FC<Props> = ({ prevPage, nextPage }) => {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button sx={{ width: '100px' }} onClick={prevPage}>
        {'Previous'}
      </Button>
      <Button sx={{ width: '100px' }} onClick={nextPage}>
        {'Next'}
      </Button>
    </ButtonGroup>
  );
};

export const PaginationPage = React.memo(Component);
