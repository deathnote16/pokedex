import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

const drawerSelector = (state: RootState) => state.Drawer;

const selectIsOpenPokemonDrawer = createSelector(
  drawerSelector,
  (state) => state.isOpenPokemonDrawer
);

const selectSubNavigationBar = createSelector(
  drawerSelector,
  (state) => state.isOpenSubNavigationBar
);

export const selectors = {
  selectIsOpenPokemonDrawer,
  selectSubNavigationBar
};
