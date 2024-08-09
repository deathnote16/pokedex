import { colors } from '@mui/material';
import { PokeColor, pokemonColorTypesArray } from 'constant';
import { useCallback } from 'react';

export const getPokemonColorType = (typeName?: string | undefined) => {
  const findTypeColor = pokemonColorTypesArray.find(
    (el?: PokeColor) => typeName === el?.type
  );
  return findTypeColor?.color;
};

export const statColor = (baseStat: number) => {
  if (baseStat <= 60) {
    return colors.red[300];
  }
  if (baseStat > 60 && baseStat < 105) {
    return colors.yellow[300];
  }
  if (baseStat >= 105 && baseStat < 150) {
    return colors.blue[300];
  }
  if (baseStat >= 150) {
    return colors.cyan[300];
  }
};
