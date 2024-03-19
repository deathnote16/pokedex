import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateType } from '.';

const initialState: InitialStateType = {
  isOpenPokemonSearch: false
};

const togglePokemonSearchAction = (
  state: InitialStateType,
  { payload }: PayloadAction<{ isOpen: boolean }>
) => {
  state.isOpenPokemonSearch = payload.isOpen;
};

const slice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: { togglePokemonSearchAction }
});

export const actions = { ...slice.actions };
export const reducer = slice.reducer;
