import { modules } from 'modules';
import { useAppSelector } from './use-app-selector';
import { useAppDispatch } from './use-app-dispatch';
import { useCallback, useMemo } from 'react';

const { useGetPokemonDetailsQuery, useGetPokemonSpeciesQuery } =
  modules.pokemonModule;

const { actions: pokemonPayloadAction, selectors: pokemonPayloadSelector } =
  modules.apiPayload;

export const usePokemonPayload = () => {
  const dispatch = useAppDispatch();
  const pokemonName = useAppSelector(
    pokemonPayloadSelector.pokemonNameSelector
  );

  //pokemon endpoints
  const {
    data: pokeDetails,
    isLoading,
    isFetching,
    isError: pokeDetailsError
  } = useGetPokemonDetailsQuery({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName || 'bulbasaur'}/`
  });

  //pokemon species endpoint
  const {
    data: pokeSpecies,
    isLoading: isPokeSpeciesLoading,
    isFetching: isPokeSpeciesFetching,
    isError: pokeSpeciesError
  } = useGetPokemonSpeciesQuery({ url: pokeDetails?.species?.url });

  const pokemonSprite = useMemo(
    () => pokeDetails?.sprites?.other?.['official-artwork']?.front_default,
    [pokeDetails?.sprites?.other]
  );

  const isLegendaryPokemon = useMemo(
    () => pokeSpecies?.is_legendary,
    [pokeSpecies?.is_legendary]
  );

  const isMythicalPokemon = useMemo(
    () => pokeSpecies?.is_mythical,
    [pokeSpecies?.is_mythical]
  );

  const pokeSpeciesFlavorText = useMemo(
    () =>
      pokeSpecies?.flavor_text_entries?.filter((flavorText, index) => {
        return (
          //get the latest description only and language english
          flavorText?.language?.name === 'en' &&
          (flavorText?.version?.name === 'red' ||
            flavorText?.version?.name === 'firered' ||
            flavorText?.version?.name === 'crystal' ||
            flavorText?.version?.name === 'soulsilver' ||
            flavorText?.version?.name === 'emerald' ||
            flavorText?.version?.name === 'omega-ruby' ||
            flavorText?.version?.name === 'black' ||
            flavorText?.version?.name === 'x' ||
            flavorText?.version?.name === 'sun' ||
            flavorText?.version?.name === 'sword' ||
            flavorText?.version?.name === 'scarlet')
        );
      }),
    [pokeSpecies?.flavor_text_entries]
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
    pokemonSprite,
    isLoading,
    isFetching,
    pokeDetailsError,
    //Pokemon Species Data
    pokeSpecies,
    pokeSpeciesFlavorText,
    isLegendaryPokemon,
    isMythicalPokemon,
    isPokeSpeciesFetching,
    isPokeSpeciesLoading,
    pokeSpeciesError,
    //========Actions and value =========
    pokemonName,
    getPokemonName
  };
};
