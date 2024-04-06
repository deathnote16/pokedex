import { modules } from 'modules';
import { useAppSelector } from './use-app-selector';
import { useAppDispatch } from './use-app-dispatch';
import { useCallback } from 'react';

const { useGetPokemonDetailsQuery } = modules.pokemonModule;
const { actions: pokemonPayloadAction, selectors: pokemonPayloadSelector } =
  modules.apiPayload;

export const usePokemonPayload = () => {
  const dispatch = useAppDispatch();
  const pokemonName = useAppSelector(
    pokemonPayloadSelector.pokemonNameSelector
  );

  const {
    data: pokeDetails,
    isLoading,
    isFetching
  } = useGetPokemonDetailsQuery({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName || 'bulbasaur'}/`
  });

  const getPokemonName = useCallback(
    (pokeName?: string) => {
      dispatch(pokemonPayloadAction.getPokemonName(pokeName));
    },
    [dispatch]
  );

  const getPokemonIdNumber = useCallback(
    (pokeId?: number) => {
      dispatch(pokemonPayloadAction.getPokeIdNumber(pokeId));
    },
    [dispatch]
  );

  return {
    //PokemonData
    pokeDetails,
    isLoading,
    isFetching,
    //========Actions and value =========
    pokemonName,
    getPokemonName,
    getPokemonIdNumber
  };
};
