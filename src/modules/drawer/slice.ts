import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DrawerState } from './types';

const initialState: DrawerState = {
  isOpenPokemonDrawer: false,
  isOpenSubNavigationBar: false
};

const onHandlePokemonDrawerAction = (state: DrawerState) => {
  state.isOpenPokemonDrawer = !state.isOpenPokemonDrawer;
};

const slice = createSlice({
  name: 'globalDrawer',
  initialState,
  reducers: { onHandlePokemonDrawerAction }
});

export const actions = { ...slice.actions };
export const reducer = slice.reducer;
