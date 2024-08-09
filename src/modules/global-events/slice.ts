import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateType } from '.';

const initialState: InitialStateType = {
  isOpenPokemonSearch: false,
  isOpenPokemonList: false,
  isPokemonAbilityDialog: false,
  isPokemonTypeDialog: false
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

const togglePokemonAbilityDialogAction = (
  state: InitialStateType,
  { payload }: PayloadAction<{ isOpen: boolean }>
) => {
  state.isPokemonAbilityDialog = payload.isOpen;
};

const togglePokemonTypeDialogAction = (
  state: InitialStateType,
  { payload }: PayloadAction<{ isOpen: boolean }>
) => {
  state.isPokemonTypeDialog = payload.isOpen;
};

const slice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {
    togglePokemonSearchAction,
    togglePokemonListAction,
    togglePokemonAbilityDialogAction,
    togglePokemonTypeDialogAction
  }
});

export const actions = { ...slice.actions };
export const reducer = slice.reducer;
