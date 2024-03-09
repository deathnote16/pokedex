import { createSlice } from '@reduxjs/toolkit';
import { DrawerState } from './types';

const initialState: DrawerState = {
  isOpenPokemonDrawer: false
};

const slice = createSlice({
  name: 'global-drawer',
  initialState,
  reducers: {}
});

export const actions = { ...slice.actions };
export const reducer = slice.reducer;
