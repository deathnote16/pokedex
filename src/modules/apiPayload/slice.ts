import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiPayloadState } from './types';

const initialState: ApiPayloadState = {
  pokemonUrl: '',
  pokemonName: 'bulbasaur',
  pokeIdNumber: 1,
  pokemonAbilitiesUrl: '',
  pokemonType: ''
};

const getPokemonUrl = (
  state: ApiPayloadState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.pokemonUrl = payload;
};

const getPokemonAbilitiesUrl = (
  state: ApiPayloadState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.pokemonAbilitiesUrl = payload;
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

const getPokemonType = (
  state: ApiPayloadState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.pokemonType = payload;
};

const slice = createSlice({
  name: 'apiFilters',
  initialState,
  reducers: {
    getPokemonName,
    getPokeIdNumber,
    getPokemonUrl,
    getPokemonAbilitiesUrl,
    getPokemonType
  }
});

export const actions = { ...slice.actions };
export const reducer = slice.reducer;
