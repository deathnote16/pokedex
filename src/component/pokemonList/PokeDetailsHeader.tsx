import React from 'react';
import { Box, Typography } from '@mui/material';
import { modules } from 'modules';

type Props = {
  pokeId?: number;
  pokeName?: string;
};

const Component: React.FC<Props> = ({ pokeId, pokeName }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography mr={1} fontWeight={900}>
        {`#${pokeId}` || '--'}
      </Typography>
      <Typography fontWeight={900}>
        {pokeName?.toUpperCase() || '--'}
      </Typography>
    </Box>
  );
};

export const PokeHeader = React.memo(Component);
