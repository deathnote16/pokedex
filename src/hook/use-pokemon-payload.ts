import { modules } from 'modules';
import { useAppSelector } from './use-app-selector';
import { useAppDispatch } from './use-app-dispatch';
import { useCallback, useMemo } from 'react';

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

  const pokemonSprite = useMemo(
    () => pokeDetails?.sprites?.other?.['official-artwork']?.front_default,
    [pokeDetails?.sprites?.other]
  );

  const getPokemonName = useCallback(
    (pokeName?: string) => {
      dispatch(pokemonPayloadAction.getPokemonName(pokeName));
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
    pokemonSprite,
    getPokemonName
  };
};
