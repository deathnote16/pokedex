import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateType } from '.';

const initialState: InitialStateType = {
  isOpenPokemonSearch: false,
  isOpenPokemonList: false
};

const togglePokemonSearchAction = (
  state: InitialStateType,
  { payload }: PayloadAction<{ isOpen: boolean }>
) => {
  state.isOpenPokemonSearch = payload.isOpen;
};

const togglePokemonListAction = (
  state: InitialStateType,
  { payload }: PayloadAction<{ isOpen: boolean }>
) => {
  state.isOpenPokemonList = payload.isOpen;
};

const slice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: { togglePokemonSearchAction, togglePokemonListAction }
});

export const actions = { ...slice.actions };
export const reducer = slice.reducer;
