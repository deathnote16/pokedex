import { Backdrop, Box, Paper } from '@mui/material';
import { FC, memo } from 'react';

type Props = {};

const Component: FC<Props> = () => {
  return (
    <Backdrop open={true} sx={{ zIndex: 1 }}>
      <div>test</div>
      <Paper>
        <Box>Test</Box>
      </Paper>
    </Backdrop>
  );
};

export const PokemonListV2 = memo(Component);
