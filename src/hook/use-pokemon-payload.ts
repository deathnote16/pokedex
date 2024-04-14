import { modules } from 'modules';
import { useAppSelector } from './use-app-selector';
import { useAppDispatch } from './use-app-dispatch';
import { useCallback, useMemo } from 'react';

const {
  useGetPokemonDetailsQuery,
  useGetPokemonSpeciesQuery,
  useGetPokemonGrowthRateQuery
} = modules.pokemonModule;

const { actions: pokemonPayloadAction, selectors: pokemonPayloadSelector } =
  modules.apiPayload;

export const usePokemonPayload = () => {
  const dispatch = useAppDispatch();
  const pokemonName = useAppSelector(
    pokemonPayloadSelector.pokemonNameSelector
  );
  const pokemonUrl = useAppSelector(pokemonPayloadSelector.pokemonUrlSelector);

  //pokemon endpoints
  const {
    data: pokeDetails,
    isLoading,
    isFetching,
    isError: pokeDetailsError
  } = useGetPokemonDetailsQuery({
    url: pokemonUrl
  });

  //pokemon species endpoint
  const {
    data: pokeSpecies,
    isLoading: isPokeSpeciesLoading,
    isFetching: isPokeSpeciesFetching,
    isError: pokeSpeciesError
  } = useGetPokemonSpeciesQuery({ url: pokeDetails?.species?.url });

  //pokemon growth endpoints
  // const {
  //   data: pokeGrowth,
  //   isLoading: isPokeGrowthLoading,
  //   isFetching: isPokeGrowthFetching,
  //   isError: pokeGrowthError
  // } = useGetPokemonGrowthRateQuery({ url: pokeSpecies?.growth_rate?.url });

  const getPokemonName = useCallback(
    (pokeName?: string) => {
      dispatch(pokemonPayloadAction.getPokemonName(pokeName));
    },
    [dispatch]
  );

  const getPokemonUrl = useCallback(
    (pokeUrl?: string) => {
      dispatch(pokemonPayloadAction.getPokemonUrl(pokeUrl));
    },
    [dispatch]
  );

  return {
    //PokemonData
    pokeDetails,
    isLoading,
    isFetching,
    pokeDetailsError,
    //Pokemon Species Data
    pokeSpecies,
    isPokeSpeciesFetching,
    isPokeSpeciesLoading,
    pokeSpeciesError,
    //PokemonGrowthData
    // pokeGrowth,
    // isPokeGrowthFetching,
    // isPokeGrowthLoading,
    // pokeGrowthError,
    //========Actions and value =========
    pokemonName,
    getPokemonName,
    getPokemonUrl
  };
};
