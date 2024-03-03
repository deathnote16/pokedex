import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiPayloadState } from './types';

const initialState: ApiPayloadState = {
  pokemonName: ''
};

const getPokemonName = (
  state: ApiPayloadState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.pokemonName = payload;
};

const slice = createSlice({
  name: 'apiFilters',
  initialState,
  reducers: { getPokemonName }
});

export const actions = { ...slice.actions };
export const reducer = slice.reducer;
