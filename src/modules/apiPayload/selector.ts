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

const pokemonUrlSelector = createSelector(
  selectApiPayload,
  (state) => state.pokemonUrl
);

const pokemonAbilitiesUrlSelector = createSelector(
  selectApiPayload,
  (state) => state.pokemonAbilitiesUrl
);

const pokemonTypesSelector = createSelector(
  selectApiPayload,
  (state) => state.pokemonType
);

export const selectors = {
  pokemonNameSelector,
  pokemonIdNumberSelector,
  pokemonUrlSelector,
  pokemonAbilitiesUrlSelector,
  pokemonTypesSelector
};
