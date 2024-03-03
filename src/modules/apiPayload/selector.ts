import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

const selectApiPayload = (state: RootState) => state.ApiPayload;

const pokemonNameSelector = createSelector(
  selectApiPayload,
  (state) => state.pokemonName
);

export const selectors = {
  pokemonNameSelector
};
