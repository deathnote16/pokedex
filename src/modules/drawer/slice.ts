import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DrawerState } from './types';

const initialState: DrawerState = {
  isOpenPokemonDrawer: false,
  isOpenSubNavigationBar: false
};

const onTogglePokemonDrawerAction = (state: DrawerState) => {
  state.isOpenPokemonDrawer = !state.isOpenPokemonDrawer;
};

const onToggleSubNavigationAction = (state: DrawerState) => {
  state.isOpenSubNavigationBar = !state.isOpenSubNavigationBar;
};

const slice = createSlice({
  name: 'globalDrawer',
  initialState,
  reducers: { onTogglePokemonDrawerAction, onToggleSubNavigationAction }
});

export const actions = { ...slice.actions };
export const reducer = slice.reducer;
