import { modules } from 'modules';
import { useAppSelector } from './use-app-selector';
import { useAppDispatch } from './use-app-dispatch';
import { useCallback, useMemo } from 'react';

const {
  useGetPokemonDetailsQuery,
  useGetPokemonSpeciesQuery,
  useGetPokemonAbilityQuery,
  useGetPokemonTypeQuery,
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
  const pokemonAbilitiesUrl = useAppSelector(
    pokemonPayloadSelector.pokemonAbilitiesUrlSelector
  );
  const pokemonTypesName = useAppSelector(
    pokemonPayloadSelector.pokemonTypesSelector
  );

  //pokemon endpoints
  const {
    data: pokeDetails,
    isLoading: isPokemonDetailsLoading,
    isFetching: isPokemonDetailFetching,
    isError: pokeDetailsError,
    error: pokemonDetailsStatusError
  } = useGetPokemonDetailsQuery({
    url: pokemonUrl
  });

  //pokemon species endpoint
  const {
    data: pokeSpecies,
    isLoading: isPokeSpeciesLoading,
    isFetching: isPokeSpeciesFetching,
    isError: pokeSpeciesError
  } = useGetPokemonSpeciesQuery({ url: pokeDetails?.species?.url || '' });

  //pokemon abilties endpoint
  const {
    data: pokeAbilities,
    isLoading: isLoadingAbilities,
    isFetching: isFetchingAbilities,
    isError: isErrorAbilities
  } = useGetPokemonAbilityQuery({ url: pokemonAbilitiesUrl || '' });

  //pokemon type endpoint
  const {
    data: pokemonTypes,
    isLoading: isTypesLoading,
    isFetching: isTypesFetching,
    isError: isTypesError
  } = useGetPokemonTypeQuery({ pokeType: pokemonTypesName || '' });

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

  const getAbilitiesUrl = useCallback(
    (abilityUrl?: string) => {
      dispatch(pokemonPayloadAction.getPokemonAbilitiesUrl(abilityUrl));
    },
    [dispatch]
  );

  const getPokemonTypes = useCallback(
    (pokeType?: string) => {
      dispatch(pokemonPayloadAction.getPokemonType(pokeType));
    },
    [dispatch]
  );

  return {
    //PokemonData
    pokeDetails,
    isPokemonDetailsLoading,
    isPokemonDetailFetching,
    pokeDetailsError,
    pokemonDetailsStatusError,

    //Pokemon Species Data
    pokeSpecies,
    isPokeSpeciesFetching,
    isPokeSpeciesLoading,
    pokeSpeciesError,

    //pokemon abilities data
    pokeAbilities,
    isLoadingAbilities,
    isFetchingAbilities,
    isErrorAbilities,

    //pokemon types data
    pokemonTypes,
    isTypesLoading,
    isTypesFetching,
    isTypesError,

    //PokemonGrowthData
    // pokeGrowth,
    // isPokeGrowthFetching,
    // isPokeGrowthLoading,
    // pokeGrowthError,
    //========Actions and value =========
    pokemonName,
    getPokemonName,
    getPokemonUrl,
    getAbilitiesUrl,
    getPokemonTypes
  };
};
