import { PokeColor, pokemonColorTypesArray } from 'constant';
import { useCallback } from 'react';

export const getPokemonColorType = (typeName?: string | undefined) => {
  const findTypeColor = pokemonColorTypesArray.find(
    (el?: PokeColor) => typeName === el?.type
  );
  return findTypeColor?.color;
};
