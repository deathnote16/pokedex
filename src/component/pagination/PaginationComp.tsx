import React from 'react';
import { styled } from '@mui/system';
import { Box, Button, ButtonGroup, Paper } from '@mui/material';
import { customColor } from 'component/theme';

const FlexCenter = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem'
});

type Props = { nextPage?: () => void; prevPage?: () => void };

const Component: React.FC<Props> = ({ prevPage, nextPage }) => {
  return (
    <FlexCenter>
      <Box>
        <Button
          sx={{
            width: '100px',
            border: 'none',
            marginX: '0.2rem',
            background: customColor.highLight.main
          }}
          variant="contained"
          onClick={prevPage}
        >
          {'Previous'}
        </Button>
        <Button
          sx={{
            width: '100px',
            marginX: '0.2rem',
            background: customColor.highLight.main
          }}
          onClick={nextPage}
          variant="contained"
        >
          {'Next'}
        </Button>
      </Box>
    </FlexCenter>
  );
};

export const PaginationPage = React.memo(Component);
