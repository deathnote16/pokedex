import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

const globalEventSelector = (state: RootState) => state.GlobalEvent;

const selectIsOpenPokemonSearch = createSelector(
  globalEventSelector,
  (state) => state.isOpenPokemonSearch
);

export const selector = {
  selectIsOpenPokemonSearch
};
