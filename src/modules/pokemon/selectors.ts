import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { pokemonApi } from 'app/apiSlice';

export const selectPokemonResult =
  pokemonApi?.endpoints?.useGetPokemonListQuery?.select();
