import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiPayloadState } from './types';

const initialState: ApiPayloadState = {
  pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/1/',
  pokemonName: 'bulbasaur',
  pokeIdNumber: 1,
  pokemonAbilitiesUrl: ''
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

const slice = createSlice({
  name: 'apiFilters',
  initialState,
  reducers: {
    getPokemonName,
    getPokeIdNumber,
    getPokemonUrl,
    getPokemonAbilitiesUrl
  }
});

export const actions = { ...slice.actions };
export const reducer = slice.reducer;
