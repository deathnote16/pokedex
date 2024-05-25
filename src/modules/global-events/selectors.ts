import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

const globalEventSelector = (state: RootState) => state.GlobalEvent;

const selectIsOpenPokemonSearch = createSelector(
  globalEventSelector,
  (state) => state.isOpenPokemonSearch
);

const selectIsOpenPokemonList = createSelector(
  globalEventSelector,
  (state) => state.isOpenPokemonList
);

const selecctIsOpenPokemonAbilityDialog = createSelector(
  globalEventSelector,
  (state) => state.isPokemonAbilityDialog
);

const selectIsPokemonTypeDialog = createSelector(
  globalEventSelector,
  (state) => state.isPokemonTypeDialog
);

export const selector = {
  selectIsOpenPokemonSearch,
  selectIsOpenPokemonList,
  selecctIsOpenPokemonAbilityDialog,
  selectIsPokemonTypeDialog
};
