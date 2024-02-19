import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Paper,
  Typography
} from '@mui/material';
// import { pokemonColorTypes } from 'constant';
import { Type } from 'modules/pokemon/types';
import React, { useCallback, useMemo, useState } from 'react';
import { capitalize } from 'lodash';
import { PokeColor, pokemonColorTypesArray } from 'constant';

type Props = {
  pokemonType?: Type[];
};

const Component: React.FC<Props> = ({ pokemonType }) => {
  return <Paper></Paper>;
};

export const PokemonStats = React.memo(Component);
