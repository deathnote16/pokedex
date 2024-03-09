import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

const drawerSelector = (state: RootState) => state.Drawer;

const selectIsOpenPokemonDrawer = createSelector(
  drawerSelector,
  (state) => state.isOpenPokemonDrawer
);

export const selectors = {
  selectIsOpenPokemonDrawer
};
