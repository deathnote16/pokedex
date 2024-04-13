import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
// import { pokemonColorTypes } from 'constant';
import { Type } from 'modules/pokemon/types';
import React, { useCallback, useMemo, useState } from 'react';
import { capitalize } from 'lodash';
import { PokeColor, pokemonColorTypesArray } from 'constant';
import { usePokemonPayload } from 'hook';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { BaseStat } from '.';
import { customColor } from 'component/theme';

type Props = {};

const Component: React.FC<Props> = () => {
  const { pokeStats, pokemonName } = usePokemonPayload();

  return (
    <Paper elevation={0} sx={{ background: customColor.primary.main, p: 3 }}>
      <FlexBox flexDirection={'column'}>
        <Box justifyContent={'flex-start'} width={'100%'}>
          <Typography
            variant="h4"
            fontWeight={600}
          >{`${pokemonName?.toUpperCase()} Base Stats`}</Typography>
        </Box>
      </FlexBox>
      <BaseStat />
    </Paper>
  );
};

export const PokemonStats = React.memo(Component);
