import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiPayloadState } from './types';

const initialState: ApiPayloadState = {
  pokemonName: 'bulbasaur',
  pokeIdNumber: 1
};

const getPokemonName = (
  state: ApiPayloadState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.pokemonName = payload;
};
const getPokeIdNumber = (
  state: ApiPayloadState,
  { payload }: PayloadAction<number | undefined>
) => {
  state.pokeIdNumber = payload;
};

const slice = createSlice({
  name: 'apiFilters',
  initialState,
  reducers: { getPokemonName, getPokeIdNumber }
});

export const actions = { ...slice.actions };
export const reducer = slice.reducer;
