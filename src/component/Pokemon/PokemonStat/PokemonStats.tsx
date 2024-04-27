import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { capitalize } from 'lodash';
import { usePokemonPayload } from 'hook';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { BaseStat } from '.';
import { customColor } from 'component/theme';

type Props = {};

const Component: React.FC<Props> = () => {
  const { pokemonName } = usePokemonPayload();

  return (
    <Paper elevation={0} sx={{ background: customColor.primary.main, p: 3 }}>
      <FlexBox flexDirection={'column'}>
        <Box justifyContent={'flex-start'} width={'100%'}>
          <Typography variant="h4" fontWeight={600}>{`${capitalize(
            pokemonName
          )} Base Stats`}</Typography>
        </Box>
      </FlexBox>
      <BaseStat />
    </Paper>
  );
};

export const PokemonStats = React.memo(Component);
