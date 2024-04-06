import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

const selectApiPayload = (state: RootState) => state.ApiPayload;

const pokemonNameSelector = createSelector(
  selectApiPayload,
  (state) => state.pokemonName
);

const pokemonIdNumberSelector = createSelector(
  selectApiPayload,
  (state) => state.pokeIdNumber
);

export const selectors = {
  pokemonNameSelector,
  pokemonIdNumberSelector
};
